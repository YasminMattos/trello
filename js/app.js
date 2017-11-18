window.addEventListener('load', function(){
  var tab = document.getElementById('tab');
  var item = document.querySelector('.item');
  var add = document.createElement('button');
  add.textContent = 'Save';

  item.addEventListener('click', function(){
    item.classList.add('item-js');
    tab.classList.add('tab-js');
    add.classList.add('add-js');
    tab.appendChild(add);
    
  })

})

