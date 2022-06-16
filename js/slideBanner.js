window.addEventListener("load", () => {

    console.log("로딩완료!");

/******************************************************* 
    [ 배너 이동 기능정의 ]
    1. 이벤트 종류 : click
    2. 이벤트 대상 : 이동버튼(.btns a), 인디케이터버튼(.indi a)
    3. 변경대상 : 슬라이드배너 박스(.slide_banner li)
    4. 기능설계 :
        (1) 오른쪽 버튼 클릭시 
            배경이미지와 배경색을 다음 순번의 배경이미지와 배경색으로 바뀌게 한다.
            (마지막 배경이미지 다음은 처음 배경이미지로 변경된다.)
            
        (2) 왼쪽 버튼 클릭시 
            배경이미지와 배경색을 이전 순번의 배경이미지와 배경색으로 바뀌게 한다.
            (처음 배경이미지 이전은 마지막 배경이미지로 변경된다.)
        
        (3) 하단 인디케이터 클릭시
            해당 순번의 배경이미지와 배경색으로 변경된다.

        (4) 0.4초 간격으로 다음 배너 이미지로 변경된다.

        (5) 공통기능 : 슬라이드 위치표시 인디케이터
        - 블릿 대상 : .indi a
        - 변경 내용 : 인디케이터는 바뀐 배경이미지의 순번 인디케이터에 검은색 표기된다.
    
    5. 기능구현 설계 :
        (1) 이미지 번호를 전역변수로 설정한다.
        (2) 버튼클릭시 전역변수 이미지번호를 증감하여
            실제로 변경될 배경이미지속성값을 변경한다.
        (3) 오른쪽버튼은 ++(1씩증가)
            왼쪽버튼은 --(1씩감소)
        (4) 제한조건 :
            마지막 다음번호는 1
            처음 이전번호는 8
            (1~8까지 8개의 이미지가 있다)
            if문으로 조건으로 좌/우버튼 체크한다!
*******************************************************/

    // 함수바깥쪽에 전역변수 선언 및 할당!
    // 1. 이미지 번호 변수
    let inum = 1;

    // const bimg =[];
    // 배경색 배열
    const bcolor=[
        "#00A2EA",
        "#1AA1D5",
        "#FED5BB",
        "#F6F8F8",
        "#ffe103",
        "#fb637e",
        "#dbeffb",
        "#5eb640"
    ];

    // 변경대상1: 메인이미지,배경색 - .slide_banner li
    let mimg = document.querySelector(".slide_banner li");
    // 변경대상2 : 이미지 설명 - .slide_banner li a span
    let des = document.querySelector(".slide_banner li a span");
    // 변경대상3 : 하단 인디케이터 - .indi a
    let indi = document.querySelectorAll(".indi a");
    
    // 초기 값 설정
    // 배경이미지 초기값 설정
    mimg.style.backgroundImage = "url(../images/slide_banner1.png)";
    // 배경색 초기값 설정
    mimg.style.backgroundColor = bcolor[0];
    // 인디케이터 첫번째 색 설정
    indi[0].style.backgroundColor = "black";

    /////// 좌/우버튼 동작 설정 ////////////////////

    // 이벤트 대상: 좌/우 이동버튼
    let btn = document.querySelectorAll(".btns a");
    
    // 왼쪽버튼 - 첫번째버튼
    btn[0].onclick = () => goSlide(0);
    // 오른쪽버튼 - 두번째버튼
    btn[1].onclick = () => goSlide(1);

    // 광클금지용 변수
    let prot = 0; // 0 - 허용, 1- 금지
    /**************************************** 
        함수명: goSlide
        기능: 갤러리 이미지,배경색,인디케이터 변경하기
    ****************************************/
    const goSlide = dir => {

        // console.log("광클막기",prot);
        ////////// 광클금지 ///////////////////////
        if(prot) return; // 돌아가!
        prot = 1; // 잠금!
        setTimeout(()=>prot=0,400);
        // 타임아웃으로 슬라이드이동 후
        // 잠금설정을 prot = 0으로 해제
        //////////////////////////////////////////

        // 인터발 지우기 함수 호출!
        clearAuto();

        // dir - 버튼구분(1-오른쪽,0-왼쪽)
        // 1. 호출확인
        // console.log("넌 누구냐?", dir);

        // 2. 버튼에 따른 분기
        // 2-1. 오른쪽버튼 : 이미지 전역변수 1씩증가
        if (dir) { // dir만 쓰면 1인경우 true
            inum++;
            if (inum === 9) inum = 1; //한계수체크
        } ///////// if //////////////
        // 2-2. 왼쪽버튼 : 이미지 전역변수 1씩감소
        else {
            inum--;
            if (inum === 0) inum = 8; //한계수체크
        } ///////// else //////////////

        // 3. 변경대상 : .slide_banner li -> mimg변수
        // 4. 변경내용 : 배경이미지의 url 변경, 배경색 변경
        mimg.style.backgroundImage = `url(./images/slide_banner${inum}.png)`;
        mimg.style.backgroundColor = bcolor[inum-1];
        des.innerText = `${inum}번째 배너`;
        mimg.style.transition = ".4s ease-in-out";
        // 5. 추가변경내용 : 인디케이터 변경
        // 인디케이터 초기화
        for(let x of indi) x.style.backgroundColor = "whitesmoke";

        // 선택한 인디 블랙으로 변경
        // 인디 번호보다 배열번호는 1작다!
        indi[inum-1].style.backgroundColor = "black";
        
    }; ///////////// goSlide 함수 /////////////
    ///////////////////////////////////////////
    
    for(let i =0;i<indi.length;i++){
        
        indi[i].onclick = function(){
            // 인디케이터 초기화
        for(let x of indi) x.style.backgroundColor = "whitesmoke";
        this.style.backgroundColor = "black";
        mimg.style.backgroundImage = `url(./images/slide_banner${i+1}.png)`;
        mimg.style.backgroundColor = bcolor[i];
        }
    }

    /******************************************* 
        [ JS 타이밍 함수 : Timing Function ]

        1. setInterval(함수,시간)
        - 일정시간 간격으로 함수를 호출!
        - 시간은 1/1000초, 단위안씀(예:1000->1초)
        -> 인터발함수를 지울때는 변수에 담고
        아래 함수를 호출한다!
        ->>> clearInterval(변수)

     ********************************************/

    // 인터발함수 셋팅하기!! ///
    // 이벤트 대상: .slide_banner li
    // goSlide();
    // 자동 슬라이드 
    // setInterval(() => {goSlide(1);}, 4000);
    // setInterval(goSlide(1), 3500);
  
 // 인터발용변수
let autoI;

let autoT;


// 인터발 셋팅 함수 ///////////////
const autoCall= () =>
autoI = setInterval(() => {goSlide(1);}, 4000);

// 인터발 셋팅 함수 최초호출!
autoCall();

// 인터발 지우기 함수////////////////
const clearAuto = () => {
  console.log("인터발지움!");
  // 인터발지우기
  clearInterval(autoI);

  // 타임아웃지우기(실행쓰나미방지!)
  clearTimeout(autoT);

  // 일정시간후 인터발 셋팅(2초후)
  autoT = setTimeout(autoCall,2000);
  // 매번 타임아웃을 변수에 담고 먼저 지우기 때문에
  // 최종적으로 남는 타임아웃은 하나뿐이다!
  // 따라서 타임아웃 실행 쓰나미가 발생하지 않는다

}; ///////// clearAuto 함수 ///////////

}); /////////// 로드구역 ///////////////////