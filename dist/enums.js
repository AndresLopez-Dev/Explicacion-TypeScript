var Users;
(function (Users) {
    Users["NormalUser"] = "normal";
    Users["PayedUser"] = "payed";
    Users["AdminUser"] = "admin";
    Users["MegaUser"] = "mega";
})(Users || (Users = {}));
var Users2;
(function (Users2) {
    Users2[Users2["NormalUser"] = 2] = "NormalUser";
    Users2[Users2["PayedUser"] = 4] = "PayedUser";
    Users2[Users2["AdminUser"] = 6] = "AdminUser";
    Users2[Users2["MegaUser"] = 8] = "MegaUser";
})(Users2 || (Users2 = {}));
var Users3;
(function (Users3) {
    Users3[Users3["NormalUser"] = 6] = "NormalUser";
    Users3[Users3["PayedUser"] = 7] = "PayedUser";
    Users3[Users3["AdminUser"] = 8] = "AdminUser";
    Users3[Users3["MegaUser"] = 9] = "MegaUser";
})(Users3 || (Users3 = {}));
var myUser = Users.AdminUser;
var otherUser = Users.NormalUser;
