const sphere = document.querySelector(".sphere");

sphere.addEventListener("mousemove", (event) => {
    
    let xVal = Math.floor((event.clientX-sphere.offsetLeft) / (sphere.getBoundingClientRect().width) * 100);
    let yVal = Math.floor((event.clientY-sphere.offsetTop) / (sphere.getBoundingClientRect().height) * 100);

    //console.log(`x ${Math.floor(xVal)}`)
    //console.log(`y ${Math.floor(yVal)}`)

    sphere.style.background = `radial-gradient(circle at ${xVal}% ${yVal}%, white 1px, aqua 3%, darkblue 60%, aqua 100%)`
})