export interface Product {
  id: string;
  name: string;
  nameBn?: string | null;
  slug: string;
  description?: string | null;
  price: number;
  comparePrice?: number | null;
  stock: number;
  status: "DRAFT" | "ACTIVE" | "ARCHIVED";
  featured: boolean;
  isNew: boolean;
  category?: Category | null;
  categoryId?: string | null;
  images: ProductImage[];
  variants: ProductVariant[];
  tags: Tag[];
  createdAt: string;
}

export interface ProductImage {
  id: string;
  url: string;
  alt?: string | null;
  position: number;
}

export interface ProductVariant {
  id: string;
  name: string;
  sku?: string | null;
  price?: number | null;
  stock: number;
  color?: string | null;
  size?: string | null;
  material?: string | null;
}

export interface Category {
  id: string;
  name: string;
  nameBn?: string | null;
  slug: string;
  description?: string | null;
  image?: string | null;
}

export interface Tag {
  id: string;
  name: string;
}

export interface Order {
  id: string;
  orderNumber: string;
  status: OrderStatus;
  paymentStatus: PaymentStatus;
  paymentMethod?: string | null;
  subtotal: number;
  shippingCost: number;
  discount: number;
  total: number;
  shippingName: string;
  shippingPhone: string;
  shippingAddress: string;
  shippingCity: string;
  items: OrderItem[];
  createdAt: string;
}

export interface OrderItem {
  id: string;
  quantity: number;
  price: number;
  product: Product;
}

export type OrderStatus =
  | "PENDING"
  | "CONFIRMED"
  | "PROCESSING"
  | "SHIPPED"
  | "DELIVERED"
  | "CANCELLED"
  | "RETURNED";

export type PaymentStatus =
  | "UNPAID"
  | "PAID"
  | "REFUNDED"
  | "PARTIALLY_REFUNDED";
