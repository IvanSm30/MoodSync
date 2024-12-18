for macbook
Команда для запуска backend из директории backend:
1. python -m venv venv
2. source venv/bin/activate
3. PYTHONPATH=.. uvicorn main:app --reload
Команда для запуска frontend из директории frontend - npm run dev

for windows 10/11
Команда для запуска backend из директории backend:
1. python -m venv venv
2. venv\Scripts\activate.bat
3. set PYTHONPATH=..
4. pip install uvicorn fastapi sqlalchemy aiosqlite (установить зависимости (если нет))
5. uvicorn main:app --reload
Команда для запуска frontend из директории frontend - npm run dev
