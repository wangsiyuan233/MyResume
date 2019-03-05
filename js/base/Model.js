window.Model = function(options){
    let resourceName = options.resourceName
    return{
        init: function(){
            var APP_ID = 'MmCAHWpATYawqMF9T7YhY2VJ-gzGzoHsz'
            var APP_KEY = 'iDt8bccWk3jK69zhK45JbTm7'
            AV.init({appId: APP_ID,appKey: APP_KEY})
            // console.log('第八次尝试')
        },

        fetch: function(){
            var query = new AV.Query(resourceName);
            return query.find()
        },

        save: function(object){
            var M = AV.Object.extend(resourceName);
            var m = new M();
            return m.save(object)
        }
    }
}
