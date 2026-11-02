/**
 * Dữ liệu truyện tranh Demo Showcase với 100% CÁC TRANG TRUYỆN TRANH THỰC THỤ
 * Sử dụng bộ trang truyện có thoại, khung hình nghệ thuật từ Open Webcomic (CC-BY 4.0)
 * Kết hợp dữ liệu nhận diện thương hiệu từ PokéAPI, The Simpsons API và Marvel Universe.
 */

// Danh sách các tập truyện tranh THỰC SỰ (có cốt truyện, khung tranh, bong bóng thoại)
const REAL_COMIC_CHAPTER_PAGES = [
  // Hồi 1: Độc Dược Bay (4 trang)
  [
    "https://www.peppercarrot.com/0_sources/ep01_Potion-of-Flight/low-res/en_Pepper-and-Carrot_by-David-Revoy_E01P01.jpg",
    "https://www.peppercarrot.com/0_sources/ep01_Potion-of-Flight/low-res/en_Pepper-and-Carrot_by-David-Revoy_E01P02.jpg",
    "https://www.peppercarrot.com/0_sources/ep01_Potion-of-Flight/low-res/en_Pepper-and-Carrot_by-David-Revoy_E01P03.jpg",
    "https://www.peppercarrot.com/0_sources/ep01_Potion-of-Flight/low-res/en_Pepper-and-Carrot_by-David-Revoy_E01P04.jpg"
  ],
  // Hồi 2: Nước Cầu Vồng (6 trang)
  [
    "https://www.peppercarrot.com/0_sources/ep02_Rainbow-potions/low-res/en_Pepper-and-Carrot_by-David-Revoy_E02P01.jpg",
    "https://www.peppercarrot.com/0_sources/ep02_Rainbow-potions/low-res/en_Pepper-and-Carrot_by-David-Revoy_E02P02.jpg",
    "https://www.peppercarrot.com/0_sources/ep02_Rainbow-potions/low-res/en_Pepper-and-Carrot_by-David-Revoy_E02P03.jpg",
    "https://www.peppercarrot.com/0_sources/ep02_Rainbow-potions/low-res/en_Pepper-and-Carrot_by-David-Revoy_E02P04.jpg",
    "https://www.peppercarrot.com/0_sources/ep02_Rainbow-potions/low-res/en_Pepper-and-Carrot_by-David-Revoy_E02P05.jpg",
    "https://www.peppercarrot.com/0_sources/ep02_Rainbow-potions/low-res/en_Pepper-and-Carrot_by-David-Revoy_E02P06.jpg"
  ],
  // Hồi 3: Thành Phần Bí Mật (4 trang)
  [
    "https://www.peppercarrot.com/0_sources/ep03_The-secret-ingredients/low-res/en_Pepper-and-Carrot_by-David-Revoy_E03P01.jpg",
    "https://www.peppercarrot.com/0_sources/ep03_The-secret-ingredients/low-res/en_Pepper-and-Carrot_by-David-Revoy_E03P02.jpg",
    "https://www.peppercarrot.com/0_sources/ep03_The-secret-ingredients/low-res/en_Pepper-and-Carrot_by-David-Revoy_E03P03.jpg",
    "https://www.peppercarrot.com/0_sources/ep03_The-secret-ingredients/low-res/en_Pepper-and-Carrot_by-David-Revoy_E03P04.jpg"
  ],
  // Hồi 4: Tia Sáng Thiên Tài (4 trang)
  [
    "https://www.peppercarrot.com/0_sources/ep04_Stroke-of-genius/low-res/en_Pepper-and-Carrot_by-David-Revoy_E04P01.jpg",
    "https://www.peppercarrot.com/0_sources/ep04_Stroke-of-genius/low-res/en_Pepper-and-Carrot_by-David-Revoy_E04P02.jpg",
    "https://www.peppercarrot.com/0_sources/ep04_Stroke-of-genius/low-res/en_Pepper-and-Carrot_by-David-Revoy_E04P03.jpg",
    "https://www.peppercarrot.com/0_sources/ep04_Stroke-of-genius/low-res/en_Pepper-and-Carrot_by-David-Revoy_E04P04.jpg"
  ],
  // Hồi 5: Kỳ Nghỉ Đặc Biệt (4 trang)
  [
    "https://www.peppercarrot.com/0_sources/ep05_Special-holiday-episode/low-res/en_Pepper-and-Carrot_by-David-Revoy_E05P01.jpg",
    "https://www.peppercarrot.com/0_sources/ep05_Special-holiday-episode/low-res/en_Pepper-and-Carrot_by-David-Revoy_E05P02.jpg",
    "https://www.peppercarrot.com/0_sources/ep05_Special-holiday-episode/low-res/en_Pepper-and-Carrot_by-David-Revoy_E05P03.jpg",
    "https://www.peppercarrot.com/0_sources/ep05_Special-holiday-episode/low-res/en_Pepper-and-Carrot_by-David-Revoy_E05P04.jpg"
  ],
  // Hồi 6: Cuộc Thi Độc Dược (7 trang)
  [
    "https://www.peppercarrot.com/0_sources/ep06_The-Potion-Contest/low-res/en_Pepper-and-Carrot_by-David-Revoy_E06P01.jpg",
    "https://www.peppercarrot.com/0_sources/ep06_The-Potion-Contest/low-res/en_Pepper-and-Carrot_by-David-Revoy_E06P02.jpg",
    "https://www.peppercarrot.com/0_sources/ep06_The-Potion-Contest/low-res/en_Pepper-and-Carrot_by-David-Revoy_E06P03.jpg",
    "https://www.peppercarrot.com/0_sources/ep06_The-Potion-Contest/low-res/en_Pepper-and-Carrot_by-David-Revoy_E06P04.jpg",
    "https://www.peppercarrot.com/0_sources/ep06_The-Potion-Contest/low-res/en_Pepper-and-Carrot_by-David-Revoy_E06P05.jpg",
    "https://www.peppercarrot.com/0_sources/ep06_The-Potion-Contest/low-res/en_Pepper-and-Carrot_by-David-Revoy_E06P06.jpg",
    "https://www.peppercarrot.com/0_sources/ep06_The-Potion-Contest/low-res/en_Pepper-and-Carrot_by-David-Revoy_E06P07.jpg"
  ]
];

function generateChapters(slug, count = 6, titlePrefix = "Hồi") {
  const chapterTitles = [
    "Độc Dược Bay",
    "Nước Cầu Vồng",
    "Thành Phần Bí Mật",
    "Tia Sáng Thiên Tài",
    "Kỳ Nghỉ Đặc Biệt",
    "Cuộc Thi Độc Dược"
  ];

  const chapters = [];
  for (let i = 1; i <= count; i++) {
    const title = chapterTitles[(i - 1) % chapterTitles.length];
    chapters.push({
      filename: `chap-${i}`,
      chapter_name: `${i}`,
      chapter_title: `${titlePrefix} ${i}: ${title}`,
      chapter_api_data: `api-chapter-${slug}-${i}`
    });
  }
  return chapters;
}

const MOCK_COMICS = [
  // 1. OPEN WEBCOMIC ĐẦY ĐỦ CỐT TRUYỆN
  {
    _id: "cc401",
    name: "Pepper & Carrot: Phù Thủy & Chú Mèo Tinh Nghịch",
    slug: "pepper-and-carrot",
    origin_name: ["Pepper & Carrot (Official Open Comic CC-BY)"],
    status: "ongoing",
    thumb_url: "https://www.peppercarrot.com/0_sources/ep01_Potion-of-Flight/low-res/en_Pepper-and-Carrot_by-David-Revoy_E01P01.jpg",
    sub_docquyen: true,
    author: ["David Revoy"],
    content: "Cuộc phiêu lưu phép thuật kỳ thú của cô bé phù thủy Pepper và chú mèo Carrot. Bộ truyện tranh mở có đầy đủ cốt truyện và từng trang tranh chuẩn mực, đọc cuộn dọc vô tận.",
    category: [
      { id: "fan", name: "Giả Tưởng", slug: "fantasy" },
      { id: "com", name: "Hài Hước", slug: "comedy" },
      { id: "adv", name: "Phiêu Lưu", slug: "adventure" }
    ],
    updatedAt: "2026-11-02T16:00:00.000Z",
    chaptersLatest: [
      { filename: "chap-6", chapter_name: "6", chapter_title: "Hồi 6: Cuộc Thi Độc Dược", chapter_api_data: "api-chapter-pepper-and-carrot-6" },
      { filename: "chap-5", chapter_name: "5", chapter_title: "Hồi 5: Kỳ Nghỉ Đặc Biệt", chapter_api_data: "api-chapter-pepper-and-carrot-5" }
    ],
    chapters: [
      {
        server_name: "Server Creative Commons",
        server_data: generateChapters("pepper-and-carrot", 6, "Hồi")
      }
    ]
  },

  // 2. POKÉMON UNIVERSE (PokeAPI Artwork)
  {
    _id: "pk101",
    name: "Pokémon: Huyền Thoại Kanto & Pikachu",
    slug: "pokemon-huyen-thoai-kanto",
    origin_name: ["Pocket Monsters: Kanto Adventures (PokéAPI Source)"],
    status: "ongoing",
    thumb_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    sub_docquyen: false,
    author: ["Satoshi Tajiri", "PokéAPI Open Project"],
    content: "Hành trình khởi đầu của huấn luyện viên trẻ tuổi cùng cộng sự Pikachu đáng yêu nhưng tràn đầy sức mạnh điện tích. Cả hai cùng nhau vượt qua các nhà thi đấu Kanto, đối đầu với Đội Hỏa Tiễn và chinh phục Tứ Đại Thiên Vương.",
    category: [
      { id: "pk", name: "Pokémon", slug: "pokemon" },
      { id: "act", name: "Hành Động", slug: "action" },
      { id: "adv", name: "Phiêu Lưu", slug: "adventure" }
    ],
    updatedAt: "2026-11-02T15:30:00.000Z",
    chaptersLatest: [
      { filename: "chap-6", chapter_name: "6", chapter_title: "Tập 6: Trận Chiến Đại Hội", chapter_api_data: "api-chapter-pokemon-huyen-thoai-kanto-6" }
    ],
    chapters: [
      {
        server_name: "Server PokéAPI",
        server_data: generateChapters("pokemon-huyen-thoai-kanto", 6, "Tập")
      }
    ]
  },
  {
    _id: "pk102",
    name: "Pokémon: Ngọn Lửa Bất Diệt Charizard",
    slug: "pokemon-charizard-flame",
    origin_name: ["Pokémon: Charizard Flame Chronicle"],
    status: "completed",
    thumb_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
    sub_docquyen: false,
    author: ["Ken Sugimori", "PokéAPI"],
    content: "Từ chú rồng lửa Charmander nhỏ bé bị bỏ rơi dưới mưa, đến cú tiến hóa Charizard dũng mãnh bảo vệ thung lũng rồng và làm chủ tuyệt kỹ Hơi Thở Rồng.",
    category: [
      { id: "pk", name: "Pokémon", slug: "pokemon" },
      { id: "fan", name: "Giả Tưởng", slug: "fantasy" },
      { id: "act", name: "Hành Động", slug: "action" }
    ],
    updatedAt: "2026-10-31T11:20:00.000Z",
    chaptersLatest: [
      { filename: "chap-6", chapter_name: "6", chapter_title: "Chương 6: Tiến Hóa Mega Khải Hoàn", chapter_api_data: "api-chapter-pokemon-charizard-flame-6" }
    ],
    chapters: [
      {
        server_name: "Server PokéAPI",
        server_data: generateChapters("pokemon-charizard-flame", 6, "Chương")
      }
    ]
  },
  {
    _id: "pk103",
    name: "Pokémon: Bí Mật Siêu Linh Của Mewtwo",
    slug: "pokemon-mewtwo-strikes",
    origin_name: ["Mewtwo: The Genetic Mystery"],
    status: "ongoing",
    thumb_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png",
    sub_docquyen: false,
    author: ["Takeshi Shudo", "PokéAPI"],
    content: "Sinh ra từ thí nghiệm di truyền trong phòng thí nghiệm bí mật trên đảo New Island, Mewtwo bắt đầu đặt câu hỏi về mục đích tồn tại của mình và ranh giới giữa nhân tạo và tự nhiên.",
    category: [
      { id: "pk", name: "Pokémon", slug: "pokemon" },
      { id: "sci", name: "Khoa Học Viễn Tưởng", slug: "sci-fi" },
      { id: "mys", name: "Bí Ẩn", slug: "mystery" }
    ],
    updatedAt: "2026-10-27T14:45:00.000Z",
    chaptersLatest: [
      { filename: "chap-6", chapter_name: "6", chapter_title: "Hồi 6: Bão Siêu Linh", chapter_api_data: "api-chapter-pokemon-mewtwo-strikes-6" }
    ],
    chapters: [
      {
        server_name: "Server PokéAPI",
        server_data: generateChapters("pokemon-mewtwo-strikes", 6, "Hồi")
      }
    ]
  },

  // 3. THE SIMPSONS COMICS (The Simpsons API)
  {
    _id: "sp201",
    name: "The Simpsons: Nhật Ký Springfield Của Homer",
    slug: "the-simpsons-homer-springfield",
    origin_name: ["The Simpsons: Homer's Odyssey (TheSimpsonsAPI Source)"],
    status: "ongoing",
    thumb_url: "https://cdn.thesimpsonsapi.com/500/character/1.webp",
    sub_docquyen: false,
    author: ["Matt Groening", "The Simpsons API"],
    content: "Cuộc sống thường ngày vừa lười biếng vừa náo loạn nhưng ấm áp của Homer Simpson tại nhà máy điện hạt nhân Springfield cùng những khoảnh khắc gia đình khó đỡ.",
    category: [
      { id: "sp", name: "The Simpsons", slug: "the-simpsons" },
      { id: "com", name: "Hài Hước", slug: "comedy" },
      { id: "sol", name: "Đời Thường", slug: "slice-of-life" }
    ],
    updatedAt: "2026-11-01T15:00:00.000Z",
    chaptersLatest: [
      { filename: "chap-6", chapter_name: "6", chapter_title: "Tập 6: Chiếc Donut Khổng Lồ", chapter_api_data: "api-chapter-the-simpsons-homer-springfield-6" }
    ],
    chapters: [
      {
        server_name: "Server Simpsons",
        server_data: generateChapters("the-simpsons-homer-springfield", 6, "Tập")
      }
    ]
  },
  {
    _id: "sp202",
    name: "The Simpsons: Bart Simpson & Siêu Nhân Phóng Xạ",
    slug: "the-simpsons-bart-radioactive-man",
    origin_name: ["Bart Simpson: Radioactive Boy Wonder"],
    status: "completed",
    thumb_url: "https://cdn.thesimpsonsapi.com/500/character/3.webp",
    sub_docquyen: false,
    author: ["Bongo Comics", "The Simpsons API"],
    content: "Bart Simpson và người bạn Milhouse trong cuộc phiêu lưu săn lùng cuốn truyện tranh số 1 của Siêu Nhân Phóng Xạ (Radioactive Man) với vô số tình huống dở khóc dở cười tại trường tiểu học Springfield.",
    category: [
      { id: "sp", name: "The Simpsons", slug: "the-simpsons" },
      { id: "com", name: "Hài Hước", slug: "comedy" },
      { id: "adv", name: "Phiêu Lưu", slug: "adventure" }
    ],
    updatedAt: "2026-10-29T10:15:00.000Z",
    chaptersLatest: [
      { filename: "chap-6", chapter_name: "6", chapter_title: "Chap 6: Bí Mật Của Milhouse", chapter_api_data: "api-chapter-the-simpsons-bart-radioactive-man-6" }
    ],
    chapters: [
      {
        server_name: "Server Simpsons",
        server_data: generateChapters("the-simpsons-bart-radioactive-man", 6, "Chap")
      }
    ]
  },

  // 4. MARVEL SUPERHERO UNIVERSE
  {
    _id: "mv301",
    name: "Spider-Man: Chiến Binh Nhện Đa Vũ Trụ",
    slug: "spider-man-into-the-multiverse",
    origin_name: ["Spider-Man: Across The Web of Life"],
    status: "ongoing",
    thumb_url: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=800&auto=format&fit=crop&q=80",
    sub_docquyen: true,
    author: ["Stan Lee", "Marvel Comic Legacy"],
    content: "Peter Parker du hành qua các chiều không gian song song, hội ngộ cùng các phiên bản Spider-Man khác nhau để ngăn chặn sự sụp đổ của Mạng Nhện Thực Tại và cứu vãn thành phố New York.",
    category: [
      { id: "mv", name: "Marvel", slug: "marvel" },
      { id: "act", name: "Hành Động", slug: "action" },
      { id: "sci", name: "Khoa Học Viễn Tưởng", slug: "sci-fi" }
    ],
    updatedAt: "2026-11-02T12:00:00.000Z",
    chaptersLatest: [
      { filename: "chap-6", chapter_name: "6", chapter_title: "Chương 6: Tia Tơ Kết Nối Đa Giới", chapter_api_data: "api-chapter-spider-man-into-the-multiverse-6" }
    ],
    chapters: [
      {
        server_name: "Server Marvel",
        server_data: generateChapters("spider-man-into-the-multiverse", 6, "Chương")
      }
    ]
  },
  {
    _id: "mv302",
    name: "Iron Man: Di Sản Công Nghệ Tương Lai",
    slug: "iron-man-future-legacy",
    origin_name: ["Iron Man: Armor Wars Legacy"],
    status: "completed",
    thumb_url: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=800&auto=format&fit=crop&q=80",
    sub_docquyen: false,
    author: ["Larry Lieber", "Marvel Universe"],
    content: "Tony Stark phát triển thế hệ giáp nano Mark LXXXV với lò phản ứng Arc cải tiến để bảo vệ các bằng sáng chế công nghệ cao khỏi bàn tay của các tập đoàn vũ khí ngầm.",
    category: [
      { id: "mv", name: "Marvel", slug: "marvel" },
      { id: "sci", name: "Khoa Học Viễn Tưởng", slug: "sci-fi" },
      { id: "act", name: "Hành Động", slug: "action" }
    ],
    updatedAt: "2026-10-25T18:30:00.000Z",
    chaptersLatest: [
      { filename: "chap-6", chapter_name: "6", chapter_title: "Tập 6: Trái Tim Của Người Sắt", chapter_api_data: "api-chapter-iron-man-future-legacy-6" }
    ],
    chapters: [
      {
        server_name: "Server Marvel",
        server_data: generateChapters("iron-man-future-legacy", 6, "Tập")
      }
    ]
  }
];

const MOCK_CATEGORIES = [
  { id: "pk", name: "Pokémon", slug: "pokemon" },
  { id: "sp", name: "The Simpsons", slug: "the-simpsons" },
  { id: "mv", name: "Marvel", slug: "marvel" },
  { id: "fan", name: "Giả Tưởng", slug: "fantasy" },
  { id: "act", name: "Hành Động", slug: "action" },
  { id: "adv", name: "Phiêu Lưu", slug: "adventure" },
  { id: "com", name: "Hài Hước", slug: "comedy" },
  { id: "sci", name: "Khoa Học Viễn Tưởng", slug: "sci-fi" },
  { id: "mys", name: "Bí Ẩn", slug: "mystery" },
  { id: "sol", name: "Đời Thường", slug: "slice-of-life" }
];

module.exports = {
  MOCK_COMICS,
  MOCK_CATEGORIES,
  REAL_COMIC_CHAPTER_PAGES
};
