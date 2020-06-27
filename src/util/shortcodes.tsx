import { SFC, createElement, ComponentType, ReactElement } from "react";

export interface RendererProps<TProps = any> {
    readonly identifier: string;
    readonly attributes: TProps;
}

export type Renderer = SFC<RendererProps>;
export type Renderers = { [key: string]: Renderer };

const nodesToComponents: Record<string, ComponentType<any>> = {};

const shortcodeRenderer = (props: RendererProps): ReactElement | null => {
    const componentProps = props.attributes;
    const Component = nodesToComponents[props.identifier];
    if (Component) {
        return <Component {...componentProps} />;
    }
    // return <span className="text-danger error">--Widget error, unsupported shortcode: {props.identifier}--</span>;
    return null;
};

export const renderers: Renderers = {
    shortcode: shortcodeRenderer
};
