var loc = window.location.href.split("?");

if (loc.length == 2)
{
    var imageSrc = "https://farm9.staticflickr.com/" + loc[loc.length -1] + ".jpg";

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
