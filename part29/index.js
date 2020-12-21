for(x=0;x<3;x++){
    document.querySelectorAll(".myButton")[x].addEventListener("click",function () {
        var text=this.innerHTML;
        console.log(text);

        switch (text) {
            case "A":
                var audio=new Audio("sound")
                break;
        
            default:
                break;
        }

        
    })
        
        
    

}
