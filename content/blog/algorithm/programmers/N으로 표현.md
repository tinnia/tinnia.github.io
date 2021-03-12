---
title: "N으로 표현"
date: "2021-02-24T22:35:46.169Z"
path: "/Algorithm/programmers/42895/"
category: "Algorithm"
ci: "Lv3"
cat: "PROGRAMMERS"
tags: ["PROGRAMMERS", "Python", "Lv3"]
description: "[Python | Programmers] N으로 표현"
---

<br />

<a href="https://programmers.co.kr/learn/courses/30/lessons/42895"><small>문제 바로가기</small></a>

###### 입출력

| N    | number | return |
| ---- | ------ | ------ |
| 5    | 12     | 4      |
| 2    | 11     | 3      |

<br />

##### <h5 style="color:#C587AE;">💻 풀이</h5>

```python
def solution(N, number):
    lst = [0, [N]]
    if N == number:
        return 1
    for i in range(2, 9):
        tmp = [int(str(N) * i)]
        for j in range(1, i // 2 + 1):
            for x in lst[j]:
                for y in lst[i-j]:
                    tmp.append(x + y)
                    tmp.append(x - y)
                    tmp.append(y - x)
                    tmp.append(x * y)
                    if y != 0:
                        tmp.append(x // y)
                    if x != 0:
                        tmp.append(y // x)
        if number in tmp:
            return i
        lst.append(tmp)
    return -1
```

<br />



