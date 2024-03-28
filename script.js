btn=document.getElementsByClassName('btn')
btn2=document.getElementsByClassName('btn2')
btn3=document.getElementsByClassName('btn3')

window.addEventListener('keydown',function (x){
    if (x.keyCode===70){
        btn[0].style.backgroundColor="grey"
        new Audio('mp4/C1.mp3').play()
    }
    if (x.keyCode===71){
        btn[1].style.backgroundColor="grey"
        new Audio('mp4/D1.mp3').play()
    }
    if (x.keyCode===72){
        btn[2].style.backgroundColor="lightgrey"
        new Audio('mp4/E1.mp3').play()
    }
    if (x.keyCode===74){
        btn[3].style.backgroundColor="lightgrey"
        new Audio('mp4/F1.mp3').play()
    }
    if (x.keyCode===75){
        btn[4].style.backgroundColor="lightgrey"
        new Audio('mp4/G1.mp3').play()
    }
    if (x.keyCode===76){
        btn[5].style.backgroundColor="lightgrey"
        new Audio('mp4/A1.mp3').play()
    }
    if (x.keyCode===186){
        btn[6].style.backgroundColor="lightgrey"
        new Audio('mp4/B1.mp3').play()
    }
    if (x.keyCode===222){
        btn[7].style.backgroundColor="lightgrey"
        new Audio('mp4/C2.mp3').play()
    }
    if (x.keyCode===84){
        btn2[0].style.backgroundColor="grey"
        new Audio('mp4/C1s.mp3').play()
    }
    if (x.keyCode===89){
        btn2[1].style.backgroundColor="grey"
        new Audio('mp4/D1s.mp3').play()
    }
    if (x.keyCode===73){
        btn3[0].style.backgroundColor="grey"
        new Audio('mp4/F1s.mp3').play()
    }
    if (x.keyCode===79){
        btn3[1].style.backgroundColor="grey"
        new Audio('mp4/G1s.mp3').play()
    }
    if (x.keyCode===80){
        btn3[2].style.backgroundColor="grey"
        new Audio('mp4/A1s.mp3').play()
    }
})

window.addEventListener('keyup',function (x){
    if (x.keyCode===70){
        btn[0].style.backgroundColor="white"
    }
    if (x.keyCode===71){
        btn[1].style.backgroundColor="white"
    }
    if (x.keyCode===72){
        btn[2].style.backgroundColor="white"
    }
    if (x.keyCode===74){
        btn[3].style.backgroundColor="white"
    }
    if (x.keyCode===75){
        btn[4].style.backgroundColor="white"
    }
    if (x.keyCode===76){
        btn[5].style.backgroundColor="white"
    }
    if (x.keyCode===186){
        btn[6].style.backgroundColor="white"
    }
    if (x.keyCode===222){
        btn[7].style.backgroundColor="white"
    }
    if (x.keyCode===84){
        btn2[0].style.backgroundColor="black"
    }
    if (x.keyCode===89){
        btn2[1].style.backgroundColor="black"
    }
    if (x.keyCode===73){
        btn3[0].style.backgroundColor="black"
    }
    if (x.keyCode===79){
        btn3[1].style.backgroundColor="black"
    }
    if (x.keyCode===80){
        btn3[2].style.backgroundColor="black"
    }
})

document.getElementById('btn1').addEventListener('click', function() {
    // Perform the action when the button is clicked
    new Audio('mp4/C1.mp3').play()
});
document.getElementById('btn2').addEventListener('click', function() {
    // Perform the action when the button is clicked
    new Audio('mp4/D1.mp3').play()
});
document.getElementById('btn3').addEventListener('click', function() {
    // Perform the action when the button is clicked
    new Audio('mp4/E1.mp3').play()
});
document.getElementById('btn4').addEventListener('click', function() {
    // Perform the action when the button is clicked
    new Audio('mp4/F1.mp3').play()
});
document.getElementById('btn5').addEventListener('click', function() {
    // Perform the action when the button is clicked
    new Audio('mp4/G1.mp3').play()
});
document.getElementById('btn6').addEventListener('click', function() {
    // Perform the action when the button is clicked
    new Audio('mp4/A1.mp3').play()
});
document.getElementById('btn7').addEventListener('click', function() {
    // Perform the action when the button is clicked
    new Audio('mp4/B1.mp3').play()
});
document.getElementById('btn8').addEventListener('click', function() {
    // Perform the action when the button is clicked
    new Audio('mp4/C2.mp3').play()
});
document.getElementById('btn9').addEventListener('click', function() {
    // Perform the action when the button is clicked
    new Audio('mp4/C1s.mp3').play()
});
document.getElementById('btn10').addEventListener('click', function() {
    // Perform the action when the button is clicked
    new Audio('mp4/D1s.mp3').play()
});
document.getElementById('btn11').addEventListener('click', function() {
    // Perform the action when the button is clicked
    new Audio('mp4/F1s.mp3').play()
});
document.getElementById('btn12').addEventListener('click', function() {
    // Perform the action when the button is clicked
    new Audio('mp4/G1s.mp3').play()
});
document.getElementById('btn13').addEventListener('click', function() {
    // Perform the action when the button is clicked
    new Audio('mp4/A1s.mp3').play()
});



