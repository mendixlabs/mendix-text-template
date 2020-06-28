import { createElement, FunctionComponent } from "react";
import { hot } from "react-hot-loader/root";
import classNames from "classnames";
import ReactMarkdown from "react-markdown/with-html";

const shortcodes = require("remark-shortcodes");
const fenced = require("remark-fenced-divs");

import { TextTemplateElementContainerProps } from "../typings/TextTemplateElementProps";

import "./ui/TextTemplateElement.scss";

import { filteredList } from "./util/react-markdown";
import { getRenderers } from "./util/renderers";
import { replaceImages, replaceFile } from "./util/replacer";
import ErrorBoundary from "./components/ErrorBoundary";

const TextTemplateElement: FunctionComponent<TextTemplateElementContainerProps> = ({
    class: className,
    dataTemplate,
    dataContent,
    resImages,
    fileFile,
    optDisallowedTypes,
    optSkipHTML,
    optEscapeHTML,
    optSourcePos,
    optRawSourcePos,
    optIncludeNodeIndex,
    optUnwrapDisallowed
}) => {
    const disallowedArr = filteredList(optDisallowedTypes);

    const disallowed = disallowedArr.length > 0 ? disallowedArr : undefined;
    const containerClass = classNames(className, {
        empty: !dataTemplate.value,
        loading: dataTemplate.status === "loading",
        unavailable: dataTemplate.status === "unavailable"
    });

    if (dataTemplate.status !== "unavailable" && dataTemplate.value) {
        let content = dataTemplate.value;

        if (resImages && resImages.length > 0) {
            content = replaceImages(content, resImages);
        }

        if (typeof fileFile !== "undefined") {
            content = replaceFile(content, fileFile);
        }

        return (
            <ErrorBoundary className={className} content={content}>
                <ReactMarkdown
                    source={content}
                    className={containerClass}
                    skipHtml={optSkipHTML}
                    escapeHtml={optEscapeHTML}
                    sourcePos={optSourcePos}
                    rawSourcePos={optRawSourcePos}
                    includeNodeIndex={optIncludeNodeIndex}
                    unwrapDisallowed={optUnwrapDisallowed}
                    disallowedTypes={disallowed}
                    plugins={[shortcodes, fenced]}
                    renderers={getRenderers({ contentRender: dataContent })}
                />
            </ErrorBoundary>
        );
    }

    return <div className={containerClass}></div>;
};

export default hot(TextTemplateElement);
