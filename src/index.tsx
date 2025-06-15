import ReactDOM from "react-dom/client";
import "@/app/styles/index.css";
import { App } from "@/app";

const container = document.getElementById("root");

if (!container) {
    throw new Error("Root container not found");
}

const root = ReactDOM.createRoot(container);
root.render(<App />);
