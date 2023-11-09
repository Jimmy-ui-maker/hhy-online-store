
import NewProducts from "./(product)/newProduct/page";
import LandingPage from "@/components/LandingPage";
import About from "@/components/About";

export default function Home() {
  return (
    <>
      <LandingPage />
      <About />
      <NewProducts />
    </>
  );
}
