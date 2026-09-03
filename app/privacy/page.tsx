import type { Metadata } from "next";
import { LegalShell } from "@/components/LegalShell";
import { site } from "@/lib/copy";

export const metadata: Metadata = {
  title: "Privacy Policy — IOGAI",
  description: "How IOGAI collects, uses, and protects your information.",
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <LegalShell title="Privacy Policy" updated="July 28, 2026">
      <p>
        This Privacy Policy explains how IOGAI (&ldquo;we,&rdquo; &ldquo;us&rdquo;) collects, uses, and
        protects information when you use our website or request service. By using this site or
        submitting a booking request, you agree to this policy.
      </p>

      <h2>Information we collect</h2>
      <ul>
        <li>Contact details you provide: first name, last name, phone number, and email address.</li>
        <li>Service details you provide: the type of service, a description of the issue, and any photo you choose to upload.</li>
        <li>Basic technical data your browser sends automatically (such as device type and pages viewed), used to keep the site working and secure.</li>
      </ul>

      <h2>How we use your information</h2>
      <ul>
        <li>To respond to your request, schedule service, and provide quotes.</li>
        <li>To contact you about your booking by phone, text, or email.</li>
        <li>To improve our website and services.</li>
      </ul>
      <p>
        We do not sell your personal information. We share it only with team members and trusted
        service providers who help us operate (for example, email delivery), and only as needed.
      </p>

      <h2 id="cookies">Cookies &amp; analytics</h2>
      <p>
        We may use cookies and analytics tools (such as Google Analytics and the Meta Pixel) to
        understand how visitors use the site and to measure advertising. These tools may set cookies
        in your browser. You can control cookies through your browser settings. If we run ads, these
        tools help us reach people who may need our services and measure results.
      </p>

      <h2>Data retention &amp; security</h2>
      <p>
        We keep booking information only as long as needed to provide service and meet legal and
        business requirements, then delete it. We use reasonable measures to protect your data, though
        no method of transmission over the internet is completely secure.
      </p>

      <h2>Your choices</h2>
      <p>
        You may request access to, correction of, or deletion of your personal information by
        contacting us at <a href={site.emailHref}>{site.email}</a>. You can opt out of marketing
        messages at any time.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this policy? Email <a href={site.emailHref}>{site.email}</a> or call{" "}
        <a href={site.phoneHref}>{site.phoneDisplay}</a>.
      </p>

      <p className="text-sm">
        This document is a general template and not legal advice. Please have it reviewed by a
        qualified attorney before relying on it for your business.
      </p>
    </LegalShell>
  );
}
