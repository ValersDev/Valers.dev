import { IntroBand } from "@/components/intro-band";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { About } from "@/components/sections/about";
import { Background } from "@/components/sections/background";
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { University } from "@/components/sections/university";
import { Work } from "@/components/sections/work";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <IntroBand>
          <Hero />
          <About />
          <Background />
          <Work />
          <Projects />
          <University />
          <Contact />
          <SiteFooter />
        </IntroBand>
      </main>
    </>
  );
}
