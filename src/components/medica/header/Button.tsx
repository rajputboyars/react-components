
import { getIconSvg } from "./Icon.tsx";

// Define interface for the iconItem prop
interface IconItem {
  icon?: string;
  label?: string;
  type: 'button';
  isPill?: boolean;
}

// Define props interface for the Button component
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  index: number;
  iconItem: IconItem;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({ index, iconItem, onClick, ...props }) => {
  const buttonLabel = iconItem.label || iconItem.icon;
  const isPillClass = iconItem.isPill
    ? 'bg-blue-700 text-white px-4 py-2 rounded-full hover:bg-blue-800'
    : '';

  return (
    <button
      key={index}
      className={`flex items-center text-gray-500 hover:text-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 ${isPillClass}`}
      onClick={onClick}
      aria-label={iconItem.label || (iconItem.icon ? `${iconItem.icon} button` : undefined)}
      role={props.role || 'button'}
      {...props}
    >
      {iconItem.icon && getIconSvg(iconItem.icon)}
      {iconItem.label && (
        <span className={iconItem.icon ? 'ml-2' : ''}>{iconItem.label}</span>
      )}
      {!iconItem.label && !iconItem.icon && (
        <span className="sr-only">Missing label</span>
      )}
    </button>
  );
};

export default Button;