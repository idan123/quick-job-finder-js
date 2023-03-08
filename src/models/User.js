class User {
  id;
  name;
  email;
  password;
  country;
  city;
  street;
  houseNumber;
  zipCode;
  phone;
  isAdmin;

  constructor(id, name, email, password, country = '', city = '', street = '', houseNumber = '', zipCode = '', phone = '', isAdmin = false) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.country = country;
    this.city = city;
    this.street = street;
    this.houseNumber = houseNumber;
    this.zipCode = zipCode;
    this.phone = phone;
    this.isAdmin = isAdmin;
  }
}

export default User;
