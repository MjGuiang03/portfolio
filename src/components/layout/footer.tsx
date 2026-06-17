import { Mail } from "lucide-react";

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect x="2" y="9" width="4" height="12"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-background border-t border-foreground/10 text-center px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <div className="flex items-center gap-6 mb-8">
          <a href="https://github.com/MjGuiang03" target="_blank" rel="noreferrer" className="p-3 bg-foreground/[0.03] border border-foreground/10 rounded-full hover:bg-foreground/[0.1] hover:scale-110 transition-all text-foreground/70 hover:text-foreground">
            <GithubIcon className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com/in/marc-joefreal-guiang" target="_blank" rel="noreferrer" className="p-3 bg-foreground/[0.03] border border-foreground/10 rounded-full hover:bg-foreground/[0.1] hover:scale-110 transition-all text-foreground/70 hover:text-foreground">
            <LinkedinIcon className="w-5 h-5" />
          </a>
          <a href="mailto:marcjoefreal@gmail.com" className="p-3 bg-foreground/[0.03] border border-foreground/10 rounded-full hover:bg-foreground/[0.1] hover:scale-110 transition-all text-foreground/70 hover:text-foreground">
            <Mail className="w-5 h-5" />
          </a>
        </div>
        
        <p className="text-foreground/40 text-sm">
          &copy; {currentYear} Marc Joefreal A. Guiang. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
