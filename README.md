📘 Pokédex Web App

A responsive and interactive Pokédex web application built with HTML, CSS, and Vanilla JavaScript, consuming data from the public PokeAPI.

This project displays the first 151 Pokémon (Generation I), allowing users to explore them visually and filter by type in real time.

## 🖼️ Preview

![Pokédex Preview](./finalProject.png)

🚀 Features

Fetches Pokémon data dynamically from the PokeAPI

Displays official artwork, name, ID, types, height, and weight

Filter Pokémon by type using header buttons

Responsive grid layout (mobile → desktop)

Smooth Back to Top button with scroll detection

Clean UI inspired by classic Pokédex aesthetics

No frameworks, no libraries — pure JavaScript

🧠 Technologies Used

HTML5 – semantic structure

CSS3 – custom properties (CSS variables), Grid, Flexbox, animations

JavaScript (ES6+)

Fetch API

DOM manipulation

Event handling

PokeAPI – Pokémon data source

📂 Project Structure
/
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── main.js
│   └── backToTop.js
├── img/
│   ├── logo.png
│   └── favicon.png

⚙️ How It Works

On load, the app fetches Pokémon data (IDs 1–151) from the PokeAPI.

Each Pokémon is rendered dynamically as a card.

Clicking a type button filters Pokémon without reloading the page.

A floating button appears after scrolling down, allowing smooth navigation back to the top.

📱 Responsive Design

The layout adapts automatically to screen size:

1 column on small screens

2 columns on tablets

3 columns on desktop

♿ Accessibility & UX Notes

Semantic HTML structure

Respect for reduced-motion preferences

Clear visual hierarchy

High-contrast type labels

🔧 Possible Improvements

Pagination or infinite scroll

Search by name or ID

Modal with detailed Pokémon stats

Local caching for faster reloads

Dark mode toggle

📡 API Reference

PokeAPI
https://pokeapi.co/

🧪 Status

This project is complete, functional, and ready for extension.

It serves as a solid example of:

API consumption

DOM-driven UI

Clean front-end architecture without frameworks

📜 License

This project is for educational and personal use.
Pokémon and Pokémon-related names are © Nintendo / Game Freak.