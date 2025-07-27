# ✊ Rock Paper Scissors Game

A classic **Rock, Paper, Scissors** game built with **HTML, CSS, and JavaScript**, where the player competes against the computer. The UI is interactive and displays the score and selected choices with images.

---

## 🎮 Live Demo

🚀 *[Coming soon — deploy on GitHub Pages or Netlify]*

---

## 🛠️ Technologies Used

- ✅ HTML5
- ✅ CSS3 (Responsive UI with Flexbox)
- ✅ JavaScript (DOM Manipulation, Event Handling, Randomization)

---

## 🎯 Features

- User vs Computer gameplay
- Random computer move generation
- Real-time score tracking
- Image-based move display (rock, paper, scissors)
- Draw, win, and lose messages with visual feedback
- Responsive design for smaller screens

---

## 🧠 Game Logic Overview

- Computer randomly picks from `["rock", "paper", "scissors"]`
- User’s choice is captured via click
- The winner is decided using classic game rules:
  - Rock > Scissors
  - Paper > Rock
  - Scissors > Paper
- Scores update accordingly
- Images update to show the chosen moves

```js
const options = ["rock", "paper", "scissors"];
const randIdx = Math.floor(Math.random() * 3);
const compChoice = options[randIdx];
````

---

## 📁 Project Structure

```
RockPaperScissors/
├── index.html         # Main structure and UI
├── style.css          # Styling and layout
├── app.js             # Game logic and event handling
├── images/            # Rock, paper, scissors & default icons
│   ├── rock.png
│   ├── paper.png
│   ├── scissors.png
│   └── quest.png
└── README.md          # Project documentation
```

---

## 📷 Screenshots

*(After deployment, include screenshots here using Markdown)*

```markdown
![Gameplay Screenshot](./images/gameplay.png)
```

---

## 🧪 How to Run Locally

1. Clone the repository:

```bash
git clone https://github.com/zufshan98/RockPaperScissors.git
```

2. Open the folder and launch `index.html` in your browser.

---

## 🚀 Future Improvements

* Add "Best of 5" or custom round modes
* Add animations for move transitions
* Add sound effects on winning/losing
* Make it mobile-first with better responsiveness

---

## 🧾 License

This project is licensed under the [MIT License](LICENSE).

---

> Built with 💻 and ☕ by Zufshan Naaz
