const selectBox = document.getElementById('fruits');

var fruits = ['リンゴ', 'バナナ', 'モモ'];

for (let i = 0; i < fruits.length; i++) {
    const opt = document.createElement('option');
    opt.setAttribute('value', fruits[i]);
    opt.textContent = fruits[i];
    selectBox.appendChild(opt);
}