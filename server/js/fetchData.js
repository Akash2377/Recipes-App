const getdataServer = async (url) => {
  try {
    let res = await fetch(url);
    let data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

async function getdataRandom() {
  try {
    let res = await fetch(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    let data = await res.json();
    showRandomData(data.categories);
  } catch (error) {
    console.log(error);
  }
}
const showRandomData = (data) => {
  data.forEach((ele) => {
    let dataI = `
          <img src="${ele.strCategoryThumb}" alt="" />
          <h2>${ele.strCategory}</h2>
          <p>${ele.strCategoryDescription.slice(0, 100)}...</p>`;
    let div = document.createElement("div");
    div.innerHTML = dataI;
    document.getElementById("random_div").append(div);
  });
};
async function showDatainSearch(data) {
  document.getElementById("results-container").innerHTML = "";
  data.meals.map(function (ele) {
    console.log(ele);
    let datashow = `
          <div><img src="${ele.strMealThumb}" alt="" /></div>
          <div>
            <h1>${ele.strMeal}</h1>
            <h1>Category : ${ele.strCategory}</h1>
            <h1>Ingredients : ${ele.strIngredient1}, ${ele.strIngredient2}</h1>
            
            <p><span style="font-weight: bold;">Follow these Instructions :</span> ${ele.strInstructions.slice(
              0,
              300
            )}...</p>
            <h1><a href="${ele.strYoutube}">Play video</a></h1>
          </div>
        `;
    let div = document.createElement("div");
    div.innerHTML = datashow;
    document.getElementById("results-container").append(div);
  });
}
export { getdataServer, getdataRandom, showDatainSearch };
