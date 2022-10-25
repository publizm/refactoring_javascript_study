# Chapter12 - 상속 다루기
상속은 코드를 재사용하기 위해 사용한다.(= 확장)

상속의 단점
- 하나만 상속이 가능하다.
- 불필요한 기능이 상속될 수 있다.
- 족보(?)가 꼬일 수 있다.
- 수정이 어렵다


단순히 코드를 재사용하기 위해서 무조건 상속을 하는 것을 좋지 않다.<br />
상속의 의미가 적합한 곳을 찾아 사용하도록 하자.

코드를 재사용하기 위한 다른 방법은 컴포지션이 있다.
컴포지션(위임)은 상속의 단점을 어느정도 커버할 수 있다.

## 12-1 메서드 올리기
동일하게 사용되는 메서드는 슈퍼클래스로 보내자.
만약 해당 메서드를 변경하고 싶다면 오버라이딩을 활용하자.

## 12-2 필드 올리기
동일하게 사용되는 필드는 슈퍼클래스로 보내자

## 12-3 생성자 본문 올리기
동일한 필드를 사용한다면 super()를 활용해서 슈퍼클래스의 필드로 전달해주도록해서 사용성을 늘리자.
만약 해당하는 필드에 상태에 따라 분기처리를 해야되는 경우라면 슈퍼클래스에서 한번에 처리가 가능하기 때문에 유지보수성이 올라간다.

## 12-4 메서드 내리기
재사용성을 위해서 무조건 적으로 슈퍼클래스에 메소드나 필드를 때려박는 것은 좋지 않다.<br />
규격이 더 헷갈려지므로 특정 하위 클래스에서만 사용되는 경우라면 그 클래스에서만 사용하자

## 12-5 필드 내리기
서브 클래스에서만 사용한다면 서브클래스에서만 사용하자.

## 12-6 타입 코드를 서브클래스로 바꾸기
생성자에서 validate로 에러를 던지는 것은 나쁜 코드이다.<br />
외부에서 실수할 수 있는 코드에 대해 방어하기 위해서 validate 코드를 넣는 것은 좋지 않다.

## 12-7 서브클래스 제거하기
팩토리 메소드..? = 외부에서 사용하기 쉽게 제공해주는 메소드..?

## 12-8 슈퍼클래스 추출하기

## 12-9 계층 합치기

## 12-10 서브클래스를 위임으로 바꾸기
javascript나 java와 같은 언어는 다중상속이 허용되지 않는다.
위임을 활용하면 동일한 클래스를 이용하여 전달된 위임자에 따라서 다른 행동을 할 수 있다.

상속은 수직적인 관계를 이용해서 코드를 재사용한다는 개념
한계점은 상속은 하나만 받을 수 있고, 부모 클래스에 기능이 추가되면 하위 클래스에도 추가가 되는 문제가 있다.

위임은 필요한 부품 외부로부터 주입받아서 주입받은 부품을 활용하는 것이라고 생각할 수 있다.

위임은 외부로부터 전달받는 것이 좋다(테스트 코드 짜거나 유지보수 측면에서)


## 12-11 슈퍼클래스를 위임으로 바꾸기
