// Product data with real images grouped by product
// Images are from /public/images/products/

export interface ProductData {
  slug: string;
  name: string;
  nameBn?: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: string;
  isNew?: boolean;
  isSoldOut?: boolean;
  description: string;
  details: string[];
  colors?: { name: string; value: string }[];
  rating: number;
  reviewCount: number;
  inStock: boolean;
  material: string;
}

const IMG = "/images/products";

export const products: ProductData[] = [
  {
    slug: "rajshahi-muslin-silk-maroon-gold-embroidered",
    name: "Rajshahi Muslin Silk - Maroon & Gold Embroidered",
    nameBn: "রাজশাহী মসলিন সিল্ক - মেরুন ও গোল্ড এমব্রয়ডারি",
    price: 4500,
    originalPrice: 5200,
    images: [
      `${IMG}/632099432_1219348246991447_8360437323766328310_n.jpg`,
      `${IMG}/632723538_1219348196991452_7730524771975732638_n.jpg`,
      `${IMG}/634794207_1219348290324776_1944593228023685830_n.jpg`,
    ],
    category: "Rajshahi Saree",
    isNew: true,
    description:
      "Exquisite Rajshahi muslin silk saree in rich maroon with intricate gold zari embroidery. The pallu features elaborate floral motifs with sequin detailing. Perfect for weddings, receptions, and special occasions.",
    details: [
      "Material: Rajshahi Muslin Silk",
      "Length: 5.5 meters (with blouse piece)",
      "Work: Gold zari embroidery with sequins",
      "Wash Care: Dry clean only",
      "Origin: Rajshahi, Bangladesh",
    ],
    colors: [
      { name: "Maroon", value: "#800020" },
      { name: "Navy Blue", value: "#000080" },
    ],
    rating: 4.8,
    reviewCount: 24,
    inStock: true,
    material: "Muslin Silk",
  },
  {
    slug: "red-silk-embroidered-bridal-saree",
    name: "Red Silk Embroidered Bridal Saree",
    nameBn: "লাল সিল্ক এমব্রয়ডারি ব্রাইডাল শাড়ি",
    price: 8500,
    originalPrice: 10000,
    images: [
      `${IMG}/629231860_1214759754116963_498631737993628965_n.jpg`,
      `${IMG}/640389985_1226738019585803_1834511869601375658_n.jpg`,
      `${IMG}/641426392_1226737982919140_4754169141534590691_n.jpg`,
      `${IMG}/641382718_1226737442919194_6703742666644298229_n.jpg`,
    ],
    category: "Silk Saree",
    isNew: true,
    description:
      "Stunning red silk bridal saree with elaborate gold and silver embroidery. Features all-over floral work with rich borders. A showstopper for your special day.",
    details: [
      "Material: Pure Silk",
      "Length: 5.5 meters (with blouse piece)",
      "Work: Heavy gold & silver embroidery",
      "Wash Care: Dry clean only",
      "Occasion: Bridal, Wedding",
    ],
    colors: [{ name: "Red", value: "#C41E3A" }],
    rating: 4.9,
    reviewCount: 31,
    inStock: true,
    material: "Pure Silk",
  },
  {
    slug: "sky-blue-organza-floral-embroidered",
    name: "Sky Blue Organza Floral Embroidered Saree",
    nameBn: "আকাশী নীল অর্গাঞ্জা ফ্লোরাল এমব্রয়ডারি শাড়ি",
    price: 6200,
    originalPrice: 7000,
    images: [
      `${IMG}/634205615_1221158366810435_6050418944835063452_n.jpg`,
      `${IMG}/634527274_1221157103477228_6336746112048888612_n.jpg`,
      `${IMG}/635353744_1221157073477231_3097376914766097515_n.jpg`,
      `${IMG}/636643521_1221158473477091_5305775145773330555_n.jpg`,
    ],
    category: "Organza Saree",
    isNew: true,
    description:
      "Breathtaking sky blue organza saree with beautiful floral hand-embroidery and green leaf motifs. Light and airy, perfect for summer occasions and parties.",
    details: [
      "Material: Premium Organza",
      "Length: 5.5 meters (with blouse piece)",
      "Work: Hand embroidery with floral motifs",
      "Wash Care: Dry clean recommended",
      "Occasion: Party, Casual Festive",
    ],
    rating: 4.7,
    reviewCount: 18,
    inStock: true,
    material: "Organza",
  },
  {
    slug: "brown-gold-tissue-saree-zari-work",
    name: "Brown Gold Tissue Saree with Zari Work",
    nameBn: "ব্রাউন গোল্ড টিস্যু শাড়ি জরি ওয়ার্ক",
    price: 5500,
    images: [
      `${IMG}/633105921_1219361513656787_1919393146663509620_n.jpg`,
      `${IMG}/632345063_1219352436991028_4349399940979030895_n.jpg`,
      `${IMG}/632621737_1219352340324371_6382853601984109505_n.jpg`,
    ],
    category: "Tissue Saree",
    description:
      "Elegant brown gold tissue saree with intricate zari work throughout. The shimmering fabric catches light beautifully, making it ideal for evening events and celebrations.",
    details: [
      "Material: Tissue Silk",
      "Length: 5.5 meters (with blouse piece)",
      "Work: All-over zari floral work",
      "Wash Care: Dry clean only",
      "Occasion: Evening, Reception",
    ],
    rating: 4.6,
    reviewCount: 15,
    inStock: true,
    material: "Tissue Silk",
  },
  {
    slug: "yellow-organza-silver-stone-work",
    name: "Yellow Organza Saree with Silver Stone Work",
    nameBn: "হলুদ অর্গাঞ্জা শাড়ি সিলভার স্টোন ওয়ার্ক",
    price: 5800,
    originalPrice: 6500,
    images: [
      `${IMG}/632124117_1219361560323449_775710323573078803_n.jpg`,
      `${IMG}/635151941_1219360436990228_8733680842458239403_n.jpg`,
      `${IMG}/634934478_1219360530323552_1527238699617627228_n.jpg`,
      `${IMG}/632623491_1219360480323557_7301568277312716127_n.jpg`,
    ],
    category: "Organza Saree",
    isNew: true,
    description:
      "Vibrant yellow organza saree with stunning silver stone and sequin work. Features crystal embellishments on the pallu and borders. Perfect for Holud and festive occasions.",
    details: [
      "Material: Organza",
      "Length: 5.5 meters (with blouse piece)",
      "Work: Silver stone & sequin embellishment",
      "Wash Care: Dry clean only",
      "Occasion: Holud, Festive, Party",
    ],
    colors: [{ name: "Yellow", value: "#DAA520" }],
    rating: 4.8,
    reviewCount: 22,
    inStock: true,
    material: "Organza",
  },
  {
    slug: "olive-gold-designer-sequin-saree",
    name: "Olive Gold Designer Sequin Saree",
    nameBn: "অলিভ গোল্ড ডিজাইনার সিকুইন শাড়ি",
    price: 7200,
    originalPrice: 8500,
    images: [
      `${IMG}/630331575_1217214713871467_6276752738203733599_n.jpg`,
      `${IMG}/632146118_1217214767204795_4247043790715875765_n.jpg`,
      `${IMG}/631087537_1217208513872087_4577884924972227346_n.jpg`,
      `${IMG}/628810057_1217208603872078_4962040719136417775_n.jpg`,
    ],
    category: "Designer Saree",
    isNew: true,
    description:
      "Luxurious olive gold designer saree adorned with heavy sequin and mirror work. The net fabric with crystal embellishments creates a mesmerizing sparkle. A true statement piece.",
    details: [
      "Material: Net with sequin & mirror work",
      "Length: 5.5 meters (with blouse piece)",
      "Work: Sequins, mirrors & crystal stones",
      "Wash Care: Dry clean only",
      "Occasion: Wedding, Reception, Party",
    ],
    rating: 4.9,
    reviewCount: 27,
    inStock: true,
    material: "Net",
  },
  {
    slug: "light-blue-floral-print-organza",
    name: "Light Blue Floral Print Organza Saree",
    nameBn: "হালকা নীল ফ্লোরাল প্রিন্ট অর্গাঞ্জা শাড়ি",
    price: 4800,
    images: [
      `${IMG}/642291001_1229410139318591_2235371599286455991_n.jpg`,
      `${IMG}/641429758_1229410095985262_5931980128145206437_n.jpg`,
      `${IMG}/643725526_1229410222651916_7804753995821098968_n.jpg`,
      `${IMG}/641539349_1229410179318587_478779761423590207_n.jpg`,
    ],
    category: "Organza Saree",
    description:
      "Delicate light blue organza saree with beautiful blue floral print and crystal stone embellishment. Comes with a matching embroidered blouse piece. Elegant and graceful.",
    details: [
      "Material: Organza with floral print",
      "Length: 5.5 meters (with blouse piece)",
      "Work: Crystal stone & hand embroidery on blouse",
      "Wash Care: Dry clean recommended",
      "Occasion: Party, Casual Festive",
    ],
    rating: 4.5,
    reviewCount: 12,
    inStock: true,
    material: "Organza",
  },
  {
    slug: "maroon-karchupi-muslin-silk-heavy",
    name: "Maroon Karchupi Muslin Silk - Heavy Work",
    nameBn: "মেরুন কারচুপি মসলিন সিল্ক - হেভি ওয়ার্ক",
    price: 9500,
    originalPrice: 11000,
    images: [
      `${IMG}/625690242_1211220151137590_7760139563332400953_n.jpg`,
      `${IMG}/626287157_1210840771175528_1997408051693898810_n.jpg`,
      `${IMG}/632053095_1219350350324570_5818899404281067344_n.jpg`,
      `${IMG}/632457515_1219350293657909_1668502890096977773_n.jpg`,
    ],
    category: "Muslin Silk",
    isNew: true,
    description:
      "Premium maroon muslin silk saree with exquisite karchupi (hand-embroidery) work. Heavy embellishment with gold thread and sequins throughout. A masterpiece for the most special occasions.",
    details: [
      "Material: Muslin Silk",
      "Length: 5.5 meters (with blouse piece)",
      "Work: Karchupi hand embroidery with gold thread",
      "Wash Care: Dry clean only",
      "Occasion: Bridal, Wedding, Grand Festive",
    ],
    rating: 5.0,
    reviewCount: 9,
    inStock: true,
    material: "Muslin Silk",
  },
  {
    slug: "muslin-silk-collection-multi-color",
    name: "Muslin Silk Collection - Multi Color Set",
    nameBn: "মসলিন সিল্ক কালেকশন - মাল্টি কালার সেট",
    price: 3200,
    images: [
      `${IMG}/636692276_1221158410143764_3286136893396369197_n.jpg`,
      `${IMG}/632307864_1214759914116947_4471658909714685423_n.jpg`,
      `${IMG}/626268128_1214760354116903_2613380448800266423_n.jpg`,
      `${IMG}/626270888_1214760017450270_8289777864294381058_n.jpg`,
    ],
    category: "Muslin Saree",
    description:
      "Beautiful muslin silk sarees available in multiple vibrant colors with traditional zari borders. Comfortable for daily wear and casual occasions. Each piece is handpicked for quality.",
    details: [
      "Material: Muslin Silk",
      "Length: 5.5 meters (with blouse piece)",
      "Work: Zari border work",
      "Wash Care: Gentle hand wash or dry clean",
      "Occasion: Daily, Casual, Office",
    ],
    rating: 4.4,
    reviewCount: 35,
    inStock: true,
    material: "Muslin Silk",
  },
  {
    slug: "black-gold-net-embroidered-party",
    name: "Black & Gold Net Embroidered Party Saree",
    nameBn: "ব্ল্যাক ও গোল্ড নেট এমব্রয়ডারি পার্টি শাড়ি",
    price: 6800,
    images: [
      `${IMG}/629264826_1214766637449608_725739910531330549_n.jpg`,
      `${IMG}/628031302_1214766687449603_8666629244989786820_n.jpg`,
      `${IMG}/630719314_1214766737449598_1940968258761958457_n.jpg`,
    ],
    category: "Designer Saree",
    isNew: true,
    description:
      "Sophisticated black and gold net saree with heavy embroidered borders. The combination of black net and gold sequin work creates a dramatic and glamorous look.",
    details: [
      "Material: Net with gold embroidery",
      "Length: 5.5 meters (with blouse piece)",
      "Work: Gold sequin & zari embroidery",
      "Wash Care: Dry clean only",
      "Occasion: Party, Cocktail, Evening",
    ],
    rating: 4.7,
    reviewCount: 19,
    inStock: true,
    material: "Net",
  },
  {
    slug: "red-gold-katan-wedding-saree",
    name: "Red & Gold Katan Wedding Saree",
    nameBn: "রেড ও গোল্ড কাতান ওয়েডিং শাড়ি",
    price: 7500,
    originalPrice: 8800,
    images: [
      `${IMG}/633778464_1219350163657922_9108914549240544746_n.jpg`,
      `${IMG}/632751050_1219350383657900_7667306982253667231_n.jpg`,
      `${IMG}/634446230_1219352383657700_7530461819219594592_n.jpg`,
      `${IMG}/634934478_1219348146991457_2574372038653954649_n.jpg`,
    ],
    category: "Katan Saree",
    description:
      "Classic red and gold Katan silk wedding saree with traditional paisley and floral motifs. Rich gold zari weaving throughout with tassel detailing on the pallu.",
    details: [
      "Material: Katan Silk",
      "Length: 5.5 meters (with blouse piece)",
      "Work: Zari weaving with tassel",
      "Wash Care: Dry clean only",
      "Occasion: Wedding, Bridal",
    ],
    rating: 4.8,
    reviewCount: 21,
    inStock: true,
    material: "Katan Silk",
  },
  {
    slug: "pastel-collection-daily-wear",
    name: "Pastel Collection - Everyday Elegance",
    nameBn: "প্যাস্টেল কালেকশন - এভরিডে এলিগেন্স",
    price: 2200,
    images: [
      `${IMG}/632078387_1217205327205739_688551072934045568_n.jpg`,
      `${IMG}/632401180_1217205250539080_7345831826682764513_n.jpg`,
      `${IMG}/629328855_1217205367205735_4039482024468130421_n.jpg`,
      `${IMG}/632514088_1217208560538749_218627096670450956_n.jpg`,
    ],
    category: "Cotton Saree",
    description:
      "Soft pastel cotton and silk blend sarees ideal for everyday wear. Lightweight and comfortable with elegant borders. Available in multiple refreshing colors.",
    details: [
      "Material: Cotton Silk Blend",
      "Length: 5.5 meters (with blouse piece)",
      "Work: Woven border",
      "Wash Care: Gentle hand wash",
      "Occasion: Daily, Office, Casual",
    ],
    rating: 4.3,
    reviewCount: 42,
    inStock: true,
    material: "Cotton Silk",
  },
];

// First 8 products for "New Arrivals" on home page
export const newArrivals = products.slice(0, 8);

// Featured products for specific sections
export const featuredProducts = products.filter(
  (p) => p.originalPrice && p.originalPrice > p.price
);
