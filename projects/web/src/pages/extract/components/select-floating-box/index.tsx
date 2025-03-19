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
    // startOffset: number;
    endLine: number;
    endColumn: number;
    // endOffset: number;
}

export interface DeleteMarkInfo {
    metaId: string;
    startLine: number;
    startColumn: number;
    // startOffset: number;
    endLine: number;
    endColumn: number;
    // endOffset: number;
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
                    startColumn: 0,
                    // startOffset: 0,
                    endLine: 0,
                    endColumn: 0,
                    // endOffset: 0,
                };

                // 查找起始位置元素
                let startElement = range.startContainer as HTMLElement;
                // 是否在公式元素内部
                let isStartInside = false;

                // 向上查找，直到找到包含必要位置数据的元素
                while (startElement && (!startElement.dataset || !startElement.dataset.startLine)) {
                    // 如果存在兄弟元素并且它有位置数据，优先使用兄弟元素
                    if (startElement.previousElementSibling &&
                        (startElement.previousElementSibling as HTMLElement).dataset?.startLine) {
                        startElement = startElement.previousElementSibling as HTMLElement;
                        isStartInside = false;
                        break;
                    }

                    // if (startElement.nextElementSibling &&
                    //     (startElement.nextElementSibling as HTMLElement).dataset?.startLine) {
                    //     startElement = startElement.nextElementSibling as HTMLElement;
                    //     break;
                    // }

                    // 继续向上查找
                    if (!startElement.parentElement) break;
                    startElement = startElement.parentElement;
                    if (startElement.tagName === 'SPAN' && startElement.classList.contains('katex')) {
                        isStartInside = true;
                    }
                }

                console.log('找到的startElement=> ', startElement, isStartInside);

                try {
                    // 获取起始位置信息
                    if (startElement?.dataset?.startLine) {
                        position.startLine = parseInt(startElement.dataset.startLine || '0');

                        // 根据不同的标记类型调整列偏移
                        let offset = 0;

                        if (range.startContainer.nodeType === Node.TEXT_NODE) {
                            if (startElement.tagName.match(/^H[1-6]$/)) {
                                // 针对Markdown标题的# 数量
                                const headingLevel = parseInt(startElement.tagName.substring(1));
                                offset += headingLevel;
                                offset += parseInt(startElement.dataset.startColumn || '0');
                                offset += range.startOffset;
                            } else {
                                // 如果开始元素是段落元素与文本节点
                                offset = parseInt(startElement.dataset.startColumn || '0') + range.startOffset;
                                offset -= 1;
                            }
                        }

                        if (startElement.classList.contains('katex')) {
                            // 根据range.startContainer来判断是否在公式元素中，在公式元素中，则根据公式元素的dataset中的startColumn，否则使用endColumn

                            // 根据位置关系选择使用startColumn或endColumn
                            if (isStartInside) {
                                // 如果选择开始于公式内部，使用startColumn
                                offset = parseInt(startElement.dataset.startColumn || '0') - 1;
                            } else {
                                // 如果选择不在公式内部开始，使用endColumn
                                offset = parseInt(startElement.dataset.endColumn || '0');
                                if (range.startContainer.nodeType === Node.TEXT_NODE) {
                                    offset += range.startOffset - 1;
                                }
                            }
                        }

                        // 如果是公式元素，确保标记能够覆盖整个公式，然后需要根据公式元素在range.startContainer兄弟元素的位置的startColumn来计算
                        // if (startElement.classList.contains('katex')) {
                        //     // 如果开始元素是公式元素，则根据公式元素的dataset中的startColumn和endColumn来计算
                        //     const katexStartColumn = parseInt(startElement.dataset.startColumn || '0');
                        //     const katexEndColumn = parseInt(startElement.dataset.endColumn || '0');
                        //     if (isStartAbove) {
                        //         position.startColumn = katexStartColumn + baseColumn;
                        //     } else {
                        //         position.startColumn = katexEndColumn + 1;
                        //     }
                        // }

                        position.startColumn = offset;
                        // position.startOffset = parseInt(startElement.dataset.startOffset || '0') + offset;
                    }
                }
                catch (error) {
                    notification.error({
                        message: "无法精确定位选择区域的起始位置",
                        description: "请尝试重新选择文本",
                        placement: "bottomRight",
                        duration: 3,
                    });
                    return;
                }


                // 查找结束位置元素
                let endElement = range.endContainer as HTMLElement;
                // 是否在公式元素内部
                let isEndInside = false;

                // 向上查找，直到找到包含必要位置数据的元素
                while (endElement && (!endElement.dataset || !endElement.dataset.endLine)) {
                    // 如果存在兄弟元素并且它有位置数据，优先使用兄弟元素
                    // if (endElement.nextElementSibling &&
                    //     (endElement.nextElementSibling as HTMLElement).dataset?.endLine) {
                    //     endElement = endElement.nextElementSibling as HTMLElement;
                    //     break;
                    // }

                    if (endElement.previousElementSibling &&
                        (endElement.previousElementSibling as HTMLElement).dataset?.endLine) {
                        endElement = endElement.previousElementSibling as HTMLElement;
                        isEndInside = false;
                        break;
                    }

                    // 继续向上查找
                    if (!endElement.parentElement) break;
                    endElement = endElement.parentElement;
                    if (endElement.tagName === 'SPAN' && endElement.classList.contains('katex')) {
                        isEndInside = true;
                    }
                }

                console.log('找到的endElement=> ', endElement, isEndInside);

                // 获取结束位置信息
                if (endElement?.dataset?.endLine) {
                    position.endLine = parseInt(endElement.dataset.endLine || '0');

                    // 根据不同的标记类型调整列偏移
                    let offset = 0;
                    if (range.endContainer.nodeType === Node.TEXT_NODE) {
                        if (isEndInside) {
                            offset = range.endOffset;
                        } else {
                            // 如果选择范围在位置元素的右侧，则使用startColumn+range.endOffset
                            offset = parseInt(endElement.dataset.startColumn || '0') + range.endOffset;
                        }

                        // 如果结束元素是Markdown标题，则根据标题的# 数量来调整偏移
                        if (startElement.tagName.match(/^H[1-6]$/)) {
                            // 针对Markdown标题的# 数量
                            const headingLevel = parseInt(startElement.tagName.substring(1)) ;
                            offset += headingLevel +1;
                        }

                        // 修正一个字符的偏差
                        offset -= 1;

                    }

                    if (endElement.classList.contains('katex')) {
                        // 如果结束元素是公式元素，则根据公式元素的dataset中的startColumn和endColumn来计算
                        if (isEndInside) {
                            offset = parseInt(endElement.dataset.endColumn || '0');
                        } else {
                            offset = parseInt(endElement.dataset.endColumn || '0');
                            if (range.endContainer.nodeType === Node.TEXT_NODE) {
                                offset += range.endOffset - 1;
                            }
                        }
                        // if (range.endContainer.nodeType === Node.TEXT_NODE) {
                        //     offset = range.endOffset;
                        //     // 修正一个字符的偏差
                        //     offset -= 1;
                        // }
                    }

                    position.endColumn = offset;
                    // position.endOffset = parseInt(endElement.dataset.endOffset || '0') + offset;
                } else {
                    notification.error({
                        message: "无法精确定位选择区域的结束位置",
                        description: "请尝试重新选择文本",
                        placement: "bottomRight",
                        duration: 3,
                    });
                    return;
                }


                // 如果选择是在一行内，只是纯文本
                if (range.startContainer == range.endContainer && range.endContainer.nodeType === Node.TEXT_NODE && startElement == endElement) {
                    position.startColumn = parseInt(startElement.dataset.startColumn || '0') + range.startOffset;
                    position.endColumn = range.endOffset;
                    position.startLine = parseInt(startElement.dataset.startLine || '0');
                    position.endLine = parseInt(endElement.dataset.endLine || '0');

                    if (startElement.tagName.match(/^H[1-6]$/)) {
                        // 针对Markdown标题的# 数量
                        const headingLevel = parseInt(startElement.tagName.substring(1)) ;
                        position.startColumn += headingLevel;
                        position.endColumn += headingLevel +1;
                    }
                }


                console.log('计算得到的position=> ', position);

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
                // startOffset: parseInt(dataset?.startOffset || '0'),
                endLine: parseInt(dataset?.endLine || '0'),
                endColumn: parseInt(dataset?.endColumn || '0'),
                // endOffset: parseInt(dataset?.endOffset || '0'),
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

