// 名刺の表裏の画像ファイル設定
// Business card front/back image file configuration
const cardConfig = {
  // 表面の画像ファイル名 (public/image/ フォルダ内)
  // Front image filename (inside public/image/ folder)
  frontImage: "front.png",

  // 裏面の画像ファイル名 (public/image/ フォルダ内)
  // Back image filename (inside public/image/ folder)
  backImage: "back.png",
} as const;

export default cardConfig;
