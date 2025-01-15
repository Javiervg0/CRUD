var app = angular.module('myApp', []);

app.controller('myController', function ($scope) {
    $scope.users = [];
    $scope.alertMassege = '';
    $scope.newUser = {};
    $scope.clickedUser = {};

    // nuevo usuario
    $scope.saveUser = function () {
        $scope.users.push($scope.newUser);
        $scope.newUser = {};
        $scope.alertMassege = '¡Nuevo usuario agregado exitosamente!';
    };

    //  editar o eliminar
    $scope.selectUser = function (user) {
        $scope.clickedUser = user;
    };

    // Actualizar 
    $scope.updateUser = function () {
        $scope.alertMassege = '¡Usuario actualizado exitosamente!';
    };

    // Eliminar
    $scope.deleteUser = function () {
        var index = $scope.users.indexOf($scope.clickedUser);
        $scope.users.splice(index, 1);
        $scope.alertMassege = '¡Usuario eliminado exitosamente!';
    };

    //  alertas
    $scope.clickedAlert = function () {
        $scope.alertMassege = '';
    };
});
