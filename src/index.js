const selectedLanguage = localStorage.getItem('lang');

if (!selectedLanguage) {
  localStorage.setItem('lang', 'en');
}

const wrapper = document.createElement('div');
const title = document.createElement('p');
const textArea = document.createElement('textarea');
const keyboard = document.createElement('div');
const description = document.createElement('p');
const contact = document.createElement('p');

// Назначение аттрибутов
wrapper.classList.add('wrapper');
title.classList.add('title');
textArea.classList.add('body-texearea', 'textarea');
textArea.id = 'textarea';
textArea.rows = 50;
textArea.cols = 5;
textArea.setAttribute('autofocus', '');
keyboard.classList.add('body-keyboard', 'keyboard');
description.classList.add('description');
contact.classList.add('contact');

// Создание рядов клавиатуры
const row1 = document.createElement('div');
const row2 = document.createElement('div');
const row3 = document.createElement('div');
const row4 = document.createElement('div');
const row5 = document.createElement('div');

// Назначение классов рядам клавиатуры
row1.classList.add('keyboard-row', 'row', 'row1');
row2.classList.add('keyboard-row', 'row', 'row2');
row3.classList.add('keyboard-row', 'row', 'row3');
row4.classList.add('keyboard-row', 'row', 'row4');
row5.classList.add('keyboard-row', 'row', 'row5');

// Добавление в документ созданной структуры
document.body.append(wrapper);
wrapper.append(title, textArea, keyboard, description, contact);
title.textContent = 'RSS Виртуальная клавиатура';
keyboard.append(row1, row2, row3, row4, row5);
description.innerText = 'Use key "ALT" to switch input language \nCheck with the English keyboard layout in the system \nMade in Mac OS 💻';
contact.innerText = 'Contact with me please, my discord: KirillKolchanov#2036 \nI would like to correct the mistakes ☺️';

const lowerEnglishArr = [['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
  ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del'],
  ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter'],
  ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '↑', 'Shift'],
  ['Ctrl', 'CMD', 'Alt', ' ', 'Alt', '←', '↓', '→', 'Ctrl']];

const upperEnglishArr = [['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace'],
  ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Del'],
  ['CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter'],
  ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '↑', 'Shift'],
  ['Ctrl', 'CMD', 'Alt', ' ', 'Alt', '←', '↓', '→', 'Ctrl']];

const capsEnglishArr = [['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
  ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'Del'],
  ['CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter'],
  ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '↑', 'Shift'],
  ['Ctrl', 'CMD', 'Alt', ' ', 'Alt', '←', '↓', '→', 'Ctrl']];

const shiftCapsEnglishArr = [['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace'],
  ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '{', '}', '|', 'Del'],
  ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ':', '"', 'Enter'],
  ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '<', '>', '?', '↑', 'Shift'],
  ['Ctrl', 'CMD', 'Alt', ' ', 'Alt', '←', '↓', '→', 'Ctrl']];

const lowerRussianArr = [['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
  ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del'],
  ['CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'],
  ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '↑', 'Shift'],
  ['Ctrl', 'CMD', 'Alt', ' ', 'Alt', '←', '↓', '→', 'Ctrl']];

const upperRussianArr = [['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace'],
  ['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'Del'],
  ['CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter'],
  ['Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '↑', 'Shift'],
  ['Ctrl', 'CMD', 'Alt', ' ', 'Alt', '←', '↓', '→', 'Ctrl']];

const capsRussianArr = [['Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
  ['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\', 'Del'],
  ['CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter'],
  ['Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', '↑', 'Shift'],
  ['Ctrl', 'CMD', 'Alt', ' ', 'Alt', '←', '↓', '→', 'Ctrl']];

// const shiftCapsRussianArr
// = [['ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace'],
//   ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '/', 'Del'],
//   ['CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'],
//   ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', ',', '↑', 'Shift'],
//   ['Ctrl', 'CMD', 'Alt', ' ', 'Alt', '←', '↓', '→', 'Ctrl']];

// Функция для создания клавиш для поределенного ряда клавиатуры
function addKeys(keysInRows, whichRow, whichArr) {
  for (let i = 0; i < keysInRows; i++) {
    const key = document.createElement('div');
    key.classList.add('keyboard-key', 'key');

    // добавление англ раскладки (обертка)
    const keyEng = document.createElement('span');
    keyEng.classList.add('eng');

    // Добавление маленькой англ раскладки
    const caseDown = document.createElement('span');
    caseDown.classList.add('caseDown');
    caseDown.textContent = lowerEnglishArr[whichArr][i];

    // Добавление большой англ раскладки
    const caseUp = document.createElement('span');
    caseUp.classList.add('caseUp', 'hidden');
    caseUp.textContent = upperEnglishArr[whichArr][i];

    // Добавление капслочной англ раскладки
    const caps = document.createElement('span');
    caps.classList.add('caps', 'hidden');
    caps.textContent = capsEnglishArr[whichArr][i];

    // Добавление шифт-капслочной англ раскладки
    const shiftCaps = document.createElement('span');
    shiftCaps.classList.add('shiftCaps', 'hidden');
    shiftCaps.textContent = shiftCapsEnglishArr[whichArr][i];

    // добавление русс раскладки (обертка)
    const keyRu = document.createElement('span');
    keyRu.classList.add('ru', 'hidden');

    // Добавление маленькой русс раскладки
    const caseRuDown = document.createElement('span');
    caseRuDown.classList.add('caseDown');
    caseRuDown.textContent = lowerRussianArr[whichArr][i];

    // Добавление большой русс раскладки
    const caseRuUp = document.createElement('span');
    caseRuUp.classList.add('caseUp', 'hidden');
    caseRuUp.textContent = upperRussianArr[whichArr][i];

    // Добавление капслочной англ раскладки
    const capsRu = document.createElement('span');
    capsRu.classList.add('caps', 'hidden');
    capsRu.textContent = capsRussianArr[whichArr][i];

    // Добавление шифт-капслочной англ раскладки
    const ShiftCapsRu = document.createElement('span');
    ShiftCapsRu.classList.add('shiftCaps', 'hidden');
    ShiftCapsRu.textContent = capsRussianArr[whichArr][i];

    keyEng.append(caseDown, caseUp, caps, shiftCaps);

    keyRu.append(caseRuDown, caseRuUp, capsRu, ShiftCapsRu);

    key.append(keyEng, keyRu);
    whichRow.append(key);
  }
}

addKeys(14, row1, 0);
addKeys(15, row2, 1);
addKeys(13, row3, 2);
addKeys(13, row4, 3);
addKeys(9, row5, 4);

const keysDown = document.querySelectorAll('.caseDown');
const keysUp = document.querySelectorAll('.caseUp');
const keysCaps = document.querySelectorAll('.caps');

const keys = document.querySelectorAll('.key');
const engKeys = document.querySelectorAll('.eng');
const ruKeys = document.querySelectorAll('.ru');

const caps = document.querySelectorAll('.caps');
const shiftCaps = document.querySelectorAll('.shiftCaps');

if (localStorage.getItem('lang') === 'en') {
  engKeys.forEach((e) => e.classList.remove('hidden'));
  ruKeys.forEach((e) => e.classList.add('hidden'));
} else {
  engKeys.forEach((e) => e.classList.add('hidden'));
  ruKeys.forEach((e) => e.classList.remove('hidden'));
}

// Обработка нажатий мышкой на маленькие англ буквы
for (let i = 0; i < keysDown.length; i++) {
  const key = keysDown[i];
  key.addEventListener('click', (event) => {
    if (event.target.textContent === 'Tab') {
      textArea.value += '    ';
      return null;
    }
    if (event.target.textContent === 'Enter') {
      textArea.value += '\n';
      return null;
    }
    if (event.target.textContent === 'Backspace') {
      textArea.value = textArea.value.slice(0, -1);
      return null;
    }
    if (event.target.textContent === 'Shift') {
      return null;
    }
    if (event.target.textContent === 'Ctrl') {
      return null;
    }
    if (event.target.textContent === 'Del') {
      return null;
    }
    if (event.target.textContent === 'CMD') {
      return null;
    }
    // Переключение языка
    if (event.target.textContent === 'Alt') {
      engKeys.forEach((e) => e.classList.toggle('hidden'));
      ruKeys.forEach((e) => e.classList.toggle('hidden'));
      return null;
    }

    if (event.target.textContent === 'CapsLock') {
      row3.firstChild.classList.add('key-active');
      for (let j = 0; j < keysCaps.length; j++) {
        const keyCaps = keysCaps[j];
        keyCaps.classList.remove('hidden');
      }
      for (let k = 0; k < keysDown.length; k++) {
        const keyDown = keysDown[k];
        keyDown.classList.add('hidden');
      }
      return null;
    }
    textArea.value += event.target.textContent;
    return null;
  });
}

// Обработка нажатий мышкой на большие англ буквы
for (let i = 0; i < keysUp.length; i++) {
  const key = keysUp[i];
  key.addEventListener('click', (event) => {
    if (event.target.textContent === 'Tab') {
      textArea.value += '    ';
      return null;
    }
    if (event.target.textContent === 'Backspace') {
      textArea.value = textArea.value.slice(0, -1);
      return null;
    }
    if (event.target.textContent === 'Shift') {
      return null;
    }
    if (event.target.textContent === 'Ctrl') {
      return null;
    }
    if (event.target.textContent === 'CMD') {
      return null;
    }
    // Переключение языка
    if (event.target.textContent === 'Alt') {
      engKeys.forEach((e) => e.classList.toggle('hidden'));
      ruKeys.forEach((e) => e.classList.toggle('hidden'));
      return null;
    }
    if (event.target.textContent === 'Del') {
      return null;
    }
    if (event.target.textContent === 'Enter') {
      row3.lastChild.classList.add('key-active');
      textArea.value += '\n';
      return null;
    }
    if (event.target.textContent === 'CapsLock') {
      row3.firstChild.classList.add('key-active');
      for (let j = 0; j < keysCaps.length; j++) {
        const keyCaps = keysCaps[j];
        keyCaps.classList.remove('hidden');
      }
      for (let k = 0; k < keysDown.length; k++) {
        const keyDown = keysDown[k];
        keyDown.classList.add('hidden');
      }
      return null;
    }
    textArea.value += event.target.textContent;
    return null;
  });
}

// Обработка нажатий мышкой на капсульные англ буквы
for (let i = 0; i < keysCaps.length; i++) {
  const key = keysCaps[i];
  key.addEventListener('click', (event) => {
    if (event.target.textContent === 'Tab') {
      textArea.value += '    ';
      return null;
    }
    if (event.target.textContent === 'Backspace') {
      textArea.value = textArea.value.slice(0, -1);
      return null;
    }
    if (event.target.textContent === 'Shift') {
      return null;
    }
    if (event.target.textContent === 'Ctrl') {
      return null;
    }
    // Переключение языка
    if (event.target.textContent === 'Alt') {
      engKeys.forEach((e) => e.classList.toggle('hidden'));
      ruKeys.forEach((e) => e.classList.toggle('hidden'));
      return null;
    }
    if (event.target.textContent === 'CapsLock') {
      row3.firstChild.classList.remove('key-active');
      for (let j = 0; j < keysCaps.length; j++) {
        const keyCaps = keysCaps[j];
        keyCaps.classList.add('hidden');
      }
      for (let k = 0; k < keysDown.length; k++) {
        const keyDown = keysDown[k];
        keyDown.classList.remove('hidden');
      }
      return null;
    }
    textArea.value += event.target.textContent;
    return null;
  });
}

// Обработка нажатий мышкой на кнопки "Shift"
row4.firstChild.addEventListener('mousedown', () => {
  row4.firstChild.classList.add('key-active');
  for (let j = 0; j < keysDown.length; j++) {
    const keyDown = keysDown[j];
    keyDown.classList.add('hidden');
  }
  for (let k = 0; k < keysUp.length; k++) {
    const keyUp = keysUp[k];
    keyUp.classList.remove('hidden');
  }
});
row4.firstChild.addEventListener('mouseup', () => {
  for (let j = 0; j < keysDown.length; j++) {
    const keyDown = keysDown[j];
    keyDown.classList.remove('hidden');
  }
  for (let k = 0; k < keysUp.length; k++) {
    const keyUp = keysUp[k];
    keyUp.classList.add('hidden');
  }
});
row4.lastChild.addEventListener('mousedown', () => {
  row4.lastChild.classList.add('key-active');
  for (let j = 0; j < keysDown.length; j++) {
    const keyDown = keysDown[j];
    keyDown.classList.add('hidden');
  }
  for (let k = 0; k < keysUp.length; k++) {
    const keyUp = keysUp[k];
    keyUp.classList.remove('hidden');
  }
});
row4.lastChild.addEventListener('mouseup', () => {
  for (let j = 0; j < keysDown.length; j++) {
    const keyDown = keysDown[j];
    keyDown.classList.remove('hidden');
  }
  for (let k = 0; k < keysUp.length; k++) {
    const keyUp = keysUp[k];
    keyUp.classList.add('hidden');
  }
});

// Добавление hover и active эфектов при наведении и нажатий мышкой на клавиши вирт клавиатуры
for (let i = 0; i < keys.length; i++) {
  const key = keys[i];
  key.addEventListener('mouseover', () => {
    key.classList.add('key-hover');
  });
  key.addEventListener('mouseout', () => {
    key.classList.remove('key-hover');

    if (key.firstChild.firstChild.textContent === 'CapsLock') {
      return key.classList.remove('key-hover');
    }
    if (key.firstChild.firstChild.textContent === 'Shift') {
      return null;
    }

    return key.classList.remove('key-active');
  });
  key.addEventListener('mousedown', () => {
    if (key.firstChild.firstChild.textContent === 'CapsLock') {
      return;
    }
    if (key.firstChild.firstChild.textContent === 'Shift') {
      return;
    }
    key.classList.add('key-active');
  });
  key.addEventListener('mouseup', () => {
    if (key.firstChild.firstChild.textContent === 'CapsLock') {
      return;
    }
    if (key.firstChild.firstChild.textContent === 'CapsLock') {
      return;
    }
    key.classList.remove('key-active');
  });
}

// Обработка нажатий клавиш на физической клавиатуре
document.addEventListener('keydown', (event) => {
  event.preventDefault();

  // Переключение языка
  if (event.key === 'Alt') {
    if (localStorage.getItem('lang') === 'en') {
      engKeys.forEach((e) => e.classList.add('hidden'));
      ruKeys.forEach((e) => e.classList.remove('hidden'));
      localStorage.setItem('lang', 'ru');
    } else {
      engKeys.forEach((e) => e.classList.remove('hidden'));
      ruKeys.forEach((e) => e.classList.add('hidden'));
      localStorage.setItem('lang', 'en');
    }
  }

  if (event.key === 'CapsLock') {
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      key.firstChild.firstChild.classList.toggle('hidden');
      key.firstChild.childNodes[2].classList.toggle('hidden');

      key.lastChild.firstChild.classList.toggle('hidden');
      key.lastChild.childNodes[2].classList.toggle('hidden');
    }
    row3.firstChild.classList.toggle('key-active');
    return;
  }

  if (event.key === ' ') {
    row5.childNodes[3].classList.add('key-active');
    textArea.value += ' ';
    return;
  }

  if (event.key === 'Delete') {
    row2.lastChild.classList.add('key-active');
    return;
  }

  if (event.key === 'Meta') {
    row5.childNodes[1].classList.add('key-active');
    return;
  }

  if (event.key === 'Alt') {
    row5.childNodes[2].classList.add('key-active');
    row5.childNodes[4].classList.add('key-active');
    return;
  }

  if (event.key === 'Control') {
    row5.firstChild.classList.add('key-active');
    row5.lastChild.classList.add('key-active');
    return;
  }

  if (event.key === 'Shift') {
    if (!row3.firstChild.firstChild.childNodes[2].classList.contains('hidden')) {
      // keysUp.forEach(e => e.classList.add('hidden'));
      keysDown.forEach((e) => e.classList.add('hidden'));
      caps.forEach((e) => e.classList.add('hidden'));
      for (let k = 0; k < shiftCaps.length; k++) {
        // console.log('Here');
        const key = shiftCaps[k];
        key.classList.remove('hidden');
      }
      return;
    }
    for (let i = 0; i < keysDown.length; i++) {
      const key = keysDown[i];
      row4.firstChild.classList.add('key-active');
      row4.lastChild.classList.add('key-active');
      key.classList.add('hidden');
    }
    for (let j = 0; j < keysUp.length; j++) {
      const keyUp = keysUp[j];
      keyUp.classList.remove('hidden');
    }
    return;
  }

  if (event.key === 'Tab') {
    event.preventDefault();
    row2.firstChild.classList.add('key-active');
    textArea.value += '    ';
    return;
  }

  if (event.key === 'Backspace') {
    row1.lastChild.classList.add('key-active');
    textArea.value = textArea.value.slice(0, -1);
    return;
  }

  if (event.key === 'ArrowUp') {
    row4.childNodes[11].classList.add('key-active');
    textArea.value += row4.childNodes[11].firstChild.firstChild.textContent;
    return;
  }

  if (event.key === 'ArrowDown') {
    row5.childNodes[6].classList.add('key-active');
    textArea.value += row5.childNodes[6].firstChild.firstChild.textContent;
    return;
  }

  if (event.key === 'ArrowLeft') {
    row5.childNodes[5].classList.add('key-active');
    textArea.value += row5.childNodes[5].firstChild.firstChild.textContent;
    return;
  }

  if (event.key === 'ArrowRight') {
    row5.childNodes[7].classList.add('key-active');
    textArea.value += row5.childNodes[7].firstChild.firstChild.textContent;
    return;
  }

  if (event.key === 'Enter') {
    row3.lastChild.classList.add('key-active');
    textArea.value += '\n';
    return;
  }

  // Реализация отзывчивости виртуальной клавы на физическую
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (event.key === key.firstChild.firstChild.textContent) {
      key.classList.add('key-active');
    }
    if (event.key === key.firstChild.childNodes[1].textContent) {
      key.classList.add('key-active');
    }
  }

  // Вставка англ больших и маленьких букв
  if (keys[0].lastChild.classList.contains('hidden')) {
    textArea.value += event.key;
  }

  // Вставка русс больших и маленьких букв
  if (keys[0].firstChild.classList.contains('hidden')) {
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      // Вставка маленьких русс букв
      if (keys[0].lastChild.childNodes[1].classList.contains('hidden') && keys[0].lastChild.childNodes[2].classList.contains('hidden')) {
        if (key.firstChild.firstChild.textContent === event.key) {
          textArea.value += key.lastChild.firstChild.textContent;
        }
      }

      // Вставка больших русс букв
      if (keys[0].lastChild.firstChild.classList.contains('hidden') && keys[0].lastChild.childNodes[2].classList.contains('hidden')) {
        if (key.firstChild.childNodes[1].textContent === event.key
          || key.firstChild.childNodes[0].textContent === event.key) {
          textArea.value += key.lastChild.childNodes[1].textContent;
        }
      }

      // Вставка капс русс букв
      if (keys[0].lastChild.firstChild.classList.contains('hidden') && keys[0].lastChild.childNodes[1].classList.contains('hidden')) {
        if (key.firstChild.firstChild.textContent === event.key
          || key.firstChild.childNodes[2].textContent === event.key) {
          textArea.value += key.lastChild.childNodes[2].textContent;
        }
      }
    }
  }
});

// Обработка отпусканий клавиш на физической клавиатуре
document.addEventListener('keyup', (event) => {
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (event.key === key.firstChild.firstChild.textContent) {
      key.classList.remove('key-active');
    }
    if (event.key === key.firstChild.childNodes[1].textContent) {
      key.classList.remove('key-active');
    }

    if (event.key === 'Delete') {
      row2.lastChild.classList.remove('key-active');
      return;
    }

    if (event.key === 'Control') {
      row5.firstChild.classList.remove('key-active');
      row5.lastChild.classList.remove('key-active');
      return;
    }

    // if (event.key === 'CapsLock') {
    //   for (let j = 0; j < keys.length; j++) {
    //     const keyCaps = keys[j];
    //     keyCaps.firstChild.firstChild.classList.remove('hidden');
    //     keyCaps.firstChild.childNodes[2].classList.add('hidden');

    //     keyCaps.lastChild.firstChild.classList.remove('hidden');
    //     keyCaps.lastChild.childNodes[2].classList.add('hidden');
    //   }
    //   // row3.firstChild.classList.remove('key-active');
    //   return;
    // }

    if (event.key === 'Meta') {
      row5.childNodes[1].classList.remove('key-active');
    }

    if (event.key === 'ArrowUp') {
      row4.childNodes[11].classList.remove('key-active');
    }
    if (event.key === 'ArrowDown') {
      row5.childNodes[6].classList.remove('key-active');
    }
    if (event.key === 'ArrowLeft') {
      row5.childNodes[5].classList.remove('key-active');
    }
    if (event.key === 'ArrowRight') {
      row5.childNodes[7].classList.remove('key-active');
    }

    if (event.key === ' ') {
      row5.childNodes[3].classList.remove('key-active');
    }

    if (event.key === 'Shift') {
      if (!row3.firstChild.firstChild.childNodes[3].classList.contains('hidden')) {
        caps.forEach((e) => e.classList.remove('hidden'));
        for (let k = 0; k < shiftCaps.length; k++) {
          const keyShiftCaps = shiftCaps[k];
          keyShiftCaps.classList.add('hidden');
        }
        return;
      }
      row4.firstChild.classList.remove('key-active');
      row4.lastChild.classList.remove('key-active');
      for (let j = 0; j < keysDown.length; j++) {
        const keyDown = keysDown[j];
        keyDown.classList.remove('hidden');
      }
      for (let k = 0; k < keysUp.length; k++) {
        const keyUp = keysUp[k];
        keyUp.classList.add('hidden');
      }
      return;
    }
  }
});
