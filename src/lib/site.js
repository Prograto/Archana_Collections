export const site = {
  name: "Archana Collections",
  tagline: "Timeless Indian elegance, curated in Narsapur.",
  city: "Narsapur",
  state: "Andhra Pradesh",
  address: "Main Road, Narsapur, West Godavari District, Andhra Pradesh 534275",
  phone: "+91 00000 00000",
  whatsapp: "910000000000",
  email: "hello@archanacollections.in",
  hours: "Monday – Sunday · 10:00 AM – 9:00 PM",
  instagram: "https://instagram.com",
  facebook: "https://facebook.com",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Narsapur+Andhra+Pradesh",
  mapEmbed: "https://www.google.com/maps?q=Narsapur,+Andhra+Pradesh&output=embed",
};

export function whatsappLink(message) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function enquiryMessage(productName, kind) {
  return kind === "saree"
    ? `Hello Archana Collections, I'm interested in this saree: ${productName}. Could you please share the details and price?`
    : `Hello Archana Collections, I'm interested in this gold-plated article: ${productName}. Could you please share availability and details?`;
}
