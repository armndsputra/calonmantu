import style from "./Login.module.css";

export default function Login() {
  return (
    <div className={style.login}>
      <div className={style.card}>
        <div className={style.brand}>
            <h1>Login</h1>
        </div>
        <div className={style.form}>
            <form action="">
                <div className={style.formGroup}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" />
                </div>
                <div className={style.formGroup}>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
        <div className={style.footer}>
            <p>Don't have an account? <a href="/register">Register</a></p>
            
        </div>
      </div>
    </div>
  );
}