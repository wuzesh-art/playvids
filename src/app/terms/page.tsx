import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service | downloadxAI",
  description:
    "Terms of Service for playvids.videodownloaderai.com — the downloadxAI Playvids video downloader.",
};

const INTRO =
  "These Terms of Service (\"Terms\") govern your access to and use of playvids.videodownloaderai.com (the \"Site\"), operated by downloadxAI (\"we\", \"us\", or \"our\"). By accessing or using the Site, you agree to be bound by these Terms. If you do not agree, please do not use the Site. These Terms are effective as of January 1, 2026.";

const SECTIONS = [
  {
    h2: "1. Description of the Service",
    paragraphs: [
      "The Site is a marketing and information website for downloadxAI, a free online video downloader for Playvids content. The downloader is currently being prepared for launch. Certain features described on the Site, including the ability to download videos, may not yet be available. We may change, suspend, or discontinue any part of the Service at any time without notice.",
      "The Site itself does not host, store, or distribute any video files, and it does not provide access to third-party content. Any download functionality made available in the future will be provided as a tool, and you are solely responsible for how you use it.",
    ],
  },
  {
    h2: "2. Acceptable Use",
    paragraphs: [
      "You agree to use the Site and any future download functionality only in compliance with these Terms, the terms of service of the source platform, and all applicable laws, including copyright law. You may only download content that you own, that is in the public domain, or whose creator has granted you explicit permission to download. Downloading copyrighted material without authorization may violate the law in your jurisdiction and the terms of the source platform.",
      "You agree not to misuse the Site, attempt to disrupt its operation, scrape it at abusive volumes, or use it for any unlawful purpose.",
    ],
  },
  {
    h2: "3. No Affiliation with Playvids",
    paragraphs: [
      "downloadxAI is an independent project. We are not affiliated with, endorsed by, or sponsored by Playvids or any other platform referenced on this Site. All product names, trademarks, and registered trademarks mentioned on the Site are the property of their respective owners. References to third-party platforms are for identification purposes only and do not imply any endorsement or partnership.",
    ],
  },
  {
    h2: "4. Intellectual Property",
    paragraphs: [
      "The Site, its design, text, graphics, and the downloadxAI name and logo are the property of downloadxAI and are protected by intellectual property laws. You may not reproduce, distribute, or create derivative works from any part of the Site without our prior written consent, except for the limited personal use of accessing the Site in a web browser.",
    ],
  },
  {
    h2: "5. Disclaimer of Warranties",
    paragraphs: [
      "The Site and any future services are provided \"as is\" and \"as available\", with all faults and without warranty of any kind. To the maximum extent permitted by law, we disclaim all warranties, express or implied, including warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that the Site will be uninterrupted, secure, or error-free, or that any downloaded content will meet your expectations.",
    ],
  },
  {
    h2: "6. Limitation of Liability",
    paragraphs: [
      "To the fullest extent permitted by law, downloadxAI shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or goodwill, arising out of or related to your use of, or inability to use, the Site. Your use of any download functionality is entirely at your own risk. If you are dissatisfied with the Site, your sole remedy is to stop using it.",
    ],
  },
  {
    h2: "7. Changes to These Terms",
    paragraphs: [
      "We may revise these Terms from time to time. The most current version will always be posted on this page with an updated effective date. By continuing to use the Site after changes take effect, you agree to the revised Terms.",
    ],
  },
  {
    h2: "8. Governing Law and Contact",
    paragraphs: [
      "These Terms are governed by the laws applicable in your jurisdiction of use, without regard to conflict-of-law principles. Questions about these Terms may be directed to us at support@videodownloaderai.com.",
    ],
  },
];

export default function Terms() {
  return <LegalPage title="Terms of Service" intro={INTRO} sections={SECTIONS} />;
}
