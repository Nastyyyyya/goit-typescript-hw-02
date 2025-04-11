import style from "./Loader.module.css";
import { ThreeDots } from "react-loader-spinner";

const Loader: React.FC = () => (
  <div className={style.loader}>
    <ThreeDots />
  </div>
);

export default Loader;
