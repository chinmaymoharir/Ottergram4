var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
var DETAIL_FRAME_SELECTOR = '[data-image-role="frame"]';
var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';
var HIDDEN_DETAIL_CLASS = 'hidden-detail';
var TINY_EFFECT_CLASS = 'is-tiny';
var ESC_KEY = 27;
//var TITLE_ARRAY = ['Stayin\' Alive', 'How Deep Is Your Love', 'You Should Be Dancing', 'Night Fever', 'To Love Somebody'];
var KEY1 = 49;

function setDetails(imageUrl, titleText) {
    'use strict';
    //code will go here
    var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
    detailImage.setAttribute('src', imageUrl);
    var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
    detailTitle.textContent = titleText;
}

function imageFromThumb(thumbnail) {
    'use strict';
    return thumbnail.getAttribute('data-image-url');
}

function titleFromThumb(thumbnail) {
    'use strict';
    return thumbnail.getAttribute('data-image-title');
}

function setDetailsFromThumb(thumbnail) {
    'use strict';
    setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
}
//
// function GetDetailKey(img, tit) {
//     'use strict';
//     for (var i = 0; i < document.getElementsByClassName('thumbnail-image').length; i++) {
//         if (document.getElementsByClassName('thumbnail-image')[i].alt === img + '') {
//             SetDetailKey(img, tit);
//         }
//     }
// }
//
// function SetDetailKey(x, y) {
//     'use strict';
//
//     document.querySelector(DETAIL_IMAGE_SELECTOR).src = 'http://localhost:3000/img/otter' + x + '.jpg';
//     document.querySelector(DETAIL_TITLE_SELECTOR).innerHTML = TITLE_ARRAY[y - 1];
//
// }


// function SetDetailImageByKeypad() {
//     'use strict';
//     document.body.addEventListener('keyup', function(event) {
//         event.preventDefault();
//         var x = event.keyCode;
//         console.log(event.keyCode);
//         switch (x) {
//         case x = 49:
//             GetDetailKey(1, 1);
//             break;
//         case x = 50:
//             GetDetailKey(2, 2);
//             break;
//         case x = 51:
//             GetDetailKey(3, 3);
//             break;
//         case x = 52:
//             GetDetailKey(4, 4);
//             break;
//         case x = 53:
//             GetDetailKey(5, 5);
//             break;
//         case x = 54:
//             GetDetailKey(6, 6);
//             break;
//         case x = 55:
//             GetDetailKey(7, 7);
//             break;
//         }
//     });
// }

function addThumbKeyHandler(thumb, i) {
    'use strict';
    var index = i;
    document.body.addEventListener('keyup', function(event) {
        event.preventDefault();
        console.log(event.keyCode);
        if (event.keyCode == (KEY1 + index)) {

            setDetailsFromThumb(thumb);
            showDetails();
        }
    });
}

function getThumbnailsArray() {
    'use strict';
    var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
    var thumbnailArray = [].slice.call(thumbnails);
    return thumbnailArray;
}

function hideDetails() {
    'use strict';
    document.body.classList.add(HIDDEN_DETAIL_CLASS);
}

function showDetails() {
    'use strict';
    var frame = document.querySelector(DETAIL_FRAME_SELECTOR);
    document.body.classList.remove(HIDDEN_DETAIL_CLASS);
    frame.classList.add(TINY_EFFECT_CLASS);
    setTimeout(function() {
        frame.classList.remove(TINY_EFFECT_CLASS);
    }, 50);

}

function addKeyPressHandler() {
    'use strict';
    document.body.addEventListener('keyup', function(event) {
        event.preventDefault();
        console.log(event.keyCode);
        if (event.keyCode === ESC_KEY) {
            hideDetails();
        }
    });
}

function initializeEvents() {
    'use strict';
    var thumbnails = getThumbnailsArray();
    thumbnails.forEach(addThumbKeyHandler);
    addKeyPressHandler();
//    SetDetailImageByKeypad();
}
initializeEvents();
