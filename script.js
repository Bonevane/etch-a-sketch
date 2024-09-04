const container = document.querySelector(".container");
const slider = document.querySelector(".slider");
const output = document.querySelector(".output");

slider.oninput = function() {
    output.textContent = 'Current Grid: ' + this.value + ' x ' + this.value; 
    makeGrid(this.value);
}

function makeGrid(num) {
    height = 500 / num;

    prev = document.querySelectorAll(".box");

    prev.forEach((box) => {
        container.removeChild(box);
    });

    for(let i = 0; i < num**2; i++){
        div = document.createElement("div");
        div.setAttribute("class", "box");
        div.setAttribute("style", "width: " + height + "px; height: " + height + "px;");
        div.style.backgroundColor = 'rgb(' + Math.floor(Math.random() * 256) + ', ' + Math.floor(Math.random() * 256) 
                                            + ', '+ Math.floor(Math.random() * 256) + ', 0)'; 
        container.appendChild(div);
    }

    container.addEventListener("mousemove", (event) => {
        rgb = event.target.style.backgroundColor.slice(0, -3);
        a = parseInt(event.target.style.backgroundColor.slice(-2, -1));
        
        if(a < 9)   
            a++;

        event.target.style.backgroundColor = rgb + '.' + a + ')';
    })
}

makeGrid(20);