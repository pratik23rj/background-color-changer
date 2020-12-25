
function colorFunction(){
    //accept input
    var colorCode =document.getElementById("color").value;
    
    //Checking the valid Color
    if(colorCode.length ==7){
        console.log("valid color")
    }
    else{
        alert("Invalid Color Code ");
    }

    //set the color
    var color=colorCode;
    document.body.style.background = color;
    console.log(colorCode);
    
}