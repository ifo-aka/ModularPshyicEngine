// import logoImg from "/assets/mainlogo.png";
import NetworkImg from "../../assets/netWork.png";
import Securityimg from "../../assets/secuirity.png";
import uiuxlogo from "../../assets/uiux.png";
import backendlogo from "../../assets/backend.png";
import MasterAi from "../../assets/master.png";
import dataAi from "../../assets/DataAnalyst.png";
import { Link } from "react-router";
import styles from "../../stylesheets/ControlsAndLogo.module.css";

const Controls = () => {
  return (
    <>
      {/* <div className={styles.logo}>
        <img src={logoImg} alt="Logo" className={styles.Logoface} />
      </div> */}

      <div className={styles.controlPanel}>
        <button className={styles.Controlsbtn}>
          <Link to="/">
            <img src={MasterAi} alt="" className={styles.NetworkAiimg} />
          </Link>
        </button>
        <button className={styles.Controlsbtn}>
          <Link to="/">
            <img src={Securityimg} alt="" className={styles.NetworkAiimg} />
          </Link>
        </button>
        <button className={styles.Controlsbtn}>
          <Link to="/UiUxAI">
            <img src={uiuxlogo} alt="" className={styles.NetworkAiimg} />
          </Link>
        </button>
        <button className={styles.Controlsbtn}>
          <Link to="/BackEndAI">
            <img src={backendlogo} alt="" className={styles.NetworkAiimg} />
          </Link>
        </button>
        <button className={styles.Controlsbtn}>
          <img src={NetworkImg} alt="" className={styles.NetworkAiimg} />
        </button>
        <button className={styles.Controlsbtn}>
          <img src={dataAi} alt="" className={styles.NetworkAiimg} />
        </button>
      </div>
    </>
  );
};

export default Controls;
