const header = document.getElementsByClassName('header');
const contents = document.getElementsByClassName('content');
const plusIcon = document.getElementsByClassName('plus-icon');


// FAQ SECTION
for (let i = 0; i < header.length; i++) {
  header[i].addEventListener('click', () => {
    contents[i].style.display = contents[i].style.display == "block" ? "none" : "block";
    // plusIcon[i].innerHTML = contents[i].style.display == "block" ? "-" : "+";
  });
}

for (let i = 0; i < headers.length; i++) {
  headers[i].addEventListener("click", () => {
      for (let j = 0; j < contents.length; j++) {
          if (i == j) {
              contents[j].style.display = contents[j].style.display == "block" ? "none" : "block";
              // plusIcon[j].innerHTML = contents[j].style.display == "block" ? "-" : "+";
          } else {
              contents[j].style.display = "none";
              plusIcon[j].innerHTML = "+";
          }
      }
  });
}
