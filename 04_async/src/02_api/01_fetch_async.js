/* 
    ajax를 사용 비동기식으로 서버에 데이터를 가져올 수 있다
    ajax 외에도 서버에서 네트워크 요청을 받아올 수 있는 방법은 fetch
    fetch 대부분 모던 브라우저에 지원하고 있다

    기본 사용 방법
    let promis = fetch(url, [option])

    url : 접근하고자 하는 url
    options : 선택 매개변수로 http method나 Headers, body 내용을 객체로 지정할 수 있다

    options에 아무 값도 넣지 않으면 기본 get 메소드 (8가지 http method)로 요청하게 된다

    fetch를 호출하면 브라우저는 네트워크 요청을 보내고 promise를 반환한다
    반환받은 promise가 내장 클래스 response 인스턴스와 함께 이행 상태가 된다

    아직 본문(body)이 도착하기 전이지만 개발자는 응답 헤더를 보고 요청이 성공적으로 처리되었는지 할 수 있다
    네트워크 문제로 존재하지 않은 경로 혹은 http 요청을 보낼 수 없는 상태에서는 promise는 거부 상태가 된다
    fake api를 제공하고 RestAPI 방식으로 데이터를 호출할 수 있는 경로
    https://jsonplaceholder.typicode.com

*/

async function callApi(){
    const promise = fetch("https://jsonplaceholder.typicode.com/users")
                            
    // promise의 반환 타입을 이용하여 사용하기
    // promise.then(reponse =>{
    //     console.log(reponse)
    // });


    // async await를 이용하여 사용하기
    const response = await promise;
    console.log(response);

    console.log(`응답 상태 : ${response.status}`)
    console.log("응답 헤더");
    for(let [key, value] of response.headers){
        console.log(`${key}:${value}`);

    }

    console.log(`본문 내용 사용 여부 : ${response.bodyUsed}`);

    const json = await response.json();
    console.log(json);

    json.forEach(element => {
        console.log(element)
    });
}

callApi();