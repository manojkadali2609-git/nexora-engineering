"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BatteryCalculatorPage() {
  const [cellVoltage, setCellVoltage] = useState("");
  const [cellCapacity, setCellCapacity] = useState("");
  const [series, setSeries] = useState("");
  const [parallel, setParallel] = useState("");
  const [result, setResult] = useState<{
    packVoltage: number;
    packCapacity: number;
    packEnergy: number;
    totalCells: number;
  } | null>(null);

  function calculate() {
    const v = parseFloat(cellVoltage);
    const ah = parseFloat(cellCapacity);
    const s = parseFloat(series);
    const p = parseFloat(parallel);
    if (!v || !ah || !s || !p || v <= 0 || ah <= 0 || s <= 0 || p <= 0) return;

    const packVoltage = v * s;
    const packCapacity = ah * p;
    const packEnergy = (packVoltage * packCapacity) / 1000;
    const totalCells = s * p;
    setResult({ packVoltage, packCapacity, packEnergy, totalCells });
  }

  function reset() {
    setCellVoltage("");
    setCellCapacity("");
    setSeries("");
    setParallel("");
    setResult(null);
  }

  return (
    <div className="calc-page">
      <Link href="/engineering-lab" className="back-link">
        <ArrowLeft size={16} />
        Back to Engineering Lab
      </Link>

      <h1 className="calc-title">Battery Pack Calculator</h1>
      <p className="calc-description">
        Calculate battery pack voltage, capacity, total energy, and cell count
        from individual cell specifications and series-parallel configuration.
      </p>

      <div className="calc-layout">
        <div className="calc-form">
          <div className="form-group">
            <label>Cell Voltage (V)</label>
            <input
              type="number"
              value={cellVoltage}
              onChange={(e) => setCellVoltage(e.target.value)}
              placeholder="e.g. 3.7"
            />
          </div>
          <div className="form-group">
            <label>Cell Capacity (Ah)</label>
            <input
              type="number"
              value={cellCapacity}
              onChange={(e) => setCellCapacity(e.target.value)}
              placeholder="e.g. 5.0"
            />
          </div>
          <div className="form-group">
            <label>Cells in Series</label>
            <input
              type="number"
              value={series}
              onChange={(e) => setSeries(e.target.value)}
              placeholder="e.g. 96"
            />
          </div>
          <div className="form-group">
            <label>Cells in Parallel</label>
            <input
              type="number"
              value={parallel}
              onChange={(e) => setParallel(e.target.value)}
              placeholder="e.g. 4"
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
                <span className="result-label">Pack Voltage</span>
                <span className="result-value">
                  {result.packVoltage.toFixed(1)} V
                </span>
              </div>
              <div className="result-item">
                <span className="result-label">Pack Capacity</span>
                <span className="result-value">
                  {result.packCapacity.toFixed(1)} Ah
                </span>
              </div>
              <div className="result-item">
                <span className="result-label">Pack Energy</span>
                <span className="result-value">
                  {result.packEnergy.toFixed(2)} kWh
                </span>
              </div>
              <div className="result-item">
                <span className="result-label">Total Cells</span>
                <span className="result-value">{result.totalCells}</span>
              </div>
            </>
          ) : (
            <p>Enter values and click Calculate</p>
          )}

          <div className="formula-box">
            <h4>Formulas</h4>
            <code>
              Pack Voltage = Cell V × Series
              <br />
              Pack Capacity = Cell Ah × Parallel
              <br />
              Energy (kWh) = Pack V × Pack Ah / 1000
              <br />
              Total Cells = Series × Parallel
            </code>
          </div>
          <p className="assumptions">
            Assumes all cells are identical and perfectly balanced. Real packs
            include BMS overhead and cell-to-cell variation.
          </p>
        </div>
      </div>
    </div>
  );
}
