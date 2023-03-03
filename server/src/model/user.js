class User {
  static loggedInUsers = 0;
  static guestUsers = 0;

  addUser(id) {
    if (id) {
      User.loggedInUsers++;
    } else {
      User.guestUsers++;
    }
  }

  removeUser(id) {
    if (id) {
      User.loggedInUsers.length > 0 ? User.loggedInUsers-- : null;
    } else {
      User.guestUsers.length > 0 ? User.guestUsers-- : null;
    }
    console.log(
      "removeUser",
      "loggedInUsers",
      User.loggedInUsers,
      "guestUsers",
      User.guestUsers
    );
  }

  getLoggedInUsers() {
    return User.loggedInUsers;
  }
  getGuestUsers() {
    return User.guestUsers;
  }
}

module.exports = User;
