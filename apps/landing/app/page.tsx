import dynamic from "next/dynamic";

const HeroSection = dynamic(() => import("./components/HeroSection"));
const ClientsSection = dynamic(() => import("./components/ClientSection"));
const SolutionsSection = dynamic(() => import("./components/SolutionSection"));
const ExperienceSection = dynamic(() => import("./components/ExperienceSection"));
const TechnologiesSection = dynamic(() => import("./components/TechnologySection"));
const RecruitingSection = dynamic(() => import("./components/RecuitingSection"));
const ContactSection = dynamic(() => import("./components/ContactSection"));

import Layout from "./layouts";

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <ExperienceSection />
      <ClientsSection />
      <SolutionsSection />
      <TechnologiesSection />
      <RecruitingSection />
      <ContactSection />
    </Layout>
  );
}
