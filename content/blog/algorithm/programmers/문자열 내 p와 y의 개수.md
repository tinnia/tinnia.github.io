---
title: "문자열 내 p와 y의 개수"
date: "2021-01-21T04:46:36.169Z"
path: "/Algorithm/programmers/12916/"
category: "Algorithm"
ci: "Lv1"
cat: "PROGRAMMERS"
tags: ["PROGRAMMERS", "Python", "Lv1"]
description: "[Python | Programmers] 문자열 내 p와 y의 개수"
---

<br />

<a href="https://programmers.co.kr/learn/courses/30/lessons/12916"><small>문제 바로가기</small></a>

###### 입출력

| s       | answer |
| ------- | ------ |
| pPoooyY | true   |
| Pyy     | false  |

<br />

##### <h5 style="color:#C587AE;">💻 풀이</h5>

```python
def solution(s):
    s = s.lower()
    if s.count('p') == s.count('y'):
        return True
    return False
```

<br />

