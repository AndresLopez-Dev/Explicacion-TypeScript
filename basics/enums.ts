enum Users {
  NormalUser = "normal",
  PayedUser = "payed",
  AdminUser = "admin",
  MegaUser = "mega"
}
enum Users2 {
  NormalUser = 2,
  PayedUser = 4,
  AdminUser = 6,
  MegaUser = 8
}
enum Users3 {
  NormalUser = 6,
  PayedUser,
  AdminUser ,
  MegaUser
}

const myUser = Users.AdminUser;
const otherUser = Users.NormalUser;