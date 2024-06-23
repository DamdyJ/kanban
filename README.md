# Kanban Board App

![Kanban Thumbnail](https://github.com/DamdyJ/kanban/assets/152348339/3adca7c3-5d92-4504-8bed-900af4d53b1b)

This project implements a Kanban board application using React and various libraries for drag-and-drop functionality and state management.

## Description

The Kanban board allows users to manage tasks across different stages (Backlog, TODO, In progress, Complete) using drag-and-drop interactions. It includes features like adding new tasks, moving tasks between columns, and a burn barrel for deleting tasks.

## Features

- Drag-and-drop cards between columns (Backlog, TODO, In progress, Complete).
- Add new tasks with a user-friendly interface.
- Easily delete cards by dragging them away.
- User account management:
    - Create an account
    - Login/logout
    - Register new users
    - Update account information
    - Delete account


## Technologies Used

- React
- Framer Motion
- React Icons
- @inertiajs/react
- @uidotdev/usehooks (for local storage)
- CSS Modules for styling

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/DamdyJ/kanban.git
   cd kanban
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the Laravel backend (in one terminal):**

   ```bash
   php artisan serve
   ```

   The Laravel backend should now be running on [http://127.0.0.1:8000](http://127.0.0.1:8000).

4. **Run the React frontend (in another terminal):**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

   The React frontend should now be running on [http://localhost:3000](http://localhost:3000).

5. **Open the application:**

   Open your web browser and go to [http://localhost:3000](http://localhost:3000) to see the Kanban board application in action.




## License

This project is licensed under the Apache License 2.0. See the [LICENSE](LICENSE) file for details.
