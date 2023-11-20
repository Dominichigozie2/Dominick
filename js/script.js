

// filter data 
document.querySelectorAll('.list').forEach(function(button) {
    button.addEventListener('click', function() {
      var category = this.getAttribute('data-filter');
      filterItems(category);
    });
  });

  function filterItems(category) {
    var items = document.querySelectorAll('.itemBox');
    if (category === 'All') {
      items.forEach(function(item) {
        item.style.display = 'block';
      });
    } else {
      items.forEach(function(item) {
        if (item.getAttribute('data-category') === category) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    }
  }



  const buttons = document.querySelectorAll('.list');

  buttons.forEach((button)=>{
    button.addEventListener('click', (event)=>{
      buttons.forEach((btn)=>{
        btn.classList.remove("active");
      });
      event.target.classList.add("active");
    });
  });



const accord = document.querySelector(".view-more-btn");
  accord.addEventListener('click', () =>{
    const men = document.querySelector(".about-details");
    const arrow = document.querySelector(".down");

    men.classList.toggle("open");

    if(men.classList.contains("open")){
        men.style.height = `${men.scrollHeight }px`;
        men.classList.add("show");
        arrow.classList.replace("fa-arrow-down", "fa-arrow-up");
    }else{
        men.style.height = "0px";
        arrow.classList.replace("fa-arrow-up", "fa-arrow-down");
        men.style.overflow = "hidden";
        men.classList.remove("show");
    }
});







const sectionOne = document.querySelector(".home");
const remove = document.querySelector("nav");


const option = {
    root: null,
    threshold: 0.8,
    rootMargin: "-35px"
};

const observerOne = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
          remove.style.background="#FFFFFF";
          remove.style.boxShadow="1px 2px 20px #0002";
        } else {
          remove.style.background="transparent";
          remove.style.boxShadow="none";
      }
    });
}, option);

observerOne.observe(sectionOne)





// navigation

const bar = document.querySelector(".bar");

bar.addEventListener("click", () =>{
  const aside = document.querySelector("aside");
  aside.classList.toggle("display");
  if(aside.classList.contains("display")){
    bar.classList.replace("fa-bars", "fa-times");
  }else{
    bar.classList.replace("fa-times", "fa-bars");
  }
  window.addEventListener("scroll", ()=>{
    aside.classList.remove("display");
    bar.classList.replace("fa-times", "fa-bars");
  });
});









// scrolltotop

window.addEventListener("scroll", function(){
  var scroll = document.querySelector(".ScrollUp");
  scroll.classList.toggle("active", window.scrollY > 500)
})

function scrollToTop(){
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}

// ===============//





// ======= Nav onscroll animations==========//
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".navLink");

window.onscroll = () =>{
  sections.forEach(sec =>{
    let top = window.scrollY;
    let offset = sec.offsetTop -150;
    let height = sec.offsetHeight;

    let id = sec.getAttribute("id");

    if(top >= offset && top < offset + height){
      navLinks.forEach(links => {
        links.classList.remove("active");
        document.querySelector(".navLink[href*=" + id +"]").classList.add("active");
      });
    }
  });
}

// ======= Nav onscroll animations==========//