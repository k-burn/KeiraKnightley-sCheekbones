let FoodApp = angular.module('FoodApp', []);

FoodApp.controller('FoodController', function(){
    let vm = this;
    vm.foodsILike =[];

    vm.addFood = function(){
        console.log('in addFood', vm.foodIn);
        vm.foodsILike.push(vm.foodIn);
        console.log('foods so far:' , vm.foodsILike);   
    }
});