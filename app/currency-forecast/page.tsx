import Section from "@/components/Section";
import CurrencyForecastApp from "@/components/CurrencyForecastApp";

export default function CurrencyForecastPage() {
  return (
    <div className="pt-16">
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Currency Forecasting App
            </h1>
            <p className="text-lg text-gray-400">
              Advanced ARIMAX and machine learning-based cryptocurrency forecasting system
              with robust data pipelines and comprehensive evaluation metrics.
            </p>
          </div>

          <div className="mb-8 p-6 bg-[#282828] rounded-lg border border-gray-700">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Methodology
            </h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-2">
              <li>ARIMAX models for time series forecasting</li>
              <li>XGBoost machine learning ensemble methods</li>
              <li>Real-time data pipeline integration</li>
              <li>Comprehensive evaluation metrics (MAE, RMSE, MAPE)</li>
            </ul>
          </div>

          <CurrencyForecastApp />
        </div>
      </Section>
    </div>
  );
}
