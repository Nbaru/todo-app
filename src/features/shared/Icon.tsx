import type {
  IconDefinition,
  SizeProp,
} from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Icon: React.FC<{
  readonly iconDefiniton: IconDefinition;
  readonly size?: SizeProp;
  readonly tooltipText: string;
}> = ({ iconDefiniton, size, tooltipText }) => {
  return (
    <div className="tooltip tooltip-info p-1" data-tip={tooltipText}>
      <FontAwesomeIcon icon={iconDefiniton} size={size} />
    </div>
  );
};
