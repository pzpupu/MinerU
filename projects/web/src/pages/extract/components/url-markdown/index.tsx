import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import remarkGfm from "remark-gfm";
import styles from "./index.module.scss";
import { useEffect, useRef, useState } from "react";
import cls from "classnames";

// 定义高亮颜色选项
const HIGHLIGHT_COLORS = [
  { color: "#FFEB3B", bgColor: "#FFEB3B33", name: "黄色" },
  { color: "#4CAF50", bgColor: "#4CAF5033", name: "绿色" },
  { color: "#2196F3", bgColor: "#2196F333", name: "蓝色" },
  { color: "#F44336", bgColor: "#F4433633", name: "红色" },
  { color: "#9C27B0", bgColor: "#9C27B033", name: "紫色" },
];

interface IMarkdownProps {
  content?: string;
  markdownClass?: string;
  markdownId?: string;
  onHighlight?: (text: string, range: { start: number; end: number }, color: string) => void;
}

// 定义高亮菜单样式类型
interface HighlightMenuStyle {
  position: 'fixed' | 'absolute' | 'relative';
  top: string;
  left: string;
  display: string;
  zIndex: number;
}

const LazyUrlMarkdown: React.FC<IMarkdownProps> = ({
  content,
  markdownClass = "",
  onHighlight,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [selection, setSelection] = useState<{
    text: string;
    range?: Range;
    position: { x: number; y: number } | null;
  }>({
    text: "",
    range: undefined,
    position: null,
  });

  const [highlightMenuStyle, setHighlightMenuStyle] = useState<HighlightMenuStyle>({
    position: 'fixed',
    top: '0px',
    left: '0px',
    display: 'none',
    zIndex: 1050,
  });

  // 处理文本选择事件
  useEffect(() => {
    const handleSelection = () => {
      const selection = window.getSelection();
      if (!selection || selection.isCollapsed || !ref.current) {
        setHighlightMenuStyle(prev => ({ ...prev, display: 'none' }));
        return;
      }

      const range = selection.getRangeAt(0);
      const selectedText = selection.toString().trim();

      if (selectedText && ref.current.contains(selection.anchorNode)) {
        // 获取选择文本的位置，用于显示悬浮框
        const rect = range.getBoundingClientRect();

        // 计算菜单宽度（估计值）
        const menuWidth = 200;

        // 确保菜单不会超出屏幕边界
        let leftPos = rect.left + rect.width / 2 - menuWidth / 2;
        if (leftPos < 10) leftPos = 10;
        if (leftPos + menuWidth > window.innerWidth - 10) {
          leftPos = window.innerWidth - menuWidth - 10;
        }

        // 设置悬浮菜单的位置
        setHighlightMenuStyle({
          position: 'fixed',
          top: `${Math.max(rect.top - 50, 10)}px`, // 在选中文本上方显示，确保不超出顶部
          left: `${leftPos}px`,
          display: 'block',
          zIndex: 1050,
        });

        setSelection({
          text: selectedText,
          range: range,
          position: {
            x: rect.left + rect.width / 2,
            y: rect.top,
          },
        });
      } else {
        setHighlightMenuStyle(prev => ({ ...prev, display: 'none' }));
      }
    };

    document.addEventListener("mouseup", handleSelection);
    return () => {
      document.removeEventListener("mouseup", handleSelection);
    };
  }, []);

  // 处理高亮操作
  const handleHighlight = (color: string) => {
    if (selection.text && selection.range && onHighlight) {
      // 计算选中文本在整个内容中的位置
      const fullText = content || "";
      const selectionText = selection.text;

      console.log('selection=> ', selection);
      // 简单实现，实际应用中可能需要更复杂的算法来确定准确位置
      const startPos = fullText.indexOf(selectionText);
      if (startPos !== -1) {
        onHighlight(selectionText, {
          start: startPos,
          end: startPos + selectionText.length
        }, color);
      }
    }
    setHighlightMenuStyle(prev => ({ ...prev, display: 'none' }));
  };

  console.log('LazyUrlMarkdown=> ', {allMdContentWithAnchor: content});

  return (
    <div ref={ref} className="min-h-[100px]">
      <div className={styles.mdViewerWrap}>
        <ReactMarkdown
          className={cls("bg-white text-[0.75rem]", markdownClass)}
          remarkPlugins={[
            remarkMath,
            [remarkGfm, { singleTilde: false }, { strict: "ignore" }],
          ]}
          rehypePlugins={[[rehypeKatex, { strict: "ignore" }], rehypeRaw]}
          components={{
            code(props) {
              const { children, className, node, ...rest } = props;
              const match = /language-(\w+)/.exec(className || "");
              return match ? (
                <SyntaxHighlighter
                  PreTag="div"
                  className="rounded-md"
                  // eslint-disable-next-line react/no-children-prop
                  children={String(children).replace(/\n$/, "")}
                  language={match[1]}
                />
              ) : (
                <code
                  {...rest}
                  className="p-4 my-2 bg-[#f6f8fa] !bg-black rounded-md block"
                >
                  {children}
                </code>
              );
            },
          }}
        >
          {content}
        </ReactMarkdown>

        {/* 直接渲染高亮选择器，通过CSS控制显示/隐藏 */}
        <div
          className={styles.highlightMenu}
          style={highlightMenuStyle}
        >
          <div className="flex flex-col p-3 bg-white rounded-lg shadow-lg">
            <div className="text-xs font-medium text-gray-600 mb-2 text-center">选择高亮颜色</div>
            <div className="flex space-x-4 justify-center">
              {HIGHLIGHT_COLORS.map((item) => (
                <div
                  key={item.name}
                  className="w-8 h-8 rounded-full cursor-pointer flex items-center justify-center hover:opacity-80 transition-all duration-200 transform hover:scale-110"
                  style={{ backgroundColor: item.bgColor, border: `2px solid ${item.color}` }}
                  onClick={() => handleHighlight(item.color)}
                  title={item.name}
                >
                  <span style={{ color: item.color, fontSize: '16px', fontWeight: 'bold' }}>✓</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LazyUrlMarkdown;
