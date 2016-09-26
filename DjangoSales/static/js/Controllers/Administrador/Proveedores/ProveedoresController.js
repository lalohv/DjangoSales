SalesApp.controller('proveedoresController', function($scope, $http,$rootScope) {


 var obtenerLista=function(){
  $http.get('/api/proveedores/').success(function(data) {
        $scope.proveedores=data;
       });
}

$scope.EditarProveedor=function(proveedor){
  $rootScope.$emit('test',proveedor);

};

$scope.Agregaproveedor=function(){
     $('#Modalproveedor').modal('show');

}

obtenerLista();

});


SalesApp.controller('EditproveedoresController', function($scope, $http,$rootScope) {

 var obtenerLista=function(){
  $http.get('/api/proveedores/').success(function(data) {
        $scope.proveedores=data;
       });
}


  $rootScope.$on('test', function(event,data) {
           $('#Modalproveedor').modal('show');
           $scope.btnEditar=true;
           $scope.btnGuardar=false;
           $scope.content="<h4 class='modal-title'>editar</h4>";
           $scope.proveedor=data.nombre;
           $scope.id=data.id;
           $scope.telefono=data.telefono;
           $scope.direccion=data.direccion;
           $scope.correo=data.correo;
          });

$scope.Editproveedor=function(){
  Proveedor={};
  Proveedor.id=$scope.id;
  Proveedor.nombre=$scope.proveedor;
  Proveedor.telefono=$scope.telefono;
  Proveedor.direccion=$scope.direccion;
  Proveedor.correo=$scope.correo;

  $http.put('/api/proveedores/'+Proveedor.id+'/',JSON.stringify(Proveedor)).success(function(data) {
    $('#Modalproveedor').modal('hide');
    obtenerLista();
    
         });
}

$scope.Addproveedor=function(){
  $scope.content="<h4 class='modal-title'>agregar </h4>";
  Proveedor={};
  Proveedor.nombre=$scope.proveedor;
  Proveedor.telefono=$scope.telefono;
  Proveedor.direccion=$scope.direccion;
  Proveedor.correo=$scope.correo;

  $http.post('/api/proveedores/',Proveedor).success(function(data) {
    $('#Modalproveedor').modal('hide');
    obtenerLista();
   
       });

}



});
