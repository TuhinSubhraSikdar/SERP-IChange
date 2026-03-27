// ==UserScript==
// @name         Godgifted Loader
// @match        *://*/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function () {
    'use strict';

    const style = document.createElement("style");
    style.textContent = `

#techLoader {
  position: fixed;
  inset: 0;
  background: radial-gradient(circle at center, #050505, #000000);
  color: #00eaff;
  font-family: monospace;
  z-index: 999999999;
}

/* terminal */
.terminal {
  padding: 20px;
  font-size: 13px;
}

.line {
  margin-bottom: 4px;
}

.ok { color: #00ffaa; }

.brand {
  position: fixed;
  bottom: 15px;
  width: 100%;
  text-align: center;
  font-size: 11px;
  color: #8be9ff;
  opacity: 0.7;
}

    `;

    document.documentElement.appendChild(style);

    const loader = document.createElement("div");
    loader.id = "techLoader";

    loader.innerHTML = `
<div class="terminal" id="terminal"></div>

<div class="brand">
  Godgifted's SERP<br>
  powered by Google's API
</div>
    `;

    function attach() {
        if (!document.body) return requestAnimationFrame(attach);
        document.body.appendChild(loader);

        const terminal = document.getElementById("terminal");

        const logs = [
            "Initializing system...",
            "Loading kernel...",
            "Connecting...",
            "Injecting UI...",
            "Finalizing..."
        ];

        let i = 0;

        function addLine(text) {
            const line = document.createElement("div");
            line.className = "line";
            line.innerHTML = `${text} <span class="ok">[OK]</span>`;
            terminal.appendChild(line);
        }

        const interval = setInterval(() => {
            if (i < logs.length) {
                addLine(logs[i]);
                i++;
            } else {
                clearInterval(interval);
            }
        }, 200); // ⚡ super fast

        // TOTAL ~2 seconds
        setTimeout(() => {
            loader.style.opacity = "0";
            loader.style.transition = "opacity 0.4s ease";
            setTimeout(() => loader.remove(), 400);
        }, 2000);
    }

    attach();
})();