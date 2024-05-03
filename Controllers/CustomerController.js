angular.module('myApp').controller('CustomerController', ['CustomerService', function(CustomerService) {
    var vm = this;
    vm.customer = {};

    vm.register = function(form) {
        if (form.$valid) {
            CustomerService.registerCustomer(vm.customer).then(function(response) {
                alert('Customer registered successfully!');
                vm.customer = {}; // Reset the form
                form.$setPristine();
            }, function(error) {
                alert('Failed to register customer');
            });
        } else {
            alert('Please fill out the form correctly.');
        }
    };
}]);
