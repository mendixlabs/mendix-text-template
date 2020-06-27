import { ReactNode, createElement, Component } from "react";
import classNames from "classnames";

type NotificationType = "info" | "success" | "warning" | "danger";

type Props = {
    type: NotificationType;
    onClose?: () => void;
    className?: string;
    children?: ReactNode;
};

class Notification extends Component<Props> {
    renderCloseButton(): ReactNode {
        const { onClose } = this.props;
        if (onClose) {
            return (
                <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={onClose}>
                    <span aria-hidden="true">&times;</span>
                </button>
            );
        }
        return "";
    }

    render(): ReactNode {
        const { type, className, children, onClose } = this.props;
        const color = `alert-${type}`;

        return (
            <div
                className={classNames("alert", "text-template-alert", color, className, {
                    "alert-dismissable": !!onClose
                })}
            >
                {this.renderCloseButton()}
                {children}
            </div>
        );
    }
}

export default Notification;
