import logo from "../img/logoKenzie.svg";
import bag from "../img/bag.png";
import { useForm } from "react-hook-form";
import { loginSchema } from "../../schema/loginSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { iLogin, LoginContext } from "../../context/loginContext";
import { Toaster } from "react-hot-toast";
import { Aside } from "../../styles/slogan";
import { Div, LinkStyle } from "../../styles/login";

export function Login() {
  const { submit } = useContext(LoginContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iLogin>({
    resolver: yupResolver(loginSchema),
  });

  return (
    <Div>
      <Toaster />
      <section className="form-section">
        <h3>Login</h3>
        <form onSubmit={handleSubmit(submit)}>
          <input type="text" placeholder="Email" {...register("email")} />
          <p>{errors.email?.message}</p>

          <input
            type="password"
            placeholder="Senha"
            {...register("password")}
          />
          <p>{errors.password?.message}</p>

          <button type="submit">Logar</button>
        </form>
        <p>Crie sua conta para saborear muitas delicias e matar sua fome!</p>
        <LinkStyle to="/register">Cadastrar</LinkStyle>
      </section>

      <Aside>
        <img src={logo} alt="logo hamburgueria" />
        <div>
          <div className="div-img">
            <img src={bag} alt="" />
          </div>
          <p>
            A vida é como um sanduíche, é preciso recheá-la com os{" "}
            <strong>melhores</strong> ingredientes.
          </p>
        </div>
      </Aside>
    </Div>
  );
}
