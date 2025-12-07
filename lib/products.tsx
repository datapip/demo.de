import {
  Apple,
  Banana,
  Croissant,
  Headset,
  Keyboard,
  Lollipop,
  Milk,
  Mouse,
  Webcam,
} from "lucide-react";

const STYLE = "w-full h-full";

export const products = [
  {
    id: "g1",
    name: "Apple",
    price: 0.49,
    category: "groceries",
    image: <Apple className={STYLE} />,
  },
  {
    id: "g2",
    name: "Banana",
    price: 0.59,
    category: "groceries",
    image: <Banana className={STYLE} />,
  },
  {
    id: "g3",
    name: "Croissant",
    price: 2.49,
    category: "groceries",
    image: <Croissant className={STYLE} />,
  },
  {
    id: "g4",
    name: "Milk",
    price: 1.49,
    category: "groceries",
    image: <Milk className={STYLE} />,
  },
  {
    id: "g5",
    name: "Lollipop",
    price: 0.99,
    category: "groceries",
    image: <Lollipop className={STYLE} />,
  },
  {
    id: "e1",
    name: "Headset",
    price: 129.99,
    category: "electronics",
    image: <Headset className={STYLE} />,
  },
  {
    id: "e2",
    name: "Webcam",
    price: 89.99,
    category: "electronics",
    image: <Webcam className={STYLE} />,
  },
  {
    id: "e3",
    name: "Keyboard",
    price: 39.99,
    category: "electronics",
    image: <Keyboard className={STYLE} />,
  },
  {
    id: "e4",
    name: "Mouse",
    price: 29.99,
    category: "electronics",
    image: <Mouse className={STYLE} />,
  },
];

export function getProductsByCategory(slug: string) {
  return products.filter((p) => p.category === slug);
}

export function getProductById(id: string) {
  return products.find((p) => p.id === id) || null;
}
