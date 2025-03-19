import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import remarkGfm from "remark-gfm";
import styles from "./index.module.scss";
import cls from "classnames";
import { MdContent } from "@/store/mdStore";
import { useRef } from "react";
import SelectFloatingBox, { DeleteMarkInfo, MarkdownPosition } from "../select-floating-box";
import { TaskIdResItem } from "@/api/extract";

interface IMarkdownProps {
  content: string;
  markdownClass?: string;
  markdownId?: string;
  onMark?: (color: string, markdownPosition: MarkdownPosition) => void;
  onDeleteMark?: (deleteMarkInfo: DeleteMarkInfo) => void;
  taskInfo: TaskIdResItem;
}

const LazyUrlMarkdown: React.FC<IMarkdownProps> = ({
  content,
  markdownClass = "",
  onMark: onMark,
  onDeleteMark: onDeleteMark,
  taskInfo
}) => {
  const ref = useRef<HTMLDivElement>(null);

  function parseStyleString(styleString: string) {
    const styleObject: Record<string, string> = {};
    const declarations = styleString.split(";").filter(Boolean);

    declarations.forEach((declaration) => {
      const [property, value] = declaration.split(":").map((str) => str.trim());
      if (property && value) {
        const camelCaseProperty = property.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
        styleObject[camelCaseProperty] = value;
      }
    });

    return styleObject;
  }

  // 添加位置信息属性到元素
  const addPositionAttributes = (node: any) => {
    const { start, end } = node?.position || {};
    return {
      'data-start-line': start?.line,
      'data-start-column': start?.column,
      'data-start-offset': start?.offset,
      'data-end-line': end?.line,
      'data-end-column': end?.column,
      'data-end-offset': end?.offset
    };
  };

  return (
    <div className="min-h-[100px]">
      <div ref={ref} className={cls(styles.mdViewerWrap, "bg-white text-[0.75rem]", markdownClass)} id="preview-container">
        <ReactMarkdown
          remarkPlugins={[
            remarkMath,
            [remarkGfm, { singleTilde: false }, { strict: "ignore" }],
          ]}
          rehypePlugins={
            [
              [rehypeKatex, { strict: "ignore" }], 
              rehypeRaw
            ]
          }
            components={{
              // code(props) {
              //   const { children, className, node, ...rest } = props;
              //   debugger;
              //   const match = /language-(\w+)/.exec(className || "");
              //   return match ? (
              //     <SyntaxHighlighter
              //       PreTag="div"
              //       className="rounded-md"
              //       // eslint-disable-next-line react/no-children-prop
              //       children={String(children).replace(/\n$/, "")}
              //       language={match[1]}
              //       {...addPositionAttributes(node)}
              //     />
              //   ) : (
              //     <code
              //       {...rest}
              //       className="p-4 my-2 bg-[#f6f8fa] !bg-black rounded-md block"
              //       {...addPositionAttributes(node)}
              //     >
              //       {children}
              //     </code>
              //   );
              // },
              h1({ node, children }) {
                return <h1 {...node?.properties} {...addPositionAttributes(node)}>{children}</h1>;
              },
              h2({ node, children }) {
                return <h2 {...node?.properties} {...addPositionAttributes(node)}>{children}</h2>;
              },
              h3({ node, children }) {
                return <h3 {...node?.properties} {...addPositionAttributes(node)}>{children}</h3>;
              },
              h4({ node, children }) {
                return <h4 {...node?.properties} {...addPositionAttributes(node)}>{children}</h4>;
              },
              h5({ node, children }) {
                return <h5 {...node?.properties} {...addPositionAttributes(node)}>{children}</h5>;
              },
              h6({ node, children }) {
                return <h6 {...node?.properties} {...addPositionAttributes(node)}>{children}</h6>;
              },
              p({ node, children }) {
                return <p {...node?.properties} {...addPositionAttributes(node)}>{children}</p>;
              },
              li({ node, children }) {
                return <li {...node?.properties} {...addPositionAttributes(node)}>{children}</li>;
              },
              img({ node }) {
                const { src, alt, ...rest } = node?.properties || {};
                return <img {...rest} src={`/api/v2/analysis/pdf_img?as_attachment=False&pdf=${taskInfo.file_key}&filename=${alt}`} alt={`${alt}`} {...addPositionAttributes(node)} />;
              },
              a({ node, children }) {
                return <a {...node?.properties} {...addPositionAttributes(node)}>{children}</a>;
              },
              span({ node, children }) {
                const className = cls(node?.properties?.className || []);
                const style = parseStyleString(node?.properties?.style as string || "");
                // console.log('span=> ', node);
                return <span className={className} style={style} {...addPositionAttributes(node)}>{children}</span>;
              },
              // blockquote({ node, children }) {
              //   return <blockquote {...node?.properties} {...addPositionAttributes(node, key)}>{children}</blockquote>;
              // },
              // strong({ node, children }) {
              //   return <strong {...node?.properties} {...addPositionAttributes(node, key)}>{children}</strong>;
              // },
              // em({ node, children }) {
              //   return <em {...node?.properties} {...addPositionAttributes(node, key)}>{children}</em>;
              // },
              // del({ node, children }) {
              //   return <del {...node?.properties} {...addPositionAttributes(node, key)}>{children}</del>;
              // },
              // table({ node, children }) {
              //   return <table {...node?.properties} {...addPositionAttributes(node, key)}>{children}</table>;
              // },
              // thead({ node, children }) {
              //   return <thead {...node?.properties} {...addPositionAttributes(node, key)}>{children}</thead>;
              // },
              // tbody({ node, children }) {
              //   return <tbody {...node?.properties} {...addPositionAttributes(node, key)}>{children}</tbody>;
              // },
              // tr({ node, children }) {
              //   return <tr {...node?.properties} {...addPositionAttributes(node, key)}>{children}</tr>;
              // },
              // td({ node, children }) {
              //   return <td {...node?.properties} {...addPositionAttributes(node, key)}>{children}</td>;
              // },
              // th({ node, children }) {
              //   return <th {...node?.properties} {...addPositionAttributes(node, key)}>{children}</th>;
              // },
              // ul({ node, children }) {
              //   return <ul {...node?.properties} {...addPositionAttributes(node, key)}>{children}</ul>;
              // },
              // ol({ node, children }) {
              //   return <ol {...node?.properties} {...addPositionAttributes(node, key)}>{children}</ol>;
              // },
              // pre({ node, children }) {
              //   return <pre {...node?.properties} {...addPositionAttributes(node, key)}>{children}</pre>;
              // },
              // hr({ node }) {
              //   return <hr {...node?.properties} {...addPositionAttributes(node, key)} />;
              // },
              // text({ node, children }) {
              //   return <p {...node?.properties} {...addPositionAttributes(node)}>{children}</p>;
              // },
              // // 默认处理所有其他元素
              div({ node, children }) {
                const { className, style, ...rest } = node?.properties || {};
                const _className = cls(node?.properties?.className || []);
                const _style = parseStyleString(node?.properties?.style as string || "");
                // console.log('div=> ', node);
                return <div className={_className} style={_style} {...rest} {...addPositionAttributes(node)}>{children}</div>;
              },
            }}
          >
          {content}
        </ReactMarkdown>
      </div>
      <SelectFloatingBox htmlRef={ref} onMark={onMark} onDeleteMark={onDeleteMark} />
    </div>
  );
};

export default LazyUrlMarkdown;
