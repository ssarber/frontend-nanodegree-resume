var bio = {
    "name": "Stan Sarber",
    "role": "slacker",
    "contactInfo": {
        "email": "ssarber-at-gmail.com",
        "mobile": "415-333-4444"
    },
    "pictureURL": "images/fry.jpg",
    "welcomeMessage": "Hullo",
    "skills": [
        "awesomeness",
        "doing no evil",
        "creating fun"
    ]
};

var work = {
    "jobs": [
        {
            "title": "Creator of Things",
            "employer": "A Company",
            "dates": "2012-present",
            "city": "Oakland",
            "description": "Did some work."
        },
        {
            "title": "Leader of Men",
            "employer": "Media Company",
            "dates": "2010-2012",
            "city": "San Francisco",
            "description": "Did some work."
        }
    ]
};

var projects = {
    "projects" : [
        {
            "title": "project 1",
            "dates": "1223-1223",
            "description": "dkjskdjskj",
            "images": "kjskdj.png"
        },
        {
            "title": "project 1",
            "dates": "1223-1223",
            "description": "dkjskdjskj",
            "images": "kjskdj.png"
        }

    ]

};

var education = {
    "schools": [
        {
            "name": "Moscow State University",
            "years": "2003-2008",
            "location": "Moscow",
            "degree": "BA",
            "majors": [
                {
                    "degree": "Management of Things"
                }
            ]
        },
        {
            "name": "Berkeley",
            "years": "2013",
            "location": "Berkeley"
        }
    ],
    "onlineCourses": [
        {
            "title": "kdjskdj",
            "school": "sjaksjak"
        }
    ]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);


$("#main").prepend(formattedName);
$("#main").prepend(formattedRole);
$("#main").append(work["jobPosition"]);
$("#main").append(work["yearsWorked"]);
$("#main").append(education.school);

if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
};
   
for (skill in bio.skills) {
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill])
    $("#skills").append(formattedSkill)
};

for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job]["employer"]);
    console.log(job)
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job]["title"]);

    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $("#work-entry:last").append(formattedEmployerTitle);

    // console.log(formattedEmployerTitle);
    // console.log($("#work-entry"))
};
