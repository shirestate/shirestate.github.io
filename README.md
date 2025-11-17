# PropFolio App

## Local development

npm install
npm run dev

http://localhost:5173

🚀 GitHub Pages


Установи gh-pages:
Если ты еще не установил gh-pages (он должен был добавиться в package.json), выполни команду:

npm install gh-pages --save-dev


Запусти скрипт деплоя:
Выполни в терминале:

npm run deploy

(it will run `npm run build` and `gh-pages -d dist`)


Перейди в Settings (Настройки) -> Pages (Страницы).

В разделе Build and deployment -> Source (Источник) выбери Deploy from a branch.

В разделе Branch (Ветка) выбери gh-pages и папку /(root).

Нажми Save.

Подожди и проверь:
Через несколько минут твой сайт будет доступен по адресу, который ты указал в поле homepage в package.json (например, https://[YOUR-USERNAME].github.io/propfolio-app).