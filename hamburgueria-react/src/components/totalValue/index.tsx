import { useContext } from "react";
import { ProductContext } from "../../context/productsContext";
import { Div } from "../../styles/totalValue";

export function TotalValue() {
  const { filteredProducts, setFilteredProducts } = useContext(ProductContext);

  function total() {
    const initialValue = 0;
    const price = filteredProducts.map((element) => element.price);

    const total = price.reduce(
      (acc: number, value: number) => acc + value,
      initialValue
    );

    return total;
  }

  function removeAll() {
    setFilteredProducts([]);
  }

  return (
    <Div>
      <div className="total-value">
        <p className="total">Total</p>
        <p className="value">R${total().toFixed(2)}</p>
      </div>
      <button onClick={removeAll}>Remover todos</button>
    </Div>
  );
}
