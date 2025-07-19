---
title: "SaifURL Frontend"
description: "A modern, fullstack URL shortener frontend built with React, featuring authentication, dashboard, custom domains, and more."
technologies:
  [
    { name: "React", icon: "logos:react", category: "frontend", slug: "react" },
    { name: "Vite", icon: "logos:vitejs", category: "tool", slug: "vite" },
    {
      name: "HashRouter",
      icon: "logos:react-router",
      category: "tool",
      slug: "react-router",
    },
    {
      name: "SaifAPI",
      icon: "simple-icons:express",
      category: "backend",
      slug: "saifapi",
    },
  ]
link: "https://urls.saifdev.org"
repo: "https://github.com/saifabdelrazek011/saifurl"
slug: "saifurls"
shownInHome: true
---

# About SaifURL

SaifURL is a modern frontend application for shortening URLs, built with React and designed for a smooth user experience. It connects to the SaifAPI backend, providing a fullstack solution for URL shortening and user management.

## Features

- Shorten URLs with custom aliases and multiple domains
- User authentication (sign up, sign in, password reset)
- Dashboard to manage your short URLs
- Click tracking for each short URL
- Light/Dark theme support
- Email verification for secure accounts
- Profile management (update info, change password)
- HashRouter for static hosting compatibility
- Status badge for service health

## User Experience

Users can sign up, verify their email, and sign in to access a personalized dashboard. The dashboard allows users to create, edit, and delete short URLs, copy them with one click, and track clicks. Profile management features include updating user info and changing passwords, with password reset available via a dedicated page. The app supports switching between light and dark themes for a comfortable experience.

## Technologies Used

- **React** for building the user interface
- **Vite** for fast development and build tooling
- **HashRouter** for static hosting compatibility
- **SaifAPI** as the backend service

## Integration

SaifURL is tightly integrated with SaifAPI, which handles authentication, URL management, and other backend services. The frontend communicates with the API using environment-configurable endpoints, making deployment flexible.

## Why SaifURL?

SaifURL is designed for users who need a reliable, secure, and easy-to-use platform for managing short URLs. Its modern design, robust feature set, and seamless integration with backend services make it suitable for both personal and professional use.

---

Find the source code and more details on [GitHub](https://github.com/saifabdelrazek011/saifurl)
