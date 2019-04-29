var browser_name = '';
isIE = /*@cc_on!@*/false || !!document.documentMode;
isEdge = !isIE && !!window.StyleMedia;
if(navigator.userAgent.indexOf("Chrome") != -1 && !isEdge)
{
    browser_name = 'chrome';
}
else if(navigator.userAgent.indexOf("Safari") != -1 && !isEdge)
{
    browser_name = 'safari';
}
else if(navigator.userAgent.indexOf("Firefox") != -1 ) 
{
    browser_name = 'firefox';
}
else if(isEdge)
{
    browser_name = 'edge';
}
else 
{
   browser_name = 'other-browser';
}

$('body').addClass(browser_name);

if (browser_name == "other-browser") {
    $(".message-text").text("Browser Not Supported.");
}

var swiper = new Swiper('.trackr-category-slider .swiper-container', {
    slidesPerView: 5,
    spaceBetween: 30,
    observer: true,
    observeParents: true,
    simulateTouch: false,
    breakpoints: {
        768: {
            slidesPerView: 5,
            simulateTouch: false,
        },
        480: {
            slidesPerView: 2.5,
            simulateTouch: true,
        },
    }
});

var swiper = new Swiper('.articles-slider .swiper-container', {
    slidesPerView: 2,
    spaceBetween: 30,
    observer: true,
    observeParents: true,
    simulateTouch: false,
    breakpoints: {
        768: {
            slidesPerView: 2,
            simulateTouch: false,
        },
        480: {
            slidesPerView: 1.5,
            simulateTouch: true,
            centeredSlides: true,
        },
    }
});

var modal = document.getElementById('downloadmodal');

var btn = document.getElementById("continuebtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}