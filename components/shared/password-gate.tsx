"use client";

import { useEffect, useState, type FormEvent } from "react";

const PASSWORD = "816_tohoku";
const STORAGE_KEY = "tohoku_site_unlocked";

export function PasswordGate({ children }: { children: React.ReactNode }) {
  const [unlocked, setUnlocked] = useState(false);
  const [checked, setChecked] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.sessionStorage.getItem(STORAGE_KEY) === "1") {
        setUnlocked(true);
      }
      setChecked(true);
    }
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (input === PASSWORD) {
      window.sessionStorage.setItem(STORAGE_KEY, "1");
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  if (!checked) {
    return <div style={{ minHeight: "100vh", background: "#1B3A6B" }} />;
  }

  if (unlocked) {
    return <>{children}</>;
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#1B3A6B",
        padding: "1.5rem",
        fontFamily:
          '"Noto Sans JP", "Inter", "Hiragino Sans", "Meiryo", sans-serif',
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          width: "100%",
          maxWidth: "380px",
          background: "#ffffff",
          borderRadius: "12px",
          padding: "2rem",
          boxShadow: "0 20px 50px rgba(0,0,0,0.25)",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <h1
          style={{
            fontSize: "1.125rem",
            fontWeight: 700,
            color: "#1a1a1a",
            margin: 0,
          }}
        >
          パスワードを入力してください
        </h1>
        <p style={{ fontSize: "0.875rem", color: "#555", margin: 0 }}>
          このページを閲覧するにはパスワードが必要です。
        </p>
        <input
          type="password"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            if (error) setError(false);
          }}
          autoFocus
          aria-label="パスワード"
          style={{
            width: "100%",
            padding: "0.75rem 0.875rem",
            border: `1px solid ${error ? "#c0392b" : "#d4d4d4"}`,
            borderRadius: "8px",
            fontSize: "1rem",
            outline: "none",
            boxSizing: "border-box",
          }}
        />
        {error && (
          <p
            style={{
              fontSize: "0.8125rem",
              color: "#c0392b",
              margin: 0,
            }}
          >
            パスワードが正しくありません。
          </p>
        )}
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "0.75rem 1rem",
            background: "#1B3A6B",
            color: "#ffffff",
            border: "none",
            borderRadius: "8px",
            fontSize: "1rem",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          送信
        </button>
      </form>
    </div>
  );
}
