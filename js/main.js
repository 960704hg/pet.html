// document.querySelector('h1').style.display = 'none';
$(function () {
    $('button').on('click', function () {
        $('h1').toggleClass('on')
    });
    $('.mainSlide').slick();

    // $('.tabMenu .tit>li').on('click', function () {
    //     var num = $(this).index();
    //     console.log(num);
    //     $('.tabMenu .tit>li').removeClass('on')
    //     $(this).addClass('on');

    //     $('.tabMenu .con>li').removeClass('on');
    //     $('.tabMenu .con>li').eq(num).addClass('on');
    // })

})

// window.addEventListener('DOMContentLoaded', function () {
//     document.querySelector('button').addEventListener('click', function () {
//         document.querySelector('h1').classList.toggle('on')
//     })
// });

