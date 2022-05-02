import Backdrop from "components/backdrop";
import styles from "./loading.module.css";

const Loading = (): JSX.Element => {
  return (
    <Backdrop bg="dark">
      <div className={styles.ldsspinner}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Backdrop>
  );
};

export default Loading;
