import { SFC, createElement, ComponentType, ReactElement, ReactNode } from "react";
import classNames from "classnames";

export interface RendererProps<TProps = any> {
    readonly identifier: string;
    readonly attributes: TProps;
}

export type Renderer = SFC<RendererProps> | SFC<any>;
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

const fencedDiv = (props: { data: any; children: ReactElement }): ReactElement | null => {
    const divProps = props.data.hProperties;
    const className = classNames(divProps.className);
    const children = props.children;
    return (
        <div {...divProps} className={className}>
            {children}
        </div>
    );
};

export interface GetRendersProps {
    contentRender?: ReactNode;
}

export const getRenderers = (props: GetRendersProps): Renderers => {
    return {
        shortcode: shortcodeRenderer(props),
        fencedDiv
    };
};
