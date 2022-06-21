window.addEventListener("load", eventFn);


// 이벤트 컨텐츠 동작 
function eventFn() {

    // 1. 호출확인
    console.log("고고씽~!");

    // 2. 대상선정 : .e_indi a -> 상단영역의 모든a
    let e_indi = document.querySelectorAll(".e_indi a");
    // console.log("a링크 개수:", e_indi.length, e_indi);
    e_indi[0].style.backgroundColor = "black";

    // 3. 변경대상 : 이동할 블럭 : .event_list ul
    let block = document.querySelectorAll(".event_list ul");
    console.log("블록:",block);
    for (let i = 0; i < e_indi.length; i++) {
        
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
            // let txt = this.innerText;
            // console.log(txt);


            // 2. 텍스트에 따라 이동할 페이지 분기하기
            // switch case 사용!

            // 선택한 블록 이전 블록들을 왼쪽으로 이동
            for(let x=0;x<i;x++)
            block[x].style.left="-100%";

            // 선택한 블록 보이도록 설정
            block[i].style.left = "0";
            block[i].style.zIndex="111";
            
            // 선택한 블록 이후 블록들을 오른쪽으로 이동
            for(let y=3;y>i;y--)
            block[y].style.left="100%";

            // switch (i) {
            //     case 0:
            //         m_left.style.left = "0px";
            //         break;
            //     case 1:
            //         m_left.style.left = "-1200px";
            //         break;
            //     case 2:
            //         m_left.style.left = "-2400px";
            //         break;
            //     case 3:
            //         m_left.style.left = "-3600px";
            //         break;
            //     default:
            //         m_left.style.left = "0px";
            //         break;
            // } /////// switch case //////


            // 인디케이터 초기화
            for(let x of e_indi) x.style.backgroundColor = "whitesmoke";
            
            // 선택한 인디케이터 검정색으로 변경
            this.style.backgroundColor="black";
            // 선택한 인디케이터 크기 크게 변경
            this.style.transform="scale(1.2)";
            // 블록 변경되는 트랜지션 설정
            block[i].style.transition ="left .5s ease-in-out";
        }; //////// click ////////////
    
    } //////////// for ///////////////

} ////////////// linkFn 함수 //////////////////
///////////////////////////////////////////////