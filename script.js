
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.fade-in-up');

    function checkVisibility() {
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                el.classList.add('visible');
            } else {
                el.classList.remove('visible');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Initial check
});


//   // JAVA SCRIPT FOR WINDOWS SMOOTHNESS
//   document.addEventListener('DOMContentLoaded', function() {
//     const aboutImages = document.querySelectorAll('.about-image img');
//     const lightbox = document.createElement('div');
//     const lightboxImg = document.createElement('img');
//     const closeButton = document.createElement('button');

//     // Add class to lightbox for CSS styling
//     lightbox.classList.add('lightbox');

//     // Style the close button
//     closeButton.innerText = 'X';
//     closeButton.classList.add('close-btn');
//     lightbox.appendChild(lightboxImg);
//     lightbox.appendChild(closeButton);
//     document.body.appendChild(lightbox);

//     aboutImages.forEach(image => {
//         image.addEventListener('click', function() {
//             lightboxImg.src = this.src; // Set the lightbox image source to the clicked image
//             lightbox.classList.add('visible'); // Show the lightbox with smooth transition
//         });
//     });

//     // Close the lightbox on button click
//     closeButton.addEventListener('click', function() {
//         lightbox.classList.remove('visible'); // Hide the lightbox smoothly
//     });

//     // Close the lightbox on clicking the lightbox background
//     lightbox.addEventListener('click', function(event) {
//         if (event.target === lightbox) {
//             lightbox.classList.remove('visible'); // Hide the lightbox smoothly
//         }
//     });
// });
// middle

document.addEventListener('DOMContentLoaded', function() {
  const elements = document.querySelectorAll('.fade-in-up');

  function checkVisibility() {
      elements.forEach(el => {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom > 0) {
              el.classList.add('visible');
          } else {
              el.classList.remove('visible');
          }
      });
  }

  window.addEventListener('scroll', checkVisibility);
  checkVisibility(); // Initial check
});
// JavaScript code to display the image on click with a close button
document.addEventListener('DOMContentLoaded', function() {
  const aboutImages = document.querySelectorAll('.about-image img');
  const lightbox = document.createElement('div');
  const lightboxImg = document.createElement('img');
  const closeButton = document.createElement('button');

  // Style the lightbox
  lightbox.style.display = 'none';
  lightbox.style.position = 'fixed';
  lightbox.style.top = '0';
  lightbox.style.left = '0';
  lightbox.style.width = '100%';
  lightbox.style.height = '100%';
  lightbox.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
  lightbox.style.justifyContent = 'center';
  lightbox.style.alignItems = 'center';
  lightbox.style.zIndex = '1000';

  // Style the image
  lightboxImg.style.maxWidth = '90%';
  lightboxImg.style.maxHeight = '90%';
  lightbox.appendChild(lightboxImg);

  // Style the close button
  closeButton.innerText = 'X';
  closeButton.style.position = 'absolute';
  closeButton.style.top = '20px';
  closeButton.style.right = '20px';
  closeButton.style.backgroundColor = 'transparent';
  closeButton.style.color = '#fff';
  closeButton.style.border = 'none';
  closeButton.style.fontSize = '24px';
  closeButton.style.cursor = 'pointer';
  lightbox.appendChild(closeButton);

  document.body.appendChild(lightbox);

  aboutImages.forEach(image => {
    image.addEventListener('click', function() {
      lightboxImg.src = this.src; // Set the lightbox image source to the clicked image
      lightbox.style.display = 'flex'; // Show the lightbox
    });
  });

  // Close the lightbox on button click
  closeButton.addEventListener('click', function() {
    lightbox.style.display = 'none'; // Hide the lightbox
  });

  // Close the lightbox on clicking the lightbox background
  lightbox.addEventListener('click', function(event) {
    if (event.target === lightbox) {
      lightbox.style.display = 'none'; // Hide the lightbox if the background is clicked
    }
  });
});
