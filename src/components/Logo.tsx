import { Link } from "react-router-dom";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const Logo = ({ size = "md", className = "" }: LogoProps) => {
  const sizeClasses = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-3xl"
  };

  return (
    <Link to="/" className={`flex items-center gap-2 ${className}`}>
      <div className={`font-bold ${sizeClasses[size]} relative`}>
        <span className="text-white">Cyber</span>
        <span className="text-purple-400 relative">
          Fun
          <div className="absolute -top-1 -right-2 text-xs text-purple-300">2</div>
        </span>
        <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 to-transparent"></div>
      </div>
    </Link>
  );
};

export default Logo;
