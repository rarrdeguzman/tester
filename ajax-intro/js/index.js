// get the reference to your html element
let dc = document.getElementById("dynamic-content");
let er = document.getElementById("error");

// use javascript to reach out for the data stored in data-storing format (JSON, HML or HTML partial)

/*
// syntax
let prms = fetch(url-of-the-data-location)
*/
let prms = fetch("content/content.json");

prms
  .then(function (response) {
    // make sure the data is a available:
    if (response.statusText === "OK") {
      return response.json();
    }

    // handle the error
    throw new Error(response.statusText);
  })
  .then(function (data) {
    // create your html here using the data
    // console.log(data);
    dc.innerHTML = `
      <h2>${data.p1.title}</h2>
      <p>${data.p1.bodyText}</p>
    `;
  })
  .catch(function (err) {
    // console.log(err);
    er.innerHTML = err;
  }); 