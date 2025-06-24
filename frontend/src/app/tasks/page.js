"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import api from "../../lib/api";

export default function TasksPage() {
  const [tasks, setTasks] = useState([]);
  const [page, setPage]   = useState(1);
  const [next, setNext]   = useState(null);
  const [prev, setPrev]   = useState(null);

  const fetchTasks = async p => {
    const res = await api.get(`/tasks/?page=${p}`);
    setTasks(res.data.results);
    setNext(res.data.next);
    setPrev(res.data.previous);
    setPage(p);
  };

  useEffect(() => {
    fetchTasks(1);
  }, []);

  return (
    <div className="max-w-xl mx-auto">
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">Mis Tareas</h1>
        <Link href="/tasks/new">
          <button className="bg-green-500 text-white px-3 py-1 rounded">+ Nueva</button>
        </Link>
      </header>

      <ul className="space-y-2">
  {tasks.map(t => (
    <li key={t.id} className="border p-3 rounded hover:shadow">
      <Link
        href={`/tasks/${t.id}`}
        className="block text-blue-600 hover:underline"
      >
        {t.title}
      </Link>
    </li>
  ))}
</ul>


      <div className="flex justify-between mt-4">
        <button
          onClick={() => fetchTasks(page - 1)}
          disabled={!prev}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Anterior
        </button>
        <button
          onClick={() => fetchTasks(page + 1)}
          disabled={!next}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}
