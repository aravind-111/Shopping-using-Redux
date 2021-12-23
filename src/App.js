import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Cart from "./components/cart/Cart";
import IndividualProduct from "./components/IndividualProduct";
import NavBar from "./components/NavBar";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/product/:id" component={IndividualProduct} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
