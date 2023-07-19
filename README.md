# MadPolio
## Make your PERFECT portfolio
---
Week2 4분반 경민,창우팀

- 개발자와 디자이너를 위해 입력한 내용을 바탕으로 포트폴리오 사이트를 생성해 줍니다.
- 다른 사람이 올린 포트폴리오를 검색할 수 있습니다.
- 개발자/디자이너를 위한 채용 공고도 확인할 수 있습니다.

---

### a. 개발 팀원

- 이창우 - POSTECH 컴퓨터공학과 20학번
- 김경민 - 한양대학교 컴퓨터소프트웨어학부 19학번

---

### b. 개발환경

- Language: React.js, Node.js
- Database: MongoDB

```
- IDE: Visual Studio code

---

### c. Web applicaiton 소개

### 0.Login

***Major features***

- 쇼핑 앱에 어울리는 SplashScreen이 적용되어 있습니다.
- 일반 로그인 외 Kakao 로그인이 가능합니다. 이 경우 별도 닉네임을 설정할 수 있습니다.
- 새 계정을 만들때 사용자의 성별과 선호 항목(스타일, 색상, 가격대)을 설정할 수 있습니다.

---

***기술설명***

- Mainactivity에서 ```startActivityForResuilt```를 통해 바로 LoginActivity로 넘어옵니다. 
- splash 구현은 MainActivity에서 imageView의 Visibility를 조절하는 방식을 사용했습니다.
- Handler를 이용해 일정시간 지연 후 로그인 화면이 실행되게 하였습니다.
- Kakao 로그인의 경우 Token에서 회원 고유 ID를 얻어 처리합니다.
- 앱에서 사용하는 모든 이미지 소스는 xml과 피그마, PPT, 포토샵을 이용해 직접 제작했으며, 이를 통해 일관된 디자인을 구현하였습니다.

---

