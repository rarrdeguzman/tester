const url = 'content.json';

let dc = document.getElementById("dynamic-content");

let controls = document.getElementById("controls").children;

for (let i = 0; i < controls.length; i++) {
	controls[i].addEventListener('click', detectButton);
}

function defaultValue() {
  controls[0].click();
}

function detectButton(ev) {
    let currentButton = ev.target.textContent;
    
       fetch(url)
       	.then((response) => response.json())
       	.then((data) => {

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














