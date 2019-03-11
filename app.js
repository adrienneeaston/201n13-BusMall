// Create and use a counter to keep track of how many times each item is displayed.

// Create a listener that will listen for which item was clicked
// Create and use a counter to keep track of how many times an item is chosen.

// Display new items and repeat the last two steps. 
// Don't repeat items in the display and for the next round.

// For each item, calculate the percentage of times it was chosen using the two counters.

// Put results into a string for each item. Append these strings to HTML.

'use strict';

// THINGS THAT CAN BE DONE

var productPicOne = document.getElementById('productpic1');
var productPicTwo = document.getElementById('productpic2');
var productPicThree = document.getElementById('productpic3');
var resultsList = document.getElementById('productlist');
var allProducts = [];
var totalRun = 0;

// creates constructor

function Products(name, filepath, alt, title) {
  this.filepath = filepath;
  this.name = name;
  this.alt = alt;
  this.title = title;
  this.views = 0;
  this.clicks = 0;
  allProducts.push(this);
}

// chooses and displays products

function showRandomProducts() {
  totalRun++;
  for(var i = 0; i < 3; i++) {
    var random = Math.floor(Math.random() * allProducts.length);
    if (i === 0) {
      var productPic = productPicOne;
    } else if (i === 1) {
      var productPic = productPicTwo;
    } else {
      var productPic = productPicThree;
    }
    productPic.src = allProducts[random].filepath;
    productPic.alt = allProducts[random].alt;
    productPic.title = allProducts[random].title;
    allProducts[random].views++;
    console.log('current product, ', allProducts[random]);
    console.log('total views ' + allProducts[0].views);
  }
}

// function clickCounter() {
//   for(var i = 0; i < allProducts.length; i++) {
//     if (event.target.title === allProducts[i].title) {
//     allProducts[i].clicks++;
//     console.log('hello clicks');
//     break;
//     }
//   }
// }

// Creates table

function createTable() {

// creates table header

  var headerRow = document.createElement('tr');
  var headerName = document.createElement('td');
  headerName.innerText = 'Product Name';
  headerRow.appendChild(headerName);

  var headerViews = document.createElement('td');
  headerViews.innerText = 'Number of Views';
  headerRow.appendChild(headerViews);

  var headerClicks = document.createElement('td');
  headerClicks.innerText = 'Total Clicks';
  headerRow.appendChild(headerClicks);

  var headerPercentage = document.createElement('td');
  headerPercentage.innerText = 'Percent Preferred';
  headerRow.appendChild(headerPercentage);

  table.appendChild(headerRow);

  // Creates the rest of the table data

  for (var i = 0; i < allProducts.length; i++) {
    var productRow = document.createElement('tr');
    var nameData = document.createElement('td');
    nameData.innerText = allProducts[i].name;
    productRow.appendChild(nameData);

    var viewsData = document.createElement('td');
    viewsData.innerText = allProducts[i].views;
    productRow.appendChild(viewsData);

    var clicksData = document.createElement('td');
    clicksData.innerText = allProducts[i].clicks;
    productRow.appendChild(clicksData);

    var percentageData = document.createElement('td');
    var percentage = (Math.floor((allProducts[i].clicks / allProducts[i].views) * 100));
    if (isNaN (percentage)) {
      percentage = 0;
    }
    percentageData.innerText = (percentage + '%');
    productRow.appendChild(percentageData);

    table.appendChild(productRow);
  }
}

// event listener

productPicOne.addEventListener('click', handleClick);
productPicTwo.addEventListener('click', handleClick);
productPicThree.addEventListener('click', handleClick);

// event handler, repeats trial 25 times then stops

function handleClick(event) {
  if (totalRun < 25) {
    // increase counter for clicks
    // sort if picture is being repeated in display
    // sort if picture is being repeated from time before
    // clickCounter();
    // Products.clicks++;
    showRandomProducts();
    console.log('total trials', totalRun)
  }
  else {
    console.log(totalRun + 'trials completed');
    createTable();
  }
}

// THINGS BEING DONE

// create's objects

new Products('bag', 'img/bag.jpg', 'R2D2 suitcase', 'R2D2 suitcase');
new Products('banana', 'img/banana.jpg', 'banana', 'banana');
new Products('bathroom', 'img/bathroom.jpg', 'bathroom', 'bathroom');
new Products('boots', 'img/boots.jpg', 'boots', 'boots');
new Products('breakfast', 'img/breakfast.jpg', 'breatfast', 'breakfast');
new Products('bubblegum', 'img/bubblegum.jpg', 'meatball bubblegum', 'meatball bubblegum');
new Products('boots', 'img/boots.jpg', 'rain boots', 'rain boots');
new Products('chair', 'img/chair.jpg', 'chair', 'chair');
new Products('cthulhu', 'img/cthulhu.jpg', 'cthulhu', 'cthulhu');
new Products('dog-duck', 'img/dog-duck.jpg', 'dog-duck', 'dog-duck');
new Products('dragon', 'img/dragon.jpg', 'dragon meat', 'dragon meat');
new Products('pen', 'img/pen.jpg', 'pen', 'pen');
new Products('pet-sweep', 'img/pet-sweep.jpg', 'pet sweeper', 'pet sweeper');
new Products('scissors', 'img/scissors.jpg', 'pizza scissors', 'pizza scissors');
new Products('shark', 'img/shark.jpg', 'shark sleeping bag', 'shark sleeping bag');
new Products('babysweep', 'img/sweep.png', 'baby sweeper', 'baby sweeper');
new Products('tauntaun', 'img/tauntaun.jpg', 'tauntaun sleeping bag', 'tauntaun sleeping bag');
new Products('unicorn', 'img/unicorn.jpg', 'unicorn', 'unicorn');
new Products('usb', 'img/usb.gif', 'usb', 'usb');
new Products('water-can', 'img/water-can.jpg', 'watering can', 'watering can');
new Products('wine-glass', 'img/wine-glass.jpg', 'wine glass', 'wine glass');

showRandomProducts();

// can use array.indexOf(arrayItem) === -1, indexOf tells you where teh item is in the array. if it is not in teh array, will return -1
// need to move my click counter out of listener, figure out my click counter

// Creates local storage

var test = {
  testProperty1: 1,
  testProperty2: 2,
  testProperty3: 3
};

var testString = JSON.stringify(test);

localStorage.setItem('testKey', testString);

var retrievedData = localStorage.getItem('testKey');

var retrievedDataParsed = JSON.parse(retrievedData);



