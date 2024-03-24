const display = document.getElementById("Display");

function BtnClick(input) {
  display.value += input;
}

function BtnTotal() {
  try {
    display.value = eval(display.value);
  } catch (eror) {
    display.value = "eror";
  }
}

function BtnClear() {
  display.value = "";
}
