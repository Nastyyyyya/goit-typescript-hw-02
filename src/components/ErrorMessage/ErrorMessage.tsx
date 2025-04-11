import style from "./ErrorMessage.module.css";
import { ErrorMessageProps } from "./ErrorMessage.types";

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => (
  <p className={style.error}>{message}</p>
);

export default ErrorMessage;
