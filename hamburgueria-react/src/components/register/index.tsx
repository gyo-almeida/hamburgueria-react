import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { registerSchema } from "../../schema/registerSchema";
import { useContext } from "react";
import { RegisterContext, iData } from "../../context/registerContext";
import { Div, LinkStyle } from "../../styles/register";
import { Toaster } from "react-hot-toast";
import { Slogan } from "../slogan";
import { motion } from "framer-motion";

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
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <Div>
        <Toaster />
        <Slogan />

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
    </motion.div>
  );
}
