import { useContext } from 'react';
import { DashboardContext } from './store/DashboardContext';
import './App.css';

import Header from './components/Header';
import DashboardContextProvider from "./store/Context";
import Login from "./components/Login";
import Spinner from './components/Spinner';
import "bootstrap/dist/css/bootstrap.min.css";

function InnerApp() {
  const { showapp,showSpinner,authChecked } = useContext(DashboardContext);

  

  
  
   if(!authChecked) {
      return  <Header />;
    }
  if (!showapp) {
    return <Login />;
  }
  if (showSpinner) {
    return <Spinner />;
  } 
  
    
  return <Header />;
}

function App() {
  return (
    <DashboardContextProvider>
      <InnerApp />
    </DashboardContextProvider>
  );
}

export default App;
