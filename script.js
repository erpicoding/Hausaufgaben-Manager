if (
  localStorage.getItem("fertig") == null ||
  localStorage.getItem("fertig") == "false"
) {
  console.log("fertig ist false");
  if (
    confirm(
      "Diese seite benutzt Cookies um die Hausaufgaben lokal zu speichern"
    ) == false
  ) {
    location.reload();
  }
  getStunden();
} else {
  console.log("fertig ist true");
  loadDay("mo");
  loadDay("di");
  loadDay("mi");
  loadDay("do");
  loadDay("fr");
  load();
}
//if (localStorage.getItem("fertig") == "true")

if (
  localStorage.getItem("montag") != null &&
  localStorage.getItem("dienstag") != null &&
  localStorage.getItem("mittwoch") != null &&
  localStorage.getItem("donnerstag") != null &&
  localStorage.getItem("freitag") != null
) {
  console.log("Alle Stunden sind richtige Zahlen!");
  localStorage.setItem("fertig", "true");
  loadDay("mo");
  loadDay("di");
  loadDay("mi");
  loadDay("do");
  loadDay("fr");
} else {
  alert(
    " Fehler! \n Es sind nur Zahlen von 1 - 9 erlaubt! \n Bitte lade die Seite neu!"
  );
  localStorage.setItem("fertig", "false");
}

//strg S zum speichern
document.addEventListener("keydown", function (event) {
  if (event.ctrlKey && event.key === "s") {
    event.preventDefault();
    saveAll();
  }
});
function getStunden() {
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
function getStundenOld() {
  alert(
    " Bitte gib die Stundenanzahl für jeden Tag ein.\n Es sind nur Zahlen von 1 - 9 erlaubt!"
  );

  localStorage.setItem("montag", prompt("Wie viele Stunden hast du Montags?"));
  console.log(localStorage.getItem("montag"));
  localStorage.setItem(
    "dienstag",
    prompt("Wie viele Stunden hast du Dienstags?")
  );
  console.log(localStorage.getItem("dienstag"));
  localStorage.setItem(
    "mittwoch",
    prompt("Wie viele Stunden hast du Mittwochs?")
  );
  console.log(localStorage.getItem("mittwoch"));
  localStorage.setItem(
    "donnerstag",
    prompt("Wie viele Stunden hast du Donnerstags?")
  );
  console.log(localStorage.getItem("donnerstag"));
  localStorage.setItem(
    "freitag",
    prompt("Wie viele Stunden hast du Freitags?")
  );
  console.log(localStorage.getItem("freitag"));
  if (
    localStorage.getItem("montag") != null &&
    localStorage.getItem("dienstag") != null &&
    localStorage.getItem("mittwoch") != null &&
    localStorage.getItem("donnerstag") != null &&
    localStorage.getItem("freitag") != null
  ) {
    localStorage.setItem("fertig", "true");
    if (localStorage.getItem("mo1") == null) {
      console.log("mo 1 ist null");
    }
    location.reload();
  }
}

function loadDay(day) {
  // montag ist die stunden variable und mo setzt den geladenen tag fest
  //

  var dayID = document.getElementById(day);

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

  if (Stunden == 1) {
    dayID.innerHTML =
      h1 +
      '<div class="fach"><input placeholder="" id="' +
      day +
      '1"><button class="remove" onclick="remove(' +
      day +
      '1)">X</button>';
  } else if (Stunden == 2) {
    dayID.innerHTML =
      h1 +
      '<div class="fach"><input placeholder="" id="' +
      day +
      '1"><button class="remove" onclick="remove(' +
      day +
      '1)">X</button><br /><input placeholder="" id="' +
      day +
      '2" /><button class="remove" onclick="remove(' +
      day +
      '2)">X</button></div>';
  } else if (Stunden == 3) {
    dayID.innerHTML =
      h1 +
      '<div class="fach"><input placeholder="" id="' +
      day +
      '1"><button class="remove" onclick="remove(' +
      day +
      '1)">X</button><br /><input placeholder="" id="' +
      day +
      '2" /><button class="remove" onclick="remove(' +
      day +
      '2)">X</button></div><div class="fach"><input placeholder="" id="' +
      day +
      '3"><button class="remove" onclick="remove(' +
      day +
      '3)">X</button>';
  } else if (Stunden == 4) {
    dayID.innerHTML =
      h1 +
      '<div class="fach"><input placeholder="" id="' +
      day +
      '1"><button class="remove" onclick="remove(' +
      day +
      '1)">X</button><br /><input placeholder="" id="' +
      day +
      '2" /><button class="remove" onclick="remove(' +
      day +
      '2)">X</button></div><div class="fach"><input placeholder="" id="' +
      day +
      '3"><button class="remove" onclick="remove(' +
      day +
      '3)">X</button><br /><input placeholder="" id="' +
      day +
      '4" /><button class="remove" onclick="remove(' +
      day +
      '4)">X</button></div>';
  } else if (Stunden == 5) {
    dayID.innerHTML =
      h1 +
      '<div class="fach"><input placeholder="" id="' +
      day +
      '1"><button class="remove" onclick="remove(' +
      day +
      '1)">X</button><br /><input placeholder="" id="' +
      day +
      '2" /><button class="remove" onclick="remove(' +
      day +
      '2)">X</button></div><div class="fach"><input placeholder="" id="' +
      day +
      '3"><button class="remove" onclick="remove(' +
      day +
      '3)">X</button><br /><input placeholder="" id="' +
      day +
      '4" /><button class="remove" onclick="remove(' +
      day +
      '4)">X</button></div><div class="fach"><input placeholder="" id="' +
      day +
      '5"><button class="remove" onclick="remove(' +
      day +
      '5)">X</button>';
  } else if (Stunden == 6) {
    dayID.innerHTML =
      h1 +
      '<div class="fach"><input placeholder="" id="' +
      day +
      '1"><button class="remove" onclick="remove(' +
      day +
      '1)">X</button><br /><input placeholder="" id="' +
      day +
      '2" /><button class="remove" onclick="remove(' +
      day +
      '2)">X</button></div><div class="fach"><input placeholder="" id="' +
      day +
      '3"><button class="remove" onclick="remove(' +
      day +
      '3)">X</button><br /><input placeholder="" id="' +
      day +
      '4" /><button class="remove" onclick="remove(' +
      day +
      '4)">X</button></div><div class="fach"><input placeholder="" id="' +
      day +
      '5"><button class="remove" onclick="remove(' +
      day +
      '5)">X</button><br /><input placeholder="" id="' +
      day +
      '6" /><button class="remove" onclick="remove(' +
      day +
      '6)">X</button></div>';
  } else if (Stunden == 7) {
    dayID.innerHTML =
      h1 +
      '<div class="fach"><input placeholder="" id="' +
      day +
      '1"><button class="remove" onclick="remove(' +
      day +
      '1)">X</button><br /><input placeholder="" id="' +
      day +
      '2" /><button class="remove" onclick="remove(' +
      day +
      '2)">X</button></div><div class="fach"><input placeholder="" id="' +
      day +
      '3"><button class="remove" onclick="remove(' +
      day +
      '3)">X</button><br /><input placeholder="" id="' +
      day +
      '4" /><button class="remove" onclick="remove(' +
      day +
      '4)">X</button></div><div class="fach"><input placeholder="" id="' +
      day +
      '5"><button class="remove" onclick="remove(' +
      day +
      '5)">X</button><br /><input placeholder="" id="' +
      day +
      '6" /><button class="remove" onclick="remove(' +
      day +
      '6)">X</button></div><div class="fach"><input placeholder="" id="' +
      day +
      '7"><button class="remove" onclick="remove(' +
      day +
      '7)">X</button>';
  } else if (Stunden == 8) {
    dayID.innerHTML =
      h1 +
      '<div class="fach"><input placeholder="" id="' +
      day +
      '1"><button class="remove" onclick="remove(' +
      day +
      '1)">X</button><br /><input placeholder="" id="' +
      day +
      '2" /><button class="remove" onclick="remove(' +
      day +
      '2)">X</button></div><div class="fach"><input placeholder="" id="' +
      day +
      '3"><button class="remove" onclick="remove(' +
      day +
      '3)">X</button><br /><input placeholder="" id="' +
      day +
      '4" /><button class="remove" onclick="remove(' +
      day +
      '4)">X</button></div><div class="fach"><input placeholder="" id="' +
      day +
      '5"><button class="remove" onclick="remove(' +
      day +
      '5)">X</button><br /><input placeholder="" id="' +
      day +
      '6" /><button class="remove" onclick="remove(' +
      day +
      '6)">X</button></div><div class="fach"><input placeholder="" id="' +
      day +
      '7"><button class="remove" onclick="remove(' +
      day +
      '7)">X</button><br /><input placeholder="" id="' +
      day +
      '8" /><button class="remove" onclick="remove(' +
      day +
      '8)">X</button></div>';
  } else if (Stunden == 9) {
    dayID.innerHTML =
      h1 +
      '<div class="fach"><input placeholder="" id="' +
      day +
      '1"><button class="remove" onclick="remove(' +
      day +
      '1)">X</button><br /><input placeholder="" id="' +
      day +
      '2" /><button class="remove" onclick="remove(' +
      day +
      '2)">X</button></div><div class="fach"><input placeholder="" id="' +
      day +
      '3"><button class="remove" onclick="remove(' +
      day +
      '3)">X</button><br /><input placeholder="" id="' +
      day +
      '4" /><button class="remove" onclick="remove(' +
      day +
      '4)">X</button></div><div class="fach"><input placeholder="" id="' +
      day +
      '5"><button class="remove" onclick="remove(' +
      day +
      '5)">X</button><br /><input placeholder="" id="' +
      day +
      '6" /><button class="remove" onclick="remove(' +
      day +
      '6)">X</button></div><div class="fach"><input placeholder="" id="' +
      day +
      '7"><button class="remove" onclick="remove(' +
      day +
      '7)">X</button><br /><input placeholder="" id="' +
      day +
      '8" /><button class="remove" onclick="remove(' +
      day +
      '8)">X</button></div><div class="fach"><input placeholder="" id="' +
      day +
      '9"><button class="remove" onclick="remove(' +
      day +
      '9)">X</button>';
  }
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
    i = 0;
    while (i <= montag - 1) {
      i++;
      document.getElementById("mo" + i).placeholder = localStorage.getItem(
        "mo" + i
      );
    }
  }
  function loadDi() {
    dienstag = localStorage.getItem("dienstag");
    i = 0;
    while (i <= dienstag - 1) {
      i++;
      document.getElementById("di" + i).placeholder = localStorage.getItem(
        "di" + i
      );
    }
  }
  function loadMi() {
    mittwoch = localStorage.getItem("mittwoch");
    i = 0;
    while (i <= mittwoch - 1) {
      i++;
      document.getElementById("mi" + i).placeholder = localStorage.getItem(
        "mi" + i
      );
    }
  }
  function loadDo() {
    donnerstag = localStorage.getItem("donnerstag");
    i = 0;
    while (i <= donnerstag - 1) {
      i++;
      document.getElementById("do" + i).placeholder = localStorage.getItem(
        "do" + i
      );
    }
  }
  function loadFr() {
    freitag = localStorage.getItem("freitag");
    i = 0;
    while (i <= freitag) {
      i++;
      document.getElementById("fr" + i).placeholder = localStorage.getItem(
        "fr" + i
      );
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
      feld = document.getElementById("mo" + i);
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
      feld = document.getElementById("di" + i);
      save(document.getElementById(feld.id));
      i++;
    }
  }
  function saveMi() {
    mittwoch = localStorage.getItem("mittwoch");
    i = 1;
    while (i <= mittwoch) {
      console.log("Speichern von mi" + i);
      feld = document.getElementById("mi" + i);
      save(document.getElementById(feld.id));
      i++;
    }
  }
  function saveDo() {
    donnerstag = localStorage.getItem("donnerstag");
    i = 1;
    while (i <= donnerstag) {
      console.log("Speichern von do" + i);
      feld = document.getElementById("do" + i);
      save(document.getElementById(feld.id));
      i++;
    }
  }
  function saveFr() {
    freitag = localStorage.getItem("freitag");
    i = 1;
    while (i <= freitag) {
      console.log("Speichern von fr" + i);
      feld = document.getElementById("fr" + i);
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
        feld.placeholder = localStorage.getItem(feld.id);
        feld.value = "";
      }
    }
    //
    //
    //if (en1.value.length > 1) {
    //  localStorage.setItem("en1", en1.value);
    //  en1.placeholder = localStorage.getItem("en1");
    //  en1.value = "";
    //}
  }
}
function reset() {
  if (confirm("Alle Daten werden gelöscht!") == true) {
    localStorage.setItem("fertig", "false");
    location.reload();
  }
}

function removeAll() {
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

  function remove(feld) {
    localStorage.setItem(feld.id, "");
    feld.placeholder = "";
  }
}

function remove(feld) {
  localStorage.setItem(feld.id, "");
  feld.placeholder = "";
}
