"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ChargingTimePage() {
  const [capacity, setCapacity] = useState("");
  const [currentSoc, setCurrentSoc] = useState("");
  const [targetSoc, setTargetSoc] = useState("");
  const [chargerPower, setChargerPower] = useState("");
  const [efficiency, setEfficiency] = useState("90");
  const [result, setResult] = useState<{
    timeHours: number;
    timeMinutes: number;
    energyDelivered: number;
  } | null>(null);

  function calculate() {
    const cap = parseFloat(capacity);
    const current = parseFloat(currentSoc);
    const target = parseFloat(targetSoc);
    const power = parseFloat(chargerPower);
    const eff = parseFloat(efficiency);

    if (
      !cap || !power || !eff ||
      cap <= 0 || power <= 0 || eff <= 0 || eff > 100 ||
      isNaN(current) || isNaN(target) ||
      current < 0 || target <= current || target > 100
    )
      return;

    const energyNeeded = cap * ((target - current) / 100);
    const timeH = energyNeeded / (power * (eff / 100));
    const totalMinutes = timeH * 60;
    const hours = Math.floor(totalMinutes / 60);
    const minutes = Math.round(totalMinutes % 60);

    setResult({
      timeHours: timeH,
      timeMinutes: totalMinutes,
      energyDelivered: energyNeeded,
    });
  }

  function reset() {
    setCapacity("");
    setCurrentSoc("");
    setTargetSoc("");
    setChargerPower("");
    setEfficiency("90");
    setResult(null);
  }

  function formatTime(hours: number): string {
    const h = Math.floor(hours);
    const m = Math.round((hours - h) * 60);
    if (h === 0) return `${m} min`;
    return `${h} h ${m} min`;
  }

  return (
    <div className="calc-page">
      <Link href="/engineering-lab" className="back-link">
        <ArrowLeft size={16} />
        Back to Engineering Lab
      </Link>

      <h1 className="calc-title">EV Charging Time</h1>
      <p className="calc-description">
        Estimate how long it takes to charge an electric vehicle battery from
        one state of charge to another, accounting for charger power and
        efficiency.
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
            <label>Current SOC (%)</label>
            <input
              type="number"
              value={currentSoc}
              onChange={(e) => setCurrentSoc(e.target.value)}
              placeholder="e.g. 20"
            />
          </div>
          <div className="form-group">
            <label>Target SOC (%)</label>
            <input
              type="number"
              value={targetSoc}
              onChange={(e) => setTargetSoc(e.target.value)}
              placeholder="e.g. 80"
            />
          </div>
          <div className="form-group">
            <label>Charger Power (kW)</label>
            <input
              type="number"
              value={chargerPower}
              onChange={(e) => setChargerPower(e.target.value)}
              placeholder="e.g. 50"
            />
          </div>
          <div className="form-group">
            <label>Efficiency (%)</label>
            <input
              type="number"
              value={efficiency}
              onChange={(e) => setEfficiency(e.target.value)}
              placeholder="e.g. 90"
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
                <span className="result-label">Charging Time</span>
                <span className="result-value">
                  {formatTime(result.timeHours)}
                </span>
              </div>
              <div className="result-item">
                <span className="result-label">Energy Delivered</span>
                <span className="result-value">
                  {result.energyDelivered.toFixed(2)} kWh
                </span>
              </div>
            </>
          ) : (
            <p>Enter values and click Calculate</p>
          )}

          <div className="formula-box">
            <h4>Formula</h4>
            <code>
              Time (h) = (Capacity × (Target% − Current%) / 100) / (Power ×
              Efficiency / 100)
            </code>
          </div>
          <p className="assumptions">
            Assumes constant charging power throughout the session. Real charging
            curves taper at higher SOC levels, especially with DC fast charging.
            Efficiency losses include heat and conversion overhead.
          </p>
        </div>
      </div>
    </div>
  );
}
