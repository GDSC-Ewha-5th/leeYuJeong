document.addEventListener('DOMContentLoaded', function() {
    const thumbnailPosts = document.querySelectorAll('.thumbnail-post');
    const popupImage = document.querySelector('.popup-image');
    const closeButton = document.querySelector('.popup-image .close-button');
   
    thumbnailPosts.forEach(function(thumbnailPost) {
        thumbnailPost.addEventListener('click', function() {
            popupImage.style.display = 'block';
        });
    });
   
    closeButton.addEventListener('click', function() {
        popupImage.style.display = 'none';
    });
   });
   