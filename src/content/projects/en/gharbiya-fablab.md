---
title: Gharbiya FabLab
description: A comprehensive digital fabrication laboratory documentation site built with Astro and Starlight. Features equipment guides, software resources, learning materials, inventory management, community projects, and team profiles with automated GitHub Pages deployment.
technologies:
  - name: Astro Starlight
    icon: logos:astro-icon
    category: frontend
    slug: astro
  - name: TypeScript
    icon: logos:typescript-icon
    category: language
    slug: typescript
  - name: GitHub Pages
    icon: logos:github-icon
    category: deployment
    slug: github-pages
link: https://stemgharbiya.github.io/fablab/
repo: https://github.com/stemgharbiya/fablab
slug: gharbiya-fablab
order: 5
shownInHome: true
---

## About This Project

Gharbiya FabLab is a comprehensive digital fabrication laboratory documentation website I built to serve as a central knowledge hub for our community. This project demonstrates my ability to create scalable, organized documentation platforms that support community learning and equipment management.

## The Challenge

Our FabLab needed a unified platform to:
- **Organize Complex Information**: Document equipment, software, and procedures in an intuitive structure
- **Enable Community Collaboration**: Make it easy for members to contribute knowledge and share projects
- **Scale Gracefully**: Support growth from initial documentation to comprehensive resource library
- **Maintain Consistency**: Ensure all documentation follows consistent standards and styling
- **Deploy Seamlessly**: Automate deployment without requiring complex infrastructure

## My Approach

### Content Architecture

I chose **Astro with Starlight** as the foundation because:
- **Static Site Generation**: Fast, secure, and SEO-friendly for documentation
- **Built-in Navigation**: Starlight provides intuitive sidebar navigation automatically
- **Markdown-First**: Content creators focus on knowledge, not formatting
- **Extensibility**: Easy to add custom pages and components

The site structure includes:
- **Equipment Guides**: Detailed procedures for each machine (laser cutter, 3D printer, vinyl cutter, CNC router)
- **Software Resources**: Instructions for CAD/CAM tools and machine-specific applications
- **Learning Materials**: Educational challenges and tutorials for various skill levels
- **Inventory Management**: Searchable listings of components and materials
- **Community Projects**: Gallery of member work and team achievements
- **Team Profiles**: Member bios and contact information

### Custom Extensions

I extended Starlight with:
- **Team Management System**: Built custom TypeScript data structure (`src/data/team.json` and `src/lib/team.ts`) for storing and managing team member profiles
- **Dedicated Team Page**: Created a custom Astro component to display member cards with contact information
- **Enhanced Styling**: Added UI dependencies to create polished member profile cards

### Deployment Strategy

Implemented fully automated deployment:
- **GitHub Actions Workflow**: Triggers automatically on pushes to main branch
- **Build Pipeline**: Automated Astro build process
- **GitHub Pages**: Zero-cost hosting with automatic HTTPS
- **Link Validation**: Built-in checks to catch broken internal links before deployment

## Technical Highlights

### Content Organization

- **Hierarchical Structure**: Organized documentation into logical sections (equipment, software, learning, projects)
- **Metadata Management**: Leveraged Frontmatter for structured content with tags and categories
- **Search Optimization**: Configured for discoverable content across equipment types and topics

### Data Management

- **Typed Data Layer**: Used TypeScript for type-safe team member data
- **Reusable Components**: Built modular components for team cards and project showcases
- **Data-Driven Pages**: Dynamic team page that pulls from centralized data source

### Community Features

- **Easy Contribution**: GitHub-based workflow makes it simple for community members to contribute
- **Version Control**: All content tracked with git for history and collaboration
- **Pull Request Workflow**: Documentation changes can be reviewed before publication

## Key Learning Outcomes

### Documentation Design

I deepened my understanding of:
- Creating information architectures for complex topics
- Writing clear, accessible technical documentation
- Structuring content for both beginners and experienced users
- Building navigation that scales with growing content

### Static Site Generation

- Leveraging Starlight's conventions for efficient documentation sites
- Optimizing build times and performance for large content libraries
- Managing custom data layers within static site generators
- Implementing automated deployment workflows

### Community Building

- Designing systems that encourage participation and contributions
- Creating accessible onboarding for new community members
- Building maintainable systems that don't require centralized management
- Enabling decentralized knowledge sharing

## Challenges I Overcame

**Complex Information Organization**: Documentation for 4+ machines with different workflows and software. I created a hierarchical structure with consistent naming and page templates to help users find information quickly.

**Community Contribution Barriers**: Making it easy for non-technical team members to contribute. I established clear naming conventions and provided templates that reduce the cognitive load of formatting.

**Automated Quality Assurance**: Ensuring broken links and outdated information don't get published. I configured GitHub Actions to validate all internal links before deployment.

**Team Profile Management**: Keeping member information up-to-date without manual updates. I built a data-driven system where team data is stored in a single source of truth.

## Impact & Results

This project demonstrates my ability to:
- Design information architectures for technical audiences
- Build scalable documentation platforms
- Implement automated deployment and quality assurance
- Create systems that enable community participation
- Balance flexibility with consistent structure

The site now serves as a comprehensive resource that reduces onboarding time for new members and creates a culture of documented knowledge within our FabLab community.
