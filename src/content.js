// ============================================================
//  Barcha ma'lumotlar shu faylda. Matnni o'zgartirish uchun
//  faqat shu yerni tahrirlang.
// ============================================================

export const CONTACT = {
  // TODO: o'zingiznikiga almashtiring. Bo'sh qoldirilsa, sahifada ko'rinmaydi.
  email: 'burievam@yahoo.com',
  phone: '010-7549-6511',
  telegram: '', // masalan: 'tina_dev' (@ belgisisiz)
  github: 'madina0511',
  linkedin: '', // masalan: 'https://www.linkedin.com/in/...'
  cv: `${import.meta.env.BASE_URL}cv.pdf`, // public/cv.pdf; respects Vite's deployment base
  // Forma uchun: Formspree/o'z backend URL'i. Bo'sh bo'lsa, email ilovasi ochiladi.
  formEndpoint: import.meta.env.VITE_CONTACT_ENDPOINT || '',
}

export const SKILLS = [
  {
    key: 'ai',
    items: ['Machine Learning', 'Deep Learning', 'Computer Vision', 'NLP', 'PyTorch', 'OpenCV', 'NumPy', 'Pandas', 'Matplotlib', 'LLaMA', 'Model Training', 'Fine-tuning', 'Data Preprocessing', 'Data Augmentation', 'Feature Engineering', 'CNN/RNN', 'Image Processing', 'Model Evaluation', 'LLM API Integration', 'RAG Architecture'],
  },
  {
    key: 'frontend',
    items: ['Next.js', 'React', 'Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'SCSS/SASS', 'Tailwind CSS', 'Material UI', 'Redux Toolkit', 'Apollo Client'],
  },
  {
    key: 'backend',
    items: ['Node.js', 'NestJS', 'Express.js', 'Python', 'FastAPI', 'GraphQL', 'RESTful APIs', 'JWT Authentication', 'WebSocket', 'Batch Processing'],
  },
  {
    key: 'database',
    items: ['MongoDB', 'Mongoose', 'MySQL', 'Data Modeling', 'PostgreSQL', 'Redis', 'Vector Databases (MongoDB Atlas Vector Search)'],
  },
  {
    key: 'devops',
    items: ['Docker', 'Nginx', 'Apache', 'PM2', 'Linux (Ubuntu)', 'VPS Deployment', 'AWS EC2', 'Basic CI/CD', 'Git', 'GitHub'],
  },
]

export const PROJECTS = [
  {
    id: 'beauty',
    name: 'BeautyScan AI',
    image: `${import.meta.env.BASE_URL}images/projects/beautyscan.png`,
    live: 'https://beautyscan.live',
    repo: '',
    githubProfile: 'https://github.com/madina0511',
    wip: true,
    // Backend technologies confirmed by the project owner; application source is unavailable.
    tags: ['NestJS 10', 'TypeScript', 'GraphQL / Apollo Server', 'JWT Authentication', 'MongoDB / Mongoose', 'Photoroom API', 'Google Cloud Vision OCR', 'OpenRouter API'],
    stackGroups: [
      { key: 'backend', items: ['NestJS 10', 'TypeScript', 'GraphQL / Apollo Server', 'JWT Authentication'] },
      { key: 'database', items: ['MongoDB / Mongoose'] },
      { key: 'services', items: ['Photoroom API', 'Google Cloud Vision OCR', 'OpenRouter API'] },
    ],
  },
  {
    id: 'kiddo',
    name: 'Kiddo — Full-Stack Kids Clothing Marketplace',
    image: `${import.meta.env.BASE_URL}images/projects/kiddo.png`,
    live: 'https://kiddo-baby.it.com',
    repo: '',
    githubProfile: 'https://github.com/madina0511',
    // Owner-supplied stack and existing portfolio documentation; JWT awaits source verification.
    tags: ['Next.js', 'TypeScript', 'NestJS', 'GraphQL', 'MongoDB', 'LangChain.js', 'WebSocket', 'Google OAuth', 'Toss Payments'],
    stackGroups: [
      { key: 'frontend', items: ['Next.js', 'TypeScript'] },
      { key: 'backend', items: ['NestJS', 'GraphQL'] },
      { key: 'database', items: ['MongoDB'] },
      { key: 'ai', items: ['LangChain.js', 'WebSocket'] },
      { key: 'authentication', items: ['Google OAuth'] },
      { key: 'payments', items: ['Toss Payments'] },
    ],
  },
  {
    id: 'florence',
    name: 'Florance — Full-Stack Flower E-commerce',
    image: `${import.meta.env.BASE_URL}images/projects/florance.png`,
    live: 'https://florance.live',
    repo: 'https://github.com/madina0511/florance',
    frontendRepo: 'https://github.com/madina0511/florance-react',
    // Owner-supplied development stack; repository source was unavailable for independent verification.
    tags: ['React', 'TypeScript', 'Redux Toolkit', 'MUI', 'Node.js', 'Express', 'MongoDB', 'Nginx', 'PM2', 'VPS'],
    stackGroups: [
      { key: 'frontend', items: ['React', 'TypeScript', 'Redux Toolkit', 'MUI'] },
      { key: 'backend', items: ['Node.js', 'Express', 'TypeScript'] },
      { key: 'database', items: ['MongoDB'] },
      { key: 'deployment', items: ['Nginx', 'PM2', 'VPS'] },
    ],
  },
  {
    id: 'security',
    name: 'Security AI — Real-Time Object Detection',
    image: `${import.meta.env.BASE_URL}images/project/security-ai.png`,
    live: '',
    repo: '',
    tags: ['Python', 'YOLOv8', 'OpenCV', 'Telegram Bot API'],
  },
  {
    id: 'face-detection',
    name: 'Face Detection — Real-Time Computer Vision',
    image: `${import.meta.env.BASE_URL}images/projects/face-detection.png`,
    showImage: false,
    live: '',
    repo: '',
    tags: ['Python', 'OpenCV', 'NumPy'],
  },
]

// Preserved for later decisions about Additional Contributions; not currently displayed.
export const ADDITIONAL_PROJECTS = [
  {
    id: 'pawmart',
    name: 'PawMart',
    image: `${import.meta.env.BASE_URL}images/projects/pawmart.png`,
    live: '',
    repo: '',
    tags: ['NestJS', 'GraphQL', 'Next.js', 'MUI', 'RAG', 'Vector Search'],
  },
  {
    id: 'carbon',
    name: 'Carbon Platform',
    image: `${import.meta.env.BASE_URL}images/projects/carbon.png`,
    live: '',
    repo: '',
    tags: ['NestJS', 'Prisma', 'PostgreSQL', 'Next.js', 'Recharts'],
  },
]

// Only technologies and capabilities documented in the existing project data.
const PROJECT_SYSTEMS = {
  // Owner-confirmed backend stack; frontend framework remains unspecified.
  beauty: { backend: 'NestJS 10 · TypeScript · GraphQL / Apollo Server · JWT', database: 'MongoDB / Mongoose', services: 'Photoroom API · Google Cloud Vision OCR · OpenRouter API' },
  kiddo: { frontend: 'Next.js', backend: 'NestJS · GraphQL · LangChain.js', database: 'MongoDB', services: 'Toss Payments · Google sign-in' },
  security: { backend: 'Python · YOLOv8 · OpenCV', services: 'Telegram Bot API' },
  'face-detection': { backend: 'Python · OpenCV · NumPy' },
  florence: { frontend: 'React · TypeScript · Redux Toolkit · MUI', backend: 'Node.js · Express · TypeScript', database: 'MongoDB' },
}

export const PROJECT_CARD_LABELS = {
  ko: {
    screenshot: '프로젝트 화면', missingScreenshot: '임시 안내 · 실제 스크린샷 준비 중',
    solution: '솔루션', website: '웹사이트 방문',
    problem: '문제와 해결', features: '주요 기능', stack: '기술 스택', system: '시스템 설계',
    frontend: '프론트엔드', backend: '백엔드 / 처리', database: '데이터베이스', services: '외부 서비스',
    pending: '임시 안내 · 정보 미제공', missingProblem: '임시 안내 · 구체적인 사용자 문제와 배경 정보 미제공',
    connections: '문서에 기재된 구성 요소입니다. 연결 방식과 미기재 계층은 확인이 필요합니다.',
  },
  en: {
    screenshot: 'Project screenshot', missingScreenshot: 'Placeholder · real screenshot pending',
    solution: 'Solution', website: 'Visit Website',
    problem: 'Problem & Solution', features: 'Key Features', stack: 'Tech Stack', system: 'System Design',
    frontend: 'Frontend', backend: 'Backend / processing', database: 'Database', services: 'External services',
    pending: 'Placeholder · not provided', missingProblem: 'Placeholder · specific user problem and context not provided',
    connections: 'Documented components only. Connections and unspecified layers need confirmation.',
  },
  uz: {
    screenshot: 'Loyiha skrinshoti', missingScreenshot: 'Vaqtinchalik · haqiqiy skrinshot kutilmoqda',
    solution: 'Yechim', website: "Saytga o'tish",
    problem: 'Muammo va yechim', features: 'Asosiy imkoniyatlar', stack: 'Texnologiyalar', system: 'Tizim arxitekturasi',
    frontend: 'Frontend', backend: 'Backend / ishlov berish', database: "Ma’lumotlar bazasi", services: 'Tashqi xizmatlar',
    pending: 'Vaqtinchalik · ma’lumot berilmagan', missingProblem: 'Vaqtinchalik · aniq foydalanuvchi muammosi va kontekst berilmagan',
    connections: 'Faqat hujjatlashtirilgan qismlar. Ulanishlar va ko‘rsatilmagan qatlamlar tasdiqlanishi kerak.',
  },
}

// Existing descriptions remain in T; these concise details do not add new claims.
const PROJECT_COPY = {
  ko: {
    beauty: {
      category: 'AI 이미지 처리',
      problem: '소규모 온라인 판매자는 전문적인 상품 이미지와 다국어 설명을 제작하는 데 필요한 시간, 예산, 도구가 부족한 경우가 많습니다.',
      solution: 'BeautyScan AI는 AI 기반 상품 이미지 처리, 배경 제거, 패키지 OCR 및 다국어 설명 생성을 하나의 플랫폼에 통합하여 온라인 판매자가 전문적인 상품 콘텐츠를 효율적으로 준비할 수 있도록 지원합니다.',
      cardFeatures: ['AI 기반 상품 이미지 배경 제거', '상품 이미지 업로드 및 처리', 'OCR을 통한 패키지 텍스트 추출', '우즈베크어·한국어·영어·러시아어 AI 상품 설명 생성'],
      features: ['상품 이미지 업로드 및 처리', 'AI 기반 상품 이미지 배경 제거', '상품 패키지 이미지의 텍스트 OCR 추출', '우즈베크어·한국어·영어·러시아어 AI 상품 설명 생성'],
      problemLabel: '문제',
      solutionLabel: '해결',
      responsiveTitle: '반응형 디자인',
      responsive: '웹 애플리케이션 UI. 모바일 화면 구성은 문서화되어 있지 않습니다.',
      frontendDescription: '웹 애플리케이션 UI',
      linksTitle: 'GitHub 및 웹사이트',
      githubMissing: 'GitHub 저장소 링크가 제공되지 않았습니다.',
      liveLabel: '웹사이트 방문',
      githubProfileLabel: 'GitHub 프로필',
      systemNote: '프로젝트 개발 정보를 바탕으로 작성한 백엔드 구성입니다. 프론트엔드 프레임워크는 명시하지 않았습니다.',
    },
    kiddo: {
      category: '풀스택 이커머스',
      problemLabel: '문제', solutionLabel: '해결',
      problem: '개별 의류 판매자는 별도의 쇼핑몰 구축 없이 상품을 관리하고 고객에게 판매할 수 있는 플랫폼이 필요하며, 고객은 편리한 상품 탐색, 결제 및 신속한 지원을 원합니다.',
      solution: 'Kiddo는 상품 관리, 온라인 결제, Google 인증 및 AI 고객 지원을 통해 판매자와 고객을 연결하는 다중 역할 아동복 마켓플레이스입니다.',
      cardFeatures: ['상품 관리 기능을 갖춘 다중 역할 마켓플레이스', 'Toss Payments 결제 및 Google OAuth 로그인', 'AI 고객 지원 어시스턴트', 'WebSocket 기반 실시간 AI 응답 스트리밍'],
      features: ['관리자·에이전트/판매자·사용자 역할별 접근 관리', '상품 등록·조회·수정·삭제(CRUD)', '상품 탐색·검색·필터링', '상품 좋아요 및 고객 상호작용', '장바구니 및 주문 결제', 'Toss Payments 결제 연동', 'Google OAuth 로그인', 'AI 고객 지원 어시스턴트', 'WebSocket 기반 AI 응답 스트리밍', '반응형 쇼핑 인터페이스'],
      stackLabels: { ai: 'AI 및 실시간 통신', authentication: '인증', payments: '결제' },
      responsiveTitle: '반응형 디자인', responsive: '다양한 화면 크기에 맞춘 쇼핑 인터페이스.',
      liveLabel: '웹사이트 방문',
      githubProfileLabel: 'GitHub 프로필',
    },
    security: {
      title: 'Security AI — 실시간 객체 탐지',
      category: '참여 프로젝트 · 컴퓨터 비전', imageLabel: '프로젝트 이미지',
      solution: 'Security AI는 카메라 프레임을 분석하여 지원되는 객체를 탐지하고 바운딩 박스와 라벨로 표시하며, Telegram으로 탐지 알림을 제공합니다.',
      features: ['YOLOv8 기반 실시간 객체 탐지', '사람·자동차·오토바이 등 지원 객체 탐지', 'OpenCV 기반 바운딩 박스 및 탐지 라벨 표시', 'Telegram 봇을 통한 탐지 알림'],
    },
    'face-detection': {
      title: 'Face Detection — 실시간 컴퓨터 비전',
      category: '참여 프로젝트 · 컴퓨터 비전', imageLabel: '프로젝트 이미지',
      solution: '웹캠 프레임을 처리하고 Haar Cascade 분류기로 얼굴을 검출하여 원본 카메라 영상과 함께 검출 결과를 시각화합니다.',
      features: ['실시간 웹캠 얼굴 검출', 'OpenCV 기반 비디오 프레임 처리', 'Haar Cascade를 활용한 얼굴 검출', '원본 및 처리된 영상 시각화'],
    },
    florence: {
      title: 'Florance — 풀스택 꽃 쇼핑몰',
      category: '풀스택 이커머스',
      solution: 'Florance는 꽃을 구매하는 고객을 위한 온라인 쇼핑 경험과 관리자를 위한 통합 관리 인터페이스를 제공하며 상품 탐색, 주문 및 매장 운영을 연결합니다.',
      features: ['꽃 상품 카탈로그 및 상세 페이지', '장바구니 및 주문 접수', '상품 관리를 위한 관리자 대시보드', '주문 추적 및 고객 관리'],
      stackLabels: { deployment: '배포' }, frontendCode: '프론트엔드 코드', backendCode: '백엔드 코드',
    },
  },
  en: {
    beauty: {
      category: 'AI image processing',
      problem: "Small online sellers often lack the time, budget, and tools to create professional product images and multilingual descriptions.",
      solution: 'BeautyScan AI combines AI-powered product image processing, background removal, packaging OCR, and multilingual description generation in one platform, helping online sellers prepare professional product content efficiently.',
      cardFeatures: ['AI-powered product background removal', 'Product image upload and processing', 'Packaging text extraction using OCR', 'AI-generated descriptions in Uzbek, Korean, English, and Russian'],
      features: ["Product image upload and processing","AI-powered product background removal","OCR text extraction from product packaging images","AI-generated product descriptions in Uzbek, Korean, English, and Russian"],
      problemLabel: "Problem",
      solutionLabel: "Solution",
      responsiveTitle: "Responsive Design",
      responsive: 'Web application UI. Mobile layout details are not documented.',
      frontendDescription: 'Web application UI',
      linksTitle: 'GitHub & Website',
      githubMissing: "GitHub repository link not provided.",
      liveLabel: 'Visit Website',
      githubProfileLabel: 'GitHub Profile',
      systemNote: 'Backend components reflect project development information. The frontend framework is unspecified.',
    },
    kiddo: {
      category: 'Full-Stack E-commerce',
      problemLabel: 'Problem', solutionLabel: 'Solution',
      problem: 'Independent clothing sellers need a convenient way to manage products and reach customers without building separate e-commerce websites. Customers also need easy product discovery, checkout, and timely support.',
      solution: "Kiddo is a multi-role children's clothing marketplace connecting sellers and customers through product management, online checkout, Google authentication, and AI-powered customer support.",
      cardFeatures: ['Multi-role marketplace with product management', 'Toss Payments checkout and Google OAuth login', 'AI-powered customer support assistant', 'Real-time AI response streaming via WebSocket'],
      features: ['Role-based access for administrators, agents/sellers, and users', 'Product creation, viewing, editing, and deletion (CRUD)', 'Product browsing, search, and filtering', 'Product likes and customer interactions', 'Shopping cart and checkout', 'Toss Payments integration', 'Google OAuth sign-in', 'AI-powered customer support assistant', 'WebSocket-based AI response streaming', 'Responsive shopping interface'],
      stackLabels: { ai: 'AI & real-time communication', authentication: 'Authentication', payments: 'Payments' },
      responsiveTitle: 'Responsive Design', responsive: 'Shopping interface designed for different screen sizes.',
      liveLabel: 'Visit Website',
      githubProfileLabel: 'GitHub Profile',
    },
    security: {
      category: 'Contributed Project · Computer Vision', imageLabel: 'Project image',
      solution: 'Security AI analyzes camera frames, identifies supported object categories, overlays bounding boxes and labels, and provides Telegram-based detection alerts.',
      features: ['Real-time object detection using YOLOv8', 'Detection of people, cars, motorcycles, and other supported objects', 'OpenCV bounding boxes and detection labels', 'Telegram bot notifications for detection alerts'],
    },
    'face-detection': {
      category: 'Contributed Project · Computer Vision', imageLabel: 'Project image',
      solution: 'The application processes webcam frames, detects faces using a Haar Cascade classifier, and visualizes the detection results alongside the original camera feed.',
      features: ['Real-time webcam face detection', 'OpenCV-based video frame processing', 'Haar Cascade face detection', 'Original and processed video visualization'],
    },
    florence: {
      category: 'Full-Stack E-commerce',
      solution: 'Florance provides an online shopping experience for flower customers and a centralized management interface for store administrators, combining product discovery, ordering, and store operations.',
      features: ['Flower catalog and product detail pages', 'Shopping cart and order placement', 'Admin dashboard for product management', 'Order tracking and customer management'],
      stackLabels: { deployment: 'Deployment' }, frontendCode: 'Frontend Code', backendCode: 'Backend Code',
    },
  },
  uz: {
    beauty: {
      category: 'AI yordamida rasmga ishlov berish',
      problem: 'Kichik onlayn sotuvchilarda professional mahsulot rasmlari va ko‘p tilli tavsiflar tayyorlash uchun vaqt, mablag‘ va vositalar ko‘pincha yetishmaydi.',
      solution: 'BeautyScan AI mahsulot rasmlarini AI yordamida qayta ishlash, fonni olib tashlash, qadoq matnini OCR bilan o‘qish va ko‘p tilli tavsiflar yaratishni yagona platformada birlashtirib, onlayn sotuvchilarga professional mahsulot kontentini samarali tayyorlashga yordam beradi.',
      cardFeatures: ['AI yordamida mahsulot rasmi fonini olib tashlash', 'Mahsulot rasmlarini yuklash va qayta ishlash', 'Qadoq matnini OCR orqali ajratib olish', 'O‘zbek, koreys, ingliz va rus tillarida AI tavsiflarini yaratish'],
      features: ['Mahsulot rasmlarini yuklash va qayta ishlash', 'AI yordamida mahsulot rasmi fonini olib tashlash', 'Mahsulot qadoqlari rasmlaridan matnni OCR bilan ajratish', 'O‘zbek, koreys, ingliz va rus tillarida AI mahsulot tavsiflarini yaratish'],
      problemLabel: "Muammo",
      solutionLabel: "Yechim",
      responsiveTitle: "Moslashuvchan dizayn",
      responsive: 'Veb-ilova interfeysi. Mobil ekran tuzilishi hujjatlashtirilmagan.',
      frontendDescription: 'Veb-ilova interfeysi',
      linksTitle: 'GitHub va veb-sayt',
      githubMissing: "GitHub repozitoriy havolasi berilmagan.",
      liveLabel: "Saytga o'tish",
      githubProfileLabel: 'GitHub profil',
      systemNote: 'Backend qismlari loyiha ishlab chiqish ma’lumotlariga asoslangan. Frontend freymvorki ko‘rsatilmagan.',
    },
    kiddo: {
      category: 'Full-stack elektron savdo',
      problemLabel: 'Muammo', solutionLabel: 'Yechim',
      problem: 'Kiyim sotuvchilari alohida internet-do‘kon yaratmasdan mahsulotlarini boshqarish va xaridorlarga sotish imkoniyatiga muhtoj. Xaridorlarga esa qulay qidiruv, to‘lov va tezkor yordam kerak.',
      solution: 'Kiddo mahsulotlarni boshqarish, onlayn to‘lov, Google autentifikatsiyasi va AI yordamida mijozlarni qo‘llab-quvvatlash orqali sotuvchi va xaridorlarni bog‘laydigan ko‘p rolli bolalar kiyimlari marketplace platformasidir.',
      cardFeatures: ['Mahsulotlarni boshqarish imkoniyatiga ega ko‘p rolli marketplace', 'Toss Payments orqali to‘lov va Google OAuth orqali kirish', 'AI yordamida mijozlarni qo‘llab-quvvatlash', 'WebSocket orqali real vaqtda AI javoblarini uzatish'],
      features: ['Administrator, agent/sotuvchi va xaridor rollari bo‘yicha kirish', 'Mahsulotlarni yaratish, ko‘rish, tahrirlash va o‘chirish (CRUD)', 'Mahsulotlarni ko‘rish, qidirish va filtrlash', 'Mahsulotlarga yoqtirish bildirish va xaridorlar bilan muloqot', 'Savatcha va buyurtma to‘lovi', 'Toss Payments integratsiyasi', 'Google OAuth orqali kirish', 'AI yordamida mijozlarni qo‘llab-quvvatlash', 'WebSocket orqali AI javoblarini oqim bilan uzatish', 'Turli ekranlarga moslashuvchan xarid interfeysi'],
      stackLabels: { ai: 'AI va real vaqt aloqasi', authentication: 'Autentifikatsiya', payments: 'To‘lovlar' },
      responsiveTitle: 'Moslashuvchan dizayn', responsive: 'Turli ekran o‘lchamlari uchun mo‘ljallangan xarid interfeysi.',
      liveLabel: "Saytga o'tish",
      githubProfileLabel: 'GitHub profil',
    },
    security: {
      title: 'Security AI — Real vaqtda obyektlarni aniqlash',
      category: 'Ishtirok etilgan loyiha · Kompyuter ko‘rishi', imageLabel: 'Loyiha tasviri',
      solution: 'Security AI kamera kadrlarini tahlil qiladi, qo‘llab-quvvatlanadigan obyektlarni aniqlaydi, ularni ramka va yorliqlar bilan belgilaydi hamda Telegram orqali aniqlash bildirishnomalarini yuboradi.',
      features: ['YOLOv8 orqali real vaqtda obyektlarni aniqlash', 'Odamlar, avtomobillar, mototsikllar va boshqa qo‘llab-quvvatlanadigan obyektlarni aniqlash', 'OpenCV yordamida ramkalar va aniqlash yorliqlarini ko‘rsatish', 'Telegram boti orqali aniqlash bildirishnomalari'],
    },
    'face-detection': {
      title: 'Face Detection — Real vaqtda kompyuter ko‘rishi',
      category: 'Ishtirok etilgan loyiha · Kompyuter ko‘rishi', imageLabel: 'Loyiha tasviri',
      solution: 'Ilova veb-kamera kadrlarini qayta ishlaydi, Haar Cascade klassifikatori orqali yuzlarni aniqlaydi va natijalarni asl kamera tasviri bilan birga ko‘rsatadi.',
      features: ['Veb-kamera orqali real vaqtda yuzlarni aniqlash', 'OpenCV yordamida video kadrlarini qayta ishlash', 'Haar Cascade orqali yuzlarni aniqlash', 'Asl va qayta ishlangan videoni ko‘rsatish'],
    },
    florence: {
      title: 'Florance — Full-stack gul do‘koni',
      category: 'Full-stack elektron savdo',
      solution: 'Florance gul xaridorlariga onlayn xarid qilish va do‘kon administratorlariga markazlashgan boshqaruv interfeysini taqdim etib, mahsulotlarni topish, buyurtma berish va do‘kon faoliyatini birlashtiradi.',
      features: ['Gullar katalogi va mahsulot tafsilotlari sahifalari', 'Savatcha va buyurtma berish', 'Mahsulotlarni boshqarish uchun administrator paneli', 'Buyurtmalarni kuzatish va mijozlarni boshqarish'],
      stackLabels: { deployment: 'Serverga joylashtirish' }, frontendCode: 'Frontend kodi', backendCode: 'Backend kodi',
    },
  },
}

export function getProjectDetails(id, lang) {
  const copy = PROJECT_COPY[lang]?.[id]
  const system = { ...PROJECT_SYSTEMS[id] }
  if (id === 'beauty') system.frontend = copy.frontendDescription
  if (id === 'kiddo') {
    const signIn = { ko: 'Google 로그인', en: 'Google sign-in', uz: 'Google orqali kirish' }
    system.services = `Toss Payments · ${signIn[lang]}`
  }
  return {
    ...(copy || { category: '', summary: PROJECT_CARD_LABELS[lang].pending, features: [] }),
    system,
  }
}

export const JOBS = [
  { id: 'webkelajak', company: 'Web Kelajak', start: '2024-07', end: '2026-02' },
  { id: 'moderntech', company: 'ModernTech', start: '2022-05', end: '2024-06' },
]

// ------------------------------------------------------------
//  Tarjimalar: ko = 한국어, en = English, uz = O'zbekcha
// ------------------------------------------------------------
export const T = {
  ko: {
    nav: { skills: '기술', work: '경력', projects: '프로젝트', contact: '연락처' },
    navA11y: { main: '주요 탐색', language: '언어 선택', open: '메뉴 열기', close: '메뉴 닫기' },
    greeting: '안녕하세요, 저는',
    heroBadgeTooltips: ['웹 인터페이스와 프론트엔드 개발', '백엔드 서비스와 API 개발', 'LLM API 연동과 AI 이미지 처리', '프론트엔드, API, 데이터 및 AI 서비스의 구조 설계'],
    role: '풀스택 & AI 엔지니어',
    heroSpecialty: 'AI 통합 경험',
    summary:
      '풀스택 및 AI 엔지니어로서 현대적이고 사용자 친화적인 웹 및 모바일 애플리케이션 개발에 집중하고 있습니다. 3년 이상의 경험을 바탕으로 TypeScript와 Python을 활용한 반응형 인터페이스 및 확장 가능한 백엔드 시스템을 개발해 왔습니다. React와 Next.js 기반 애플리케이션 개발 및 AI 기술 연동을 통해 실제 비즈니스 문제를 해결하고 사용자 경험을 개선하는 데 관심이 있습니다.',
    badge: '채용 제안 환영',
    cv: '이력서 다운로드',
    seeProjects: '프로젝트 보기',
    stats: [
      { n: '3년 이상', l: '개발 경력' },
      { n: '2개국', l: '근무 국가' },
      { n: '3개', l: '구사 언어' },
      { n: 'F-6', l: '결혼이민 체류자격' },
    ],
    skillsTitle: '기술 스택',
    languagesTitle: '언어 능력',
    languages: [
      { id: 'uz', name: '우즈베크어', proficiency: '모국어' },
      { id: 'ko', name: '한국어', proficiency: '유창' },
      { id: 'en', name: '영어', proficiency: '유창' },
    ],
    skillsIntro: '실제 프로젝트에서 써 보고 운영해 본 도구만 적었습니다.',
    cats: { ai: 'AI 및 머신러닝', frontend: '프론트엔드', backend: '백엔드 및 API', database: '데이터베이스 및 캐싱', devops: 'DevOps 및 클라우드' },
    workTitle: '경력',
    workIntro: '우즈베키스탄과 말레이시아에서 웹·모바일 애플리케이션과 백엔드 시스템을 개발했습니다.',
    present: '현재',
    jobs: {
      webkelajak: {
        title: '풀스택 & AI 엔지니어',
        place: '타슈켄트, 우즈베키스탄',
        start: '2024년 7월',
        end: '2026년 2월',
        points: [
          '대학 웹 플랫폼 및 모바일 애플리케이션 개발에 참여하여 프론트엔드와 백엔드 설계·구현을 담당했습니다.',
          'React와 Next.js를 활용해 반응형 인터페이스를 구축하고 최적화했습니다.',
          'Node.js와 NestJS를 기반으로 확장 가능한 백엔드 아키텍처를 설계하고 API 연동 및 데이터 처리를 구현했습니다.',
          '기존 시스템과 데이터베이스 성능을 최적화하여 시스템 안정성을 개선했습니다.',
          '다양한 직무의 팀원들과 협업하여 신규 기능을 개발하고 서비스 제공 품질을 개선했습니다.',
        ],
      },
      moderntech: {
        title: '백엔드 개발자',
        place: '조호르바루, 말레이시아',
        start: '2022년 5월',
        end: '2024년 6월',
        points: [
          'Next.js, NestJS, MongoDB를 활용해 확장 가능한 풀스택 기능을 설계·개발하고 유지보수했습니다.',
          'RESTful API와 GraphQL API를 연동하여 애플리케이션의 데이터 흐름과 사용성을 개선했습니다.',
          '재사용 가능한 모듈형 프론트엔드 컴포넌트를 개발했습니다.',
          '백엔드 데이터 처리 성능과 시스템 확장성을 개선했습니다.',
          'JWT 기반 인증과 파일 업로드 기능을 구현했습니다.',
        ],
      },
    },
    eduTitle: '학력',
    edu: '영산대학교 관광경영학 석사, 2020년 졸업 (GPA 4.0)',
    projectsTitle: '프로젝트',
    viewAllProjects: '모든 프로젝트 보기',
    showLessProjects: '접기',
    projectsIntro: '운영 중인 서비스와 AI를 직접 붙여 본 작업들입니다.',
    live: '사이트 보기',
    code: '코드 보기',
    wip: '개발 중',
    projects: {
      'face-detection': 'OpenCV와 Haar Cascade 분류기를 사용하여 실시간 웹캠 영상에서 사람의 얼굴을 검출하는 Python 컴퓨터 비전 애플리케이션입니다.',
      kiddo: '관리자·판매자·사용자 역할 관리, 온라인 결제, Google 로그인 및 AI 고객 지원 어시스턴트를 제공하는 풀스택 아동복 마켓플레이스입니다.',
      pawmart: '한국 반려동물 쇼핑몰. LangChain.js, OpenRouter, MongoDB Atlas Vector Search로 상품을 검색해 답하는 AI 쇼핑 도우미와 Toss 결제, 리뷰 기능을 갖췄습니다.',
      security: 'YOLOv8과 OpenCV를 사용하여 실시간 카메라 영상에서 사람, 차량 및 기타 객체를 탐지하는 컴퓨터 비전 보안 애플리케이션입니다.',
      florence: '상품 탐색, 장바구니, 주문 관리 및 관리자 대시보드를 제공하는 풀스택 온라인 꽃 쇼핑몰입니다.',
      carbon: '채용 과제로 만든 탄소 배출 대시보드. NestJS, Prisma, PostgreSQL API에 Recharts 차트와 TanStack Table을 붙였습니다.',
      beauty: '이커머스 비즈니스를 위한 AI 기반 상품 이미지 편집 및 다국어 콘텐츠 생성 플랫폼.',
    },
    contactTitle: '연락하기',
    contactIntro: '채용, 프리랜스, 협업 제안 모두 편하게 연락 주세요.',
    labels: { email: '이메일', phone: '전화', telegram: '텔레그램', github: 'GitHub', linkedin: 'LinkedIn', location: '위치' },
    location: '서울, 대한민국',
    form: {
      title: '메시지 보내기',
      name: '이름',
      email: '이메일',
      message: '메시지',
      send: '메시지 보내기',
      sending: '보내는 중…',
      sent: '메시지를 보냈습니다. 확인 후 답장드릴게요.',
      error: '메시지를 보내지 못했습니다. 이메일로 직접 보내 주세요.',
      mailNote: '버튼을 누르면 이메일 앱이 열립니다.',
    },
    footer: '직접 만들고 직접 운영합니다.',
  },

  en: {
    nav: { skills: 'Skills', work: 'Experience', projects: 'Projects', contact: 'Contact' },
    navA11y: { main: 'Main navigation', language: 'Select language', open: 'Open menu', close: 'Close menu' },
    greeting: "Hi, I'm",
    heroBadgeTooltips: ['Web interfaces and frontend development', 'Backend services and API development', 'LLM API integration and AI image processing', 'Structuring frontend, API, data, and AI services'],
    role: 'Full-Stack & AI Engineer',
    heroSpecialty: 'AI integration experience',
    summary:
      'I am a Full-Stack & AI Engineer focused on developing modern, user-friendly web and mobile applications. With over three years of experience, I have worked with TypeScript and Python to build responsive interfaces and scalable backend systems. I have experience developing applications using React and Next.js, and integrating AI capabilities to solve practical business problems and improve user experiences.',
    badge: 'Open to opportunities',
    cv: 'Download CV',
    seeProjects: 'See projects',
    stats: [
      { n: '3+', l: 'Years of Experience' },
      { n: '2', l: 'Countries Worked In' },
      { n: '3', l: 'Languages Spoken' },
      { n: 'F-6', l: 'Marriage Migrant Visa' },
    ],
    skillsTitle: 'Skills',
    languagesTitle: 'Languages',
    languages: [
      { id: 'uz', name: 'Uzbek', proficiency: 'Native' },
      { id: 'ko', name: 'Korean', proficiency: 'Fluent' },
      { id: 'en', name: 'English', proficiency: 'Fluent' },
    ],
    skillsIntro: "Only tools I've used and run in real projects.",
    cats: { ai: 'AI & Machine Learning', frontend: 'Frontend', backend: 'Backend & APIs', database: 'Database & Caching', devops: 'DevOps & Cloud' },
    workTitle: 'Experience',
    workIntro: 'Web and mobile application development and backend engineering across Uzbekistan and Malaysia.',
    present: 'Present',
    jobs: {
      webkelajak: {
        title: 'Full-Stack & AI Engineer',
        place: 'Tashkent, Uzbekistan',
        start: 'July 2024',
        end: 'February 2026',
        points: [
          'Participated in university web platform and mobile application development, handling frontend and backend design and implementation.',
          'Built responsive and optimized interfaces using React and Next.js.',
          'Designed scalable backend architecture using Node.js and NestJS, including API integrations and data processing.',
          'Improved system stability through optimization of existing systems and database performance.',
          'Collaborated with cross-functional teams to develop new features and improve service delivery.',
        ],
      },
      moderntech: {
        title: 'Backend Developer',
        place: 'Johor Bahru, Malaysia',
        start: 'May 2022',
        end: 'June 2024',
        points: [
          'Designed, developed, and maintained scalable full-stack functionality using Next.js, NestJS, and MongoDB.',
          'Integrated RESTful APIs and GraphQL APIs to improve application data flow and usability.',
          'Built reusable and modular frontend components.',
          'Improved backend data-processing performance and system scalability.',
          'Implemented JWT-based authentication and file upload functionality.',
        ],
      },
    },
    eduTitle: 'Education',
    edu: 'M.A. in Tourism Management, Youngsan University, 2020 (GPA 4.0)',
    projectsTitle: 'Projects',
    viewAllProjects: 'View All Projects',
    showLessProjects: 'Show Less',
    projectsIntro: 'Services running in production, and the places I wired AI in.',
    live: 'Visit site',
    code: 'View code',
    wip: 'In progress',
    projects: {
      'face-detection': 'A Python computer vision application that detects human faces in real-time webcam footage using OpenCV and Haar Cascade classifiers.',
      kiddo: "A full-stack children's clothing marketplace featuring multi-role management, secure checkout, Google authentication, and an AI-powered customer support assistant.",
      pawmart: 'Korean pet store with an AI shopping assistant that answers from the product catalog using LangChain.js, OpenRouter and MongoDB Atlas Vector Search. Toss Payments and reviews included.',
      security: 'A computer vision security application that detects people, vehicles, and other objects in real-time camera footage using YOLOv8 and OpenCV.',
      florence: 'A full-stack online flower store featuring product browsing, shopping cart, order management, and an administrative dashboard.',
      carbon: 'Carbon emissions dashboard built for a hiring task: a NestJS, Prisma and PostgreSQL API with Recharts and TanStack Table on the front.',
      beauty: "AI-powered product photography and multilingual content generation platform for e-commerce businesses.",
    },
    contactTitle: 'Contact',
    contactIntro: 'Hiring, freelance or a side project — write to me any time.',
    labels: { email: 'Email', phone: 'Phone', telegram: 'Telegram', github: 'GitHub', linkedin: 'LinkedIn', location: 'Location' },
    location: 'Seoul, South Korea',
    form: {
      title: 'Send a message',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send message',
      sending: 'Sending…',
      sent: "Message sent. I'll get back to you soon.",
      error: "The message didn't send. Please email me directly.",
      mailNote: 'This opens your email app.',
    },
    footer: 'Built and hosted by me.',
  },

  uz: {
    nav: { skills: "Ko'nikmalar", work: 'Tajriba', projects: 'Loyihalar', contact: 'Aloqa' },
    navA11y: { main: 'Asosiy navigatsiya', language: 'Tilni tanlash', open: 'Menyuni ochish', close: 'Menyuni yopish' },
    greeting: 'Salom, men',
    heroBadgeTooltips: ['Veb interfeyslar va frontend ishlab chiqish', 'Backend xizmatlari va API ishlab chiqish', 'LLM API integratsiyasi va AI yordamida rasmga ishlov berish', 'Frontend, API, ma’lumotlar va AI xizmatlari tuzilmasini loyihalash'],
    role: 'Full-Stack va AI muhandisi',
    heroSpecialty: 'AI integratsiyasi tajribasi',
    summary:
      "Men zamonaviy va foydalanuvchiga qulay web hamda mobil ilovalarni ishlab chiqishga ixtisoslashgan Full-Stack va AI muhandisiman. Uch yildan ortiq tajribam davomida TypeScript va Python yordamida responsive interfeyslar va kengaytiriladigan backend tizimlari ustida ishlaganman. React va Next.js asosidagi ilovalar hamda AI integratsiyalari orqali amaliy biznes muammolarini hal qilish va foydalanuvchi tajribasini yaxshilashga e'tibor qarataman.",
    badge: 'Takliflarga ochiqman',
    cv: 'Rezyumeni yuklab olish',
    seeProjects: "Loyihalarni ko'rish",
    stats: [
      { n: '3+', l: 'Yillik tajriba' },
      { n: '2', l: 'Ishlagan davlat' },
      { n: '3', l: 'Til' },
      { n: 'F-6', l: 'Nikoh immigratsiya vizasi' },
    ],
    skillsTitle: "Ko'nikmalar",
    languagesTitle: 'Tillar',
    languages: [
      { id: 'uz', name: 'O‘zbek tili', proficiency: 'Ona tili' },
      { id: 'ko', name: 'Koreys tili', proficiency: 'Erkin' },
      { id: 'en', name: 'Ingliz tili', proficiency: 'Erkin' },
    ],
    skillsIntro: "Faqat real loyihalarda ishlatgan va yuritgan vositalarim.",
    cats: { ai: 'AI va mashinaviy o‘rganish', frontend: 'Frontend', backend: 'Backend va API', database: 'Ma’lumotlar bazasi va keshlash', devops: 'DevOps va bulut' },
    workTitle: 'Tajriba',
    workIntro: 'O‘zbekiston va Malayziyada veb va mobil ilovalar hamda backend tizimlarini ishlab chiqish tajribasi.',
    present: 'Hozir',
    jobs: {
      webkelajak: {
        title: 'Full-Stack va AI muhandisi',
        place: "Toshkent, O'zbekiston",
        start: '2024-yil iyul',
        end: '2026-yil fevral',
        points: [
          'Universitet veb platformasi va mobil ilovasini ishlab chiqishda qatnashib, frontend va backendni loyihalash hamda amalga oshirishga mas’ul bo‘ldim.',
          'React va Next.js yordamida moslashuvchan va optimallashtirilgan interfeyslar yaratdim.',
          'Node.js va NestJS asosida kengaytiriladigan backend arxitekturasini loyihaladim, API integratsiyalari va ma’lumotlarni qayta ishlashni amalga oshirdim.',
          'Mavjud tizimlar va ma’lumotlar bazasi unumdorligini optimallashtirib, tizim barqarorligini yaxshiladim.',
          'Turli yo‘nalishdagi jamoalar bilan hamkorlikda yangi funksiyalar ishlab chiqdim va xizmat ko‘rsatish sifatini yaxshiladim.',
        ],
      },
      moderntech: {
        title: 'Backend dasturchi',
        place: 'Johor Bahru, Malayziya',
        start: '2022-yil may',
        end: '2024-yil iyun',
        points: [
          'Next.js, NestJS va MongoDB yordamida kengaytiriladigan full-stack funksiyalarni loyihaladim, ishlab chiqdim va qo‘llab-quvvatladim.',
          'Ilovadagi ma’lumotlar oqimi va foydalanish qulayligini yaxshilash uchun RESTful API va GraphQL API integratsiyalarini amalga oshirdim.',
          'Qayta ishlatiladigan va modulli frontend komponentlarini yaratdim.',
          'Backendda ma’lumotlarni qayta ishlash unumdorligi va tizimning kengayish imkoniyatini yaxshiladim.',
          'JWT asosidagi autentifikatsiya va fayl yuklash funksiyalarini amalga oshirdim.',
        ],
      },
    },
    eduTitle: "Ta'lim",
    edu: 'Turizm menejmenti magistri, Youngsan universiteti, 2020 (GPA 4.0)',
    projectsTitle: 'Loyihalar',
    viewAllProjects: 'Barcha loyihalarni ko‘rish',
    showLessProjects: 'Kamroq ko‘rsatish',
    projectsIntro: "Real ishlayotgan servislar va AI'ni o'zim ulagan ishlar.",
    live: "Saytni ko'rish",
    code: "Kodni ko'rish",
    wip: 'Ishlanmoqda',
    projects: {
      'face-detection': 'OpenCV va Haar Cascade klassifikatorlari yordamida real vaqtdagi veb-kamera tasvirida inson yuzlarini aniqlaydigan Python kompyuter ko‘rishi ilovasi.',
      kiddo: 'Administrator, sotuvchi va xaridor rollari, onlayn to‘lov, Google orqali kirish va AI yordamchi bilan ishlaydigan bolalar kiyimlari marketplace platformasi.',
      pawmart: "Koreya uchun uy hayvonlari do'koni. LangChain.js, OpenRouter va MongoDB Atlas Vector Search yordamida mahsulotlar bo'yicha javob beradigan AI yordamchi, Toss to'lovlari va sharhlar.",
      security: 'YOLOv8 va OpenCV yordamida real vaqtdagi kamera tasvirida odamlar, transport vositalari va boshqa obyektlarni aniqlaydigan kompyuter ko‘rishiga asoslangan xavfsizlik ilovasi.',
      florence: 'Mahsulotlarni ko‘rish, savatcha, buyurtmalarni boshqarish va administrator paneliga ega full-stack onlayn gul do‘koni.',
      carbon: "Ishga qabul topshirig'i uchun qilingan uglerod chiqindilari dashboard'i: NestJS, Prisma va PostgreSQL API, Recharts va TanStack Table.",
      beauty: 'Elektron tijorat bizneslari uchun AI yordamida mahsulot rasmlarini tahrirlash va ko‘p tilli tavsiflar yaratish platformasi.',
    },
    contactTitle: 'Aloqa',
    contactIntro: "Ish taklifi, frilans yoki hamkorlik — bemalol yozing.",
    labels: { email: 'Email', phone: 'Telefon', telegram: 'Telegram', github: 'GitHub', linkedin: 'LinkedIn', location: 'Manzil' },
    location: 'Seul, Janubiy Koreya',
    form: {
      title: 'Xabar yuborish',
      name: 'Ism',
      email: 'Email',
      message: 'Xabar',
      send: 'Xabar yuborish',
      sending: 'Yuborilmoqda…',
      sent: 'Xabar yuborildi. Tez orada javob beraman.',
      error: "Xabar yuborilmadi. Iltimos, to'g'ridan-to'g'ri emailga yozing.",
      mailNote: 'Tugma email ilovangizni ochadi.',
    },
    footer: "O'zim yaratdim, o'zim yuritaman.",
  },
}
