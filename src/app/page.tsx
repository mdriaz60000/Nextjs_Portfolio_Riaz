import { HeroBanner } from "@/components/shared/Bannar/Bannar";
import PageProject from "./project/page";

import { ContactPage } from "@/components/shared/Contact/Contact";
import { BlogPage } from "@/components/shared/Blog/Blog";
import { SkillsSection } from "@/components/shared/Skills/Skills";







export default function Home() {
  return (
   <>
   <HeroBanner />
   <PageProject />
   <SkillsSection />
   <BlogPage/>
   <ContactPage />
   
   </>
  );
}
