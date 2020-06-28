/**
 * This file was generated from TextTemplateElement.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { ComponentType, CSSProperties, ReactNode } from "react";
import { DynamicValue, FileValue, WebImage } from "mendix";

export interface ResImagesType {
    imgKey: string;
    imgImage: DynamicValue<WebImage>;
}

export interface ResImagesPreviewType {
    imgKey: string;
    imgImage: string;
}

export interface TextTemplateElementContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex: number;
    dataTemplate: DynamicValue<string>;
    dataContent?: ReactNode;
    resImages: ResImagesType[];
    fileFile?: DynamicValue<FileValue>;
    optEscapeHTML: boolean;
    optSkipHTML: boolean;
    optSourcePos: boolean;
    optRawSourcePos: boolean;
    optIncludeNodeIndex: boolean;
    optDisallowedTypes?: string;
    optUnwrapDisallowed: boolean;
}

export interface TextTemplateElementPreviewProps {
    class: string;
    style: string;
    dataTemplate: string;
    dataContent: { widgetCount: number; renderer: ComponentType };
    resImages: ResImagesPreviewType[];
    fileFile: string;
    optEscapeHTML: boolean;
    optSkipHTML: boolean;
    optSourcePos: boolean;
    optRawSourcePos: boolean;
    optIncludeNodeIndex: boolean;
    optDisallowedTypes: string;
    optUnwrapDisallowed: boolean;
}
