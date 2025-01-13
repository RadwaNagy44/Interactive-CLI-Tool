# Interactive-CLI-Tool

An interactive Command Line Interface (CLI) tool built with **Node.js**, **Commander.js**, and **Inquirer.js** for managing a collection of courses. This tool allows users to add new courses, view the list of courses, and store data in a JSON file.

---

## Features

- **Add Courses**: Prompt users to input course details interactively and save them to a JSON file.
- **List Courses**: Display all stored courses in a tabular format.
- **Persistent Storage**: Stores data in a `courses.json` file.
- **Modular Design**: Organized using the `commander` and `inquirer` libraries for clean and extendable code.

---

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/Interactive-CLI-Tool.git
   cd Interactive-CLI-Tool
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start using the CLI tool:
   ```bash
   node index.js
   ```

---

## Usage

### Commands

#### 1. **Add a Course**
   - Command:
     ```bash
     node index.js add
     ```
   - Aliases: `a`
   - Description: Prompt the user to enter the course title, description, price, and instructor, and save the course to `courses.json`.

#### 2. **List All Courses**
   - Command:
     ```bash
     node index.js list
     ```
   - Aliases: `l`
   - Description: Display all stored courses in a tabular format.

### Example Courses Data Structure

The courses are stored in `courses.json` in the following format:
```json
[
  {
    "title": "JavaScript Course",
    "description": "Course to learn javascript language from scratch",
    "price": "1000$",
    "instructor": "Ahmed Metwally"
  },
  {
    "title": "TypeScript Course",
    "description": "Course to learn typescript language",
    "price": "500$",
    "instructor": "Elzero"
  }
]
```

---

## Project Structure

```
Interactive-CLI-Tool/
│
├── index.js              # Main application file
├── courses.json          # JSON file to store course data
├── package.json          # Project dependencies
└── README.md             # Project documentation
```

---

## How to Contribute

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your feature"
   ```
4. Push to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Contact

For any questions or feedback, feel free to reach out:

- **GitHub**: [RadwaNagy44](https://github.com/RadwaNagy44)
- **Email**: radwanagy561@gmail.com

