import { Container } from "@/components/layout";
import { SocialLinks } from "@/components/social-links";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 mt-auto">
      <Container>
        <Separator className="mb-8" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Brian Lindquist
          </p>
          <SocialLinks />
        </div>
      </Container>
    </footer>
  );
}
