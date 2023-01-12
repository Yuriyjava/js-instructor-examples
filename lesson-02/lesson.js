{// # Модуль 1. Заняття 2. Розгалуження. Цикли

  // ## Example 1 - Введення користувача та розгалуження

  // Використовуючи конструкцію if..else та prompt, напиши код, який питатиме:
  // `"Яка офіційна назва JavaScript?"`. Якщо користувач вводить
  // `ECMAScript`, то показуй alert з рядком `"Правильно!"`, в іншому випадку -
  // `"Не знаєте? ECMAScript!"`

  let name = prompt("Яка офіційна назва JavaScript?");
  if (name === "ECMAScript") {
    alert("Yes")
  } else {
    alert("Не знаєте? ECMAScript!")
  }



  // ## Example 2 - Відображення часу (if...else)

  // Напиши скрипт для відображення годин та хвилин у консолі браузера у вигляді рядка
  // формату `"14 г. 26 хв."`. Якщо значення змінної `minutes` дорівнює `0`, то
  // виводь рядок `"14 г."`, без хвилин.

  // ```js
  const hours1 = 14;
  const minutes = 26;
  let timestring = `${hours1} г.`;

  if (minutes > 0) {
    timestring += `${minutes} хв.`;
  } 
  console.log(timestring);
  // ```

  // ## Example 3 - Розгалуження

  // Напиши скрипт, який виводить у консоль рядок `"Це позитивне число"`,
  // якщо у prompt користувач ввів число більше нуля. Якщо було введено нуль, виводь
  // в консоль рядок `"Це нуль"`. Якщо передали від'ємне число, у консолі
  // повинен бути рядок `"Це негативне число"`.

  // ```js
  const userInput = prompt('Введіть число');
  const number = Number(userInput);

  if(isNaN(number)){
    alert("not a number")
  } else {
    if(number > 0){
      alert("Це позитивне число")
    } else if(number === 0){
      alert("Це нуль")
    } else{
      alert("Це негативне число")
    }
  }
  // ```

  // ## Example 4 - Вкладені розгалуження

  // Напиши скрипт, який порівнює числа у змінних `a` та `b`. Якщо обидва
  // значення більше `100`, то виведи в консоль максимальне з них. В протилежному
  // випадку у консолі повинна бути сума значення `b` та числа 512.

  // ```js
  const a = 120;
  const b = 180;

  if(a > 100 && b > 100 ){
    console.log(a > b ? a : b);
  } else {
    console.log(b + 512);
  }

  // ```

  // ## Example 5 - Форматування посилання (endsWith)

  // Напиши скрипт який перевіряє чи закінчується значення змінної `link`
  // символом `/`. Якщо ні, додай до кінця значення `link` цей символ. Використовуй
  // конструкцію `if...else`.

  // ```js
  let link1 = 'https://my-site.com/about';
  // Пиши код нижче за цей рядок
  if (!link1.endsWith('/')){
    link1 += '/';
  } 
  // Пиши код вище за цей рядок
  console.log(link1);
  // ```

  // ## Example 6 - Форматування посилання (includes та логічне «І»)

  // Напиши скрипт який перевіряє чи закінчується значення змінної `link`
  // символом `/`. Якщо ні, додай до кінця значення `link` цей символ, але тільки в
  // тому випадку, якщо в `link` є підрядок `"my-site"`. Використовуй конструкцію
  // `if...else`.

  // ```js
  let link2 = 'https://somesite.com/about';
  // Пиши код нижче за цей рядок
  if (!link2.endsWith('/') && link2.includes("my-site") ){
    link2 = link2 + '/';
  } 
  // Пиши код вище за цей рядок
  console.log(link2);
  // ```

  // ## Example 7 - Форматування посилання (тернарний оператор)

  // Виконай рефакторинг коду задачі номер 4, використовуючи тернарний оператор.

  // ```js
  let link = 'https://somesite.com/about';
  // if (link.includes('my-site') && !link.endsWith('/')) {
  //   link += '/';
  // }
  console.log(link.includes('my-site') && !link.endsWith('/') ? link + '/' : link );
  // console.log(link);
  // ```

  // ## Example 8 - if...else та логічні оператори

  // Напиши скрипт який виводитиме в консоль браузера рядок залежно від
  // значення змінної `hours`.

  // Якщо значення змінної `hours`:

  // - менше `17`, виводь рядок `"Pending"`
  // - більше або дорівнює `17` і менше або дорівнює 24, виводь рядок `"Expires"`
  // - більше `24` , виводь рядок `"Overdue"`

  // ```js
  const hours = 10;
  if(hours < 17){
    console.log("Pending");
   } else if(hours > 24 ){ 
    console.log("Overdue");
  } else {
    console.log("Expires");
  };


  // ```

  // ## Example 9 - Дедлайн здачі проекту (if...else)

  // Напиши скрипт для відображення часу дедлайну здачі проекту. Використовуй
  // конструкцію `if...else`.

  // - Якщо до дедлайну 0 днів - виведи рядок `"Сьогодні"`
  // - Якщо до дедлайну 1 день - виведи рядок `"Завтра"`
  // - Якщо до дедлайну 2 дні - виведи рядок `"Післязавтра"`
  // - Якщо до дедлайну 3+ днів - виведи рядок `"Дата у майбутньому"`

  // ```js
  const daysUntilDeadline1 = 5;
  if(daysUntilDeadline1 >= 3 ){
    console.log("Дата у майбутньому");
  } 
  else if(daysUntilDeadline1 === 2){
    console.log("Післязавтра");
  } 
  else if(daysUntilDeadline1 === 1){
    console.log("Завтра");
  }
  else if(daysUntilDeadline1 === 0){
    console.log("Сьогодні");
  }


  // Пиши код нижче за цей рядок
  // ```

  // ## Example 10 - Дедлайн здачі проекту (switch)

  // Виконай рефакторинг коду задачі номер 5 використовуючи `switch`.

  // ```js
  const daysUntilDeadline = 5;

  // if (daysUntilDeadline === 0) {
  //   console.log('Сьогодні');
  // } else if (daysUntilDeadline === 1) {
  //   console.log('Завтра');
  // } else if (daysUntilDeadline === 2) {
  //   console.log('Післязавтра');
  // } else {
  //   console.log('Дата у майбутньому');
  // }
  switch (daysUntilDeadline) {
    case 0:
    case 1:
      console.log('Завтра');
      break;
    case 2:
      console.log('Післязавтра');
      break;
    default:
      console.log('Дата у майбутньому');
      break;
  }

  // ```

  // ## Example 11 - Цикл for

  // Напиши цикл for, який виводить у консоль браузера числа за зростанням від `min`
  // до `max`, але тільки якщо число кратне `5`.

  // ```js
  const max = 100;
  const min = 20;
  for (let index = min; index <= max; index++) {
    if (index % 5 === 0) { 
      console.log(index)
    }
  }
  // for (let index = min; index <= max; index+=5) {
  //     console.log(index)
  // }
// ```

// ## Example 12 - Введення користувача та розгалуження

// Напиши скрипт, який питатиме логін за допомогою `prompt` та логувати
// результат у консоль браузера.

// - Якщо відвідувач вводить `"Адмін"`, то `prompt` запитує пароль
// - Якщо нічого не введено або натиснуто клавішу Esc - вивести рядок `"Скасовано"`
// - В іншому випадку вивести рядок `"Я вас не знаю"`

// Пароль перевіряти так:

// - Якщо введено пароль `"Я адмін"`, то вивести рядок `"Здрастуйте!"`
// - Інакше виводити рядок `"Невірний пароль"`

let login = prompt("login?");
let pass;
if(!login){
  console.log("Скасовано");
} else {
  if(login !== "Адмін"){
   console.log("Я вас не знаю");
  } else {
    pass = prompt("password ?");
    if(pass === "Я адмін"){
      console.log("Здрастуйте");
    } else {
      console.log("Невірний пароль");
    }
  }
}





