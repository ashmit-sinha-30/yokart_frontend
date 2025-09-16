"use client";
import { useState } from "react";
import styles from "./SignUp.module.scss";

export default function SignUp() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirm: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Sign Up</h1>
        <p className={styles.subtitle}>Create an account to get started</p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.row}>
            <div>
              <label className={styles.label}>First name</label>
              <input
                type="text"
                name="firstName"
                placeholder="Enter first name"
                value={form.firstName}
                className={styles.input}
                onChange={onChange}
              />
            </div>
            <div>
              <label className={styles.label}>Last name</label>
              <input
                type="text"
                name="lastName"
                placeholder="Enter last name"
                value={form.lastName}
                className={styles.input}
                onChange={onChange}
              />
            </div>
          </div>

          <div>
            <label className={styles.label}>Email address</label>
            <input
              type="email"
              name="email"
              placeholder="you@mail.com"
              value={form.email}
              className={styles.input}
              onChange={onChange}
            />
          </div>

          <div>
            <label className={styles.label}>Phone number</label>
            <input
              type="tel"
              name="phone"
              placeholder="+91 98765 43210"
              value={form.phone}
              className={styles.input}
              onChange={onChange}
            />
          </div>

          <div className={styles.row}>
            <div>
              <label className={styles.label}>Password</label>
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                value={form.password}
                className={styles.input}
                onChange={onChange}
              />
            </div>
            <div>
              <label className={styles.label}>Confirm</label>
              <input
                type="password"
                name="confirm"
                placeholder="••••••••"
                value={form.confirm}
                className={styles.input}
                onChange={onChange}
              />
            </div>
          </div>

          <button type="submit" className={styles.button}>
            Create Account
          </button>

          <div className={styles.footer}>
            Already have an account? <a href="/login">Log in</a>
          </div>
        </form>
      </div>
    </div>
  );
}
