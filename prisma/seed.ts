import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  // Create admin user
  const adminPassword = await bcrypt.hash("admin123", 12);
  const admin = await prisma.user.upsert({
    where: { email: "admin@renuscloset.com" },
    update: {},
    create: {
      name: "Renu's Closet Admin",
      email: "admin@renuscloset.com",
      password: adminPassword,
      role: "ADMIN",
    },
  });
  console.log("Admin user created:", admin.email);

  // Create categories
  const categories = await Promise.all([
    prisma.category.upsert({
      where: { slug: "rajshahi-silk" },
      update: {},
      create: {
        name: "Rajshahi Silk Saree",
        nameBn: "রাজশাহী সিল্ক শাড়ি",
        slug: "rajshahi-silk",
        description: "Premium Rajshahi silk sarees with traditional designs",
      },
    }),
    prisma.category.upsert({
      where: { slug: "muslin" },
      update: {},
      create: {
        name: "Muslin Saree",
        nameBn: "মসলিন শাড়ি",
        slug: "muslin",
        description: "Finest muslin fabric sarees from Bangladesh",
      },
    }),
    prisma.category.upsert({
      where: { slug: "jamdani" },
      update: {},
      create: {
        name: "Jamdani Saree",
        nameBn: "জামদানি শাড়ি",
        slug: "jamdani",
        description: "Handwoven Jamdani sarees with intricate patterns",
      },
    }),
    prisma.category.upsert({
      where: { slug: "katan" },
      update: {},
      create: {
        name: "Katan Saree",
        nameBn: "কাতান শাড়ি",
        slug: "katan",
        description: "Classic Katan silk sarees for special occasions",
      },
    }),
    prisma.category.upsert({
      where: { slug: "cotton" },
      update: {},
      create: {
        name: "Cotton Saree",
        nameBn: "সুতি শাড়ি",
        slug: "cotton",
        description: "Comfortable cotton sarees for everyday wear",
      },
    }),
    prisma.category.upsert({
      where: { slug: "banarasi" },
      update: {},
      create: {
        name: "Banarasi Saree",
        nameBn: "বেনারসি শাড়ি",
        slug: "banarasi",
        description: "Luxurious Banarasi sarees with gold zari work",
      },
    }),
    prisma.category.upsert({
      where: { slug: "half-silk" },
      update: {},
      create: {
        name: "Half Silk Saree",
        nameBn: "হাফ সিল্ক শাড়ি",
        slug: "half-silk",
        description: "Affordable silk blend sarees",
      },
    }),
    prisma.category.upsert({
      where: { slug: "designer" },
      update: {},
      create: {
        name: "Designer Saree",
        nameBn: "ডিজাইনার শাড়ি",
        slug: "designer",
        description: "Exclusive designer collection sarees",
      },
    }),
  ]);
  console.log(`${categories.length} categories created`);

  // Create sample products
  const sampleProducts = [
    {
      name: "Royal Rajshahi Silk Saree - Maroon Gold",
      nameBn: "রয়্যাল রাজশাহী সিল্ক শাড়ি - মেরুন গোল্ড",
      slug: "royal-rajshahi-silk-maroon-gold",
      description:
        "Exquisite Rajshahi silk saree in rich maroon with gold border work. Perfect for weddings and special occasions. Features traditional motifs and premium quality silk fabric.",
      price: 4500,
      comparePrice: 5500,
      stock: 15,
      categoryId: categories[0].id,
      status: "ACTIVE" as const,
      featured: true,
    },
    {
      name: "Pure Muslin Saree - Ivory White",
      nameBn: "পিওর মসলিন শাড়ি - আইভরি সাদা",
      slug: "pure-muslin-ivory-white",
      description:
        "Authentic muslin saree in pristine ivory white. Lightweight and breathable, ideal for summer occasions. Handcrafted with delicate embroidery.",
      price: 6500,
      comparePrice: 8000,
      stock: 8,
      categoryId: categories[1].id,
      status: "ACTIVE" as const,
      featured: true,
    },
    {
      name: "Dhakai Jamdani Saree - Pink Floral",
      nameBn: "ঢাকাই জামদানি শাড়ি - পিঙ্ক ফ্লোরাল",
      slug: "dhakai-jamdani-pink-floral",
      description:
        "Beautiful Dhakai Jamdani with intricate floral motifs on soft pink base. Each piece is handwoven by master artisans of Dhaka.",
      price: 8500,
      comparePrice: 10000,
      stock: 5,
      categoryId: categories[2].id,
      status: "ACTIVE" as const,
      featured: true,
    },
    {
      name: "Katan Silk Saree - Navy Blue",
      nameBn: "কাতান সিল্ক শাড়ি - নেভি ব্লু",
      slug: "katan-silk-navy-blue",
      description:
        "Premium Katan silk in deep navy blue with silver zari border. A timeless piece for formal events and celebrations.",
      price: 5200,
      comparePrice: 6500,
      stock: 12,
      categoryId: categories[3].id,
      status: "ACTIVE" as const,
      featured: false,
    },
    {
      name: "Handloom Cotton Saree - Teal Green",
      nameBn: "হ্যান্ডলুম সুতি শাড়ি - টিল গ্রিন",
      slug: "handloom-cotton-teal-green",
      description:
        "Comfortable handloom cotton saree in refreshing teal green. Perfect for daily wear and casual outings. Soft and skin-friendly fabric.",
      price: 1800,
      comparePrice: 2200,
      stock: 25,
      categoryId: categories[4].id,
      status: "ACTIVE" as const,
      featured: false,
    },
    {
      name: "Banarasi Silk Saree - Red Gold Zari",
      nameBn: "বেনারসি সিল্ক শাড়ি - রেড গোল্ড জরি",
      slug: "banarasi-red-gold-zari",
      description:
        "Stunning Banarasi silk saree in vibrant red with elaborate gold zari work. The quintessential bridal saree with luxurious feel.",
      price: 12000,
      comparePrice: 15000,
      stock: 3,
      categoryId: categories[5].id,
      status: "ACTIVE" as const,
      featured: true,
    },
  ];

  for (const product of sampleProducts) {
    await prisma.product.upsert({
      where: { slug: product.slug },
      update: {},
      create: product,
    });
  }
  console.log(`${sampleProducts.length} sample products created`);

  // Create store settings
  const settings = [
    { key: "store_name", value: "Renu's Closet" },
    { key: "store_name_bn", value: "রেনু'স ক্লোজেট" },
    { key: "store_phone", value: "01761-400811" },
    { key: "store_email", value: "info@renuscloset.com" },
    { key: "store_address", value: "Dhaka, Bangladesh 1230" },
    { key: "store_facebook", value: "https://www.facebook.com/renusclosetdhaka" },
    { key: "store_whatsapp", value: "8801761400811" },
    { key: "shipping_inside_dhaka", value: "80" },
    { key: "shipping_outside_dhaka", value: "120" },
    { key: "currency", value: "BDT" },
    { key: "currency_symbol", value: "৳" },
  ];

  for (const setting of settings) {
    await prisma.storeSetting.upsert({
      where: { key: setting.key },
      update: { value: setting.value },
      create: setting,
    });
  }
  console.log(`${settings.length} store settings created`);

  console.log("\nSeed completed successfully!");
  console.log("Admin login: admin@renuscloset.com / admin123");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
