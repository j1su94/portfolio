# 양지수 포트폴리오 사이트 — 디자인 스펙

**날짜:** 2026-05-05  
**작성자:** 양지수 + Claude Code  

---

## 개요

Java/Spring Boot 기반 7년 3개월 경력의 백엔드 개발자 양지수의 포트폴리오 사이트.  
취업/이직 + 개인 브랜딩 두 가지 목적을 위한 한국어 포트폴리오.

**핵심 컨셉:** 개발자의 시스템에 "로그인"하는 독창적인 UX — ID/PW 입력 후 포트폴리오가 열리는 경험.

---

## 기술 스택

- **프레임워크:** Next.js 14+ (App Router) + TypeScript
- **스타일링:** Tailwind CSS
- **배포:** Vercel (무료)
- **폰트:** JetBrains Mono (코드/UI 텍스트), Noto Sans KR (한글 본문)

---

## 디자인 시스템

### 색상
- **배경:** `#0d1117` (GitHub dark 메인)
- **서브 배경:** `#161b22` (카드, 사이드바)
- **테두리:** `#30363d`
- **포인트:** `#58a6ff` (파란색)
- **성공/강조:** `#3fb950` (초록)
- **텍스트 기본:** `#f0f6fc`
- **텍스트 서브:** `#8b949e`

### 타이포그래피
- UI 레이블, 코드 영역: `JetBrains Mono`
- 본문, 설명: `Noto Sans KR`

---

## 두 버전 구조

### 공통 라우트
```
/          → 버전 B (로그인 Hero → 스크롤 포트폴리오)
/dashboard → 버전 A (로그인 → 대시보드 사이드바)
```

첫 진입 시 두 버전 중 선택하거나, 각 URL로 직접 접근 가능.

---

## 버전 B: 로그인 Hero → 스크롤 포트폴리오 (`/`)

### UX 흐름
1. 전체화면 로그인 Hero (어두운 배경, 터미널 느낌)
2. ID: `YANGJISU` 타이핑 애니메이션 (자동)
3. PASSWORD: `••••••••` 표시
4. LOGIN 버튼 클릭 → 페이드 아웃 → 포트폴리오 스크롤 뷰 전환
5. 상단 고정 네비게이션 바 등장

### 섹션 순서 (스크롤)
1. **Hero 이후 About** — 이름, 직함, 한줄 소개, GitHub/Notion/이메일 링크
2. **Skills** — Backend / DevOps / Frontend 카테고리별 기술 뱃지
3. **Experience** — 타임라인 형태 경력사항
4. **Projects** — 카드 형태 주요 프로젝트
5. **Contact** — 연락처 섹션

---

## 버전 A: 로그인 → 대시보드 (`/dashboard`)

### UX 흐름
1. 전체화면 로그인 화면 (버전 B와 동일)
2. LOGIN → 로딩 애니메이션 → 대시보드 UI 등장
3. 좌측 사이드바 + 우측 메인 컨텐츠 구조

### 대시보드 구조
```
┌─────────────┬────────────────────────────┐
│  YANG.JISU  │  메인 컨텐츠 패널            │
│  ─────────  │                            │
│  ● Profile  │  (선택된 메뉴에 따라 변경)   │
│    Skills   │                            │
│    Career   │                            │
│    Projects │                            │
│    Contact  │                            │
│  ─────────  │                            │
│  ⎋ Logout   │                            │
└─────────────┴────────────────────────────┘
```

- 사이드바 클릭 → 메인 패널 콘텐츠 전환 (애니메이션)
- Logout 클릭 → 로그인 화면으로 복귀

---

## 콘텐츠 상세

### About / Profile
- **이름:** 양지수 (Yang Jisu)
- **직함:** Java/Spring Boot 백엔드 개발자 · 7년+
- **한줄 소개:** "설계부터 운영까지, 안정적인 서비스를 만드는 백엔드 개발자입니다"
- **연락처:** 010-9439-1284 / j1su_94@daum.net
- **링크:** GitHub, Notion 포트폴리오

### Skills
**Backend**
- Java, Spring Boot, Spring MVC, Spring Integration, Spring Security
- Spring Data JPA/Redis, Spring Batch
- JPA, QueryDSL, MyBatis, Hibernate
- MySQL, MariaDB, Oracle, Redis
- REST API, JWT, TCP Socket, OpenAPI Generator, Apache POI

**DevOps**
- Git, GitLab, Docker, GitLab CI/CD, Jenkins
- Nginx, Tomcat, Linux, AWS EC2

**Frontend**
- Next.js, React, TypeScript, JavaScript
- jQuery, Thymeleaf, JSP, AngularJS, PHP

### Experience (타임라인)
| 기간 | 회사 | 직책 | 주요 내용 |
|------|------|------|----------|
| 2024.03 ~ 현재 | 더즌 / 메시징개발팀 | Full-Stack 개발자 | 대용량 메시징 시스템 설계·운영 |
| 2019.12 ~ 2023.08 | 오픈잇 / 헬스케어서비스사업팀 | Full-Stack 개발자 | 쥬비스 그룹 IT 시스템 개발 |
| 2017.03 ~ 2018.11 | 엠투소프트 / 고객지원팀 | 솔루션 엔지니어 | 전자문서·리포팅 솔루션 기술지원 |

### Projects (카드)

**1. 더메시지 — UMS 통합 메시징 시스템** (2025.06 ~ 2025.12)
- PHP 레거시 → Next.js + Spring Boot 전환
- SMS/LMS/MMS/알림톡/친구톡 통합 웹 플랫폼 1인 개발
- GitLab CI/CD + Docker 배포 자동화
- 스택: Next.js, Spring Boot, MySQL, Docker, GitLab CI

**2. 메시지 발송 API** (2024.10 ~ 2025.03)
- Spring Integration TCP 소켓 직접 연동으로 처리량 **400건/초 → 1,000건/초 (2.5배)**
- 멀티스레드 기반 API 1건당 최대 1,000건 일괄 발송
- 스택: Spring Boot, Spring Integration, Redis, JWT

**3. 문자 서비스 WEB 개발** (2024.04 ~ 2024.09)
- 알림톡 템플릿 관리, 발신번호 등록, 발송 통계·청구서 3개 플랫폼
- QueryDSL 통계 쿼리, Apache POI Excel 자동 생성, Google OTP 2차 인증
- 스택: Spring Boot, Thymeleaf, QueryDSL, MySQL

**4. 앱인토스 미니앱 사이드 프로젝트** (2026.04 ~ 진행중)
- 토스 슈퍼앱 내 미니앱 3종 (엔빵, 오늘의 5초, 재고뚝딱) 기획·개발·출시
- 그리디 알고리즘 기반 N빵 정산, Zustand + IndexedDB 영속화
- 스택: React, TypeScript, @apps-in-toss/web-framework

---

## 배포 계획

- **플랫폼:** Vercel (GitHub 연동 자동 배포)
- **도메인:** Vercel 기본 도메인 (`yangjisu.vercel.app` 또는 커스텀)
- **GitHub 레포:** public repo (포트폴리오 코드 공개)
