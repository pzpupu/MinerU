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
import SelectFloatingBox from "../select-floating-box";


interface IMarkdownProps {
  content: Record<string, MdContent>;
  markdownClass?: string;
  markdownId?: string;
  onMark?: (color: string) => void;
}

const LazyUrlMarkdown: React.FC<IMarkdownProps> = ({
  content,
  markdownClass = "",
  onMark: onMark,
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

  return (
    <div className="min-h-[100px]">
      <div ref={ref} className={cls(styles.mdViewerWrap, "bg-white text-[0.75rem]", markdownClass)}>
        {Object.keys(content).map((key) => (
          <ReactMarkdown
            key={key}
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
              h1({ node, children }) {
                const { start, end } = node?.position || {};
                return <h1 {...node?.properties} data-key={key} data-start-line={start?.line} data-start-column={start?.column} data-start-offset={start?.offset} data-end-line={end?.line} data-end-column={end?.column} data-end-offset={end?.offset} >{children}</h1>;
              },
              h2({ node, children }) {
                const { start, end } = node?.position || {};
                return <h2 {...node?.properties} data-key={key} data-start-line={start?.line} data-start-column={start?.column} data-start-offset={start?.offset} data-end-line={end?.line} data-end-column={end?.column} data-end-offset={end?.offset} >{children}</h2>;
              },
              h3({ node, children }) {
                const { start, end } = node?.position || {};
                return <h3 {...node?.properties} data-key={key} data-start-line={start?.line} data-start-column={start?.column} data-start-offset={start?.offset} data-end-line={end?.line} data-end-column={end?.column} data-end-offset={end?.offset} >{children}</h3>;
              },
              h4({ node, children }) {
                const { start, end } = node?.position || {};
                return <h4 {...node?.properties} data-key={key} data-start-line={start?.line} data-start-column={start?.column} data-start-offset={start?.offset} data-end-line={end?.line} data-end-column={end?.column} data-end-offset={end?.offset} >{children}</h4>;
              },
              h5({ node, children }) {
                const { start, end } = node?.position || {};
                return <h5 {...node?.properties} data-key={key} data-start-line={start?.line} data-start-column={start?.column} data-start-offset={start?.offset} data-end-line={end?.line} data-end-column={end?.column} data-end-offset={end?.offset} >{children}</h5>;
              },
              h6({ node, children }) {
                const { start, end } = node?.position || {};
                return <h6 {...node?.properties} data-key={key} data-start-line={start?.line} data-start-column={start?.column} data-start-offset={start?.offset} data-end-line={end?.line} data-end-column={end?.column} data-end-offset={end?.offset} >{children}</h6>;
              },
              p({ node, children }) {
                const { start, end } = node?.position || {};
                return <p {...node?.properties} data-key={key} data-start-line={start?.line} data-start-column={start?.column} data-start-offset={start?.offset} data-end-line={end?.line} data-end-column={end?.column} data-end-offset={end?.offset} >{children}</p>;
              },
              li({ node, children }) {
                const { start, end } = node?.position || {};
                return <li {...node?.properties} data-key={key} data-start-line={start?.line} data-start-column={start?.column} data-start-offset={start?.offset} data-end-line={end?.line} data-end-column={end?.column} data-end-offset={end?.offset} >{children}</li>;
              },
              span({ node, children }) {
                const { start, end } = node?.position || {};
                const className = cls(node?.properties?.className || []);
                const style = parseStyleString(node?.properties?.style as string || "");
                return <span className={className} style={style} data-key={key} data-start-line={start?.line} data-start-column={start?.column} data-start-offset={start?.offset} data-end-line={end?.line} data-end-column={end?.column} data-end-offset={end?.offset} >{children}</span>;
              },
              img({ node }) {
                const { start, end } = node?.position || {};
                return <img {...node?.properties} data-key={key} data-start-line={start?.line} data-start-column={start?.column} data-start-offset={start?.offset} data-end-line={end?.line} data-end-column={end?.column} data-end-offset={end?.offset} />;
              },
            }}
          >
            {content[key].content}
          </ReactMarkdown>
        ))}
      </div>
      <SelectFloatingBox htmlRef={ref} onMark={onMark} />
    </div>
  );
};

export default LazyUrlMarkdown;
