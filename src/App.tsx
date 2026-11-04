import { Buttons } from "./components/Buttons";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { MainImage } from "./components/MainImage";

function App() {
  return (
    <main className="pt-2 px-3 flex flex-col mih-h-dvh gap-2">
      <MainImage />
      <Header />
      <Buttons />
      <Footer />
    </main>
  );
}

export default App;
