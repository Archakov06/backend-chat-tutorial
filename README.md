Серверная часть чата по курсу - [Разработка чата на ReactJS + NodeJS](https://www.youtube.com/watch?v=iAV8TPaNt_A&list=PL0FGkDGJQjJFDr8R3D6dFVa1nhce_2-ly)

## Установка

1. `npm install` или `yarn`
2. Создать `.env` файл, с помощью команды `cp .env.example .env`.
3. Установить MongoDB если еще не установлен и запустить.
4. Выполнить команду `yarn start` или `npm start`.

## Получение письма подтверждения

Для работы с почтой, мы используем библиотеку `nodemailer`. Вы можете указать свой SMTP-сервер или же подключить тестовый с помощью сервиса mailtrap.io

1. Зарегистрируйтесь на [mailtrap.io](https://mailtrap.io)
2. Войдите в аккаунт данного сервиса.
3. В списке "Inboxes" откройте "Demo inbox".
4. После чего, у вас откроется информация о вашем тестовом SMTP и POP3-сервере.
5. Откройте файл `.env` (если нет, то скопируйте `.env.example` и переименуйте в `.env`)
6. Укажите в `NODEMAILER_HOST` и т.д. те данные, которые вам выдал mailtrap.io
7. Перезапустите сервер бэкенда.
8. После каждой регистриации аккаунта в чате, в разделе "Demo inbox" (Mailtrap) будут поступать письма с подтверждением аккаунта.

P.S.: Вы также можете подтвердить аккаунт без сервиса Mailtrap. Просто найдите вашего юзера в БД и укажите ему `confirmed: true` или перейдите по ссылке `http://localhost:{FRONTEND_PORT}/signup/verify?hash={HASH}`.

## Загрузка файлов на Cloudinary

Для того, чтобы ваши файлы успешно загружались, нужно зарегистрироваться на сайте [cloudinary.com](https://cloudinary.com/)

В файле `.env` вам нужно заполнить параметры для Cloudinary API. Для этого, перейдите в [Dashboard](https://cloudinary.com/console) и скопируйте ваши API-параметры. На скриншоте ниже Pвидно, где именно эти парамтеры находятся.

![](https://image.prntscr.com/image/qc8PzHb4TaWhj_k76D9TKA.png)

**Stack:**

- NodeJS
- TypeScript
- Express
- Mongoose
- Multer
- Nodemailer
- Socket.io
- JWT
- Cloudinary
