"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const createError = require("http-errors");
const path = require("path");
const cookieParser = require("cookie-parser");
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
// Create a new express app instance
const app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/users', usersRouter);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});
app.listen(3000, function () {
    console.log('App is listening on port 3000!');
});
//# sourceMappingURL=server.js.map