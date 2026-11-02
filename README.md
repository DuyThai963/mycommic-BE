# 📖 MyComic Backend - High-Speed Clean Demo Showcase API

![Node.js](https://img.shields.io/badge/Node.js-Express-green?style=for-the-badge&logo=node.js)
![License](https://img.shields.io/badge/Media-CC_BY_(Creative_Commons)-blue?style=for-the-badge)

Dịch vụ Backend phục vụ nền tảng đọc truyện tranh trực tuyến **MyComic Showcase Edition**, sử dụng 100% dữ liệu truyện và hình ảnh nguồn mở Creative Commons (CC-BY). Hoạt động hoàn toàn độc lập, không kết nối cơ sở dữ liệu hay nguồn crawler bên ngoài.

## 🌟 Tính Năng Chính
- **100% Clean Media Dataset**: Bộ dữ liệu truyện tranh mở và hình ảnh mỹ thuật chuẩn Unsplash CDN.
- **Sub-millisecond Performance**: Dữ liệu in-memory siêu tốc, thời gian phản hồi API < 2ms.
- **Strict Whitelist CORS**: Bảo mật kết nối chỉ dành cho Frontend được cấp quyền qua biến môi trường `FRONTEND_URL`.
- **Zero Database / Zero Redis / Zero External Scraper**: Hoạt động bền vững trọn đời không lo nghẽn mạng hay chết domain nguồn.

## 🛠️ Biến Môi Trường (Environment Variables)
Cấu hình trong file `.env` (hoặc trên Render Dashboard):
```env
PORT=5000
FRONTEND_URL=https://your-comic-fe.vercel.app
```

## 🚀 Hướng Dẫn Deploy Lên Render
1. Liên kết repository với **Render Web Service**.
2. **Build Command**: `npm install`
3. **Start Command**: `npm start` *(hoặc `node index.js`)*
4. Thêm các biến môi trường liệt kê ở trên.
