let projects = [
  {
    name: "First Project"
  },
  {
    name: "Second Project"
  },
  ]

// Inserts each project object from the projects array into the proper part of the website.
for (let i = 0; i < projects.length; i++) {
  document.getElementById('portfolio').innerHTML += '<ol>' + projects[i].name + '</ol>';
}