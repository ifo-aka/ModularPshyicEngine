import { useContext, useRef, useState, useEffect } from "react";
import { DashboardContext } from "../store/DashboardContext";
import styles from "../stylesheets/Signup.module.css";

const Signup = () => {
  const { signupHandler } = useContext(DashboardContext);
  const [regexOk, setRegexOk] = useState(true);
  const [match, setMatch] = useState(true);

  const password = useRef("");
  const password2 = useRef("");

  const checkRegex = () => {
    const regex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%&?]).{8,}$/;
    setRegexOk(regex.test(password.current.value));
  };

  const confirm = () => {
    if (!password.current.value) {
      setMatch(true);
      return;
    }
    setMatch(password.current.value === password2.current.value);
  };

  return (
    <div className={styles.SignupCont}>
      <form
        className={styles.signup}
        onSubmit={(e) => signupHandler(match, e)}
      >
        <div className={styles.cont}>
          <label htmlFor="username">Name</label>
          <br />
          <input type="text" id="username" className={styles.contElement} required />
        </div>

        <div className={styles.cont}>
          <label htmlFor="email">Email</label>
          <br />
          <input type="email" id="email" className={styles.contElement} required />
        </div>

        <div className={styles.cont}>
          <label htmlFor="phoneNumber">Phone</label>
          <br />
          <input type="number" id="phoneNumber" className={styles.contElement} required />
        </div>

        <div className={styles.cont}>
          <label className={!regexOk ? styles.redlab : ""} htmlFor="password">
            Password <span>min 8 chars, 1 uppercase, 1 number, 1 special char</span>
          </label>
          <br />
          <input
            type="password"
            id="password"
            className={styles.contElement}
            ref={password}
            onChange={checkRegex}
            required
          />
        </div>

        <div className={styles.cont}>
          <label htmlFor="confirm">Re-enter Password</label>
          <br />
          <input
            type="password"
            id="confirm"
            className={`${styles.contElement} ${!match ? styles.btnred : ""}`}
            ref={password2}
            onChange={confirm}
            required
          />
        </div>

        <div className={`${styles.cont} ${styles.btnele}`}>
          <button type="submit" className={styles.btnele}>
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
