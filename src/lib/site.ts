export const shop = {
  name: "Shree Keshri Synthetics",
  shortName: "Shree Keshri",
  tagline: "Tradition meets today",
  owner: "Ramesh Keshri",
  phoneDisplay: "+91 75628 86262",
  phoneRaw: "+917562886262",
  whatsapp: "917562886262",
  email: "shreekeshrisynthetics@gmail.com",
  addressLine1: "High School Road",
  addressLine2: "Simri Bakhtiyarpur",
  addressLine3: "Saharsa district, Bihar",
  addressFull: "High School Road, Simri Bakhtiyarpur, Saharsa district, Bihar",
  lat: 25.720689,
  lng: 86.5952,
  latDms: "25°43'14.48\"N",
  lngDms: "86°35'42.72\"E",
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=25.720689,86.5952",
  directionsLink:
    "https://www.google.com/maps/dir/?api=1&destination=25.720689,86.5952",
  mapEmbed:
    "https://www.google.com/maps?q=25.720689,86.5952&hl=en&z=16&output=embed",
  social: {
    facebook: "https://www.facebook.com/rameshkeshrisbv19",
    instagram: "https://www.instagram.com/rameshkeshrisbv19",
    x: "https://x.com/rameshkeshri3",
  },
}

export const navLinks = [
  { label: "Collections", href: "#collections" },
  { label: "The Shop", href: "#shop" },
  { label: "The Owner", href: "#owner" },
  { label: "Visit", href: "#visit" },
]

export type Collection = {
  index: string
  title: string
  kicker: string
  copy: string
  image: string
  meta: string
  alt: string
}

export const collections: Collection[] = [
  {
    index: "01",
    title: "Kids Cloth",
    kicker: "Small sizes, full racks",
    copy: "Ready-made sets, frocks, shirts and shorts for boys and girls — cut for the age when everything is outgrown twice a year. Cotton first, because the Saharsa summer is long.",
    image: "./images/col-fabric.jpg",
    meta: "Boys · Girls · Sets · Cotton",
    alt: "Stacks of folded clothing in every colour, floor to ceiling, on the shelves at Shree Keshri Synthetics",
  },
  {
    index: "02",
    title: "Suitings",
    kicker: "For the men of the house",
    copy: "Suiting and shirting by the metre, and the shirts, trousers and jeans that go with them. Choose the bolt and take it to your tailor — or take the finished piece off the shelf.",
    image: "./images/col-readymade.jpg",
    meta: "Suiting · Shirting · Shirts · Trousers",
    alt: "Bolts of suiting and shirting fabric hanging in protective covers along the shop wall",
  },
  {
    index: "03",
    title: "Sarees",
    kicker: "The six-yard standard",
    copy: "Silk, cotton, georgette and soft chanderi — chosen for the way they fall, the way colour holds in daylight, and the way a border finishes a drape.",
    image: "./images/col-menswear.jpg",
    meta: "Silk · Cotton · Georgette · Printed",
    alt: "Boxed garments stacked floor to ceiling in the shop aisle, sorted by colour",
  },
]

export const alsoInStore = [
  "Dupattas",
  "Blouse pieces",
  "Petticoats",
  "Readymades",
  "Nightwear",
  "School uniforms",
  "Fabric by the metre",
  "Leggings",
]

export const promises = [
  {
    title: "Chosen by hand",
    copy: "Every lot is opened, unfolded and checked before it reaches the shelf. If the fall is wrong, it does not go out.",
  },
  {
    title: "Prices for the family",
    copy: "One shop for the whole household — saree, suit, shirt and jeans — so the budget stretches across everyone.",
  },
  {
    title: "Advice, not pressure",
    copy: "Tell us the occasion and the budget. We will show you three things worth your time, not thirty that are not.",
  },
]

export const stats = [
  { value: "03", label: "Core collections" },
  { value: "01", label: "Roof for the family" },
  { value: "07", label: "Days a week" },
]
