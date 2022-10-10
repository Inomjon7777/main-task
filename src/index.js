import ReactDOM from "react-dom";
import App from "./components/app/App";
import { Provider } from "react-redux";
import store from "./state/store";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
