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
    title: "Sarees",
    kicker: "The six-yard standard",
    copy: "Silk, cotton, georgette and soft chanderi — chosen for the way they fall, the way colour holds in daylight, and the way a border finishes a drape.",
    image: "./images/col-fabric.jpg",
    meta: "Silk · Cotton · Georgette · Printed",
    alt: "Stacks of folded sarees in every colour, floor to ceiling, beside the pink curtain at the back of the shop",
  },
  {
    index: "02",
    title: "Readymades & Suits",
    kicker: "Stitched, finished, ready",
    copy: "Anarkalis, kurti sets and salwar suits that fit the day you buy them. Cut for real bodies, finished for festival evenings and ordinary Tuesdays alike.",
    image: "./images/col-readymade.jpg",
    meta: "Kurtis · Anarkali · Salwar suits",
    alt: "Readymade suits and kurtis hanging in protective covers along the shop wall",
  },
  {
    index: "03",
    title: "Menswear",
    kicker: "Everyday cotton, occasion ready",
    copy: "Shirts, t-shirts and denim for the men of the house. Plain weaves for work, prints for the weekend, and denim that survives the district.",
    image: "./images/col-menswear.jpg",
    meta: "Shirts · T-shirts · Jeans",
    alt: "Colourful boxed shirts stacked floor to ceiling in the menswear aisle",
  },
]

export const alsoInStore = [
  "Dupattas",
  "Blouse pieces",
  "Petticoats",
  "Leggings",
  "Nightwear",
  "Kids' wear",
  "School uniforms",
  "Fabric by the metre",
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
  { value: "06", label: "Core collections" },
  { value: "01", label: "Roof for the family" },
  { value: "07", label: "Days a week" },
]
