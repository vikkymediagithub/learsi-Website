function showSidebar() {
 const sidebar = document.querySelector('.sidebar');

 sidebar.style.display = 'block';
}
function hideSidebar() {
 const sidebar = document.querySelector('.sidebar');

 sidebar.style.display = 'none';
};

// window.onscroll = function(){myFunction()};

// const

// Back-to-top
document.addEventListener("DOMContentLoaded", function() {
    var backToTopButton = document.querySelector(".to-top");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 300) { 
            backToTopButton.classList.add("show");
        } else {
            backToTopButton.classList.remove("show");
        }
    });
});
