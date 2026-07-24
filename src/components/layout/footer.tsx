export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="py-8 bg-background border-t border-foreground/10 text-center px-4">
      <p className="text-foreground/30 text-sm">
        &copy; {currentYear} Marc Joefreal A. Guiang. All rights reserved.
      </p>
    </footer>
  );
}
