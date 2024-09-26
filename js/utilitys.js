function getInputFieldValueById(id) {
  const inputValue = parseFloat(document.getElementById(id).value);
  return inputValue;
}
function getInnerFieldValueById(id) {
  const donateValue = parseFloat(document.getElementById(id).innerText);
  return donateValue;
}
function getInnerTextById(id) {
  const innerTextvalue = document.getElementById(id).innerText;
  return innerTextvalue;
}
