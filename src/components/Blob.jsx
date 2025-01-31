import style from './blob.module.scss';
import clsx from "clsx";


function Blob({className}) {
  return (
    <div className={clsx(style.blob, className)}></div>
  );
}
export default Blob;