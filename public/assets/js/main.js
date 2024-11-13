// Nav Bar serach icon hide and show
function toggleSearch() {
  const searchInput = document.getElementById('searchInput');
  const searchIcon = document.getElementById('searchIcon');
  const productList = document.getElementById('productList');
  const contactList = document.getElementById('contactList');

  // Toggle the display state of the input field and icon
  if (searchInput.style.display === 'none') {
      searchInput.style.display = 'block'; // Show the input field
      searchIcon.style.display = 'none'; // Hide the icon
      productList.style.display = 'none'; // Hide the product list
      contactList.style.display = 'none'; // Hide the contact list
      searchInput.focus(); // Optional: focus on the input when it appears
  }
}

// Hide the input field and show the icon when clicking anywhere else
document.addEventListener('click', function(event) {
  const searchInput = document.getElementById('searchInput');
  const searchIcon = document.getElementById('searchIcon');
  const searchContainer = document.querySelector('.search-container');
  const productList = document.getElementById('productList');
  const contactList = document.getElementById('contactList');

  // If the click is outside the search container, hide the input field and show the icon
  if (!searchContainer.contains(event.target)) {
      searchInput.style.display = 'none'; // Hide the input field
      searchIcon.style.display = 'block'; // Show the icon
      productList.style.display = 'block'; // Show the product list
      contactList.style.display = 'block'; // Show the contact list
  }
});





// Carousel JS
$(window).on("load",function(){

  var boxes = $(".box"),ß
      stage = $(".stage");

  TweenLite.set(stage, {
    css: {
      perspective: 1100,
      transformStyle: "preserve-3d"
    }
  });

  boxes.each(function(index, element) {
    TweenLite.set(element, {
      css: {
        rotationY: index * 360 / 13,
        transformOrigin: "50% 50% -420"
      }
    });
    TweenMax.to(element, 20, {
      css: {
        z:0.01,
        rotationY: "+=359"
      },
      repeat: -1, // 20
      ease: Linear.easeNone
    });
  }); 
});




// isotope
// Define function to create items and populate #container
function createItems() {
  $('#container').empty(); // Clear existing items

  var itemsData = [
    { category: 'New Arrivals', img: 'assets/images/carousel1.png' },
    { category: 'New Arrivals', img: 'assets/images/carousel2.png' },
    { category: 'New Arrivals', img: 'assets/images/carousel3.png' },
    { category: 'New Arrivals', img: 'assets/images/carousel4.png' },
    { category: 'Furniture', img: 'assets/images/carousel5.png' },
    { category: 'Furniture', img: 'assets/images/carousel6.png' },
    { category: 'Furniture', img: 'assets/images/carousel7.png' },
    { category: 'Furniture', img: 'assets/images/carousel8.png' },
    { category: 'Accessories', img: 'assets/images/carousel9.png' },
    { category: 'Accessories', img: 'assets/images/carousel10.png' },
    { category: 'Accessories', img: 'assets/images/carousel11.png' },
    { category: 'Accessories', img: 'assets/images/carousel12.png' }
  ];

  // Create items with UIkit grid structure
  var $itemsContainer = $('<div class="uk-child-width-1-3@m uk-grid-small uk-grid-match" uk-grid></div>');

  itemsData.forEach(function(itemData) {
    var $itemWrapper = $('<div></div>');
    var $item = $('<a />', {
      'class': 'item uk-card uk-card-default uk-card-body',
      'data-category': itemData.category, 
      'href': '#',
      'style': 'position: relative; display: block; overflow: hidden;'
    });

    $item.append('<img src="' + itemData.img + '" alt="Product Image" style="width: 100%; height: 100%; object-fit: cover;">');
    $item.append('<div class="overlay">' + itemData.category + '</div>'); 

    $itemWrapper.append($item);
    $itemsContainer.append($itemWrapper);
  });

  $('#container').append($itemsContainer); // Add items to #container
}

// Style overlay
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,200..900;1,200..900&family=Foldit:wght@100..900&family=Sixtyfour+Convergence&family=Wix+Madefor+Display:wght@400..800&display=swap');
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background: none;
    color: black;
    padding: 10px;
    font-size: 1.2em;
    text-align: center;
    transition: 0.3s;
    font-family: 'Crimson Pro', serif;
  }
`;
// Append styles to the document head
$('<style>').prop('type', 'text/css').html(styles).appendTo('head');
// Initial population of items
createItems();



// Leaflet map
document.addEventListener("DOMContentLoaded", function () {
  var mapContainer = document.getElementById("map");
  if (mapContainer) {
      var map = L.map("map").setView([55.8607, 9.8503], 13);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          maxZoom: 19,
          attribution: "© OpenStreetMap contributors"
      }).addTo(map);

      L.marker([55.8607, 9.8503]).addTo(map)
          .bindPopup("HAY ApS, Havnen 3, 8700 Horsens, Denmark")
          .openPopup();
  }
});
