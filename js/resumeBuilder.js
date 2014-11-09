var bio = {
  "name": "Stan Sarber",
  "role": "Web Developer",
  "contacts": {
    "email": "ssarber-at-gmail.com",
    "github": "https://github.com/ssarber",
    "blog": "http://ssarber.github.io",
    "location": "San Francisco, CA"
  },
  "pictureURL": "images/fry.jpg",
  "welcomeMessage": "Hullo",
  "skills": [
    "Awesomeness",
    "Doing no evil",
    "Creating fun"
  ],

  displayName: function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

    $("#header").prepend(formattedName);
    $("#name").append("&nbsp;");
    $("#name").append(formattedRole);
  },

  displayPicAndSkills: function() {
    var formattedPic = HTMLbioPic.replace("%data%", "images/my-pic.jpg");
    $("#header").append(formattedPic);

    if (bio.skills.length > 0) {
      $("#header").append(HTMLskillsStart);
    };

    for (skill in bio.skills) {
      var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill])
      $("#skills").append(formattedSkill)
    };
  },

  displayContacts: function() {
    for (var key in bio.contacts) {
      if (bio.contacts.hasOwnProperty(key)) {
        var formattedContact = HTMLcontactGeneric.replace("%contact%", key);
        var formattedContact = formattedContact.replace("%data%", bio.contacts[key]);
        $("#topContacts").append(formattedContact);
      }
    }
  }
};

var work = {
  "jobs": [{
    "title": "Creator of Things",
    "employer": "A Company",
    "dates": "2012-present",
    "city": "Oakland, CA",
    "description": "Doing a lot of work."
  }, {
    "title": "Leader of Men",
    "employer": "Media Company",
    "dates": "2010-2012",
    "city": "San Francisco, CA",
    "description": "Did some work."
  }],

  displayWork: function() {
    for (job in work.jobs) {
      $("#workExperience").append(HTMLworkStart);
      var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job]["employer"]);
      var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job]["title"]);

      var formattedEmployerTitle = formattedEmployer + formattedTitle;
      $(".work-entry:last").append(formattedEmployerTitle);

      var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].city);
      $(".work-entry:last").append(formattedLocation);

      var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job]["dates"]);
      $(".work-entry:last").append(formattedDates);

      var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job]["description"]);
      $(".work-entry:last").append(formattedDescription);

    }
  }
};

var projects = {
  "projects": [{
    "title": "Personal blog",
    "dates": "2014",
    "description": "ssarber.github.io",
    "link": "http://ssarber.github.io/",
    "images": [
      "images/blog.png"
    ]
  }, {
    "title": "Project Awesomeness",
    "dates": "2014",
    "description": "The Free Hug Generator",
    "link": "/",
    "images": [
      "images/free-hugs.png"
    ]
  }],

  displayProjects: function() {
    // var HTMLprojectStart = "<div class='project-entry col-md-6'></div>";

    for (project in projects.projects) {
      $("#projects").append(HTMLprojectStart);
      var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);

      $(".project-entry:last").append(formattedTitle);

      var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
      $(".project-entry:last").append(formattedDates);

      var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
      $(".project-entry:last").append(formattedDescription);

      if (projects.projects[project].images.length > 0) {
        for (image in projects.projects[project].images) {
          var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
          $(".project-entry:last").append(formattedImage);
        }
      };
    }
  }
};

var education = {
  "schools": [{
    "name": "Moscow State University",
    "location": "Moscow, Russia",
    "datesAttended": "2002-2008",
    "degree": "Bachelor of Arts",
    "majors": [
      "Management of Things"
    ]
  }, {
    "name": "UC Berkeley",
    "location": "Berkeley, CA",
    "datesAttended": "2013",
    "degree": "iOS Development course",
    "majors": []
  }],
  "onlineCourses": [{
    "title": "Stanford CS106A: Programming Methodology",
    "school": "Academic Earth",
    "datesAttended": "2010",
    "url": "http://academicearth.org"
  }, {
    "title": "Web Development",
    "school": "Udacity",
    "datesAttended": "2014",
    "url": "https://www.udacity.com/course/cs253"
  }],

  displayEducation: function() {

    var HTMLonlineClasses = "<h3>Online Classes</h3>";
    var HTMLonlineTitle = "<a href='#'>%data%";
    var HTMLonlineSchool = "&nbsp; - %data%</a>";
    var HTMLonlineDates = "<div class='date-text'>%data%</div>";
    var HTMLonlineURL = "<br><a href='#'>%data%</a>";

    for (school in education.schools) {
      $("#education").append(HTMLschoolStart);

      var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
      $(".education-entry:last").append(formattedSchoolName);

      var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
      $(".education-entry:last").append(formattedDegree);

      var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].datesAttended);
      $(".education-entry:last").append(formattedDates);

      var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
      $(".education-entry:last").append(formattedLocation);

      if (education.schools[school].majors.length > 0) {
        for (major in education.schools[school].majors) {
          var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
          $(".education-entry:last").append(formattedMajor);
        }
      };
    }


    $("#education").append(HTMLonlineClasses);
    for (course in education.onlineCourses) {
      $("#education").append(HTMLschoolStart);
      var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
      $(".education-entry:last").append(formattedTitle);

      var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
      $(".education-entry:last").append(formattedSchool);
      var formattedDate = HTMLonlineDates.replace("%data%", education.onlineCourses[course].datesAttended);
      $(".education-entry:last").append(formattedDate);

      var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
      $(".education-entry:last").append(formattedURL);
    }

  }
};

bio.displayName();
bio.displayPicAndSkills();
bio.displayContacts();

work.displayWork();

education.displayEducation();

projects.displayProjects();

$("#mapDiv").append(googleMap);

function inName(name) {
  name = name.split(" ");
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();

  return name[0] + " " + name[1];

};