# ObboBurger restorani uchun BackEnd API 🍔

## Loyhaning maqsadi: 🎯

Biror bir fast-food restorani uchun menyularni ko'rish uchun va ovqatlarga buyurtma berish imkoniyatini
beruchi loyhaning Backend API'ni ishlab chiqish

## Funksional talablar:

- Barcha taomlarni category'lari bulishi kerak. Misol: Burgerlar. Pitsalar va hkz.
- Har bir taom biror category'ga mansub bo'lishi kerak.
- Taomning 1 ta rasmi, nomi, narxi, description bo'lishi kerak.
- Foydalanuvchi ro'yxatdan o'tmagan holatda ham category va taomlarni ko'rishi kerak.
- Foydalanuvchi email va name bilan ro'yxatdan o'tadi.
- Profilga kirish email orqali bo'ladi.
- Foydalanuvchi savatga mahsulotlar qo'sha olishi kerak.
- Foydalanuvchi bir nechta mahsulotni buyurtma qila olishi kerak
- Foydalanuvchi profilida o'z buyurtmalari tarixini ko'rishi kerak
- Foydalanuvchi profil ma'lumotlarini yangilay olishi kerak

## Nofunksional talablar: 💪

- Tezlik
- Xavfsizlik
- Kengaya oladigan

## Database models: 📁

1. Category:📋

   - id
   - name
   - createAt
   - updateAt

2. FOOD:🍔

   - id
   - name
   - price
   - description
   - imageUrl
   - category(id) (FK)
   - createAt
   - updateAt

3. User: 🪪

   - id
   - name
   - email
   - imageUrl
   - createAt
   - updateAt

4. Order:🛒

   - id
   - createdAt
   - total_price
   - userId (FK)

5. OrderItem:🗒️

   - count
   - orderId (FK)
   - foodId (FK)
