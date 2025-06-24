"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function RootLayout({ children }) {
  const router = useRouter();
  const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(localStorage.getItem("token"));
    if (!localStorage.getItem("token") && window.location.pathname !== "/login") {
      router.push("/login");
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <html>
      <body className="p-4">
        {token && (
          <nav className="mb-6 flex justify-end">
            <button onClick={handleLogout} className="px-3 py-1 bg-red-500 text-white rounded">
              Logout
            </button>
          </nav>
        )}
        {children}
      </body>
    </html>
  );
}
