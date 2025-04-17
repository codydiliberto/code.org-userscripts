// ==UserScript==
// @name         Levelbuilder Snippets
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  Adds a floating button and copy-paste toolbox in the bottom center
// @include      https://levelbuilder-studio.code.org/s/*/lessons/*/edit
// @run-at       document-idle
// @license      MIT
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

    const SNIPPETS = [
        {
            label: 'Do This',
            content: '<i class="fa fa-check-square-o" aria-hidden="true"></i> **Do This:**'
        },
        {
            label: 'Circulate',
            content: '<i class="fa fa-refresh" aria-hidden="true"></i> **Circulate:**'
        },
        {
            label: 'Discuss',
            content: '<i class="fa fa-comments" aria-hidden="true"></i> **Discuss:**'
        },
        {
            label: 'Discussion Goal',
            content: '<i class="fa fa-lightbulb-o" aria-hidden="true"></i> **Discussion Goal:**'
        },
        {
            label: 'Distribute',
            content: '<i class="fa fa-file-text-o" aria-hidden="true"></i> **Distribute:**'
        },
        {
            label: 'Transition',
            content: '<i class="fa fa-desktop" aria-hidden="true"></i> **Transition:**'
        }
    ];

  function createFloatingToolbox() {
    const toggleBtn = document.createElement('button');
    toggleBtn.textContent = '📋 Snippets';
    toggleBtn.type = 'button';
    Object.assign(toggleBtn.style, {
      position: 'fixed',
      bottom: '20px',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: '9999',
      padding: '6px 12px',
      borderRadius: '6px',
      border: '1px solid #aaa',
      backgroundColor: '#f7f7f7',
      cursor: 'pointer',
      boxShadow: '0 2px 5px rgba(0,0,0,0.15)',
      fontSize: '14px'
    });

    const toolbox = document.createElement('div');
    Object.assign(toolbox.style, {
      display: 'none',
      position: 'fixed',
      bottom: '60px',
      left: '50%',
      transform: 'translateX(-50%)',
      background: '#fff',
      border: '1px solid #ccc',
      borderRadius: '6px',
      padding: '10px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.15)',
      zIndex: '9999'
    });

    SNIPPETS.forEach(snippet => {
      const item = document.createElement('button');
      item.type = 'button';
      item.textContent = snippet.label;
      Object.assign(item.style, {
        display: 'block',
        width: '100%',
        margin: '5px 0',
        cursor: 'pointer',
        padding: '6px',
        fontSize: '13px'
      });
      item.onclick = (e) => {
        e.preventDefault();
        navigator.clipboard.writeText(snippet.content)
          .then(() => {
            item.textContent = '✅ Copied!';
            setTimeout(() => { item.textContent = snippet.label; }, 1000);
          });
      };
      toolbox.appendChild(item);
    });

    toggleBtn.addEventListener('click', (e) => {
      e.preventDefault();
      toolbox.style.display = (toolbox.style.display === 'none') ? 'block' : 'none';
    });

    document.body.appendChild(toggleBtn);
    document.body.appendChild(toolbox);
  }

  createFloatingToolbox();
})();
