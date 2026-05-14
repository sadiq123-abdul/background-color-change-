const button = document.querySelectorAll('.box')
const body = document.querySelector("body")

button.forEach(function (box) {
    box.addEventListener('click', function (color) {
        if (color.target.id === 'box1') {
            body.style.backgroundColor = '#E1D9BC'
        }
          if (color.target.id === 'box2') {
            body.style.backgroundColor = ' #EDA35A'
        }
          if (color.target.id === 'box3') {
            body.style.backgroundColor = '#C5B0CD'
        }
          if (color.target.id === 'box4') {
            body.style.backgroundColor = '#97A87A'
        }
          if (color.target.id === 'box5') {
            body.style.backgroundColor = '#1581BF'
        }
    })
})