import { Toaster } from "react-hot-toast";
import AppRouter from "./router";

function App() {
  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          style: {
            fontFamily: "Ubuntu",
          },
        }}
      />
      <AppRouter />
    </>
  );
}

export default App;
