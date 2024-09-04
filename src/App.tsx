import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import AppContext, { useGlobalContext } from "./context/context";
import { FunctionComponent } from "react";
import CartItem from "./components/CartItem";



const App: FunctionComponent = () => {
  return (
    //*racchiudo la parte del nostro codice in un provider Context.

    <AppContext.Provider value>
      <Cart/>
      {CartItem}
      {Navbar}

      
    </AppContext.Provider>
  )
  
}
   
  const { isLoading, total, products } = useGlobalContext();
  
  if (isLoading) {
    return (
      <div>
        <Navbar />
        <div className="center-item">
          <Loading />
        </div>
      </div>
    );
  }
  return (
    <div>
      <Navbar />
      {products.length > 0 ? (
        <Cart />
      ) : (
        <div className="center-item">
          <h4>Nessun prodotto nel carrello</h4>
        </div>
      )}
      {total > 0 && <TotalBox />}
    </div>
  );
}

export default App;
