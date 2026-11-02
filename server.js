const express = require('express');
const cors = require('cors');
require('dotenv').config();
const comicDemoController = require('./controllers/comicDemoController');

const app = express();
const PORT = process.env.PORT || 5000;

// 🔒 1. CHÍNH SÁCH BẢO MẬT CORS NGHIÊM NGẶT (STRICT WHITELIST)
const rawFrontendUrls = (process.env.FRONTEND_URL || "http://localhost:3000")
  .split(",")
  .map(url => url.trim().replace(/\/$/, ""))
  .filter(Boolean);

const allowedOrigins = [
  ...rawFrontendUrls,
  "http://localhost:3000",
  "http://127.0.0.1:3000"
];

const corsOptionsDelegate = (reqOrigin, callback) => {
  if (!reqOrigin) return callback(null, true);
  const cleanReqOrigin = reqOrigin.replace(/\/$/, "");
  const isAllowed = allowedOrigins.some(allowed => allowed === cleanReqOrigin || allowed === "*");
  if (isAllowed) {
    return callback(null, true);
  }
  return callback(new Error(`CORS policy violation: Origin ${reqOrigin} is not allowed.`));
};

app.use(cors({
  origin: corsOptionsDelegate,
  credentials: true,
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());

// 🏠 2. HEALTH CHECK & STATUS ENDPOINTS CHO RENDER / CLOUD HOSTING
app.get('/', (req, res) => {
  res.json({
    status: 'online',
    name: 'MyComic Backend Showcase API',
    mode: 'Clean Demo Dataset (CC-BY)',
    timestamp: new Date().toISOString()
  });
});

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// 🔗 3. CÁC API ENDPOINTS PHỤC VỤ FRONTEND
app.get('/api/home', comicDemoController.getHomeData);
app.get('/api/danh-sach/:type', comicDemoController.getListByType);
app.get('/api/the-loai', comicDemoController.getCategories);
app.get('/api/truyen-tranh/:slug', comicDemoController.getComicDetail);
app.get('/api/tim-kiem', comicDemoController.searchComics);
app.get('/api/chapter/:id', comicDemoController.getChapterDetail);

// 🛡️ Bẫy lỗi CORS bảo mật
app.use((err, req, res, next) => {
  if (err && err.message && err.message.includes('CORS policy violation')) {
    return res.status(403).json({
      error: "Yêu cầu bị từ chối bởi chính sách bảo mật CORS!",
      detail: err.message
    });
  }
  next(err);
});

// Lắng nghe trên mọi interface (Dual-stack IPv4 & IPv6)
app.listen(PORT, () => {
  console.log(`🚀 MyComic Backend Demo Server running on port ${PORT}`);
});
