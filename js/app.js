// console.log('Howdy');
document.addEventListener('DOMContentLoaded', () => {

  //can be treated as an array but easier to target by using id.

// header
  const header1 = document.getElementById('header-id');
  header1.style.color = 'blue';
  header1.style.border = '2px solid blue';
  header1.style.marginLeft = '30px';
  header1.addEventListener('click', () => {
    header1.style.color = 'red';
  });
  header1.addEventListener('mouseover', (e) => {
    console.log(e.target);
  });

  // creating elements
  const ul = document.createElement('ul');
  ul.setAttribute('id', 'ul-list');
  // Append to body : body adopts the child created above
  document.body.appendChild(ul);

  for (i = 0; i < 10; i++) {
    const li = document.createElement('li');
    const randomNum = Math.random();
    li.innerHTML = randomNum;

    //Adding addEventListener
    li.addEventListener('mouseenter', (e) => {
      e.target.style.fontSize ='30px';
    });
    li.addEventListener('mouseleave', (e) => {
      e.target.style.fontSize ='16px';
    });

    ul.appendChild(li);

  }

  //IMG

  for (var i = 0; i < 5; i++) {
    const img = document.createElement('img');
    img.setAttribute('src', 'http://fillmurray.com/300/200');
    document.body.appendChild(img);
  }




  console.log(ul);

  console.log(document.body.children);
  // remove element from page
  // document.body.removeChild(header1);

  // console.log(header1);

});//close document.addEventListener
