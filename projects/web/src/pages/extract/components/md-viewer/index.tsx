import { useEffect, useRef, useState } from "react";
import { message, notification, Tooltip } from "antd";

import cls from "classnames";
import styles from "./index.module.scss";
import { useDeepCompareEffect, useHover } from "ahooks";
import IconFont from "@/components/icon-font";
import { downloadFileUseAScript } from "@/utils/download";
import { MD_DRIVE_PDF } from "@/constant/event";
import { useIntl } from "react-intl";
import LazyUrlMarkdown from "../url-markdown";
import exitFullScreenSvg from "@/assets/pdf/exitFullScreen.svg";
import fullScreenSvg from "@/assets/pdf/fullScreen.svg";
import { MD_PREVIEW_TYPE } from "@/types/extract-task-type";
import _, { debounce } from "lodash";
import { TaskIdResItem } from "@/api/extract";
import useMdStore from "@/store/mdStore";
import CodeMirror from "@/components/code-mirror";
import { useParams } from "react-router-dom";
import SaveStatus, { SaveStatusRef } from "@/components/SaveStatus";
import { DeleteMarkInfo, MarkdownPosition } from "../select-floating-box";

interface IMdViewerProps {
  md?: string;
  className?: string;
  filename?: string;
  url?: string;
  taskInfo: TaskIdResItem;
  curPage: number;
  fullScreen?: boolean;
  setFullScreen?: (value?: boolean) => void;
}

const MdViewer: React.FC<IMdViewerProps> = ({
  fullScreen,
  setFullScreen,
  taskInfo,
  className = "",
  curPage,
}) => {
  const mdViewerPef = useRef<HTMLDivElement>(null);
  const url = taskInfo?.fullMdLink || "";
  // const containerRef = useRef<HTMLDivElement>(null);
  // const isHovering = useHover(containerRef);
  const { formatMessage } = useIntl();
  const [displayType, setDisplayType] = useState(MD_PREVIEW_TYPE.preview);
  const params = useParams();
  const {
    setAllMdContent,
    allMdContent,
    setMdUrlArr,
    setFullMdLink,
    mdContents,
    updateMdContent,
    updateMdContents,
    updateFullMdContent,
  } = useMdStore();
  const [lineWrap, setLineWrap] = useState(false);

  const threshold = 562 - 427;
  const statusRef = useRef<SaveStatusRef>(null);

  const [editable, setEditable] = useState(false);

  const menuList = [
    {
      name: formatMessage({ id: "extractor.markdown.preview" }),
      code: MD_PREVIEW_TYPE.preview,
    },
    {
      name: formatMessage({ id: "extractor.markdown.code" }),
      code: MD_PREVIEW_TYPE.code,
    },
  ];

  const getVisibleFromType = (str: string, type: string) => {
    return str === type
      ? "relative w-full h-full"
      : "w-0 h-0 overflow-hidden hidden";
  };

  // const pushMdViewerScroll = (scrollType?: "instant" | "smooth") => {
  //   const container = document.getElementById(`md-container`);
  //   // md渲染的时候用一个元素包括anchor
  //   const element =
  //     displayType === MD_PREVIEW_TYPE.preview
  //       ? document.getElementById(`md-anchor-${curPage - 1}`)?.parentElement
  //       : document.getElementById(`code-${curPage - 1}`);
  //   if (element && container) {
  //     container.scrollTo({
  //       top: element.offsetTop - 124,
  //       behavior: scrollType || "smooth",
  //     });
  //   }
  // };

  // useEffect(() => {
  //   if (isHovering) return;
  //   pushMdViewerScroll();
  // }, [curPage, isHovering]);

  // useEffect(() => {
  //   pushMdViewerScroll("instant");
  // }, [displayType]);

  // useEffect(() => {
  //   if (!isHovering) return;
  //   const handleScroll = () => {
  //     if (!containerRef.current) return;

  //     taskInfo?.markdownUrl?.forEach((page, index) => {
  //       const element =
  //         displayType === MD_PREVIEW_TYPE.preview
  //           ? document.getElementById(`md-anchor-${index}`)?.parentElement
  //           : document.getElementById(`code-${index}`);

  //       if (element) {
  //         const rect = element.getBoundingClientRect();

  //         if (rect.top <= threshold) {
  //           document.dispatchEvent(
  //             new CustomEvent(MD_DRIVE_PDF, {
  //               detail: index,
  //             })
  //           );
  //         }
  //       }
  //     });
  //   };

  //   const container = containerRef.current;
  //   if (container) {
  //     container.addEventListener("scroll", handleScroll);
  //   }

  //   return () => {
  //     if (container) {
  //       container?.removeEventListener("scroll", handleScroll);
  //     }
  //   };
  // }, [taskInfo, isHovering, displayType]);

  useDeepCompareEffect(() => {
    if (taskInfo?.fullMdLink) {
      console.log('taskInfo?.fullMdLink=> ', taskInfo?.fullMdLink);
      setEditable(false);
      // setMdUrlArr(taskInfo?.markdownUrl);
      setAllMdContent("");
      setFullMdLink(taskInfo?.fullMdLink).finally(() => {
        setEditable(true);
      });
    }
    statusRef?.current?.reset();
  }, [taskInfo?.markdownUrl, params?.jobID]);

  const handleContentChange = (val: string) => {
    setAllMdContent(val);
    statusRef?.current?.triggerSave();
    if (taskInfo?.file_key) {
      updateFullMdContent(taskInfo.file_key!, val, false);
    }
  };

  // 处理文本高亮
  const handleMark = (color: string, markdownPosition: MarkdownPosition) => {
    if (taskInfo?.file_key && markdownPosition) {
      console.log('handleHighlight=> ', window.getSelection(), 'markdownPosition=>', markdownPosition);

      try {
        // 将内容分割成行
        let lines = allMdContent.split('\n');

        // 确保行号在有效范围内
        if (markdownPosition.startLine && markdownPosition.endLine &&
          markdownPosition.startLine <= lines.length &&
          markdownPosition.endLine <= lines.length) {

          const startLineIndex = markdownPosition.startLine - 1;
          const endLineIndex = markdownPosition.endLine - 1;

          // 处理单行段落
          if (startLineIndex === endLineIndex) {
            const line = lines[startLineIndex];

            const startCol = markdownPosition.startColumn;
            const endCol = markdownPosition.endColumn;
            // 在startCol指定位置插入"<div style="background-color:${color};">"高亮标记
            // 生成唯一id
            const uniqueId = `${startLineIndex}-${startCol}-${endCol}`;
            lines[startLineIndex] = `${line.substring(0, startCol)}\n\n<div style="background-color:${color};" meta-id="${uniqueId}">\n\n${line.substring(startCol, endCol)}\n\n</div meta-id="${uniqueId}">\n\n${line.substring(endCol)}`;
          } else {
            // 处理多行段落
            const startCol = markdownPosition.startColumn;
            const endCol = markdownPosition.endColumn;
            const uniqueId = `${startLineIndex}-${endLineIndex}-${startCol}-${endCol}`;

            // 处理第一行
            if (startLineIndex >= 0 && startLineIndex < lines.length) {
              const firstLine = lines[startLineIndex];
              if (startCol >= 0 && startCol <= firstLine.length) {
                // 添加高亮标记开始
                lines[startLineIndex] = firstLine.substring(0, startCol) +
                  `\n\n<div style="background-color:${color};" meta-id="${uniqueId}">\n\n` +
                  firstLine.substring(startCol);
              }
            }

            // 处理最后一行
            if (endLineIndex >= 0 && endLineIndex < lines.length) {
              const lastLine = lines[endLineIndex];
              if (endCol >= 0 && endCol <= lastLine.length) {
                // 添加高亮标记结束
                lines[endLineIndex] = lastLine.substring(0, endCol) +
                  `\n\n</div meta-id="${uniqueId}">\n\n` +
                  lastLine.substring(endCol);
              } else {
                // 不存范围内，则添加到最后一行
                lines[endLineIndex] = lastLine + `\n\n</div meta-id="${uniqueId}">\n\n`;
              }
            }
          }
        }
        const newMdContent = lines.join('\n');

        statusRef?.current?.triggerSave();
        setAllMdContent(newMdContent);
        updateFullMdContent(taskInfo.file_key!, newMdContent).then(() => {
          notification.success({
            message: "高亮成功",
            placement: "bottomRight",
            showProgress: true,
            duration: 2,
          });
        }).catch((error: Error) => {
          notification.error({
            message: "高亮更新失败",
            description: error.message,
            placement: "bottomRight",
            showProgress: true,
            duration: 2,
          });
        });
      } catch (error) {
        console.error("高亮处理错误:", error);
        notification.error({
          message: "高亮处理错误",
          description: (error as Error).message,
          placement: "bottomRight",
          showProgress: true,
          duration: 2,
        });
      }
    } else {
      notification.warning({
        message: "缺少位置信息",
        description: "无法确定文本在Markdown中的位置",
        placement: "bottomRight",
        showProgress: true,
        duration: 2,
      });
    }
  };

  // 处理删除高亮
  const handleDeleteMark = (deleteMarkInfo: DeleteMarkInfo) => {
    if (taskInfo?.file_key && deleteMarkInfo) {
      console.log('handleDeleteMark=> ', deleteMarkInfo);
      try {
        // 将内容分割成行
        let lines = allMdContent.split('\n');
        const startLineIndex = deleteMarkInfo.startLine - 1;
        const endLineIndex = deleteMarkInfo.endLine - 1;
        const uniqueId = deleteMarkInfo.metaId;

        // 处理单行段落
        if (startLineIndex === endLineIndex) {
          const line = lines[startLineIndex];
          // 删除高亮
          const regex = new RegExp(`<div style="background-color:.*?;" meta-id="${uniqueId}">|<\/div meta-id="${uniqueId}">`, 'g');
          lines[startLineIndex] = line.replace(regex, '');
        } else {
          // 处理多行段落
          // const startRegex = new RegExp(`<div style="background-color:.*?;" meta-id="${uniqueId}">`, 'g');
          // const endRegex = new RegExp(`</div meta-id="${uniqueId}">`, 'g');
          // lines[startLineIndex] = lines[startLineIndex].replace(startRegex, '');
          // lines[endLineIndex] = lines[endLineIndex].replace(endRegex, '');
          delete lines[endLineIndex];
          delete lines[startLineIndex];
        }

        const newMdContent = lines.join('\n');
        statusRef?.current?.triggerSave();
        updateFullMdContent(taskInfo.file_key!, newMdContent).then(() => {
          notification.success({
            message: "删除高亮成功",
            placement: "bottomRight",
            showProgress: true,
            duration: 2,
          });
        }).catch((error: Error) => {
          notification.error({
            message: "删除高亮失败",
            description: error.message,
            placement: "bottomRight",
            showProgress: true,
            duration: 2,
          });
        });
      } catch (error) {
        console.error("删除高亮处理错误:", error);
        notification.error({
          message: "删除高亮处理错误",
          description: (error as Error).message,
          placement: "bottomRight",
          showProgress: true,
          duration: 2,
        });
      }
    }
  };

  return (
    <div className={cls(className)} ref={mdViewerPef}>
      <div
        className={cls(
          "h-[49px] px-6  border-0 border-solid border-b-[1px] border-[#EBECF0] w-full pl-[24px] flex justify-between   items-center"
        )}
      >
        <ul className="p-1 list-none mb-0 inline-block rounded-sm mr-auto  bg-[#F4F5F9] select-none">
          {menuList.map((item) => (
            <li
              key={item.code}
              className={`mx-[0.125rem] px-2 leading-[25px] inline-block rounded-sm text-[14px] cursor-pointer  text-color ${displayType === item.code && "bg-white text-primary"
                }`}
              onClick={() => setDisplayType(item.code)}
            >
              {item.name}
            </li>
          ))}
        </ul>
        <SaveStatus ref={statusRef} />

        {displayType === "code" && (
          <>
            <Tooltip
              title={
                fullScreen
                  ? formatMessage({ id: "extractor.button.lineWrap" })
                  : formatMessage({
                    id: "extractor.button.lineWrap",
                  })
              }
            >
              <IconFont
                type="icon-line-wrap"
                className={cls(
                  "text-lg text-[#464a53] leading-0  ml-[1rem] cursor-pointer hover:bg-[#F4F5F9] p-1 rounded",
                  lineWrap && "!text-[#0D53DE]"
                )}
                onClick={() => setLineWrap?.(!lineWrap)}
              />
            </Tooltip>
            <span className="w-[1px] h-[0.75rem] bg-[#D7D8DD] mx-[1rem]"></span>
          </>
        )}
        <Tooltip
          title={
            fullScreen
              ? formatMessage({ id: "extractor.button.exitFullScreen" })
              : formatMessage({
                id: "extractor.button.fullScreen",
              })
          }
        >
          <span
            className="cursor-pointer w-[1.5rem] user-select-none flex items-center justify-center h-[1.5rem] hover:bg-[#F4F5F9] rounded "
            onClick={() => setFullScreen?.(!fullScreen)}
          >
            {!fullScreen ? (
              <img
                className=" w-[1.125rem] h-[1.125rem] "
                src={fullScreenSvg}
              />
            ) : (
              <img
                className=" w-[1.125rem] h-[1.125rem] "
                src={exitFullScreenSvg}
              />
            )}
          </span>
        </Tooltip>
        <span className="w-[1px] h-[0.75rem] bg-[#D7D8DD] ml-[1rem]"></span>
        <Tooltip title="重置markdown">
          <IconFont
            type="icon-line-wrap"
            className="text-lg text-[#464a53] leading-0  ml-[1rem] cursor-pointer hover:bg-[#F4F5F9] p-1 rounded"
            onClick={() => {
              setFullMdLink(taskInfo!.fullMdLink!.replace("filename=full.md", "filename=origin.md"));
            }}
          />
          <IconFont
            type="icon-xiazai"
            className="text-lg text-[#464a53] leading-0  ml-[1rem] cursor-pointer hover:bg-[#F4F5F9] p-1 rounded"
            onClick={() =>
              downloadFileUseAScript(
                url,
                `${_(taskInfo?.fileName).split(".").slice(0, -1).join(".")}.md`
              )
            }
          />
        </Tooltip>
      </div>
      <div
        className={cls(
          "bg-white !h-[calc(100%-60px)] px-6 py-8 overflow-auto w-full max-w-[100%]",
          styles.scrollBar
        )}
        id="md-container"
      // ref={containerRef}
      >
        <div
          className={cls(
            getVisibleFromType(displayType, MD_PREVIEW_TYPE.preview)
          )}
        >
          <LazyUrlMarkdown
            markdownClass={"relative"}
            content={allMdContent}
            onMark={handleMark}
            onDeleteMark={handleDeleteMark}
            taskInfo={taskInfo}
          />
        </div>
        <div
          className={cls(getVisibleFromType(displayType, MD_PREVIEW_TYPE.code))}
        >
          <div key={url} className="opacity-1 z-[-1]">
            <CodeMirror
              value={allMdContent}
              lineWrapping={lineWrap}
              onChange={_.debounce((val) => handleContentChange(val), 1000)}
              editable={editable}
              className="w-full h-full"
            />
          </div>

          {/* {taskInfo?.markdownUrl?.map((url: string, index: number) => {
            const md = mdContents[url]?.content || "";
            if (!md) return null;
            return (
              <div key={url} id={`code-${index}`} className="opacity-1 z-[-1]">
                <CodeMirror
                  value={md}
                  lineWrapping={lineWrap}
                  onChange={(val) => handleContentChange(val, index)}
                  editable
                  className="w-full h-full"
                />
              </div>
            );
          })} */}
        </div>
      </div>
    </div>
  );
};
export default MdViewer;
