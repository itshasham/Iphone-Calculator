let string = "0";
let string2 = "";
let divide = "";
let buttons = document.querySelectorAll('.button');
const inputElement = document.querySelector('input'); // Replace 'input' with the specific identifier of your input element
inputElement.value = "0";

Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    button.classList.add('off-white-background');
    setTimeout(() => {
      button.classList.remove('off-white-background');
    }, 300);
    if (e.target.innerHTML === '=') {
      string2 = eval(string2);
      inputElement.value = string2;
    } else if (e.target.innerHTML === 'AC') {
      string = "0";
      string2 = "";
      inputElement.value = string;
    }
    else if (e.target.innerHTML === '÷') {
      console.log(e.target);
      string2 = string2 + '/';
      inputElement.value = string2;
    }
    else if (e.target.innerHTML === '×') {
      console.log(e.target);
      string2 = string2 + '*';
      inputElement.value = string2;

    }
    else if (e.target.innerHTML === '%') {
      string2 = (parseFloat(string2) / 100).toString(); // Convert to number and divide by 100
      inputElement.value = string2;


    }


    else {
      console.log(e.target);
      string2 = string2 + e.target.innerHTML;
      inputElement.value = string2;
    }
  });
});
