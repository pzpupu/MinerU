import { useEffect, useState } from "react";
import styles from "./index.module.scss";
import { notification } from "antd";

// 定义高亮菜单样式类型
interface MarkMenuStyle {
    position: 'fixed' | 'absolute' | 'relative';
    top: string;
    left: string;
    display: string;
    zIndex: number;
}

// 定义标记颜色选项
const MARK_COLORS = [
    { color: "#F44336", bgColor: "#F4433633", name: "题目" },
    { color: "#4CAF50", bgColor: "#4CAF5033", name: "解析" },
    { color: "#2196F3", bgColor: "#2196F333", name: "答案" },
];

// 定义Markdown位置信息接口
export interface MarkdownPosition {
    startKey: string;
    startLine: number;
    startColumn: number;
    startOffset: number;
    endKey: string;
    endLine: number;
    endColumn: number;
    endOffset: number;
}

// 定义选择信息接口
export interface SelectionInfo {
    range?: Range;
    // 存储选择范围内的所有Markdown段落信息
    markdownPosition?: MarkdownPosition;
}

const SelectFloatingBox: React.FC<{
    htmlRef?: React.RefObject<HTMLDivElement>,
    onMark?: (color: string, markdownPosition: MarkdownPosition) => void
}> = ({ htmlRef, onMark }) => {

    const [selection, setSelection] = useState<SelectionInfo>({
        range: undefined,
        markdownPosition: undefined
    });

    const [markMenuStyle, setMarkMenuStyle] = useState<MarkMenuStyle>({
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
            if (!selection || selection.isCollapsed || !htmlRef?.current) {
                setMarkMenuStyle(prev => ({ ...prev, display: 'none' }));
                return;
            }

            const range = selection.getRangeAt(0);

            if (htmlRef?.current.contains(selection.anchorNode)) {
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

                console.log('handleSelection=> ',range,"selectedText=>",range.startContainer.textContent?.slice(range.startOffset, range.endOffset));

                // 获取选择范围内的Markdown段落
                if (!selection || selection.rangeCount === 0) return [];

                const mdContainer = document.getElementById("preview-container");
                const position: MarkdownPosition = {
                    startKey: '',
                    startLine: 0,
                    startColumn: 0,
                    startOffset: 0,
                    endKey: '',
                    endLine: 0,
                    endColumn: 0,
                    endOffset: 0,
                };

                // startContainer向上遍历，直到找到commonAncestorContainer的子元素
                let startElement = range.startContainer as HTMLElement;
                while (startElement.parentElement != mdContainer) {
                    startElement = startElement.parentElement!;
                }

                console.log('startElement=> ', startElement);
                if (startElement.dataset && startElement.dataset.key) {
                    position.startKey = startElement.dataset.key || '';
                    position.startLine = parseInt(startElement.dataset.startLine || '0');
                    // position.startColumn = parseInt(startElement.dataset.startColumn || '0') + range.startOffset;
                    position.startColumn = range.startOffset;
                    position.startOffset = parseInt(startElement.dataset.startOffset || '0');
                } else {
                    notification.error({
                        message: "无法从当前开始元素获取位置信息",
                        description: "请选择其它非公式内容",
                        placement: "bottomRight",
                        showProgress: true,
                        duration: 32,
                    });
                    return;
                }

                let endElement = range.endContainer as HTMLElement;
                while (endElement.parentElement != mdContainer) {
                    endElement = endElement.parentElement!;
                }

                console.log('endElement=> ', endElement);

                if (endElement.dataset) {
                    position.endKey = endElement.dataset.key || '';
                    position.endLine = parseInt(endElement.dataset.endLine || '0');
                    // position.endColumn = parseInt(endElement.dataset.endColumn || '0') ;
                    position.endColumn = range.endOffset;
                    position.endOffset = parseInt(endElement.dataset.endOffset || '0');
                } else {
                    notification.error({
                        message: "无法从当前结束元素获取位置信息",
                        description: "请选择其它非公式内容",
                        placement: "bottomRight",
                        showProgress: true,
                    });
                }

                console.log('position=> ', position);

                // 设置悬浮菜单的位置
                setMarkMenuStyle({
                    position: 'fixed',
                    top: `${Math.max(rect.top - 50, 10)}px`, // 在选中文本上方显示，确保不超出顶部
                    left: `${leftPos}px`,
                    display: 'block',
                    zIndex: 1050,
                });

                setSelection({
                    range: range,
                    markdownPosition: position
                });

            } else {
                setMarkMenuStyle(prev => ({ ...prev, display: 'none' }));
            }
        };

        document.addEventListener("mouseup", handleSelection);
        return () => {
            document.removeEventListener("mouseup", handleSelection);
        };
    }, [htmlRef]);

    // 处理高亮操作
    const handleMark = (color: string) => {
        if (selection.markdownPosition && selection.range && onMark) {
            console.log('onMark=> ', selection);
            onMark(color, selection.markdownPosition);
        }
    };

    /* 直接渲染高亮选择器，通过CSS控制显示/隐藏 */
    return <div
        className={styles.markMenu}
        style={markMenuStyle}
    >
        <div className="flex p-2 bg-white rounded-lg shadow-lg">
            {MARK_COLORS.map((item) => (
                <div
                    key={item.name}
                    className="mx-1 px-2 py-1 rounded cursor-pointer hover:opacity-80 transition-all duration-200 flex items-center"
                    style={{ backgroundColor: item.bgColor, border: `1px solid ${item.color}` }}
                    onClick={() => handleMark(item.bgColor)}
                >
                    <span style={{ color: item.color, fontWeight: 'bold' }}>{item.name}</span>
                </div>
            ))}
        </div>
    </div>;
};

export default SelectFloatingBox;

