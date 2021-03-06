// koa2 项目的入口文件
const Koa = require("koa2");
const router = require("./router");
const cors = require("koa2-cors");
const koaBody = require("koa-body");
const KoaStatic = require("koa-static"); //上传图片，图片静态资源
const path = require("path"); 

// 创建项目实例
const app = new Koa();

// 解决跨域问题
app.use(cors());

app.use(KoaStatic(path.join(__dirname, "public"))); //++

// 解析post请求参数
app.use(
  koaBody({
    multipart: true,
    formidable: {
      uploadDir: path.join(__dirname, "/public/uploads"),
      keepExtensions: true,
      onFileBegin:(name,file) => {}
    },
  })
);

// 使用中间件
app.use(router.routes(), router.allowedMethods());
//router.allowedMethods() 允许接收任何的请求类型 get post put ……

app.listen(5050, () => {
  console.log("koa2 服务启动成功!");
});
