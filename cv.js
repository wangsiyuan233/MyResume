
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
let aTags =document.getElementsByClassName('menuTrigger')
for(let i = 0;i < aTags.lenght; i++ ){
    aTags[i].onmouseenter = function(x){
        let a = x.currentTarget
        let brother = a.nextSibling
        while (brother.nodeType == 3) {
            brother = brother.nextSibling
        }
        console.log(brother)
    }
    aTags[i].onmouseleave = function(){
        console.log('mouseleave')
    }
}
