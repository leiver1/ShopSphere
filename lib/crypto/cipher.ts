import crypto from "crypto";

const algorithm = "aes-256-gcm"; // Sicherer als aes-256-cbc

// Schlüssel sicher generieren
const secretKey = crypto
  .createHash("sha256")
  .update(String(process.env.TOKEN_ENCRYPTION_KEY))
  .digest()
  .slice(0, 32); // Direkt als Buffer mit 32 Byte

/**
 * Verschlüsselt einen Token mit AES-256-GCM.
 * @param token Der zu verschlüsselnde Token
 * @returns Verschlüsselter Token als String (IV:Ciphertext:AuthTag)
 */
export function encryptToken(token: string): string {
  const iv = crypto.randomBytes(16); // Generiere ein zufälliges IV
  const cipher = crypto.createCipheriv(algorithm, secretKey, iv);

  let encrypted = cipher.update(token, "utf8", "hex");
  encrypted += cipher.final("hex");

  const authTag = cipher.getAuthTag().toString("hex"); // Authentifizierungs-Tag für Integritätsschutz

  return `${iv.toString("hex")}:${encrypted}:${authTag}`;
}

/**
 * Entschlüsselt einen verschlüsselten Token mit AES-256-GCM.
 * @param encryptedToken Der verschlüsselte Token im Format IV:Ciphertext:AuthTag
 * @returns Entschlüsselter Token oder null, falls ein Fehler auftritt
 */
export function decryptToken(encryptedToken: string): string | null {
  try {
    const [ivHex, encryptedText, authTag] = encryptedToken.split(":");

    if (!ivHex || !encryptedText || !authTag) {
      throw new Error("Invalid encrypted token format");
    }

    const ivBuffer = Buffer.from(ivHex, "hex");
    const encryptedBuffer = Buffer.from(encryptedText, "hex");
    const authTagBuffer = Buffer.from(authTag, "hex");

    const decipher = crypto.createDecipheriv(algorithm, secretKey, ivBuffer);
    decipher.setAuthTag(authTagBuffer); // Setze das Authentifizierungs-Tag

    let decrypted = decipher.update(encryptedBuffer, "hex", "utf8") as string;
    decrypted += decipher.final("utf8");

    return decrypted;
  } catch (error) {
    console.error("Token Decryption Error:", error);
    return null; // Gibt null zurück, falls Entschlüsselung fehlschlägt
  }
}
