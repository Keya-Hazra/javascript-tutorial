var photos=["image/1.JPG","image/2.JPG","image/3.JPG","image/4.JPG","image/5.JPG","image/6.JPG","image/7.JPG","image/8.JPG","image/9.JPG","image/10.JPG","image/11.JPG"];
var image=document.querySelector("img");

var count=0;

function next() {
    count++;
    if(count>=photos.length){
        count=0;
        image.src=photos[count];
    }else{
        image.src=photos[count];
    }
    
}

function prev() {
    count--;
    if(count<0){
        count=photos.length-1;
        image.src=photos[count];
    }else{
        image.src=photos[count];
    }
    
}