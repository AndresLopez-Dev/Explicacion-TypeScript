var myValue = {
    field: 5
};
var HttpResponse = /** @class */ (function () {
    function HttpResponse(data, status, code) {
        this.data = data;
        this.status = status;
        this.code = code;
    }
    return HttpResponse;
}());
var fetchUser = function () {
    return { id: 1, name: "Andres" };
};
var myUser = fetchUser();
var res = new HttpResponse(myUser, 200, 1);
console.log(res);
/* ------------------------------------------- */
var CRUD = /** @class */ (function () {
    function CRUD(items) {
        this.items = items;
    }
    CRUD.prototype.addItem = function (item) {
        this.items.push(item);
    };
    CRUD.prototype.addLastItem = function () {
        this.items.pop();
    };
    CRUD.prototype.printItems = function () {
        return this.items;
    };
    return CRUD;
}());
var users = [
    { id: 1, name: "Andres" },
    { id: 2, name: "David" },
    { id: 3, name: "Oscar" },
];
var userCRUD = new CRUD(users);
userCRUD.addItem({ id: 4, name: "TypeScript" });
console.log(userCRUD.printItems());
