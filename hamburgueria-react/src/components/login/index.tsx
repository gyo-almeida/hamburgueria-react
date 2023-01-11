import { useForm } from "react-hook-form";
import { loginSchema } from "../../schema/loginSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { iLogin, LoginContext } from "../../context/loginContext";
import { Toaster } from "react-hot-toast";
import { Div, LinkStyle } from "../../styles/login";
import { Slogan } from "../slogan";
import { motion } from "framer-motion";

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
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
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

        <Slogan />
      </Div>
    </motion.div>
  );
}
