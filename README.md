# stringcat-frontend

## 실행

```bash
cd stringcat-frontend
npm run dev
```

## 프로젝트 환경

- React
- Next
- Redux
- Redux-undo
- Redux-saga
- prettier
- eslint
- eslint-config-airbnb
- Axios
- Emotion
- TypeScript

## 명명규칙

- 페이지, 컴포넌트 : PascalCase (ex. `Login.tsx`)
- 함수, 변수 : camelCase (ex. `userName`)
- 이벤트 함수 : on 접두사 (ex. `onClickButton`)
- 리덕스 구조 : Ducks Pattern

## 패키지 구조

```
Stringcat
│
├─ public
│   │ index.html
│
├─ pages : 페이지 디렉토리
│   │ index.tsx
│   │ _app.tsx
│   │ _document.tsx
│   └─api : 호출 디렉토리
│
└─ src
    ├─components : 컴포넌트 디렉토리
    ├─hook : 커스텀 훅 디렉토리
    ├─utils : 유틸리티 디렉토리
    └─redux : 리덕스 디렉토리
        ├─reducers
        ├─sagas
        └─store
```
