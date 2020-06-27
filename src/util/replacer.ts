import { ResImagesType } from "../../typings/TextTemplateElementProps";
import { DynamicValue, FileValue } from "mendix";

const replaceKeyVal = (textKey: string, url: string, content: string): string => {
    const key = textKey
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]+/gi, "");
    const regEx = new RegExp(`\\$\\$${key}\\$\\$`, "ig");
    return content.replace(regEx, url);
};

export const replaceImages = (content: string, resImages: ResImagesType[]): string => {
    if (!content) {
        return content;
    }

    let replaced = content;

    resImages.forEach(res => {
        if (res.imgKey && res.imgImage.status === "available" && res.imgImage.value.uri) {
            replaced = replaceKeyVal(res.imgKey, res.imgImage.value.uri, replaced);
        }
    });

    return replaced;
};

export const replaceFile = (content: string, file: DynamicValue<FileValue>): string => {
    if (!content) {
        return content;
    }

    if (file && file.status === "available" && file.value.uri) {
        return replaceKeyVal("file", file.value.uri, content);
    }

    return content;
};
