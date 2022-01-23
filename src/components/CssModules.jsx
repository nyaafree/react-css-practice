import classes from "./CssModules.module.scss";

export const CssModules = () => {
  return (
    /* 
      モジュールから読み込んだCSSは
      classes.(モジュール内のクラス名) のような形で読み込める
     */
    <div className={classes.container}>
      <p className={classes.title}>CSS Modules</p>
      <button className={classes.button}>CSS Button!!!</button>
    </div>
  );
};
