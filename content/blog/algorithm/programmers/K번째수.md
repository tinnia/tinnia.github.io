---
title: "K번째수"
date: "2021-01-19T18:45:32.169Z"
path: "/Algorithm/programmers/42748/"
category: "Algorithm"
ci: "Lv1"
cat: "PROGRAMMERS"
tags: ["PROGRAMMERS", "Python", "Lv1"]
description: "[Python | Programmers] K번째수"
---

<br />

<a href="https://programmers.co.kr/learn/courses/30/lessons/42748"><small>문제 바로가기</small></a>

###### 입출력

| array                 | commands                          | return    |
| --------------------- | --------------------------------- | --------- |
| [1, 5, 2, 6, 3, 7, 4] | [[2, 5, 3], [4, 4, 1], [1, 7, 3]] | [5, 6, 3] |

<br />

##### <h5 style="color:#C587AE;">💻 풀이</h5>

```python
def solution(array, commands):
    answer = []
    for i in commands:
        tmp = sorted(array[i[0]-1:i[1]])
        answer.append(tmp[i[2]-1])
    return answer
```

<br />

