const dataKey1 = "NUMBER1";
const dataKey2 = "NUMBER2";
const dataKey3 = "NUMBER3";

if (typeof Storage !== "undefined") {
  if (localStorage.getItem(dataKey1) === "undefined") {
    localStorage.setItem(dataKey1, 0);
  }
  /*UNTUK MERESET BILA SEBELUMYA HASIL PESANANNYA MINUS*/
  if(localStorage.getItem(dataKey1) <= 0){
    localStorage.setItem(dataKey1, 0);
  }

  const count1 = document.querySelector("#count1");
  const buttonPlus1 = document.querySelector(".buttonPlus1");
  const buttonMin1 = document.querySelector(".buttonMin1");

  buttonPlus1.addEventListener("click", function (event) {
    let number1 = localStorage.getItem(dataKey1);
    number1++;
    localStorage.setItem(dataKey1,number1);
    count1.innerText = localStorage.getItem(dataKey1);
  });

  buttonMin1.addEventListener("click", function (event) {
    let number1 = localStorage.getItem(dataKey1);
    number1--;
    localStorage.setItem(dataKey1, number1);
    count1.innerText = localStorage.getItem(dataKey1);
  });
} else {
  alert("browser engga bisa");
}

if (typeof Storage !== "undefined") {
  if (localStorage.getItem(dataKey2) === "undefined") {
    localStorage.setItem(dataKey2, 0);
  }
  /*UNTUK MERESET BILA SEBELUMYA HASIL PESANANNYA MINUS*/
  if(localStorage.getItem(dataKey2) <= 0){
    localStorage.setItem(dataKey2, 0);
  }

  const count2 = document.querySelector("#count2");
  const buttonPlus2 = document.querySelector(".buttonPlus2");
  const buttonMin2 = document.querySelector(".buttonMin2");

  buttonPlus2.addEventListener("click", function (event) {
    let number2 = localStorage.getItem(dataKey2);
    number2++;
    localStorage.setItem(dataKey2,number2);
    count2.innerText = localStorage.getItem(dataKey2);
  });

  buttonMin2.addEventListener("click", function (event) {
    let number2 = localStorage.getItem(dataKey2);
    number2--;
    localStorage.setItem(dataKey2, number2);
    count2.innerText = localStorage.getItem(dataKey2);
  });
} else {
  alert("browser engga bisa");
}

if (typeof Storage !== "undefined") {
  if (localStorage.getItem(dataKey3) === "undefined") {
    localStorage.setItem(dataKey3, 0);
  } 
  /*UNTUK MERESET BILA SEBELUMYA HASIL PESANANNYA MINUS*/
  if(localStorage.getItem(dataKey3) <= 0){
    localStorage.setItem(dataKey3, 0);
  }

  const count3 = document.querySelector("#count3");
  const buttonPlus3 = document.querySelector(".buttonPlus3");
  const buttonMin3 = document.querySelector(".buttonMin3");

  buttonPlus3.addEventListener("click", function (event) {
    let number3 = localStorage.getItem(dataKey3);
    number3++;
    localStorage.setItem(dataKey3,number3);
    count3.innerText = localStorage.getItem(dataKey3);
  });

  buttonMin3.addEventListener("click", function (event) {
    let number3 = localStorage.getItem(dataKey3);
    number3--;
    localStorage.setItem(dataKey3, number3);
    count3.innerText = localStorage.getItem(dataKey3);
  });
} else {
  alert("browser engga bisa");
3}

