document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slider').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slider').prepend(lists[lists.length - 1]);
 }
 document.getElementById('next-II').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slider-II').appendChild(lists[0]);
}
document.getElementById('prev-II').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slider-II').prepend(lists[lists.length - 1]);
 }


 