# Professional EJS Multi-Page Website Template

A reusable **Node.js + Express + EJS** website template with multiple pages, a professional layout, sticky footer, and placeholder authentication (Login + Sign Up) for future projects.

This project is designed as a **starter template** that can be reused later for:
- class assignments
- portfolio websites
- admin dashboards
- database projects
- login/signup systems
- future full-stack applications

---

## Features

- **Express server setup**
- **EJS templating engine**
- **Reusable partials**
  - Header
  - Footer
  - Shared `<head>`
- **Multiple pages**
  - Home
  - Page 2
  - Page 3
  - Page 4
  - Page 5
- **Professional modern UI**
- **Sticky footer**
  - Footer stays at the bottom of the page even if content is short
- **Placeholder authentication**
  - Login page
  - Sign Up page
  - Fake login/signup logic for template/demo purposes
- **Database placeholders**
  - Clear comments showing where MySQL / MongoDB logic should go later
- **Session placeholders**
  - Clear comments showing where session storage should be added later

---

## Tech Stack

- **Node.js**
- **Express.js**
- **EJS**
- **HTML / CSS / JavaScript**

---

## Project Structure

```bash
my-template-site/
│
├── app.js
├── package.json
├── README.md
│
├── config/
│   └── db.js
│
├── public/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── main.js
│
└── views/
    ├── partials/
    │   ├── head.ejs
    │   ├── header.ejs
    │   └── footer.ejs
    │
    ├── home.ejs
    ├── page2.ejs
    ├── page3.ejs
    ├── page4.ejs
    ├── page5.ejs
    ├── login.ejs
    └── signup.ejs