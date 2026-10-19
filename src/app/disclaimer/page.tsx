import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Disclaimer | downloadxAI",
  description:
    "Disclaimer for playvids.videodownloaderai.com — no affiliation with Playvids, no hosted content, and user responsibility for downloads.",
};

const INTRO =
  "The following disclaimer governs your use of playvids.videodownloaderai.com (the \"Site\"), operated by downloadxAI. It applies to all content and functionality on the Site and is effective as of January 1, 2026.";

const SECTIONS = [
  {
    h2: "1. Core Statement",
    paragraphs: [
      "downloadxAI is not affiliated with, endorsed by, or sponsored by Playvids. We do not host, store, or distribute any video files. All downloads are performed at the user's own responsibility and must comply with the source platform's terms of service and applicable law. Users may only download content they own, that is in the public domain, or whose creator has granted permission.",
    ],
  },
  {
    h2: "2. No Affiliation with Third-Party Platforms",
    paragraphs: [
      "The Site references Playvids and possibly other platforms for identification purposes only. downloadxAI is an independent project and has no partnership, sponsorship, or endorsement relationship with Playvids or with any other platform, company, or trademark holder mentioned on the Site. All trademarks, logos, and brand names are the property of their respective owners. Nothing on the Site should be construed as granting any right to use any third-party trademark.",
    ],
  },
  {
    h2: "3. No Hosting, Storage, or Distribution of Content",
    paragraphs: [
      "The Site does not host, store, cache, upload, or distribute any video or media files, nor does it index, link to, or provide access to specific third-party content. Any functionality described on the Site, including video downloading, is offered as a general-purpose software tool. The Site itself contains no third-party media, and we have no control over, and take no responsibility for, the content that users choose to access with tools of their own.",
    ],
  },
  {
    h2: "4. User Responsibility",
    paragraphs: [
      "You are solely responsible for your use of the Site and of any download functionality. Before downloading any content, you must ensure that you are legally permitted to do so. You may only download content that you own, that is in the public domain, or whose creator has granted you explicit permission. Downloading copyrighted material without authorization may violate copyright law in your jurisdiction and the terms of service of the source platform, and may result in consequences for which we accept no liability.",
      "You are also responsible for complying with any local laws and regulations that apply to you, including laws regarding adult content, copyright, and data protection.",
    ],
  },
  {
    h2: "5. Copyright Compliance",
    paragraphs: [
      "We respect the intellectual property rights of others and expect our users to do the same. If you are a copyright holder and believe that your work has been infringed in connection with our Service, please review our DMCA / Copyright Policy and send a notice to support@videodownloaderai.com. We respond to valid notices and will take appropriate action, including removing access to infringing material where applicable.",
    ],
  },
  {
    h2: "6. External Links",
    paragraphs: [
      "The Site may contain links to external websites that are not provided or maintained by us. We do not guarantee the accuracy, relevance, timeliness, or completeness of any information on external sites, and inclusion of a link does not imply endorsement.",
    ],
  },
  {
    h2: "7. Service Availability",
    paragraphs: [
      "The Site and any future download functionality are provided \"as is\" without warranties of any kind. Features described on the Site are under development and may change, be delayed, or be cancelled at any time. We do not warrant uninterrupted or error-free operation.",
    ],
  },
  {
    h2: "8. Contact",
    paragraphs: [
      "Questions about this disclaimer may be directed to support@videodownloaderai.com.",
    ],
  },
];

export default function Disclaimer() {
  return <LegalPage title="Disclaimer" intro={INTRO} sections={SECTIONS} />;
}
