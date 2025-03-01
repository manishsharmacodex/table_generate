const userNumber = document.getElementById("input");
const userBtn = document.getElementById("btn");
const errorMessage = document.getElementById("errorMessage");
const successMessage = document.getElementById("successMessage");
const resultContainer = document.getElementById("resultContainer");

userBtn.addEventListener("click", function(){
    const number = parseInt(userNumber.value);
    if (isNaN(number)) {
        setTimeout(() => {
            errorMessage.innerHTML = "please enter number for generate table";
            successMessage.innerHTML = "";
            resultContainer.innerHTML = "";
        }, 200);
    } else {
        errorMessage.innerHTML = "";
        successMessage.innerHTML = "table is generating processing please wait....";

        let tableSize = 10;
        let result = "";
        for (let i = 1; i <= tableSize; i++) {
            let newValue = number * i;
            console.log(`${number} * ${i} = ${newValue}`);
            result += `${number} * ${i} = ${newValue} <br>`;
        }
        setTimeout(() => {
            resultContainer.innerHTML = result;
            successMessage.innerHTML = "table has been generated successfully";
        }, 2000);
    }
})