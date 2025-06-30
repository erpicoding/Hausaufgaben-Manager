if (localStorage.getItem("cookieConfirm") == true) {
  console.log("Cookies bestätigt");
} else if (localStorage.getItem("cookieConfirm") == (false || null)) {
  if (
    confirm(
      "Diese Website benutzt Cookies, um deine Hausaufgaben auf deinem Gerät zu speichern."
    )
  ) {
    localStorage.setItem("cookieConfirm", true);
    console.log("Cookies akzeptiert");
  } else {
    localStorage.setItem("cookieConfirm", false);
    console.log("Cookies abgelehnt");
  }
}

//strg S zum speichern
document.addEventListener("keydown", function (event) {
  if (event.ctrlKey && event.key === "s") {
    event.preventDefault();
    saveAll();
  }
});

loadDay("mo");
loadDay("di");
loadDay("mi");
loadDay("do");
loadDay("fr");
load();

//if (localStorage.getItem("fertig") == "true")

function saveStunden() {
  localStorage.setItem("montag", document.getElementById("stundenMo").value);
  localStorage.setItem("dienstag", document.getElementById("stundenDi").value);
  localStorage.setItem("mittwoch", document.getElementById("stundenMi").value);
  localStorage.setItem(
    "donnerstag",
    document.getElementById("stundenDo").value
  );
  localStorage.setItem("freitag", document.getElementById("stundenFr").value);

  //removeAll();
  location.reload();
}

function loadDay(day) {
  // montag ist die stunden variable und mo setzt den geladenen tag fest
  //

  var dayID = document.getElementById(day);
  var colorID = document.getElementById("color" + day);

  console.log("farbe" + colorID);

  if (day == "mo") {
    Stunden = localStorage.getItem("montag");
    h1 = "<h1>Montag</h1>";
  } else if (day == "di") {
    Stunden = localStorage.getItem("dienstag");
    h1 = "<h1>Dienstag</h1>";
  } else if (day == "mi") {
    Stunden = localStorage.getItem("mittwoch");
    h1 = "<h1>Mittwoch</h1>";
  } else if (day == "do") {
    Stunden = localStorage.getItem("donnerstag");
    h1 = "<h1>Donnerstag</h1>";
  } else if (day == "fr") {
    Stunden = localStorage.getItem("freitag");
    h1 = "<h1>Freitag</h1>";
  }

  dayID.innerHTML = h1;

  let i = 1;
  if (Stunden == 1) {
    let fach = document.createElement("div");
    fach.classList.add("fach");
    halbesFach = document.createElement("div");
    halbesFach.classList.add("halbeFach", day + i);
    HAinput = document.createElement("input");
    HAinput.setAttribute("id", day + i);
    HAinput.setAttribute("placeholder", "");
    removebutton = document.createElement("button");
    removebutton.classList.add("remove");
    removebutton.setAttribute("onclick", "remove(" + day + i + ")");
    removebutton.innerHTML = "X";
    halbesFach.appendChild(HAinput);
    halbesFach.appendChild(removebutton);
    fach.appendChild(halbesFach);
    dayID.appendChild(fach);
  }
  if (Stunden >= 2) {
    let fach = document.createElement("div");
    fach.classList.add("fach");
    while (i <= 2) {
      halbesFach = document.createElement("div");
      halbesFach.classList.add("halbesFach", day + i);
      HAinput = document.createElement("input");
      HAinput.setAttribute("id", day + i);
      HAinput.setAttribute("placeholder", "");
      removebutton = document.createElement("button");
      removebutton.classList.add("remove");
      removebutton.setAttribute("onclick", "remove(" + day + i + ")");
      removebutton.innerHTML = "X";
      halbesFach.appendChild(HAinput);
      halbesFach.appendChild(removebutton);
      fach.appendChild(halbesFach);
      i++;
    }
    dayID.appendChild(fach);
  }
  if (Stunden == 3) {
    let fach = document.createElement("div");
    fach.classList.add("fach");
    halbesFach = document.createElement("div");
    halbesFach.classList.add("halbesFach", day + i);
    HAinput = document.createElement("input");
    HAinput.setAttribute("id", day + i);
    HAinput.setAttribute("placeholder", "");
    removebutton = document.createElement("button");
    removebutton.classList.add("remove");
    removebutton.setAttribute("onclick", "remove(" + day + i + ")");
    removebutton.innerHTML = "X";
    halbesFach.appendChild(HAinput);
    halbesFach.appendChild(removebutton);
    fach.appendChild(halbesFach);
    dayID.appendChild(fach);
    i++;
  }
  if (Stunden >= 4) {
    let fach = document.createElement("div");
    fach.classList.add("fach");
    while (i <= 4) {
      halbesFach = document.createElement("div");
      halbesFach.classList.add("halbesFach", day + i);
      HAinput = document.createElement("input");
      HAinput.setAttribute("id", day + i);
      HAinput.setAttribute("placeholder", "");
      removebutton = document.createElement("button");
      removebutton.classList.add("remove");
      removebutton.setAttribute("onclick", "remove(" + day + i + ")");
      removebutton.innerHTML = "X";
      halbesFach.appendChild(HAinput);
      halbesFach.appendChild(removebutton);
      fach.appendChild(halbesFach);
      i++;
    }
    dayID.appendChild(fach);
  }
  if (Stunden == 5) {
    let fach = document.createElement("div");
    fach.classList.add("fach");
    halbesFach = document.createElement("div");
    halbesFach.classList.add("halbesFach", day + i);
    HAinput = document.createElement("input");
    HAinput.setAttribute("id", day + i);
    HAinput.setAttribute("placeholder", "");
    removebutton = document.createElement("button");
    removebutton.classList.add("remove");
    removebutton.setAttribute("onclick", "remove(" + day + i + ")");
    removebutton.innerHTML = "X";
    halbesFach.appendChild(HAinput);
    halbesFach.appendChild(removebutton);
    fach.appendChild(halbesFach);
    dayID.appendChild(fach);
    i++;
  }
  if (Stunden >= 6) {
    let fach = document.createElement("div");
    fach.classList.add("fach");
    while (i <= 6) {
      halbesFach = document.createElement("div");
      halbesFach.classList.add("halbesFach", day + i);
      HAinput = document.createElement("input");
      HAinput.setAttribute("id", day + i);
      HAinput.setAttribute("placeholder", "");
      removebutton = document.createElement("button");
      removebutton.classList.add("remove");
      removebutton.setAttribute("onclick", "remove(" + day + i + ")");
      removebutton.innerHTML = "X";
      halbesFach.appendChild(HAinput);
      halbesFach.appendChild(removebutton);
      fach.appendChild(halbesFach);
      i++;
    }
    dayID.appendChild(fach);
  }
  if (Stunden == 7) {
    let fach = document.createElement("div");
    fach.classList.add("fach");
    halbesFach = document.createElement("div");
    halbesFach.classList.add("halbesFach", day + i);
    HAinput = document.createElement("input");
    HAinput.setAttribute("id", day + i);
    HAinput.setAttribute("placeholder", "");
    removebutton = document.createElement("button");
    removebutton.classList.add("remove");
    removebutton.setAttribute("onclick", "remove(" + day + i + ")");
    removebutton.innerHTML = "X";
    halbesFach.appendChild(HAinput);
    halbesFach.appendChild(removebutton);
    fach.appendChild(halbesFach);
    dayID.appendChild(fach);
    i++;
  }
  if (Stunden >= 8) {
    let fach = document.createElement("div");
    fach.classList.add("fach");
    while (i <= 8) {
      halbesFach = document.createElement("div");
      halbesFach.classList.add("halbesFach", day + i);
      HAinput = document.createElement("input");
      HAinput.setAttribute("id", day + i);
      HAinput.setAttribute("placeholder", "");
      removebutton = document.createElement("button");
      removebutton.classList.add("remove");
      removebutton.setAttribute("onclick", "remove(" + day + i + ")");
      removebutton.innerHTML = "X";
      halbesFach.appendChild(HAinput);
      halbesFach.appendChild(removebutton);
      fach.appendChild(halbesFach);
      i++;
    }
    dayID.appendChild(fach);
  }
  if (Stunden == 9) {
    let fach = document.createElement("div");
    fach.classList.add("fach");
    halbesFach = document.createElement("div");
    halbesFach.classList.add("halbesFach", day + i);
    HAinput = document.createElement("input");
    HAinput.setAttribute("id", day + i);
    HAinput.setAttribute("placeholder", "");
    removebutton = document.createElement("button");
    removebutton.classList.add("remove");
    removebutton.setAttribute("onclick", "remove(" + day + i + ")");
    removebutton.innerHTML = "X";
    halbesFach.appendChild(HAinput);
    halbesFach.appendChild(removebutton);
    fach.appendChild(halbesFach);
    dayID.appendChild(fach);
    i++;
  }
  if (Stunden >= 10) {
    let fach = document.createElement("div");
    fach.classList.add("fach");
    while (i <= 10) {
      halbesFach = document.createElement("div");
      halbesFach.classList.add("halbesFach", day + i);
      HAinput = document.createElement("input");
      HAinput.setAttribute("id", day + i);
      HAinput.setAttribute("placeholder", "");
      removebutton = document.createElement("button");
      removebutton.classList.add("remove");
      removebutton.setAttribute("onclick", "remove(" + day + i + ")");
      removebutton.innerHTML = "X";
      halbesFach.appendChild(HAinput);
      halbesFach.appendChild(removebutton);
      fach.appendChild(halbesFach);
      i++;
    }
    dayID.appendChild(fach);
  }

  console.log("Tag geladen: " + day);

  i = 1;
  colorDayID = day + "Color";
  while (i <= Stunden) {
    let FarbInput = document.createElement("input");
    FarbInput.setAttribute("type", "color");
    FarbInput.setAttribute("onchange", "changeColor(this)");
    FarbInput.classList.add(day + i);
    if (day == "mo") {
      moColor.appendChild(FarbInput);
    } else if (day == "di") {
      diColor.appendChild(FarbInput);
    } else if (day == "mi") {
      miColor.appendChild(FarbInput);
    } else if (day == "do") {
      doColor.appendChild(FarbInput);
    } else if (day == "fr") {
      frColor.appendChild(FarbInput);
    }
    i++;
  }
}
function changeColor(input) {
  console.log("Farbe wird geändert: " + input.classList[0]);
  localStorage.setItem("color" + input.classList[0], input.value);
  let feld = document.querySelectorAll("." + input.classList[0]);
  feld.forEach((el) => {
    el.style.backgroundColor = input.value;
  });
}

function load() {
  //
  loadMo();
  loadDi();
  loadMi();
  loadDo();
  loadFr();

  //old:
  function loadMo() {
    montag = localStorage.getItem("montag");
    i = 1;
    while (i <= montag - 1) {
      document.getElementById("mo" + i).value = localStorage.getItem("mo" + i);
      let colorFeld = document.querySelectorAll(".mo" + i);
      let color = localStorage.getItem("colormo" + i);
      colorFeld.forEach((el) => {
        el.style.backgroundColor = color;
      });
      i++;
    }
  }
  function loadDi() {
    dienstag = localStorage.getItem("dienstag");
    i = 1;
    while (i <= dienstag - 1) {
      document.getElementById("di" + i).value = localStorage.getItem("di" + i);
      let colorFeld = document.querySelectorAll(".di" + i);
      let color = localStorage.getItem("colordi" + i);
      colorFeld.forEach((el) => {
        el.style.backgroundColor = color;
      });
      i++;
    }
  }
  function loadMi() {
    mittwoch = localStorage.getItem("mittwoch");
    i = 1;
    while (i <= mittwoch - 1) {
      document.getElementById("mi" + i).value = localStorage.getItem("mi" + i);
      let colorFeld = document.querySelectorAll(".mi" + i);
      let color = localStorage.getItem("colormi" + i);
      colorFeld.forEach((el) => {
        el.style.backgroundColor = color;
      });
      i++;
    }
  }
  function loadDo() {
    donnerstag = localStorage.getItem("donnerstag");
    i = 1;
    while (i <= donnerstag - 1) {
      document.getElementById("do" + i).value = localStorage.getItem("do" + i);
      let colorFeld = document.querySelectorAll(".do" + i);
      let color = localStorage.getItem("colordo" + i);
      colorFeld.forEach((el) => {
        el.style.backgroundColor = color;
      });
      i++;
    }
  }
  function loadFr() {
    freitag = localStorage.getItem("freitag");
    i = 1;
    while (i <= freitag) {
      document.getElementById("fr" + i).value = localStorage.getItem("fr" + i);
      let colorFeld = document.querySelectorAll(".fr" + i);
      let color = localStorage.getItem("colorfr" + i);
      colorFeld.forEach((el) => {
        el.style.backgroundColor = color;
      });
      i++;
    }
  }

  console.log("---Alle items geladen---");
}
function saveAll() {
  console.log("Speichern wird gestartet");
  saveMo();
  saveDi();
  saveMi();
  saveDo();
  saveFr();

  function saveMo() {
    montag = localStorage.getItem("montag");
    i = 1;
    while (i <= montag) {
      console.log("Speichern von mo" + i);
      let feld = document.getElementById("mo" + i);
      console.log("feld id: " + feld.id);
      save(document.getElementById(feld.id));
      i++;
    }
  }
  function saveDi() {
    dienstag = localStorage.getItem("dienstag");
    i = 1;
    while (i <= dienstag) {
      console.log("Speichern von di" + i);
      let feld = document.getElementById("di" + i);
      save(document.getElementById(feld.id));
      i++;
    }
  }
  function saveMi() {
    mittwoch = localStorage.getItem("mittwoch");
    i = 1;
    while (i <= mittwoch) {
      console.log("Speichern von mi" + i);
      let feld = document.getElementById("mi" + i);
      save(document.getElementById(feld.id));
      i++;
    }
  }
  function saveDo() {
    donnerstag = localStorage.getItem("donnerstag");
    i = 1;
    while (i <= donnerstag) {
      console.log("Speichern von do" + i);
      let feld = document.getElementById("do" + i);
      save(document.getElementById(feld.id));
      i++;
    }
  }
  function saveFr() {
    freitag = localStorage.getItem("freitag");
    i = 1;
    while (i <= freitag) {
      console.log("Speichern von fr" + i);
      let feld = document.getElementById("fr" + i);
      save(document.getElementById(feld.id));
      i++;
    }
  }
  //
  function save(feld) {
    if (feld != null) {
      if (feld.value.length > 1) {
        localStorage.setItem(feld.id, feld.value);
        console.log("gespeichert: " + feld.id + " inhalt: " + feld.value);
        feld.value = localStorage.getItem(feld.id);
        feld.placeholder = localStorage.getItem(feld.id);
      }
    }
  }
}

function removeAll(askForConfirm) {
  if (askForConfirm == true) {
    if (confirm("Alle Daten werden gelöscht!") == true) {
      montag = localStorage.getItem("montag");
      i = 1;
      while (i <= montag) {
        feld = document.getElementById("mo" + i);
        remove(feld);
        i++;
      }
      dienstag = localStorage.getItem("dienstag");
      i = 1;
      while (i <= dienstag) {
        feld = document.getElementById("di" + i);
        remove(feld);
        i++;
      }
      mittwoch = localStorage.getItem("mittwoch");
      i = 1;
      while (i <= mittwoch) {
        feld = document.getElementById("mi" + i);
        remove(feld);
        i++;
      }
      donnerstag = localStorage.getItem("donnerstag");
      i = 1;
      while (i <= donnerstag) {
        feld = document.getElementById("do" + i);
        remove(feld);
        i++;
      }
      freitag = localStorage.getItem("freitag");
      i = 1;
      while (i <= freitag) {
        feld = document.getElementById("fr" + i);
        remove(feld);
        i++;
      }
    }
  } else {
    montag = localStorage.getItem("montag");
    i = 1;
    while (i <= montag) {
      feld = document.getElementById("mo" + i);
      fullRemove(feld);
      i++;
    }
    dienstag = localStorage.getItem("dienstag");
    i = 1;
    while (i <= dienstag) {
      feld = document.getElementById("di" + i);
      fullRemove(feld);
      i++;
    }
    mittwoch = localStorage.getItem("mittwoch");
    i = 1;
    while (i <= mittwoch) {
      feld = document.getElementById("mi" + i);
      fullRemove(feld);
      i++;
    }
    donnerstag = localStorage.getItem("donnerstag");
    i = 1;
    while (i <= donnerstag) {
      feld = document.getElementById("do" + i);
      fullRemove(feld);
      i++;
    }
    freitag = localStorage.getItem("freitag");
    i = 1;
    while (i <= freitag) {
      feld = document.getElementById("fr" + i);
      fullRemove(feld);
      i++;
    }

    function remove(feld) {
      localStorage.setItem(feld.id, "");
      feld.placeholder = "";
    }
    function fullRemove(feld) {
      localStorage.setItem(feld.id, "");
      feld.value = "";
      feld.placeholder = "";
    }
  }
}
function remove(feld) {
  localStorage.setItem(feld.id, "");
  feld.value = "";
}

