const debounce = (func) => {
  let timeoutId;
  return (...args) => { //funciton wrapper
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func.apply(null, args);
    }, 1000);
  }
}
