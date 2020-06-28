import { SFC, createElement, ComponentType, ReactElement, ReactNode } from "react";

export interface RendererProps<TProps = any> {
    readonly identifier: string;
    readonly attributes: TProps;
}

export type Renderer = SFC<RendererProps>;
export type Renderers = { [key: string]: Renderer };

const nodesToComponents: Record<string, ComponentType<any>> = {};

const shortcodeRenderer = (getRenderProps: GetRendersProps) => {
    return (props: RendererProps): ReactElement | null => {
        const componentProps = props.attributes;
        const Component = nodesToComponents[props.identifier];
        if (Component) {
            return <Component {...componentProps} />;
        } else if (props.identifier === "content" && getRenderProps.contentRender) {
            return getRenderProps.contentRender as ReactElement;
        }
        return null;
    };
};

export interface GetRendersProps {
    contentRender?: ReactNode;
}

export const getRenderers = (props: GetRendersProps): Renderers => {
    return {
        shortcode: shortcodeRenderer(props)
    };
};
