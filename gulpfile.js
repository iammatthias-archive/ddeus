var gulp         = require("gulp"),
    sass         = require("gulp-sass"),
    autoprefixer = require("gulp-autoprefixer"),
    hash         = require("gulp-hash"),
    del          = require("del"),
    plumber = require('gulp-plumber');


// error function for plumber
var onError = function (err) {
  gutil.beep();
  console.log(err);
  this.emit('end');
};

gulp.task("delete", function () {
del(["themes/ddeus_v1/static/**/*"])
})

// Compile SCSS files to CSS
gulp.task("scss", function () {
    del(["themes/ddeus_v1/static/css/**/*"])
    gulp.src("themes/ddeus_v1/src/css/**/*.scss")
        .pipe(sass({outputStyle : "compressed"}))
        .pipe(autoprefixer({browsers : ["last 20 versions"]}))

        .pipe(hash())
        .pipe(gulp.dest("themes/ddeus_v1/static/css"))
        //Create a hash map
        .pipe(hash.manifest("hash.json"))
        //Put the map in the data directory
        .pipe(gulp.dest("themes/ddeus_v1/data/css"))
})

// Hash javascript
gulp.task("js", function () {
    del(["themes/ddeus_v1/static/js/**/*"])
    gulp.src("themes/ddeus_v1/src/js/**/*")
        .pipe(hash())
        .pipe(gulp.dest("themes/ddeus_v1/static/js"))
        .pipe(hash.manifest("hash.json"))
        .pipe(gulp.dest("themes/ddeus_v1/data/js"))
})

// Hash assets
gulp.task("assets", function () {
    del(["themes/ddeus_v1/static/assets/"])
    gulp.src(['themes/ddeus_v1/src/assets/**/*'])
        .pipe(gulp.dest("themes/ddeus_v1/static/assets"))
})

// Watch asset folder for changes
gulp.task("watch", ["scss", "js", "assets"], function () {
    gulp.watch("themes/ddeus_v1/src/css/**/*", ["scss"])
    gulp.watch("themes/ddeus_v1/src/js/**/*", ["js"])
    gulp.watch("themes/ddeus_v1/src/assets/**/*", ["assets"])
})


gulp.task('default', ['scss', 'js', "assets", 'watch']);

gulp.task('build', ['scss', 'js', "assets"]);

gulp.task('delete', ['delete']);
