// mdStore.ts
import { create } from "zustand";
import axios from "axios";
import { updateMarkdownContent, UpdateMarkdownRequest, UpdateMarkdownResponse } from "@/api/extract"; // 确保路径正确
import { devtools } from 'zustand/middleware'
export interface MdContent {
  content: string;
  isLoading: boolean;
}

type AnchorType =
  | "span"
  | "div"
  | "comment"
  | "data-attribute"
  | "hr"
  | "mark"
  | "p";

interface AnchorOptions {
  type: AnchorType;
  prefix?: string;
  style?: string;
  className?: string;
  customAttributes?: Record<string, string>;
}

const defaultAnchorOptions: AnchorOptions = {
  type: "span",
  prefix: "md-anchor-",
  style: "display:none;",
  className: "",
  customAttributes: {},
};

interface MdState {
  mdContents: Record<string, MdContent>;
  allMdContent: string;
  allMdContentWithAnchor: string;
  error: Error | null;
  currentRequestId: number;
  setMdUrlArr: (urls: string[]) => Promise<void>;
  setFullMdLink: (link: string) => Promise<void>;
  getAllMdContent: (data: string[]) => string;
  setAllMdContent: (val?: string) => void;
  setAllMdContentWithAnchor: (val?: string) => void;
  getContentWithAnchors: (
    data: string[],
    options?: Partial<AnchorOptions>
  ) => string;
  jumpToAnchor: (anchorId: string) => number;
  reset: () => void;
  updateMdContent: (
    fileKey: string,
    pageNumber: string | number,
    newContent: string
  ) => Promise<void>;
  updateMdContents: (
    fileKey: string,
    data: Record<string, string>
  ) => Promise<boolean>;
  updateFullMdContent: (
    fileKey: string,
    data: string
  ) => Promise<boolean>;
}

const MAX_CONCURRENT_REQUESTS = 2;

const initialState = {
  mdContents: {},
  allMdContent: "",
  allMdContentWithAnchor: "",
  error: null,
  currentRequestId: 0,
};

const useMdStore = create<MdState>()(devtools(
  (set, get) => ({
    ...initialState,

    reset: () => {
      set(initialState);
    },

    setAllMdContent: (value?: string) => {
      set(() => ({
        allMdContent: value,
      }));
    },

    setAllMdContentWithAnchor: (value?: string) => {
      set(() => ({
        allMdContentWithAnchor: value,
      }));
    },

    setMdUrlArr: async (urls: string[]) => {
      const requestId = get().currentRequestId + 1;
      set((state) => ({ currentRequestId: requestId, error: null }));

      const fetchContent = async (url: string): Promise<[string, string]> => {
        try {
          const response = await axios.get<string>(url);
          return [url, response.data];
        } catch (error) {
          if (get().currentRequestId === requestId) {
            set((state) => ({ error: error as Error }));
          }
          return [url, ""];
        }
      };

      const fetchWithConcurrency = async (
        urls: string[]
      ): Promise<[string, string][]> => {
        // 创建一个映射来存储每个URL对应的索引位置
        const urlIndexMap = new Map<string, number>();
        urls.forEach((url, index) => {
          urlIndexMap.set(url, index);
        });

        const queue = [...urls];
        // 使用数组预分配空间，确保结果顺序与输入顺序一致
        const results: ([string, string] | null)[] = new Array(urls.length).fill(null);
        const inProgress = new Set<Promise<[string, string]>>();

        while (queue.length > 0 || inProgress.size > 0) {
          while (inProgress.size < MAX_CONCURRENT_REQUESTS && queue.length > 0) {
            const url = queue.shift()!;
            const promise = fetchContent(url);
            inProgress.add(promise);
            promise.then((result) => {
              // 根据URL在原始数组中的位置存储结果
              const index = urlIndexMap.get(result[0])!;
              results[index] = result;
              inProgress.delete(promise);
            });
          }
          if (inProgress.size > 0) {
            await Promise.race(inProgress);
          }
        }

        // 过滤掉可能的null值（虽然正常情况下不应该有）
        return results.filter((item): item is [string, string] => item !== null);
      };

      const results = await fetchWithConcurrency(urls);

      if (get().currentRequestId === requestId) {
        const newMdContents: Record<string, MdContent> = {};
        results.forEach(([url, content]) => {
          newMdContents[url] = { content, isLoading: false };
        });

        set((state) => ({
          mdContents: newMdContents,
          allMdContent: state.getAllMdContent(results.map((i) => i[1])),
          // allMdContentWithAnchor: state.getContentWithAnchors(
          //   results.map((i) => i[1])
          // ),
        }));
      }
    },

    setFullMdLink: async (link: string) => {
      const response = await axios.get<string>(link);
      const content = response.data;
      set(() => ({
        allMdContent: content,
      }));
    },

    getAllMdContent: (data) => {
      return data?.join("\n\n");
    },

    getContentWithAnchors: (data: string[], options?: Partial<AnchorOptions>) => {
      const opts = { ...defaultAnchorOptions, ...options };

      const generateAnchorTag = (index: number) => {
        const id = `${opts.prefix}${index}`;
        const attributes = Object.entries(opts.customAttributes || {})
          .map(([key, value]) => `${key}="${value}"`)
          .join(" ");

        switch (opts.type) {
          case "span":
          case "div":
          case "mark":
          case "p":
            return `<${opts.type} id="${id}" style="${opts.style}" class="${opts.className}" ${attributes}></${opts.type}>`;
          case "comment":
            return `<!-- anchor: ${id} -->`;
          case "data-attribute":
            return `<span data-anchor="${id}" style="${opts.style}" class="${opts.className}" ${attributes}></span>`;
          case "hr":
            return `<hr id="${id}" style="${opts.style}" class="${opts.className}" ${attributes}>`;
          default:
            return `<span id="${id}" style="${opts.style}" class="${opts.className}" ${attributes}></span>`;
        }
      };

      return data
        ?.map((content, index) => {
          const anchorTag = generateAnchorTag(index);
          return `${anchorTag}\n\n${content}`;
        })
        .join("\n\n");
    },

    jumpToAnchor: (anchorId: string) => {
      const { mdContents } = get();
      const contentArray = Object.values(mdContents).map(
        (content) => content.content
      );
      let totalLength = 0;
      for (let i = 0; i < contentArray.length; i++) {
        if (anchorId === `md-anchor-${i}`) {
          return totalLength;
        }
        totalLength += contentArray[i].length + 2; // +2 for "\n\n"
      }
      return -1; // Anchor not found
    },
    updateMdContent: async (
      fileKey: string,
      pageNumber: string | number,
      newContent: string
    ) => {
      try {
        const params: UpdateMarkdownRequest = {
          file_key: fileKey,
          data: {
            [pageNumber]: newContent,
          },
        };

        const result = await updateMarkdownContent(params);

        if (result && result.success) {
          // 更新本地状态
          set((state) => {
            const updatedMdContents = { ...state.mdContents };
            if (updatedMdContents[fileKey]) {
              updatedMdContents[fileKey] = {
                ...updatedMdContents[fileKey],
                content: newContent,
              };
            } else {
              const pageNumber_ = Number(pageNumber);
              const url = Object.keys(state.mdContents)[pageNumber_];
              updatedMdContents[url] = {
                ...updatedMdContents[url],
                content: newContent,
              };
            }

            // 重新计算 allMdContent 和 allMdContentWithAnchor
            const contentArray = Object.values(updatedMdContents).map(
              (content) => content.content
            );
            const newAllMdContent = state.getAllMdContent(contentArray);
            // const newAllMdContentWithAnchor =
            //   state.getContentWithAnchors(contentArray);

            return {
              mdContents: updatedMdContents,
              allMdContent: newAllMdContent,
              // allMdContentWithAnchor: newAllMdContentWithAnchor,
            };
          });
        } else {
          throw new Error("Failed to update Markdown content");
        }
      } catch (error) {
        set({ error: error as Error });
        throw error;
      }
    },
    updateMdContents: async (fileKey: string, data: Record<string, string>) => {
      try {
        const newData: Record<string, string> = {};
        Object.keys(get().mdContents).forEach((key, index) => {
          Object.keys(data).forEach((item) => {
            if (key === item) {
              newData[index] = data[item]
            }
          });
        });

        const params: UpdateMarkdownRequest = {
          file_key: fileKey,
          data: newData,
        };

        const result = await updateMarkdownContent(params);

        if (result && result.success) {
          // 更新本地状态
          set((state) => {
            const updatedMdContents = { ...state.mdContents };
            Object.keys(data).forEach((key) => {
              updatedMdContents[key] = {
                ...updatedMdContents[key],
                content: data[key],
              };
            });

            return {
              mdContents: updatedMdContents,
            };
          });

          return true;
        }
        throw new Error("Failed to update Markdown content");
      } catch (error) {
        set({ error: error as Error });
        throw error;
      }
    },
    updateFullMdContent: async (fileKey: string, data: string) => {
      try {
        const params: UpdateMarkdownRequest = {
          file_key: fileKey,
          data: {
            'full': data,
          },
        };
        const result = await updateMarkdownContent(params);

        if (result && result.success) {
          // 更新本地状态
          set(() => {
            return {
              allMdContent: data,
            };
          });
        } else {
          throw new Error("Failed to update Markdown content");
        }

      } catch (error) {
        set({ error: error as Error });
        throw error;
      }
    }
  })
));

export default useMdStore;
