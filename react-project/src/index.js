import React from "react";
import ReactDOM from "react-dom/client";
// import './index.css';
// import App from './App';
// import { ColorModeProvider } from './todo-app/ColorModeProvider';
import { AppProvider } from "./url-shortening-api-master/Context";
import App from "./url-shortening-api-master/App";
// import App from './todo-app/App';
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <ColorModeProvider>
			<AppProvider>
				<App />
			</AppProvider>
		</ColorModeProvider> */}
    {/* <App /> */}
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
