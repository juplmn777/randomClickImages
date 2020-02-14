addEventListener("click", function(event){
    const image = document.createElement("img");
    const imageWidth = 100;
    const imageHeight = 100;

    image.setAttribute("src", `http://lorempixel.com/${imageWidth}/${imageHeight}/`);

    image.style.position = "absolute";
    
})