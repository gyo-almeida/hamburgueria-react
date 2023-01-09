import trash from "../img/trash.png";
import { useContext } from "react";
import { iProduct, ProductContext } from "../../context/productsContext";
import { Li } from "../../styles/cardItem";

interface iProductsCard {
  product: iProduct;
}

export function ProductsCard({ product }: iProductsCard) {
  const { filteredProducts, setFilteredProducts } = useContext(ProductContext);

  function remove(id: number) {
    const handleRemove = filteredProducts.filter(
      (element) => element.id !== id
    );

    setFilteredProducts(handleRemove);
  }

  return (
    <Li>
      <div>
        <img src={product.img} alt="" />
        <div className="products">
          <p className="name">{product.name}</p>
          <p className="class">{product.category}</p>
        </div>
      </div>
      <img
        className="trash-icon"
        onClick={() => {
          remove(product.id);
        }}
        src={trash}
        alt=""
      />
    </Li>
  );
}
