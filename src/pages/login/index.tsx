import { getAuth, GithubAuthProvider, signInWithPopup } from "firebase/auth";
import app from "config/firebase-config";
import "./login.css";
import { useAppDispatch } from "store/hooks";
import { loginBegin, loginError, loginSuccess } from "store/auth/authSlice";
import ExpirySession from "utils/expirysession";
import { useNavigate } from "react-router-dom";
import { useToasts } from "react-toast-notifications";

const auth = getAuth(app);
const provider = new GithubAuthProvider();

const Login = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { addToast } = useToasts();

  const handleClick = async () => {
    dispatch(loginBegin());

    try {
      const res = await signInWithPopup(auth, provider);
      const credential = GithubAuthProvider.credentialFromResult(res);
      const token = credential?.accessToken;

      ExpirySession.set("access_token", token);
      dispatch(loginSuccess(true));

      navigate("/", { replace: true });
    } catch (err) {
      dispatch(loginError());
      addToast("Error loging in! Please try again", {
        appearance: "error"
      });
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
