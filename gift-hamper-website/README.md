# Gift Hamper Website

## Overview
The Gift Hamper Website is a React application designed to showcase a variety of beautifully curated gift hampers. Each hamper is presented with detailed descriptions, images, and pricing, allowing users to easily browse and select the perfect gift for any occasion. The website features a modern aesthetic, enhanced by Tailwind CSS for responsive design and a seamless user experience.

## Features
- **Responsive Design**: The website is fully responsive, ensuring a great experience on both desktop and mobile devices.
- **Dynamic Hamper Listings**: Users can view a list of available hampers, each displayed with an image, description, and price.
- **Theme Switcher**: A built-in theme switcher allows users to toggle between different visual themes, enhancing the aesthetic appeal of the site.
- **Easy Navigation**: The application is structured for easy navigation, with a clear layout and intuitive user interface.

## Project Structure
```
gift-hamper-website
├── public
│   └── index.html
├── src
│   ├── assets
│   ├── components
│   │   ├── HamperCard.jsx
│   │   ├── HamperList.jsx
│   │   └── ThemeSwitcher.jsx
│   ├── pages
│   │   └── Home.jsx
│   ├── styles
│   │   └── tailwind.css
│   ├── App.jsx
│   └── index.js
├── tailwind.config.js
├── package.json
├── postcss.config.js
└── README.md
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd gift-hamper-website
   ```
3. Install the dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm start
   ```

## Usage
- Visit `http://localhost:3000` in your browser to view the application.
- Browse through the available hampers and use the theme switcher to change the visual style of the website.

## Technologies Used
- React: A JavaScript library for building user interfaces.
- Tailwind CSS: A utility-first CSS framework for styling.
- PostCSS: A tool for transforming CSS with JavaScript plugins.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.