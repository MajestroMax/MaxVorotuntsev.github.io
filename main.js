function s(x1, x2, x3, x4) {
  if (x1 != 9000) {
    x1 += 18;
    x2 += 2;
    x3 += 14;
    x4 += 10;
    document.getElementById("ys").innerHTML = x1;
    document.getElementById("ls").innerHTML = x2;
    document.getElementById("fs").innerHTML = x3;
    document.getElementById("ts").innerHTML = x4;
    setTimeout(() => {
      s(x1, x2, x3, x4);
    }, 1000);
  }
}
s(0, 0, 0, 0);


function button() {
  let strEm = document.getElementById("textlog").value;
  let strPa = document.getElementById("passlog").value;
  let boollog = false;
  let boolpas = false;
  if (strEm.length == 0) {
    document.getElementById("at").innerHTML = "Это полне не может быть пустым";
    document.getElementById("blocklog").style.border = "0.2vmin solid red";
    document.getElementById("blocklog").style.boxShadow = "0 0.4vmin red";
  } else if (
    strEm.indexOf("@") == -1 ||
    strEm.indexOf(".") == -1 ||
    strEm.indexOf("@") > strEm.indexOf(".") ||
    strEm.indexOf("@") == 0 ||
    strEm.indexOf(".") - strEm.indexOf("@") == 1 ||
    strEm.length - strEm.indexOf(".") == 1
  ) {
    document.getElementById("at").innerHTML = "Введите правильный адрес";
    document.getElementById("blocklog").style.border = "0.2vmin solid red";
    document.getElementById("blocklog").style.boxShadow = "0 0.4vmin red";
  } else {
    document.getElementById("at").innerHTML = "";
    document.getElementById("blocklog").style.border =
      "0.2vmin solid rgb(122,122,122)";
    document.getElementById("blocklog").style.boxShadow =
      "0 0.4vmin rgb(122,122,122)";
    boollog = true;
  }

  if (strPa.length == 0) {
    document.getElementById("ap").innerHTML = "Это полне не может быть пустым";
    document.getElementById("blockpas").style.border = "0.2vmin solid red";
    document.getElementById("blockpas").style.boxShadow = "0 0.4vmin red";
  } else {
    document.getElementById("ap").innerHTML = "";
    document.getElementById("blockpas").style.border =
      "0.2vmin solid rgb(122,122,122)";
    document.getElementById("blockpas").style.boxShadow =
      "0 0.4vmin rgb(122,122,122)";
    boolpas = true;
  }

  if (boollog == true && boolpas == true) {
    window.open("https://www.google.ru", "_blank");
  }
}
