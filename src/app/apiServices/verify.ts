// ✅ DEV MODE: frontend UI test uchun auth redirect/guard’ni o‘chirib turamiz
const DISABLE_VERIFY = process.env.NODE_ENV === "development";

if (DISABLE_VERIFY) {
  // hech narsa qilmaydi (redirect ham bo‘lmaydi)
  // eslint-disable-next-line no-console
  console.log("[verify] disabled in development");
} else {
  // ⬇️ shu pastdagi verify logikangizni (hammasini) shu else ichiga olib kiring
}
