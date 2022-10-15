const quotes = [
    {
    quote:"다른 존재가 되고 싶다는 갈망, 혹은 진짜 내가 되고 싶다는 갈망이란 대체 뭘까요? 그것은 어떻게 태어나고 자라서 한 사람의 뼈를 이루게 되는 걸까요.",
    author: "<수브다니의 여름 휴가> 중에서",
}, {
    quote:"내가 물고기를 포기했을 때 나는 해골 열쇠를 하나 얻었다. 이 세계의 규칙들이라는 격자를 부수고 더 거침없는 곳으로 들어가게 해주는 물고기 모양의 해골 열쇠. 이 세계 안에 있는 또 다른 세계. 물고기가 존재하지 않고 하늘에서 다이아몬드 비가 내리며 모든 민들레가 가능성으로 진동하고 있는, 저 창밖, 격자가 없는 곳.",
    author:"<물고기는 존재하지 않는다> 중에서",
}, {
    quote: "“다른 세계는 있지만, 그것은 이 세계 안에 있다.”",
    author:"<물고기는 존재하지 않는다> 중에서",
}, {
    quote:"삶이란 어떻게든 의미를 지니고 계속된다는 것을 기억하며, 겨우 살아가야겠다. 기차가 강을 건넜다. 눈물이 멈췄다.",
    author:"<불편한 편의점> 중에서",
}, {
    quote: "고고학 박물관은 이렇게 말하는 것 같았다. “시간여행을 해 본 사람은 알지. 인간의 본성은 변하지 않는다는 걸.” ",
    author:"<유럽 도시 기행1> 중에서",
}, {
    quote:"출국심사를 받기 위해 줄을 서서 허공을 바라보고 있으면…… 하릴없는 생각들이 나를 사로잡는 것이다. 세상의 모든 목적지란 어떻게 태어나는 것일까. 사람에게 목적지가 필요한 게 아니라 목적지가 사람들을 필요로 하는 게 아닐까. 인간이 떠나고 돌아오는 게 아니라 떠날 곳과 돌아올 곳이 인간들을 주고받는 게 아닐까─알록달록한 표지로 된 서양 잠언집의 문장 같은, 그런 생각들 말이다.",
    author:"<절반 이상의 하루오> 중에서",
}, {
    quote:"새는 알에서 나오기 위해 투쟁한다. 알은 세계이다. 태어나려는 자는 하나의 세계를 깨뜨려야 한다. 새는 신에게로 날아간다. 그 신의 이름은 아프락사스다.",
    author: "<데미안> 중에서",
}, {
    quote: "부끄럼 많은 생애를 보냈습니다. 저는 인간의 삶이라는 것을 도저히 이해할 수 없습니다.",
    author:"<인간실격> 중에서",
}, {
    quote:"나는 아무것도 아니다. 그날 저녁 어느 카페의 테라스에서 나는 한낱 실루엣에 지나지 않았다.",
    author:"<어두운 상점들의 거리> 중에서",
}, {
    quote:"하지만 우리가 빛의 속도로 갈 수조차 없다면… 우리는 점점 더 우주에 존재하는 외로움의 총합을 늘려 갈 뿐인게 아닌가?",
    author:"<어떤 물질의 사랑> 중에서",
}, {
    quote: "나는 아득한 낭떠러지 옆에 서 있는 거야. 내가 하는 일은 누구든지 낭떠러지에서 떨어질 것 같으면 얼른 가서 붙잡아 주는거지. 애들이란 달릴 때는 저희가 어디로 달리고 있는지 모르잖아? 그런 때 내가 어딘가에서 나타나 그 애를 붙잡아야 하는 거야. 하루 종일 그 일만 하면 돼. 이를테면 호밀밭의 파수꾼이 되는 거야.",
    author:"<호빌밭의 파수꾼> 중에서",
}
];

const reloadAudio = new Audio("sound/Sys_Talk_Next.wav")

const bookReload = document.querySelector(".reload-book");

const quote = document.querySelector(".book-contents p:first-child");
const author = document.querySelector(".book-contents p:last-child");
const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];
    
quote.innerText = todaysQuote.quote;
author.innerText =todaysQuote.author;


bookReload.addEventListener("click", function(){
    const quote = document.querySelector(".book-contents p:first-child");
    const author = document.querySelector(".book-contents p:last-child");
    const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];
    
    reloadAudio.play();
    quote.innerText = todaysQuote.quote;
    author.innerText =todaysQuote.author;
})
