const {
  MOCK_COMICS,
  MOCK_CATEGORIES,
  REAL_COMIC_CHAPTER_PAGES
} = require("../data/mockComics");

function paginate(array, page = 1, limit = 12) {
  const p = Math.max(1, parseInt(page, 10) || 1);
  const l = Math.max(1, parseInt(limit, 10) || 12);
  const startIndex = (p - 1) * l;
  const items = array.slice(startIndex, startIndex + l);
  const totalItems = array.length;

  return {
    items,
    params: {
      pagination: {
        totalItems,
        totalItemsPerPage: l,
        currentPage: p,
        pageRanges: 5
      }
    }
  };
}

// 1. GET /api/home
exports.getHomeData = (req, res) => {
  const page = parseInt(req.query.page, 10) || 1;
  const { items, params } = paginate(MOCK_COMICS, page, 12);

  return res.status(200).json({
    status: "success",
    message: "Demo Showcase API (PokéAPI, The Simpsons, Marvel Open Sources)",
    data: {
      items,
      params,
      type_list: "home",
      APP_DOMAIN_CDN_IMAGE: ""
    }
  });
};

// 2. GET /api/danh-sach/:type
exports.getListByType = (req, res) => {
  const type = req.params.type;
  const page = parseInt(req.query.page, 10) || 1;

  let filtered = [...MOCK_COMICS];
  if (type === "dang-phat-hanh") {
    filtered = MOCK_COMICS.filter(c => c.status === "ongoing");
  } else if (type === "hoan-thanh") {
    filtered = MOCK_COMICS.filter(c => c.status === "completed");
  } else if (type === "pokemon") {
    filtered = MOCK_COMICS.filter(c => c.category.some(cat => cat.slug === "pokemon"));
  } else if (type === "the-simpsons") {
    filtered = MOCK_COMICS.filter(c => c.category.some(cat => cat.slug === "the-simpsons"));
  } else if (type === "marvel") {
    filtered = MOCK_COMICS.filter(c => c.category.some(cat => cat.slug === "marvel"));
  }

  const { items, params } = paginate(filtered, page, 12);

  return res.status(200).json({
    status: "success",
    message: `Danh sách truyện theo loại: ${type}`,
    data: {
      items,
      params,
      type_list: type,
      APP_DOMAIN_CDN_IMAGE: ""
    }
  });
};

// 3. GET /api/the-loai
exports.getCategories = (req, res) => {
  return res.status(200).json({
    status: "success",
    message: "Danh sách thể loại truyện demo",
    data: {
      items: MOCK_CATEGORIES
    }
  });
};

// 4. GET /api/truyen-tranh/:slug
exports.getComicDetail = (req, res) => {
  const slug = req.params.slug;
  const comic = MOCK_COMICS.find(c => c.slug === slug);

  if (!comic) {
    return res.status(404).json({
      status: "error",
      message: "Không tìm thấy truyện tranh yêu cầu"
    });
  }

  return res.status(200).json({
    status: "success",
    message: "Chi tiết truyện tranh demo",
    data: {
      item: comic,
      seoOnPage: {
        titleHead: `${comic.name} - Đọc Truyện Tranh Showcase`,
        descriptionHead: comic.content,
        og_image: [comic.thumb_url]
      }
    }
  });
};

// 5. GET /api/tim-kiem?keyword=
exports.searchComics = (req, res) => {
  const keyword = (req.query.keyword || "").trim().toLowerCase();
  
  let results = MOCK_COMICS;
  if (keyword) {
    results = MOCK_COMICS.filter(c => 
      c.name.toLowerCase().includes(keyword) ||
      (c.origin_name && c.origin_name.some(on => on.toLowerCase().includes(keyword))) ||
      (c.author && c.author.some(a => a.toLowerCase().includes(keyword))) ||
      (c.category && c.category.some(cat => cat.name.toLowerCase().includes(keyword)))
    );
  }

  const { items, params } = paginate(results, 1, 12);

  return res.status(200).json({
    status: "success",
    message: "Kết quả tìm kiếm truyện",
    data: {
      items,
      params,
      type_list: "search",
      APP_DOMAIN_CDN_IMAGE: ""
    }
  });
};

// 6. GET /api/chapter/:id
exports.getChapterDetail = (req, res) => {
  const chapterId = req.params.id;

  let chapterNum = 1;
  const match = chapterId.match(/-(\d+)$/);
  if (match) {
    chapterNum = parseInt(match[1], 10) || 1;
  }

  let comicName = "Truyện Tranh";
  const foundComic = MOCK_COMICS.find(c => chapterId.includes(c.slug));
  if (foundComic) {
    comicName = foundComic.name;
  }

  // Lấy tập trang truyện tranh thực tế (tranh vẽ tuần tự, khung tranh thoại)
  const episodeIndex = Math.abs(chapterNum - 1) % REAL_COMIC_CHAPTER_PAGES.length;
  const pages = REAL_COMIC_CHAPTER_PAGES[episodeIndex] || REAL_COMIC_CHAPTER_PAGES[0];

  return res.status(200).json({
    status: "success",
    message: "Nội dung chương truyện tranh thực tế bản quyền mở (Open-source Comic Panels & Dialogues)",
    data: {
      domain_cdn: "",
      item: {
        _id: chapterId,
        comic_name: comicName,
        chapter_name: `${chapterNum}`,
        chapter_title: `Tập ${chapterNum}`,
        chapter_path: "",
        chapter_image: pages.map((url, idx) => ({
          image_page: idx,
          image_file: url
        }))
      }
    }
  });
};
