---
title: "08. Dark Mode 구현"
date: "2021-01-05T02:15:32.169Z"
description: "[Gatsby + React] 다크모드 | Dark Mode 구현"
path: "/Project/blog/8/"
category: "Project"
ci: "Blog"
cat: "PJT"
tags: ["PJT", "Gatsby", "Dark Mode"]
---



[공식사이트](https://www.gatsbyjs.com/plugins/gatsby-plugin-dark-mode/)의 다크모드를 활용해 구현하였다.

<br />

##### 설치

```sh
npm install gatsby-plugin-dark-mode
```

```js
// gatsby-config.js

module.exports = {
    ...
  	plugins: ['gatsby-plugin-dark-mode'],
    ...
}
```

이렇게 설치를 진행하고 나서 사용을 하면 된다.

생각외로 간단하다고 생각이 들었지만, 직접 구현해보다가 리액트에 대한 이해가 아직 부족한 것 같아서 있는 것을 활용한 것이 좀 아쉬웠다.

<br />

##### 사용

```js
// header.js

<div className="toggle">
    <ThemeToggler>
        {({ theme, toggleTheme }) => (
            <div className="switchToggle">
                <input id="switch"
                    className="invisible"
                    type="checkbox"
                    onChange={e => {toggleTheme(e.target.checked ? 'dark' : 'light');
                    isChecked=e.target.checked;}}
                    checked={theme === 'dark'}
                />
                <label className={`switchLabel`} htmlFor="switch">
                    { isChecked ? <RiMoonClearFill /> : <RiSunFill /> }
                </label>
            </div>
        )}
    </ThemeToggler>  
</div>
```

여기서 바뀌는 theme는 localStorage.theme에 저장되어 있다.

<br />

##### CSS 활용

기본적인 코드는 체크박스의 다크모드로 이뤄지는 데, CSS를 활용해서 꾸며보았다.

```css
/* style.css */

/* Theme Toggle */
.toggle {
  margin-right:0;
}

.switchLabel {
  display: flex;
  position: relative;
  align-items: center;
  margin: 0;
  height: 50px;
  width: 50px;
  font-size: 1.5rem;
  color: rgb(255, 208, 0);
  border-radius: 13px;
  box-shadow: var(--toggleShadow);
}

.switchLabel:hover {
  cursor: pointer;
  box-shadow: var(--toggleHover);
}

.invisible {
  display: none;
}
```

<br />

<hr />

<br />

##### 해야할 일 

<br />

* 1.댓글 다크모드 구현
* <br />

* 2.코드 다크모드 구현

