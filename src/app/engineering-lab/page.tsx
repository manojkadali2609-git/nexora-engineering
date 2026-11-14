import type { Metadata } from "next";
import PageHero from "@/app/components/PageHero";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Engineering Lab | NEXORA Engineering",
  description:
    "Interactive engineering calculators and tools for EV, powertrain, and vehicle dynamics analysis.",
};

const calculators = [
  {
    slug: "ev-range",
    title: "EV Range Estimator",
    description:
      "Estimate electric vehicle driving range based on battery capacity and energy consumption.",
  },
  {
    slug: "battery-calculator",
    title: "Battery Pack Calculator",
    description:
      "Calculate pack voltage, capacity, and energy from individual cell specifications.",
  },
  {
    slug: "motor-power",
    title: "Motor Power Calculator",
    description:
      "Convert torque and rotational speed into mechanical power output.",
  },
  {
    slug: "gear-ratio",
    title: "Gear Ratio Calculator",
    description:
      "Determine gear ratios, output speed, and torque multiplication between meshing gears.",
  },
  {
    slug: "vehicle-speed",
    title: "Vehicle Speed Calculator",
    description:
      "Calculate vehicle road speed from engine RPM, tire size, and drivetrain ratios.",
  },
  {
    slug: "suspension",
    title: "Suspension Spring Rate",
    description:
      "Compute spring rate and critical damping from vehicle mass and desired ride frequency.",
  },
  {
    slug: "charging-time",
    title: "EV Charging Time",
    description:
      "Estimate charging duration and energy delivered for any EV battery and charger combination.",
  },
  {
    slug: "unit-converter",
    title: "Unit Converter",
    description:
      "Convert between common engineering units across power, torque, speed, and more.",
  },
];

export default function EngineeringLabPage() {
  return (
    <>
      <PageHero
        eyebrow="[ ENGINEERING LAB ]"
        title="Think. Calculate."
        titleAccent="Understand."
        description="Interactive engineering tools designed to help you explore, validate, and understand core automotive and EV concepts — from battery sizing to suspension dynamics."
      />

      <section className="content-section">
        <div className="calc-grid">
          {calculators.map((calc, index) => (
            <Link
              href={`/engineering-lab/${calc.slug}`}
              key={calc.slug}
              className="calc-card"
            >
              <span className="card-num">
                {String(index + 1).padStart(2, "0")} / 08
              </span>
              <h3>{calc.title}</h3>
              <p>{calc.description}</p>
              <span className="calc-link">OPEN TOOL →</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
