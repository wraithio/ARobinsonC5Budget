function saveToLocalStorage(name,category) {
  let nameArr = getFromLocalStorage(category);

  if (!nameArr.includes(name)) {
    nameArr.push(`${name}`);
  }

  localStorage.setItem(category, JSON.stringify(nameArr));
}
function saveBudget(name,category) {
  let budget = getFromLocalStorage(category);

  budget = name

  localStorage.setItem(category,budget);
}

function getFromLocalStorage(category) {
  let localStorageData = localStorage.getItem(category);

  if (localStorageData == null) {
    return [];
  }
  return JSON.parse(localStorageData);
}

function removeFromLocalStorage(name,category) {
  let localStorageData = getFromLocalStorage(category);

  let Index = localStorageData.indexOf(name);

  localStorageData.splice(Index, 1);

  localStorage.setItem(category, JSON.stringify(localStorageData));
}

export { saveToLocalStorage, getFromLocalStorage, removeFromLocalStorage,saveBudget };
