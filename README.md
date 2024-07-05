# Laravel TODO Application with React and Inertia.js

This is a simple TODO application built with Laravel, React, and Inertia.js, styled with Tailwind CSS. It allows users to add and delete TODO items, and dynamically refreshes the list upon changes.

## Features

- Add TODO items
- Delete TODO items
- Real-time list update
- Basic styling with Tailwind CSS

## Prerequisites

- PHP (>= 8.0)
- Composer
- Node.js (>= 12.0)
- NPM or Yarn
- MySQL or SQLite

## Installation

1. **Clone the repository**

    ```bash
    git clone https://github.com/your-username/your-repository.git
    cd your-repository
    ```

2. **Install PHP dependencies**

    ```bash
    composer install
    ```

3. **Install JavaScript dependencies**

    ```bash
    npm install
    ```

4. **Set up environment variables**

   Copy the `.env.example` to `.env` and configure your database settings.

    ```bash
    cp .env.example .env
    ```

5. **Generate application key**

    ```bash
    php artisan key:generate
    ```

6. **Run database migrations**

    ```bash
    php artisan migrate
    ```

7. **Build assets**

    ```bash
    npm run dev
    ```

## Running the Application

1. **Start the development server**

    ```bash
    php artisan serve
    ```

2. **Visit the application**

   Open your browser and visit `http://localhost:8000/todos`.

## Running Tests

This application uses Pest for testing.

1. **Run the tests**

    ```bash
    ./vendor/bin/pest
    ```

## Directory Structure

- `app/Models` - Contains the Todo model
- `resources/js/Pages` - Contains the React components
- `resources/views` - Contains the Blade template
- `routes/web.php` - Contains the application routes
- `tests/Feature` - Contains the Pest feature tests

## Contributing

Feel free to fork this repository and contribute by submitting a pull request. Any improvements or bug fixes are welcome.

## License

This project is open-source and licensed under the MIT license.
