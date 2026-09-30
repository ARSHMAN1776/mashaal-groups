import HouseDetail from "@/components/business/HouseDetail";

export const metadata = {
  title: "Mashwani Shipping L.L.C. | Freight Forwarding and NVOCC in Dubai",
  description:
    "Mashwani Shipping L.L.C. is a Dubai-based NVOCC and freight forwarder since 2017, moving cargo by sea, air and road across the Gulf, Pakistan, India and Afghan transit routes. Part of Mashaal Group.",
  keywords: ["Mashwani Shipping", "Mashwani Shipping LLC", "freight forwarder Dubai", "NVOCC Dubai", "Afghan transit cargo", "Mashaal Group"],
  alternates: { canonical: "/businesses/mashwani-shipping" },
  openGraph: {
    title: "Mashwani Shipping L.L.C. | Freight Forwarding and NVOCC in Dubai",
    description:
      "Mashwani Shipping L.L.C. is a Dubai-based NVOCC and freight forwarder since 2017, moving cargo by sea, air and road across the Gulf, Pakistan, India and Afghan transit routes. Part of Mashaal Group.",
    url: "/businesses/mashwani-shipping",
    type: "website",
  },
};

export default function Page() {
  return <HouseDetail id="shipping" />;
}
