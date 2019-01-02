// ==UserScript==
// @name         Cursor Hider
// @version      0.1
// @description  Automatically hides the cursor when idle
// @author       Eric Borgsten
// @match        http://*.youtube.com/tv*
// @match        https://*.youtube.com/tv*
// @namespace    https://github.com/borgsten
// @updateURL    https://raw.githubusercontent.com/borgsten/cursorhider/master/cursorhider.user.js
// ==/UserScript==

const hidingTimeout = 1500;

function onMouseMove() {
    document.body.style.cursor = 'auto';
    setTimeout(() => {document.body.style.cursor = 'none';}, hidingTimeout);
}

document.addEventListener("mousemove", onMouseMove);
onMouseMove();
