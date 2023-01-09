import logo from "../img/logoKenzie.svg";
import bag from "../img/bag.png";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { registerSchema } from "../../schema/registerSchema";
import { useContext } from "react";
import { RegisterContext, iData } from "../../context/registerContext";
import { Div, LinkStyle } from "../../styles/register";
import { Toaster } from "react-hot-toast";
import { Aside } from "../../styles/slogan";

export function Register() {
  const { submit } = useContext(RegisterContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iData>({
    resolver: yupResolver(registerSchema),
  });

  const submitForm = (data: any) => submit(data);

  return (
    <Div>
      <Toaster />
      <Aside>
        <img src={logo} alt="logo hamburgueria" />
        <div>
          <img src={bag} alt="" />
          <p>
            A vida é como um sanduíche, é preciso recheá-la com os{" "}
            <strong>melhores</strong> ingredientes.
          </p>
        </div>
      </Aside>

      <form onSubmit={handleSubmit(submitForm)}>
        <div className="header">
          <h2>Cadastro</h2>
          <LinkStyle to="/">Retornar para o login</LinkStyle>
        </div>

        <input
          type="text"
          {...register("name")}
          name="name"
          placeholder="Nome"
        />
        <p>{errors.name?.message}</p>

        <input
          type="email"
          {...register("email")}
          name="email"
          placeholder="Email"
        />
        <p>{errors.email?.message}</p>

        <input
          type="password"
          {...register("password")}
          name="password"
          placeholder="Senha"
        />
        <p>{errors.password?.message}</p>

        <input
          type="password"
          {...register("confirmPass")}
          placeholder="Confirme sua senha"
        />
        <p>{errors.confirmPass?.message}</p>

        <button type="submit">Cadastrar</button>
      </form>
    </Div>
  );
}
