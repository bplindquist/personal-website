import { Container } from "@/components/layout";
import { SocialLinks } from "@/components/SocialLinks";

export function Footer() {
  return (
    <footer className="py-8 mt-auto border-t">
      <Container>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Brian Lindquist
          </p>
          <SocialLinks />
        </div>
      </Container>
    </footer>
  );
}
