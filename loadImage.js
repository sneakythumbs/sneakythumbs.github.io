var loc = window.location.href.split("?");

var imageSrc = "https://farm9.staticflickr.com/" + loc[loc.length -1] + ".jpg";

var img = document.createElement('img');
img.id = "preview";

document.body.appendChild(img);

img.setAttribute('src', imageSrc);

