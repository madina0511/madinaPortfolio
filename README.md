# Tina — portfolio (Vite + React)

## Ishga tushirish
    npm install
    npm run dev      # http://localhost:5173
    npm run build    # tayyor sayt -> dist/

## Ma'lumotlarni o'zgartirish
Hamma matn `src/content.js` faylida (한국어 / English / O'zbekcha):
- CONTACT — email, telefon, telegram, linkedin (bo'sh qolsa ko'rinmaydi)
- JOBS, PROJECTS, SKILLS — tajriba, loyihalar, ko'nikmalar
- T.ko / T.en / T.uz — har bir tildagi matnlar

## Rasmlar (public/ papkasiga)
- public/images/bg.jpg — orqa fondagi harakatlanuvchi rasm (keng, ~1920px; odam o'ng tomonda bo'lsa yaxshi)
- public/images/avatar.jpg — hero rasmi (4:5, masalan 800x1000)
- public/images/projects/ — kiddo.png, pawmart.png, security-ai.png, florence.png, carbon.png, beautyai.png
- public/cv.pdf — rezyume tugmasi uchun
Rasm bo'lmasa ham sayt buzilmaydi.

## Kontakt forma
.env faylga VITE_CONTACT_ENDPOINT=https://... yozsangiz, forma JSON {name, email, message} yuboradi
(Formspree yoki o'z NestJS endpointingiz). Yozmasangiz, email ilovasi ochiladi.

## VPS'ga joylash
    npm run build
    scp -r dist/* root@SERVER_IP:/var/www/portfolio/
deploy/nginx.conf ni /etc/nginx/sites-available/ ga qo'ying, symlink qiling,
sudo nginx -t && sudo systemctl reload nginx, keyin certbot bilan HTTPS.

## GitHub Pages'ga joylash (avtomatik)
1. GitHub'da `madina0511.github.io` nomli yangi repo oching
   (shunda sayt manzili https://madina0511.github.io bo'ladi;
   boshqa nom bersangiz, masalan `portfolio` → https://madina0511.github.io/portfolio/).
2. Loyiha papkasida:
       git init
       git add .
       git commit -m "Portfolio"
       git branch -M main
       git remote add origin https://github.com/madina0511/madina0511.github.io.git
       git push -u origin main
3. Repo → Settings → Pages → Source: **GitHub Actions** ni tanlang.
4. Actions tabida "Deploy to GitHub Pages" yashil bo'lgach, sayt ochiladi.
Keyin har safar `git push` qilsangiz, sayt o'zi yangilanadi.
Kontakt forma endpointi bo'lsa: Settings → Secrets → Actions → `VITE_CONTACT_ENDPOINT`.
