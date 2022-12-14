var base = "RUB";
let symbols = "USD";
let enteringInput = document.querySelector(".first_input");
let resultInput = document.querySelector(".second_input");
let button1 = document.querySelector(".buttons_first");
let button2 = document.querySelector(".buttons_second");

function myFunc(e) {
   fetch(
    `https://api.exchangerate.host/latest?base=${base}&symbols=${symbols}`
  )
    .then((res) => res.json())
    .then((data) => {
      var val = +Object.values(data.rates);
      console.log(val, "vali");
      let inputVal = +e.target.value;
      let result = val * inputVal;
      resultInput.value = result.toFixed(2);
    });
}

function myFunc2(e) {
  fetch(`https://api.exchangerate.host/latest?base=${base}&symbols=${symbols}`)
    .then((res) => res.json())
    .then((data) => {
      var val = +Object.values(data.rates);
      console.log(val, "val");
      let inputVal = +e.target.value;
      let result = inputVal / val;
      enteringInput.value = result.toFixed(2);
    });
}

function myFunc3() {
  fetch(`https://api.exchangerate.host/latest?base=${base}&symbols=${symbols}`)
    .then((res) => res.json())
    .then((data) => {
      var val = +Object.values(data.rates);
      console.log(val, "val");
      let result = val * enteringInput.value;
      resultInput.value = result.toFixed(2);
    });
}

enteringInput.addEventListener("keyup", (e) => {
  myFunc(e);
});

resultInput.addEventListener("keyup", (e) => {
  myFunc2(e);
});

Object.values(button1.children).forEach((element) => {
  element.addEventListener("click", (e) => {
    Object.values(button1.children).forEach((element) => {
      element.classList.remove("active");
    });
    element.classList.toggle("active");

    base = element.innerHTML;
    console.log(base);
    myFunc3();
  });
});

Object.values(button2.children).forEach((element) => {
  element.addEventListener("click", (e) => {
    Object.values(button2.children).forEach((element) => {
      element.classList.remove("active");
    });
    element.classList.toggle("active");
    symbols = element.innerHTML;
    console.log(symbols);
    myFunc3();
  });
});
