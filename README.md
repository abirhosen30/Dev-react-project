<div align="center">

# 🧩 Dev Stack

**Build your ideal development stack — one technology at a time.**

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)

</div>

---

## 📖 About the Project

**Dev Stack** is a React + TypeScript web app that helps developers explore frontend, backend, database, and tooling options — compare them side by side, and put together a personal stack that fits their next project.

Users browse a curated catalog of technologies (each with a rating, difficulty level, and short description), add the ones they like to their **"Your Stack"** panel, and remove them again whenever they change their mind — all with friendly toast notifications along the way.

---

## 🛠️ Built With

- ⚛️ **React 19**
- 🟦 **TypeScript**
- ⚡ **Vite**
- 🎨 **Tailwind CSS 4**
- 🔔 **react-toastify** — toast notifications
- 🧩 **react-icons** — icon set
- 🧹 **oxlint** — linting

---

## ✨ Features

- 🔍 **Explore Technologies** — Browse a grid of technology cards, each showing an icon, category, difficulty level, rating, and a short description.
- 🧺 **Build Your Own Stack** — Add technologies to a personal "Your Stack" list, remove a single item, or clear the whole stack at once — with instant toast feedback for every action.
- 📱 **Responsive, Modern UI** — A clean Tailwind-powered layout with a sticky navigation bar, an eye-catching hero section, and a friendly empty-state message when your stack is empty.

---

## ❓ React Q&A

**i. What is JSX, and why is it used in React?**
JSX lets us write HTML-like markup inside JavaScript. React uses it because it's a more readable way to describe UI than calling `React.createElement()` directly.

**ii. What is the difference between props and state?**
Props are read-only data passed into a component from its parent (like `tech` in `TechCard`). State is data a component owns and can change itself (like `selectedTech` in `Tech`).

**iii. What does the `useState` hook do, and where did you use it in this project?**
`useState` gives a component a value that can change and triggers a re-render when it updates. It's used in `Tech.tsx` to track `selectedTech`, the list of technologies the user has added.

**iv. What does the `useEffect` hook do, and why did you need it to load the JSON data?**
`useEffect` normally runs side effects, like data fetching, after a render. This project actually loads the JSON a newer way instead: `App.tsx` starts the `fetch("/data.json")` call and passes the promise down, while `Tech.tsx` reads it with React's `use()` hook inside `<Suspense>`, so no `useEffect` was needed.

**v. Why does every item in a `.map()` list need a unique `key` prop?**
`key` helps React tell list items apart between renders. Without stable, unique keys, React can update the wrong items and cause bugs.

**vi. What is conditional rendering? Show one place you used it.**
Conditional rendering shows different UI based on a condition. In `SelectedTech.tsx`, an empty-state message is shown when `selectedTech.length === 0`, otherwise the list of selected cards is shown.

**vii. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**
A parent passes data down as props (e.g., `Tech` passes `selectedTech` to `ExploreTech`). To send data back up, the parent passes a function down as a prop (like `setSelectedTech`), which the child calls — as `TechCard` does when "Add to Stack" is clicked.
