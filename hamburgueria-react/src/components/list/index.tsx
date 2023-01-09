import { useContext } from "react";
import { ProductContext } from "../../context/productsContext";
import { List } from "../../styles/list";
import { Products } from "../cards";

export function ProductsList() {
  const { products, search } = useContext(ProductContext);

  const filter = products.filter((element) => {
    const name = element.name;
    return name.toLowerCase().includes(search);
  });

  return (
    <List>
      {filter.map((product) => (
        <Products product={product} />
      ))}
    </List>
  );
}
