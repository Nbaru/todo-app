type AlertType = "info" | "warning" | "success" | "error";

export const Alert: React.FC<{
  readonly text: string;
  readonly type: AlertType;
}> = ({ text, type }) => (
  <div role="alert" className={`alert alert-${type}`}>
    <span>{text}</span>
  </div>
);

Alert.displayName = "Alert";
