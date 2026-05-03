import React from "react";

const QuoteCard = ({ quote }) => {
  const hasTags = Array.isArray(quote.tags) && quote.tags.length > 0;

  return (
    <div className="relative group rounded-2xl p-[1px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:scale-[1.02] transition">
      {/* inner card */}
      <div className="bg-gray-900 rounded-2xl p-5 h-full flex flex-col justify-between">
        {/* quote */}
        <p className="text-gray-200 text-sm leading-relaxed italic">
          “{quote.content}”
        </p>

        {/* footer */}
        <div className="mt-4">
          <p className="text-white font-semibold text-sm">— {quote.author}</p>

          {/* tags (optional) */}
          {hasTags && (
            <div className="flex flex-wrap gap-2 mt-3">
              {quote.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* id subtle */}
          <p className="text-xs text-gray-500 mt-2">#{quote.id}</p>
        </div>
      </div>
    </div>
  );
};

export default QuoteCard;
