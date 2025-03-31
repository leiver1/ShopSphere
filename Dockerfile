# Basis-Image setzen
FROM node:18-alpine AS builder

# Arbeitsverzeichnis erstellen
WORKDIR /app

# Abhängigkeiten installieren
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile

# Projektdateien kopieren
COPY . .

# Prisma-Client generieren
RUN npx prisma generate

# Next.js-App bauen
RUN npm run build

# Produktions-Image
FROM node:18-alpine AS runner
WORKDIR /app

# Nur notwendige Dateien kopieren
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/prisma ./prisma

# Port freigeben
EXPOSE 3000

# Startbefehl
CMD ["npm", "run", "start"]
