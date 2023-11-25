"use client";
// components/CurrencyConverter.js
import React, { useState } from "react";

const CurrencyConverter = () => {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [convertedAmount, setConvertedAmount] = useState(null);

  // 仮の通貨変換レート（本番環境ではAPIから取得）
  const conversionRates = {
    USD: { EUR: 0.88, JPY: 114 },
    EUR: { USD: 1.14, JPY: 130 },
    JPY: { USD: 0.0088, EUR: 0.0077 },
  };

  const handleConversion = () => {
    const rate = conversionRates[fromCurrency][toCurrency];
    setConvertedAmount((amount * rate).toFixed(2));
  };

  return (
    <div className="p-4 max-w-sm mx-auto">
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="border p-2 w-full mb-2"
        placeholder="Amount"
      />
      <select
        value={fromCurrency}
        onChange={(e) => setFromCurrency(e.target.value)}
        className="border p-2 w-full mb-2"
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="JPY">JPY</option>
      </select>
      <select
        value={toCurrency}
        onChange={(e) => setToCurrency(e.target.value)}
        className="border p-2 w-full mb-2"
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="JPY">JPY</option>
      </select>
      <button
        onClick={handleConversion}
        className="bg-blue-500 text-white p-2 w-full"
      >
        Convert
      </button>
      {convertedAmount && (
        <div className="mt-3">
          <p>
            Converted Amount: {convertedAmount} {toCurrency}
          </p>
        </div>
      )}
    </div>
  );
};

export default CurrencyConverter;
