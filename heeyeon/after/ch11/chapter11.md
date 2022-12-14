### ch11

- API 리팩터링
  - 좋은 모듈/클래스는 내부 구현사항은 캡슐화 되어 있어야 한다.
  - 하나의 일만 하도록, 그 목적이 잘 드러나는 이름으로 짓자.
  - 단순 조회와 수정하는 동작을 명확하게 분리
  - 헷갈리는 방식 지양 (복잡한 매개변수들)

### ch11/11-1.js

- 질의 함수와 변경 함수 분리하기

### ch11/11-2.js

- 함수 매개변수화하기
  - 중복되는 함수 뽑아내기

### ch11/11-3.js

- 플래그 인수 제거하기
  - 플래그 인수를 가능하면 사용하지 않는게 가독성에 좋다.
  - 뭘 호출하는지 어떤 명령을 하는지 명료하게 만들어야 한다.

### ch11/11-4.js

- 객체 통째로 넘기기
  - 객체를 통으로 넘기면 간편하지만, 그에 반해 의존성이 높아지고 불필요하게 커플링되진 않는지 고려해야 한다.

### ch11/11-5.js

- 매개변수를 질의 함수로 바꾸기

### ch11/11-6.js

- 질의 함수를 매개변수로 바꾸기
  - 응집도가 높은 상태 > 내부적으로 매개변수를 전달받기 보다는 질의함수형태로 바꾸는 것이 좋다.
  - 응집도가 낮은 상태 > 외부 모듈을 주고 받을때 필요한 데이터를 외부로 부터 전달받는 것이 좋다.

### ch11/11-7.js

- 세터 제거하기

### ch11/11-8.js

- 생성자를 팩터리 함수로 바꾸기
  - 인스턴스를 만드는 로직을 캡슐화하고 외부에서는 간결하게 사용하기 위해서 팩터리 함수를 사용한다.

### ch11/11-9.js

- 함수를 명령으로 바꾸기

### ch11/11-10.js

- 명령을 함수로 바꾸기
  - 단순히 주어진 데이터를 이용해서 한번만 계산하는 일시적인 경우라면, class보다 함수로 만들어 재사용하는 것이 유용할 수 있다.

### ch11/11-11.js

- 수정된 값 반환하기

### ch11/11-12.js

- 오류 코드를 예외로 바꾸기
  - error class 만들어 사용하기

### ch11/11-13.js

- 예외를 사전확인으로 바꾸기
  - 예외인지 우리가 예상하는 실패 케이스인지 구분해야한다
