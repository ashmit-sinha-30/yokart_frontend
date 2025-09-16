"use client";
import { useState } from "react";
import styles from "./Login.module.scss";
import { FaUser, FaLock } from "react-icons/fa";

export default function Login() {
  const [form, setForm] = useState({ username: "", password: "" });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login submitted:", form);
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.logo}>THEYOKART</div>
        <h2 className={styles.title}>User Login</h2>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div>
            <label className={styles.label}>Username</label>
            <div className={styles.inputWrapper}>
              <FaUser className={styles.icon} />
              <input
                type="text"
                name="username"
                placeholder="Enter username"
                value={form.username}
                onChange={onChange}
                className={styles.input}
              />
            </div>
          </div>

          <div>
            <label className={styles.label}>Password</label>
            <div className={styles.inputWrapper}>
              <FaLock className={styles.icon} />
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                value={form.password}
                onChange={onChange}
                className={styles.input}
              />
            </div>
          </div>

          <button type="submit" className={styles.button}>
            LOGIN
          </button>

          <div className={styles.footer}>
            Not a user? <a href="/signup">Sign up</a>
          </div>
        </form>
      </div>
    </div>
  );
}
