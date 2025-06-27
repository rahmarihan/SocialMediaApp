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

All screenshots are included in the [`Task Screenshots`](./Task%20Screenshots) folder in the project root.

You can find all relevant app screens (Home and Post Details) there:

- `IMG-20250627-WA0001.jpg`
- `IMG-20250627-WA0002.jpg`
- `IMG-20250627-WA0003.jpg`
- `IMG-20250627-WA0004.jpg`
- `IMG-20250627-WA0005.jpg`

### Example

<img src="./Task%20Screenshots/IMG-20250627-WA0001.jpg" alt="Screenshot 1" width="300"/>
<img src="./Task%20Screenshots/IMG-20250627-WA0002.jpg" alt="Screenshot 2" width="300"/>
<img src="./Task%20Screenshots/IMG-20250627-WA0003.jpg" alt="Screenshot 3" width="300"/>
<img src="./Task%20Screenshots/IMG-20250627-WA0004.jpg" alt="Screenshot 4" width="300"/>
<img src="./Task%20Screenshots/IMG-20250627-WA0005.jpg" alt="Screenshot 5" width="300"/>

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

---
