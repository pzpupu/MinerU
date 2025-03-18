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
    startLine: number;
    startColumn: number;
    startOffset: number;
    endLine: number;
    endColumn: number;
    endOffset: number;
}

export interface DeleteMarkInfo {
    metaId: string;
    startLine: number;
    startColumn: number;
    startOffset: number;
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
    onMark?: (color: string, markdownPosition: MarkdownPosition) => void,
    onDeleteMark?: (deleteMarkInfo: DeleteMarkInfo) => void
}> = ({ htmlRef, onMark, onDeleteMark }) => {

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

    // 上级标记的DIV
    const [markDiv, setMarkDiv] = useState<HTMLDivElement | null>(null);

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

                const selection = window.getSelection();
                console.log('handleSelection=> ', selection, range, "ssliceText=>", range.startContainer.textContent?.slice(range.startOffset, range.endOffset));

                const mdContainer = document.getElementById("preview-container");

                // commonAncestorContainer向上遍历，尝试寻找div标签有meta-id属性的元素，直到mdContainer元素为止
                let parentMarkElement = range.commonAncestorContainer as HTMLElement;
                while (parentMarkElement !== mdContainer && parentMarkElement.tagName !== 'DIV') {
                    parentMarkElement = parentMarkElement.parentElement!;
                }

                if (parentMarkElement.tagName === 'DIV' && parentMarkElement.getAttribute('meta-id')) {
                    setMarkDiv(parentMarkElement as HTMLDivElement);
                    console.log('MarkDiv=> ', parentMarkElement, parentMarkElement.getAttribute('meta-id'));
                }

                // 获取选择范围内的Markdown段落
                if (!selection || selection.rangeCount === 0) return [];


                const position: MarkdownPosition = {
                    startLine: 0,
                    startColumn: -1,
                    startOffset: 0,
                    endLine: 0,
                    endColumn: -1,
                    endOffset: 0,
                };

                // startContainer向上遍历，直到找到key
                let startElement = range.startContainer as HTMLElement;
                // 先开始向前遍历，直到找到有data-start-line属性的元素，如果找不到，则继续向上遍历，直到mdContainer元素为止
                while (!startElement?.dataset || !startElement?.dataset.startLine) {
                    // while (startElement.parentElement != mdContainer) {
                    // 选择文本在span标签中后，则需要将startColumn设置为span标签的endColumn+1 
                    if (startElement.nextElementSibling) {
                        startElement = startElement.nextElementSibling as HTMLElement;
                        if (startElement?.dataset.startColumn) {
                            position.startColumn = parseInt(startElement.dataset.startColumn || '0') - ((range.startContainer?.textContent?.length || 0) - range.startOffset) - 1;
                        }
                    } else {
                        startElement = startElement.parentElement!;
                    }
                }

                console.log('startElement=> ', startElement);

                if (startElement.dataset && startElement.dataset.startLine && startElement.dataset.startColumn) {
                    // 如果是h1-h6标签，则startColumn需要+2
                    if (position.startColumn === -1) {
                        if (startElement.tagName === 'H1' || startElement.tagName === 'H2' || startElement.tagName === 'H3' || startElement.tagName === 'H4' || startElement.tagName === 'H5' || startElement.tagName === 'H6') {
                            position.startColumn = range.startOffset + 2;
                        } else if (startElement.tagName === 'SPAN') {
                            position.startColumn = parseInt(startElement.dataset.startColumn || '0') - 1;
                        } else {
                            position.startColumn = range.startOffset;
                        }
                    }

                    position.startLine = parseInt(startElement.dataset.startLine || '0');
                    // position.startColumn = parseInt(startElement.dataset.startColumn || '0') + range.startOffset;
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
                // 先开始向前遍历，直到找到有data-start-line属性的元素，如果找不到，则继续向上遍历，直到mdContainer元素为止
                while (!endElement?.dataset || !endElement?.dataset.endLine) {
                    // while (endElement.parentElement != mdContainer) {
                    if (endElement.previousElementSibling) {
                        endElement = endElement.previousElementSibling as HTMLElement;
                        if (endElement?.dataset.endColumn) {
                            position.endColumn = parseInt(endElement.dataset.endColumn || '0') + range.endOffset - 1;
                        }
                    } else {
                        endElement = endElement.parentElement!;
                    }
                }
                console.log('endElement=> ', endElement);

                if (endElement.dataset && endElement.dataset.endLine && endElement.dataset.endColumn) {
                    if (position.endColumn === -1) {
                        position.endColumn = parseInt(endElement.dataset.startColumn || '0') + range.endOffset -1;
                    }

                    position.endLine = parseInt(endElement.dataset.endLine || '0');
                    // position.endColumn = parseInt(endElement.dataset.endColumn || '0') ;
                    position.endOffset = parseInt(endElement.dataset.endOffset || '0');
                } else {
                    notification.error({
                        message: "无法从当前结束元素获取位置信息",
                        description: "请选择其它非公式内容",
                        placement: "bottomRight",
                        showProgress: true,
                    });
                    // }
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

    // 处理删除操作
    const handleDeleteMark = () => {
        if (markDiv) {
            const metaId = markDiv.getAttribute('meta-id') || '';
            const dataset = markDiv.dataset;
            const deleteMarkInfo: DeleteMarkInfo = {
                metaId: metaId,
                startLine: parseInt(dataset?.startLine || '0'),
                startColumn: parseInt(dataset?.startColumn || '0'),
                startOffset: parseInt(dataset?.startOffset || '0'),
                endLine: parseInt(dataset?.endLine || '0'),
                endColumn: parseInt(dataset?.endColumn || '0'),
                endOffset: parseInt(dataset?.endOffset || '0'),
            };
            onDeleteMark?.(deleteMarkInfo);
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
            {/* markDiv存在时，显示删除按钮 */}
            {markDiv && (
                <div className="ml-2 px-2 py-1 rounded cursor-pointer hover:opacity-80 transition-all duration-200 flex items-center"
                    onClick={() => handleDeleteMark()}>
                    <span style={{ color: '#F44336', fontWeight: 'bold' }}>删除</span>
                </div>
            )}
        </div>
    </div>;
};

export default SelectFloatingBox;

