let count = 0;
let countEl = document.getElementById("count-el");
let previousCount = document.getElementById("previous-count");

function increment() {
  console.log(count);
  countEl.innerHTML = count++;
}

increment();

function save() {
  console.log(countEl.innerHTML);
  previousCount.innerHTML += countEl.innerHTML + " ";
  countEl.innerHTML = 0;
  count = 0;
  // increment();
}

save();
