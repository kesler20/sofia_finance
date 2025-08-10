import * as ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Auth0ProviderWithHistory from "./Auth0Provider";
import { Routes, Route, BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename={(import.meta as any).env.BASE_URL}>
    <Auth0ProviderWithHistory>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </Auth0ProviderWithHistory>
  </BrowserRouter>
);
