# SocialMediaApp

A simple React Native social media app that displays posts and comments, with a clean, modern UI inspired by popular social platforms.

---

## Features

- **Home Screen:** View a list of posts with user avatars, titles, and content previews.
- **Post Details:** Tap a post to see its full details and all comments.
- **Comments:** Each comment is shown in a card with the commenter’s avatar, name, and email.
- **Modern UI:** Purple accent color, clean cards, and smooth navigation.

---

## Screenshots


### Home Screen
<img src="app-images/Home1.jpg" width="200" alt="Home screen showing post list"/> <img src="app-images/Home2.jpg" width="200" alt="Home screen with different posts"/> 
<img src="app-images/Home3.jpg" width="200" alt="Alternate home screen view"/> <img src="app-images/Home4.jpg" width="200" alt="Additional home screen view"/>

### Post Details
<img src="app-images/PostDetailsexamplee.jpg" width="200" alt="Post details with comments"/>

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [Yarn](https://classic.yarnpkg.com/lang/en/) or [npm](https://www.npmjs.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) (recommended) or React Native CLI

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/your-username/social-media-app.git
   cd social-media-app
   ```

2. **Install dependencies:**

   ```sh
   yarn install
   # or
   npm install
   ```



3. **Start the app:**
   - Using Expo:
     ```sh
     npx expo start
     ```
   - Using React Native CLI:
     ```sh
     npx react-native run-android
     # or
     npx react-native run-ios
     ```

---

## Extra Configuration

- **No additional configuration is required** for basic use.
- If you use a different API endpoint or want to enable translation features, update the endpoints in `assets/src/services/api.ts`.

---

## Folder Structure

```
assets/
  src/
    Components/
      PostCard.tsx
      CommentCard.tsx
    screens/
      HomeScreen.tsx
      PostDetailsScreen.tsx
    services/
      api.ts
App.js
README.md
```

---

## License

This project is for educational/demo purposes.

