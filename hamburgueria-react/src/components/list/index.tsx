import { useContext } from "react";
import { ProductContext } from "../../context/productsContext";
import { List } from "../../styles/list";
import { Products } from "../cards";
import { motion } from "framer-motion";

export function ProductsList() {
  const { products, search } = useContext(ProductContext);

  const filter = products.filter((element) => {
    const name = element.name;
    return name.toLowerCase().includes(search);
  });

  return (
    <motion.div
      transition={{ duration: 2 }}
      initial={{ y: 300, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -300, opacity: 0 }}
    >
      <List>
        {filter.map((product) => (
          <Products product={product} />
        ))}
      </List>
    </motion.div>
  );
}
