# business-card

名刺の表裏をフリップアニメーションで表示する Web アプリです。  
A web app that displays the front and back of a business card with a flip animation.

## Tech Stack

- **Vite + React + TypeScript**
- Mobile-first responsive design

## Usage

### 1. Place your business card images

Put your front and back images inside `public/image/`:

```
public/
  image/
    front.svg   ← 表面 (front)
    back.svg    ← 裏面 (back)
```

PNG / JPG / SVG など任意の形式に対応しています。  
Any image format (PNG / JPG / SVG …) is supported.

### 2. Edit the config file

Open `src/config.ts` and set the filenames:

```ts
const cardConfig = {
  frontImage: "front.svg",  // ← 表面のファイル名
  backImage:  "back.svg",   // ← 裏面のファイル名
} as const;
```

### 3. Start the development server

```bash
npm install
npm run dev
```

### Interactions

| Action | Effect |
|--------|--------|
| Click / Tap the card | Flip the card |
| Click / Tap the button | Flip the card |
| Enter / Space (keyboard) | Flip the card |

## Build

```bash
npm run build
```
