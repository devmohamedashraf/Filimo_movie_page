$('.add-emoji a').click(function() {
    var value = $(this).text();
    var input = $('#write-comment');
    input.val(input.val() + value);
    return false;
});
function topFunction() {
 
     $('html, body').animate({scrollTop:0}, 'slow');
}
var n=$(".s-acc .your-acc").html();$(".mobile-nav .logo-acc").append(n);
var n=$(".menu-nav").html();$(".mobile-nav").append(n);
function addClassOpenNav() {
    var addOpenNav = document.getElementById("mobile-nav");
    addOpenNav.classList.add("show");
    var addOverlay = document.getElementById("overlay-mn");
    addOverlay.classList.add("show");
  }
  function removeClassOpenNav() {
    var removeOpenNav = document.getElementById("mobile-nav");
    removeOpenNav.classList.remove("show");
    var removeOverlay = document.getElementById("overlay-mn");
    removeOverlay.classList.remove("show");
  }
  AOS.init({
    easing: 'ease-out-back',
    duration: 1500
 });