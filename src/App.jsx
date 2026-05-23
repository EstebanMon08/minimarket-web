import { useState } from "react";
import Catalog from "./pages/Catalog";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";

function App() {
  const [page, setPage] = useState("catalog");
  const [orderData, setOrderData] = useState(null);

  function handleSuccess(form) {
    setOrderData(form);
    setPage("success");
  }

  if (page === "checkout") return <Checkout onBack={() => setPage("catalog")} onSuccess={handleSuccess} />;
  if (page === "success") return <OrderSuccess form={orderData} onBackToStore={() => setPage("catalog")} />;
  return <Catalog onGoToCheckout={() => setPage("checkout")} />;
}

export default App;