"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function GearRatioPage() {
  const [drivingTeeth, setDrivingTeeth] = useState("");
  const [drivenTeeth, setDrivenTeeth] = useState("");
  const [inputRpm, setInputRpm] = useState("");
  const [result, setResult] = useState<{
    ratio: number;
    outputRpm: number | null;
    torqueMultiplier: number;
  } | null>(null);

  function calculate() {
    const driving = parseFloat(drivingTeeth);
    const driven = parseFloat(drivenTeeth);
    if (!driving || !driven || driving <= 0 || driven <= 0) return;

    const ratio = driven / driving;
    const rpm = parseFloat(inputRpm);
    const outputRpm = rpm && rpm > 0 ? rpm / ratio : null;
    const torqueMultiplier = ratio;

    setResult({ ratio, outputRpm, torqueMultiplier });
  }

  function reset() {
    setDrivingTeeth("");
    setDrivenTeeth("");
    setInputRpm("");
    setResult(null);
  }

  return (
    <div className="calc-page">
      <Link href="/engineering-lab" className="back-link">
        <ArrowLeft size={16} />
        Back to Engineering Lab
      </Link>

      <h1 className="calc-title">Gear Ratio Calculator</h1>
      <p className="calc-description">
        Determine the gear ratio between two meshing gears, along with output
        speed and torque multiplication.
      </p>

      <div className="calc-layout">
        <div className="calc-form">
          <div className="form-group">
            <label>Driving Gear Teeth</label>
            <input
              type="number"
              value={drivingTeeth}
              onChange={(e) => setDrivingTeeth(e.target.value)}
              placeholder="e.g. 20"
            />
          </div>
          <div className="form-group">
            <label>Driven Gear Teeth</label>
            <input
              type="number"
              value={drivenTeeth}
              onChange={(e) => setDrivenTeeth(e.target.value)}
              placeholder="e.g. 60"
            />
          </div>
          <div className="form-group">
            <label>Input RPM (optional)</label>
            <input
              type="number"
              value={inputRpm}
              onChange={(e) => setInputRpm(e.target.value)}
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
                <span className="result-label">Gear Ratio</span>
                <span className="result-value">
                  {result.ratio.toFixed(3)} : 1
                </span>
              </div>
              {result.outputRpm !== null && (
                <div className="result-item">
                  <span className="result-label">Output RPM</span>
                  <span className="result-value">
                    {result.outputRpm.toFixed(1)} RPM
                  </span>
                </div>
              )}
              <div className="result-item">
                <span className="result-label">Torque Multiplier</span>
                <span className="result-value">
                  {result.torqueMultiplier.toFixed(3)}×
                </span>
              </div>
            </>
          ) : (
            <p>Enter values and click Calculate</p>
          )}

          <div className="formula-box">
            <h4>Formula</h4>
            <code>
              Gear Ratio = Driven Teeth / Driving Teeth
              <br />
              Output RPM = Input RPM / Gear Ratio
            </code>
          </div>
          <p className="assumptions">
            Assumes ideal meshing with no friction or backlash losses. Torque
            multiplier equals the gear ratio for a simple gear pair.
          </p>
        </div>
      </div>
    </div>
  );
}
