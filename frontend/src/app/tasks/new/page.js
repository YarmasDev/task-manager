"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import api from "../../../lib/api";

export default function NewTaskPage() {
  const [title, setTitle]         = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();

  const handleSubmit = async e => {
    e.preventDefault();
    await api.post("/tasks/", { title, description });
    router.push("/tasks");
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-xl mb-4">Crear Tarea</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          className="border p-2"
          placeholder="Título"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
        <textarea
          className="border p-2"
          placeholder="Descripción"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <button className="bg-blue-600 text-white p-2 rounded">Guardar</button>
      </form>
    </div>
  );
}
