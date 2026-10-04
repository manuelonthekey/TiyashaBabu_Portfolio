const fs = require('fs');
let css = fs.readFileSync('style.scss', 'utf8');

const newHeroIndex = css.indexOf('.new-hero {');
if (newHeroIndex !== -1) {
  const originalCSS = css.substring(0, newHeroIndex);
  
  const newHeroCSS = \.new-hero {
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 85vh;
  padding: 0;
  border-bottom: 1px solid var(--ln);
  background: linear-gradient(to bottom, color-mix(in srgb, var(--bg) 30%, white) 0%, var(--bg) 100%);
}

.hero-bg-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
  text-align: center;
  font-size: 14vw;
  font-weight: 900;
  white-space: nowrap;
  z-index: 1;
  font-family: "Helvetica Neue", Arial, sans-serif;
  letter-spacing: -0.05em;
  text-transform: uppercase;
  background: linear-gradient(to bottom, var(--mu) 0%, var(--tx) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  opacity: 0.85;
}

.hero-signature {
  position: absolute;
  top: 12%;
  left: 10%;
  font-family: 'Amsterdam', 'Dancing Script', 'Caveat', cursive;
  font-size: clamp(40px, 6vw, 90px);
  font-weight: bold;
  color: #111111;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
  transform: rotate(-4deg);
  z-index: 4;
}

.hero-buttons {
  position: absolute;
  right: 45%;
  bottom: 25%;
  display: flex;
  flex-direction: row;
  gap: 15px;
  z-index: 5;
}

.hero-buttons .btn {
  text-align: center;
  padding: 12px 24px;
  background: color-mix(in srgb, var(--bg) 80%, transparent);
  backdrop-filter: blur(4px);
  white-space: nowrap;
}

.hero-buttons .btn.p {
  background: var(--ac);
}

.hero-portrait {
  position: absolute;
  right: 0;
  bottom: -2%;
  z-index: 2;
  height: 92vh;
  display: flex;
  align-items: flex-end;
}

.hero-portrait img {
  height: 100%;
  width: auto;
  object-fit: cover;
  transform-origin: bottom right;
}

.hero-footer {
  position: absolute;
  bottom: 30px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  z-index: 3;
  padding: 0 clamp(20px, 4vw, 48px);
  box-sizing: border-box;
}

.hero-footer p {
  max-width: 320px;
  font-size: 14px;
  line-height: 1.4;
  margin: 0;
  font-weight: 500;
}

.social-icons {
  display: flex;
  gap: 15px;
}

.social-icons a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  color: var(--tx);
  text-decoration: none;
  transition: 0.2s;
}

.social-icons a:hover {
  color: var(--ac);
  transform: translateY(-2px);
}

@media (max-width: 1100px) {
  .hero-portrait {
    right: 0%;
  }
}

@media (max-width: 900px) {
  .hero-signature {
    top: 12%;
    left: 5%;
    font-size: clamp(35px, 8vw, 60px);
  }
  .hero-buttons {
    right: auto;
    left: 5%;
    bottom: 30%;
    flex-direction: column;
    width: 200px;
  }
  .hero-buttons .btn {
    width: 100%;
  }
  .hero-portrait {
    height: 60vh;
    right: -15%;
  }
  .hero-bg-text {
    font-size: 11vw;
  }
  .hero-footer {
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    gap: 15px;
    bottom: 20px;
  }
}

@media (max-width: 560px) {
  .new-hero {
    min-height: 90vh;
    height: auto;
  }
  .hero-signature {
    top: 10%;
    font-size: clamp(30px, 10vw, 50px);
  }
  .hero-bg-text {
    font-size: 11.5vw;
  }
  .hero-portrait {
    height: 55vh;
    right: -25%;
  }
  .hero-buttons {
    bottom: 25%;
    left: 5%;
    width: 180px;
  }
  .hero-footer {
    position: absolute;
    bottom: 20px;
    z-index: 5;
    width: 100%;
    box-sizing: border-box;
  }
  .hero-footer p {
    font-size: 13px;
  }
}\;

  fs.writeFileSync('style.scss', originalCSS + newHeroCSS);
  fs.writeFileSync('style.css', originalCSS + newHeroCSS);
  console.log('Mobile layout finalized safely');
}
