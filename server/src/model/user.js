class User {
  static loggedInUsers = [];

  addUser(id) {
    if (User.loggedInUsers.filter((item) => item === id).length === 0) {
      User.loggedInUsers.push(id);
    }
  }

  removeUser(id) {
    if (User.loggedInUsers.filter((item) => item == id).length > 0) {
      User.loggedInUsers = [...User.loggedInUsers.filter((item) => item != id)];
    }
  }

  getLoggedInUsers() {
    return User.loggedInUsers.length;
  }
}

module.exports = User;
