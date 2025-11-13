// js/main.js 파일에 추가할 코드

document.addEventListener('DOMContentLoaded', function() {
  const calendarEl = document.getElementById('fullcalendar-container');

  const calendar = new FullCalendar.Calendar(calendarEl, {
      locale: 'ko', 
      initialView: 'dayGridMonth', 
      headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: '' 
      },
      // 이벤트 데이터는 나중에 백엔드와 연결할 예정입니다.
      events: [
           // 임시 데이터
            { title: '구마', start: '2025-11-11', end: '2025-11-15', color: '#ff69b4' }
      ],
      dateClick: function(info) {
           // 날짜 클릭 시 팝업 열기 (setting_popup.html 내용이 있어야 작동)
            document.getElementById('setting-modal').style.display = 'flex';
            document.getElementById('start-date').value = info.dateStr;
      }
  });

  calendar.render();

  // '기간 추가' 버튼 클릭 이벤트 (main.js에 이어서 추가)
  document.getElementById('open-setting-btn').addEventListener('click', function() {
    // 1. 여기에 alert 메시지를 띄웁니다.
    alert("아직 개발 못해써 ! 좀만 기다려바"); 
    
    // document.getElementById('setting-modal').style.display = 'flex';
  });

});