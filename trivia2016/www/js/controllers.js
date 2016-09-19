angular.module('starter.controllers', ['ngCordova'])

.controller('DashCtrl', function($scope, $state, $stateParams, $cordovaVibration) {

  $scope.respuesta = {};
  $scope.preguntas = "¿Quien fue el ultimo campeon del mundo en brasil 2014?";
  $scope.respuesta.op1 = "Alemania";
  $scope.respuesta.op2 = "Argentina";
  $scope.respuesta.op3 = "Brasil";
  $scope.respuesta.op4 = "Inglaterra";
  $scope.respuesta.correcta = "Alemania";
  $scope.contador = 0;

  $scope.usuario = {};
  $scope.usuario.respuesta =[];
  $scope.usuario.puntaje = 0;


 $scope.Respuesta = function(rta){
  $scope.contador ++;
  $scope.eligio = true;
  if (rta == 'a') {
    $scope.usuario.respuesta[$scope.contador]=$scope.respuesta.op1;
  }
  else if (rta == 'b') {
    $scope.usuario.respuesta[$scope.contador]=$scope.respuesta.op2;
  }
  else if (rta == 'c') {
    $scope.usuario.respuesta[$scope.contador]=$scope.respuesta.op3;
  }
  else if (rta == 'd') {
    $scope.usuario.respuesta[$scope.contador]=$scope.respuesta.op4;
  }

  if ($scope.usuario.respuesta[$scope.contador] != $scope.respuesta.correcta){
    $scope.usuario.puntaje-=10;
    try{
      $cordovaVibration.vibrate([500, 200, 500]);
      } catch(ex){
          console.log(ex.message);
        }
    }
    else
      $scope.usuario.puntaje+=10;
      try{
      $cordovaVibration.vibrate(500);
      } catch(ex){
          console.log(ex.message);
        }
    alert($scope.usuario.puntaje);
    if ($scope.contador==3) {
      $state.go('tab.estadisticas');
    }      
  }


  $scope.CargarPregunta = function(){
    if ($scope.contador == 1) {
      $scope.eligio=false;
      $scope.preguntas = "¿Quien fue el ultimo campeon de la copa Libertadores De America?";
      $scope.respuesta.op1 = "Boca Juniors";
      $scope.respuesta.op2 = "Atletico Nacional de Medellin";
      $scope.respuesta.op3 = "San Pablo";
      $scope.respuesta.op4 = "Colo Colo"; 
      $scope.respuesta.correcta = "Atletico Nacional de Medellin"
      }
    else
      if ($scope.contador == 2) {
      $scope.eligio=false;
      $scope.preguntas = "¿Quien fue el ultimo campeon del torneo Argentino?";
      $scope.respuesta.op1 = "Belgrano de cordoba";
      $scope.respuesta.op2 = "Racing";
      $scope.respuesta.op3 = "Lanus";
      $scope.respuesta.op4 = "San Lorenzo";
      $scope.respuesta.correcta = "Lanus"
      }
  }
;
})


.controller('ChatsCtrl', function($scope, Chats, $state, $stateParams) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  $scope.Jugar = function(){
  	$state.go('tab.dash');
  };

})

.controller('EstadisticasCtrl', function($scope, $stateParams, Chats) {
  alert("llego a estadisticas");
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});



