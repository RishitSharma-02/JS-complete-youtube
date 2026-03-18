## project 1
``` java script

const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");
buttons.forEach(function(button){
  console.log(button);
  button.addEventListener('click' , function(e){
    console.log(e);
    console.log(e.target);

    const colrId = e.target.id;
    switch(colrId) {
      case 'grey':
        body.style.backgroundColor = colrId;
        break;
      case 'white':
        body.style.backgroundColor = colrId;
        break;
      case 'blue':
        body.style.backgroundColor = colrId;
        break;
      case 'yellow':
        body.style.backgroundColor = colrId;
        break;
    }

  })
})