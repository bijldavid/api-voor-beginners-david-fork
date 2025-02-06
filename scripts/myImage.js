const mySection = document.querySelector('section:nth-of-type(1)');

getData(myURL).then( data199 => {

    let myAvatar = data199.data.avatar;
    let myName = data199.data.name;

    let myImage = document.createElement("img");
    myImage.src = myAvatar;
    myImage.alt = myName;

    mySection.append(myImage);
});













/**************/
/* SPIEKBRIEF */
/**************/

// const mySection = document.querySelector('section:nth-of-type(1)');

// getMyImage();

// function getMyImage() {
// 	getData(urlMe).then( data => {  
// 		const myData = data.data;
// 		let myName = myData.name;
// 		let myImgSrc = myData.avatar;

// 		if (!myImgSrc) {
// 			myImgSrc = "images/placeholder1.svg";
// 		}

// 		const myImg = document.createElement("img");

// 		myImg.src = myImgSrc;
// 		myImg.alt = myName;

// 		mySection.append(myImg);
// 	});	
// }