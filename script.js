function focusin() {
    let x=document.querySelector('.inner-txt')
    let y =document.querySelector('.input-email')
    x.style.top = "15px";
    x.style.transition = "all .5s";
    x.style.fontSize = "10px";
y.style.border='double 3px white'
  }
function focusout() {
    let x=document.querySelector('.inner-txt')
    let y =document.querySelector('.input-email')
    x.style.top = "33%";
    x.style.transition = "all .5s";
    x.style.fontSize = "16px";
    y.style.border='1px solid grey'
  }
  document.querySelector('.txt').addEventListener('focus',focusin)
  document.querySelector('.txt').addEventListener('focusout',focusout)
  /**  for faq **/


$('.q0').click(()=>{
  $('.a0').toggleClass('show');
  $('.cross0').toggleClass('rotate');
  hide(1,2,3,4,5)
})
$('.q1').click(()=>{
  $('.a1').toggleClass('show');
  $('.cross1').toggleClass('rotate');
  hide(0,2,3,4,5)
})
$('.q2').click(()=>{
  $('.a2').toggleClass('show');
  $('.cross2').toggleClass('rotate');
  hide(1,0,3,4,5)
})
$('.q3').click(()=>{
  $('.a3').toggleClass('show');
  $('.cross3').toggleClass('rotate');
  hide(1,2,0,4,5)
})
$('.q4').click(()=>{
  $('.a4').toggleClass('show');
  $('.cross4').toggleClass('rotate');
  hide(1,2,3,0,5)
})
$('.q5').click(()=>{
  $('.a5').toggleClass('show');
  $('.cross5').toggleClass('rotate');
  hide(1,2,3,4,0)
})
function hide(n1,n2,n3,n4,n5){
  $('.a'+n1).removeClass('show');
  $('.cross'+n1).removeClass('rotate');
  $('.a'+n2).removeClass('show');
  $('.cross'+n2).removeClass('rotate');
  $('.a'+n3).removeClass('show');
  $('.cross'+n3).removeClass('rotate');
  $('.a'+n4).removeClass('show');
  $('.cross'+n4).removeClass('rotate');
  $('.a'+n5).removeClass('show');
  $('.cross'+n5).removeClass('rotate');
  
}
