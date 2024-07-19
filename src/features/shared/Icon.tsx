import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Icon: React.FC<{
  readonly iconDefiniton: IconDefinition;
  readonly tooltipText: string;
}> = ({ iconDefiniton, tooltipText }) => {
  return (
    <div className="tooltip tooltip-info p-1" data-tip={tooltipText}>
      <FontAwesomeIcon icon={iconDefiniton} />
    </div>
  );
};
