import { createElement, FunctionComponent, ReactElement } from "react";
import classNames from "classnames";

export const ErrorElement: FunctionComponent<{ className: string; text: string }> = ({ className, text }) => {
    return (
        <div className={classNames(className, "error")}>
            <div className="alert alert-danger">{text}</div>
        </div>
    );
};

export const renderNodeError = (className: string): ReactElement => (
    <ErrorElement
        className={className}
        text={
            "Widget Error: Markdown Element can only use one of two lists for nodes: allowed or disallowed! Please remove one of them."
        }
    />
);
