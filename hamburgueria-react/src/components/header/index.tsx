import cart from "../img/cart.png";
import exit from "../img/exit.png";
import lupaSearch from "../img/lupa-white.png";
import Modal from "react-modal";
import { HeaderStyle } from "../../styles/header";
import { FormEvent, useContext, useState } from "react";
import { ProductContext } from "../../context/productsContext";
import { useNavigate } from "react-router-dom";
import { Cart } from "../cart";

Modal.setAppElement("#root");

export function Header() {
  const { setSearch, filteredProducts } = useContext(ProductContext);
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function removeProfile() {
    localStorage.removeItem("@USER");
    localStorage.removeItem("@TOKEN");
    navigate("/", { replace: true });
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <HeaderStyle>
      <div className="logo">
        <h1>Burguer</h1>
        <span>React</span>
      </div>

      <section className="nav-section">
        <form onSubmit={submit}>
          <input
            type="text"
            placeholder="Pesquise..."
            onChange={(event) => setSearch(event.target.value.toLowerCase())}
          />
          <button type="submit">
            <img src={lupaSearch} alt="" />
          </button>{" "}
        </form>

        <div className="icons">
          <span>{filteredProducts.length}</span>
          <img
            onClick={openModal}
            src={cart}
            alt="icon carrinho hamburgueria da Kenzie"
            className="cart-icon"
          />
          <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            overlayClassName="modal-overlay"
            className="modal-content"
          >
            <Cart close={closeModal} />
          </Modal>
          <img
            onClick={removeProfile}
            src={exit}
            alt="icon saida hamburgueria da Kenzie"
          />
        </div>
      </section>
    </HeaderStyle>
  );
}
