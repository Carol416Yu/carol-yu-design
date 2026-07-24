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

## 分類子頁面（已建立）

現在有五個獨立頁面，首頁的分類 banner 和導覽列都已經連過去了：

- `ai-ad.html` — AI創作廣告
- `game-ad.html` — 遊戲廣告
- `product-ad.html` — 商品廣告
- `logo-anim.html` — Logo動態
- `3d-anim.html` — 3D動畫

每個子頁面預設放了 4 個作品格子（`.work-item`），要換成你真正的影片，打開該檔案找到這段：

```html
<div class="work-item" data-embed="" data-title="作品 01">
  <div class="placeholder-box" style="position:absolute;inset:0;"><span>作品縮圖 01</span></div>
  <div class="work-item-play"></div>
  <div class="work-item-overlay"><span class="work-item-title">作品名稱 01</span></div>
</div>
```

只要改三個地方：

1. **`data-embed`**：填入影片的「嵌入網址」（不是一般網址）
   - YouTube：`https://www.youtube.com/embed/影片ID`（影片ID 在一般網址 `youtube.com/watch?v=這一段` 裡）
   - Dailymotion：`https://www.dailymotion.com/embed/video/影片ID`
2. **`data-title`**：換成作品的真正名稱
3. **縮圖**：把 `placeholder-box` 那個 `<div>` 換成
   ```html
   <img src="images/你的縮圖.jpg" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;">
   ```
   YouTube 影片也可以直接用自動縮圖網址，不用自己截圖：
   `https://img.youtube.com/vi/影片ID/hqdefault.jpg`

點擊格子會跳出播放視窗直接播放，不會整個換頁。

如果作品數量不是剛好 4 個，直接複製貼上 `.work-item` 整塊、或刪減多餘的即可，格線會自動排列。

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
