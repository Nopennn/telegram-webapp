## Веб-приложение для Telegram
Проект выполнялся по [техническому заданию](https://github.com/Nopennn/telegram-webapp/blob/master/docs/%D0%A2%D0%97%20%D0%BF%D0%BE%20%D0%B1%D0%BE%D1%82%D1%83%20%D0%B2%20WebApp%20%D0%B7%D0%B0%D0%BA%D0%B0%D0%B7%20%D1%82%D0%BE%D0%B2%D0%B0%D1%80%D0%BE%D0%B2%20%D0%B8%20%D0%B8%D0%BD%D1%84%D0%BE%20%D0%BE%D0%B1%D1%80%D0%B0%D1%82%D0%BD%D0%BE%20%D0%B2%20%D0%B1%D0%BE%D1%82%D0%B0.docx) с помощью технологии Telegram WebApp([Документация](https://core.telegram.org/bots/webapps)).

Функции телеграм-бота реализованы в проекте Salebot, данные в бота передаются через Salebot API. Данные, отправляемые ботом, представлены как параметры URL веб-приложения. Пример URL для кнопки в боте:<br>
https://nopennn.github.io/telegram-webapp/?name=#{name}&phone=#{phone}&id=#{client_id}<br>
Здесь Salebot подставляет значения переменных #{name}, #{phone} и #{client_id}, а приложение считывает их в скрипте app.js
