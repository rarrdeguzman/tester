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

        let jsondata = Object.keys(data);
        let jsonValues = Object.values(data);
        let outputContainer = [];
        let collectOutput;

       	if (currentButton === controls[0].innerHTML) {

            for (let i = 0; i < jsondata.length; i++) {
                console.log(jsondata.length);
                // console.log(jsondata[i]);

                collectOutput = `
                  <p>${jsonValues[i].title}</p>
                  <p>${jsonValues[i].bodyText}</p>
                  <img src="${jsonValues[i].url}">
                `;

                outputContainer.push(collectOutput);

                // cancell loop once portfolio data reached
                if (i == 3) {
                    break;
                }
            }

            dc.innerHTML = outputContainer;
       	}

       	else {
            for (let i = 4; i < jsondata.length; i++) {
                // console.log(jsondata.length);
                // console.log(jsondata[i]);

                collectOutput = `
                  <p>${jsonValues[i].title}</p>
                  <p>${jsonValues[i].bodyText}</p>
                  <img src="${jsonValues[i].url}">
                `;

                outputContainer.push(collectOutput);
            }

            dc.innerHTML = outputContainer;
       	}

    })

}













