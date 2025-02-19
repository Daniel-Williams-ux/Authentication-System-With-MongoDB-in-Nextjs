import * as React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, ...props }, ref) => (
  <button
    ref={ref}
    className={cn(
      "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300",
      className
    )}
    {...props}
  />
));

Button.displayName = "Button";

export { Button };
