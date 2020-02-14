addEventListener("click", function(event){
    const image = document.createElement("img");
    const imageWidth = 200;
    const imageHeight = 100;

    image.setAttribute("src", `http://lorempixel.com/${imageWidth}/${imageHeight}/`);

    image.style.position = "absolute";
    image.style.top = event.y - imageHeight / 2 + "px";
    image.style.left = event.x - imageWidth / 2 + "px";

    document.body.appendChild(image);
})