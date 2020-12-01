const btns = document.querySelectorAll('.btn');
const btns2 = document.querySelectorAll('.btn2');
const about = document.querySelector('.content_tabs');
const about2 = document.querySelector('.content_tabs2');
const articles = document.querySelectorAll(".content");
const articles2 = document.querySelectorAll(".content2");


about.addEventListener('click', (e) => {
  const id = e.target.dataset.id;

  if(id) {

    btns.forEach((btn) => {
      btn.classList.remove("active");
      e.target.classList.add("active");
    });

    articles.forEach((article) => {
      article.classList.remove("active");
    });

    const element = document.getElementById(id);

    element.classList.add("active");

  }

});

about2.addEventListener('click', (e) => {
  const id = e.target.dataset.id;

  if(id) {

    btns2.forEach((btn) => {
      btn.classList.remove("active");
      e.target.classList.add("active");
    });

    articles2.forEach((article) => {
      article.classList.remove("active");
    });

    const element2 = document.getElementById(id);

    element2.classList.add("active");

  }

});

