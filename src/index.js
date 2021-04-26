import React from "react";
import ReactDOM from "react-dom";
import App from "./pages";
import { ThemeProvider } from "./theme/ThemeContext";
import "semantic-ui-css/semantic.min.css";

ReactDOM.render(
	<ThemeProvider>
		<App />
	</ThemeProvider>,
	document.getElementById("app")
);
