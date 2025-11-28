import * as React from "react";

import { cn } from "@/lib/utils";

// Lightweight, Radix-free tooltip primitives to avoid React hook issues from @radix-ui/react-tooltip.
// These components keep the same API surface used in the app but degrade gracefully:
// - <Tooltip> just renders its children
// - <TooltipTrigger asChild> passes children through
// - <TooltipContent> renders a small bubble, but without portals or complex positioning

type TooltipProps = React.HTMLAttributes<HTMLDivElement>;

const Tooltip: React.FC<TooltipProps> = ({ children }) => {
  return <>{children}</>;
};

interface TooltipTriggerProps extends React.HTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

const TooltipTrigger = React.forwardRef<HTMLButtonElement, TooltipTriggerProps>(
  ({ asChild, children, className, ...props }, ref) => {
    if (asChild && React.isValidElement(children)) {
      // Pass ref and props down to the child when used asChild
      return React.cloneElement(children as React.ReactElement, {
        ref,
        ...props,
      });
    }

    return (
      <button ref={ref} className={cn(className)} {...props}>
        {children}
      </button>
    );
  },
);
TooltipTrigger.displayName = "TooltipTrigger";

interface TooltipContentProps extends React.HTMLAttributes<HTMLDivElement> {
  side?: "top" | "right" | "bottom" | "left";
  align?: "start" | "center" | "end";
  hidden?: boolean;
}

const TooltipContent = React.forwardRef<HTMLDivElement, TooltipContentProps>(
  ({ className, hidden, children, ...props }, ref) => {
    if (hidden) return null;

    return (
      <div
        ref={ref}
        role="tooltip"
        className={cn(
          "z-50 rounded-md border bg-popover px-2 py-1 text-xs text-popover-foreground shadow-md",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);
TooltipContent.displayName = "TooltipContent";

// Placeholder provider to keep existing usage compiling; no-op at runtime.
const TooltipProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => <>{children}</>;

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
