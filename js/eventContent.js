window.addEventListener("load", eventFn);


// 이벤트 컨텐츠 동작 
function eventFn() {
    // console.log("여기얍!");

    // 이벤트 대상: .e_indi
    const e_indi = document.querySelectorAll(".e_indi a");
    console.log(e_indi);

    // 변경대상: .moving
    const moving = document.querySelectorAll(".event_list ul");

    // forEach문으로 클릭된 버튼 순번을 알아냄!
    e_indi.forEach((el, idx) => { // el 요소자신, idx 순번
        el.onclick = () => {
            // 버튼순번
            console.log(idx);
            // 요소자신
            console.log("요소자신",el);
            
            // 인디케이터 초기화
            e_indi.forEach(el=> el.classList.remove("on"));

            // 인디케이터 색칠
            el.classList.add("on");

            // 주인공은 보이기
            moving[idx].classList.add("on");

            // 주인공은 등장하기
            moving[idx].style.left = "0";

            // 분기하기
            switch (idx) {
                case 0:
                    for (let x = 1; x <= 3; x++)
                        moving[x].style.left = "100%";
                    break;
                case 1:
                    moving[0].style.left = "-100%";
                    for (let x = 2; x <= 3; x++)
                        moving[x].style.left = "100%";
                    break;
                case 2:
                    moving[3].style.left = "100%";
                    for (let x = 0; x <= 1; x++)
                        moving[x].style.left = "-100%";
                    break;
                case 3:
                    for (let x = 0; x <= 2; x++)
                        moving[x].style.left = "-100%";
                    break;
            }

            // 이동 후 주인공을 뺀 나머지는 class="on" 초기화
            setTimeout(() => {
                console.log("0.5초후:", idx);
                moving.forEach((ele2, idx2) => {
                    // 현재주인공이 idx임

                    console.log("최종돌아:", idx2);
                    if (idx2 !== idx)
                    ele2.classList.remove("on");
                }); ///////// forEach /////////

            }, 500); /////// 트랜지션 0.5초 후 //////


        }; /////// click /////
    }); //// forEach ///////

} ////////////// linkFn 함수 //////////////////
///////////////////////////////////////////////