# Your UIC Journey

## About

Your UIC Journey follows the journey of a UIC computer science student through their 4-year undergraduate study. Players are presented with different scenarios and checkpoints throughout the game, where they can make different choices to affect different skills. At the end of the game, users choose what they want to do upon graduation, and their skills gained over their time at UIC determines their success within their choice.

## Setup

1. From the root directory, run the command `npm i` in the terminal to install all dependencies.
2. From the root directory, run the command `npm run dev` in the terminal to start running the project.
3. Go to the link displayed in the terminal in the browser.

## Code Overview

Your UIC Journey uses React + TypeScript. To be able to access data throughout the entire application, we created a global store using [Zustand](https://zustand.docs.pmnd.rs/getting-started/introduction) (located within `src/data/store.ts`). We also used [React Router](https://reactrouter.com/) to switch between various pages. At the end of the game, we use the previous choices made, along with their effects on the user's statistics, to evaluate and provide an outcome similar to real life.

## Preview

### Video Demo

[Click Here!](https://youtu.be/0IjNQdt2-Xs?si=tf1KV44WETjI-p_E)

### Intro Page

<img width="3024" height="1658" alt="image" src="https://github.com/user-attachments/assets/dc43b5f4-f344-474a-a6b8-52539fb31e04" />

### Set of First Semester Choices

<img width="3024" height="1658" alt="image" src="https://github.com/user-attachments/assets/7d59fefa-83a1-4f37-95e4-7bdfd99748ef" />

### Set of Final Year Choices

<img width="3024" height="1658" alt="image" src="https://github.com/user-attachments/assets/6e61ee5a-bb6b-4bf6-b5a0-2ef42a49ea45" />

### Possible Ending

<img width="3024" height="1658" alt="image" src="https://github.com/user-attachments/assets/19488f1e-7802-419e-9be4-fd120bf42bc8" />
