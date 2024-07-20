type Size = "xs" | "sm" | "md" | "lg";
type Color =
  | "primary"
  | "secondary"
  | "accent"
  | "neutral"
  | "info"
  | "success"
  | "warning"
  | "error";

export const Loader: React.FC<{
  readonly size?: Size;
  readonly color?: Color;
}> = ({ size = "lg", color = "info" }) => (
  <div className="mt-10 flex justify-center align-middle">
    <span
      className={`loading loading-dots loading-${size} text-${color}`}
    ></span>
  </div>
);

Loader.displayName = "Loader";
