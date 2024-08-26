import React, { FunctionComponent } from 'react';
import { useGlobalContext } from "./context/context";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import TotalBox from "./components/TotalBox";
import Loading from 'context/Loading';






const App: FunctionComponent = () => {
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
};
export default App;
