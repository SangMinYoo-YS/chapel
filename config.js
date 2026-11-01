// 예배당 설정 파일 — 이 파일만 고치면 돼요.
// 따옴표("") 안의 글자만 바꾸고, 쉼표와 괄호는 그대로 두세요.

window.CHAPEL = {
  // 화면 위에 보이는 예배당 이름
  churchName: "랜선 예배당",

  // 유튜브 라이브 주소 (예: "https://www.youtube.com/@우리교회/live")
  streamUrl: "",

  // 정면 스크린에 차례로 나오는 문구. 줄바꿈은 \n, 마지막 줄을 "— "로 시작하면 출처로 작게 보여요.
  slides: [
    "랜선 예배당에 오신 것을 환영합니다\n— 어디서든 함께 드리는 예배",
    "여호와는 나의 목자시니\n내가 부족함이 없으리로다\n— 시편 23:1",
    "수고하고 무거운 짐 진 자들아\n다 내게로 오라\n내가 너희를 쉬게 하리라\n— 마태복음 11:28",
    "두세 사람이 내 이름으로 모인 곳에는\n나도 그들 중에 있느니라\n— 마태복음 18:20"
  ],

  // 예배 시간 (한국 시간). day: 0=일 1=월 2=화 3=수 4=목 5=금 6=토, dur: 진행 시간(분)
  schedule: [
    { day: 0, time: "09:00", name: "주일 1부 예배", dur: 70 },
    { day: 0, time: "11:00", name: "주일 2부 예배", dur: 90 },
    { day: 3, time: "19:30", name: "수요 예배",     dur: 70 },
    { day: 5, time: "21:00", name: "금요 기도회",   dur: 90 }
  ],

  // Firebase 연결 정보 — 안내서 2단계에서 복사한 값을 붙여 넣으세요.
  // 비워 두면 '체험 모드'로 혼자 둘러볼 수 있어요.
  firebase: {
    apiKey: "AIzaSyAfIORMimisJhH-zcH5BziNph_V79Fn9B8",
    authDomain: "online-chapel-70d76.firebaseapp.com",
    databaseURL: "https://online-chapel-70d76-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "online-chapel-70d76",
    storageBucket: "online-chapel-70d76.firebasestorage.app",
    messagingSenderId: "199953574974",
    appId: "1:199953574974:web:1ba29df15e7a2a8ce6356f"
  }
};
