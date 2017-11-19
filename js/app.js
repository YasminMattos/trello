window.addEventListener('load', function(){
  var section = document.querySelector('section');
  var tab = document.getElementById('tab');
  var item = document.querySelector('.item');
  var save = document.createElement('button');
  save.textContent = 'Save';

  item.addEventListener('click', function(){
    item.classList.add('item-js');
    tab.classList.add('tab-js');
    save.classList.add('save-js');
    tab.appendChild(save);
  });

  save.addEventListener('click', function(){
    var container = document.createElement('div');
    container.classList.add('container-js');
    section.appendChild(container);
    var listName = document.createElement('h4');
    listName.textContent = item.value;
    listName.classList.add('list-name-js');
    container.appendChild(listName);
    var card = document.createElement('input');
    card.setAttribute('placeholder', 'Add a card...');
    card.classList.add('card-js');
    container.appendChild(card);
  });



})

