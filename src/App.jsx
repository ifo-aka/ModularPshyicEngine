import { useContext, useEffect } from 'react';
import { DashboardContext } from './store/DashboardContext';
import AOS from "aos";
import "aos/dist/aos.css";



import Header from './components/Header';
import DashboardContextProvider from "./store/Context";
import Login from "./components/Login";
import Spinner from './components/Spinner';
import "bootstrap/dist/css/bootstrap.min.css";
import MasterContainer from './components/MasterContainer';
import Sidebar from './components/Sidebar';
import HeaderAndMain from './components/HeaderAndMain';
import { Outlet } from 'react-router';


// function InnerApp() {
//   const { showapp,showSpinner,authChecked } = useContext(DashboardContext); 

  

  
  
//    if(!authChecked) { 
//       return  <Header />;
//     }
//   if (!showapp) {
//     return <Login />;
//   }
//   if (showSpinner) {
//     return <Spinner />;
//   } 
  
    
//   return <Header />;
// }

function App() {
  
useEffect(() => {
  AOS.init({ duration: 1000 }); // duration in ms
}, []);

  useEffect(() => {
    AOS.refresh(); // refresh animations on route change
  }, [location]);
  return (
     <DashboardContextProvider>
      <MasterContainer>
         <Sidebar />
         <HeaderAndMain>
           <Header />
           <Outlet />
           </HeaderAndMain>
      </MasterContainer>
      </DashboardContextProvider>
  
  );
}

export default App;
