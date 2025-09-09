// Sidebar.jsx
import { useState ,useContext} from 'react';

import { Link } from 'react-router';

import { DashboardContext } from "../store/DashboardContext";
import { useSelector } from 'react-redux';
import styles from "../stylesheets/Sidebar.module.css";
function Sidebar() {
  const [openMenu, setOpenMenu] = useState('');
   const context = useContext(DashboardContext);
  // const sidebarState = context.sidebarState;
  const ismobile= context.isMobile;
  const isLogin= useSelector((store)=>store.login)
  const    {sidebarState} =useSelector((store)=>store.uiux)
  console.log(sidebarState)
 

   const {handleSidebarclicksWhenisMobile,isMobile}=useContext(DashboardContext)

  

  const toggleMenu = (menuName) => {
    setOpenMenu(openMenu === menuName ? '' : menuName);
  };

 

  return <>
  {sidebarState && <div className={`${styles.sidebar} ${ismobile && styles.mobile}`}>
      <div className={styles.sidebarTitle}>AI Control Panel {ismobile && <div className="closeSidebar">&times</div> } </div>
      <div className={`${styles.menu} ${ismobile && styles.mobile}`}>
       <Link to="/" className={styles.homeLink}> <div className={styles.home} >Home</div></Link>
        <div className={styles.menuItem} onClick={() => toggleMenu('uiux')}>UI/UX AI</div>
        {openMenu === 'uiux' && (
          <div className={styles.submenu}>
            <Link to="/StructureAI" onClick={handleSidebarclicksWhenisMobile}>Structure AI</Link>
            <div>Keywords AI</div>
            <div>Spider AI</div>
            <div>Animation Control AI</div>
          </div>
        )}
        <div className={styles.menuItem} onClick={() => toggleMenu('backend')}>Backend AI</div>
        {openMenu === 'backend' && (
          <div className={styles.submenu}>
            <Link to="/BackEndAI" onClick={handleSidebarclicksWhenisMobile}>Main Backend SubAI</Link>
            <div>Database AI</div>
            <div>API Handler AI</div>
          </div>
        )}
        <div className={styles.menuItem}>Security AI</div>
        <div className={styles.menuItem}>Network AI</div>
        <div className={styles.menuItem}>Toolbox</div>
        {ismobile && !isLogin &&   <div className={styles.authLinks}>
      <Link to={"/signup"} className={styles.signupLink} onClick={handleSidebarclicksWhenisMobile}>SignUp</Link>
       <Link to={"/Login"} className={styles.loginLink} onClick={handleSidebarclicksWhenisMobile}>LogIn</Link>
     </div>}
      </div>
    </div>
}
     {ismobile && (
          <div className={styles.threeDotCont} onClick={() => {
                setShowMain(!showMain);
                dispatch(uiuxAction.handleSidebar(!sidebarState));
              }}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        )}
        </>
}
export default Sidebar;
