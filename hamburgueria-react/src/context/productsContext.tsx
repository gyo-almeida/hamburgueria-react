import React, { createContext, SetStateAction, useEffect } from "react";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { api } from "../request/api";

interface iProductContext {
  products: iProduct[];
  search: string;
  setSearch: React.Dispatch<SetStateAction<string>>;
  filteredProducts: iProduct[];
  setFilteredProducts: React.Dispatch<SetStateAction<iProduct[]>>;
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
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");

    async function getApi() {
      api.defaults.headers.common.authorization = `Bearer ${token}`;

      const { data } = await api.get("/products");

      setProducts(data);
      console.log(data);
    }

    getApi();
  }, [navigate]);

  return (
    <>
      <ProductContext.Provider
        value={{
          products,
          search,
          setSearch,
          filteredProducts,
          setFilteredProducts,
        }}
      >
        {children}
      </ProductContext.Provider>

      <Outlet />
    </>
  );
}
