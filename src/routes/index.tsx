import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { ServiceSplit } from "@/components/site/ServiceSplit";
import { Portfolio } from "@/components/site/Portfolio";
import { Comparison } from "@/components/site/Comparison";
import { Process } from "@/components/site/Process";
import { Stats } from "@/components/site/Stats";
import { FAQ } from "@/components/site/FAQ";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const title = "ClockEdit — AI Videos & UGC Content Studio";
const description =
  "ClockEdit creates premium AI video commercials and authentic UGC content for eCommerce and DTC brands. 24–48h delivery, 80% lower production cost.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <ServiceSplit />
        <Portfolio />
        <Comparison />
        <Process />
        <Stats />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
