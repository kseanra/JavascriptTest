describe('my first test', function(){
    it('runs a test', function(){
        expect(0).toEqual(0);
    })

    it('runs a my teset', function(){
        var test = 'Ken';
        expect(test).toEqual('Ken');
    })
})

describe('my controller', function(){
    beforeEach(angular.mock.module('myModule'));
    var $controller

    beforeEach(inject(function(_$controller_){
        $controller = _$controller_;
    }));

    describe('$scope', function(){
        it('adds one', function(){
            var $scope = {};
            var controller = $controller('myCtrl', {$scope: $scope});
            $scope.add();
            expect($scope.count).toEqual(1);
        })
    })
})