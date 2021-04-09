import { BrowserRouter } from "react-router-dom";
import Navigation from "./Navigation";
import Content from "./Content";

export default function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Content />
    </BrowserRouter>
  );
}
