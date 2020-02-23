var i = 0;
var pic = [];
var time = 5000;
pic[0] = 'imgs/1.jpg';
pic[1] = 'imgs/2.jpg';
pic[2] = 'imgs/3.jpg';

function switchSlide(){
    document.getElementById("slide").src = pic[i];

    if(i < pic.length - 1){
        i++;
    } else {
        i = 0;
    }

    setTimeout("switchSlide()", time);

}

window.onload = switchSlide;