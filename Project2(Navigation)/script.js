  const child = document.querySelector('.child');
  const parent = child.parentNode;
  parent.style.backgroundColor = 'pink';
  const firstSibling = child.firstElementChild.nextElementSibling;
  firstSibling.textContent = 'Content of sibling 2 is changed!';