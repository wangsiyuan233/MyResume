
    all.onclick = function(){
        portfoliabar.className = 'bar state-1'
    }
    vallina.onclick = function(){
        portfoliabar.className = 'bar state-2'
    }
    frameworks.onclick = function(){
        portfoliabar.className = 'bar state-3'
    }


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

//跳转定位
let aTags = document.querySelectorAll('nav.menu > ul > li > a')
for(let i = 0;i < aTags.lenght; i++ ){
    aTags[i].onclick = function(x){
        x.preventDefault()
        let a = currentTarget
        let href = a.getAttribute('href')
        let element = document.querySelector(href)
        let top = element.offsetTop

        let n = 25
        let duration = 500/n

        setInterval(() => {
            window.scrollTo(0, top-80)
        },duration)    
    }
}
