export const Error: React.FC<{ readonly errorText: string }> = ({
  errorText,
}) => (
  <div role="alert" className="alert alert-error">
    <span>{errorText}</span>
  </div>
);

Error.displayName = "Error";
