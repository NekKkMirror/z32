particlesJS("particles-js", {"particles":{"number":{"value":128,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"triangle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":113.61330898762435,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true})

function kBeaty(numb) {
let result = 0

for (let i = 0; i < numb; i++) {
  let perevotorNumb
  let arrI = String(i).split('')
  let perevorotArr = []

  for (let j = arrI.length; j >= 0; --j) {

    perevorotArr.push(arrI[j])
  }

  let voidFirstProp = perevorotArr.slice(1)

  perevotorNumb = voidFirstProp.join('')

  if (i + +perevotorNumb == numb) result++
}

return `Result: ${result}`
}


setInterval(() => {
if (inputItem.value  === '') {
  inputLabel.style.left =  20 + 'px'
  inputLabel.style.top = 50 + '%'
  inputLabel.style.transform = `translateY(-50%)`
  
  inputItem.oninput = function(event) {
  inputLabel.style.left =  ''
  inputLabel.style.top = ''
  inputLabel.style.transform = ''
  }

}
}, 0);


btnCreate.onclick = function(event) {

  event.preventDefault()

if (inputItem.value > 22222) {
  error.children[0].textContent = `Введите цифру меньше 22 222`
  error.style.opacity = 1
  error.style.visibility = 'visible'
  error.style.transform = `translateY(-5px)`
  error.style.fontSize = '14px'

  setTimeout( () => {
    error.style.opacity = 0
    error.style.visibility = 'hidden'
    error.style.transform = `translateY(-20px)`
  }, 3000)

}

const reg = /\D+/ig
let str = inputItem.value 

if (reg.test(str)) return

itemResult.value = kBeaty(inputItem.value)
itemResult.classList.add('_active')

if (itemResult.classList.contains('_active')) {
  btnCreate.style.left = 0 + 'px'
  btnCreate.style.transform = `translateX(0px)`
}

setTimeout( () => {
  itemResult.classList.remove('_active')
  btnCreate.style.left = 50 + '%'
  btnCreate.style.transform = `translateX(-50%)`
}  
  , 10000)
}
