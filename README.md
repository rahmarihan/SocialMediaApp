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

![Screenshot 1](./Task%20Screenshots/IMG-20250627-WA0001.jpg)
![Screenshot 2](./Task%20Screenshots/IMG-20250627-WA0002.jpg)
![Screenshot 3](./Task%20Screenshots/IMG-20250627-WA0003.jpg)
![Screenshot 4](./Task%20Screenshots/IMG-20250627-WA0004.jpg)
![Screenshot 5](./Task%20Screenshots/IMG-20250627-WA0005.jpg)

---

**Note:**  
If the images do not show up on GitHub, make sure the `Task Screenshots` folder and image files are committed and pushed to your repository.

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

3. **Add screenshots:**

   - Place your screenshots in a folder named `app-images` at the root of the project.
   - Name them as referenced above (e.g., `home1.jpg`, `details1.jpg`, etc.).

4. **Start the app:**
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

**Screenshots:**  
Add your screenshots to the `app-images` folder in the project root. Name them according to the references in this README (e.g., `home1.jpg`, `details1.jpg`).
