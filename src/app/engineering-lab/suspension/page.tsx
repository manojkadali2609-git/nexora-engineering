"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function SuspensionPage() {
  const [mass, setMass] = useState("");
  const [springs, setSprings] = useState("");
  const [frequency, setFrequency] = useState("");
  const [result, setResult] = useState<{
    springRateNmm: number;
    springRateLbfIn: number;
    criticalDamping: number;
  } | null>(null);

  function calculate() {
    const m = parseFloat(mass);
    const n = parseFloat(springs);
    const f = parseFloat(frequency);
    if (!m || !n || !f || m <= 0 || n <= 0 || f <= 0) return;

    const kTotal = Math.pow(2 * Math.PI * f, 2) * m;
    const kPerSpring = kTotal / n;
    const springRateNmm = kPerSpring / 1000;
    const springRateLbfIn = springRateNmm * 5.71;
    const criticalDamping = 2 * Math.sqrt(kTotal * m);

    setResult({ springRateNmm, springRateLbfIn, criticalDamping });
  }

  function reset() {
    setMass("");
    setSprings("");
    setFrequency("");
    setResult(null);
  }

  return (
    <div className="calc-page">
      <Link href="/engineering-lab" className="back-link">
        <ArrowLeft size={16} />
        Back to Engineering Lab
      </Link>

      <h1 className="calc-title">Suspension Spring Rate</h1>
      <p className="calc-description">
        Compute the required spring rate and critical damping coefficient from
        vehicle mass, number of springs, and desired natural frequency.
      </p>

      <div className="calc-layout">
        <div className="calc-form">
          <div className="form-group">
            <label>Vehicle Mass (kg)</label>
            <input
              type="number"
              value={mass}
              onChange={(e) => setMass(e.target.value)}
              placeholder="e.g. 1500"
            />
          </div>
          <div className="form-group">
            <label>Number of Springs</label>
            <input
              type="number"
              value={springs}
              onChange={(e) => setSprings(e.target.value)}
              placeholder="e.g. 4"
            />
          </div>
          <div className="form-group">
            <label>Natural Frequency (Hz)</label>
            <input
              type="number"
              value={frequency}
              onChange={(e) => setFrequency(e.target.value)}
              placeholder="e.g. 1.5"
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
                <span className="result-label">Spring Rate</span>
                <span className="result-value">
                  {result.springRateNmm.toFixed(2)} N/mm
                </span>
              </div>
              <div className="result-item">
                <span className="result-label">Spring Rate</span>
                <span className="result-value">
                  {result.springRateLbfIn.toFixed(2)} lbf/in
                </span>
              </div>
              <div className="result-item">
                <span className="result-label">Critical Damping</span>
                <span className="result-value">
                  {result.criticalDamping.toFixed(1)} Ns/m
                </span>
              </div>
            </>
          ) : (
            <p>Enter values and click Calculate</p>
          )}

          <div className="formula-box">
            <h4>Formulas</h4>
            <code>
              k (N/m) = (2πf)² × m / n
              <br />
              k (N/mm) = k (N/m) / 1000
              <br />
              Critical Damping (Ns/m) = 2 × √(k_total × m)
            </code>
          </div>
          <p className="assumptions">
            Assumes a single-degree-of-freedom model with equal load sharing
            across all springs. Does not account for motion ratio, unsprung mass,
            or damper characteristics.
          </p>
        </div>
      </div>
    </div>
  );
}
