# AZUROPS - Business Automation & AI Solutions Website

## Overview

This repository contains the official website for AZUROPS, a leading provider of
business automation and AI-powered solutions. Our website showcases our services
and provides detailed information about how we help businesses transform their
operations through intelligent automation.

## About AZUROPS

At AZUROPS, we are dedicated to revolutionizing business operations through
intelligent automation and AI-powered solutions. Our mission is to empower
organizations to streamline their processes, enhance productivity, and stay ahead
of the competition by leveraging cutting-edge technology tailored to their unique
needs.

## Services Offered

### 1. Workflow Automation

- Automating workflows and internal processes
- Increasing efficiency and reducing manual work
- Custom workflow design based on specific business needs

### 2. Email Management

- Email sorting and automatic categorization
- Priority-based sorting for time-sensitive communications
- Integration with popular email platforms

### 3. AI-Powered Solutions

- Building AI agents tailored to business needs
- Creating intelligent chatbots integrated into websites
- Custom AI development for specific business requirements

### 4. Invoice & Quote Management

- Automated invoice creation and management
- Quote follow-ups with intelligent reminder systems
- Integration with accounting software and ERP systems

## Website Features

- Modern, responsive design with dark theme and blue accents
- Detailed service pages with comprehensive information
- Smooth animations and user-friendly navigation
- Mobile-optimized layout for all devices

## Getting Started

To view the website locally:

1. Clone this repository
2. Open `index.html` in your preferred web browser
3. Navigate through the site to explore our services

## Technologies Used

- HTML5
- CSS3 (with responsive design)
- JavaScript (for interactive elements)
- Modern CSS features (gradients, animations, etc.)

## Development Setup

### Pre-commit Hooks

This project uses pre-commit hooks to ensure code quality and consistency. To set
up pre-commit:

1. Install pre-commit: `pip install pre-commit`
2. Install the git hooks: `pre-commit install`
3. The hooks will now run automatically on each commit

The pre-commit configuration includes:

- Trailing whitespace removal (excluded for HTML/CSS/JS files)
- End-of-file fixer (excluded for HTML/CSS/JS files)
- YAML validation
- Private key detection
- Python code formatting with Black
- Python code linting with Flake8
- Markdown linting
- HTML, CSS, JS formatting with Prettier
- More details in PRE_COMMIT_SETUP.md

### Local Development

1. Install development dependencies: `pip install -e .[dev]`
2. Install Node.js dependencies: `npm install`
3. To run checks: `npm run lint`
4. To format code: `npm run format`
5. To run all pre-commit hooks: `pre-commit run --all-files`

## CI/CD Pipeline

This project uses GitHub Actions for continuous integration and deployment:

- Code validation on every pull request
- HTML, CSS validation and broken link checking
- Automated testing
- Automatic deployment to GitHub Pages when changes are merged to main/master

## License

This project is proprietary to AZUROPS. All rights reserved.
