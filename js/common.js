// $(function () {
//     $('.btn-trigger,.nav__item a').on('click', function () {
//         $('.btn-trigger').toggleClass('active');
//         $('.navigation').fadeToggle(500);
//         // $("body").css("padding-top", "49px");
//     });
// });

// ↑一番簡単で惜しい感じのパターン

// $(function () {
//     // 画面の幅が640px以下の場合にのみ実行する
//     if ($(window).width() <= 640) {
//         $('.btn-trigger,.nav__item a').on('click', function () {
//             $('.btn-trigger').toggleClass('active');
//             $('.navigation').fadeToggle(500);
//             // $("body").css("padding-top", "49px");
//         });
//     }
// });

$(function () {
    function toggleNavigation() {
        if ($(window).width() <= 640) {

            $('.btn-trigger').on('click', function () {
                $(this).toggleClass('active');
                $('.navigation').fadeToggle(500);
            });

            $('.navigation').on('click', function (e) {
                e.stopPropagation();
            });

            $('.navigation a').on('click', function () {
                $('.btn-trigger').removeClass('active');
                $('.navigation').fadeOut(500);
            });
        } else {
            $('.btn-trigger').removeClass('active');
            $('.navigation').show();
            $('.navigation a').off('click');
        }
    }

    // 初期表示時に実行
    toggleNavigation();

    // ウィンドウのリサイズ時に実行
    $(window).on('resize', function () {
        toggleNavigation();
    });
});

// Konami code: up up down down left right left right b a
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];
let konamiIndex = 0;
document.addEventListener('keydown', event => {
    if (event.code === konamiCode[konamiIndex]) {
        konamiIndex++;
    } else {
        konamiIndex = 0;
    }
    if (konamiIndex === konamiCode.length) {
        document.querySelector('body').classList.add('konami');
    }
});


