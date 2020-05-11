const faBars = document.querySelector('.fa-arrow-alt-circle-left');
const navVertical = document.querySelector('.col-md-2');
const mainFrame = document.querySelector('.col-md-10');
const sideBar = document.querySelectorAll('.navVertical ul li a span');
const icon = document.querySelectorAll('.navVertical ul li a i');
const logo = document.querySelector('#logo');
let sideBarOpen = true;

faBars.addEventListener('click', (event) => {
  event.preventDefault();
  navVertical.classList.toggle('sidebar-small');
  faBars.classList.toggle('fa-arrow-alt-circle-right');

  if(sideBarOpen){
    sideBarOpen = false;
    logo.style.display = 'none';
    for (var i = 0; i < icon.length; i++) {
        sideBar[i].style.display = 'none';
        icon[i].style.fontSize = "32px";
      }
  }else{
    sideBarOpen = true;
    logo.style.display = 'block';
    const displaySideBar = () => {
      for (var i = 0; i < icon.length; i++) {
        sideBar[i].style.display = 'inline-block';
        icon[i].style.fontSize = "14px";
      }
    }
    setTimeout(displaySideBar, 700);
  }
});


