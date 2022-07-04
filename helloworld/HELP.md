# helloworld

Application LoadBalancer 와 Lambda 를 통합한 helloworld 애플리케이션 서비스를 구현 하고 배포 합니다.  

## Architecture

![](../images/helloword.png)

- [aws-alb-lambda-helloworld](https://github.com/chiwoo-cloud-native/aws-alb-lambda-helloworld.git) 테라폼 프로젝트를 통해 간단하게 프로비저닝 할 수 있습니다. 


## Git
```
git clone https://github.com/chiwoo-cloud-native/aws-lambda-samples.git
```


## Build
`helloworld` 경로로 이동하여 npm install 명령을 통해 프로젝트를 빌드 합니다.

```
cd helloworld

npm install
```

## Test

[package.json](./package.json) 파일의 scripts.test 커멘드는 mocha 를 통해 테스트 하도록 정의 하고 있습니다.

```
npm test
```


## Build Image
`aws-lambda-samples` 프로젝트 기준 경로에서 docker build 명령을 실행 합니다.

```
docker build -t helloworld:latest -f ./helloworld/Dockerfile .
```


## 기능 수정 및 배포 
```

```
