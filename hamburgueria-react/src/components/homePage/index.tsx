import { Header } from "../header";
import { ProductsList } from "../list";
import { Style } from "../../styles/global";
import { Main } from "../../styles/homePage";
import { Toaster } from "react-hot-toast";

export function HomePage() {
  return (
    <div>
      <Toaster />
      <Style />

      <Header />

      <Main>
        <ProductsList />
      </Main>
    </div>
  );
}
