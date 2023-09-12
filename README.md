

# Guitar Hero High Scores

Un sitio web creado con Django y React que permite a los usuarios registrados publicar y compartir sus puntuaciones más altas de Guitar Hero.

## 🌟 Características:

- **Registro y autenticación**: Los usuarios pueden registrarse y autenticarse para acceder a funcionalidades exclusivas.
- **Publicar puntuaciones**: Los usuarios registrados pueden publicar sus puntuaciones más altas, incluyendo detalles como el título, el nombre de la canción, un enlace de YouTube (opcional) y una descripción.
- **Ver puntuaciones**: Todos los visitantes pueden ver las puntuaciones publicadas por los usuarios.
- **Base de datos MongoDB**: Se utiliza MongoDB Atlas para el almacenamiento de datos, conectado a Django a través de `djongo`.

## 🔧 Instalación:

1. **Clonar este repositorio**:
```bash
git clone <URL_del_repositorio>
```

2. **Navegar al directorio del proyecto y activar el entorno virtual** (si se utiliza):
```bash
cd guitarPosit
source venv/bin/activate  # En Linux/macOS
# o
source venv/Scripts/activate  # En Windows
```

3. **Instalar las dependencias**:
```bash
pip install -r requirements.txt
```

4. **Ejecutar migraciones**:
```bash
python manage.py migrate
```

5. **Iniciar el servidor de desarrollo**:
```bash
python manage.py runserver
```


