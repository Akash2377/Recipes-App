import { navbar, searchbar } from "../../module/navbar.js";
import {
  getdataServer,
  getdataRandom,
  showDatainSearch,
} from "../../server/js/fetchData.js";
document.getElementById("navbar").innerHTML = navbar();
document.getElementById("search-container").innerHTML = searchbar();
getdataRandom();
document.getElementById("search-form").addEventListener("keyup", function () {
  debounce(getdataFromAPI, 1000);
});
let timer;
function debounce(fun, delay) {
  if (timer) {
    clearTimeout(timer);
  }
  timer = setTimeout(function () {
    fun();
  }, delay);
}
async function getdataFromAPI() {
  try {
    let nameF = document.getElementById("input-search").value;
    let data = await getdataServer(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${nameF}`
    );
    localStorage.setItem("myfoodR", JSON.stringify(data));
    window.open("./search.html", "_self");
  } catch (error) {
    console.log(error);
  }
}
