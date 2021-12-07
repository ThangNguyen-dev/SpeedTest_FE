window.onload = function () {
    let img = document.getElementById("image");
    let elms = [...document.getElementsByClassName("elms")][0]
    elms.style.width = img.clientWidth + "px"
    elms.style.height = img.clientHeight + "px"
    for (let i = 0; i < 15; i++) {
        let child = document.createElement("div")
        child.className = "child"
        child.style.width = img.clientWidth/5 +  "px"
        child.style.height = img.clientHeight/3 + 0.1 +  "px"
        child.style.backgroundColor = "unset"
        elms.appendChild(child)
    }

    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            let elements = [...document.getElementsByClassName("child")].filter((e) => {
                return e.style.backgroundColor === "unset"
            });

            let index = Math.floor(Math.random() * elements.length);
            elements[index].style.backgroundColor = "white"

        }, (i+1)* 100)
    }
}