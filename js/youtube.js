// YOUTUBE
var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
  new YT.Player("player", {
    videoId: "kpXyRiJLORQ",
    playerVars: {
      autoplay: 1, //자동 재생 = 1
      loop: 1, //반복 재생 = 1
      playlist: "kpXyRiJLORQ", //반복 재생할 유튜브 영상 id 목록
      controls: 0, //컨트롤러를 표시하지 않음 = 0
      disablekb: 1, //키보드로 조작하지 않음 = 1
      fs: 0, //전체화면 버튼이 플레이어에 표시되지 않음 = 0
      modestbranding: 1, //Youtube 로고 표시하지 않음 = 1
      rel: 0, //관련된 영상 표시하지 않음 = 0
      showinfo: 0, //제목 표시줄을 숨김 = 0
      enablejsapi: 1, //api호출을 통해 플레이어가 제어됨 = 1
    },
    events: {
      onReady: function (event) {
        event.target.mute(); //영상이 재생할 준비가 되면 음소거 하겠다
      },
    },
  });
}
