// 검색 버튼 동작 JS //


let slayer = $('#search');
$(()=>{ ////// JQB ////////

// 버튼 클릭
$('.sb').click(function(){
    console.log(this);
    // 검색창 레이어 클래스 on 토글
    $('#search').toggleClass("on");
    // 검색버튼 클래스 on 토글
    $('.sb').toggleClass("on");
    return false;
});



}); ////// JQB ////////
