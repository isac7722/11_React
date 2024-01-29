# 퀴즈쇼

### 일반 변수에 정답을 입력함
### 2가지 state를 만든다.
---
    state
    input : text
    isDone : boolean
---

사용자가 입력한 값이 정답과 같은 경우 isDone의 상태를 true로 만들고
useEffect에서 isDone의 상태를 감지하여 축하드립니다. 메세지 출력

#### 문제접근
1. 2개의 state 이용
2. useEffect 활용

문제를 출제
정답과 사용자 입력 비교
같으면 isDone = true || false

isDone의 상태 변화를 감지함