import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

import { worker } from "./browser/worker.js";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import { CarProvider } from "./context/CarContext.jsx";
import { ChatProvider } from "./context/ChatContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Provider store={store}>
      <ChatProvider>
        <CarProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </CarProvider>
      </ChatProvider>
    </Provider>
  </>
);

await worker.start({ onUnhandledRequest: "bypass" });
