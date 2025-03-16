# Comandos Git Básicos y Su Orden de Uso 🚀

## Orden Típico para Nuevo Proyecto

1. **Configuración (primera vez)**
```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"
```
➜ Configura tu identidad en Git (solo necesario la primera vez)

2. **Iniciar Proyecto**
```bash
git init
```
➜ Crea un repositorio Git en tu carpeta actual

3. **Revisar Estado**
```bash
git status
```
➜ Muestra qué archivos han cambiado

4. **Preparar Archivos**
```bash
git add .
```
➜ Prepara todos los archivos para commit

5. **Crear Commit**
```bash
git commit -m "Primer commit"
```
➜ Guarda los cambios en el historial

6. **Conectar con GitHub**
```bash
git remote add origin https://github.com/usuario/repo.git
```
➜ Vincula tu proyecto local con GitHub

7. **Subir Cambios**
```bash
git branch -M main
git push -u origin main
```
➜ Sube tu código a GitHub por primera vez

## Ciclo Diario de Trabajo

1. **Ver Cambios Pendientes**
```bash
git status
```
➜ Revisa qué archivos has modificado

2. **Actualizar desde GitHub**
```bash
git pull
```
➜ Descarga cambios del equipo

3. **Preparar Cambios**
```bash
git add .
```
➜ Marca archivos para commit

4. **Guardar Cambios**
```bash
git commit -m "Descripción del cambio"
```
➜ Guarda tus modificaciones

5. **Subir a GitHub**
```bash
git push
```
➜ Comparte tus cambios con el equipo

## Comandos de Emergencia

```bash
git checkout -- archivo    # Deshacer cambios en un archivo
git reset archivo         # Deshacer git add
git log                   # Ver historial de commits
git reset --soft HEAD~1   # Deshacer último commit
git stash                 # Guardar cambios temporalmente
git stash pop            # Recuperar cambios guardados
```

## Situaciones Comunes

1. **Crear Nueva Rama**
```bash
git checkout -b feature/nueva-funcionalidad
```
➜ Crea y cambia a una nueva rama

2. **Cambiar de Rama**
```bash
git checkout main
```
➜ Vuelve a la rama principal

3. **Fusionar Cambios**
```bash
git merge feature/nueva-funcionalidad
```
➜ Incorpora cambios de otra rama

4. **Ver Ramas**
```bash
git branch
```
➜ Muestra todas las ramas locales

5. **Actualizar Repositorio**
```bash
git fetch
git pull
```
➜ Obtiene y fusiona cambios remotos

¡Feliz código! 💻
```