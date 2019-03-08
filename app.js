// Create an constructor with at least the properties of 
// image name, filepath, number of times it has been shown, and the number of times it has been clicked.

// Create objects for each item

// items shoud be able to be randomly generated and displayed into HTML
// Create and use a counter to keep track of how many times each item is displayed.

// Create a listener that will listen for which item was clicked
// Create and use a counter to keep track of how many times an item is chosen.

// Display new items and repeat the last two steps. Do this 25 times using a for loop.
// Don't repeat items in the display and for the next round.

// For each item, calculate the percentage of times it was chosen using the two counters.

// Put results into a string for each item. Append these strings to HTML.

'use strict';

var productPicOne = document.getElementById('productpic1');
var productPicTwo = document.getElementById('productpic2');
var productPicThree = document.getElementById('productpic3');
var allProducts = [];
var totalRun = 0

// creates constructor

function Products(name, src, alt, title) {
  this.filepath = `img/${name}.jpg`;
  this.name = name;
  this.views = 0;
  allProducts.push(this);
}

// create's objects

new Products('bag', 'bag.jpg', 'R2D2 suitcase', 'R2D2 suitcase');
new Products('banana', 'banana.jpg', 'banana', 'banana');
new Products('bathroom', 'bathroom.jpg', 'bathroom', 'bathroom');
new Products('boots', 'boots.jpg', 'boots', 'boots');
new Products('breakfast', 'breakfast.jpg', 'breatfast', 'breakfast');

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
    console.log('-----------');
    console.log('total views ' + allProducts[0].views);
  }
}

// event listener/handler

productPicOne.addEventListener('click', handleClick);
productPicTwo.addEventListener('click', handleClick);
productPicThree.addEventListener('click', handleClick);
function handleClick(event) {
  if (totalRun < 25) {
    showRandomProducts();
    console.log('total', totalRun)
  }
  else {
    console.log(totalRun + 'trials completed');
  }
}



showRandomProducts();

console.log(allProducts);