'use strict';

window.onload = function() {
  var canvas = document.getElementById('game');
  var c = canvas.getContext('2d');

  var State = {
    _current: 0,
    INTRO: 0,
    LOADING: 1,
    LOADED: 2
  };

  window.addEventListener('click', handleClick, false);
  window.addEventListener('resize', doResize, false);

  doResize();

  function handleClick() {
    State._current = State.LOADING;
    fadeToWhite();
  }

  function doResize() {
    canvas.width = document.body.clientWidth;
    canvas.height = document.body.clientHeight;

    switch (State._current) {
    case State.INTRO:
      showIntro();
      break;
    }
  }

  function fadeToWhite(alphaVal) {
    // If the function hasn't received any parameters, start with 0.02.
    alphaVal = (alphaVal === undefined) ? 0.02 : parseFloat(alphaVal) + 0.02;

    // Set the color to white.
    c.fillStyle = '#FFFFFF';
    // Set the global Alpha.
    c.globalAlpha = alphaVal;

    // Make a rectangle as big as the canvas.
    c.fillRect(0, 0, canvas.width, canvas.height);

    if (alphaVal < 1.0) {
      setTimeout(function() {
        fadeToWhite(alphaVal);
      }, 30);
    }
  }

  function showIntro() {
    var phrase = 'Click of tap the screen to start the game.';

    // Clear the canvas.
    c.clearRect(0, 0, canvas.width, canvas.height);

    // Make a nice blue gradient.
    var grd = c.createLinearGradient(0, 0, canvas.height, canvas.width);
    grd.addColorStop(0, '#ceefff');
    grd.addColorStop(1, '#52bcff');

    c.fillStyle = grd;
    c.fillRect(0, 0, canvas.width, canvas.height);

    var logoImg = new Image();
    logoImg.src = 'images/logo.png';

    // Store the original width and height values so that we can keep the same width/height ratio later.
    var originalWidth = logoImg.width;

    logoImg.width = Math.round((50 * document.body.clientWidth) / 100);
    logoImg.height = Math.round((logoImg.width * logoImg.height) / originalWidth);

    // Create a small utitlity object.
    var logo = {
      img: logoImg,
      x: (canvas.width / 2) - (logoImg.width / 2),
      y: (canvas.height / 2) - (logoImg.height / 2),
    };

    // Present the image.
    if (logo.img.complete) {
      c.drawImage(logo.img, logo.x, logo.y, logo.img.width, logo.img.height);
    } else {
      logo.img.onload = function() {
        c.drawImage(logo.img, logo.x, logo.y, logo.img.width, logo.img.height);
      };
    }

    // CHange the color to black.
    c.fillStyle = '#000000';
    c.font = 'bold 16px Arial, sans-serif';

    var textSize = c.measureText(phrase);
    var xcoord = (canvas.width / 2) - (textSize.width / 2);

    c.fillText(phrase, xcoord, (logo.y + logo.img.height) + 50);
  }
};