function skillsMember(){
  var member = document.getElementById("member");
  var skills = document.getElementById("skills");
  var projects = document.getElementById("projects");
  var contact = document.getElementById("contact");
  var memberIcon = document.getElementById("member-icon");
  var skillsIcon = document.getElementById("skills-icon");
  var projectsIcon = document.getElementById("projects-icon");
  var contactIcon = document.getElementById("contact-icon");
  member.style.display = "block";
  skills.style.display = "none";
  projects.style.display = "none";
  contact.style.display = "none";
  memberIcon.style.color = "#b3b3b3";
  skillsIcon.style.color = "#fff";
  projectsIcon.style.color = "#fff";
  contactIcon.style.color = "#fff";
}