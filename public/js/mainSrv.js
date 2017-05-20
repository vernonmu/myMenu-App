angular.module('myMenu').service('mainSrv', function($http) {
  console.log('testing');
  this.getFood = function() {
    return $http.get('/api/')
  }
})
