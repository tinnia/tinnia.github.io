---
title: "H-Index"
date: "2021-02-01T14:38:46.169Z"
path: "/Algorithm/programmers/42747/"
category: "Algorithm"
ci: "Lv2"
cat: "PROGRAMMERS"
tags: ["PROGRAMMERS", "PYTHON", "Lv2"]
description: "[Python | Programmers] H-Index"
---

<br />

<a href="https://programmers.co.kr/learn/courses/30/lessons/42747"><small>문제 바로가기</small></a>

###### 입출력

| citations       | return |
| --------------- | ------ |
| [3, 0, 6, 1, 5] | 3      |

<br />

##### <h5 style="color:#C587AE;">💻 풀이</h5>

```python
def solution(citations):
    citations.sort(reverse=True)
    for i in range(len(citations)):
        if citations[i] <= i:
            return i
    return len(citations)
```

<br />

