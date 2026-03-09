import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.jsx";
import "./index.css";
import { store } from "./store/";
import { worker } from "./services/server/";
import { ThemeProviderWrapper } from "./theme/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Provider store={store}>
      <ThemeProviderWrapper>
        <App />
      </ThemeProviderWrapper>
    </Provider>
  </>
);

worker.start({ onUnhandledRequest: "bypass" });
