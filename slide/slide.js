


const img_slide_show = document.querySelectorAll('.img_slide');
const dot_slide_show = document.querySelectorAll('.dot');
show_slide(0)
var n = 1
function show_slide(n){
    for(var i = 0; i < img_slide_show.length; i ++){
        img_slide_show[i].style.display = "none";
        dot_slide_show[i].classList.remove("dot_slide")
    }
    img_slide_show[n].style.display = "block";
    dot_slide_show[n].classList.add("dot_slide")
}

img_slide_show[1].addEventListener('click', dot_slide)
function dot_slide(){
    alert("sá")
}

document.querySelector(".next_img").addEventListener('click', btn_next_slide)

function btn_next_slide(){    
    show_slide(n)
    n++;
    if(n == img_slide_show.length){
        n = 0;
    }
}

function dot_btn_0(){    
    show_slide(0)
}
function dot_btn_1(){
    show_slide(1)
}
function dot_btn_2(){
    show_slide(2)
}



