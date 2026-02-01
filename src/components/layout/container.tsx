import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "sm" | "lg";
}

export function Container({ children, className, size = "default" }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        {
          "max-w-4xl": size === "sm",
          "max-w-6xl": size === "default",
          "max-w-7xl": size === "lg",
        },
        className
      )}
    >
      {children}
    </div>
  );
}
