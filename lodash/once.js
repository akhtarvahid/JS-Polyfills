function once(func, context) {
    let self;

    return function() {
        if(func) {
            self = func.apply(context || this, arguments);
            func = null;
        }
        return self;
    }
}
const hello = (a) => console.log('Hey',a);
const onceHello = once((a) => console.log('HELLO',a));

hello();
hello(5);
hello(5);

console.log('Once hello fn')
onceHello(10);
onceHello(10)