# MyResume

[【代码链接】](https://github.com/wangsiyuan233/react-todolist)
[【预览链接】](http://wangsiyuan233.cn/MyResume/cv.html)

----------

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

- [X] 下载简历： 关联自己的 pdf 简历
- [√] Professional Skills：会动的技能条
- [√] Portfolia ： 进度条会按照点击的文字而移动
- [√] 作品集： 轮播 
- [√] 留言板： 七牛云储存数据

