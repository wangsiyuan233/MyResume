var APP_ID = 'MmCAHWpATYawqMF9T7YhY2VJ-gzGzoHsz';
var APP_KEY = 'iDt8bccWk3jK69zhK45JbTm7';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});
console.log('我的天这是我做第五遍了！！')

var TestObject = AV.Object.extend('TestObject');
var testObject = new TestObject();
testObject.save({
  words: 'Hello World!'
}).then(function(object) {
  alert('LeanCloud Rocks!');
})
