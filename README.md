# My Django Portfolio

A personal portfolio website built with Django, showcasing my skills, projects, and contact information. This project is designed to demonstrate my expertise in web development, with a focus on backend development and scalable web solutions.

## Features
- Dynamic pages for Home, About, Skills, Projects, and Contact.
- Animated skill cards with proficiency bars using AOS and Bootstrap.
- Social media links and contact information in the footer.
- Custom styling with CSS gradients and hover effects.

## Technologies Used
- **Backend**: Django 5.0.1
- **Frontend**: HTML, CSS (Bootstrap, custom styles), JavaScript (AOS library)
- **Database**: SQLite (default for development)
- **Icons**: Font Awesome 6.4.0
- **Version Control**: Git
- **Hosting**: Intended for local development; deployable to platforms like Heroku or Render.

## Prerequisites
- Python 3.10 or higher
- pip (Python package manager)
- Git (for cloning the repository)
- A code editor (e.g., VS Code)

## Installation

### Clone the Repository
```bash
git clone https://github.com/yourusername/portfolio_project.git
cd portfolio_project
```

### Set Up a Virtual Environment
```bash

python -m venv venv
venv\Scripts\activate  # On Windows
# source venv/bin/activate  # On macOS/Linux
```

### Apply Migrations
```bash
python manage.py makemigrations
python manage.py migrate
```
### Run the Development Server
```bash
python manage.py runserver
```
