export const profile = {
  name: '양지수',
  nameEn: 'Yang Jisu',
  title: 'Backend Developer',
  bio: '설계부터 운영까지, 안정적인 서비스를 만드는 백엔드 개발자입니다.',
  career: '7년+',
  email: 'j1su_94@daum.net',
  phone: '010-9439-1284',
  notionUrl: 'https://yangzsu.notion.site/_-3dbab6dc398e4a5b949a972b039860e5',
} as const

export const skills = {
  backend: [
    'Java', 'Spring Boot', 'Spring MVC', 'Spring Integration',
    'Spring Security', 'Spring Data JPA', 'Spring Batch',
    'JPA', 'QueryDSL', 'MyBatis', 'Hibernate',
    'MySQL', 'MariaDB', 'Oracle', 'Redis',
    'REST API', 'JWT', 'TCP Socket', 'OpenAPI Generator', 'Apache POI',
  ],
  devops: [
    'Git', 'GitLab', 'Docker', 'GitLab CI/CD', 'Jenkins',
    'Nginx', 'Tomcat', 'Linux', 'AWS EC2',
  ],
  frontend: [
    'Next.js', 'React', 'TypeScript', 'JavaScript',
    'jQuery', 'Thymeleaf', 'JSP', 'AngularJS', 'PHP',
  ],
} as const

export type Experience = {
  company: string
  team: string
  role: string
  period: string
  duration: string
  description: string
  highlights: string[]
}

export const experiences: Experience[] = [
  {
    company: '더즌',
    team: '메시징개발팀',
    role: 'Full-Stack 개발자',
    period: '2024.03 ~ 현재',
    duration: '1년+',
    description: '펌뱅킹·결제·카카오페이 제휴·통합 메시징 등 다양한 B2B 서비스를 제공하는 핀테크 기업',
    highlights: [
      'Spring Integration + TCP 소켓 기반 대용량 발송 아키텍처 설계 (처리량 2.5배 향상)',
      'PHP 레거시 서비스를 Next.js + Spring Boot 구조로 단독 전환',
      'OpenAPI Generator 기반 FE/BE 연동 자동화',
      'GitLab CI/CD · Docker 기반 배포 자동화 구축',
    ],
  },
  {
    company: '오픈잇',
    team: '헬스케어서비스사업팀',
    role: 'Full-Stack 개발자',
    period: '2019.12 ~ 2023.08',
    duration: '3년 8개월',
    description: '헬스케어·위치기반·공공 등 다양한 IT 서비스를 개발하는 IT 컨버전스 전문 기업',
    highlights: [
      '쥬비스 그룹 쇼핑몰, CRM, 공통 HUB API 서버 개발 및 운영',
      '슬로우 쿼리 개선을 통한 MySQL 조회 성능 최적화',
      '공통 TypeHandler 개발로 JSON 파싱 코드 중복 제거',
      'Custom Annotation 기반 파라미터 검증 도입으로 API 신뢰성 향상',
    ],
  },
  {
    company: '엠투소프트',
    team: '고객지원팀',
    role: '솔루션 엔지니어',
    period: '2017.03 ~ 2018.11',
    duration: '1년 9개월',
    description: '국내외 20여 국가 6,000여 적용 사례를 보유한 전자문서·리포팅 솔루션(CROWNIX) 전문 기업',
    highlights: [
      '솔루션 기술지원 및 고객사 요구사항 대응',
      '기초 웹 개발 및 솔루션 유지보수',
    ],
  },
]

export type Project = {
  title: string
  period: string
  description: string
  overview: string[]
  highlights: string[]
  stack: string[]
  isSideProject?: boolean
  images?: { src: string; alt: string }[]
}

export const projects: Project[] = [
  {
    title: '더메시지 — UMS 통합 메시징 시스템',
    period: '2025.06 ~ 2025.12',
    description: 'SMS/LMS/MMS·카카오 알림톡/브랜드메시지를 통합 지원하는 B2B/B2C UMS 플랫폼',
    overview: [
      'PHP 기반 레거시 서비스를 Next.js + Spring Boot 구조로 단독 전환',
      '기획 문서 없이 요구사항 직접 정의, DB 설계부터 배포까지 전 과정 담당',
    ],
    highlights: [
      'OpenAPI Generator 도입으로 FE/BE 타입 싱크 자동화',
      'GitLab CI/CD 파이프라인 전환으로 배포 자동화 및 휴먼 에러 제거',
      '내부망 Docker Registry 구축으로 CI/CD 환경 문제 해결',
    ],
    stack: ['Next.js', 'Spring Boot', 'MySQL', 'Docker', 'GitLab CI/CD'],
    images: [
      { src: '/projects/themessage-dashboard.png', alt: '더메시지 — 전송 현황 대시보드' },
      { src: '/projects/themessage-compose.png', alt: '더메시지 — 메시지 작성 화면' },
    ],
  },
  {
    title: '메시지 발송 API',
    period: '2024.10 ~ 2025.03',
    description: '회원가입 인증번호, 주문 완료 알림 등 기업 고객사가 활용하는 SMS/LMS/MMS/RCS/카카오메시지 발송 API',
    overview: [
      'DB 폴링 에이전트 방식의 병목을 해결하기 위해 Spring Integration 기반 TCP 소켓 직접 연동으로 전환',
      '처리량 400건/초 → 1,000건/초 달성 (약 2.5배 향상)',
    ],
    highlights: [
      '멀티스레드 기반 API 요청 1건당 최대 1,000건 일괄 발송 처리',
      'ConcurrentHashMap 기반 소켓 중복 연결 차단으로 안정성 확보',
      'SMS/LMS/MMS/RCS/알림톡 유형별 다건·동보 발송 로직 개발',
    ],
    stack: ['Spring Boot', 'Spring Integration', 'Redis', 'JWT', 'TCP Socket'],
    images: [
      { src: '/projects/sendapi-architecture.png', alt: '메시지 발송 API 아키텍처' },
    ],
  },
  {
    title: '문자 서비스 WEB 개발',
    period: '2024.04 ~ 2024.09',
    description: '알림톡 템플릿 관리, 발신번호 등록 관리, 발송 통계 및 청구서 등 3개 웹 플랫폼',
    overview: [
      'DB 직접 수정 방식의 알림톡 템플릿 관리를 REST API + Thymeleaf 기반 웹 UI로 전환',
    ],
    highlights: [
      'QueryDSL 기반 통계 쿼리로 메시지 유형별 다건 집계 조회 구현',
      'Apache POI를 활용한 청구서 Excel 자동 생성',
      'JWT + Spring Security + Google OTP 2차 인증으로 관리자 보안 강화',
    ],
    stack: ['Spring Boot', 'Thymeleaf', 'QueryDSL', 'MySQL', 'Apache POI'],
  },
  {
    title: '앱인토스 미니앱 사이드 프로젝트',
    period: '2026.04 ~ 진행중',
    description: '토스 앱 안에서 바로 쓰는 미니앱 3개를 혼자 기획·개발·출시 (엔빵 · 오늘의 5초 · 재고뚝딱)',
    overview: [
      '아이디어부터 출시까지 모든 단계를 혼자 진행, 토스 검수 요건 통과 후 정식 출시',
    ],
    highlights: [
      '엔빵 — 친구끼리 N차 모임 정산할 때 송금 횟수를 가장 적게 만드는 계산 로직 직접 구현',
      '서버 없이도 데이터가 날아가지 않게 브라우저에 안전하게 저장하는 구조 설계',
      '오늘의 5초 — 토스 앱 환경에서 영상 편집이 동작하지 않는 문제를 다른 방식으로 해결',
    ],
    stack: ['React', 'TypeScript', '@apps-in-toss/web-framework', 'Zustand', 'Vitest'],
    isSideProject: true,
    images: [
      { src: '/projects/today5sec-1.png', alt: '오늘의 5초 — 매일 한 컷, 5초의 기록' },
      { src: '/projects/today5sec-2.png', alt: '오늘의 5초 — 모은 컷을 골라 나만의 무비로' },
      { src: '/projects/nbbang-1.png', alt: '엔빵 — 복잡한 N빵, 한 번에 끝' },
      { src: '/projects/nbbang-2.png', alt: '엔빵 — 1차, 2차, N차까지 전부 기록' },
      { src: '/projects/quickstock-1.png', alt: '재고뚝딱 — 모든 재고를 한눈에' },
      { src: '/projects/quickstock-2.png', alt: '재고뚝딱 — 간편하게 품목 추가' },
    ],
  },
]
