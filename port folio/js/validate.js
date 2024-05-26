
// dark mode x

var ball = document.querySelector('.ball');
 
 function toggle() {
     var  element = document.body;
     element.classList.toggle("night")
     ball.classList.toggle('move')
     ballPlate.style.backgroundColor = 'white'
    
 }


//  nav-links
 function openbtn(){
    document.getElementById("menuItems").style.display = "block";
    document.getElementById("menu-icon").style.display = "none";
    document.getElementById("close-btn").style.display = "block";

}




function closebtn(){
document.getElementById("menuItems").style.display = "none";
document.getElementById("menu-icon").style.display = "block";
document.getElementById("close-btn").style.display = "none";

}

