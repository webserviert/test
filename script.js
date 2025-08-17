const foods = [
  { name: 'Apfel', calories: 52 },
  { name: 'Banane', calories: 89 },
  { name: 'Hamburger', calories: 354 },
  { name: 'Salat', calories: 33 }
];

const select = document.getElementById('foodSelect');
const addBtn = document.getElementById('addBtn');
const consumedList = document.getElementById('consumedList');
const totalEl = document.getElementById('totalCalories');

let total = 0;

foods.forEach(food => {
  const option = document.createElement('option');
  option.value = food.calories;
  option.textContent = `${food.name} (${food.calories} kcal)`;
  select.appendChild(option);
});

addBtn.addEventListener('click', () => {
  const selectedIndex = select.selectedIndex;
  if (selectedIndex < 0) {
    return;
  }
  const food = foods[selectedIndex];

  const li = document.createElement('li');
  li.textContent = `${food.name} - ${food.calories} kcal`;
  consumedList.appendChild(li);

  total += food.calories;
  totalEl.textContent = total;
});
