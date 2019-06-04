function func1(){

    document.getElementById("featured").firstElementChild.src="images/medium/5855774224.jpg";

}
function func2(){

    document.getElementById("featured").firstElementChild.src="images/medium/5856697109.jpg";
    document.getElementById("featured").onmouseover=function(){
        document.getElementsByTagName("figcaption").innerText='Luneburg';

    }
}
function func3(){
    document.getElementById("featured").firstElementChild.src="images/medium/6119130918.jpg";
    document.getElementById("featured").onmouseover=function(){
        document.getElementsByTagName("figcaption").innerText='Bermuda';

    }
}
function func4(){
    document.getElementById("featured").firstElementChild.src="images/medium/8711645510.jpg";
    document.getElementById("featured").onmouseover=function(){
        document.getElementsByTagName("figcaption").innerText='Athens';

    }
}
function func5(){
    document.getElementById("featured").firstElementChild.src="images/medium/9504449928.jpg";
    document.getElementById("featured").onmouseover=function(){
        document.getElementsByTagName("figcaption").innerText='Florence';
        document.getElementsByTagName("figcaption").style.display="";
    }
}
