// ==UserScript==
// @name         Levelbuilder Scrolling Panes
// @namespace    http://tampermonkey.net/
// @version      5.0
// @description  Adds vertical scroll to all editor/preview panes in Levelbuilder
// @include      https://levelbuilder-studio.code.org/s/*/lessons/*/edit
// @run-at       document-idle
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    const paneSelectors = [
        '#edit-container > div > div:nth-child(1) > div:nth-child(6) > div.Ot4HNqKsbxrpNe1kU2IQ > div > div:nth-child(1) > div:nth-child(1)',
        '#edit-container > div > div:nth-child(1) > div:nth-child(6) > div.Ot4HNqKsbxrpNe1kU2IQ > div > div:nth-child(1) > div:nth-child(2)',
        '#edit-container > div > div:nth-child(1) > div:nth-child(6) > div.Ot4HNqKsbxrpNe1kU2IQ > div > div:nth-child(2) > div:nth-child(1)',
        '#edit-container > div > div:nth-child(1) > div:nth-child(6) > div.Ot4HNqKsbxrpNe1kU2IQ > div > div:nth-child(2) > div:nth-child(2)',
        '#edit-container > div > div:nth-child(1) > div:nth-child(6) > div.Ot4HNqKsbxrpNe1kU2IQ > div > div:nth-child(3) > div:nth-child(1)',
        '#edit-container > div > div:nth-child(1) > div:nth-child(6) > div.Ot4HNqKsbxrpNe1kU2IQ > div > div:nth-child(3) > div:nth-child(2)'
    ];

    function applyScroll(pane) {
        pane.style.overflowY = 'scroll';
        pane.style.maxHeight = '90vh';
    }

    function waitForPanes() {
        const panes = paneSelectors.map(sel => document.querySelector(sel));
        if (panes.every(p => p)) {
            panes.forEach(applyScroll);
        } else {
            setTimeout(waitForPanes, 500);
        }
    }

    waitForPanes();
})();
