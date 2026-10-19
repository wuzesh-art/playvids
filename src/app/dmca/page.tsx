import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "DMCA / Copyright Policy | downloadxAI",
  description:
    "DMCA and copyright policy for playvids.videodownloaderai.com — how to submit infringement notices to downloadxAI.",
};

const INTRO =
  "downloadxAI respects the intellectual property rights of others and expects users of playvids.videodownloaderai.com (the \"Site\") to do the same. This policy describes how copyright holders can notify us of alleged infringement and how we handle such notices. It is effective as of January 1, 2026.";

const SECTIONS = [
  {
    h2: "1. Our Position on Copyright",
    paragraphs: [
      "The Site does not host, store, or distribute any video files. Nevertheless, we take copyright complaints seriously. If you are a copyright owner or an agent authorized to act on behalf of one, and you believe that content accessed, linked, or referenced in connection with our Service infringes your copyright, you may submit a notification under the Digital Millennium Copyright Act (\"DMCA\") to the contact point listed below.",
    ],
  },
  {
    h2: "2. Filing a DMCA Notice",
    paragraphs: [
      "To be effective, your written infringement notice must include all of the following items:",
    ],
    bullets: [
      "A physical or electronic signature of the copyright owner or a person authorized to act on their behalf.",
      "Identification of the copyrighted work you claim has been infringed, or, if multiple works are covered by a single notice, a representative list of those works.",
      "Identification of the material that is claimed to be infringing, including the exact URL or location on the Site, with enough detail for us to locate it.",
      "Your name, mailing address, telephone number, and email address.",
      "A statement that you have a good-faith belief that the use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law.",
      "A statement that the information in the notification is accurate, and, under penalty of perjury, that you are authorized to act on behalf of the copyright owner.",
    ],
  },
  {
    h2: "3. Where to Send Your Notice",
    paragraphs: [
      "Send your completed notice by email to support@videodownloaderai.com with the subject line \"DMCA Notice\". Notices that do not contain all of the information listed above may not be actionable. We may share your notice, including your contact details, with the party responsible for the material in question.",
    ],
  },
  {
    h2: "4. What Happens Next",
    paragraphs: [
      "Upon receiving a valid notice, we will review it promptly and, where appropriate, remove or disable access to the allegedly infringing material and take reasonable steps to inform the affected user. Because the Site does not host content, in most cases our response will focus on removing references, links, or functionality connected to the reported material.",
    ],
  },
  {
    h2: "5. Counter-Notification",
    paragraphs: [
      "If you believe that material you posted or accessed was removed or disabled by mistake or misidentification, you may submit a counter-notification to support@videodownloaderai.com including: your physical or electronic signature; identification of the material and its location before removal; a statement under penalty of perjury that you have a good-faith belief the material was removed by mistake; your name, address, and phone number; and a statement that you consent to the jurisdiction of the federal court in your district. We will restore removed material within 10 to 14 business days unless the copyright owner files an action seeking a court order against the alleged infringer.",
    ],
  },
  {
    h2: "6. Repeat Infringers",
    paragraphs: [
      "It is our policy, in appropriate circumstances and at our discretion, to disable or terminate access for users who are repeat infringers of third-party copyrights.",
    ],
  },
  {
    h2: "7. Changes to This Policy",
    paragraphs: [
      "We may revise this policy from time to time. The version posted on this page, with its effective date, is the current and binding version.",
    ],
  },
  {
    h2: "8. Contact",
    paragraphs: [
      "Questions about this DMCA / Copyright Policy may be directed to support@videodownloaderai.com.",
    ],
  },
];

export default function Dmca() {
  return <LegalPage title="DMCA / Copyright Policy" intro={INTRO} sections={SECTIONS} />;
}
