## Proyecto Task Manager

Proyecto full-stack con Django REST Framework y Next.js.

### Estructura del proyecto

```
task-manager/
├── backend/          # API con Django, DRF, Simple JWT
│   ├── backend/      # settings, urls, wsgi, asgi
│   ├── tasks/        # app de tareas: models, views, serializers, urls
│   ├── .venv/        # entorno virtual 
│   └── manage.py
├── frontend/         # Next.js con App Router y Tailwind
│   ├── src/
│   │   ├── app/      # carpetas: page.js, layout.js, login/, tasks/
│   │   └── lib/      # api.js (axios)
│   ├── .next/        # compilado Next.js
│   └── package.json
└── .venv/            # entorno virtual Python 
```

---

### Prerrequisitos

* Python 3.11+
* Node.js 18+
* Git
* Crear y activar un virtualenv para Python (Opcional)

---

### Ejecución del proyecto

#### 1. Clonar el repositorio

```bash
git clone <URL-del-repo>
cd task-manager
```

#### 2. Backend (Django REST)

```bash
python -m venv .venv
# Windows:
.venv\Scripts\activate
# macOS/Linux:
source .venv/bin/activate

pip install -r backend/requirements.txt
cd backend
python manage.py makemigrations tasks
python manage.py migrate
python manage.py createsuperuser  # usuario: admin / admin123
python manage.py runserver  # corre en http://127.0.0.1:8000
```

#### 3. Frontend (Next.js)

```bash
cd frontend
npm install
npm run dev  # corre en http://localhost:3000
```

---

### Usuario de prueba

* **Usuario**: `admin`
* **Contraseña**: `admin123`

---

### Endpoints principales del API

| Método | Ruta                  | Descripción                      |
| ------ | --------------------- | -------------------------------- |
| POST   | `/api/token/`         | Obtener tokens (access, refresh) |
| POST   | `/api/token/refresh/` | Refrescar token                  |
| GET    | `/api/tasks/`         | Listado paginado (5 por página)  |
| POST   | `/api/tasks/`         | Crear nueva tarea                |
| GET    | `/api/tasks/{id}/`    | Detalle de tarea                 |
| PUT    | `/api/tasks/{id}/`    | Actualizar tarea                 |
| DELETE | `/api/tasks/{id}/`    | Eliminar tarea                   |

---

### Notas

* El frontend guarda el token en `localStorage` bajo la clave `token`.
* Asegúrate de que `frontend/src/lib/api.js` tenga `baseURL` apuntando a `http://127.0.0.1:8000/api`.
* Configura `django-cors-headers` para permitir `http://localhost:3000`.
