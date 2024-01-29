function increase(number){
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            const result = number + 10;
            if(result > 50){
                const e = new Error("number too Big");
                return reject(e);
            }
            resolve(result);
        }, 1000);
    });
    return promise;
}

/* 
    await의 두 가지 기능
    1. await가 달린 함수의 결과인 promise에 담긴 결과(promise 내부의 resolve에 담길 결과)를 반환한다.
    2. await가 달린 비동기 처리들은 동기식으로 동작하게 한다.
 */

async function run(){ // async -> 동기화 처리를 해줄 것이다 선언
    try{
        let result = await increase(0); // await -> 해당 동작이 끝날 때까지 진행을 멈춘다.
        console.log(result);

        result = await increase(0);
        console.log(result);

        result = await increase(0);
        console.log(result);

        result = await increase(0);
        console.log(result);

        result = await increase(0);
        console.log(result);

        return result;

    }catch(e){
        console.log(e, "가 발생했네");
    }
}

// const value = run();

// console.log(value); // 이렇게 작성하면 value까지는 동기이나, console.log(value)는 비동기이다.

const value = async () => {
    const runValue = await run();
    console.log("value : " + runValue);
    return runValue;
}

// value(); -> value : 10으로 출력한다.

const result = value();
console.log(result); // -> 프로미스로 반환된다. 내부 동작은 순차적으로 기다려 주지만 스코프를 벗어난 순간 싱크로를 기다리지 않는다.