import { create } from "zustand";
import { Product } from "../types/Product";

interface IProductStore {
  products: Product[];
  setProducts: (products: Product[]) => void;
  removeProduct: (id: number) => void;
  addProduct: (product: Product) => void;
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  cart: Product[];
}

export const useProductStore = create<IProductStore>((set) => ({
  products: [
    {
      id: 1,
      name: "Product 1",
      description: "This is a description for Product 1.",
      picture:
        "https://img.freepik.com/free-vector/white-product-podium-with-green-tropical-palm-leaves-golden-round-arch-green-wall_87521-3023.jpg",
      price: 19.99,
    },
    {
      id: 2,
      name: "Product 2",
      description: "This is a description for Product 2.",
      picture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZrzLgw1BIh-B94wCsH-JmadR4cFdsxYJWgw&s",
      price: 29.99,
    },
    {
      id: 3,
      name: "Product 3",
      description: "This is a description for Product 3.",
      picture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTHQdsAt3gDtOxHt8dCUmx5ezQfI-zq0dSmQ&s",
      price: 39.99,
    },
    {
      id: 4,
      name: "Product 4",
      description: "This is a description for Product 4.",
      picture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTHQdsAt3gDtOxHt8dCUmx5ezQfI-zq0dSmQ&s",
      price: 49.99,
    },
    {
      id: 5,
      name: "Product 5",
      description: "This is a description for Product 5.",
      picture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTHQdsAt3gDtOxHt8dCUmx5ezQfI-zq0dSmQ&s",
      price: 59.99,
    },
  ],
  cart: [],
  setProducts: (products) => set({ products }),
  removeProduct: (id) =>
    set((state) => ({
      products: state.products.filter((product) => product.id !== id),
    })),
  addProduct: (product) =>
    set((state) => ({
      products: [...state.products, product],
    })),
  addToCart: (product) =>
    set((state) => ({
      products: [...state.cart, product],
    })),
  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((product) => product.id !== id),
    })),
}));
