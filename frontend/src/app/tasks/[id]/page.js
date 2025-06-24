"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import api from "../../../lib/api";
import { use } from "react";


export default function TaskDetailPage({ params }) {
  const { id } = use(params);  
  const router = useRouter();
  const [task, setTask] = useState(null);

  useEffect(() => {
    api.get(`/tasks/${id}/`).then(res => setTask(res.data));
  }, [id]);

  if (!task) return <p>Cargando...</p>;

  return (
    <div className="max-w-xl mx-auto p-4">
      <button
        onClick={() => router.back()}
        className="mb-4 px-3 py-1 border rounded hover:bg-gray-100"
      >
        ← Atrás
      </button>

      <h1 className="text-2xl font-bold mb-2">{task.title}</h1>
      <p className="mb-4">{task.description}</p>

    </div>
  );
}
