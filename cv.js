




// Loading
setTimeout(function(){
    sitewelcome.classList.remove('active')
},1000)

// scroll变色

// function括号里的hhh不能省略？？？
window.onscroll = function(hhh){
    if(window.scrollY > 0){
        topNavBar.classList.add('sticky')
    }else{
        topNavBar.classList.remove('sticky')
    }
}
// 二级菜单
let liTags =document.querySelectorAll('nav.menu > ul > li')
for(let i = 0;i < liTags.lenght; i++ ){
    liTags[i].onmouseenter = function(x){
        let li = x.currentTarget
        let brother = li.getElementsByTagName('ul')[0]
        x.currentTarget.classList.add('active')
    }
    liTags[i].onmouseleave = function(x){
        let li = x.currentTarget
        let brother = li.getElementsByTagName('ul')[0]
        x.currentTarget.classList.remove('active')
    }
}
// 添加 offset 类
let specialTags = document.querySelectorAll('[data-x]')
for(let i =0;i<specialTags.length; i++){
  specialTags[i].classList.add('offset')
}

findClosest()
window.onscroll = function(x){
  if(window.scrollY > 0){
    topNavBar.classList.add('sticky')
  }else{
    topNavBar.classList.remove('sticky')
  }
  findClosest()
}

function findClosest(){
  let specialTags = document.querySelectorAll('[data-x]')
  let minIndex = 0
  for(let i =1;i<specialTags.length; i++){
    if(Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)){
      minIndex = i
    }
  }
  // minIndex 就是里窗口顶部最近的元素
  specialTags[minIndex].classList.remove('offset')
  let id = specialTags[minIndex].id
  let a = document.querySelector('a[href="#'+ id + '"]')
  let li = a.parentNode
  let brothersAndMe = li.parentNode.children
  for(let i=0; i<brothersAndMe.length; i++){
    brothersAndMe[i].classList.remove('highlight')
  }
  li.classList.add('highlight')
}

  let liiTags = document.querySelectorAll('nav.menu > ul > li')
  for(let i=0; i<liiTags.length; i++){
    liiTags[i].onmouseenter = function(x){
        x.currentTarget.classList.add('active')
    }
    liiTags[i].onmouseleave = function(x){
        x.currentTarget.classList.remove('active')
    }
  }

//
//跳转定位
let aTags = document.querySelectorAll('nav.menu > ul > li > a')
function animate(time) {
    requestAnimationFrame(animate);
    TWEEN.update(time);
}
requestAnimationFrame(animate);

for(let i = 0;i < aTags.lenght; i++ ){
    aTags[i].onclick = function(x){
        x.preventDefault()
        let a = currentTarget
        let href = a.getAttribute('href')
        let element = document.querySelector(href)
        let top = element.offsetTop


        let currentTop = window.scrollY
        let targetTop = top - 80
        let distance = targetTop - currentTop
        var coords = {y: currentTop }
        var t = Math.abs((s/100)*300)
        if (t > 500){ t = 500 }
        var tween = new TWEEN.Tween(coords) // Create a new tween that modifies 'coords'.
                .to({y: targetTop}, t )// Move to (300, 200) in 1 second.
                .easing(TWEEN.Easing.Quadratic.InOut) // Use an easing function to make the animation smooth.
                .onUpdate(function() { // Called after tween.js updates 'coords'.
                    // Move 'box' to the position described by 'coords' with a CSS translation.
                window.scrollTo(0,coords.y)
                })
                .start(); // Start the tween immediately.
    }
}

//
