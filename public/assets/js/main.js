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




// show and hide NEW ARRIVALS section







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

