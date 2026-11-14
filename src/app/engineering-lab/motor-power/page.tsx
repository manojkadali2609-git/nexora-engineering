"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function MotorPowerPage() {
  const [torque, setTorque] = useState("");
  const [rpm, setRpm] = useState("");
  const [result, setResult] = useState<{
    powerW: number;
    powerKW: number;
    powerHP: number;
  } | null>(null);

  function calculate() {
    const t = parseFloat(torque);
    const r = parseFloat(rpm);
    if (!t || !r || t <= 0 || r <= 0) return;

    const powerKW = (t * r) / 9549;
    const powerW = powerKW * 1000;
    const powerHP = powerKW * 1.341;
    setResult({ powerW, powerKW, powerHP });
  }

  function reset() {
    setTorque("");
    setRpm("");
    setResult(null);
  }

  return (
    <div className="calc-page">
      <Link href="/engineering-lab" className="back-link">
        <ArrowLeft size={16} />
        Back to Engineering Lab
      </Link>

      <h1 className="calc-title">Motor Power Calculator</h1>
      <p className="calc-description">
        Calculate mechanical power output from torque and rotational speed,
        with results in watts, kilowatts, and horsepower.
      </p>

      <div className="calc-layout">
        <div className="calc-form">
          <div className="form-group">
            <label>Torque (Nm)</label>
            <input
              type="number"
              value={torque}
              onChange={(e) => setTorque(e.target.value)}
              placeholder="e.g. 250"
            />
          </div>
          <div className="form-group">
            <label>Speed (RPM)</label>
            <input
              type="number"
              value={rpm}
              onChange={(e) => setRpm(e.target.value)}
              placeholder="e.g. 3000"
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
                <span className="result-label">Power</span>
                <span className="result-value">
                  {result.powerW.toFixed(1)} W
                </span>
              </div>
              <div className="result-item">
                <span className="result-label">Power</span>
                <span className="result-value">
                  {result.powerKW.toFixed(2)} kW
                </span>
              </div>
              <div className="result-item">
                <span className="result-label">Power</span>
                <span className="result-value">
                  {result.powerHP.toFixed(2)} HP
                </span>
              </div>
            </>
          ) : (
            <p>Enter values and click Calculate</p>
          )}

          <div className="formula-box">
            <h4>Formula</h4>
            <code>Power (kW) = Torque (Nm) × Speed (RPM) / 9549</code>
          </div>
          <p className="assumptions">
            Derived from P = τω where ω = 2πN/60. Does not account for
            mechanical losses or efficiency. 1 kW ≈ 1.341 HP (mechanical).
          </p>
        </div>
      </div>
    </div>
  );
}
