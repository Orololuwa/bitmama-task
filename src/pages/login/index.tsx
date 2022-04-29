import { getAuth, GithubAuthProvider, signInWithPopup } from "firebase/auth";
import app from "config/firebase-config";
import "./login.css";

const auth = getAuth(app);
const provider = new GithubAuthProvider();

const Login = (): JSX.Element => {
  const handleClick = async () => {
    try {
      const res = await signInWithPopup(auth, provider);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="wrapper">
      <div className="wrapper-box">
        <h3>BitMama</h3>
        <button onClick={handleClick}>Login with github</button>
      </div>
    </div>
  );
};

export default Login;
