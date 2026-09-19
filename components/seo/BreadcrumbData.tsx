import { SITE_URL } from "@/lib/seo";
import StructuredData from "./StructuredData";

export default function BreadcrumbData({
  title,
  path,
}: {
  title: string;
  path: string;
}) {
  return (
    <StructuredData
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Lovla", item: SITE_URL },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: `${SITE_URL}/blog`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: title,
            item: `${SITE_URL}${path}`,
          },
        ],
      }}
    />
  );
}
