import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import { GeneralProvider } from "src/GeneralContext";


if (process.env.NODE_ENV === 'production') {
    console.log = () => { };
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    // <React.StrictMode>
    <BrowserRouter>
        <GeneralProvider>
            <App />
        </GeneralProvider>
    </BrowserRouter>
    // </React.StrictMode>
);
