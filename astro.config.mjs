// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import sanity from "@sanity/astro";
import react from "@astrojs/react";
import partytown from "@astrojs/partytown";
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
    output: "server",
    image: {
        domains: ["cdn.sanity.io/images/i8gsm6jf"],
        remotePatterns: [{ protocol: "https" }],
    },
    integrations: [
        tailwind({
            applyBaseStyles: false,
            configFile: "./tailwind.config.ts",
        }),
        sanity({
            projectId: "i8gsm6jf",
            dataset: "production",
            useCdn: false,
            apiVersion: "2024-12-14",
            studioBasePath: "/studio",
        }),
        react(),
        partytown({
            config: {
                forward: ["dataLayer.push"],
            },
        }),
    ],
    adapter: netlify(),
});
