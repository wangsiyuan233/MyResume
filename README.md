# MyResume

[【代码链接】](https://github.com/wangsiyuan233/react-todolist)
[【预览链接】](http://wangsiyuan233.cn/MyResume/cv.html)

## 目标特效 ##

[√] 滚动页面时 topNavBar 呈现高亮状态

```
// JS 部分： 添加 class
 window.addEventListener('scroll', (x) => {
        if(window.scrollY > 0){
          this.active()
        }else{
          this.deactive()
        }
 })
```
[√] hover 时 topNavBar 下面从左往右划出 border 

```
// CSS 部分： 添加动画 

.topNavBar nav > ul > li.active > a::after,
.topNavBar nav > ul > li.highlight > a::after {
  content: '';
  display: block;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: #e06567;
  height: 3px;
  animation: menuSlide .3s;
}
@keyframes menuSlide{
  0%{ width: 0; }
  100%{ width: 100%; }
}
```

[√] hover 时 topNavBar 从左往右划出二级菜单
```
// JS 部分： 直接在 li 上面添加 active

 active: function(){
      this.view.classList.add('sticky')
 },
 deactive: function(){
      this.view.classList.remove('sticky')
 }
```
```
// CSS 部分： 添加动画 

.sticky{
    background-color: #efefef;
    z-index: 1;
    padding: 10px 0px;
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.5);
    color:#3d4451;
}
.submenu{
    display: none;
    position: absolute;
    right: 0;
    /* top百分百:距离顶部有一倍自己的高度 */
    top:100%;
    background: white;
    color: #3d4451;
}

.topNavBar .submenu > li{
    white-space: nowrap;
    padding: 5px 10px;
}

.topNavBar li.active> .submenu{
    display: block;
    animation: submenuSlide 0.3s;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
}

@keyframes submenuSlide{
    0%{margin-right: 100%;}
    100%{margin-right: 0%;}
}
```

[√] 点击 topNavBar 到达指定位置
```
// JS 部分

function(){
      let aTags = this.view.querySelectorAll('nav.menu > ul > li > a')
      for(let i=0; i<aTags.length; i++){
        aTags[i].onclick = (x)=>{
          // 阻止默认动作
          x.preventDefault()
          let a = x.currentTarget
          // a.href 是带 http 协议的,被浏览器处理过的
          // a.getAttribute('href')  是
          let href = a.getAttribute('href') //'#siteAbout'
          // 以字符串为选择器获取元素
          let element = document.querySelector(href)
          window.scrollTo(0,top-80)
        }
      }
    }
```

[√] 点击 topNavBar 非匀速到达指定位置: 使用 Tween.js
```
// JS 部分

 // 非匀速滚动到指定位置
    initAnimation: function(){
      function animate(time) {
        requestAnimationFrame(animate);
        TWEEN.update(time);
      }
      requestAnimationFrame(animate);
    },
    scrollToElement: function(element){
      let top = element.offsetTop
      let currentTop = window.scrollY
      let targetTop = top - 80
      let s = targetTop - currentTop // 路程
      var coords = { y: currentTop}; // 起始位置
      var t = Math.abs((s/100)*300) // 时间
      if(t>500){ t = 500 }
      var tween = new TWEEN.Tween(coords) // 起始位置
        .to({ y: targetTop}, t) // 结束位置 和 时间
        .easing(TWEEN.Easing.Cubic.InOut) // 缓动类型
        .onUpdate(function() {
          // coords.y 已经变了
          window.scrollTo(0,coords.y) // 如何更新界面
        })
        .start(); // 开始缓动
    }
```

[√] 页面滚动时，topNavBar 会依次点亮
```
// JS 部分

 function findClosestAndRemoveOffset(){
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
  let liTags = document.querySelectorAll('nav.menu > ul > li')
  for(let i=0; i<liTags.length; i++){
    liTags[i].onmouseenter = function(x){
      x.currentTarget.classList.add('active')
    }
    liTags[i].onmouseleave = function(x){
      x.currentTarget.classList.remove('active')
    }
  }
```
```
// CSS 部分

[data-x]{
  transform: translateY(0);
  transition: all 1s;
}

.topNavBar nav > ul > li.active > a::after,
.topNavBar nav > ul > li.highlight > a::after {
  content: '';
  display: block;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: #e06567;
  height: 3px;
  animation: menuSlide .3s;
  cursor: pointer;
}
```

[√] 每个 section 出现的方式是：从上往下
```
// JS部分

  // 添加 offset 类
  var specialTags = document.querySelectorAll('[data-x]')
  for(let i =0;i<specialTags.length; i++){
    specialTags[i].classList.add('offset')
  }
  findClosestAndRemoveOffset()
  window.addEventListener('scroll', function(x){
    findClosestAndRemoveOffset()
  })
```
```
// CSS 部分

[data-x].offset{
  transform: translateY(100px);
}
[data-x]{
  transform: translateY(0);
  transition: all 1s;
}

@keyframes slideUp{
  0%{transform: translateY(-30px);}
  100%{transform: translateY(0);}
}
```

[√] progressbar 填充效果
```
// CSS 部分

.progressbar{
    height: 5px;
    background-color: #FAE1E1;
    border-radius: 2PX;
    margin: 4px 0 40px 0;
    overflow: hidden;
}

.progress{
    height: 100%;
    width: 80%;
    background-color: #E6686A;
}

.skills h3{
    padding-right: 40px;
    line-height: 1.1;
    font-size: 14px
}

/* 技能bar滑动填充 */
section.skills .progressbar .progress {
    height: 100%;
    background: #E6686A;
    width: 70%;
    border-radius: 2px;
    transform: translateX(0);
    transition: all 1s;
}

section.skills.offset .progress{
  transform: translateX(-100%);
}
```
```
// HTML

<div class="progressbar" >
   <div class="progress" style="width:80%;"></div>
</div>
```

[√] 给留言板加数据库：看 leancloud 文档
```
!function(){

     var view = window.View('section.message')

     var model = window.Model({resourceName:'Message'})

     var controller = window.Controller({
        init: function(view,controller){
            this.messageList = view.querySelector('#messageList')
            this.form = view.querySelector('form')
            this.messageList = null,
            this.loadMessages()
        },

        loadMessages: function(){
            this.model.fetch().then(
                (messages)=> {
                    let array = messages.map((item)=> item.attributes)
                    array.forEach((item)=>{
                        let li = document.createElement('li')
                        li.innerText = `${item.name}: ${item.content}`
                        this.messageList.appendChild(li)
                    })
                }
            )

        },

        bindEvents: function(){
            this.form.addEventListener('submit',(e)=>{
                e.preventDefault()
                this.saveMessage()
            })
        },

        saveMessage: function(){
            let myForm = this.form
            let content = myForm.querySelector('input[name=content]').value
            let name = myForm.querySelector('input[name=name]').value
            this.model.save({'name':name, 'content':content}).then(function(object){
                    if(content==null || content==''|| name==''|| name==null){
                        alert('两个空位置都要填写哦~')
                        preventDefault()
                    }else{
                        let li = document.createElement('li')
                        li.innerText = `${object.attributes.name}: ${object.attributes.content}`
                        let messageList = document.querySelector('#messageList')
                        messageList.appendChild(li)
                        myForm.querySelector('input[name=content]').value = ''
                        alert('你的留言我看到啦，有空马上回复你哦')
                        console.log(object)
                    }

            })
        }

     })



    var controller = {
        view: null,
        model:null,
        messageList: null,
        init: function(view, model){
            this.view = view
            this.model = model

            this.messageList = view.querySelector('#messageList')
            this.form = view.querySelector('form')
            this.model.init()
            this.loadMessages()
            this.bindEvents()

        },


        loadMessages: function(){
            this.model.fetch().then(
                (messages)=> {
                    let array = messages.map((item)=> item.attributes)
                    array.forEach((item)=>{
                        let li = document.createElement('li')
                        li.innerText = `${item.name}: ${item.content}`
                        this.messageList.appendChild(li)
                    })
                }
            )

        },

        bindEvents: function(){
            var that = this
            this.form.addEventListener('submit',function(e){
                e.preventDefault()

                that.saveMessage()

            })
        },

        saveMessage: function(){
            let myForm = this.form
            let content = myForm.querySelector('input[name=content]').value
            let name = myForm.querySelector('input[name=name]').value
            this.model.save({'name':name, 'content':content}).then(function(object){
                    if(content==null || content==''|| name==''|| name==null){
                        alert('两个空位置都要填写哦~')
                        preventDefault()
                    }else{
                        let li = document.createElement('li')
                        li.innerText = `${object.attributes.name}: ${object.attributes.content}`
                        let messageList = document.querySelector('#messageList')
                        messageList.appendChild(li)
                        myForm.querySelector('input[name=content]').value = ''
                        alert('你的留言我看到啦，有空马上回复你哦')
                        console.log(object)
                    }

            })
        }

    }
    controller.init(view, model)

}.call()

```	