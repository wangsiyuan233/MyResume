# MyResume

[【代码链接】](https://github.com/wangsiyuan233/react-todolist)
[【预览链接】](http://wangsiyuan233.cn/MyResume/cv.html)

----------

## 目标特效 ##

- [√] 滚动页面时 topNavBar 呈现 sticky 状态

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
- [√] hover 时 topNavBar 下面从左往右划出 border 

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
- [√] hover 时 topNavBar 下面的会从左往右划出二级菜单




- [X] 下载简历： 关联自己的 pdf 简历
- [√] Professional Skills：会动的技能条
- [√] Portfolia ： 进度条会按照点击的文字而移动
- [√] 作品集： 轮播 
- [√] 留言板： 七牛云储存数据
