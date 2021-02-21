## Guide
-- Require: Đã cài đặt nodejs version > 10
1. Vào thư mục 01.microservices, chạy `npm install && npm run start:dev`. MS 1 sẽ chạy trên port `3000` và sẽ connect tới MS 2 trên port `3001`
2. Vào thư mục 02.micorservices, chạy `npm install && npm run start:dev`. MS 2 sẽ chạy trên port `3001` và sẽ connect tới MS 1 trên port `3000`
3. Vào trình duyệt gõ : `http://localhost:3000/ms2/calc` để xem thử kết quả.

## Flow demo
Browser -> MS 01 (Http, Microservice) -> MS 02 (Http, Microservice) -> MS 01 -> Browser

## Improvements
1. Sử dụng thêm `Pipe, Guard, Interceptor`
2. Sử dụng một loại `transporter` khác. Hiện tại đang dùng là `TCP` được config trong `main.ts`
3. Tạo thêm 1 hoặc nhiều MS nữa để demo