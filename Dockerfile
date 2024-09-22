# ใช้ Node.js เป็น base image
FROM node:14

# กำหนด working directory
WORKDIR /usr/src/app

# คัดลอก package.json และ package-lock.json
COPY package*.json ./

# ติดตั้ง dependencies
RUN npm install

# คัดลอกไฟล์ทั้งหมดไปยัง container
COPY . .

# เปิด port สำหรับ API
EXPOSE 3000

# รันแอปพลิเคชัน
CMD ["node", "app.js"]
