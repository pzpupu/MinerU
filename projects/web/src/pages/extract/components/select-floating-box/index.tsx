import { useEffect, useState } from "react";
import styles from "./index.module.scss";


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

const SelectFloatingBox: React.FC<{ htmlRef?: React.RefObject<HTMLDivElement>, onMark?: (color: string) => void }> = ({ htmlRef, onMark }) => {

    const [selection, setSelection] = useState<{
        text: string;
        range?: Range;
        position: { x: number; y: number } | null;
    }>({
        text: "",
        range: undefined,
        position: null,
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
            const selectedText = selection.toString().trim();

            if (selectedText && htmlRef?.current.contains(selection.anchorNode)) {
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

                console.log('selected=> ', selection);

                // 设置悬浮菜单的位置
                setMarkMenuStyle({
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
                setMarkMenuStyle(prev => ({ ...prev, display: 'none' }));
            }
        };

        document.addEventListener("mouseup", handleSelection);
        return () => {
            document.removeEventListener("mouseup", handleSelection);
        };
    }, []);

    // 处理高亮操作
    const handleMark = (color: string) => {
        if (selection.text && selection.range && onMark) {
            console.log('onMark=> ', window.getSelection());
            onMark(color);
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

