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
    description: 'This is the second Project. (placeholder)',
    skills: 'Programming, Photography',
    githubLink: 'http://github.com',
    liveLink: 'http://example.com',
  },
  {
    name: 'Third Project',
    picture: 'https://via.placeholder.com/150',
    description: 'This is the third project. (placeholder)',
    skills: 'Javascript, Node, SQL',
    githubLink: 'http://github.com',
    liveLink: 'http://example.com',
  }
];

// Inserts each project object from the projects array into the proper part of the website as a unordered list.
for (let i = 0; i < projects.length; i++) {
  document.getElementById('projects').innerHTML += '<ul>' + projects[i].name + '<br><button onclick="showHide(' + i + ')"><img src="' + projects[i].picture + '"></button>' + '<div id="' + i + '" style="display: none"><p>' + projects[i].description + '</p><p id="built">Built with: ' + projects[i].skills + '<p>Github: <a href="' + projects[i].githubLink + '">' + projects[i].githubLink + '</a></p><p>Live/Demo: <a href="' + projects[i].liveLink + '">' + projects[i].liveLink + '</a></p></div>' + '</ul>';
}

// eslint-disable-next-line no-unused-vars
function showHide(idNum) {
  // console.log(idNum);
  var x = document.getElementById(idNum);
  if (idNum === 'secret') {
    document.getElementById('secret').innerHTML = atob('PGRpdiBzdHlsZT0idGV4dC1hbGlnbjogY2VudGVyIj5IZWxsbywgdGhpcyBpcyBhIHNlY3JldCBhbmQgaGVyZSBpcyBhIGNvZGU6IFVyeXliLCB0YmJxIHdibyBiYSBmYnlpdmF0IGd1dmYgZnZ6Y3lyIGNobW15ciE8L2Rpdj4=');
  }
  if (x.style.display === 'none') {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
}

// Adds support to swap to a dyslexia friendly font.
let dysMode = false;
// eslint-disable-next-line no-unused-vars
function dyslexiaMode() {
  if (dysMode === false) {
    document.getElementById('body').style.fontFamily = 'opendyslexic';
    document.getElementById('dmButton').textContent = 'Dyslexia View On';
    dysMode = true;
  } else {
    document.getElementById('body').style.fontFamily = '\'Share Tech Mono\', monospace';
    document.getElementById('dmButton').textContent = 'Dyslexia View Off';
    dysMode = false;
  }
}