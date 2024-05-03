angular.module('myApp').service('CustomerService', ['$http', function($http) {
    this.registerCustomer = function(customerData) {
        return $http.post('/api/customers', customerData);
    };
}]);
