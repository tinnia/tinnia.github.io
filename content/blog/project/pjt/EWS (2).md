---
title: "[Project #1] Spring Boot와 MongoDB 연동"
date: "2021-01-23T23:15:32.169Z"
description: "[Project #1] Spring Boot + Vue.js + MongoDB"
path: "/Project/everywherescrap/2/"
category: "Project"
ci: "EWS"
cat: "PJT"
tags: ["PJT", "Spring Boot", "Vue.js", "Java", "Maven", "MongoDB"]
---



###### Project #1 Everywhere Scrap

#### 프로젝트 개발 환경 설정

<hr />

##### Back End - Spring Boot

* [npm 설치](https://nodejs.org/ko/download/)

  ```bash
  npm --version
  ```

* yarn 설치

  ```bash
  npm install --global yarn
  yarn -v
  ```

* [jdk 설치](https://adoptopenjdk.net/installation.html#x86-32_win-jdk)

  ```bash
  OpenJDK 11
  HotSpot
  Windows x86 jdk
  ```

* Java 환경 변수 설정

  ```bash
  1. JAVA_HOME 에 설치한 자바 위치(bin 파일 전까지)
  2. path 에 %JAVA_HOME%\\bin 추가하기
  
  java -version
  ```

* [Maven 설치](https://maven.apache.org/download.cgi) - apache-maven-3.6.3-bin.zip

  ```bash
  1. MAVEN_HOME 에 설치한 메이븐 위치 넣기(bin 파일 전까지)
  2. path 에 %MAVEN_HOME%\\bin 추가하기
  
  mvn -v
  ```

* VS Code에서 Spring Boot 설치

  ```bash
  Java Extension Pack
  Spring Boot Extension Pack
  ```

* Spring Boot 프로젝트 생성

  - Ctrl + Shift + P 실행 후 Spring Initializr:Create Maven Project 실행

    ```bash
    Project Language : Java
    spring boot version : 2.4.2
    dependency : Lombok, Spring Web
    Packaging Type : JAR
    Java version : 11
    ```

* Test 폴더에서 F5 눌러 서버 실행



##### Front End - Vue.js

- Vue, Vue-cli 설치

  ```bash
  npm i -g @vue/cli
  vue --version
  ```

- Vue 프로젝트 생성

  ```bash
  vue create <project_name>
  ```



##### DB - Mongo DB

* [MondoDB 설치](https://www.mongodb.com/try/download/community) : 4.4.3 window Community Server

* Spring Boot 와 MongoDB 연동하기

* Maven Dependency에 추가

  ```xml
  <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-data-mongodb</artifactId>
  </dependency>
  ```

* application.properties에 mongoDB 정보 저장

  ```properties
  # # MongoDB Config #
  spring.data.mongodb.database=데이터베이스이름
  spring.data.mongodb.host=localhost
  spring.data.mongodb.port=27017
  ```

  끝인가 싶었지만, 처음 사용하려 했던 jpaRepository와 같이 mongo에 사용하는 MongoRepository가 있었다. 그래서 코드를 새로 다 바꾸게 되었다..

* model/User.java

  ```java
  package com.example.backend.model.user;
  
  import lombok.Data;
  
  import org.springframework.data.annotation.Id;	// jpa에서 썼던 것과 다른 참조
  import org.springframework.data.mongodb.core.mapping.Document;	// table
  
  @Data
  @Document(collection = "account")
  public class User {
      @Id
      private String uid;
      
      private String email;
      private String password;
      private String nickname;
      private String phone;
  }
  ```

* Repository/UserRepository.java

  ```java
  package com.example.backend.repository;
  
  import com.example.backend.model.user.User;
  import org.springframework.data.mongodb.repository.MongoRepository;	// JpaRepository 대신 사용
  
  public interface UserRepository extends MongoRepository<User, String> {
      User findByEmail(String email);
      User findByNickname(String nickname);
      ...
  }
  ```

  

  

  

  아직 MongoDB의 사용법이 익숙치 않아서, MongoDB의 username과 password를 연결하지 못했다.

  ```properties
  spring.data.mongodb.username=
  spring.data.mongodb.password=
  ```



이번 프로젝트를 통해 Spring Boot 와 MongoDB를 잘 쓸 수 있도록 노력해봐야겠당ㅎㅎ

