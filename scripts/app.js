budgetBtn.addEventListener("click", () => {
  if (isNaN(budgetInput.value)) {
    budgetInput.value = "";
  } else {
    budgetNum.innerText = budgetInput.value;
  }
});

{
  /* <div class="d-flex justify-content-around">
          <div class="d-flex">
            <h3>Category:</h3>
            <input type="text" id="catInput" />
          </div>
          <div class="d-flex">
            <h3>Cost:</h3>
            <input type="text" id="costInput" />
          </div>
          <button id="addBtn">+</button>
        </div> */
}

addBtn.addEventListener("click", () => {
  createEntry(catInput.value, costInput.value);
  budgetNum.innerText = parseInt(budgetNum.innerText) - parseInt(costInput.value);
  catInput.value = "";
  costInput.value = "";
});

let createEntry = (category, cost) => {
  let dataEntry = document.createElement("div");
  dataEntry.className = "d-flex justify-content-around";
  let entryDiv = document.createElement("div");
//   entryDiv.className = "d-flex";
  let entryDiv2 = document.createElement("div");
  entryDiv2.className = "d-flex";
  let h3 = document.createElement("h3");
  let h32 = document.createElement("h3");
  let removeBtn = document.createElement("button");
  removeBtn.id = "remove";
  removeBtn.innerText = "X";
  removeBtn.addEventListener("click", async () => {
    // removeFromLocalStorage(name);
    dataEntry.remove();
    budgetNum.innerText = parseInt(budgetNum.innerText) + parseInt(cost);
  });
  dataEntry.appendChild(entryDiv);
  h3.innerText = category;
  entryDiv.appendChild(h3);
  dataEntry.appendChild(entryDiv2);
  h32.innerText = `$${cost}`;
  entryDiv2.appendChild(h32);
  dataEntry.appendChild(removeBtn)
  budgetList.appendChild(dataEntry);
};
