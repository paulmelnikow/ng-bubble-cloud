angular.module('bubbleCloudTest')

.controller('AccountsCtrl', function ($scope) {
    $scope.assets = [
        { name: 'Checking & Savings', balance: 2000 },
        { name: 'Money Market', balance: 11000 },
        { name: 'Retirement account', balance: 28000 },
        { name: 'Car', balance: 3000 },
    ];
    $scope.liabilities = [
        { name: 'Credit Cards', balance: 5000 },
        { name: 'Laptop', balance: 1500 },
        { name: 'Student Loans', balance: 35000 },
    ];

    $scope.chart_data = {
        assets: $scope.assets,
        liabilities: $scope.liabilities,
    };

    $scope.fill_color = function (group) {
        return group === 'assets' ? '#3eb536' : '#641726';
    }

    $scope.label_color = function (group) {
        return group === 'assets' ? 'black' : '#8c8c8c';
    }

    $scope.tooltip_format = function (datum) {
        return datum.object.name + ': $' + d3.format(',d')(datum.object.balance);
    }

    $scope.new = function (collection) {
        // Pass $scope.assets or $scope.liabilities to create a new item
        collection.push({name: ''});
    }

    $scope.remove = function (collection, item) {
        collection.$remove(item.$id);
    }

})

;
