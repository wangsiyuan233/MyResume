!function(){
    var view = document.querySelector('section.message')
    var model = {
        //获取数据
        init: function(){
          var APP_ID = 'TsDnap9SEXjSvGSowP7gXXJC-gzGzoHsz'
          var APP_KEY = 'rGye31p12mM3wFpNRn9RADu9'
          AV.init({ appId: APP_ID, appKey: APP_KEY })
        },
        fetch: function(){
            var query = new AV.Query('Message');
            return query.find() // Promise 对象
        },
        save: function(name, content){
            var Message = AV.Object.extend('Message');
            var message = new Message();
            return message.save({  // Promise 对象
            'name': name,
            'content': content
            })
        }
    }
    var controller = {
        view: null,
        messageList: null,
        init: function(view,model){
            this.view = view
            this.model =model
            this.initAV()
            this.loadMessages()
            this.messageList = view.querySelector('#messageList')
            this.bindEvents()
            this.form = view.querySelector('form')
            this.model.init()

        },

        loadMessages: function(){
            this.model.fetch().then(
                (message =>{
                    let array = message.map((item) => item.attributes)
                    array.forEach((item) => {
                        let li = document.createElement('li')
                        li.innerText = `${item.name}: ${item.content}`
                        this.appendChild(li)

                    })
                }
            )
        },

        bindEvents: function(){
          this.form.addEventListener('submit', function(e){
            e.preventDefault()
            this.saveMessage()
          })
        },

        saveMessage: function(){
          let myForm = this.form
          let content = myForm.querySelector('input[name=content]').value
          let name = myForm.querySelector('input[name=name]').value
          this.model.save(name, content).then(function(object) {
            let li = document.createElement('li')
            li.innerText = `${object.attributes.name}: ${object.attributes.content}`
            let messageList = document.querySelector('#messageList')
            messageList.appendChild(li)
            myForm.querySelector('input[name=content]').value = ''
            console.log(object)
          })
        }
    }
    controller.init(view, model)

}.call()
