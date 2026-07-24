# 使用說明

## 檔案結構
```
portfolio/
├── index.html      網站主結構
├── css/style.css   所有樣式（顏色都用 CSS 變數，改一處全站套用）
├── js/script.js    手機版選單開關
└── images/         之後把圖片放這裡
```

## 下一步：換上你自己的圖片

打開 `index.html`，找到下面幾個標記為 `placeholder-box` 的區塊，把裡面的說明文字整塊刪掉，
換成 `<img src="images/檔名.jpg" alt="說明文字">`：

1. **Hero 插畫**（`hero-illustration`）→ 你的角色插畫
2. **五個作品分類 banner**（`ai-ad` / `game-ad` / `product-ad` / `logo-anim` / `3d-anim`）→ 各分類的代表圖或影片截圖
3. **聯絡區的照片**（`contact-photo`）→ 你的個人照

例如：
```html
<!-- 換之前 -->
<div class="hero-illustration placeholder-box">
  <span>放上你的角色插畫...</span>
</div>

<!-- 換之後 -->
<div class="hero-illustration">
  <img src="images/illustration.png" alt="角色插畫" style="width:100%;height:100%;object-fit:cover;border-radius:24px;">
</div>
```

**圖片建議直接跟 Wix 後台或原始設計檔要原始解析度的檔案**，不要用截圖裁切，畫質才不會糊掉。

## 各分類要連到子頁面？

目前每個分類 banner 的 `href="#"` 只是佔位。如果你想像 Wix 版一樣，每個分類點進去有獨立頁面顯示該類所有作品，
之後可以請我幫你建立 `ai-ad.html`、`game-ad.html` 等子頁面，把連結改過去即可。

## 顏色微調

所有顏色都集中在 `css/style.css` 最上面的 `:root` 區塊，例如：
```css
--ink-brown: #4a3222;   /* 主標題咖啡色 */
--bg-warm: #f4efe7;     /* 米色背景色塊 */
```
改這裡的色碼，全站對應的地方會一起變。

## 怎麼上線（免費）

1. 到 [GitHub](https://github.com) 開一個新 repository，把這個資料夾整個上傳
2. 到 repository 的 Settings → Pages，選擇要發布的分支，儲存
3. 幾分鐘後就會拿到一個 `你的帳號.github.io/repo名稱` 的網址

或是更簡單：把整個資料夾拖曳到 [Netlify Drop](https://app.netlify.com/drop)，幾秒鐘就能拿到網址。
