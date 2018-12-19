# KakaoTalk

Cloning KakaoTalk gd

#install

npm init

npm install express

git init
-{
    .gitignore 생성 (node gitignore, package-lock.json, node_modules), README.md
    create repository, (git remote add origin 주소, git add . , git commit -m "Initial Commit", git push origin master)
}

npm install @babel/node
-{
    npm install @babel/preset-env
    .babelrc 생성 ("presets": ["@babel/preset-env"])
    npm install @babel/core
        "scripts": {"start": "nodemon --exec babel-node index.js --delay 2"}
}

morgan - application 에서 일어나는 모든일을 logging - npm install morgan -- app.use(morgan("dev")); 
helmet - 보안 관리 - npm install helmet
body-parser - body로 부터 정보를 얻을 수 있게함 -- npm install body-parser
            -{
                app.use(bodyParser.json());
                app.use(bodyParser.urlencoded({extended: true}));
                req 정보 중에서 form 이나 json 형태로 된것을 검사함 }

cookie-parser - cookie에 유저정보를 저장, session 을 다루기위해, 사용자 인증 -- npm install cookie-parser

routers 폴더 생성
 -항목에 맞게 카테고리를 나눠서 라우터 들을 만들어서 폴더안에 넣어줌
 routes.js 생성
 -주소를 각각 저장해준다.
-- divide & conqure 주의 : import & export 중요

controllers 폴더 생성
--주로 항목별로 controller 생성

html 파일을 저장해야하는 폴더의 기본값은 프로젝트 폴더의 디렉토리 /views

pug 설치
- app.set('view engine', 'pug');
- views 폴더 만들고 안에 .pug 인 파일 만들어준다.
- controller 에서 res.render('파일명') 으로 바꿔준다.
- block content : extends layouts/main + (block content 안에 내용적기 들여쓰기해서)
- include ../partials/header : 해당 파일에 그냥 적으면 된다.
- 함수는 #{}

localsMiddleware
-- app.use(함수명);
-- Middlewares.js 만들어주고 안에 함수만들어준다.
----{
    export const localsMiddleware = (req, res, next)   => next가 필요함
    그리고 전역적으로 만들어줄 변수를 res.locals.변수이름 = 만들어줄것
    routes.js 랑 연결해서 씀
    미들웨어가 커넥션과 라우트들 사이에있으면 next()써주면 된다 끝에
}

controller에서 한 템플릿에만 변수를 넘겨줄수 있다.
render 함수 뒤에 오는 첫번째 인자는 템플릿이고 쉼표를 추가해 두번째 인자를 만들어서 추가할 정보가 담긴 --객체({})--  를 넣는다 
