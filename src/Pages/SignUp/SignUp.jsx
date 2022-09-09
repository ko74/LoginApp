import { Link } from "react-router-dom";
import style from "../SignUp/SignUp.module.css";
import Login from "../Login/Login";

const SignUp = () => {
  return (
    <div className={style.container}>
      <div className={style.rightCol}>
        <h2>Sign up</h2>

        <form action="">
          <div className={style.eachInput}>
            <span>Name</span>
            <input type="text" required />
          </div>
          <div className={style.eachInput}>
            <span>Email</span>
            <input type="text" required />
          </div>
          <div className={style.eachInput}>
            <span>Password</span>
            <input type="password" required placeholder="Enter password..." />
          </div>
          <div className={style.eachInput}>
            <span>Password</span>
            <input type="password" required placeholder="confirm password..." />
          </div>
          <div className={style.checkBox}>
            <input type="checkbox" />
            <span>
              By signing up you agree to our <a href="">Terms of service</a> and
              <a href=""> privacy policy</a>
            </span>
          </div>
          <button type="submit">Sign up</button>
        </form>

        <div className={style.SigninLink}>
          <span>
            Already have an account? <Link to='/' >Sign in</Link>
          </span>
        </div>
      </div> 
    </div>
  );
};

export default SignUp;
