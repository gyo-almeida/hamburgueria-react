import { Header } from "../header";
import { ProductsList } from "../list";
import { Style } from "../../styles/global";
import { Main } from "../../styles/homePage";
import { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";

export function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <Toaster />
      <Style />

      <Header />

      <Main>
        <ProductsList />
      </Main>
    </motion.div>
  );
}
