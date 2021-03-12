---
title: "Crawling - Beautifulsoup 모듈"
date: "2021-02-26T13:41:32.169Z"
path: "/Project/crawling/2/"
category: "Project"
ci: "WEB"
cat: "WEB"
tags: ["WEB", "Python", "Crawling", "Beautifulsoup"]
description: "Crawling - Beautifulsoup 모듈"
---





### Beautifulsoup

##### 모듈

```python
from bs4 import BeautifulSoup
```



##### find 함수

* 특정 html 태그를 검색하기 위해 사용

* 특징

  1. 처음 발견한 하나의 태그 반환
  2. 특정 class나 id를 가진 데이터를 반환할 수 있음

  ```python
  soup = BeautifulSoup(html)
  soup.find('h2')	# h2태그의 글 찾기
  soup.find('div', id='test')	# id가 test인 div 찾기
  soup.find('div', class_='test')	 # 클래스는 키워드기 때문에 _를 붙여서 찾아야함
  ```

  ```python
  attrs = {'id':'test1', 'class':'test'}	# id가 test1이고, class가 test인 div
  soup.find('div', attrs=attrs)
  ```



###### find_all 함수

* 조건에 맞는 모든 tag를 리스트로 return

```python
soup.find_all('div')
```





###### get_text 함수

* tag 안의 text 추출

  ```python
  data = soup.find('h1')	# <h1>안녕하세요</h1>
  data.get_text()			# 안녕하세요
  ```

  ```python
  data = soup.find('div', id='test')	# <div id='test'><h3>1번입니다</h3><p>2번입니다</p></div>
  data.get_text() 					# 1번입니다\n 2번입니다
  ```



###### attribute 값 추출

```python
data = soup.find('h1')	# <h1 title="this is title">안녕하세요</h1>
data['title']			# this is title
```



###### select & select_one

* select 는 모두, select_one 은 하나

* 자식 태그 ( 바로 밑의 태그 )

  ```python
  soup.select('#idname > p')	# id가 idname인 것 중에 자식인 p 반환
  ```

* 자손 태그

  ```python
  soup.select('#idname  p')	# id가 idname인 것 중에 자손인 p 찾기
  ```

* class 태그

  ```python
  soup.select('h2.title')		# h2태그의 클래스가 title인 것
  soup.select('.title')
  soup.select('h2[class="title"]')
  
  soup.select('h2[class^="t"]')	# h2태그의 클래스가 t로 시작하는 것
  soup.select('h2[class$="t"]')	# h2태그의 클래스가 t로 끝나는 것
  soup.select('h2[class*="t"]')	# h2태그의 클래스가 t를 포함하는 것
  ```

* n번째 자식 찾기

  ```python
  soup.select('p.txt_title')[0] 	# p의 클래스가 txt_title인 것 중 1번째 것
  soup.select('p.txt_title:nth-child(1)') 	# p의 클래스가 txt_title인 것 중 1번째 것
  ```



###### 정규표현식 활용

```python
import re
```

```python
soup.find_all(re.compile('h\d'))	# h1, h2, h3, h4, h5..을 찾을 수 있음
soup.find_all('img', attrs={'src': re.compile('.+\.jpg')})
```



###### 비동기 크롤링

* 참고 : [HTTP 상태 코드](https://tinnia.github.io/Study/web/1/)

* 댓글은 최초 로딩시 전달되지 않고, 추가적으로 AJAX 비동기 호출을 통해 따로 data를 전송해야함.
* `개발자도구 -> network -> XHR(XmlHTTPRequest)`에서 보통 확인 가능함

```python
url = 'https://news.v.daum.net/v/20210226111455056'
data = requests.get(url)
print(data)	# 401에러 발생
```

```python
header = {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb3J1bV9rZXkiOiJuZXdzIiwiZ3JhbnRfdHlwZSI6ImFsZXhfY3JlZGVudGlhbHMiLCJzY29wZSI6W10sImV4cCI6MTYxNDM2NjEyMCwiYXV0aG9yaXRpZXMiOlsiUk9MRV9DTElFTlQiXSwianRpIjoiNWU4MWJmMTItOTgyYy00NDc0LTkwMDAtMmYwZTU1ZWViYTRhIiwiZm9ydW1faWQiOi05OSwiY2xpZW50X2lkIjoiMjZCWEF2S255NVdGNVowOWxyNWs3N1k4In0.mEBJTBTScgVx8A-SkKvm-rE0iYYSba6FVd_dVlpL24Q',
    'Origin': 'https://news.v.daum.net',
    'Referer': 'https://news.v.daum.net/v/20210226111455056',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36'
}
data = requests.get('https://comment.daum.net/apis/v1/ui/single/main/@20210226111455056', headers=header)
print(data)	# 200 (성공)
data.json()['commentCount']	# 5개
```



##### 로그인 크롤링

######  순서

1. endpoint 찾기(개발자 도구 -> network)

   ```python
   url = 'https://~/member_check.asp'
   ```

2. form data 찾기 (id, pwd 전달되는 것)

   ```python
   data = {
       'id': 'yourid',
       'pwd': 'yourpwd'
   }
   ```

3. session 객체 생성해 로그인

   ```python
   ses = requests.Session()	# session 생성
   data = ses.post(url, data=data)	# session을 통해 데이터 얻기
   print(data.status_code)		# 200
   ```

4. session 객체로 원하는 페이지로 이동해 크롤링

   ```python
   profile = 'https://~/profilepage/'
   data = ses.get(profile)
   soup = BeautifulSoup(data.text)
   nickname = soup.select_one('p.nickname')
   print(nickname)
   ```

   



































