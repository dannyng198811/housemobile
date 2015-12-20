angular.module('app.controllers', [])
  
.controller('homeCtrl', function($scope,OrderService,$location,$ionicPopup,alertService,$http) {
 
   OrderService.query(function(orders){
       
      $scope.orders=orders
   
   },function(err){
   
       $ionicPopup.alert(alertService.netError);
 
       
   });
   
    $scope.addOrder=function(order){
           var order={status:13};
       OrderService.save(order,function(res){
           console.log(res);
           $scope.orders.push(res.ops[0])
       },function(){});
   }
   
    $scope.deleteOrder=function(index,orderid){
        
        OrderService.delete({ id: orderid },function(res){
             $scope.orders.splice(index, 1);
           
          console.log(index);  
        })
    }
   
    
    $scope.likeOrder=function(orderid){
        
       
       
        OrderService.update({ id: orderid},null,function(res){
            
           
          console.log(res);  
        })
       
       
       
        
    }
    
    
})
   
.controller('userCtrl', function($scope,AuthService,$state) {
   
    if(!AuthService.isLogined())
        {
           
            $state.go('tabsController.login')
        }
    
    $scope.user={nikeName:'Danny Ng',email:'emssail@email.com'};


})
   
.controller('manualCtrl', function($scope) {

})
.controller('orderCtrl', function($scope,$stateParams,$state,OrderService,$ionicPopup,alertService,$ionicHistory) {

     
   
    $scope.order=$stateParams.order;
   OrderService.calc.save($scope.order,function(cost){

       $scope.order.price=cost.cost;
   });
     $scope.order.status=0
  
    
   
   $scope.makeOrder=function(){
       
       if(!$scope.order.date)return $ionicPopup.alert(alertService.formError);
       
       OrderService.save($scope.order,function(res){
       
        $ionicPopup.alert(alertService.orderSucceeded);
       $ionicHistory.goBack(-2);
   },function(err){
           console.log('asd')
       $ionicPopup.alert(alertService.netError);

       }) 
       
   }
   
    
   
    
    
})

.controller('prepareCtrl',function($scope,$state,$ionicPopup,alertService){
   
    
    $scope.count=function(order){
       console.log(order)
        if(!order||!order.choice||!order.rooms||!order.bathrooms){
           return $ionicPopup.alert(alertService.formError);
            
        }
       $state.go('tabsController.order2',{order:order});
        
   
        
    } 
    
})
  
 .controller('loginCtrl',function($scope,$state,$ionicPopup,alertService,$http,AuthService){
   
    
   $scope.login=function(user){
       
       if(!user||!user.email||!user.password)
           {
            return $ionicPopup.alert(alertService.formError);   
           }
       
       
       $http.post('http://192.168.1.147:3000/users/auth/',user).then(
           function(res){
          
            
            AuthService.login(res)
       },function(res){
             $ionicPopup.alert(alertService.loginError);
       })
       
   }
    
}) 

.controller('registerCtrl',function($scope,$state,$ionicPopup,alertService){
   
    
   
    
})   