const inputBox = document.getElementById('input-box')
const listContainer = document.getElementById('list-container');
function addTask() {
    if (inputBox.value === '') {
    }
    else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li)
        let button = document.createElement('button');
        button.innerHTML = 'delete';
        li.appendChild(button);
    }
    inputBox.value = '';
}
listContainer.addEventListener('click', function (p) {
    if (p.target.tagName === 'LI') {
        p.target.classList.toggle('checked');
    }
    else if (p.target.tagName === 'BUTTON') {
        p.target.parentElement.remove();
    }

});