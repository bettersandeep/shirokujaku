import { defineConfig } from "cf/config";

export default defineConfig({
  worker: {
    name: "shirokujaku",
    compatibilityDate: "2026-09-21",
    observability: { enabled: true },
    domains: ["shirokujaku.com"],
  },
});
