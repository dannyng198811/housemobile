'use strict';
angular.module('app.services', [])

.factory('OrderService', ['$resource',function($resource,$http){
    
    var orderService = {}
    orderService = $resource("http://192.168.1.147:3000/orders/:id",null,{'update': { method:'PUT'}});
    orderService.calc =$resource("http://192.168.1.147:3000/orders/calc/");
    return orderService;

}])

.factory('alertService', [function(){

    return  {
        netError:{
     title: '網絡錯誤',
     template: '網絡連接錯誤或無法連接伺服器，請稍後再嘗試！',
     okType: 'button-assertive'
   },
        orderSucceeded:{
     title: '成功落柯打',
     template: '感謝您的支持，您已成功落柯打，我們將安排工作人員與你確認具體時間，謝謝！',
     okType: 'button-assertive'
   },
        formError:{
             title: '提示',
     template: '請完整填妥表單！',
     okType: 'button-assertive'
        },
         loginError:{
             title: '提示',
     template: '電郵或密碼錯誤！',
     okType: 'button-assertive'
        }
        
    } 
}])

.filter('orderState', function() {
  return function(input) {
      
      switch(input){
          case 0:return '工作人員將與您聯絡'
          case 1:return '工作人員將在指定時間上門服務'
          case 2:return '此單已完成'
          
      }
      
      
  };
})

.factory('AuthService', [function(){

    return  {
    
        isLogined:function(){
            return  window.localStorage['user']?    true:false
        },
        login:function(user){
            window.localStorage['user']=JSON.stringify(user);
        },
        logout:function(){
             window.localStorage['user']  = undefined
        },
        get:function(){
            JSON.parse(window.localStorage['post'] || '{}');
        }
        
    } 
}])