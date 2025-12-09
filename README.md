# Krishna Prasad Portfolio

A modern, responsive personal portfolio website built with **React**, **Tailwind CSS**, and **Vite**, and deployed on **Netlify**. Designed in Figma and coded in VS Code, this portfolio showcases my experience, projects, and skills with a smooth user interface and interactive features.

---

## 🔗 Demo

**[View Live Site](https://krishnaprasadp.netlify.app/)**

---

## ✨ Features

- **Fully Responsive Layout:** Optimized for seamless viewing on desktop, tablet, and mobile devices.
- **Smooth Navigation:** Features smooth scrolling and section highlighting for an intuitive user experience.
- **Interactive Design:** Includes a custom cursor effect for an engaging and interactive feel.
- **Key Sections:**
  - **About Me**
  - **Experience**
  - **Projects**
  - **Signature** (Closing/Contact)
- **Maintainable Codebase:** Built with reusable components.
- **Performance Optimized:** Utilizes lazy-loaded images for faster loading times.

---

## 🚀 Technologies Used

| Category               | Technology                    | Purpose                                        |
| :--------------------- | :---------------------------- | :--------------------------------------------- |
| **Frontend Framework** | **React**                     | Building the user interface.                   |
| **Build Tool**         | **Vite**                      | Fast development server and production build.  |
| **Styling**            | **Tailwind CSS**              | Utility-first CSS framework for rapid styling. |
| **Animations**         | **Framer Motion**             | Declarative animation library for React.       |
| **Icons**              | **Lucide React, React Icons** | Vector icons for UI elements.                  |
| **Deployment**         | **Netlify**                   | Continuous deployment and hosting.             |
| **Design**             | **Figma**                     | Initial UI/UX design.                          |
| **Font**               | **Inter**                     | Modern and legible typeface.                   |

---

## 🛠️ Setup Instructions

Follow these steps to get a local copy of the project up and running.

### Prerequisites

You need **Node.js** and **npm** installed on your machine.

### Installation

1.  **Clone the repository:**

    ```bash
    git clone [https://github.com/yourusername/portfolio.git](https://github.com/yourusername/portfolio.git)
    cd portfolio
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Configure Environment Variables:**
    Create a file named **`.env`** in the root directory and add your content configuration. The site uses environment variables to manage content.

    **`.env` file sample configuration:**

    ```env
    VITE_PORTFOLIO_PROFILE_DATA='{"profile":{"first_name":"Krishna Prasad","last_name":"Pentakota","role":"Full Stack Developer","bio":"I build accessible, pixel-perfect digital experiences for the web.","socials":[{"name":"GitHub","link":"[https://github.com/p-krishnaprasad](https://github.com/p-krishnaprasad)"},{"name":"LinkedIn","link":"[https://www.linkedin.com/in/krishna-prasad-p/](https://www.linkedin.com/in/krishna-prasad-p/)"}]}}'

    VITE_PORTFOLIO_ABOUT_DATA='{"about":[{"parts":[{"text":"I am a seasoned ","bold":false},{"text":"Software Engineer","bold":true}]}]}'

    VITE_PORTFOLIO_EXPERIENCES_DATA='{"experiences":[{"role":"Senior Consultant","company":"GCI Consulting","companyLink":"[https://gciconsulting.com/](https://gciconsulting.com/)","period":"Sep 2022 — Present","description":"Designed and developed end-to-end ETL pipelines and digital banking solutions using Pentaho, Python, Vermeg, and Temenos Infinity, ensuring accurate APRA submissions and regulatory compliance. Built data transformation logic, APIs, and hybrid web/mobile applications while collaborating with stakeholders to define requirements and reporting standards. Led development efforts, managed releases, and resolved production issues to ensure stable, scalable, and efficient banking platforms.","technologies":["Python","Pentaho","React","JavaScript","Edge Connect","HTML & CSS","SQL"]}]}'

    VITE_PORTFOLIO_PROJECTS_DATA='{"projects":[{"title":"Portfolio Website","description":"A minimal, accessible, and animated portfolio site built with React and Tailwind.","technologies":["React","Tailwind","Accessibility"],"link":"","image":"portfolio.png"}]}'

    VITE_PORTFOLIO_SIGNATURE_DATA='{"signature":[{"parts":[{"text":"From ","bold":false},{"text":"Figma ","bold":true},{"text":"to ","bold":false},{"text":"VS Code","bold":true},{"text":", brought to life with ","bold":false},{"text":"React","bold":true},{"text":", ","bold":false},{"text":"Tailwind CSS","bold":true},{"text":", and ","bold":false},{"text":"Vite","bold":true},{"text":". Deployed on ","bold":false},{"text":"Netlify","bold":true},{"text":", with every letter dressed in ","bold":false},{"text":"Inter","bold":true},{"text":". Crafted by me, Krishna — because someone had to make pixels happy.","bold":false}]}]}'
    ```

    > **Note:** All environment variables prefixed with `VITE_` are automatically exposed to Vite. You must restart the development server after updating the `.env` file for changes to take effect.

4.  **Start the development server:**

    ```bash
    npm run dev
    ```

5.  **Build for production (Optional):**
    ```bash
    npm run build
    ```

### Deployment

The project is configured for easy deployment. You can deploy the contents of the `dist` folder (generated by `npm run build`) to Netlify or your preferred hosting service.

---

## 🤝 Contribution

This is a personal portfolio project. While I'm not accepting external feature contributions, you are welcome to **fork** this repository and customize it for your own personal use!

---

## 📝 License

This project is licensed under the **MIT License**. You are free to use and modify the code for personal projects.

---

## 👤 Author

**Krishna Prasad**

- [GitHub](https://github.com/p-krishnaprasad)
- [LinkedIn](https://www.linkedin.com/in/krishna-prasad-p/)
