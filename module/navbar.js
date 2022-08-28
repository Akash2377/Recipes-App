function navbar() {
  return `<div>
          <h1><a href="./index.html">Home</a></h1>
          <h1><a href="./search.html">Search Recipes</a></h1>
        </div>
        <div>
          <img src="./assets/images/logo.png" alt="" />
        </div>
        <div>
          <p id="NameUserP">User Name</p>
          <button onclick="changeDisplayB()" id="LoginBtn">Login</button>
          <button onclick="LogoutFromUser()" id="LogoutBtn">Logout</button>
        </div>`;
}
function searchbar() {
  return ` <div id="search-box-div">
        <div>
          <h1>Find a Recipe</h1>
          <form id="search-form">
            <input type="text" placeholder="Search..." id="input-search" />
            <button type="button" >Search</button>
          </form>
        </div>
        </div>`;
}

export { navbar, searchbar };
