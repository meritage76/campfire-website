import { HeroSection, InfoGrid, LeadForm, Section, SiteShell } from "../components";

const opportunity = [
  {
    title: "Recession-resistant demand",
    description: "RV parks sit in a resilient niche of affordable travel, seasonal housing, and outdoor hospitality that tends to hold up well through market cycles.",
  },
  {
    title: "Growing interest in outdoor stays",
    description: "Consumer demand for flexible travel, nature-driven experiences, and drive-to destinations continues to support the sector nationwide.",
  },
  {
    title: "Stable cash flow potential",
    description: "Well-run parks benefit from recurring occupancy, ancillary revenue, and multiple ways to improve performance over time.",
  },
];

const structures = [
  {
    title: "Seller finance",
    description: "We pursue flexible capital stacks that allow sellers to exit on terms that reduce friction and preserve momentum.",
  },
  {
    title: "Creative acquisition",
    description: "We look beyond conventional debt and use thoughtful structuring to unlock opportunities others cannot close.",
  },
  {
    title: "Value-add plays",
    description: "Our strategy targets operational improvements, occupancy upside, rate optimization, and long-term property enhancement.",
  },
];

const partnerReasons = [
  {
    title: "Experienced acquisition team",
    description: "Campfire Adventures is focused specifically on RV parks and outdoor hospitality, with disciplined screening and execution.",
  },
  {
    title: "Backed by strong communities",
    description: "Our SubTo and Gator relationships expand our creative finance toolkit and strengthen deal structuring flexibility.",
  },
  {
    title: "Active deal flow",
    description: "We are building a nationwide pipeline of opportunities aligned with clear acquisition criteria and investor fit.",
  },
];

export default function InvestorsPage() {
  return (
    <SiteShell>
      <HeroSection
        backgroundClass="bg-[#2a7a6b]"
        title="Partner With Us"
        subtitle="We are assembling investor relationships around a focused RV park acquisition strategy built for speed, flexibility, and long-term value."
      />

      <Section title="The RV Park Opportunity" eyebrow="Why This Asset Class">
        <InfoGrid items={opportunity} />
      </Section>

      <Section title="How We Structure Deals" eyebrow="Execution Strategy">
        <InfoGrid items={structures} />
      </Section>

      <Section title="Why Partner With Campfire" eyebrow="Investor Fit">
        <InfoGrid items={partnerReasons} />
      </Section>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
        <LeadForm
          title="Investor Interest Form"
          description="If you want to be considered for current or future opportunities, send over your investment profile and preferred structure."
          submitLabel="Connect With Our Team"
          successMessage="Your investor submission has been received. Campfire Adventures will follow up with next steps."
          fields={[
            { name: "name", label: "Name", placeholder: "Your full name" },
            { name: "email", label: "Email", type: "email", placeholder: "you@example.com" },
            { name: "phone", label: "Phone", type: "tel", placeholder: "(555) 555-5555" },
            { name: "capital", label: "Capital to Deploy", placeholder: "$250,000+" },
          ]}
          select={{
            name: "structure",
            label: "Preferred Structure",
            options: [
              { value: "equity", label: "Equity Partner" },
              { value: "debt", label: "Debt/Lending" },
              { value: "jv", label: "JV" },
            ],
          }}
          textarea={{
            name: "message",
            label: "Message",
            placeholder: "Tell us about your background, target check size, preferred geography, or how you like to structure deals.",
          }}
        />
      </section>
    </SiteShell>
  );
}
