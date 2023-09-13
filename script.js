const accessKey = "OiMoBVW6_ABTidfHQRLqClya2L0sM9g2vb8dDXv6YmI";
const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");
let keyword = "";
let page = 1;
async function searchImages(){
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
}
searchForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    page =1;
    searchImages();
})