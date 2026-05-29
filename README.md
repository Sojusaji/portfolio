# Professional Portfolio Website

A modern, fast, and serverless portfolio website designed to showcase my software development skills, featured projects, and professional journey. 

## 🚀 Tech Stack

* **Frontend Framework:** React.js (built with Vite for lightning-fast performance)
* **Styling:** Vanilla CSS (Custom, clean layout design)
* **Deployment:** Serverless architecture

## ✨ Key Features

* **Dynamic Skill Showcase:** A curated display of my technical competencies and toolsets.
* **Project Gallery:** A collection of my previous work, complete with live deployment links and direct paths to their GitHub repositories for source-code review.
* **Serverless Contact Form:** Fully integrated with the **EmailJS API**, allowing recruiters and potential clients to send messages directly to my personal inbox straight from the browser without needing a dedicated backend server.
* **Fully Responsive:** Optimized for desktop, tablet, and mobile viewing screens.

## 🛠️ Local Setup & Installation

To run this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
    git clone https://github.com/Sojusaji/portfolio
    cd portfolio
   ```

3. **Install Project Dependencies**
   Install all the required npm packages (including React, Vite, and EmailJS) listed in the package.json file:
    ```bash
     npm install
    ```
    
4. **Configure Environment Variables**
     Because sensitive API keys are hidden from GitHub using a .gitignore file, you need to create your own environment         configuration locally.

     * Create a new file named .env in the root directory of your project (the same folder as package.json).

     * Add your personal EmailJS credentials inside it:

     * **Plaintext**
       ```plaintext
          VITE_EMAILJS_SERVICE_ID=your_actual_service_id_here
          VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id_here
          VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key_here
       ```
      
 5. **Run the Development Server**
      Once everything is configured, start the local development server by running:
     ```bash
       npm run dev
     ```
  Open your browser and navigate to the local address provided in your terminal (usually http://localhost:5173) to view   
  the website.

🤝 Whether you are looking to hire a full-time developer or have a project you'd like to bring to life, feel free to reach out via the contact form!    
