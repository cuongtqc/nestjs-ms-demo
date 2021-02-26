# Experimental branch
## Guide
-- Require: Đã cài đặt nodejs version > 10
-- Require: Đã cài đặt RabbitMQ ([link cài đặt](https://www.rabbitmq.com/download.html))
1. Vào thư mục 01.microservices, chạy `npm install && npm run start:dev`. MS 1 sẽ chạy trên port `3000` và sẽ connect tới RabbitMQ server trên port `5672`
2. Vào thư mục 02.micorservices, chạy `npm install && npm run start:dev`. MS 2 sẽ chạy trên port `3001` và sẽ connect tới RabbitMQ server trên port `5672`
3. Vào trình duyệt gõ : `http://localhost:15672`, default username : `guest`, default password : `guest`, để xem RabbitMQ management UI.
4. Vào trình duyệt gõ : `http://localhost:3000/ms2/calc` để xem thử kết quả. <em>**Warning:** Do đang sử dụng event-based messaging và chưa associate được @Get route handler với event nên cần **reload page** lại lần nữa để xem kết quả.<em>

## Flow demo
Browser -> MS 01 (Http, Microservice) -> RabbitMQ (AMQP, Message broker) -> MS 02 -> RabbitMQ -> MS 01 -> Browser
