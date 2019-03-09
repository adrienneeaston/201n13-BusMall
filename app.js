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
var allProducts = [];
var totalRun = 0

// creates constructor

function Products(name, filepath, alt, title) {
  this.filepath = filepath;
  this.name = name;
  this.views = 0;
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
    productPic.alt = allProducts[random].name;
    productPic.title = allProducts[random].name;
    allProducts[random].views++;
    console.log('current product, ', allProducts[random]);
    console.log('total views ' + allProducts[0].views);
  }
}

// event listener

productPicOne.addEventListener('click', handleClick);
productPicTwo.addEventListener('click', handleClick);
productPicThree.addEventListener('click', handleClick);

// event handler, repeats trial 25 times then stops

function handleClick(event) {
  var clicks = 0;
  if (totalRun < 25) {
    clicks++;
    showRandomProducts();
    console.log('total clicks ', clicks);
    console.log('total trials', totalRun)
  }
  else {
    console.log(totalRun + 'trials completed');
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