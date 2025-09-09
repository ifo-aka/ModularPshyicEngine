import Sidebar from "./Sidebar";
import {useSelector,useDispatch} from "react-redux";
import { uiuxAction } from "../store/store";
import logoImg from "../assets/mainlogo.png";
import styles from "../stylesheets/Header.module.css"
import { Link, Outlet } from "react-router";
import { DashboardContext } from "../store/DashboardContext";


import "../stylesheets/Header.css";
import { useContext } from "react";
const Header = () => {
  const dispatch = useDispatch();
  const { Pname } = useSelector((store) => store.profileName);
  const isLogin = useSelector((store)=>store.login.status);
  const {sidebarState}= useSelector((store)=>store.uiux);


  const { isMobile ,showMain,setShowMain,setSidebarState} = useContext(DashboardContext);
  
  return (
 
      <div className="header">
       
        <div className="Headermsg">
            <div className={styles.logo}>
        <img src={logoImg} alt="Logo" className={styles.logoFace} />
      </div>
          
          </div>
          { !isMobile && !isLogin &&
          <div className="loginOrSignup">
      <Link to={"/signup"} className="signup link">SignUp</Link>
       <Link to={"/Login"} className="login link">LogIn</Link>

     </div>
}
           {Pname != null &&
            <div className="currentUser">
             
          <span className="userName" title={Pname}>
            {Pname.charAt(0).toUpperCase()  }
          </span>
           
        </div>
     }
     
      </div>
  

      
   
  );
};
export default Header;






