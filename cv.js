
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
