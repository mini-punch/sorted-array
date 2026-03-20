# Merge Sorted Arrays (TypeScript Project)

---

## 1. Prerequisites

หากเครื่องของคุณยังไม่มี **Node.js** ให้ทำตามขั้นตอนดังนี้:

1. เข้าไปที่เว็บไซต์ [nodejs.org](https://nodejs.org/)
2. ดาวน์โหลดและติดตั้งเวอร์ชัน **LTS** (แนะนำ)
3. ตรวจสอบการติดตั้งโดยเปิด Terminal แล้วพิมพ์:

```bash
node -v
npm -v
```

> ต้องมีเลขเวอร์ชันปรากฏขึ้นมา

---

## 2. Library Installation

เมื่อมี Node.js แล้ว ให้เปิด Terminal ในโฟลเดอร์โปรเจกต์นี้ แล้วรันคำสั่งเพื่อติดตั้งเครื่องมือที่จำเป็น:

```bash
npm install --save-dev typescript jest ts-jest @types/jest @types/node
```

---

## 3. Configuration

เพื่อให้ TypeScript และ Jest ทำงานร่วมกันได้โดยไม่มีเส้นแดง (Error) ใน Editor:

```bash
npx tsc --init
```

โดยแก้ไขค่าให้ตรงตามไฟล์ด้านล่าง

```json
{
  "compilerOptions": {
    "target": "esnext",
    "module": "CommonJS",
    "strict": true,
    "types": ["jest", "node"],
    "skipLibCheck": true,
    "noUncheckedIndexedAccess": true
  }
}
```

สร้างไฟล์ `jest.config.js` ด้วยคำสั่ง:

```bash
npx ts-jest config:init
```

---

## 4. วิธีการรัน Unit Test

เมื่อเขียนโค้ดเสร็จแล้ว ให้ใช้คำสั่งนี้เพื่อทดสอบความถูกต้องของ Logic:

```bash
npx jest
```

---

## Project Structure

```plaintext
ts-merge-project/
├── node_modules/
├── src/
│   └── merge.ts        # ไฟล์หลักที่เขียนฟังก์ชัน merge
├── test/
│   └── merge.test.ts   # ไฟล์สำหรับเขียน Unit Test
├── jest.config.js
├── package.json
├── tsconfig.json
└── README.md
```
