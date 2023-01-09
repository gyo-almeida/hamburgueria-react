import { Aside } from "../../styles/slogan";
import bag from "../img/food-bag.png";

export function Slogan() {
  return (
    <Aside>
      <div className="logo">
        <h1>Burguer</h1>
        <span>React</span>
      </div>
      <div className="slogan">
        <div className="div-img">
          <img src={bag} alt="" />
        </div>
        <p>
          A vida é como um sanduíche, é preciso recheá-la com os{" "}
          <strong>melhores</strong> ingredientes.
        </p>
      </div>
    </Aside>
  );
}
