# MadPolio
## Make your PERFECT portfolio
[Visit](https://f739-143-248-193-227.ngrok-free.app/)
---

<img src="https://github.com/rudals9686/madcamp_week3/assets/20718582/8fba3bbb-cadd-4a6c-b51a-3c1949f0c239" width="1000" height="700">
<img src="https://github.com/rudals9686/madcamp_week3/assets/20718582/5d0c0d7a-43b0-4b5d-8b5f-a854ab63e6a9" width="800" height="700">


- 개발자와 디자이너를 위해 입력한 내용을 바탕으로 포트폴리오 사이트를 생성해 줍니다.
- 다른 사람이 올린 포트폴리오를 검색할 수 있습니다.
- 개발자/디자이너를 위한 채용 공고도 확인할 수 있습니다.

---

### a. 개발 팀원

---

### b. 개발환경

- Language: React.js, Node.js
- Database: MongoDB
- IDE: Visual Studio code

---

### c. Web applicaiton 소개

### 1.Create Portfolio

<img src="https://github.com/rudals9686/madcamp_week3/assets/20718582/c91b757b-aec6-443f-b19c-f682206c6ad1" width="1000" height="700">
<img src="https://github.com/rudals9686/madcamp_week3/assets/20718582/081d037a-c0ff-479e-a135-c5de9eb31aff" width="1000" height="700">


***Major features***
- 사용자가 포트폴리오에 들어갈 내용을 입력하면, 미리 만들어진 탬플릿에 해당 내용이 반영됩니다.
- 사용자는 자신의 기본적인 정보와 학력/경력, 기술 스택(디자인 스킬), 진행한 프로젝트 정보를 입력할 수 있습니다.
- 원하는 경우 추가 내용을 입력할 수 있으며, 제목/부제목/내용의 구조로 작성이 가능합니다.

---

***기술설명***
- 사용자가 입력한 직군 정보를 통해 Designer와 Developer를 구분하여 서로 다른 form을 보여줍니다. 
- 입력을 완료한 경우 onsubmit을 호출해 서버로 data를 넘기고, 서버에서 mongodb에 insert하는 방식입니다.
- 사용자가 입력한 정보는 모두 useState를 통해 내용이 변화할때마다 실시간으로 업데이트 됩니다.

---

### 2.Edit Portfolio

<img src="https://github.com/rudals9686/madcamp_week3/assets/20718582/56d5cd7a-6d33-4bc6-8f1a-cb457ca307df" width="1000" height="700">

***Major features***
- 원하는 경우 포트폴리오 내용을 수정할 수 있습니다.

---

***기술설명***
- create시와 같은 form을 사용하되, 원래의 data를 가져와 미리 넣어놓습니다. 

---

### 3.Search

<img src="https://github.com/rudals9686/madcamp_week3/assets/20718582/1cd95a9b-c770-49e1-b697-82cbf7948caa" width="1000" height="400">

***Major features***
- 사용자가 데이터베이스에 있는 모든 포트폴리오를 검색할 수 있습니다.
- 사용자이름, 직군과 일치하는지 확인하여 실시간으로 결과를 필터링할 수 있습니다.
- 검색 결과에서 포트폴리오 항목을 클릭하면 해당 포트폴리오에 대한 페이지로 이동합니다

---

***기술설명***
- 사용자 데이터를 비동기로 가져오는 기능은 React의 useEffect와 axios 라이브러리를 이용해 구현되었습니다. 
- 특정 시간이 지난 후에 HTTP 요청이 발생하고, 요청이 완료되면 사용자 데이터가 앱의 상태로 설정됩니다.
- 포트폴리오를 클릭하면 navigate를 통해 portfolio의 id에 해당하는 값의 viewcv로 전환됩니다.

---
### 4.Hire

<img src="https://github.com/rudals9686/madcamp_week3/assets/20718582/6cffbf84-7dab-4051-b31a-512ae7c703ee" width="1000" height="600">

***Major features***
- 개발자와 디자이너 직무에 대한 채용공고를 제공합니다.
- 사용자는 원하는 직무의 버튼을 클릭하여 개발자와 디자이너의 공고를 전환 할 수 있습니다.
- 각 채용항목에는 채용제목, 회사이름, 요구되는 기술의 정보가 포함됩니다.
- 채용항목을 클릭하면 해당 채용공고의 웹페이지로 직접 이동하게 됩니다.

---

***기술설명***
- axios를 사용하여 서버에서 채용 정보를 가져옵니다. 요청은 비동기적으로 처리되며, 응답이 도착하면 상태가 업데이트되어 새로운 채용공고가 표시됩니다.
- 직무 버튼을 클릭하면 jobtype이 변경되어 해당 endpoint에 맞는 요청을 서버로 보내 채용항목을 업데이트합니다.
- 서버에서는 채용공고 사이트의 채용정보를 크롤링하여 클라이언트에게 보내줍니다.

---
