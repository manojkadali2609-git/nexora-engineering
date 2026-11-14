"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function EvRangePage() {
  const [capacity, setCapacity] = useState("");
  const [consumption, setConsumption] = useState("");
  const [result, setResult] = useState<{
    rangeKm: number;
    rangeMiles: number;
  } | null>(null);

  function calculate() {
    const cap = parseFloat(capacity);
    const cons = parseFloat(consumption);
    if (!cap || !cons || cap <= 0 || cons <= 0) return;

    const rangeKm = (cap * 1000) / cons;
    const rangeMiles = rangeKm * 0.6214;
    setResult({ rangeKm, rangeMiles });
  }

  function reset() {
    setCapacity("");
    setConsumption("");
    setResult(null);
  }

  return (
    <div className="calc-page">
      <Link href="/engineering-lab" className="back-link">
        <ArrowLeft size={16} />
        Back to Engineering Lab
      </Link>

      <h1 className="calc-title">EV Range Estimator</h1>
      <p className="calc-description">
        Estimate how far an electric vehicle can travel on a full charge based on
        battery capacity and average energy consumption.
      </p>

      <div className="calc-layout">
        <div className="calc-form">
          <div className="form-group">
            <label>Battery Capacity (kWh)</label>
            <input
              type="number"
              value={capacity}
              onChange={(e) => setCapacity(e.target.value)}
              placeholder="e.g. 75"
            />
          </div>
          <div className="form-group">
            <label>Energy Consumption (Wh/km)</label>
            <input
              type="number"
              value={consumption}
              onChange={(e) => setConsumption(e.target.value)}
              placeholder="e.g. 150"
            />
          </div>
          <div className="calc-actions">
            <button className="calc-btn" onClick={calculate}>
              Calculate
            </button>
            <button className="reset-btn" onClick={reset}>
              Reset
            </button>
          </div>
        </div>

        <div className="result-panel">
          <h3>Results</h3>
          {result ? (
            <>
              <div className="result-item">
                <span className="result-label">Range</span>
                <span className="result-value">
                  {result.rangeKm.toFixed(1)} km
                </span>
              </div>
              <div className="result-item">
                <span className="result-label">Range</span>
                <span className="result-value">
                  {result.rangeMiles.toFixed(1)} miles
                </span>
              </div>
            </>
          ) : (
            <p>Enter values and click Calculate</p>
          )}

          <div className="formula-box">
            <h4>Formula</h4>
            <code>Range (km) = Capacity (kWh) × 1000 / Consumption (Wh/km)</code>
          </div>
          <p className="assumptions">
            Assumes constant energy consumption rate under nominal driving
            conditions. Real-world range varies with speed, temperature, terrain,
            and driving style.
          </p>
        </div>
      </div>
    </div>
  );
}
