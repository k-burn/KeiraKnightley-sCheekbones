let FoodApp = angular.module('FoodApp', []);

FoodApp.controller('FoodController', function(){
    let vm = this;
    vm.FoodsILike =[];

    vm.addFood = function(){
        console.log('in addFood', vm.foodIn);
        vm.FoodsILike.push(vm.FoodIn);
        console.log('foods so far:' , vm.FoodsILike);   
    }
});