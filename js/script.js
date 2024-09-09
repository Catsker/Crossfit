const listItems = document.querySelectorAll('header li');

listItems.forEach((li) => {
  li.addEventListener('click', () => {

    document.querySelectorAll('header li button').forEach((btn) => {
      btn.classList.remove('header-selected');
    });

    li.querySelector('button').classList.add('header-selected');
  });
});
