/**
 * made-with-love.js — self-contained, reusable footer component
 *
 * HOW TO DROP INTO ANY PROJECT:
 *   1. Copy this file into the project.
 *   2. Add these two lines where you want the component to appear:
 *
 *        <div id="made-with-love-mount"></div>
 *        <script src="made-with-love.js" defer></script>
 *
 * TWO THINGS TO BE AWARE OF:
 *   1. Light mode — uses [data-theme="light"] on an ancestor element.
 *      If your project uses a different mechanism (e.g. a .light class),
 *      update that one selector in the STYLES section below.
 *   2. The button uses id="share-love-btn". Make sure no other element
 *      in the host page reuses that ID.
 */

(function () {
  function init() {
    const mount = document.getElementById("made-with-love-mount");
    if (!mount) return;

    // ── FONTS ──
    if (!document.querySelector('link[href*="Space+Mono"]')) {
      const preconnect1 = document.createElement("link");
      preconnect1.rel = "preconnect";
      preconnect1.href = "https://fonts.googleapis.com";
      document.head.appendChild(preconnect1);

      const preconnect2 = document.createElement("link");
      preconnect2.rel = "preconnect";
      preconnect2.href = "https://fonts.gstatic.com";
      preconnect2.crossOrigin = "";
      document.head.appendChild(preconnect2);

      const fontLink = document.createElement("link");
      fontLink.rel = "stylesheet";
      fontLink.href =
        "https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap";
      document.head.appendChild(fontLink);
    }

    // ── STYLES ──
    if (!document.getElementById("made-with-love-styles")) {
      const style = document.createElement("style");
      style.id = "made-with-love-styles";
      style.textContent = `
        #made-with-love-mount {
          --mwl-default: oklch(62% 0 0);
          --mwl-hover: oklch(89.392% 0.13858 90.472);
          --mwl-tip-bg: oklch(27% 0.009 317);
          --mwl-tip-border: oklch(32% 0.009 322);
          --font-mono: "Space Mono", monospace;
          --text-ui: clamp(0.65rem, 0.6vw, 0.875rem);
          --text-fine: clamp(0.6rem, 0.7vw, 0.7rem);
        }

        [data-theme="light"] #made-with-love-mount {
          --mwl-default: oklch(42% 0 0);
          --mwl-hover: #b36a08;
          --mwl-tip-bg: #eceae6;
          --mwl-tip-border: #d4d0c8;
        }

        #made-with-love-mount #share-love-btn {
          position: relative;
          font-family: var(--font-mono);
          font-size: var(--text-ui);
          color: var(--mwl-default);
          font-weight: 700;
          text-transform: uppercase;
          text-decoration: none;
          cursor: pointer;
          transition: color 0.2s ease;
        }

        #made-with-love-mount #share-love-btn:hover {
          color: var(--mwl-hover);
        }

        #made-with-love-mount #share-love-btn[data-tooltip]::after {
          content: attr(data-tooltip);
          position: absolute;
          top: auto;
          bottom: calc(100% + 15px);
          left: 50px;
          background: var(--mwl-tip-bg);
          border: 1px solid var(--mwl-tip-border);
          padding: 4px 8px;
          border-radius: 4px;
          font-size: var(--text-fine);
          font-weight: 400;
          text-transform: none;
          white-space: nowrap;
          z-index: 1100;
          color: var(--mwl-hover);
          pointer-events: none;
          opacity: 0;
          transform: translateY(4px);
          transition: opacity 0.18s ease, transform 0.18s ease;
        }

        #made-with-love-mount #share-love-btn[data-tooltip]:hover::after {
          opacity: 1;
          transform: translateY(0);
        }

        .share-love-toast {
          position: fixed;
          bottom: 24px;
          left: 50%;
          transform: translateX(-50%);
          background: var(--color-success, hsl(90, 59%, 66%));
          color: #121212;
          padding: 10px 20px;
          border-radius: 6px;
          font-family: var(--font-body, var(--font-main, sans-serif));
          font-size: 0.875rem;
          font-weight: 700;
          z-index: var(--z-notification, 1200);
          white-space: nowrap;
          animation: mwlFadeInUp 0.2s ease forwards;
        }

        .share-love-toast.error {
          background: var(--color-error, hsl(345, 100%, 69%));
        }

        @keyframes mwlFadeInUp {
          from { opacity: 0; transform: translateX(-50%) translateY(10px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
        }

        @keyframes mwlFadeOut {
          from { opacity: 1; }
          to   { opacity: 0; }
        }
      `;
      document.head.appendChild(style);
    }

    // ── HTML ──
    mount.innerHTML = `
      <nav>
        <span>
          <a
            id="share-love-btn"
            data-tooltip="Share with 💛"
            role="button"
            aria-label="Copy page link to share"
          >[made with 🩶]</a>
        </span>
      </nav>
    `;

    // ── BEHAVIOR ──
    function showShareToast(message, type) {
      const existing = document.querySelector(".share-love-toast");
      if (existing) existing.remove();

      const toast = document.createElement("div");
      toast.className = "share-love-toast";
      if (type === "error") toast.classList.add("error");
      toast.textContent = message;
      document.body.appendChild(toast);

      setTimeout(() => {
        toast.style.animation = "mwlFadeOut 0.2s ease forwards";
        setTimeout(() => toast.remove(), 200);
      }, 5000);
    }

    const shareBtn = document.getElementById("share-love-btn");
    if (shareBtn) {
      shareBtn.addEventListener("click", async () => {
        const canonicalLink = document.querySelector('link[rel="canonical"]');
        const pageUrl = canonicalLink ? canonicalLink.href : window.location.href;
        const text = "Check out " + (document.title || "this page") + ": " + pageUrl;
        try {
          await navigator.clipboard.writeText(text);
          showShareToast("Link copied. Now share it with love 🩶", "success");
        } catch {
          showShareToast("Could not copy link. Try manually.", "error");
        }
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
