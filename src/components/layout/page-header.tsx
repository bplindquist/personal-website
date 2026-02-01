import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

export function PageHeader({ title, description, className }: PageHeaderProps) {
  return (
    <div className={cn("mb-12", className)}>
      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        {title}
      </h1>
      {description && (
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}
