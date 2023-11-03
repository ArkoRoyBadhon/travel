export const getBaseUrl = (): string => {
  // return process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000/api/v1";
  return (
    process.env.NEXT_PUBLIC_API_BASE_URL ||
    "https://travel-cueeruz9p-arkoroybadhon.vercel.app/api/v1"
  );
};
// https://travel-35k1owf2h-arkoroybadhon.vercel.app/
