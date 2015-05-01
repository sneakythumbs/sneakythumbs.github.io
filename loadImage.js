var loc = window.location.search.slice(1);

if (loc)
{
    var imageSrc = "https://farm9.staticflickr.com/" + loc + ".jpg";

	var img = document.createElement("img");
	img.id = "preview";

	document.body.appendChild(img);

	img.setAttribute('src', imageSrc);
}
else
{
	var home = document.createElement("a");
	var text = document.createTextNode("Sorry image not found.");
	home.appendChild(text);
	home.title = "home";
	home.href = "http://sneakythumbs.github.io";
	document.body.appendChild(home);
}
