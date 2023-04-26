document.title = "COUNTER | APP";

const count = document.getElementById("count");

document.getElementById('error').style.color = 'red'

let counter = 0;

const increment = () => {
  if (counter >= 10) {
    counter = 10;
    error.textContent = "Counter cannot extend 10";
    count.style.color = 'red'
  } else {
    counter ++ ;
    count.textContent = counter;
    count.style.color = 'black'

  }
};

const decrement = () => {
  if (counter <= 0) {
    counter = 0;
    error.textContent = "Counter cannot extend 0";
    count.style.color = 'red'
  } else {
    counter --;
    count.textContent = counter;
    count.style.color = 'black'
  }
};

