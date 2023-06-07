const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
    button.addEventListener( "click", () => {
        const  selectButton = button.textContent;

        if ( display.textContent === "0"){
            display.textContent = selectButton;
        } else {
            display.textContent += selectButton;
        }
    });
});