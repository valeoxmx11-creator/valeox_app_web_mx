export function buildWhatsAppUrl(phone: string, message: string) {
  const sanitized = phone.replace(/[^\d]/g, '')
  return `https://wa.me/${sanitized}?text=${encodeURIComponent(message)}`
}
