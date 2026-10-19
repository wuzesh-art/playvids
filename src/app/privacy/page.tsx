import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy | downloadxAI",
  description:
    "Privacy Policy for playvids.videodownloaderai.com — what data downloadxAI collects (almost none) and how it is handled.",
};

const INTRO =
  "This Privacy Policy explains how playvids.videodownloaderai.com (the \"Site\"), operated by downloadxAI (\"we\", \"us\", or \"our\"), handles information. Our approach is simple: we collect as little data as possible, we do not run user accounts, and the small amount of data stored by the Site never leaves your browser. This policy is effective as of January 1, 2026.";

const SECTIONS = [
  {
    h2: "1. Information We Do Not Collect",
    bullets: [
      "No user accounts and no registration — there is nothing to sign up for.",
      "No video URLs or other content are uploaded to our servers, because the Site does not host, process, or proxy any downloads.",
      "No names, phone numbers, or payment details are requested anywhere on the Site.",
      "No email addresses are transmitted to us; the launch notification list (see below) is stored only in your own browser.",
    ],
  },
  {
    h2: "2. Local Storage in Your Browser",
    paragraphs: [
      "The Site uses your browser's localStorage to remember a few preferences on your device. This data is written and read entirely on your device and is never transmitted to us or to any third party. We store the following keys:",
    ],
    bullets: [
      "dxai-age-ok — a timestamp recording that you confirmed you are 18 or older, used to avoid asking again on every visit. It expires after 30 days.",
      "dxai-cookie-ok — a flag recording your acceptance of our cookie notice.",
      "downloadxai-notify-emails — the email address you enter to be notified of the downloader launch, kept locally so you stay in control of it.",
    ],
  },
  {
    h2: "3. Cookies and Analytics",
    paragraphs: [
      "We do not use tracking cookies. We do not embed advertising pixels, social media trackers, or fingerprinting scripts. If we introduce privacy-friendly, aggregate analytics in the future (such as a self-hosted Umami instance), the script will be loaded only after you have given consent through the cookie notice, and it will be configured to respect the \"Do Not Track\" signal. Until and unless such analytics are implemented, no analytics script of any kind runs on this Site.",
      "Because there are no tracking cookies, there is also no cookie banner consent database on any server — your consent choice lives only in your browser.",
    ],
  },
  {
    h2: "4. Server and Hosting Logs",
    paragraphs: [
      "Like every website, the hosting provider that serves this Site (Vercel) processes technical request data such as your IP address, browser type, and requested pages in order to deliver the Site to you. This processing is governed by the hosting provider's own privacy policy and is not something we control beyond choosing a reputable provider.",
    ],
  },
  {
    h2: "5. Third-Party Links",
    paragraphs: [
      "The Site may contain links to third-party websites, including the source platforms referenced by our tools. We are not responsible for the content or privacy practices of third-party sites. We encourage you to read the privacy policy of any site you visit.",
    ],
  },
  {
    h2: "6. Children's Privacy",
    paragraphs: [
      "The Site is intended for adults aged 18 and over, as confirmed by our age verification gate. We do not knowingly collect any personal information from children. If you believe a child has provided us with personal information, contact us and we will address it.",
    ],
  },
  {
    h2: "7. Changes to This Policy",
    paragraphs: [
      "We may update this Privacy Policy from time to time. The current version is always posted on this page with an updated effective date. Continued use of the Site after changes take effect constitutes acceptance of the updated policy.",
    ],
  },
  {
    h2: "8. Contact",
    paragraphs: [
      "If you have questions about this Privacy Policy or our data practices, contact us at support@videodownloaderai.com.",
    ],
  },
];

export default function Privacy() {
  return <LegalPage title="Privacy Policy" intro={INTRO} sections={SECTIONS} />;
}
