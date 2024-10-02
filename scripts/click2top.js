// 在任何一个 div 中加入 scrollToTop 这个 className，例如
// <div class="scrollToTop">Top</div>
// 就可以将这个 div 作为 click to top 的按钮



// scripts.js
// Get the button element
let mybutton = document.getElementById("scrollToTopBtn");

let scrollToTopBtns = document.querySelectorAll(".scrollToTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document


for (let i = 0; i < scrollToTopBtns.length; i++) {
  const element = scrollToTopBtns[i];
  element.onclick = function() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

    var baseURL = window.location.href.split('?')[0];
    window.location.href = baseURL; 
};
}
