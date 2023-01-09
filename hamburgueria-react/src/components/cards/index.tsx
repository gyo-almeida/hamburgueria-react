import { useContext } from "react";
import { toast } from "react-hot-toast";
import { iProduct, ProductContext } from "../../context/productsContext";
import { Li } from "../../styles/card";

interface iProducts {
  product: iProduct;
}

export function Products({ product }: iProducts) {
  const { products, filteredProducts, setFilteredProducts } =
    useContext(ProductContext);

  function renderCart(id: number) {
    const item = filteredProducts.find((element) => element.id === id);

    if (item) {
      toast("Item já adicionado");
    } else {
      const find = products.find((element) => element.id === id);

      if (find) {
        setFilteredProducts([...filteredProducts, find]);
      }
    }
  }

  return (
    <Li key={product.id} id={product.id.toString()}>
      <img src={product.img} alt="foto do produto" />
      <div className="desc-products">
        <h3>{product.name}</h3>
        <p className="category">{product.category}</p>
        <p className="price">R${product.price.toFixed(2)}</p>
        <button
          type="button"
          onClick={() => {
            renderCart(product.id);
          }}
        >
          Adicionar
        </button>
      </div>
    </Li>
  );
}
