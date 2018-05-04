var gulp = require("gulp");
var less = require("gulp-less");
var browser = require("browser-sync");
var mock = require("./mock");
gulp.task("less", function() {
    gulp.src("./src/static/less/*.less")
        .pipe(less())
        .pipe(gulp.dest("./src/static/css"))
})
gulp.task("server", function() {
    browser.init({
        server: {
            baseDir: "./src",
            index: "static/index.html",
            middleware: function(req, res, next) {
                if (/\/api/g.test(req.url)) {
                    res.end(JSON.stringify(
                        mock(req.url)
                    ));
                }
                next()
            }

        },
        files: ["src"],
        port: 5533
    })
})
gulp.task("watch", function() {
    gulp.watch("./src/static/less/*.less", ["less"])
})
gulp.task("default", ["less", "server", "watch"], function() {
    console.log("服务器加载中")
})