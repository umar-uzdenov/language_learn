const swiper = new Swiper(".slider", {
    // freeMode: true,
    speed: 700,
    direction: "vertical",
    mousewheel: true,
    spaceBetween: 18,
    // parallax: true,
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    //   el: '.counter',
    },
  
})

;(() => {
    range(0, 14).forEach(index => addItem("fruit", index))
})();

setInterval(() => {
    query(".counter").innerHTML = (swiper.realIndex +  1) + ' / ' + 15 // hack
}, 10);

query(".prev-btn").addEventListener("click", event => {
    console.log("hack")
    query(".swiper").style = "display:none;"
    query(".buttons").style = "display:none;"
    query(".themes").style = ""
})

query(".fruits").addEventListener("click", event => {
    console.log("hack")
    query(".swiper").style = ""
    query(".buttons").style = ""
    query(".themes").style = "display:none;"
})

function addItem(type, index) {
    const item = document.createElement("div")
    item.classList.add("swiper-slide", "slider__item")
    item.style = `background-image:url(img/${type}s/${type}_${index.toString().padStart(2, 0)}.jpg)`
    swiper.appendSlide(item)
}

function removeSlideOld() {
    $('.remove-slide').on('click', function() {
        // first way to remove slides
        swiper.removeSlide($('.swiper-slide').length - 1);
    });
}