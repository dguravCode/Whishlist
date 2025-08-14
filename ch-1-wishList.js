let inputText = document.querySelector(".input");
let addbtn = document.querySelector(".button");
let showWishList = document.querySelector(".todo-container")
let inputValue;

let localData=JSON.parse(localStorage.getItem("inputValue"));
let wishList = localData || [];

//creating function to get uniques ID's for different inputs//
function uuid() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[x,y]/g,
    function (param) {
      let number = (Math.random() * 16) | 0;
      let randomNum = param == "x" ? number : (number & 0x3) | 0x8;
      return randomNum.toString(16);
    }
  );
}

addbtn.addEventListener("click", (ev) => {
  ev.preventDefault();
  inputValue = inputText.value.trim();
  if (inputValue.length > 0) {
    wishList.push({id: uuid(), inputValue, isCompleted: false})   
    inputText.value = ""; //
    renderWishList(wishList);
    localStorage.setItem("inputValue",JSON.stringify(wishList));
  }
});


showWishList.addEventListener("click",(ev) =>{
  let key = ev.target.dataset.key; //to get data-key=${id}
  const removeKey = ev.target.dataset.remove; //
  if (ev.target.type === "checkbox" && key) {
    wishList = wishList.map((item) =>
      item.id === key ? { ...item, isCompleted: !item.isCompleted } : item
    );
  }
  if (removeKey) {
    wishList = wishList.filter((item) => item.id !== removeKey); //
  }
  renderWishList(wishList);
  localStorage.setItem("inputValue",JSON.stringify(wishList));
  console.log(wishList);
})


function renderWishList(wishList) {
  showWishList.innerHTML = wishList
    .map(({ id, inputValue, isCompleted }) => `
        <div class="todo-item">
          <div style="display: flex; align-items: center; gap: 8px;">
            <input id="item-${id}" type="checkbox" data-key="${id}" ${isCompleted ? "checked" : ""}>
            <label for="item-${id}">
            <span class="${isCompleted ? "checkTodo" : ""}">${inputValue}</span>
            </label>
          </div>
          <button data-remove="${id}" class="remove-btn">Remove</button>
        </div>`
    )
    .join("");
}


renderWishList(wishList);