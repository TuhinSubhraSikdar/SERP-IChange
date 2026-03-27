// ==UserScript==
// @name         Google Preload Animation
// @match        *://www.google.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function showLoader() {
        if (document.getElementById("customLoader")) return;

        // Create overlay
        const loader = document.createElement("div");
        loader.id = "customLoader";

        loader.innerHTML = `
            <div id="loaderText">Godgifted</div>
        `;

        Object.assign(loader.style, {
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            background: "#000",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: "999999",
            flexDirection: "column"
        });

        document.documentElement.appendChild(loader);

        // Style text
        const text = loader.querySelector("#loaderText");

        Object.assign(text.style, {
            fontSize: "40px",
            fontWeight: "bold",
            fontFamily: "Arial",
            background: "linear-gradient(90deg, #4285f4, #ea4335, #fbbc05, #34a853)",
            backgroundSize: "300%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            animation: "gradientMove 2s infinite linear, fadeIn 1s ease"
        });

        // Add animations
        const style = document.createElement("style");
        style.innerHTML = `
            @keyframes gradientMove {
                0% { background-position: 0%; }
                100% { background-position: 300%; }
            }

            @keyframes fadeIn {
                from { opacity: 0; transform: scale(0.8); }
                to { opacity: 1; transform: scale(1); }
            }

            @keyframes fadeOut {
                to { opacity: 0; visibility: hidden; }
            }
        `;
        document.head.appendChild(style);

        // Remove loader after delay
        window.addEventListener("load", () => {
            setTimeout(() => {
                loader.style.animation = "fadeOut 0.8s forwards";
                setTimeout(() => loader.remove(), 800);
            }, 1500); // duration of loader
        });
    }

    showLoader();
})();