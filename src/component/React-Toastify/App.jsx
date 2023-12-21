import background from "./cool-background.png";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const notifyWarn = () =>
    toast.warn("🦄 Danger Alert My Boy!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const notifyDefault = () =>
    toast("🦄 Wow so easy!", {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const notifyInfo = () =>
    toast.info("🦄 Wow so easy!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

    const notifySuccess = () =>
    toast.success('🦄 Wow so easy!', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  return (
    <div
      className="Toastify-Background"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div id="Toastify-Greeting">React Toastify</div>
      <button className="Toastify-Button" onClick={notifyDefault}>
        Click Notify !
      </button>

      <button className="Toastify-Button" onClick={notifyWarn}>
        Warning !
      </button>

      <button className="Toastify-Button" onClick={notifyInfo}>
        Check Info !
      </button>

      <button className="Toastify-Button" onClick={notifySuccess}>
        Success !! 
      </button>

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />

      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <div className="Toastify-Description">
        <button className="Toastify-Links-Button">
          <a
            href="https://fkhadra.github.io/react-toastify/introduction"
            className="Toastify-Links"
          >
            <span>Documentation</span>
          </a>
        </button>

        <button className="Toastify-Links-Button">
          <a
            href="https://github.com/fkhadra/react-toastify"
            className="Toastify-Links"
          >
            <span>GitHub</span>
          </a>
        </button>
      </div>
    </div>
  );
}

export default App;
