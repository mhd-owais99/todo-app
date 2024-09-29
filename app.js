let input = document.getElementById('input');
let items = document.getElementById('list-item');
let alert = document.getElementById('alert');


const adder = () => {

    // ====CREATE LIST===
    let li = document.createElement('li');
    let textval = document.createTextNode(input.value);
    li.setAttribute('class', 'it-1');
    li.appendChild(textval);

    // =====LINE BREAK=====
    let br = document.createElement('br');
    li.appendChild(br)

    // =======DATE========
    let time = new Date().toLocaleTimeString();
    let curDate = new Date().toLocaleDateString();
    let date = `${time}  ${curDate}`;

    let span = document.createElement('span');
    let spanTxt = document.createTextNode(date);
    span.setAttribute('class', 'it-2')
    span.appendChild(spanTxt);
    li.appendChild(span)

    // ======DEL BUTTON=====
    let delBtn = document.createElement('button');
    let delTxt = document.createTextNode('Del')
    delBtn.setAttribute('class', 'it-4 btn btn-danger')
    delBtn.setAttribute('onclick', 'delBtn(this)')
    delBtn.appendChild(delTxt);
    li.appendChild(delBtn)
    // ======EDIT BUTTON====
    let editBtn = document.createElement('button');
    let editTxt = document.createTextNode('Edit')
    editBtn.setAttribute('class', 'it-3 btn btn-success')
    editBtn.setAttribute('onclick', 'editBtn(this)')
    editBtn.appendChild(editTxt);
    li.appendChild(editBtn)


    if (input.value == "") {
        alert.innerHTML = '*Enter Value*';
    } else {
        alert.innerHTML = '';
        items.appendChild(li);
    }

    input.value = '';
}

const delAll = () => {
    items.innerHTML = '';
}

const delBtn = (e) => {
    e.parentNode.remove();
}

const editBtn = (e) => {
    let editer = prompt("Edit Your Changes", e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = editer;
}