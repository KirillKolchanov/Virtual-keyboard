const wrapper = document.createElement("div");
const title = document.createElement("p");
const textArea = document.createElement("textarea");
const keyboard = document.createElement("div");

//Назначение аттрибутов
wrapper.classList.add("wrapper");
title.classList.add("title");
textArea.classList.add("body-texearea", "textarea");
textArea.id = "textarea";
textArea.rows = 50;
textArea.cols = 5;
textArea.setAttribute("autofocus", "");
keyboard.classList.add("body-keyboard", "keyboard");

//Создание рядов клавиатуры
const row1 = document.createElement("div")
const row2 = document.createElement("div");
const row3 = document.createElement("div");
const row4 = document.createElement("div");
const row5 = document.createElement("div");

//Назначение классов рядам клавиатуры
row1.classList.add("keyboard-row", "row", "row1");
row2.classList.add("keyboard-row", "row", "row2");
row3.classList.add("keyboard-row", "row", "row3");
row4.classList.add("keyboard-row", "row", "row4");
row5.classList.add("keyboard-row", "row", "row5");

//Добавление в документ созданной структуры
document.body.append(wrapper);
wrapper.append(title,textArea,keyboard);
title.textContent = "RSS Виртуальная клавиатура";
keyboard.append(row1, row2, row3, row4, row5);

lowerEnglishArr = [['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
     ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del'],
      ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter'],
       ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '↑', 'Shift'],
        ['Ctrl', 'CMD', 'Alt', ' ', 'Alt', '←', '↓', '→', 'Ctrl']];

upperEnglishArr = [['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace'],
      ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'Y', 'I', 'O', 'P', '{', '}', '|', 'Del'],
       ['CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter'],
        ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '↑', 'Shift'],
         ['Ctrl', 'CMD', 'Alt', ' ', 'Alt', '←', '↓', '→', 'Ctrl']];

capsEnglishArr = [['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
      ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'Y', 'I', 'O', 'P', '[', ']', '\\', 'Del'],
       ['CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\\', 'Enter'],
        ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '↑', 'Shift'],
         ['Ctrl', 'CMD','Alt', ' ', 'Alt', '←', '↓', '→','Ctrl']];

lowerRussianArr = [['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
      ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del'],
       ['CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', "э", 'Enter'],
        ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '↑', 'Shift'],
         ['Ctrl', 'CMD', 'Alt', ' ', 'Alt', '←', '↓', '→', 'Ctrl']];

upperRussianArr = [['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace'],
      ['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'Del'],
       ['CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter'],
        ['Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '↑', 'Shift'],
         ['Ctrl', 'CMD', 'Alt', ' ', 'Alt', '←', '↓', '→', 'Ctrl']];

//Функция для создания клавиш для поределенного ряда клавиатуры
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

    //добавление русс раскладки (обертка)
    let keyRu = document.createElement("span");
    keyRu.classList.add("ru", "hidden");

    //Добавление маленькой русс раскладки
    let caseRuDown = document.createElement("span");
    caseRuDown.classList.add("caseDown");
    caseRuDown.textContent = lowerRussianArr[whichArr][i];

    //Добавление большой русс раскладки
    let caseRuUp = document.createElement("span");
    caseRuUp.classList.add("caseUp", 'hidden');
    caseRuUp.textContent = upperRussianArr[whichArr][i];

    keyEng.append(caseDown);
    keyEng.append(caseUp);
    keyEng.append(caps);

    keyRu.append(caseRuDown);
    keyRu.append(caseRuUp);
    //keyRu.append(caps);

    key.append(keyEng);
    key.append(keyRu);
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

//Обработка нажатий мышкой на маленькие англ буквы
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

//Обработка нажатий мышкой на большие англ буквы
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

//Обработка нажатий мышкой на капсульные англ буквы
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

//Обработка нажатий мышкой на кнопки "Shift"
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

//Добавление hover и active эфектов при наведении и нажатий мышкой на клавиши вирт клавиатуры
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

const engKeys = document.querySelectorAll(".eng");
const ruKeys = document.querySelectorAll(".ru");

//Обработка нажатий клавиш на физической клавиатуре
addEventListener("keydown", function(event) {

  // Переключение языка
  if (event.key === "Alt") {
    engKeys.forEach(e => e.classList.toggle("hidden"))
    ruKeys.forEach(e => e.classList.toggle("hidden"))
  }

  for (let key of keys) {
    event.preventDefault();

    if (event.key === "Tab") {
      row2.firstChild.classList.add("key-active");
      textArea.value += "    ";
      return;
    }

    if (event.key === " ") {
      row5.childNodes[3].classList.add("key-active");
      textArea.value += " ";
      return;
    }

    if (event.key === "Delete") {
      row2.lastChild.classList.add("key-active");
      return;
    }

    if (event.key === "Meta" || event.key === "Windows") {
      row5.childNodes[1].classList.add("key-active");
      return;
    }

    if (event.key === "Alt") {
      row5.childNodes[2].classList.add("key-active");
      row5.childNodes[4].classList.add("key-active");
      return;
    }

    if (event.key === "Shift") {
      for (let key of keysDown) {
        row4.firstChild.classList.add("key-active");
        row4.lastChild.classList.add("key-active");
        key.classList.add("hidden");
      }
      for (let key of keysUp) {
      key.classList.remove("hidden");
      }
      return;
    }

    if (event.key === "Backspace") {
      row1.lastChild.classList.add("key-active");
      textArea.value = textArea.value.slice(0,-1);
      return;
    }

    if (event.key === "ArrowUp") {
      row4.childNodes[11].classList.add("key-active");
      return textArea.value += row4.childNodes[11].firstChild.firstChild.textContent;
    }

    if (event.key === "ArrowDown") {
      row5.childNodes[6].classList.add("key-active");
      return textArea.value += row5.childNodes[6].firstChild.firstChild.textContent;
    }

    if (event.key === "ArrowLeft") {
      row5.childNodes[5].classList.add("key-active");
      return textArea.value += row5.childNodes[5].firstChild.firstChild.textContent;
    }

    if (event.key === "ArrowRight") {
      row5.childNodes[7].classList.add("key-active");
      return textArea.value += row5.childNodes[7].firstChild.firstChild.textContent;
    }

    if (event.key === "Enter") {
      row3.lastChild.classList.add("key-active");
      return textArea.value += '\n';
    }

    if (event.key === key.firstChild.firstChild.textContent) {
      key.classList.add("key-active");
    }
    if (event.key === key.firstChild.childNodes[1].textContent) {
      key.classList.add("key-active");
    }
  }

  //Вставка англ больших и маленьких букв
  if (keys[0].lastChild.classList.contains("hidden")) {
    textArea.value += event.key;
  }

  //Вставка русс больших и маленьких букв
  if (keys[0].firstChild.classList.contains("hidden")) {
    for (let key of keys) {

      // Вставка маленьких русс букв
      if (key.firstChild.firstChild.textContent === event.key) {
        textArea.value += key.lastChild.firstChild.textContent;
      }

      // Вставка больших русс букв
      if (key.lastChild.firstChild.classList.contains('hidden')) {
        if (key.firstChild.childNodes[1].textContent === event.key) {
          textArea.value += key.lastChild.lastChild.textContent;
        }
      }
    }
  }

})

//Обработка отпусканий клавиш на физической клавиатуре
addEventListener("keyup", function(event) {
  for (let key of keys) {
    if (event.key === key.firstChild.firstChild.textContent) {
      key.classList.remove("key-active");
    }
    if (event.key === key.firstChild.childNodes[1].textContent) {
      key.classList.remove("key-active");
    }

    if (event.key === "Delete") {
      row2.lastChild.classList.remove("key-active");
      return;
    }

    if (event.key === "Meta" || event.key === "Windows") {
      row5.childNodes[1].classList.remove("key-active");
    }

    if (event.key === "ArrowUp") {
      row4.childNodes[11].classList.remove("key-active");
    }
    if (event.key === "ArrowDown") {
      row5.childNodes[6].classList.remove("key-active");
    }
    if (event.key === "ArrowLeft") {
      row5.childNodes[5].classList.remove("key-active");
    }
    if (event.key === "ArrowRight") {
      row5.childNodes[7].classList.remove("key-active");
    }

    if (event.key === " ") {
      row5.childNodes[3].classList.remove("key-active");
    }

    if (event.key === "Shift") {
      row4.firstChild.classList.remove("key-active");
      row4.lastChild.classList.remove("key-active");
      for (let key of keysDown) {
        key.classList.remove("hidden");
      }
      for (let key of keysUp) {
      key.classList.add("hidden");
      }
      return;
    }
  }
})