const wrapper = document.createElement("div");
const title = document.createElement("p");
const textArea = document.createElement("textarea");
const keyboard = document.createElement("div");

wrapper.classList.add("wrapper");
title.classList.add("title");
textArea.classList.add("body-texearea", "textarea");
textArea.id = "textarea";
textArea.rows = 50;
textArea.cols = 5;
textArea.setAttribute("autofocus", "");
keyboard.classList.add("body-keyboard", "keyboard");

const row1 = document.createElement("div")
const row2 = document.createElement("div");
const row3 = document.createElement("div");
const row4 = document.createElement("div");
const row5 = document.createElement("div");

row1.classList.add("keyboard-row", "row", "row1");
row2.classList.add("keyboard-row", "row", "row2");
row3.classList.add("keyboard-row", "row", "row3");
row4.classList.add("keyboard-row", "row", "row4");
row5.classList.add("keyboard-row", "row", "row5");

document.body.append(wrapper);
wrapper.append(title,textArea,keyboard);
title.textContent = "RSS Виртуальная клавиатура";
keyboard.append(row1, row2, row3, row4, row5);

lowerEnglishArr = [['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
     ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del'],
      ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter'],
       ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '↑', 'Shift'],
        ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '←', '↓', '→', 'Ctrl']];

upperEnglishArr = [['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace'],
      ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'Y', 'I', 'O', 'P', '{', '}', '|', 'Del'],
       ['CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter'],
        ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '↑', 'Shift'],
         ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '←', '↓', '→', 'Ctrl']];

capsEnglishArr = [['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
      ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'Y', 'I', 'O', 'P', '[', ']', '\\', 'Del'],
       ['CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\\', 'Enter'],
        ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '↑', 'Shift'],
         ['Ctrl', 'Win','Alt', ' ', 'Alt', '←', '↓', '→','Ctrl']];

function addKeys (keysInRows, whichRow, whichArr) {
  for (let i = 0; i < keysInRows; i++) {
    let key = document.createElement("div");
    key.classList.add("keyboard-key", "key");

    //добавление англ раскладки (обертка)
    let keyEng = document.createElement("span");
    keyEng.classList.add("eng");

    //Добавление маленькой англ раскладки
    let caseDown = document.createElement("span");
    caseDown.classList.add("caseDown");
    caseDown.textContent = lowerEnglishArr[whichArr][i];

    //Добавление большой англ раскладки
    let caseUp = document.createElement("span");
    caseUp.classList.add("caseUp", "hidden");
    caseUp.textContent = upperEnglishArr[whichArr][i];

    //Добавление капслочной англ раскладки
    let caps = document.createElement("span");
    caps.classList.add("caps", "hidden");
    caps.textContent = capsEnglishArr[whichArr][i];

    keyEng.append(caseDown);
    keyEng.append(caseUp);
    keyEng.append(caps);
    key.append(keyEng);
    whichRow.append(key);
  }
}

  addKeys(14, row1, 0);
  addKeys(15, row2, 1);
  addKeys(13, row3, 2);
  addKeys(13, row4, 3);
  addKeys(9, row5, 4);

const keysDown = document.querySelectorAll(".caseDown");
const keysUp = document.querySelectorAll(".caseUp");
const keysCaps = document.querySelectorAll(".caps");

for (let key of keysDown) {
  key.addEventListener("click", function(event) {
    if (event.target.textContent === 'Tab') {
      return textArea.value += "    ";
    }
    if (event.target.textContent === 'Backspace') {
      return textArea.value = textArea.value.slice(0, -1);
    }
    if (event.target.textContent === 'Shift') {
      return;
    }
    if (event.target.textContent === 'Ctrl') {
      return;
    }
    if (event.target.textContent === 'Win') {
      return;
    }
    if (event.target.textContent === 'Alt') {
      return;
    }
    if (event.target.textContent === 'CapsLock') {
      row3.firstChild.classList.add("key-active");
      for (let key of keysCaps) {
        key.classList.remove("hidden");
      }
      for (let key of keysDown) {
        key.classList.add("hidden");
      }
      return;
    }
    return textArea.value += event.target.textContent;
  })
}

for (let key of keysUp) {
  key.addEventListener("click", function(event) {
    if (event.target.textContent === 'Tab') {
      return textArea.value += "    ";
    }
    if (event.target.textContent === 'Backspace') {
      return textArea.value = textArea.value.slice(0, -1);
    }
    if (event.target.textContent === 'Shift') {
      return;
    }
    if (event.target.textContent === 'Ctrl') {
      return;
    }
    if (event.target.textContent === 'Win') {
      return;
    }
    if (event.target.textContent === 'Alt') {
      return;
    }
    if (event.target.textContent === 'CapsLock') {
      row3.firstChild.classList.add("key-active");
      for (let key of keysCaps) {
        key.classList.remove("hidden");
      }
      for (let key of keysDown) {
        key.classList.add("hidden");
      }
      return;
    }
    return textArea.value += event.target.textContent;
  })
}

for (let key of keysCaps) {
  key.addEventListener("click", function(event) {
    if (event.target.textContent === 'Tab') {
      return textArea.value += "    ";
    }
    if (event.target.textContent === 'Backspace') {
      return textArea.value = textArea.value.slice(0, -1);
    }
    if (event.target.textContent === 'Shift') {
      return;
    }
    if (event.target.textContent === 'Ctrl') {
      return;
    }
    if (event.target.textContent === 'Win') {
      return;
    }
    if (event.target.textContent === 'Alt') {
      return;
    }
    if (event.target.textContent === 'CapsLock') {
      row3.firstChild.classList.remove("key-active");
      for (let key of keysCaps) {
        key.classList.add("hidden");
      }
      for (let key of keysDown) {
        key.classList.remove("hidden");
      }
      return;
    }
    return textArea.value += event.target.textContent;
  })
}

row4.firstChild.addEventListener("mousedown", function(event) {
  row4.firstChild.classList.add("key-active");
  for (let key of keysDown) {
    key.classList.add("hidden");
  }
  for (let key of keysUp) {
    key.classList.remove("hidden");
  }
})
row4.firstChild.addEventListener("mouseup", function(event) {
  for (let key of keysDown) {
    key.classList.remove("hidden");
  }
  for (let key of keysUp) {
    key.classList.add("hidden");
  }
})
row4.lastChild.addEventListener("mousedown", function(event) {
  row4.lastChild.classList.add("key-active");
  for (let key of keysDown) {
    key.classList.add("hidden");
  }
  for (let key of keysUp) {
    key.classList.remove("hidden");
  }
})
row4.lastChild.addEventListener("mouseup", function(event) {
  for (let key of keysDown) {
    key.classList.remove("hidden");
  }
  for (let key of keysUp) {
    key.classList.add("hidden");
  }
})

const keys = document.querySelectorAll(".key");

for (let key of keys) {
  key.addEventListener("mouseover", function(event) {
    key.classList.add("key-hover");
  })
  key.addEventListener("mouseout", function(event) {
    key.classList.remove("key-hover");

    if (key.firstChild.firstChild.textContent === 'CapsLock') {
      return key.classList.remove("key-hover");
    }
    if (key.firstChild.firstChild.textContent === 'Shift') {
      return;
    }

    key.classList.remove("key-active");
  })
  key.addEventListener("mousedown", function(event) {
    if (key.firstChild.firstChild.textContent === 'CapsLock') {
      return;
    }
    if (key.firstChild.firstChild.textContent === 'Shift') {
      return;
    }
    key.classList.add("key-active");
  })
  key.addEventListener("mouseup", function(event) {

    if (key.firstChild.firstChild.textContent === 'CapsLock') {
      return;
    }
    if (key.firstChild.firstChild.textContent === 'CapsLock') {
      return;
    }
    key.classList.remove("key-active");
  })
}

addEventListener("keydown", function(event) {
  for (let key of keys) {
    if (event.key === "Tab") {
      event.preventDefault();
      textArea.value += "    ";
      return;
    }
    if (event.key === key.firstChild.firstChild.textContent) {
      key.classList.add("key-active");
    }
  }
  textArea.value += event.key;
})

addEventListener("keyup", function(event) {
  for (let key of keys) {
    if (event.key === key.firstChild.firstChild.textContent) {
      key.classList.remove("key-active");
    }
  }
})