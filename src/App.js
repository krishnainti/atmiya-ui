import "./App.css";
import "../node_modules/sweetalert/dist/sweetalert.css";

import { useEffect, useRef } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { webStore, webPersister } from "./store/store";

import Layout from "./layout/index";

function App() {
  const appRef = useRef(null);

  useEffect(() => {
    if (!appRef.current) {
      appRef.current = true;

      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = "/assets/js/oxpins.js";
      document.body.appendChild(script);
    }
  }, []);

  return (
    <BrowserRouter basename="/">
      <Provider store={webStore}>
        <PersistGate loading={null} persistor={webPersister}>
          <Layout />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
