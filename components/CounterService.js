let instance = null;
const CounterService = () => {
    let count = 0;

    return{
        increment: () => {
            count +=1;
        },
        decrement: () => {
            count -=1;
        },
        reset: () => {
            count = 0;
        },
        getCount: () => count
    }
    
}
const getCounterService = () => {
    if(!instance) {
        console.log('instance',instance)
        instance = CounterService();
    }
    return instance;
}


export default getCounterService;