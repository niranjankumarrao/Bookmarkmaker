let formEl = document.getElementById("bookmarkForm");

let nameEl = document.getElementById("siteNameInput");
let urlEl = document.getElementById("siteUrlInput");

let nameErrEl = document.getElementById("siteNameErrMsg");
let urlErrEl = document.getElementById("siteUrlErrMsg");

let BtnEl = document.getElementById("submitBtn");
let listEl = document.getElementById("bookmarksList");

let formData = {
    name: "google",
    url: "https://www.google.com/"
};

nameEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        nameErrEl.textContent = "Required*";
    } else {
        nameErrEl.textContent = "";
    }
});

urlEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        urlErrEl.textContent = "Required*";
    } else {
        urlErrEl.textContent = "";
    }
});

function bookmarkSites(formData) {
    let {
        name,
        url
    } = formData;
    let listContainerEl = document.createElement("div");
    listContainerEl.classList.add("site-container");
    listEl.appendChild(listContainerEl);

    let listItem = document.createElement("li");
    listItem.classList.add("list-type")
    listContainerEl.appendChild(listItem);

    let headEl = document.createElement("a");
    headEl.classList.add("list-head");
    headEl.href = formData.url;
    headEl.target = "_blank";
    headEl.textContent = formData.name;
    listItem.appendChild(headEl);

    let lineBreakEl = document.createElement("br");
    listItem.appendChild(lineBreakEl);

    let listUrl = document.createElement("a");
    listUrl.href = formData.url;
    listUrl.textContent = formData.url;
    listUrl.target = "_blank";
    listItem.appendChild(listUrl);
}


formEl.addEventListener("submit", function(event) {
    event.preventDefault();
    bookmarkSites(formData);
});
