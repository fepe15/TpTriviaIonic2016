angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
	
alert("llego");
  $scope.respuesta = {};
  $scope.preguntas = "¿Quien fue el ultimo campeon del mundo en brasil 2014?";
  $scope.respuesta.op1 = "Alemania";
  $scope.respuesta.op2 = "Argentina";
  $scope.respuesta.op3 = "Brasil";
  $scope.respuesta.op4 = "Inglaterra";
  $scope.contador = 0;

  $scope.usuario = {};
  $scope.usuario.respuesta ={}
  $scope.usuario.respuesta.uno ={}
  $scope.usuario.respuesta.dos ={}
  $scope.usuario.respuesta.tres ={}
  $scope.usuario.puntaje = {};

 $scope.Respuesta = function(rta){
  $scope.contador ++;
  $scope.eligio = true;
  alert("llegoALaFuncion");
  if (rta == 'a') {
    $scope.usuario.respuesta.uno=$scope.respuesta.op1;
    $scope.usuario.puntaje+=10;
  }
  if (rta == 'b') {
    $scope.usuario.respuesta.uno=$scope.respuesta.op2;
    $scope.usuario.puntaje+=-10;
          alert("solaaaa");
  }
  if (rta == 'c') {
    $scope.usuario.respuesta.uno=$scope.respuesta.op3;
    $scope.usuario.puntaje+=-10;
  }
  if (rta == 'd') {
    $scope.usuario.respuesta.uno=$scope.respuesta.op4;
    $scope.usuario.puntaje+=-10;
  }
  alert($scope.usuario.respuesta.uno + "-" + $scope.usuario.puntaje);

}
  $scope.CargarPregunta = function(){
    alert($scope.contador)
    if ($scope.contador == 1) {
      $scope.eligio=false;
      $scope.preguntas = "¿Quien fue el ultimo campeon de la copa Libertadores De America?";
      $scope.respuesta.op1 = "Boca Juniors";
      $scope.respuesta.op2 = "Atletico Naciona de Medellin";
      $scope.respuesta.op3 = "San Pablo";
      $scope.respuesta.op4 = "Colo Colo";
      }
      else
        if ($scope.contador == 2) {
        $scope.eligio=false;
        $scope.preguntas = "¿Quien fue el ultimo campeon del torneo Argentino?";
        $scope.respuesta.op1 = "Belgrano de cordoba";
        $scope.respuesta.op2 = "Racing";
        $scope.respuesta.op3 = "Lanus";
        $scope.respuesta.op4 = "San Lorenzo";
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

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});



