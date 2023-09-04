let nama = ""
let angka = ""
let bulan = ""
let tahun = ""
let cvc = ""
let emptycheck = ""

    function captureName() {
    const isAlpha = str => /^[a-zA-Z- ]*$/.test(str);
    
    if (isAlpha(document.getElementById("name").value)==true) {
        nama = document.getElementById("name").value;
        document.getElementById("error-nama").classList.add("hidden");
        document.getElementById("person-name").innerHTML =nama;
    }
    else {
        document.getElementById("error-nama").classList.remove("hidden");
    }
    }

  function captureNumber() {
    const isNumber = str => /^[0-9]*$/.test(str);

    if (isNumber(document.getElementById("number").value)==true) {
        angka = (document.getElementById("number").value);
        document.getElementById("error-angka").classList.add("hidden");
        nomorAsli = angka.toString().replace(/\d{4}(?=.)/g, '$& ');
        document.getElementById("card-number").innerHTML=nomorAsli;
    }
    else {
        document.getElementById("error-angka").classList.remove("hidden");
    }
  }

  function captureMonth() {
    checkDate()
  }

  function captureYear() {
    checkDate()
  }

  function captureCVC() {
    if (document.getElementById("cvc").value=="") {
        document.getElementById("error-cvc").classList.remove("hidden");
    }
    else {
        cvc = document.getElementById("cvc").value;
        document.getElementById("error-cvc").classList.add("hidden");
        assignCVC();
    }
  }

    
  function checkDate(){
    if (document.getElementById("month").value=="") {
    document.getElementById("error-tanggal").classList.remove("hidden");
    document.getElementById("month").classList.add("form-error");
    }
    else if (document.getElementById("month").value!=="" && document.getElementById("month").value <13){
        bulan = (document.getElementById("month").value);
        document.getElementById("month").classList.remove("form-error");
        assignMonth();

        if (document.getElementById("year").value=="") {
            document.getElementById("error-tanggal").classList.remove("hidden");
            document.getElementById("year").classList.add("form-error");
        }
        else {
            tahun = document.getElementById("year").value;
            document.getElementById("error-tanggal").classList.add("hidden");
            document.getElementById("year").classList.remove("form-error");
            assignYear();
        }
    }
    else {
      document.getElementById("error-tanggal").classList.remove("hidden");
      document.getElementById("month").classList.add("form-error");
    }
}

function assignMonth() {
  document.getElementById("card-month").innerHTML = bulan;
}

function assignYear() {
  document.getElementById("card-year").innerHTML = tahun;
}

function assignCVC() {
  document.getElementById("card-cvc").innerHTML = cvc;
}

function confirmForm() {
  ifEmpty()
  if (emptycheck === true) {
  document.getElementById("form").classList.add("hidden");
  document.getElementById("thank-you").classList.remove("hidden");
  }
}

function continueForm() {
  document.getElementById("form").classList.remove("hidden");
  document.getElementById("thank-you").classList.add("hidden");
  clearAll();
}

function ifEmpty() {
  if (nama !== "") {
    if (angka !== "") {
      if (bulan !== "") {
        if (tahun !== "") {
          if (cvc !== "") {
            emptycheck=true
          }
        }
      }
    }
  }
}

function clearAll() {
  document.getElementById("name").value=""
  document.getElementById("number").value=""
  document.getElementById("month").value=""
  document.getElementById("year").value=""
  document.getElementById("cvc").value=""
}
