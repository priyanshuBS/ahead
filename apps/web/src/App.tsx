import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <main className="pt-[4.5rem] sm:pt-[5rem]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
