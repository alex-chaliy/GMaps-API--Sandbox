
let coords = {};
let linkToMapImage;

let showLocationImg = () => {
	let linkToMapImage = "https://maps.googleapis.com/maps/api/staticmap?center="
						  + coords.latitude + "," + coords.longitude + "&zoom=13&size=300x300&sensor=false";
	location.replace(linkToMapImage);
}


let actionOnFulfilled = () =>  {
	console.log("Fulfilled");
	showLocationImg();
}
let actionOnRejected = () =>  {
	console.log("Rejected");
}
let promise = new Promise( (resolve, reject) => {
	navigator.geolocation.getCurrentPosition( (position) => {
		coords.latitude = position.coords.latitude;
		coords.longitude = position.coords.longitude;
		resolve();
	} );
} );

promise.then( actionOnFulfilled, actionOnRejected );

// navigator.geolocation - w3schools.com/html/html5_geolocation.asp
// promises - developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise
//			- learn.javascript.ru/promise