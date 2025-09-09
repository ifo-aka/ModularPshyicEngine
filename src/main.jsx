import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router';
import { Provider } from 'react-redux';
import ReactStore from  "./store/store.js" // ✅ Import your Redux store
import './index.css';
import App from './App.jsx';
import UiUxAIDashboard from './components/UiUxAIDashboard.jsx';
import ComDashboard from './components/ComDashboard.jsx';
import BackEndsubAI from './components/BackEndsubAI.jsx';
import StructureAi from './components/UiUixSbAI\'s/StructrureAi.jsx';
import Login from './components/Login.jsx'; // Import Login component
import Signup from './components/Signup.jsx'; // Import Signup component
import DashboardContextProvider from './store/Context.jsx';
import BossPage from './pages/BossPage.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <BossPage /> },
      { path: "/UiUxAI", element: <UiUxAIDashboard /> },
      { path: "/BackEndAI", element: <BackEndsubAI /> },
      { path: "/StructureAI", element: <StructureAi /> },
      {path: "/Login", element: <Login /> },
      {path: "/signup", element: <Signup /> } // Assuming signup also uses the Login component
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <Provider store={ReactStore}> {/* ✅ Wrap with Provider */}
      <RouterProvider router={router} />
    </Provider>
    
  </StrictMode>
);
