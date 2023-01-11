import { motion } from "framer-motion";
import { useContext } from "react";
import { ProductContext } from "../../context/productsContext";
import { Div } from "../../styles/cart";
import { Div2 } from "../../styles/cartEmpty";
import { ProductsCard } from "../procutsCart";
import { TotalValue } from "../totalValue";

export function Cart({ close }: any) {
  const { filteredProducts } = useContext(ProductContext);

  return (
    <motion.div
      initial={{ opacity: 0.2 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Div>
        <div className="title">
          <h3>Carrinho de compras</h3>
          <span onClick={close}>X</span>
        </div>
        <ul>
          {filteredProducts.length ? (
            filteredProducts.map((element) => (
              <ProductsCard product={element} />
            ))
          ) : (
            <Div2>
              <h4>Sua sacola está vazia</h4>
              <p>Adicione Itens</p>
            </Div2>
          )}
        </ul>
        <TotalValue />
      </Div>
    </motion.div>
  );
}
