var carousel = document.querySelector(".carousel");
var cellCount = 3;
var selectedIndex = 0;
const cell1 = document.getElementById("cell1");
const cell2 = document.getElementById("cell2");
const cell3 = document.getElementById("cell3");
const ads = document.getElementById("ads");
const delete_btn = document.getElementById("delete-btn");

function rotateCarousel() {
  var angle = (selectedIndex / cellCount) * -180;
  carousel.style.transform = "translateZ(-60px) rotateY(" + angle + "deg)";
}

var prevButton = document.querySelector(".previous-button");
prevButton.addEventListener("click", function () {
  selectedIndex--;
  rotateCarousel();
});

var nextButton = document.querySelector(".next-button");
nextButton.addEventListener("click", function () {
  selectedIndex++;
  rotateCarousel();
});

fetch(`data.json`)
  .then((res) => res.json())
  .then((data) => {
    //console.log(data.summary[0]);
    cell1.innerHTML = data.summary[0].name;
    cell2.innerHTML = data.summary[1].match;
    cell3.innerHTML = data.summary[2].score;
  });

// delete_btn.addEventListener("click",
//   $("#image").remove();
// );

function removeimage() {
  document.getElementById("ads").className = "ads-remove";
}
delete_btn.addEventListener("click", removeimage);
