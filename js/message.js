
    var APP_ID = 'MmCAHWpATYawqMF9T7YhY2VJ-gzGzoHsz';
    var APP_KEY = 'iDt8bccWk3jK69zhK45JbTm7';

    AV.init({
      appId: APP_ID,
      appKey: APP_KEY
    });
    console.log('mnmnm')

    var query = new AV.Query('Message')
    query.find()
    .then(
        function(message){
            let array = message.map((item) => item.attributes)
            array.forEach((item) => {
                let li = document.createElement('li')
                li.innerText = `${item.name}: ${item.content}`
                let messageList = document.querySelector('#messageList')
                messageList.appendChild(li)

            })
        }
    )

    let myForm = document.querySelector('#postMessageForm')
    myForm.addEventListener('submit',function(e){
        e.preventDefault()
        let content = myForm.querySelector('input[name=content]').value
        var Message = AV.Object.extend('Message')
        var message = new Message();
        message.save({
            'content':content
        }).then(function(object){
            window.location.reload()
            console.log(object)
        })
    })
