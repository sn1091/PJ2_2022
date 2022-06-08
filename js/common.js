window.addEventListener("load", eventFn);


// 이벤트 컨텐츠 동작 
function eventFn() {

    // 1. 호출확인
    console.log("고고씽~!");

    // 2. 대상선정 : .top a -> 상단영역의 모든a
    let e_indi = document.querySelectorAll(".e_indi a");
    console.log("a링크 개수:", e_indi.length, e_indi);
   
    for (let i = 0; i < e_indi.length; i++) {
        e_indi[i].style.backgroundColor="#cdccd5";
        // alink[순번] -> 구체적인 a요소
        // alink.item(순번) -> 위와 같음!
        // function(){코드} -> 이름없는 함수
        // 이름없는 함수를 이벤트속성에
        // 할당해야 코드가 바로실행되지 않고
        // 이벤트가 발생할때 실행된다!
        // alink.item(i).onclick = function(){
        

        e_indi[i].onclick = function () {
            // 클릭된 a요소 자신 -> this
            // this.innerText 는 a요소 글자

            // 1. a요소 텍스트 읽어오기
            let txt = this.innerText;
            console.log(txt);


            // 2. 텍스트에 따라 이동할 페이지 분기하기
            // switch case 사용!

            // 이동주소변수
            let m_left = document.querySelector(".list");
            
            switch (txt) {
                case "1번":
                    m_left.style.left = "0px";
                    break;
                case "2번":
                    m_left.style.left = "-1200px";
                    break;
                case "3번":
                    m_left.style.left = "-2400px";
                    break;
                case "4번":
                    m_left.style.left = "-3600px";
                    break;
                default:
                    m_left.style.left = "0px";
                    break;
            } /////// switch case //////

            this.style.backgroundColor="black";
            this.style.transform="scale(1.2)";
            m_left.style.transition ="left .5s";
        }; //////// click ////////////
    
    } //////////// for ///////////////

} ////////////// linkFn 함수 //////////////////
///////////////////////////////////////////////