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

routers 폴더 생성 -항목에 맞게 카테고리를 나눠서 라우터 들을 만들어서 폴더안에 넣어줌
routes.js 생성 -주소를 각각 저장해준다.
-- divide & conqure 주의 : import & export 중요
-- router 주의 userRouter.get(url, 실행할 것)
-->>>>> url 로 접근하면 실행할 것 이라는 함수가 호출되는것!

controllers 폴더 생성
--주로 항목별로 controller 생성

html 파일을 저장해야하는 폴더의 기본값은 프로젝트 폴더의 디렉토리 /views

pug 설치
-- app.set('view engine', 'pug');
-- views 폴더 만들고 안에 .pug 인 파일 만들어준다.
-- controller 에서 res.render('파일명') 으로 바꿔준다.
-- block content : extends layouts/main + (block content 안에 내용적기 들여쓰기해서)
-- include ../partials/header : 해당 파일에 그냥 적으면 된다.
-- 함수는 #{}

localsMiddleware
-- app.use(함수명);
-- Middlewares.js 만들어주고 안에 함수만들어준다.
----{
export const localsMiddleware = (req, res, next) => next가 필요함
그리고 전역적으로 만들어줄 변수를 res.locals.변수이름 = 만들어줄것
routes.js 랑 연결해서 씀
미들웨어가 커넥션과 라우트들 사이에있으면 next()써주면 된다 끝에
}

controller에서 한 템플릿에만 변수를 넘겨줄수 있다.
render 함수 뒤에 오는 첫번째 인자는 템플릿이고 쉼표를 추가해 두번째 인자를 만들어서 추가할 정보가 담긴 --객체({})-- 를 넣는다

검색기능
form method='get' 을 넣어주면 정보를 url을 통해 전송한다.
input에 name="term" 을 넣어준다.
req.query 를 console.log 해봐라
const searchingBy = req.query.term
const {query : { term : searchingBy }} = req 두개는 똑같다.

로그인
form(action) action은 보낼주소 method는 post
social login 따로 partial 만들어서 작업
input submit 은 placeholder 아니고 value로 칸채움.

편집
label의 for은 input의 아이디를 가리킨다.

Fake Database
db.js를 만들고 controller에서 import 해주고 전달하고싶은 템플릿칸 뒤에 객체에 추가해준다.

each (x) in (y)
y안에 있는 각각의 x하나씩 마다 적용시킴.

mixin
mixins 폴더 생성
mixin 믹스인명(믹스인인자 = {}) 믹스인 인자는 기본적으로 빈객체
쓸곳 위쪽에 include mixins/파일명
쓸장소에 +믹스인명({

})
믹스인 파일 안에서 할거!
mixin friendsList(fl = {})
.friends-list
img(src=fl.image)
h6=fl.name
--- 여기서 fl.image를 썻지만 적용되는것이 아니고
믹스인 파일이 활용되는 곳에서 image나 name 이 뭔지 database와 연계해서 설명해준다.

join, login 하면 home 화면으로 보내주기
get과 post를 구분하자
postJoin 에 console.log(req.body) 해보자
만약에 body-parser없이 한다면 console창에 body가 없다고 뜬다.
라우터에서는 get이나 post나 둘다 같은 주소로 보내고 실행시키는 함수만 postLogin, getLogin으로 다르다
const {
body : { email, password }
} = req; 이런식으로 정보를 controller 에 있는 post 함수에서 가져온다

password !== password2 를 if로 해서 짠다. 그리고 status code 를 이용한다. res.status 로 이용가능
맞을경우 res.redirect(routes.home)

Middlewares에서 객체도 사용가능 res.locals.user = { a : true, b : false } 이런식으로
그럼 쓸때는 user.a 라고 쓰면 true값 리턴이겟지 ?

routes.js수정
const CHAT = "/:id" 같이 :id 가 포함된 url이 있을때 실제적으로 적용하려면 밑에 객체를 함수로 바꿔야함
chat : CHAT 이런식이 아니라 id 를 인자로 입력받는다.
------이렇게하면 선언을 수정한것 하지만 실행하는 router부분도 수정해야한다.
routes.chat() 이런식으로 함수로 바꿔준다! 하지만 템플릿에서는 이런식으로 인자없이 쓰면안된다.
템플릿에서는 user.id 를 인자로 받았다!
a(href=routes.chat(user.id)) 이런식으로 써줘야함 여기서 user.id는 Middlewares에서 저장한 객체안의 정보이다!

middleware를 안쓰고 mixin 을 써도 된다. mixin안에서 인자 a(href=routes.chat(cl.id)) 받아주고 mixin 쓰는곳에서 id : 뭐다 설명해주고

upload도 getupload postupload 로 나눠야한다.
input에 required= true 추가하면 칸을채워야 넘어감
