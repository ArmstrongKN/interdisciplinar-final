let count = 1

document.getElementById("radio1").checked = true;

setInterval( function(){
    nextImage()
}, 4000)

function nextImage(){
    count++;
    if(count>4){
        count = 1
    }

    document.getElementById("radio"+count).checked = true

}


// botao top

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}