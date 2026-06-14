import type { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || "https://tecnolareiras.pt";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/area-cliente", "/api", "/login", "/registar"],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
