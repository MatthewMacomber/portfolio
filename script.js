'use strict';
let projects = [
  {
    name: 'Cyberdeck',
    picture: 'images/cyberdeckPlaceholder.png',
    description: 'This project is all about building a complex upgradable \'cyberdeck\' in the styles given by the book Necromancer by William Gibson.',
    skills: '3D Modeling, Electronics Assembly, Assembly and Python Programming',
    githubLink: 'http://github.com',
    liveLink: 'http://example.com',
  },
  {
    name: 'Second Project',
    picture: 'https://via.placeholder.com/150',
    description: 'This is the first Project. (placeholder)',
    skills: 'Programming, Photography',
    githubLink: 'http://github.com',
    liveLink: 'http://example.com',
  },
  {
    name: 'Third Project',
    picture: 'https://via.placeholder.com/150',
    description: 'This is the second project. (placeholder)',
    skills: 'Javascript, Node, SQL',
    githubLink: 'http://github.com',
    liveLink: 'http://example.com',
  }
];

// Inserts each project object from the projects array into the proper part of the website as a unordered list.
for (let i = 0; i < projects.length; i++) {
  document.getElementById('projects').innerHTML += '<ul>' + projects[i].name + '<br><button onclick="showHide(' + i + ')"><img src="' + projects[i].picture + '"></button>' + '<div id="' + i + '" style="display: none"><p>' + projects[i].description + '</p><p>Built with: ' + projects[i].skills + '<p>Github: <a href="' + projects[i].githubLink + '">' + projects[i].githubLink + '</a></p><p>Live/Demo: <a href="' + projects[i].liveLink + '">' + projects[i].liveLink + '</a></p></div>' + '</ul>';
}

function showHide(idNum) {
  // console.log(idNum);
  var x = document.getElementById(idNum);
  if (x.style.display === 'none') {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
}