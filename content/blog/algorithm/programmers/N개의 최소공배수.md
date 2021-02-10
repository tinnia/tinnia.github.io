---
title: "N개의 최소공배수"
date: "2021-02-06T15:29:46.169Z"
path: "/Algorithm/programmers/12953/"
category: "Algorithm"
ci: "Lv2"
cat: "PROGRAMMERS"
tags: ["PROGRAMMERS", "PYTHON", "Lv2"]
description: "[Python | Programmers] N개의 최소공배수"
---

<br />

<a href="https://programmers.co.kr/learn/courses/30/lessons/12953"><small>문제 바로가기</small></a>

###### 입출력

| arr        | result |
| ---------- | ------ |
| [2,6,8,14] | 168    |
| [1,2,3]    | 6      |

<br />

##### <h5 style="color:#C587AE;">💻 풀이</h5>

```python
def solution(arr):
    answer = 1

    def gcd(n, m):
        while m:
            n, m = m, n % m
        return n

    for i in arr:
        answer *= i // gcd(answer, i)
    return answer
```

<br />



