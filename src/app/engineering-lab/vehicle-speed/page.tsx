"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function VehicleSpeedPage() {
  const [engineRpm, setEngineRpm] = useState("");
  const [tireDiameter, setTireDiameter] = useState("");
  const [gearRatio, setGearRatio] = useState("");
  const [finalDrive, setFinalDrive] = useState("");
  const [result, setResult] = useState<{
    speedKmh: number;
    speedMph: number;
  } | null>(null);

  function calculate() {
    const rpm = parseFloat(engineRpm);
    const d = parseFloat(tireDiameter);
    const gear = parseFloat(gearRatio);
    const final_ = parseFloat(finalDrive);
    if (
      !rpm || !d || !gear || !final_ ||
      rpm <= 0 || d <= 0 || gear <= 0 || final_ <= 0
    )
      return;

    const dMeters = d / 1000;
    const speedKmh =
      (rpm * Math.PI * dMeters * 3.6) / (gear * final_ * 60);
    const speedMph = speedKmh * 0.6214;
    setResult({ speedKmh, speedMph });
  }

  function reset() {
    setEngineRpm("");
    setTireDiameter("");
    setGearRatio("");
    setFinalDrive("");
    setResult(null);
  }

  return (
    <div className="calc-page">
      <Link href="/engineering-lab" className="back-link">
        <ArrowLeft size={16} />
        Back to Engineering Lab
      </Link>

      <h1 className="calc-title">Vehicle Speed Calculator</h1>
      <p className="calc-description">
        Calculate theoretical vehicle road speed from engine RPM, tire
        dimensions, and drivetrain gear ratios.
      </p>

      <div className="calc-layout">
        <div className="calc-form">
          <div className="form-group">
            <label>Engine RPM</label>
            <input
              type="number"
              value={engineRpm}
              onChange={(e) => setEngineRpm(e.target.value)}
              placeholder="e.g. 3000"
            />
          </div>
          <div className="form-group">
            <label>Tire Diameter (mm)</label>
            <input
              type="number"
              value={tireDiameter}
              onChange={(e) => setTireDiameter(e.target.value)}
              placeholder="e.g. 650"
            />
          </div>
          <div className="form-group">
            <label>Gear Ratio</label>
            <input
              type="number"
              value={gearRatio}
              onChange={(e) => setGearRatio(e.target.value)}
              placeholder="e.g. 2.5"
            />
          </div>
          <div className="form-group">
            <label>Final Drive Ratio</label>
            <input
              type="number"
              value={finalDrive}
              onChange={(e) => setFinalDrive(e.target.value)}
              placeholder="e.g. 3.42"
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
                <span className="result-label">Speed</span>
                <span className="result-value">
                  {result.speedKmh.toFixed(1)} km/h
                </span>
              </div>
              <div className="result-item">
                <span className="result-label">Speed</span>
                <span className="result-value">
                  {result.speedMph.toFixed(1)} mph
                </span>
              </div>
            </>
          ) : (
            <p>Enter values and click Calculate</p>
          )}

          <div className="formula-box">
            <h4>Formula</h4>
            <code>
              Speed (km/h) = (RPM × π × D(m) × 3.6) / (Gear Ratio × Final
              Drive × 60)
            </code>
          </div>
          <p className="assumptions">
            Assumes no tire slip or drivetrain losses. Tire diameter is the
            overall rolling diameter. Actual speed may differ due to tire
            deformation under load.
          </p>
        </div>
      </div>
    </div>
  );
}
