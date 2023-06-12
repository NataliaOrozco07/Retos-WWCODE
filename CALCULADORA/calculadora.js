const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
    button.addEventListener( "click", () => {
        const  selectButton = button.textContent;

        if (selectButton === "C"){
            display.textContent = "0";
        } else if (selectButton === "←") {
            display.textContent = display.textContent.slice(0, -1);
        } else if (selectButton === "="){
            try {
                const result = eval(display.textContent);
                display.textContent = result;
            } catch (error){
                display.textContent = "Error";
            }
        } else {
            if (display.textContent === "0"){
                display.textContent = selectButton;
            } else {
                display.textContent += selectButton;
            }
        }        
    });
});