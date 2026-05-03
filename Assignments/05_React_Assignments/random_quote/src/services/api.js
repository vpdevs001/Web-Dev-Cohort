const API_URL = "https://api.freeapi.app/api/v1/public/quotes";

export const fetchQuotes = async () => {
  try {
    const res = await fetch(API_URL);
    const json = await res.json();

    return Array.isArray(json?.data?.data) ? json.data.data : [];
  } catch (err) {
    console.error(err);
    return [];
  }
};
