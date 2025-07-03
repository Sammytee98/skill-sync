## SkillSync

SkillSync is an intelligent career tool that helps job seekers extract skills from their resume, then match them with highly relevant remote job opportunities. From parsing resumes to filtering top-matched jobs, SkillSync simplifies the job hunting experience, automatically and accurately.

## Live Demo

[Visit Live Website](https://skillsync-one.vercel.app)

## What SkillSync Does

SkillSync is a resume-powered job matcher that:

- Lets users upload or paste their resume.
- Automatically extracts technical and non-technical skills from the content.
- Fetches jobs from multiple remote job boards (RemoteOK, Arbeitnow).
- Matches jobs based on skills and calculates a match percentage.
- Allows users to save jobs, filter/search listings, and more.
- Helps job seekers discover jobs that fit their actual experience—without keyword guessing.

## Tech Stack

- React (Vite)
- Zustand Global
- Tailwind CSS
- Framer Motion
- React Router DOM
- PDF.js + Mammoth
- react-hot-toast
- RemoteOK API && Arbeitnow API

## Key Features

- Upload .pdf or .docx resumes
- Paste resume text manually
- Skill extraction from resume (technical & soft skills)
- Job matching with match percentage
- Save favorite jobs
- Search & filter jobs (remote/on-site)
- Protected routes (no resume = no job access)
- Resume summary preview
- Pagination for job listings
- Responsive, mobile-friendly UI
- Light/Dark theme toggle
- Lazy loading + Suspense/Error boundaries for optimization

## Screenshots

**Home Page**
[Homepage Screenshot](./public/screenshots/homepage.png)

**Resume Upload**
[Resume Upload Screenshot](./public/screenshots/resume.png)

**Skill Extraction & Summary**
[Skill Extraction Modal Screenshot](./public/screenshots/skills_extraction.png)

**Job Matches**
[Job Matches Screenshot](./public/screenshots/job_matches.png)

**Job Details**
[Job Details Screenshot](./public/screenshots/job_detail.png)

## Getting Started

If you want to run locally:

git clone https://github.com/your-username/skillsync.git

cd skillsync

npm install

npm run dev

## Contribution

This project was built as a portfolio-grade real-world app to showcase front-end development skills and problem-solving in career tools. Feedback, suggestions, and contributions are always welcome.
