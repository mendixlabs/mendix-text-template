import { ReactNode, createElement, Component } from "react";
import Notification from "./Notification";

type BoundaryProps = {
    children: ReactNode;
    className?: string;
    content?: string;
};

type ErrorInfo = {
    componentStack: string;
};

type State = {
    error?: Error;
    errorInfo?: ErrorInfo;
};

class ErrorBoundary extends Component<BoundaryProps, State> {
    constructor(props: BoundaryProps) {
        super(props);
        this.state = {};
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        // Catch errors in any components below and re-render with error message
        console.error("Error in Text Template widget:", { error, content: this.props.content });
        this.setState({
            error,
            errorInfo
        });
    }

    renderError = (): ReactNode => {
        return (
            <Notification
                type="danger"
                className={this.props.className}
                onClose={() => {
                    this.setState({ error: undefined });
                }}
            >
                Error for Text Template widget (see console): {this.state.error?.message}
            </Notification>
        );
    };

    render(): ReactNode {
        const { error } = this.state;
        if (error) {
            return this.renderError();
        }
        return this.props.children;
    }
}
export default ErrorBoundary;
