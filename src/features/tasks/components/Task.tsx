import type { ReactNode } from "react";

export const Task: React.FC<{
  readonly renderContent: () => ReactNode;
  readonly renderControls: () => ReactNode;
}> = ({ renderContent, renderControls }) => (
  //@todo: solve how to display too long text (truncating ??)
  <div className="flex min-h-10 items-center justify-between space-x-4 rounded-xl bg-neutral px-4">
    {renderContent()}
    <div className="space-x-3">{renderControls()}</div>
  </div>
);

Task.displayName = "Task";
