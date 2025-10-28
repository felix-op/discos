import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import App from "@layout/App";
import ConfigPage from "@pages/ConfigPage";

const rutas = [
	{
		path: "/",
		Component: App,
		children: [
			{ index: true, path: "config", Component: ConfigPage },
			{ path: "pedidos", Component: ConfigPage },
			{ path: "resultados", Component: ConfigPage },
		]
	},
]

const router = createBrowserRouter(rutas);

const root = document.getElementById("root");

if (root != null) {
	createRoot(root).render(
		<RouterProvider router={router} />
	);
}
