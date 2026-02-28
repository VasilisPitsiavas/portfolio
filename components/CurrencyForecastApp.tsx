"use client";

import { useState } from "react";

export default function CurrencyForecastApp() {
  const [selectedCurrency, setSelectedCurrency] = useState("EUR/USD");
  const [forecastDays, setForecastDays] = useState(7);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<any>(null);

  const currencies = ["EUR/USD", "GBP/USD", "USD/JPY", "USD/CHF", "AUD/USD", "BTC/USD", "ETH/USD"];

  const handleForecast = async () => {
    setLoading(true);
    // TODO: Integrate with actual forecasting API
    // This is a placeholder for the forecasting functionality
    setTimeout(() => {
      setResults({
        predictions: [
          { date: "2026-02-20", value: 1.0850 },
          { date: "2026-02-21", value: 1.0865 },
          { date: "2026-02-22", value: 1.0872 },
        ],
        metrics: {
          mae: 0.0012,
          rmse: 0.0015,
          mape: 0.11,
        },
      });
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="border border-gray-700 rounded-lg p-6 bg-[#282828]">
      <h2 className="text-2xl font-semibold text-white mb-6">
        Generate Forecast
      </h2>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Currency Pair
          </label>
          <select
            value={selectedCurrency}
            onChange={(e) => setSelectedCurrency(e.target.value)}
            className="w-full px-4 py-3 bg-[#0A1316] border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-[#00FFFF] focus:border-[#00FFFF] transition-all"
          >
            {currencies.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Forecast Period (days)
          </label>
          <input
            type="number"
            min="1"
            max="30"
            value={forecastDays}
            onChange={(e) => setForecastDays(parseInt(e.target.value))}
            className="w-full px-4 py-3 bg-[#0A1316] border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-[#00FFFF] focus:border-[#00FFFF] transition-all"
          />
        </div>

        <button
          onClick={handleForecast}
          disabled={loading}
          className="w-full px-6 py-3 bg-[#00FFFF] text-[#0A1316] font-semibold rounded-lg hover:bg-[#00FFFF]/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02]"
        >
          {loading ? "Generating Forecast..." : "Generate Forecast"}
        </button>

        {results && (
          <div className="mt-6 space-y-4">
            <h3 className="text-xl font-semibold text-white">
              Forecast Results
            </h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-700">
                <thead className="bg-[#0A1316]">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase">
                      Date
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase">
                      Predicted Value
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-[#0A1316]/50 divide-y divide-gray-700">
                  {results.predictions.map((pred: any, idx: number) => (
                    <tr key={idx} className="hover:bg-[#0A1316] transition-colors">
                      <td className="px-4 py-3 text-sm text-gray-300 font-mono">
                        {pred.date}
                      </td>
                      <td className="px-4 py-3 text-sm text-[#00FFFF] font-mono font-semibold">
                        {pred.value.toFixed(4)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center p-4 bg-[#0A1316] rounded-lg border border-gray-700">
                <p className="text-sm text-gray-400 mb-1">MAE</p>
                <p className="text-lg font-semibold text-[#00FFFF]">
                  {results.metrics.mae.toFixed(4)}
                </p>
              </div>
              <div className="text-center p-4 bg-[#0A1316] rounded-lg border border-gray-700">
                <p className="text-sm text-gray-400 mb-1">RMSE</p>
                <p className="text-lg font-semibold text-[#00FFFF]">
                  {results.metrics.rmse.toFixed(4)}
                </p>
              </div>
              <div className="text-center p-4 bg-[#0A1316] rounded-lg border border-gray-700">
                <p className="text-sm text-gray-400 mb-1">MAPE</p>
                <p className="text-lg font-semibold text-[#00FFFF]">
                  {results.metrics.mape.toFixed(2)}%
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
