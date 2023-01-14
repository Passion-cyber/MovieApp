const header = document.getElementsByClassName('header');
const content = document.getElementsByClassName('content');
const plusIcon = document.getElementsByClassName('plus-icon');


// FAQ SECTION
for (let i = 0; i < header.length; i++) {
    header[i].addEventListener('click', () => {
      contents[i].style.display = contents[i].style.display == "block" ? "none" : "block";
      // content[i].classList.toggle('hidden');
    });
  }
  