class Job {
  id;
  imgUrl;
  title;
  user;
  location;
  date;
  hours;
  salary;
  description;
  uploadTime;

  constructor(id, imgUrl, title, user, location, date, hours, salary, description, uploadTime) {
    this.id = id;
    this.imgUrl = imgUrl;
    this.title = title;
    this.user = user;
    this.location = location;
    this.date = date;
    this.hours = hours;
    this.salary = salary;
    this.description = description;
    this.uploadTime = uploadTime;
  }
}

export default Job;
