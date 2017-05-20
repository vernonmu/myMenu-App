angular.module('myMenu').controller('mainCtrl', function($scope, mainSrv) {

  
    $scope.getFood = function() {
      mainSrv.getFood().then(function(response) {
        console.log(response);
        $scope.food = response.data
      })
    }

    $scope.getFood()

    $scope.addItem = function() {
        var itemToPush = {
            itemName: $scope.inputItemName,
            description: $scope.inputDescription,
            price: $scope.inputPrice
        }
        $scope.menu.push(itemToPush)
        $scope.newItem = ''
        $scope.inputItemName = ''
        $scope.inputDescription = ''
        $scope.inputPrice = ''
    }







      $(".dropdown-button").dropdown();



    // end controller
})
