import React, { useEffect, useState } from "react";
import { fetchQuotes } from "../services/api";
import QuoteCard from "./QuoteCard";

const QuoteList = () => {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadQuotes = async () => {
    setLoading(true);
    const data = await fetchQuotes();
    setQuotes(data);
    setLoading(false);
  };

  useEffect(() => {
    loadQuotes();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white px-6 py-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Quotes</h1>

        <button
          onClick={loadQuotes}
          className="bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded-lg text-sm"
        >
          Refresh
        </button>
      </div>

      {/* Loading */}
      {loading ? (
        <div className="text-gray-400">Loading quotes...</div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {quotes.map((quote) => (
            <QuoteCard key={quote.id} quote={quote} />
          ))}
        </div>
      )}
    </div>
  );
};

export default QuoteList;
