import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './Routes/router';
import { RouterProvider } from 'react-router-dom';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
