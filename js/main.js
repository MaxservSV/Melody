$(document).ready(function () {
    var currentFloor = 2;
    var currentFlat = 0;
    var currentFlatPic = 0;
    var floorPath = $(".home-image path")
    var flatPath = $(".flat-link")
    var flatPathPic = $(".flats path")
    var counterUp = $(".counter-up");
    var counterDown = $(".counter-down");
    var modal = $(".modal")
    var modalCloseButton = $(".modal-close-button")
    var viewFlatsButton = $(".view-flats")
    floorPath.on('mouseover', function(){
        floorPath.removeClass("current-floor");
        currentFloor = $(this).attr("data-floor");
        $(".counter").text(currentFloor);
    })
    flatPath.on('mouseover', function(){ 
        flatPathPic.removeClass("current-flat");
        currentFlatPic = $(this).attr("data-flat");
        $(`[data-flat-pic=${currentFlatPic}]`).toggleClass("current-flat");
    })
    flatPathPic.on('mouseover', function(){ 
        flatPath.removeClass("current-flat-pic");
        currentFlat = $(this).attr("data-flat-pic");
        $(`[data-flat=${currentFlat}]`).toggleClass("current-flat-pic");
    })
    flatPath.on('mouseleave', function(){ 
        flatPathPic.removeClass("current-flat");
    })
    flatPathPic.on('mouseleave', function(){ 
        flatPath.removeClass("current-flat-pic");
    })
    floorPath.on('click',toggleModal);
    modalCloseButton.on('click', toggleModal);
    viewFlatsButton.on('click', toggleModal);
    
    counterUp.on('click', function(){
        if(currentFloor<18){
        currentFloor++;
        usCurrentFloor = currentFloor.toLocaleString('en-US',{minimumIntegerDigits: 2, useGroupping: false});
        $(".counter").text(usCurrentFloor);
        floorPath.removeClass("current-floor");
        $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
        }
    })
    counterDown.on('click', function(){
        if(currentFloor>2){
            currentFloor--;
            usCurrentFloor = currentFloor.toLocaleString('en-US',{minimumIntegerDigits: 2, useGroupping: false});
            $(".counter").text(usCurrentFloor);
            floorPath.removeClass("current-floor");
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
            }
    })
    function toggleModal(){
        modal.toggleClass('is-open');
    }
});