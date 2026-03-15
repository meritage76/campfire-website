import {
  CriteriaGrid,
  HeroSection,
  LeadForm,
  Section,
  SiteShell,
  StepsGrid,
} from "./components";

const criteria = [
  { title: "50+ Pads", description: "We focus on parks with enough scale to support durable operations and long-term upside." },
  { title: "$100K+ Annual Net Income", description: "Healthy cash flow matters. We look for well-run properties with proven income history." },
  { title: "Motivated Seller", description: "We work best with owners ready for a practical, respectful, and flexible transition." },
];

const steps = [
  { title: "Submit Your Info", description: "Tell us about your park, your timeline, and what kind of exit would work best for you." },
  { title: "We Underwrite Fast", description: "Our team reviews the opportunity quickly and comes back with direct feedback and next steps." },
  { title: "Close on Your Terms", description: "We structure deals thoughtfully, including creative options when they make sense for everyone." },
];

export default function Home() {
  return (
    <SiteShell>
      <HeroSection
        backgroundClass="bg-[#1e2a3a]"
        title="Acquiring RV Parks & Outdoor Communities Nationwide"
        subtitle="We buy well-run RV parks and campgrounds from owners ready for their next chapter."
        cta="Submit Your Property"
        ctaHref="#deal-form"
      />

      <Section title="What We Look For" eyebrow="Acquisition Criteria">
        <CriteriaGrid items={criteria} />
      </Section>

      <Section title="How It Works" eyebrow="Simple Process">
        <StepsGrid steps={steps} />
      </Section>

      <section id="deal-form" className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
        <LeadForm
          title="Submit Your Property"
          description="If you own an RV park, campground, or outdoor hospitality property and you are considering a sale, send us the basics. We will review it quickly and follow up directly."
          submitLabel="Send Property Details"
          successMessage="Your property submission has been received. Campfire Adventures will review it and reach out soon."
          fields={[
            { name: "name", label: "Name", placeholder: "Your full name" },
            { name: "phone", label: "Phone", type: "tel", placeholder: "(555) 555-5555" },
            { name: "email", label: "Email", type: "email", placeholder: "you@example.com" },
            { name: "propertyName", label: "Property Name", placeholder: "Pine Ridge RV Park" },
            { name: "location", label: "Location", placeholder: "City, State" },
            { name: "pads", label: "Number of Pads", placeholder: "Approximate pad count" },
            { name: "revenue", label: "Annual Revenue (Approximate)", placeholder: "$500,000" },
          ]}
          textarea={{
            name: "message",
            label: "Message",
            placeholder: "Anything we should know about the property, operations, timeline, or deal structure?",
          }}
        />
      </section>
    </SiteShell>
  );
}
