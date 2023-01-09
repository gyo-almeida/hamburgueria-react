import React, { createContext, SetStateAction } from "react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { api } from "../request/api";

interface iProductContext {
  products: iProduct[];
  search: string;
  setSearch: React.Dispatch<SetStateAction<string>>;
  filteredProducts: iProduct[];
  setFilteredProducts: React.Dispatch<SetStateAction<iProduct[]>>;
  getApi: () => void;
}

interface iProductProps {
  children: React.ReactNode;
}

export interface iProduct {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

export const ProductContext = createContext({} as iProductContext);

export function ProductProvider({ children }: iProductProps) {
  const [products, setProducts] = useState([] as iProduct[]);
  const [search, setSearch] = useState("" as string);
  const [filteredProducts, setFilteredProducts] = useState([] as iProduct[]);

  async function getApi() {
    const token = localStorage.getItem("@TOKEN");
    api.defaults.headers.common.authorization = `Bearer ${token}`;

    const { data } = await api.get("/products");

    setProducts(data);
  }

  return (
    <>
      <ProductContext.Provider
        value={{
          products,
          search,
          setSearch,
          filteredProducts,
          setFilteredProducts,
          getApi,
        }}
      >
        {children}
      </ProductContext.Provider>

      <Outlet />
    </>
  );
}
