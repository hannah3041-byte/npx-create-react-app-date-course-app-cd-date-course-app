# npx-create-react-app-date-course-app-cd-date-course-app
# 데이트 코스 추천 앱 (Date Course App)

검색 없이 바로 떠나는 데이트 코스를 추천받을 수 있는 React 앱입니다.

## 🎯 기능

### 1. 무드 선택 (Mood Selection)
- 8가지 데이트 무드 중에서 선택
  - 조용한, 활기찬, 로맨틱한, 편안한
  - 트렌디한, 자연친화적, 문화적인, 맛집 탐방
- 스와이프 방식의 직관적인 UI

### 2. 데이트 코스 추천
- 선택한 무드에 맞는 데이트 코스 추천
- 각 코스는 3가지 장소로 구성
- 시간, 설명, 주소, 좌표 정보 포함

### 3. 지도 연동
- 카카오맵 연동
- 현재 위치에서 길찾기 기능
- 각 장소의 위치 정보 확인

### 4. 저장 및 공유
- 마음에 드는 코스 저장하기
- 카카오톡 공유 기능 (개발자 등록 후 활성화)

### 5. 이메일 알림
- 서비스 오픈 알림 신청
- 이메일 주소 수집

## 🛠️ 설치 및 실행

### 필수 요구사항
- Node.js 14.0 이상
- npm 또는 yarn
- Firebase 프로젝트

### 설치
```bash
npm install
```

### Firebase 설정

#### 1. Firebase 프로젝트 생성
1. [Firebase Console](https://console.firebase.google.com)로 이동
2. "새 프로젝트 만들기" 클릭
3. 프로젝트 이름 입력 후 생성

#### 2. 환경 변수 설정
`.env.local` 파일을 수정하여 Firebase 자격증명 추가:

```bash
# Firebase Console → 프로젝트 설정 → 일반에서 복사
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
REACT_APP_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

#### 3. Firestore 데이터베이스 생성
1. Firebase Console → "Firestore Database" 클릭
2. "데이터베이스 만들기" 클릭
3. 테스트 모드 선택 (또는 프로덕션 모드)
4. 위치 선택 후 완료

#### 4. 이메일 컬렉션 생성 (선택사항)
Firebase Console에서 수동으로 `emails` 컬렉션을 생성하거나, 앱 실행 시 자동으로 생성됩니다.

### 의존성
```bash
npm install lucide-react tailwindcss postcss autoprefixer firebase
npx tailwindcss init -p
```

### 개발 서버 실행
```bash
npm start
```

앱은 [http://localhost:3000](http://localhost:3000)에서 실행됩니다.

### 프로덕션 빌드
```bash
npm run build
```

## 📁 프로젝트 구조

```
date-course-app/
├── public/
│   └── index.html
├── src/
│   ├── DateCourseApp.jsx    # 메인 컴포넌트
│   ├── index.js             # 진입점
│   └── index.css            # Tailwind 스타일
├── package.json
├── tailwind.config.js
└── postcss.config.js
```

## 📝 코드 구조

### 상태 관리 (State)
- `step`: 현재 페이지 상태 ('welcome', 'mood', 'result')
- `selectedMoods`: 선택된 무드 배열
- `currentMoodIndex`: 현재 무드 카드 인덱스
- `email`: 이메일 입력값
- `emailSubmitted`: 이메일 제출 여부
- `userLocation`: 사용자 위치 좌표
- `savedCourses`: 저장된 코스 배열

### 데이터 구조
- `moods`: 8가지 무드 정보
- `courses`: 8가지 데이트 코스 정보

### 주요 함수
- `handleMoodSwipe()`: 무드 카드 스와이프 처리
- `getRecommendedCourse()`: 추천 코스 결정
- `handleEmailSubmit()`: 이메일 제출
- `openKakaoMap()`: 카카오맵 열기
- `saveCourse()`: 코스 저장
- `shareToKakao()`: 카카오톡 공유

## 🎨 스타일

- **Tailwind CSS** 사용
- 반응형 디자인
- 그라데이션 배경
- 부드러운 애니메이션

## 🌍 위치 기능

- Geolocation API를 사용하여 사용자의 현재 위치 수집
- 수집된 위치 정보는 길찾기 기능에 사용됨

## 🔗 연동 서비스

- **카카오맵**: 지도 표시 및 길찾기
- **카카오톡**: 공유 기능 (설정 필요)

## 📱 장소 정보

### 추천 코스
1. **조용한 데이트** - 종로/삼청동
2. **활기찬 데이트** - 홍대/연남동
3. **로맨틱 데이트** - 남산/이태원
4. **힙한 데이트** - 성수동/한남동
5. **자연 힐링 데이트** - 북한산/남산
6. **문화 예술 데이트** - 삼청동/대학로
7. **맛집 탐방 데이트** - 망리단길/신사동

각 코스는 브런치, 오후, 저녁 활동으로 구성됩니다.

## 🚀 향후 개선사항

- [ ] 백엔드 API 연동
- [ ] 사용자 회원가입/로그인
- [ ] 코스 별 예약 기능
- [ ] 리뷰 및 평점 시스템
- [ ] 실시간 위치 기반 추천
- [ ] 계절/시간에 따른 추천

## 📄 라이선스

MIT License

## 👨‍💻 기여

버그 리포트 및 기능 제안은 언제든 환영합니다!