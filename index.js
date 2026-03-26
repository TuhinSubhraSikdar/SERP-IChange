// ==UserScript==
// @name         Google Logo Animated Custom
// @match        *://www.google.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function replaceLogo() {
        const logoLink = document.querySelector('a#logo');

        if (logoLink && !document.getElementById("customLogoText")) {
            logoLink.innerHTML = "";
            logoLink.setAttribute("aria-label", "Tuhin Subhra Sikdar");

            const custom = document.createElement("a");
            custom.id = "customLogoText";
            custom.innerText = "Godgifted";

            // Hyperlink
            custom.href = "https://github.com/tuhinsubhrasikdar";
            custom.target = "_blank";

            // Tooltip on hover
            custom.title = "Tuhin Subhra Sikdar";

            // Styling + animation
            Object.assign(custom.style, {
                fontSize: "24px",
                fontWeight: "bold",
                fontFamily: "Arial, sans-serif",
                textDecoration: "none",
                background: "linear-gradient(90deg, #4285f4, #ea4335, #fbbc05, #34a853)",
                backgroundSize: "300%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                animation: "gradientMove 3s infinite linear",
                textShadow: "0 0 8px rgba(66,133,244,0.8), 0 0 12px rgba(234,67,53,0.6)"

            });

            logoLink.appendChild(custom);

            //  Add animation keyframes
            if (!document.getElementById("logoAnimationStyle")) {
                const style = document.createElement("style");
                style.id = "logoAnimationStyle";
                style.innerHTML = `
                    @keyframes gradientMove {
                        0% { background-position: 0%; }
                        100% { background-position: 300%; }
                    }

                    #customLogoText:hover {
                        filter: brightness(1.5);
                        text-shadow: 0 0 12px #fff, 0 0 20px #4285f4;
                    }
                `;
                document.head.appendChild(style);
            }
        }
    }

    setInterval(replaceLogo, 1000);
})();
console.log("Custom Godgifted Logo Script Loaded");