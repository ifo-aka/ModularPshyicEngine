import styles from "../stylesheets/HeaderAndMain.module.css";


const HeaderAndMain = ({children}) =>{
  return <div className={styles.container} >
      {children}

  </div>
}
export default HeaderAndMain;