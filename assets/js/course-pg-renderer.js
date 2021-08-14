const courses = [
  {
    name: "Algorithms-1",
    code: "CS21203",
    links: [
      {
        name: "Course Website",
        caption:
          "Put the course website link and edit this text with something better.",
        link: "",
      },
      {
        name: "Reference Books",
        caption:
          "Put the books drive link and edit this text with something better.",
        link: "",
      },
      {
        name: "Prev. Year Course Site",
        caption:
          "Put the course website link and edit this text with something better.",
        link: "",
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
        link: "",
      },
      {
        name: "Reference Books",
        caption:
          "Put the books drive link and edit this text with something better.",
        link: "",
      },
      {
        name: "Prev. Year Course Site",
        caption:
          "Put the course website link and edit this text with something better.",
        link: "",
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
        link: "",
      },
      {
        name: "Reference Books",
        caption:
          "Put the books drive link and edit this text with something better.",
        link: "",
      },
      {
        name: "Prev. Year Course Site",
        caption:
          "Put the course website link and edit this text with something better.",
        link: "",
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
