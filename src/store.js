const globalState = {
    selectedAnswers : [],
    save: function() {
        for (let prop in this) {
          if (this.hasOwnProperty(prop) && prop !== 'save' && typeof this[prop] !== 'function') {
            localStorage.setItem(prop, JSON.stringify(this[prop]));
          }
        }
      }
}

function fetchDataFromLocalStorage() {
    for (let prop in globalState) {
      if (globalState.hasOwnProperty(prop) && prop !== 'save' && typeof globalState[prop] !== 'function') {
        var storedValue = localStorage.getItem(prop);
        if (storedValue !== null) {
            globalState[prop] = JSON.parse(storedValue);
        }
      }
    }
  }
  fetchDataFromLocalStorage();