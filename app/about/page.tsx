import { CriteriaGrid, HeroSection, Section, SiteShell, TeamGrid } from "../components";

const criteria = [
  { title: "50+ Pads", description: "Larger communities with operational scale and staying power are our sweet spot." },
  { title: "$100K+ Annual Net Income", description: "We prioritize properties with dependable income and a solid operating base." },
  { title: "Motivated Seller", description: "We want transactions where timing, structure, and stewardship matter to the owner." },
];

const team = [
  { title: "Jay Merritt", description: "Acquisitions Lead" },
  { title: "Tracey Gunn", description: "Operations Partner" },
  { title: "Tom & Chuck", description: "Capital Partners — GCA Equity Partners" },
];

export default function AboutPage() {
  return (
    <SiteShell>
      <HeroSection
        backgroundClass="bg-[#1e2a3a]"
        title="Who We Are"
        subtitle="A focused acquisition group built around practical deal-making, fast underwriting, and strong seller alignment."
      />

      <Section title="Built for RV park acquisitions" eyebrow="About Campfire Adventures">
        <div className="max-w-4xl rounded-[2rem] border border-white/10 bg-white/5 p-8 text-base leading-8 text-white/80">
          Campfire Adventures Group is a team of experienced real estate investors focused exclusively on acquiring RV parks, campgrounds, and outdoor hospitality properties across the United States. We are members of SubTo and Gator — two of the nation&apos;s leading creative finance communities — giving us the flexibility to structure deals that work for sellers.
        </div>
      </Section>

      <Section title="Our Team" eyebrow="People Behind The Brand">
        <TeamGrid members={team} />
      </Section>

      <Section title="Our Criteria" eyebrow="What We Look For">
        <CriteriaGrid items={criteria} />
      </Section>
    </SiteShell>
  );
}
