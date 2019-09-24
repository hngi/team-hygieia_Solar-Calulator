const productsWattsStore = [];
let totalUtitlty;
let amps, volts, watts;

const div = document.querySelector('#warning');
const totalNode = document.querySelector('#total');


let form = document.getElementById('form');
let inputElement = document.querySelector('#product');

let byAmpsVolts = document.querySelector('#byAmpsVolts');

let calByAmpsVolts = document.querySelector('#calByAmpsVolts');

calByAmpsVolts.addEventListener('click', (event) => {
  event.preventDefault();
  calByAmpsVolts.value = "Calculate by watts";
  form.classList.toggle('hide');
  byAmpsVolts.classList.toggle('show');
})

inputElement.addEventListener('keyup', (event) => {
  if(div.hasChildNodes()) {
    const p = div.querySelector('p');		
    div.removeChild(p);
  }
  let {value} = event.target;
  if(typeof value !== "number") {
    
    const totalText = document.createElement('p');
    totalText.textContent = 'Should be a number';
    div.appendChild(totalText);
  }  
  return; 
})


// let currentProductWatts = amps * volts;

// amps = watts/volts;

const addProduct = (accumulator, currentValue) => accumulator + currentValue;
  

form.addEventListener('submit', (event) => {
  event.preventDefault();
  let productbywatts = form.querySelector('input[name="productbywatts"]').value;

  console.log('by watts')

  let productWatts = productbywatts;

  if(!isNaN(productWatts)) {
    input = Number(productWatts)
    productsWattsStore.push(input);
    const total = productsWattsStore.reduce(addProduct);
    console.log('total:', total)
    const text = 'Your total solar energy per hour is ' + total + ' watts';
    const totalText = document.createElement('p');
    totalText.textContent = text;
    if(totalNode.hasChildNodes()) {
      console.log(totalNode.hasChildNodes());
      
      const p = totalNode.querySelector('p');		
      totalText.removeChild(p);
    }
    totalNode.appendChild(totalText);
  };

  form.reset()
})

byAmpsVolts.addEventListener('submit', (event) => {
  event.preventDefault();
  amps = byAmpsVolts.querySelector('input[name="productsAmps"]').value;
  volts = byAmpsVolts.querySelector('input[name="productsVolts"]').value;

  watts = amps * volts;

  let productWatts = watts;

  if(!isNaN(productWatts)) {
    input = Number(productWatts)
    productsWattsStore.push(input);
    const total = productsWattsStore.reduce(addProduct);
    console.log('total:', total)
    const text = 'Your total solar energy per hour is ' + total  + ' watts';
    const totalText = document.createElement('p');
    totalText.textContent = text;
    totalNode.appendChild(totalText);
  };

  byAmpsVolts.reset()
})

