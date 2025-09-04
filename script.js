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

if (localStorage.getItem("runSetupScript") == (false || null)) {
  console.log("setup script startet");
  localStorage.setItem("runSetupScript", true);

  localStorage.setItem("montag", 6);
  localStorage.setItem("dienstag", 6);
  localStorage.setItem("mittwoch", 6);
  localStorage.setItem("donnerstag", 6);
  localStorage.setItem("freitag", 6);

  localStorage.setItem("fachInputmo1", "MA");
  localStorage.setItem("fachInputmo2", "MA");
  localStorage.setItem("mo1", "Öffne die Einstellungen");
  localStorage.setItem("mo2", "Buch S.42 Nr.1");
  localStorage.setItem("fachInput1", "MA");
  localStorage.setItem("colorInput1", "#0000ff");
  localStorage.setItem("colorInput2", "hsla(0, 0%, 20%, 1.00)");

  localStorage.setItem("fachInput1", "MA");
  location.reload();
}

//strg S zum speichern
document.addEventListener("keydown", function (event) {
  setTimeout(() => saveAll(false), 1);

  if (event.ctrlKey && event.key === "s") {
    event.preventDefault();
    saveAll(true);
  }
});

buildDay("mo");
buildDay("di");
buildDay("mi");
buildDay("do");
buildDay("fr");
loadContent();

function buildDay(day) {
  // montag ist die variable, wie viele stunden am tag sind und mo setzt den geladenen tag fest
  //

  var dayID = document.getElementById(day);
  var colorID = document.getElementById("color" + day);

  console.log("farbe" + colorID);

  if (day == "mo") {
    Stunden = localStorage.getItem("montag");
    h1 = "<h2>Montag</h2>";
  } else if (day == "di") {
    Stunden = localStorage.getItem("dienstag");
    h1 = "<h2>Dienstag</h2>";
  } else if (day == "mi") {
    Stunden = localStorage.getItem("mittwoch");
    h1 = "<h2>Mittwoch</h2>";
  } else if (day == "do") {
    Stunden = localStorage.getItem("donnerstag");
    h1 = "<h2>Donnerstag</h2>";
  } else if (day == "fr") {
    Stunden = localStorage.getItem("freitag");
    h1 = "<h2>Freitag</h2>";
  }

  dayID.innerHTML = h1;
  let i = 1;
  while (i <= Stunden) {
    let fach = document.createElement("div");
    fach.classList.add("fach");
    //erste fachhälfte erstellen
    halbesFach = document.createElement("div");
    halbesFach.classList.add("halbesFach", day + i);
    fachInput = document.createElement("input");
    fachInput.classList.add("fachInput");
    fachInput.setAttribute("id", "fachInput" + day + i);
    HAinput = document.createElement("input");
    HAinput.setAttribute("id", day + i);
    HAinput.setAttribute("placeholder", "");
    removebutton = document.createElement("button");
    removebutton.classList.add("remove");
    removebutton.setAttribute("onclick", "remove(" + day + i + ")");
    removebutton.innerHTML = "X";
    halbesFach.appendChild(fachInput);
    halbesFach.appendChild(HAinput);
    halbesFach.appendChild(removebutton);
    fach.appendChild(halbesFach);
    i++;
    console.log("i:" + i);
    // wenn 2 stunden dann auch das ausführen
    if (i <= Stunden) {
      halbesFach = document.createElement("div");
      halbesFach.classList.add("halbesFach", day + i);
      fachInput = document.createElement("input");
      fachInput.classList.add("fachInput");
      fachInput.setAttribute("id", "fachInput" + day + i);
      HAinput = document.createElement("input");
      HAinput.setAttribute("id", day + i);
      HAinput.setAttribute("placeholder", "");
      removebutton = document.createElement("button");
      removebutton.classList.add("remove");
      removebutton.setAttribute("onclick", "remove(" + day + i + ")");
      removebutton.innerHTML = "X";
      halbesFach.appendChild(fachInput);
      halbesFach.appendChild(HAinput);
      halbesFach.appendChild(removebutton);
      fach.appendChild(halbesFach);
    }
    i++;
    console.log("i:" + i);
    dayID.appendChild(fach);
  }
}

function loadContent() {
  //input in den einstellungen mit Stundenzahlen füllen

  document.getElementById("stundenMo").value = localStorage.getItem("montag");
  document.getElementById("stundenDi").value = localStorage.getItem("dienstag");
  document.getElementById("stundenMi").value = localStorage.getItem("mittwoch");
  document.getElementById("stundenDo").value =
    localStorage.getItem("donnerstag");
  document.getElementById("stundenFr").value = localStorage.getItem("freitag");

  load("mo", "montag");
  load("di", "dienstag");
  load("mi", "mittwoch");
  load("do", "donnerstag");
  load("fr", "freitag");

  function load(day, dayStunden) {
    dayStunden = localStorage.getItem(dayStunden);
    i = 1;
    while (i <= dayStunden) {
      document.getElementById(day + i).value = localStorage.getItem(day + i);
      fachName = localStorage.getItem("fachInput" + day + i);
      document.getElementById("fachInput" + day + i).value = fachName;
      console.log(day + i + " geladen");

      //den Stunden wird die richtige class zugeordnet
      feld = document.querySelector("." + day + i);
      if (feld.classList[2] !== null) {
        feld.classList.remove(feld.classList[2]);
      }

      if (fachName != null) {
        fachName = fachName.replace(/ /g, "");
        if (fachName.length >= 1) {
          console.log("fachname länger als 0" + fachName);
          feld.classList.add("fach" + fachName);
        }
      }

      i++;
    }
  }
  i = 1;
  while (i <= 18) {
    elFach = "fachInput" + i;
    document.getElementById(elFach).value = localStorage.getItem(elFach);
    elColor = "colorInput" + i;
    document.getElementById(elColor).value = localStorage.getItem(elColor);

    let colorFeld = document.querySelectorAll(
      ".fach" + localStorage.getItem(elFach)
    );
    let color = localStorage.getItem(elColor);
    console.log(color);
    colorFeld.forEach((el) => {
      el.style.border = "1.5px solid" + color;
    });
    i++;
  }

  console.log("---Alle items geladen---");
}

function changeColor(input) {
  console.log(
    "Farbe wird geändert: " + input.classList[0] + " Wert: " + input.value
  );
  localStorage.setItem("color" + input.classList[0], input.value);
  let feld = document.querySelectorAll("." + input.classList[0]);
  feld.forEach((el) => {
    el.style.backgroundColor = input.value;
  });
}
function saveAll(forceReload) {
  console.log("Speichern wird gestartet");
  save("mo", "montag");
  save("di", "dienstag");
  save("mi", "mittwoch");
  save("do", "donnerstag");
  save("fr", "freitag");
  if (forceReload == true) {
    location.reload();
  }
}
function save(day, dayStunden) {
  dayStunden = localStorage.getItem(dayStunden);
  i = 1;
  while (i <= dayStunden) {
    let feld = document.getElementById(day + i);

    localStorage.setItem(feld.id, feld.value);
    let fachInput = document.getElementById("fachInput" + feld.id);
    localStorage.setItem("fachInput" + feld.id, fachInput.value);
    i++;
  }
}

function saveSettings() {
  saveAll(false);
  //stundenanzahl pro tag speichern
  localStorage.setItem("montag", document.getElementById("stundenMo").value);
  localStorage.setItem("dienstag", document.getElementById("stundenDi").value);
  localStorage.setItem("mittwoch", document.getElementById("stundenMi").value);
  localStorage.setItem(
    "donnerstag",
    document.getElementById("stundenDo").value
  );
  localStorage.setItem("freitag", document.getElementById("stundenFr").value);

  //farben speichern
  i = 1;
  while (i <= 18) {
    //fach Input:
    fach = document.getElementById("fachInput" + i).value;
    localStorage.setItem("fachInput" + i, fach);
    //color Input:
    color = document.getElementById("colorInput" + i).value;
    localStorage.setItem("colorInput" + i, color);

    console.log("save setting: " + color);
    i++;
  }
  while (i <= 18) {
    let el = "colorInput" + i;
    localStorage.setItem(el, document.getElementById(el).value);
    i++;
  }

  location.reload();
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
      function remove(feld) {
        localStorage.setItem(feld.id, "");
        feld.placeholder = feld.value;
        feld.value = "";
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
      feld.value = "";
      feld.placeholder = "";
    }
  }
}
function remove(feld) {
  localStorage.setItem(feld.id, "");
  feld.placeholder = feld.value;
  feld.value = "";
}
