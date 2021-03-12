---
title: "N-Queen"
date: "2021-02-25T19:53:46.169Z"
path: "/Algorithm/programmers/12952/"
category: "Algorithm"
ci: "Lv3"
cat: "PROGRAMMERS"
tags: ["PROGRAMMERS", "Python", "Lv3"]
description: "[Python | Programmers] N-Queen"
---

<br />

<a href="https://programmers.co.kr/learn/courses/30/lessons/12952"><small>문제 바로가기</small></a>

###### 입출력

| n    | result |
| ---- | ------ |
| 4    | 2      |

<br />

##### <h5 style="color:#C587AE;">💻 풀이</h5>

```python
def check(queen, row, col, n):
    for i in range(row):
        if col == queen[i] or abs(col - queen[i]) == row - i:
            return False
    return True


def dfs(queen, row, n):
    if row == n:
        return 1
    cnt = 0
    for col in range(n):
        if check(queen, row, col, n):
            queen[row] = col
            cnt += dfs(queen, row + 1, n)
    return cnt


def solution(n):
    return dfs([0] * n, 0, n)
```

<br />



