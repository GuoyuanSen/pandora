// gulp插件

// 1、http插件（服务器插件）
// gulp-connect
const gulp = require("gulp");
// gulp 服务器插件
const connect = require("gulp-connect");
const proxy = require("http-proxy-middleware")
// // gulp js合并插件
var concat = require('gulp-concat');
// // gulp 压缩js插件
var uglify = require("gulp-uglify");
// // babel 插件  编译插件
var babel = require("gulp-babel");
// // gulp-clean-css  css压缩插件
var cleanCss = require("gulp-clean-css");

const sass = require('gulp-sass');
sass.compiler = require('node-sass');


gulp.task("connect",function(){
    connect.server({
        port:8888,
        root:"dist/",
        livereload:true,
        middleware:function(){ //中间件选项
            // console.log(opt)
            return[
                proxy("/api",{
                    target:"http://localhost:3000",
                    pathRewrite:{
                        '^/api' : '/',  //rewrite path
                    }
                })
            ]
        }
    })
})



gulp.task("watch", ()=>{
    gulp.watch("./src/HTML/*html",["html","sass"]);
    gulp.watch("./src/sass/*.scss",["html","sass"]);
    gulp.watch("./src/js/*.js",["html","js"])
    gulp.watch("./src/images/*.*",["html","images"])
    gulp.watch("./src/css/*.css",["html","css","js","images"]);
})

//默认自动转到dist文件夹下
gulp.task("default",["watch","connect","images","js"]);


gulp.task("html", ()=>{
    return gulp.src("./src/HTML/*.html").pipe(gulp.dest("dist/HTML/")).pipe(connect.reload());;
})

// script 转存指令;
gulp.task("images",()=>{
    return gulp.src("./src/images/*.*")
    .pipe(gulp.dest("dist/images/"))
})

gulp.task("js", ()=>{
    return gulp.src(["./src/js/*.js"])
    .pipe(
        gulp.dest("dist/js")
    )
    .pipe(connect.reload());
})

gulp.task("css", ()=>{
    return gulp.src(["./src/css/*.css"])
           .pipe(cleanCss())
           .pipe(gulp.dest("dist/css"))
           .pipe(connect.reload());
})

gulp.task("sass", () =>{
    return gulp.src(["./src/sass/*.scss"])
           .pipe(sass().on("error",sass.logError))
           .pipe(gulp.dest("dist/css"))
           .pipe(connect.reload());
})

//合并js
// gulp.task("script",()=>{
//     return gulp.src( "js/*.js")
//    .pipe(concat("main.js"))
//    .pipe(uglify())
//     .pipe(
//     gulp.dest("dist/js")
//     )    
// })

// gulp.task("icon",()=>{
//     return gulp.src(["iconfonnt/**"])   
//     .pipe(
//         gulp.dest("dist/iconfont/")
//     )
//     .pipe(connect.reload());
// })

// gulp.task("php",()=>{
//     return gulp.src(["php/**"])   
//     .pipe(
//         gulp.dest("dist/php/")
//     )
//     .pipe(connect.reload());
// })

// gulp.task("es6",()=>{
//     return gulp.src("js/*.js")
//     .pipe(babel({
//         presets: ['@babel/preset-env']
//     }))
//     .pipe(gulp.dest("dist/js"))
//     //服务器连接再加载
//     .pipe(connect.reload());
// })

// // 压缩css文件
// gulp.task("css",()=>{
//     return gulp.src(["sass/*.scss"])
//     .pipe(cleanCss())
//     .pipe(gulp.dest("dist/css"))
// })
