import { HeroSection } from "@/components/sections/hero-section";
import { ThemeToggle } from "@/components/theme/theme-toggle";

export default function Home() {
  return (
    <main className="relative">
      {/* Theme Toggle */}
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      {/* Hero Section */}
      <HeroSection />

      {/* Placeholder sections for future development */}
      <section className="min-h-screen flex items-center justify-center bg-muted/30">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">About</h2>
          <p className="text-muted-foreground">Skills, experience, and passion for development</p>
        </div>
      </section>

      <section className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">Projects</h2>
          <p className="text-muted-foreground">Showcase of recent work and applications</p>
        </div>
      </section>

      <section className="min-h-screen flex items-center justify-center bg-muted/30">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">Contact</h2>
          <p className="text-muted-foreground">Let's work together on your next project</p>
        </div>
      </section>
    </main>
  );
}