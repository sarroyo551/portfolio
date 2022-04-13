//1.) Build a function that randomly generates a hex a decimal
function radColor() {
  let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
  let hex = [];
  const radNum = (n) => Math.round(Math.random() * n);
  const l = arr.length - 1;

  for (let i = 0; i < 6; i++) {
    let n = radNum(l);
    let char = arr[n];
    hex.push(char);
  }
  const color = '#' + hex.join('');

  console.log(color);
  return color;
}

const handleClick = (e) => {
  const hexColor = radColor();

  box.style.backgroundColor = hexColor;
  return "hello"
};

// 2.) use the document.querySelector method to grab the HTML element with the attribute "id" equal to "box" and assign a const variable
//ex: document.querySelector('.myClassName') || document.querySelector('#myId') etc.

const box = document.querySelector('#box');
box.addEventListener('click', handleClick);

// 4.) then use the  your variable again the access its .style.backgroundColor property to set it equal to radColor()

//EX: myHtmlElementVariable.style.backgroundColor = radColor()