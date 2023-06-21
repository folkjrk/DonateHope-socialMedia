const assert =  require('chai').assert;
// const sayHello = require('../app').sayHello;
// const addNumber = require('../app').addNumber;
const app = require('../app');

//Result
sayHelloResult = app.sayHello();
addNumberResult = app.addNumber(5,5);

describe('App', function(){
    
    describe('sayHello', function(){
        it('app should return hello', function(){
            //let result = app.sayHello();
            assert.equal(sayHelloResult, 'hello');
        });
        it('sayHello should return type string', function(){
            //let result =app.sayHello();
            assert.typeOf(sayHelloResult, 'string');
        });
    });

    describe('addNumber', function(){
        it('addNumber should return be above 5', function(){
            //let result = app.addNumber(5,5);
            assert.isAbove(addNumberResult,5);
        });
        it('addNumber should return type number', function(){
            //let result = app.addNumber(5,5);
            assert.typeOf(addNumberResult,'number');
        });
    })
    
});
 