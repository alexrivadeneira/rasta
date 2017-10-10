// Velocity(element1, {property: value}, {option: optionValue});

window.onscroll = function(){

  if(window.scrollY > 40){
    var starburst = document.getElementById("starburst");
    Velocity(starburst, {
      opacity: .5,
      translateY: '-200px',
    }, {
      easing: [1000, 20],
      duration: 2000,
      border: ['#bada55', '#0e0e0e']
    });      
  }
  

}
