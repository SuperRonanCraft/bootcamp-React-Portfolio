import PropTypes from "prop-types";
import { icons } from "lucide-react";

const Icon = ({ name, color, size }) => {
  const LucideIcon = icons[name];
  if (!LucideIcon) return null;

  return <LucideIcon color={color} size={size} />;
};

export default Icon;

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
