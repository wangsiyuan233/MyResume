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


        // // 另一种改法：this 和 that
        // bindEvents: function(){
        //     var that = this
        //     this.form.addEventListener('submit',function(e){
        //         e.preventDefault()
        //         that.saveMessage()
        //
        //     })
        // },




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

    // var model = {
    //     init: function(){
    //         var APP_ID = 'MmCAHWpATYawqMF9T7YhY2VJ-gzGzoHsz'
    //         var APP_KEY = 'iDt8bccWk3jK69zhK45JbTm7'
    //         AV.init({appId: APP_ID,appKey: APP_KEY})
    //         // console.log('第八次尝试')
    //     },
    //
    //     fetch: function(){
    //         var query = new AV.Query('Message');
    //         return query.find()
    //     },
    //
    //     save: function(name, content){
    //         var Message = AV.Object.extend('Message');
    //         var message = new Message();
    //         return message.save({  // Promise 对象
    //           'name': name,
    //           'content': content
    //       })
    //     }
    // }

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

        // // 另一种改法：箭头函数内外想通
        // bindEvents: function(){
        //     var that = this
        //     this.form.addEventListener('submit',(e)=>{
        //         e.preventDefault()
        //
        //         that.saveMessage()
        //
        //     })
        // },

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



















// var view = document.querySelector('section.message')
//
//
// var APP_ID = 'MmCAHWpATYawqMF9T7YhY2VJ-gzGzoHsz';
// var APP_KEY = 'iDt8bccWk3jK69zhK45JbTm7';
// AV.init({appId: APP_ID,appKey: APP_KEY});
// console.log('第八次尝试')
//
// let myForm = document.querySelector('#postMessageForm')
// myForm.addEventListener('submit',function(e){
//     e.preventDefault()
//     let name = myForm.querySelector('input[name=name]').value
//     let content = myForm.querySelector('input[name=content]').value
//     var Message = AV.Object.extend('Message');
//     var message = new Message();
//     message.save({
//       'content' : content,
//       'name' : name
//     }).then(function(object) {
//         window.location.reload()
//         alert('成功存入留言板~')
//         console.log(object)
//     })
// })
//
// var query = new AV.Query('Message');
// query.find()
// .then(
//     function(message){
//         let array = messages.map((item)=> item.attributes)
//         array.forEach((item)=>{
//             let li = document.createElement('li')
//             li.innerText = `${item.name}: ${item.content}`
//             let messageList = document.querySelector('#messageList')
//             messageList.appendChild(li)
//         })
//     }
// )
