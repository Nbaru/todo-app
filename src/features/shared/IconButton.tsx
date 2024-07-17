import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const IconButton: React.FC<{
  readonly iconDefiniton: IconDefinition;
  readonly tooltipText: string;
  readonly onClick?: () => void;
}> = ({ iconDefiniton, tooltipText, onClick }) => {
  return (
    <div className="tooltip tooltip-info" data-tip={tooltipText}>
      <button className="p-1" onClick={onClick}>
        <FontAwesomeIcon icon={iconDefiniton} />
      </button>
    </div>
  );
};
