---
title: "JadenCase 문자열 만들기"
date: "2021-02-06T15:42:46.169Z"
path: "/Algorithm/programmers/12951/"
category: "Algorithm"
ci: "Lv2"
cat: "PROGRAMMERS"
tags: ["PROGRAMMERS", "Python", "Lv2"]
description: "[Python | Programmers] JadenCase 문자열 만들기"
---

<br />

<a href="https://programmers.co.kr/learn/courses/30/lessons/12951"><small>문제 바로가기</small></a>

###### 입출력

| s                     |        return         |
| --------------------- | :-------------------: |
| 3people unFollowed me | 3people Unfollowed Me |
| for the last week     |   For The Last Week   |

<br />

##### <h5 style="color:#C587AE;">💻 풀이</h5>

```python
def solution(s):
    answer = ''
    s = s.lower()
    lst = s.split(' ')
    for i in lst:
        i = i.capitalize()
        answer += i + ' '
    return answer
```

<br />



