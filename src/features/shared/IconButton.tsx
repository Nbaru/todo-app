import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const IconButton: React.FC<{
  readonly iconDefiniton: IconDefinition;
  readonly tooltipText: string;
}> = ({ iconDefiniton, tooltipText }) => {
  return (
    <div className="tooltip tooltip-info" data-tip={tooltipText}>
      <button className="p-1">
        <FontAwesomeIcon icon={iconDefiniton} />
      </button>
    </div>
  );
};
