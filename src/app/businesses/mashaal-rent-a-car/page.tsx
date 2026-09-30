import HouseDetail from "@/components/business/HouseDetail";

export const metadata = {
  title: "Mashaal Rent A Car | Corporate Fleet Leasing and Executive Car Rental",
  description:
    "Mashaal Rent A Car offers long-term corporate fleet leasing, executive chauffeur and airport transit, and inter-city car rental from hubs in Punjab, Pakistan. Part of Mashaal Group.",
  keywords: ["Mashaal Rent A Car", "Mashaal Rent a Car Punjab", "Mashaal car rental", "fleet leasing Pakistan", "executive car rental Punjab", "Mashaal Group"],
  alternates: { canonical: "/businesses/mashaal-rent-a-car" },
  openGraph: {
    title: "Mashaal Rent A Car | Corporate Fleet Leasing and Executive Car Rental",
    description:
      "Mashaal Rent A Car offers long-term corporate fleet leasing, executive chauffeur and airport transit, and inter-city car rental from hubs in Punjab, Pakistan. Part of Mashaal Group.",
    url: "/businesses/mashaal-rent-a-car",
    type: "website",
  },
};

export default function Page() {
  return <HouseDetail id="rentacar" />;
}
