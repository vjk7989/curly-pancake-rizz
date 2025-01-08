import { Metadata } from "next";

export const SITE_CONFIG: Metadata = {
    title: {
        // write a default title for astra a ai powered website builder suggest something unique and catchy don't use the same words of ai powered website builder give a unique name
        default: "MNOCH URBAN EDGE SOLUTIONS PVT. LTD.",
        template: `%s | MNOCH`
    },
    description: "Astra is an AI powered website builder that helps you create a website in minutes. No coding skills required. Get started for free!",
    icons: {
        icon: [
            {
                url: "/icons/favicon.ico",
                href: "/icons/favicon.ico",
            }
        ]
    },
    openGraph: {
        title: "MNOCH URBAN EDGE SOLUTIONS PVT. LTD.",
        description: "MNOCH is a company that helps you scale your business with our products and services",
        images: [
            {
                url: "/assets/og-image.png",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        creator: "@KRISHNA_MNOCH",
        title: "MNOCH URBAN EDGE SOLUTIONS PVT. LTD.",
        description: "MNOCH is a company that helps you scale your business with our products and services",
        images: [
            {
                url: "/assets/og-image.png",
            }
        ]
    },
    metadataBase: new URL("https://astra-app.vercel.app"),
};
