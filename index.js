"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = "https://jsonplaceholder.typicode.com/todos/1";
var logger = function (id, title, completed) {
    console.log("\n    My id: ".concat(id, "\n    My title: ").concat(title, "\n    MyStatus: ").concat(completed, "\n    "));
};
axios_1["default"].get(url).then(function (response) {
    var user = response.data;
    var id = user.id;
    var title = user.title;
    var completed = user.completed;
    logger(id, title, completed);
});
