---
title: "Crawling - Selenium 모듈"
date: "2021-02-26T16:41:32.169Z"
path: "/Project/crawling/3/"
category: "Project"
ci: "WEB"
cat: "WEB"
tags: ["WEB", "Python", "Crawling", "Selenium"]
description: "Crawling - Selenium 모듈"
---



### Selenium

* 크롤링계의 끝판왕..
* BeautifulSoup로 크롤링이 되지 않아서 Selenium 모듈을 사용하여 크롤링 했음 (네이버 hsk단어장 크롤링)
* 웹페이지 테스트 자동화용 모듈로 직접 사용자가 사용하듯이 동작함
* **준비물** : [크롬 드라이버](https://chromedriver.chromium.org/downloads)

###### 모듈

```python
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By

import time
```



###### 기본 예제

```python
chrome_driver = '크롬드라이버의 설치된 위치'
driver = webdriver.Chrome(chrome_driver)

driver.get('https://www.naver.com')	# 브라우저 열기

data = driver.find_element_by_id('id이름')	# id이름의 id를 가진 것 찾기
data.clear()	# 지우기

data.send_keys('뭐 검색하지')		# 검색어 입력
data.send_keys(Keys.RETURN)		# Enter 치기	(검색 하기)

time.sleep(3)	# 기다리기
driver.close()	# 브라우저 닫기
```

```python
chrome_driver = '크롬드라이버의 설치된 위치'
driver = webdriver.Chrome(chrome_driver)

url = 'https://www.naver.com'
driver.get(url)

src = driver.page_source	# 페이지 소스 가져오기

soup = BeautifulSoup(src)
comment_area = soup.select_one('span.alex-count-area')	# span의 alex-count-area의 댓글 가져오기

driver.close()
comment_area.get_text()		# 5개	(댓글 개수)
```



###### 특정 element 로딩

* 랜더링이 되지 않은 상태에서 너무 빨리 브라우저에서 찾으려고 하면 에러 발생

```python
chrome_driver = '크롬드라이버의 설치된 위치'
driver = webdriver.Chrome(chrome_driver)

url = '네이버 뉴스 url'
driver.get(url)

# 해당 element가 로딩 될때까지 대기 - 최대 10초간 '.u_cbox_count'가 로딩될 때까지 기다리는 것
myElem = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.CSS_SELECTOR, '.u_cbox_count')))

src = driver.page_source
soup = BeautifulSoup(src)
comment_area = soup.select_one('.u_cbox_count')
driver.close()
print(comment_area)
```



###### 심화 예제

1. 뉴스 제목 크롤링

   ```python
   import requests
   from bs4 import BeautifulSoup
   ```

   ```python
   def get_news_title(news_id):
       url = 'https://news.v.daum.net/v/' + news_id
       data = requests.get(url)
       soup = BeautifulSoup(data.text)
       
       title = soup.select_one('h3.tit_view')
       if title:
           return title.get_text()
       return ""
   
   get_news_title('20210226111455056')
   ```

2. 뉴스 본문 크롤링

   ```python
   def get_news_content(news_id):
       url = 'https://news.v.daum.net/v/' + news_id
       data = requests.get(url)
       soup = BeautifulSoup(data.text)
       
       content = ''
       for p in soup.select('#harmonyContainer p'):
           content += p.get_text()
       return content
   
   get_news_content('20210226111455056')
   ```

3. 뉴스 댓글 크롤링

   ```python
   url = 'https://comment.daum.net/apis/v1/posts/154098686/comments?parentId=0&offset=0&limit=3&sort=LATEST&isInitial=true&hasNext=true'
   headers = {
           'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb3J1bV9rZXkiOiJuZXdzIiwiZ3JhbnRfdHlwZSI6ImFsZXhfY3JlZGVudGlhbHMiLCJzY29wZSI6W10sImV4cCI6MTYxNDM2Nzc5NywiYXV0aG9yaXRpZXMiOlsiUk9MRV9DTElFTlQiXSwianRpIjoiMjc5ZDI4M2YtMjFjOS00NGFjLTkwYWMtMDYyMTE0ZWFmYTNlIiwiZm9ydW1faWQiOi05OSwiY2xpZW50X2lkIjoiMjZCWEF2S255NVdGNVowOWxyNWs3N1k4In0.YGz1D2aT1VM2ljS7yNTqt5LtoE-9sY14BTH3lO8FXR8',
           'Origin': 'https://news.v.daum.net',
           'Referer': 'https://news.v.daum.net/v/20210226111455056',
           'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36'
   }
   data = requests.get(url, headers=headers)
   data.json()
   ```

   * 함수로 만들기 (offset을 적절하게 활용)

   ```python
   def get_daum_news_comments(news_id):
       headers = {
           'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb3J1bV9rZXkiOiJuZXdzIiwiZ3JhbnRfdHlwZSI6ImFsZXhfY3JlZGVudGlhbHMiLCJzY29wZSI6W10sImV4cCI6MTYxNDM2Nzc5NywiYXV0aG9yaXRpZXMiOlsiUk9MRV9DTElFTlQiXSwianRpIjoiMjc5ZDI4M2YtMjFjOS00NGFjLTkwYWMtMDYyMTE0ZWFmYTNlIiwiZm9ydW1faWQiOi05OSwiY2xpZW50X2lkIjoiMjZCWEF2S255NVdGNVowOWxyNWs3N1k4In0.YGz1D2aT1VM2ljS7yNTqt5LtoE-9sY14BTH3lO8FXR8',
           'Origin': 'https://news.v.daum.net',
           'Referer': 'https://news.v.daum.net/v/20210226111455056',
           'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36'
       }
       data = requests.get('https://comment.daum.net/apis/v1/ui/single/main/@' + news_id, headers=headers)
       get_news_id = data.json()['post']['id']
       url_template = 'https://comment.daum.net/apis/v1/posts/{}/comments?parentId=0&offset={}&limit=3&sort=LATEST&isInitial=true&hasNext=true'
       offset = 0
       comments = []
       while True:
           url = url_template.format(get_news_id, offset)
           resp = requests.get(url, headers=headers)
           comment = resp.json()
           if not comment:
               break
               
           comments.extend(comment)
           offset += 10
           
       return comments
   
   get_daum_news_comments('20210226111455056')
   ```

   













