export let slackLoginController = function($scope, $http, $state) {
  $scope.checkAuth = function() {
    $http.get("/auth/check")
      .then(function(res) {
        console.log(res);
        if (res.data !== null && res.data === true) {
          $scope.authenticated = true;
          $state.go('passenger');
        } else {
          $scope.authenticated = false;
        }
      })
      .catch(function() {
        $scope.authenticated = false;
      });
  }
  $scope.checkAuth();
}