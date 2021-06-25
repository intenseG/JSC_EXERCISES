const fruitsElm = document.getElementById('fruits');

const xhr = new XMLHttpRequest();
xhr.open('GET', './data.json');
// xhr.open('GET', 'http://127.0.0.1:8080/data.json'); // URLで指定してもOK!!(ただし、localhostは使えない)
xhr.send();

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const json = xhr.responseText;
        const obj = JSON.parse(json);
        console.log(typeof obj.datas);

        for (let i = 0; i < obj.datas.length; i++) {
            if (obj.datas[i].category === 'fruit') {
                const liElm = document.createElement('li');
                liElm.setAttribute('value', obj.datas[i].name);
                liElm.textContent = obj.datas[i].name;
                fruitsElm.appendChild(liElm);
            }
        }
    }
}