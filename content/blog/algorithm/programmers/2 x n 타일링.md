---
title: "2 x n 타일링"
date: "2021-02-24T20:55:46.169Z"
path: "/Algorithm/programmers/12900/"
category: "Algorithm"
ci: "Lv3"
cat: "PROGRAMMERS"
tags: ["PROGRAMMERS", "Python", "Lv3"]
description: "[Python | Programmers] 2 x n 타일링"
---

<br />

<a href="https://programmers.co.kr/learn/courses/30/lessons/12900"><small>문제 바로가기</small></a>

###### 입출력

| n    | result |
| ---- | ------ |
| 4    | 5      |

<br />

##### <h5 style="color:#C587AE;">💻 풀이</h5>

```python
def solution(n):
    dp = [0] * n
    dp[0], dp[1] = 1, 2
    for i in range(2, n):
        dp[i] = (dp[i - 1] + dp[i - 2]) % 1000000007
    return dp[n - 1]
```

<br />



