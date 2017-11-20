window.addEventListener('load', function(){
  var section = document.querySelector('section');
  var tab = document.getElementById('tab');
  var item = document.querySelector('.item');
  var save = document.createElement('button');
  var close = document.createElement('button');
  var add = document.createElement('button');
  var btn = document.createElement('button');
  var area = document.createElement('textarea');

  item.addEventListener('click', function(){
    save.textContent = 'Save';
    item.classList.add('item-js');
    tab.classList.add('tab-js');
    save.classList.add('save-js');
    tab.appendChild(save);
    close.classList.add('btn-js');
    close.classList.add('icon-cross');
    tab.appendChild(close);
  });

  close.addEventListener('click', function(){
    tab.removeChild(save);
    item.classList.remove('item-js');
    tab.classList.remove('tab-js');
    tab.removeChild(close);
        
  });

  save.addEventListener('click', function(){
    if (item.value.length !== 0)
      var container = document.createElement('div');
      container.classList.add('container-js');
      section.appendChild(container);
      var listName = document.createElement('h4');
      listName.textContent = item.value;
      listName.classList.add('list-name-js');
      container.appendChild(listName);
      item.value = '';
      var card = document.createElement('input');
      card.setAttribute('placeholder', 'Add a card...');
      card.classList.add('card-js');
      container.appendChild(card);

      card.addEventListener('click', function(){
        container.removeChild(card);
        container.appendChild(area);
        area.classList.add('area-js');
        add.textContent = 'Add';
        add.classList.add('add-js');
        container.appendChild(add);
        btn.classList.add('btn-js');
        btn.classList.add('icon-cross');
        container.appendChild(btn);
      })

      btn.addEventListener('click', function(){
        container.removeChild(area);
        container.removeChild(add);
        container.removeChild(btn);
        container.appendChild(card);
      })


      
  });





})

