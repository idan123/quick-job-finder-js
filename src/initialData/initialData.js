import Job from "../models/Job.js";

let id = 1;
let nextUserId = 1;

const createData = () => {
  const jobRequestsArr = [
    new Job(
      id++,
      "assets/imgs/avatar2.png",
      "Babysitter",
      "Ashley Smith",
      "San Francisco, CA",
      "03/08/2023",
      "4 hours",
      "$25 per hour",
      "I am looking for a reliable and caring babysitter to watch over the children at my house. The ideal candidate will have experience working with children, excellent communication skills, and a positive attitude.",
      "03/07/2023, 23:27:25"
    ),
    new Job(
      id++,
      "assets/imgs/avatar3.png",
      "Bartender",
      "Samuel Cohen",
      "Tel Aviv, Israel",
      "03/09/2023",
      "6 hours",
      "$80 per hour",
      "I am seeking a skilled bartender to work at my house. The ideal candidate will have experience mixing drinks, knowledge of a variety of beverages, and exceptional customer service skills.",
      "03/07/2023, 23:27:25"
    ),
    new Job(
      id++,
      "assets/imgs/avatar4.png",
      "Waiter",
      "Luis Hernandez",
      "Madrid, Spain",
      "03/10/2023",
      "5 hours",
      "$60 per hour",
      "I'm seeking a friendly and professional waiter to provide excellent service at my upcoming event at my house. The ideal candidate needs to have strong communication and organizational skills, and the ability to work well in a team.",
      "03/07/2023, 23:27:25"
    ),
    new Job(
      id++,
      "assets/imgs/avatar5.png",
      "Driver",
      "Elizabeth Johnson",
      "Los Angeles, CA",
      "03/11/2023",
      "3 hours",
      "$90 per hour",
      "I'm looking for a reliable and experienced driver to transport my guests to and from my upcoming event at my house. The ideal candidate needs to have a clean driving record, excellent navigation skills, and strong communication skills.",
      "03/07/2023, 23:27:25"
    ),
    new Job(
      id++,
      "assets/imgs/avatar6.png",
      "Barista",
      "Julia Ramirez",
      "Rome, Italy",
      "03/12/2023",
      "2 hours",
      "$50 per hour",
      "I'm seeking a talented and passionate barista to work at my upcoming event at my house. The ideal candidate needs to have experience working with coffee, knowledge of different types of coffee, and excellent customer service skills.",
      "03/07/2023, 23:27:25"
    ),
    new Job(
      id++,
      "assets/imgs/avatar7.png",
      "Catering",
      "Maria",
      "Milan, Italy",
      "03/13/2023",
      "8 hours",
      "$100 per hour",
      "I'm seeking an experienced caterer to provide delicious food and excellent service at my upcoming event at my house. The ideal candidate will have experience in catering and event planning, a passion for food, and excellent organizational skills.",
      "03/07/2023, 23:27:25"
    ),
    new Job(
      id++,
      "assets/imgs/avatar8.png",
      "Driver",
      "David Garcia",
      "Miami, FL",
      "03/16/2023",
      "4 hours",
      "$80 per hour",
      "I'm looking for a reliable and experienced driver to transport my guests to and from my upcoming event at my house. The ideal candidate needs to have a clean driving record, excellent navigation skills, and strong communication skills.",
      "03/07/2023, 23:27:25"
    ),
    new Job(
      id++,
      "assets/imgs/avatar9.png",
      "Bartender",
      "Sophia Lee",
      "Chicago, IL",
      "03/17/2023",
      "5 hours",
      "$90 per hour",
      "I am seeking a skilled bartender to work at my house. The ideal candidate will have experience mixing drinks, knowledge of a variety of beverages, and exceptional customer service skills.",
      "03/07/2023, 23:27:25"
    ),
    new Job(
      id++,
      "assets/imgs/avatar10.png",
      "Fitness Instructor",
      "Daniel Kim",
      "Los Angeles, CA",
      "03/18/2023",
      "3 hours",
      "$120 per hour",
      "I'm seeking an experienced and motivated fitness instructor to lead group fitness classes at my gym. The ideal candidate will have a certification in fitness training, experience in teaching group fitness classes, and excellent communication skills.",
      "03/07/2023, 23:27:25"
    ),
    new Job(
      id++,
      "assets/imgs/avatar11.png",
      "Web Developer",
      "Jason Smith",
      "San Francisco, CA",
      "03/19/2023",
      "8 hours",
      "$150 per hour",
      "We are seeking a skilled and experienced web developer to work on our company's website. The ideal candidate will have experience in web development, proficiency in HTML/CSS/JavaScript, and a strong portfolio showcasing their previous work.",
      "03/07/2023, 23:27:25"
    ),
    new Job(
      id++,
      "assets/imgs/avatar12.png",
      "Content Writer",
      "Emma Davis",
      "Seattle, WA",
      "03/20/2023",
      "6 hours",
      "$70 per hour",
      "We are seeking a creative and skilled content writer to create high-quality content for our company's website and social media channels. The ideal candidate will have experience in content creation, excellent writing skills, and a strong portfolio showcasing their previous work.",
      "03/07/2023, 23:27:25"
    ),
    new Job(
      id++,
      "assets/imgs/avatar13.png",
      "Sales Manager",
      "Matthew Lee",
      "Toronto, Canada",
      "03/21/2023",
      "7 hours",
      "$200 per hour",
      "We are seeking a dynamic and results-driven sales manager to lead our sales team. The ideal candidate will have experience in sales management, excellent communication and negotiation skills, and a proven track record of achieving sales targets.",
      "03/07/2023, 23:27:25"
    ),
    new Job(
      id++,
      "assets/imgs/avatar14.png",
      "Photographer",
      "Sophie Brown",
      "Paris, France",
      "03/22/2023",
      "4 hours",
      "$100 per hour",
      "We are seeking a talented and experienced photographer to capture high-quality photos for our company's marketing materials. The ideal candidate will have experience in photography, proficiency in photo editing software, and a strong portfolio showcasing their previous work.",
      "03/07/2023, 23:27:25"
    ),

  ];
  return jobRequestsArr;
};

const setInitialData = () => {
  const jobs = localStorage.getItem("props");
  if (!jobs) {
    localStorage.setItem("props", JSON.stringify(createData()));
  }
  localStorage.setItem("nextid", id + "");
  localStorage.setItem("nextUserId", nextUserId + "");
};

setInitialData();