import logo from "../img/logoKenzie.svg";
import cart from "../img/cart.png";
import exit from "../img/exit.png";
import Modal from "react-modal";
import { HeaderStyle } from "../../styles/header";
import { FormEvent, useContext, useState } from "react";
import { ProductContext } from "../../context/productsContext";
import { useNavigate } from "react-router-dom";
import { modalPosition } from "../../styles/modal";
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
    localStorage.removeItem("@USERID");
    localStorage.removeItem("@TOKEN");
    navigate("/", { replace: true });
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <HeaderStyle>
      <img src={logo} alt="logo hamburgueria da Kenzie" />

      <section className="nav-section">
        <form onSubmit={submit}>
          <input
            type="text"
            placeholder="Pesquise..."
            onChange={(event) => setSearch(event.target.value.toLowerCase())}
          />
          <button type="submit">Pesquisar</button>
        </form>
        <div className="icons">
          <span>{filteredProducts.length}</span>
          <img
            onClick={openModal}
            src={cart}
            alt="icon carrinho hamburgueria da Kenzie"
          />
          <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            style={modalPosition}
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
