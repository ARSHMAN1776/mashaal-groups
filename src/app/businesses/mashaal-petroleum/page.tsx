import HouseDetail from "@/components/business/HouseDetail";

export const metadata = {
  title: "Mashaal Petroleum | Total PARCO and PSO Fuel Stations in Punjab",
  description:
    "Mashaal Petroleum runs authorized Total PARCO (Khanpur Road, Rahim Yar Khan) and Pakistan State Oil (Raiwind Road, Lahore) fuel stations, open 24 hours a day. Part of Mashaal Group.",
  keywords: ["Mashaal Petroleum", "Mashaal Petrol Pump", "Mashaal Petroleum Rahim Yar Khan", "Mashaal Petroleum Lahore", "Total PARCO Khanpur Road", "PSO Raiwind Road", "Mashaal Group"],
  alternates: { canonical: "/businesses/mashaal-petroleum" },
  openGraph: {
    title: "Mashaal Petroleum | Total PARCO and PSO Fuel Stations in Punjab",
    description:
      "Mashaal Petroleum runs authorized Total PARCO (Khanpur Road, Rahim Yar Khan) and Pakistan State Oil (Raiwind Road, Lahore) fuel stations, open 24 hours a day. Part of Mashaal Group.",
    url: "/businesses/mashaal-petroleum",
    type: "website",
  },
};

export default function Page() {
  return <HouseDetail id="petroleum" />;
}
