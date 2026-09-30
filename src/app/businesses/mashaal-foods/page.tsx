import HouseDetail from "@/components/business/HouseDetail";

export const metadata = {
  title: "Mashaal Foods | Food Commodities and Staples in Pakistan",
  description:
    "Mashaal Foods sources and distributes essential food commodities and staples across Pakistan and regional trade corridors. Part of Mashaal Group.",
  keywords: ["Mashaal Foods", "Mashaal Food", "Mashaal Food Pakistan", "food commodities supplier Pakistan", "Mashaal Group"],
  alternates: { canonical: "/businesses/mashaal-foods" },
  openGraph: {
    title: "Mashaal Foods | Food Commodities and Staples in Pakistan",
    description:
      "Mashaal Foods sources and distributes essential food commodities and staples across Pakistan and regional trade corridors. Part of Mashaal Group.",
    url: "/businesses/mashaal-foods",
    type: "website",
  },
};

export default function Page() {
  return <HouseDetail id="foods" />;
}
