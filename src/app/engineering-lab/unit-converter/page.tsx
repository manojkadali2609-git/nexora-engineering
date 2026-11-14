"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type Category =
  | "Power"
  | "Torque"
  | "Speed"
  | "Length"
  | "Mass"
  | "Pressure"
  | "Temperature";

interface UnitDef {
  units: string[];
  toBase: Record<string, (v: number) => number>;
  fromBase: Record<string, (v: number) => number>;
}

const categories: Record<Category, UnitDef> = {
  Power: {
    units: ["W", "kW", "HP"],
    toBase: {
      W: (v) => v,
      kW: (v) => v * 1000,
      HP: (v) => v * 745.7,
    },
    fromBase: {
      W: (v) => v,
      kW: (v) => v / 1000,
      HP: (v) => v / 745.7,
    },
  },
  Torque: {
    units: ["Nm", "lb-ft"],
    toBase: {
      Nm: (v) => v,
      "lb-ft": (v) => v * 1.3558,
    },
    fromBase: {
      Nm: (v) => v,
      "lb-ft": (v) => v / 1.3558,
    },
  },
  Speed: {
    units: ["km/h", "mph", "m/s"],
    toBase: {
      "km/h": (v) => v / 3.6,
      mph: (v) => v * 0.44704,
      "m/s": (v) => v,
    },
    fromBase: {
      "km/h": (v) => v * 3.6,
      mph: (v) => v / 0.44704,
      "m/s": (v) => v,
    },
  },
  Length: {
    units: ["mm", "m", "in", "ft"],
    toBase: {
      mm: (v) => v / 1000,
      m: (v) => v,
      in: (v) => v * 0.0254,
      ft: (v) => v * 0.3048,
    },
    fromBase: {
      mm: (v) => v * 1000,
      m: (v) => v,
      in: (v) => v / 0.0254,
      ft: (v) => v / 0.3048,
    },
  },
  Mass: {
    units: ["kg", "lb"],
    toBase: {
      kg: (v) => v,
      lb: (v) => v * 0.453592,
    },
    fromBase: {
      kg: (v) => v,
      lb: (v) => v / 0.453592,
    },
  },
  Pressure: {
    units: ["kPa", "bar", "psi"],
    toBase: {
      kPa: (v) => v,
      bar: (v) => v * 100,
      psi: (v) => v * 6.89476,
    },
    fromBase: {
      kPa: (v) => v,
      bar: (v) => v / 100,
      psi: (v) => v / 6.89476,
    },
  },
  Temperature: {
    units: ["°C", "°F", "K"],
    toBase: {
      "°C": (v) => v,
      "°F": (v) => (v - 32) * (5 / 9),
      K: (v) => v - 273.15,
    },
    fromBase: {
      "°C": (v) => v,
      "°F": (v) => v * (9 / 5) + 32,
      K: (v) => v + 273.15,
    },
  },
};

const categoryKeys = Object.keys(categories) as Category[];

export default function UnitConverterPage() {
  const [category, setCategory] = useState<Category>("Power");
  const [fromUnit, setFromUnit] = useState(categories.Power.units[0]);
  const [toUnit, setToUnit] = useState(categories.Power.units[1]);
  const [fromValue, setFromValue] = useState("");
  const [toValue, setToValue] = useState("");
  const [lastEdited, setLastEdited] = useState<"from" | "to">("from");

  const currentCat = categories[category];

  useEffect(() => {
    setFromUnit(currentCat.units[0]);
    setToUnit(currentCat.units[1] || currentCat.units[0]);
    setFromValue("");
    setToValue("");
  }, [category]);

  useEffect(() => {
    convert();
  }, [fromUnit, toUnit]);

  function convert() {
    if (lastEdited === "from") {
      const val = parseFloat(fromValue);
      if (isNaN(val)) {
        setToValue("");
        return;
      }
      const base = currentCat.toBase[fromUnit](val);
      const converted = currentCat.fromBase[toUnit](base);
      setToValue(converted.toPrecision(8).replace(/\.?0+$/, ""));
    } else {
      const val = parseFloat(toValue);
      if (isNaN(val)) {
        setFromValue("");
        return;
      }
      const base = currentCat.toBase[toUnit](val);
      const converted = currentCat.fromBase[fromUnit](base);
      setFromValue(converted.toPrecision(8).replace(/\.?0+$/, ""));
    }
  }

  function handleFromChange(value: string) {
    setFromValue(value);
    setLastEdited("from");
    const val = parseFloat(value);
    if (isNaN(val)) {
      setToValue("");
      return;
    }
    const base = currentCat.toBase[fromUnit](val);
    const converted = currentCat.fromBase[toUnit](base);
    setToValue(converted.toPrecision(8).replace(/\.?0+$/, ""));
  }

  function handleToChange(value: string) {
    setToValue(value);
    setLastEdited("to");
    const val = parseFloat(value);
    if (isNaN(val)) {
      setFromValue("");
      return;
    }
    const base = currentCat.toBase[toUnit](val);
    const converted = currentCat.fromBase[fromUnit](base);
    setFromValue(converted.toPrecision(8).replace(/\.?0+$/, ""));
  }

  return (
    <div className="calc-page">
      <Link href="/engineering-lab" className="back-link">
        <ArrowLeft size={16} />
        Back to Engineering Lab
      </Link>

      <h1 className="calc-title">Unit Converter</h1>
      <p className="calc-description">
        Convert between common engineering units across power, torque, speed,
        length, mass, pressure, and temperature categories.
      </p>

      <div className="calc-layout">
        <div className="calc-form">
          <div className="form-group">
            <label>Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value as Category)}
            >
              {categoryKeys.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>From</label>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <input
                type="number"
                value={fromValue}
                onChange={(e) => handleFromChange(e.target.value)}
                placeholder="Enter value"
                style={{ flex: 1 }}
              />
              <select
                value={fromUnit}
                onChange={(e) => setFromUnit(e.target.value)}
                style={{ width: "auto", minWidth: "80px" }}
              >
                {currentCat.units.map((u) => (
                  <option key={u} value={u}>
                    {u}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>To</label>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <input
                type="number"
                value={toValue}
                onChange={(e) => handleToChange(e.target.value)}
                placeholder="Result"
                style={{ flex: 1 }}
              />
              <select
                value={toUnit}
                onChange={(e) => setToUnit(e.target.value)}
                style={{ width: "auto", minWidth: "80px" }}
              >
                {currentCat.units.map((u) => (
                  <option key={u} value={u}>
                    {u}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="result-panel">
          <h3>Supported Units</h3>
          {categoryKeys.map((cat) => (
            <div key={cat} className="result-item">
              <span className="result-label">{cat}</span>
              <span className="result-value">
                {categories[cat].units.join(", ")}
              </span>
            </div>
          ))}

          <div className="formula-box">
            <h4>Conversion Method</h4>
            <code>
              Value is converted to a base unit, then to the target unit.
              Temperature uses formulas (not ratios).
            </code>
          </div>
          <p className="assumptions">
            Conversion factors are standard engineering values. Temperature
            conversions use exact formulas: °F = °C × 9/5 + 32, K = °C +
            273.15.
          </p>
        </div>
      </div>
    </div>
  );
}
