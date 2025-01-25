# MeetFriends

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Features

Edit Profile: Create and edit profiles.

Friends List: View and manage friends.

Add Friends: Add new friends to your list.

Schedule: Schedule meetups with friends.

Meetup confirmation: Accept a meetup request.

Meetup request: Send a meetup request.

Streak: Keep track of streaks for successful meetups.

## Technologies Used

Framework: Angular

Styling: CSS

State Management: Angular Services

API Communication: HTTP Client for REST API integration

## Getting Started

### Prerequisites

Node.js (v16.x or later)

Angular CLI (v14.x or later)

### Installation

Clone the repository:

git clone https://github.com/leksonn/meetfriends-frontend.git
cd meetfriends-frontend

Install dependencies:

npm install

Configure the environment file:

Update src/environments/environment.ts with your backend API URL.

Run the development server:

ng serve

Access the app at http://localhost:4200.

## Project Structure

src/app/components: Contains reusable components like user profile, friends list, and schedule.

src/app/services: Services for API communication and state management.

src/assets: Static assets like images and styles.

## Usage

Register or log in to create your profile.

Add friends by searching for their usernames.

Schedule meetups and track streaks of successful meetups.

View your friends list and manage scheduled meetups easily.

## Build

To create a production build:

ng build --prod

The build artifacts will be stored in the dist/ directory.

## Testing

Run unit tests:

ng test

Run end-to-end tests:

ng e2e

## Contributing

Fork the repository.

Create a feature branch: git checkout -b feature-name

Commit your changes: git commit -m 'Add some feature'

Push to the branch: git push origin feature-name

Create a pull request.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

