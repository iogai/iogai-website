import type { Metadata } from "next";
import { LegalShell } from "@/components/LegalShell";
import { site } from "@/lib/copy";

export const metadata: Metadata = {
  title: "Terms of Service — IOGAI",
  description: "The terms that govern use of the IOGAI website and services.",
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <LegalShell title="Terms of Service" updated="July 28, 2026">
      <p>
        These Terms govern your use of the IOGAI website and your request for services. By using
        this site or submitting a booking request, you agree to these Terms.
      </p>

      <h2>Service requests</h2>
      <p>
        Submitting the booking form is a request for service, not a confirmed appointment. We will
        contact you to confirm timing, scope, and pricing. Quotes are estimates until a technician has
        inspected the system on site.
      </p>

      <h2>Pricing &amp; payment</h2>
      <p>
        Diagnostic fees, repair costs, and any applicable terms will be communicated to you before
        work begins. You are responsible for payment of services you authorize.
      </p>

      <h2>Workmanship &amp; warranties</h2>
      <p>
        We stand behind our work with a workmanship warranty on completed repairs. New installations
        carry the applicable manufacturer parts warranty in addition to ours. Warranty details are
        provided with your service documentation.
      </p>

      <h2>Your responsibilities</h2>
      <ul>
        <li>Provide accurate contact and service information.</li>
        <li>Ensure safe access to the equipment at the scheduled time.</li>
        <li>Disclose known hazards or prior work relevant to the system.</li>
      </ul>

      <h2>Website use</h2>
      <p>
        This website is provided &ldquo;as is&rdquo; without warranties of any kind. We are not liable
        for indirect or incidental damages arising from use of the site. Content and imagery are for
        general information and may not reflect the exact equipment at your location.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these Terms? Email <a href={site.emailHref}>{site.email}</a> or call{" "}
        <a href={site.phoneHref}>{site.phoneDisplay}</a>.
      </p>

      <p className="text-sm">
        This document is a general template and not legal advice. Please have it reviewed by a
        qualified attorney before relying on it for your business.
      </p>
    </LegalShell>
  );
}
