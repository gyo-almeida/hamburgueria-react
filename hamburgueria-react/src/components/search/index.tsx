import { FormEvent, useContext } from "react";
import lupa from "../img/lupa-white.png";
import { ProductContext } from "../../context/productsContext";
import { Form } from "../../styles/search";

export function SearchInput() {
  const { setSearch } = useContext(ProductContext);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <Form onSubmit={submit}>
      <input
        type="text"
        placeholder="Pesquise..."
        onChange={(event) => setSearch(event.target.value.toLowerCase())}
      />
      <span>X</span>

      <button type="submit">
        <img src={lupa} alt="" />
      </button>
    </Form>
  );
}
