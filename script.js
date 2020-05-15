let projects = [
  {
    name: "First Project"
  },
  {
    name: "Second Project"
  },
  ]

// Inserts each project object from the projects array into the proper part of the website as a unordered list.
for (let i = 0; i < projects.length; i++) {
  document.getElementById('portfolio').innerHTML += '<ul>' + projects[i].name + '</ul>';
}