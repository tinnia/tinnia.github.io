---
title: "PYTHON - GCD와 LCM"
date: "2021-02-24T16:59:32.169Z"
path: "/Algorithm/reference/3/"
category: "Algorithm"
ci: "REF"
cat: "REFERENCE"
tags: ["REFERENCE", "GCD", "LCM"]
description: "[GCD & LCM] GCD와 LCM"
---

<small>관련 문제</small>

<hr />

<br />

### GCD 와 LCM

<br />

##### 3가지의 방법

###### 1. 단순 반복문

```python
def gcd1(a, b):
    for i in range(min(a, b), 0, -1):
        if a % i == 0 and b % i == 0:
            return i
print(gcd1(10, 24))	# 2
```



###### 2. 유클리드 호제법

```python
def gcd2(a, b):
    if a % b != 0:
    	return gcd2(b, a % b)
    else:
        b
print(gcd2(10, 24))	# 2
```

```python
def gcd3(a, b):
    while a % b != 0:
        a, b = b, a % b
    return b
print(gcd3(10, 24))	# 2
```



###### 3. 라이브러리

```python
import math
math.gcd(10, 24)	# 2
```

<br />

시간 : 라이브러리 < gcd3 < gcd2 < gcd1



<br />

##### LCM

```python
def lcm(a, b):
    return a * b / gcd(a, b)
```



