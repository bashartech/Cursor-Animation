const curso = document.querySelector(".cursor");
var timeout;

// cursor movement
document.addEventListener("mousemove", (e) => {

    let x = e.pageX;
    let y = e.pageY;
    curso.style.top = y + 'px';
    curso.style.left = x + 'px';
    curso.style.display = 'block';

    //stop animation

    function mouseStopped() {
        curso.style.display = 'none'
    }
    //hide animation
    clearTimeout(timeout);
    timeout = setTimeout(mouseStopped, 1000);

})

document.addEventListener("mouseout", () => {
    curso.style.display = 'none';
});