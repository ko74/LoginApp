import style from "../Login/Login.module.css";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { AiOutlineGooglePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import SignUp from "../SignUp/SignUp";

const Login = () => {
  return (
    <div className={style.container}>
      <div className={style.main}>
        <h2>Login</h2>
        <form action="">
          <div className={style.eachInput}>
            <span>Email</span>
            <input type="text" required />
          </div>

          <div className={style.eachInput}>
            <span>Password</span>
            <input type="password" required />
          </div>

          <div className={style.checkBox}>
            <div className={style.combo}>
              <input type="checkbox" />
              <span>Remember Me</span>
            </div>
            <div className={style.forgot}>
              <a href="">Forgot Password?</a>
            </div>
          </div>

          <button type="submit">Log in</button>
        </form>

        <div className={style.referLinks}>
          <a href="">
            <BsTwitter />
          </a>
          <a href="">
            <AiOutlineGooglePlus />
          </a>
          <a href="">
            <BsFacebook />
          </a>
        </div>

        <div className={style.SigninLink}>
          <span>
            Already have an account? <Link to="/signup"> Sign up</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
