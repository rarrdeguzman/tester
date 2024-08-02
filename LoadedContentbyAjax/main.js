let data = {};
const url = 'content.json';

let dc = document.getElementById("dynamic-content");

let contents = {
    content_1: '<p>Content 1 here!</p>',
    content_2: '<p>Content 2 here!</p>',
    content_3: '<p>Content 3 here!</p>'
};



let controls = document.getElementById("controls").children;

let asd;

for (let i = 0; i < controls.length; i++) {
	controls[i].addEventListener('click', detectButton);
}

function detectButton(ev) {
    let currentButton = ev.target.textContent;
    
       fetch(url)
       	.then((response) => response.json())
       	.then((data) => {
       		// console.log(data);

       	if (currentButton === controls[0].innerHTML) {
       		dc.innerHTML = `
       		  <h2>${data.p1.title}</h2>
       		  <p>${data.p1.bodyText}</p>
       		`;
       	}

       	else if (currentButton === controls[1].innerHTML) {
       		dc.innerHTML = `
       		  <h2>${data.p2.title}</h2>
       		  <p>${data.p2.bodyText}</p>
       		`;
       	}

       	else {
       		dc.innerHTML = `
       		  <h2>${data.p3.title}</h2>
       		  <p>${data.p3.bodyText}</p>
       		`;
       	}
})
}














