const courses = [
  {
    name: "Algorithms-1",
    code: "CS21203",
    links: [
      {
        name: "Course Website",
        caption:
          "Put the course website link and edit this text with something better.",
        link: "https://cse.iitkgp.ac.in/~pawang/courses/ALGO21.html",
      },
      {
        name: "Reference Books",
        caption:
          "Put the books drive link and edit this text with something better.",
        link: "https://drive.google.com/drive/folders/1oiTfJn4MpZKGcCRBMevOi4Ohna4N9tnH?usp=sharing",
      },
      {
        name: "Prev. Year Course Site",
        caption:
          "Put the course website link and edit this text with something better.",
        link: "http://cse.iitkgp.ac.in/~pawang/courses/ALGO20.html",
      },
    ],
  },
  {
    name: "Algorithms Lab",
    code: "CS29203",
    links: [
      {
        name: "Course Website",
        caption:
          "Put the course website link and edit this text with something better.",
        link: "http://cse.iitkgp.ac.in/~pawang/courses/ALGO21.html",
      },
      {
        name: "Reference Books",
        caption:
          "Put the books drive link and edit this text with something better.",
        link: "https://drive.google.com/drive/folders/1oiTfJn4MpZKGcCRBMevOi4Ohna4N9tnH?usp=sharing",
      },
      {
        name: "Prev. Year Course Site",
        caption:
          "Put the course website link and edit this text with something better.",
        link: "https://cse.iitkgp.ac.in/~palash/Courses/2021Algorithms1-Lab/algo1-lab-2021.html",
      },
    ],
  },
  {
    name: "Discrete Structures",
    code: "CS21201",
    links: [
      {
        name: "Course Website",
        caption:
          "Put the course website link and edit this text with something better.",
        link: "https://cse.iitkgp.ac.in/~abhij/course/theory/DS/Autumn21/",
      },
      {
        name: "Reference Books",
        caption:
          "Put the books drive link and edit this text with something better.",
        link: "https://drive.google.com/drive/folders/1RUWqkg-3mYW9GLmqST6OoJR5JfZoMYnr?usp=sharing",
      },
      {
        name: "Prev. Year Course Site",
        caption:
          "Put the course website link and edit this text with something better.",
        link: "http://cse.iitkgp.ac.in/~abhij/course/theory/DS/Autumn20/",
      },
    ],
  },
  {
    name: "Probability and Statistics",
    code: "MA20205",
    links: [
      {
        name: "Course Website",
        caption:
          "Put the course website link and edit this text with something better.",
        link: "https://wiki.metakgp.org/w/MA20104:_Probability_And_Statistics",
      },
      {
        name: "Reference Books",
        caption:
          "Put the books drive link and edit this text with something better.",
        link: "https://drive.google.com/drive/folders/1KBzWRCAYrZJoAcNUl8ghsfYpVmH_LFJz?usp=sharing",
      },
      {
        name: "Prev. Year Course Site",
        caption:
          "Put the course website link and edit this text with something better.",
        link: "http://www.facweb.iitkgp.ac.in/~bibhas/ProbStat.html",
      },
    ],
  },
  {
    name: "Basic Electronics",
    code: "EC21201",
    links: [
      {
        name: "Course Website",
        caption:
          "Put the course website link and edit this text with something better.",
        link: "https://wiki.metakgp.org/w/EC21101:_Basic_Electronics",
      },
      {
        name: "Reference Books",
        caption:
          "Put the books drive link and edit this text with something better.",
        link: "https://drive.google.com/drive/folders/1nBgnM5i8s9C1iVq1eNGh0lNKI6DqN2k2?usp=sharing",
      },
    ],
  },
  {
    name: "Signals and Systems",
    code: "EE21201",
    links: [
      {
        name: "Course Website",
        caption:
          "Put the course website link and edit this text with something better.",
        link: "https://wiki.metakgp.org/w/EE21101:_Signals_And_Networks",
      },
      {
        name: "Reference Books",
        caption:
          "Put the books drive link and edit this text with something better.",
        link: "https://drive.google.com/drive/folders/1MuSyV4Iij6ZtmjrnBseV_WcmMJ0mr9K7?usp=sharing",
      },
      {
        name: "Prev. Year Course Site",
        caption:
          "Put the course website link and edit this text with something better.",
        link: "http://www.facweb.iitkgp.ac.in/~avishek/Signals&Networks2020.html",
      },
    ],
  },
];

const showHome = () => {
  document.getElementById("home-div").style.display = "block";
  document.getElementById("course-div").style.display = "none";
};

const changeCourseHandler = (id) => {
  console.log(id);
  document.getElementById("home-div").style.display = "none";
  document.getElementById("course-div").style.display = "block";
  document.getElementById(
    "course-name"
  ).innerHTML = `${courses[id].name} (${courses[id].code})`;

  var linksDiv = document.getElementById("posts");
  linksDiv.innerHTML = "";

  for (var i = 0; i < courses[id].links.length; i++) {
    var article = document.createElement("article");

    var link = document.createElement("a");
    link.setAttribute("href", courses[id].links[i].link);
    link.className = "image";

    var img = document.createElement("img");
    img.setAttribute("src", `images/course-0${i + 1}.png`);
    link.appendChild(img);

    article.appendChild(link);

    var h3 = document.createElement("h3");
    h3.innerHTML = courses[id].links[i].name;
    article.appendChild(h3);

    var p = document.createElement("p");
    p.innerHTML = courses[id].links[i].caption;
    article.appendChild(p);

    var actionBar = document.createElement("ul");
    actionBar.className = "actions";

    var li = document.createElement("li");
    var btn = document.createElement("a");
    btn.setAttribute("href", courses[id].links[i].link);
    btn.className = "button";
    btn.innerHTML = "Go";
    li.appendChild(btn);

    actionBar.appendChild(li);

    article.appendChild(actionBar);

    linksDiv.appendChild(article);
  }
};

const sidebarMenu = document.getElementById("side-menu");

for (var i = 0; i < courses.length; i++) {
  var courseLink = document.createElement("a");
  courseLink.setAttribute("onclick", "changeCourseHandler(this.id)");
  courseLink.setAttribute("id", i);
  courseLink.innerHTML = `${courses[i].name} (${courses[i].code})`;
  var courseMenu = document.createElement("li");
  courseMenu.appendChild(courseLink);
  sidebarMenu.appendChild(courseMenu);
}
