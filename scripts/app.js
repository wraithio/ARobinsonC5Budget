import {
  saveToLocalStorage,
  getFromLocalStorage,
  removeFromLocalStorage,
  saveBudget,
} from "./localstorage.js";
let budget = false;
warningText.className = "d-none";
budgetBtn.addEventListener("click", () => {
  if (isNaN(budgetInput.value)) {
    budgetInput.value = "";
  } else {
    budget = true;
    originalBudget.innerText = budgetInput.value;
    budgetNum.innerText = budgetInput.value;
    saveBudget(budgetInput.value, "Budgets");
  }
});


addBtn.addEventListener("click", () => {
    if (budgetNum.innerText == "" || isNaN(costInput.value)) {
        catInput.value = "";
        costInput.value = "";
    } else {
        createEntry(catInput.value, costInput.value);
        budgetNum.innerText =
        parseInt(budgetNum.innerText) - parseInt(costInput.value);
        catInput.value = "";
        costInput.value = "";
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

let createEntry = (category, cost) => {
  saveToLocalStorage(category, "Category");
  saveToLocalStorage(cost, "Costs");
  let dataEntry = document.createElement("div");
  dataEntry.className = "d-flex justify-content-around";
  let entryDiv = document.createElement("div");
  let entryDiv2 = document.createElement("div");
  entryDiv2.className = "d-flex";
  let h3 = document.createElement("h3");
  let h32 = document.createElement("h3");
  let removeBtn = document.createElement("button");
  removeBtn.id = "remove";
  removeBtn.innerText = "X";
  removeBtn.addEventListener("click", async () => {
    removeFromLocalStorage(category, "Category");
    removeFromLocalStorage(cost, "Costs");
    dataEntry.remove();
    budgetNum.innerText = parseInt(budgetNum.innerText) + parseInt(cost);
  });
  dataEntry.appendChild(entryDiv);
  h3.innerText = category;
  entryDiv.appendChild(h3);
  dataEntry.appendChild(entryDiv2);
  h32.innerText = `$${cost}`;
  entryDiv2.appendChild(h32);
  dataEntry.appendChild(removeBtn);
  budgetList.appendChild(dataEntry);
};

let elementsOnload = async () => {
  let costArr = getFromLocalStorage("Costs");
  let catArr = getFromLocalStorage("Category");
  if (costArr == []) {
    return null;
  }
  console.log(costArr);
  const sum = costArr.reduce((sum, str) => sum + Number(str), 0);
  console.log(sum);
  budgetNum.innerText = getFromLocalStorage("Budgets") - sum;
  originalBudget.innerText = getFromLocalStorage("Budgets");
  for (let i = 0; i < costArr.length; i++) {
    let dataEntry = document.createElement("div");
    dataEntry.className = "d-flex justify-content-around";
    let entryDiv = document.createElement("div");
    let entryDiv2 = document.createElement("div");
    entryDiv2.className = "d-flex";
    let h3 = document.createElement("h3");
    let h32 = document.createElement("h3");
    let removeBtn = document.createElement("button");
    removeBtn.id = "remove";
    removeBtn.innerText = "X";
    removeBtn.addEventListener("click", async () => {
      removeFromLocalStorage(catArr[i], "Category");
      removeFromLocalStorage(costArr[i], "Costs");
      dataEntry.remove();
      budgetNum.innerText =
        parseInt(budgetNum.innerText) + parseInt(costArr[i]);
    });
    dataEntry.appendChild(entryDiv);
    h3.innerText = catArr[i];
    entryDiv.appendChild(h3);
    dataEntry.appendChild(entryDiv2);
    h32.innerText = `$${costArr[i]}`;
    entryDiv2.appendChild(h32);
    dataEntry.appendChild(removeBtn);
    budgetList.appendChild(dataEntry);
  }
};

elementsOnload();
