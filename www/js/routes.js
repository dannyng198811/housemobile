angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
        
    .state('tabsController.home', {
      url: '/home',
      cache: false,
      views: {
        'hometab': {
          templateUrl: 'templates/home.html',
          controller: 'homeCtrl'
        }
      }
    })
        
      .state('tabsController.order1', {
      url: '/order1',
      cache: true,
      views: {
        'hometab': {
          templateUrl: 'templates/order1.html',
          controller: 'prepareCtrl'
        }
      }
    })  
  .state('tabsController.order2', {
      url: '/order2',
       cache: true,
      views: {
        'hometab': {
          templateUrl: 'templates/order2.html',
          controller: 'orderCtrl'
        }
      },
      params: {
        order: null
    }
    })    
    
      
        
    .state('tabsController.user', {
      url: '/user',
      cache: false,
      views: {
        'usertab': {
          templateUrl: 'templates/user.html',
          controller: 'userCtrl'
        }
      }
    })
  
  .state('tabsController.login', {
      url: '/login',
      cache: false,
      views: {
        'usertab': {
          templateUrl: 'templates/login.html',
          controller: 'loginCtrl'
        }
      }
    })
  
  .state('tabsController.register', {
      url: '/register',
      cache: false,
      views: {
        'usertab': {
          templateUrl: 'templates/register.html',
          controller: 'registerCtrl'
        }
      }
    })
        
      
    
      
        
    .state('tabsController.manual', {
      url: '/manual',
      views: {
        'manualtab': {
          templateUrl: 'templates/manual.html',
          controller: 'manualCtrl'
        }
      }
    })
    
      
    
      
    .state('tabsController', {
      url: '/page1',
      cache: false,
      abstract:true,
      templateUrl: 'templates/tabsController.html'
    })
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/page1/home');

});