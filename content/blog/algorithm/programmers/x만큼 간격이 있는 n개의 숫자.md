---
title: "x만큼 간격이 있는 n개의 숫자"
date: "2021-01-21T23:58:46.169Z"
path: "/Algorithm/programmers/12954/"
category: "Algorithm"
ci: "Lv1"
cat: "PROGRAMMERS"
tags: ["PROGRAMMERS", "PYTHON", "Lv1"]
description: "[Python | Programmers] x만큼 간격이 있는 n개의 숫자"
---

<br />

<a href="https://programmers.co.kr/learn/courses/30/lessons/12954"><small>문제 바로가기</small></a>

###### 입출력

| arr1          | arr2          | return        |
| ------------- | ------------- | ------------- |
| [[1,2],[2,3]] | [[3,4],[5,6]] | [[4,6],[7,9]] |
| [[1],[2]]     | [[3],[4]]     | [[4],[6]]     |

<br />

##### <h5 style="color:#C587AE;">💻 풀이</h5>

```python
def solution(x, n):
    answer = []
    for i in range(n):
        answer.append(x+x*i)
    return answer
```



<br />

