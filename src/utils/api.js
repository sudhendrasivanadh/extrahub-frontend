// ✅ src/utils/api.js

const BASE = import.meta.env.VITE_API_BASE || "http://localhost:5000";

function headers(token) {
  const h = { "Content-Type": "application/json" };
  if (token) h["Authorization"] = "Bearer " + token;
  return h;
}

export async function signup({ name, email, password }) {
  const res = await fetch(`${BASE}/api/auth/signup`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify({ name, email, password }),
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "Signup failed");
  return data;
}

export async function login({ email, password }) {
  const res = await fetch(`${BASE}/api/auth/login`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "Login failed");
  return data;
}
