'use strict';
let projects = [
  {
    name: 'GOAT',
    picture: 'images/goat-site.png',
    description: 'A gamified goal-oriented task management tool. Created to help people keep track of and complete tasks in their day to day life. GOAT allows you to create personal goals in a gamified way! The user can add new goals, gambling points on getting them done by a set time. Finishing the goal on time grants the points decided, while failing to accomplish it causes a loss of those points. The user can also set rewards and associated point values. Once the user has enough points, they can redeem their rewards.',
    skills: 'JavaScript, Design, Node.js, Express, React, PostgreSQL',
    githubLink: 'https://github.com/MatthewMacomber/goat-client',
    liveLink: 'https://goat-client.vercel.app/',
  },
  {
    name: 'The Codes',
    picture: 'images/thecodes-site.png',
    description: 'A website for sharing and solving text-based codes and ciphers. Developed for everyone who enjoys creating and solving codes. Solve codes, win prizes, and prove just how vast your knowledge of codes and ciphers is.',
    skills: 'JavaScript, Node.js, text-to-image, Express, React, Design, SQL',
    githubLink: 'https://github.com/MatthewMacomber/TheCodes-client',
    liveLink: 'https://thecodes-client.vercel.app/',
  },
  {
    name: 'Cyberdeck',
    picture: 'images/cyberdeckPlaceholder.png',
    description: 'This project is all about building a complex upgradable \'cyberdeck\' in the styles given by the book Necromancer by William Gibson. Being designed primarilaly as a potable dev enviroment for software, hardware, and more.',
    skills: '3D Modeling, Electronics Design and Assembly, Assembly, Lua, and Python Programming',
    githubLink: 'http://github.com/MatthewMacomber/CyberDeck',
    liveLink: 'http://github.com/MatthewMacomber/CyberDeck',
  },
];

// Inserts each project object from the projects array into the proper part of the website as a unordered list.
for (let i = 0; i < projects.length; i++) {
  document.getElementById('projects').innerHTML += '<li><h3>' + projects[i].name + '</h3><br><button onclick="showHide(' + i + ')"><img src="' + projects[i].picture + '"></button>' + '<div id="' + i + '" style="display: block"><p>' + projects[i].description + '</p><p id="built">Built with: ' + projects[i].skills + '<p>GitHub: <a href="' + projects[i].githubLink + '">' + projects[i].githubLink + '</a></p><p>Live/Demo: <a href="' + projects[i].liveLink + '">' + projects[i].liveLink + '</a></p></div>' + '</li>';
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