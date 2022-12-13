var base = "RUB";
let symbols = "USD";
let enteringInput = document.querySelector(".first_input");
let resultInput = document.querySelector(".second_input");
let button1 = document.querySelector(".buttons_first");
let button2 = document.querySelector(".buttons_second");

fetch(`https://api.exchangerate.host/latest?base=${base}&symbols=${symbols}`)
  .then((res) => res.json())
  .then((data) => {
    var val = +Object.values(data.rates);
    console.log(val, "val");
    enteringInput.addEventListener("keyup", (e) => {
      let inputVal = +e.target.value;
      let result = val * inputVal;
      resultInput.value = result.toFixed(2);
    });
  });

  fetch(`https://api.exchangerate.host/latest?base=${symbols}&symbols=${base}`)
  .then((res) => res.json())
  .then((data) => {
    var val = +Object.values(data.rates);
    console.log(val, "val");
    resultInput.addEventListener("keyup", (e) => {
      let inputVal = +e.target.value;
      let result = val * inputVal;
      enteringInput.value = result.toFixed(2);
    });
  });

Object.values(button1.children).forEach((element) => {
  
  element.addEventListener("click", (e) => {
    Object.values(button1.children).forEach((element) => {element.classList.remove('active')})
    element.classList.toggle('active')
    
    base = element.innerHTML;
    console.log(base);
    fetch(
      `https://api.exchangerate.host/latest?base=${base}&symbols=${symbols}`
    )
      .then((res) => res.json())
      .then((data) => {
        var val = +Object.values(data.rates);
        console.log(val, "val");

        let result = val * enteringInput.value;
        resultInput.value = result.toFixed(2);
       
      });
  });
});

Object.values(button2.children).forEach((element) => {
  element.addEventListener("click", (e) => {
    Object.values(button2.children).forEach((element) => {element.classList.remove('active')})
    element.classList.toggle('active')
    symbols = element.innerHTML;
    console.log(symbols);
    fetch(
      `https://api.exchangerate.host/latest?base=${base}&symbols=${symbols}`
    )
      .then((res) => res.json())
      .then((data) => {
        var val = +Object.values(data.rates);
        console.log(val, "val");

        let result = val * enteringInput.value;
        resultInput.value = result.toFixed(2);
       
      });
  });
});

