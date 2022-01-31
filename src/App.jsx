import { useSelector } from "react-redux";
import About from "./components/about/About";
// import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import Toggle from "./components/toggle/Toggle";
const App = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      {/* <Toggle /> */}
      <Intro />
      <About />
      <ProductList />
      {/* <Contact /> */}
    </div>
  );
};

export default App;
