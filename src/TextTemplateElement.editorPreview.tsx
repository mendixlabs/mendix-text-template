import { Component, ReactNode, createElement } from "react";
import { TextTemplateElementPreviewProps } from "../typings/TextTemplateElementProps";

declare function require(name: string): string;

export class preview extends Component<TextTemplateElementPreviewProps> {
    render(): ReactNode {
        return <div />;
    }
}

export function getPreviewCss(): string {
    return require("./ui/TextTemplateElement.scss");
}
