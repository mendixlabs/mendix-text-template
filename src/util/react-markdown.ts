import { NodeType } from "react-markdown";

export const nodeTypes: NodeType[] = [
    "root",
    "text",
    "break",
    "paragraph",
    "emphasis",
    "strong",
    "thematicBreak",
    "blockquote",
    "delete",
    "link",
    "image",
    "linkReference",
    "imageReference",
    "table",
    "tableHead",
    "tableBody",
    "tableRow",
    "tableCell",
    "list",
    "listItem",
    "definition",
    "heading",
    "inlineCode",
    "code",
    "html",
    "virtualHtml"
];

export const filteredList = (str = ""): NodeType[] => {
    const types = str
        .trim()
        .split(",")
        .map(st => st.trim());
    const filtered = nodeTypes.filter(t => types.indexOf(t) !== -1);
    return filtered;
};
