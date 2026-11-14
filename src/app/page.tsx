"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  ArrowDownRight,
  BatteryCharging,
  Cpu,
  Gauge,
  Flame,
  Binary,
  Settings2,
  Search,
} from "lucide-react";

const EngineViewer = dynamic(
  () => import("./components/EngineViewer"),
  { ssr: false }
);

const areas = [
  {
    n: "01",
    t: "Automotive Systems",
    d: "Explore mechanical foundations, chassis kinematics, vehicle dynamics and brake thermal physics.",
    tags: "Mechanics · Kinematics · Dynamics · CFD",
    I: Gauge,
    href: "/automotive",
  },
  {
    n: "02",
    t: "Advanced Engine Tech",
    d: "Next-gen clean combustion: Hydrogen H2-ICE, Pre-Chamber Jet Ignition, and Variable Compression.",
    tags: "H2-ICE · Pre-Chamber · VCR · E-Fuels",
    I: Flame,
    href: "/automotive",
  },
  {
    n: "03",
    t: "Electric Mobility",
    d: "High-voltage electrochemistry, 800V platforms, Silicon Carbide inverters, and Solid-State cells.",
    tags: "800V Bus · SiC Inverters · Solid-State · V2G",
    I: BatteryCharging,
    href: "/electric-mobility",
  },
  {
    n: "04",
    t: "Software-Defined Vehicles",
    d: "The architectural shift: Zonal E/E computing, Automotive Ethernet, Rust OS, and Continuous OTA.",
    tags: "Zonal Compute · Ethernet TSN · AUTOSAR · Rust",
    I: Binary,
    href: "/technology",
  },
  {
    n: "05",
    t: "Autonomous & Edge AI",
    d: "Perception stacks fusing LiDAR/4D-Radar, End-to-End neural planners, and 1,000+ TOPS edge SoCs.",
    tags: "LiDAR Fusion · End-to-End AI · Edge SoCs · C-V2X",
    I: Cpu,
    href: "/technology",
  },
  {
    n: "06",
    t: "Engineering Lab",
    d: "Interactive engineering calculators for vehicle speed, EV range, gear ratios, and battery packs.",
    tags: "Calculators · Powertrain · Springs · Energy",
    I: Settings2,
    href: "/engineering-lab",
  },
];

export default function Home() {
  const [q, S] = useState("");

  const list = useMemo(
    () =>
      areas.filter((a) =>
        (a.t + a.d + a.tags).toLowerCase().includes(q.toLowerCase())
      ),
    [q]
  );

  return (
    <>
      <section className="hero" id="top">
        <div className="gridbg" />

        <div className="copy">
          <div className="eyebrow">
            ● ENGINEERING · MOBILITY · INNOVATION
          </div>

          <h1>
            ENGINEERING
            <br />
            BEYOND THE <em>KNOWN.</em>
          </h1>

          <p>
            Explore clean combustion physics, Software-Defined Vehicles, 800V electric
            mobility, and the cutting-edge technologies redefining global transportation.
          </p>

          <div className="actions">
            <a className="primary" href="#explore">
              Explore engineering <ArrowUpRight size={16} />
            </a>

            <Link className="secondary" href="/engineering-lab">
              Enter engineering lab <ArrowRight size={16} />
            </Link>
          </div>

          <small>
            01 / 06　　DISCOVER THE SYSTEMS BEHIND MOTION &amp; INTELLIGENCE
          </small>
        </div>

        <div
          className="engine"
          aria-label="Interactive metallic 3D engine"
        >
          <EngineViewer />
        </div>

        <a className="scroll" href="#explore">
          SCROLL TO EXPLORE <ArrowDownRight size={16} />
        </a>
      </section>

      <section className="intro" id="about">
        <label>[ OUR PURPOSE ]</label>

        <div>
          <h2>
            Curiosity drives
            <br />
            <em>engineering forward.</em>
          </h2>

          <p>
            NEXORA is a space to understand how things work, explore
            how systems connect, and discover what technology can become.
            From the thermodynamic limits of hydrogen combustion to the frontier of
            autonomous edge computing — learn, calculate, and build your technical perspective.
          </p>
        </div>
      </section>

      <section className="explore" id="explore">
        <div className="heading">
          <div>
            <label>[ EXPLORE NEXORA ]</label>
            <h2>Knowledge in motion.</h2>
          </div>

          <div className="search">
            <Search size={16} />
            <input
              value={q}
              onChange={(e) => S(e.target.value)}
              placeholder="Search engineering disciplines..."
            />
          </div>
        </div>

        <div className="cards">
          {list.map((a) => (
            <Link className="card" href={a.href} key={a.n}>
              <div className="top">
                <span>{a.n} / 06</span>
                <a.I size={21} />
              </div>

              <h3>{a.t}</h3>
              <p>{a.d}</p>

              <div className="bottom">
                <span>{a.tags}</span>
                <ArrowUpRight size={16} />
              </div>
            </Link>
          ))}

          {!list.length && (
            <p>No matching areas. Try another search query.</p>
          )}
        </div>
      </section>

      <section className="lab" id="lab">
        <div>
          <label>[ INTERACTIVE KNOWLEDGE ]</label>

          <h2>
            Think. Calculate.
            <br />
            <em>Understand.</em>
          </h2>

          <p>
            Engineering principles become clearer when you can experiment
            with real mathematical models. The Engineering Lab brings practical calculators,
            system explainers and interactive design tools together.
          </p>

          <Link className="textlink" href="/engineering-lab">
            Explore the lab ↗
          </Link>
        </div>

        <div className="panel">
          <div className="paneltop">
            ENGINEERING LAB
            <span>● LIVE</span>
          </div>

          <div className="orb">
            <div />
            <Settings2 size={36} />
          </div>

          <div className="panelbottom">
            MODE: INTERACTIVE
            <span>8 ENGINEERING CALCULATORS</span>
          </div>
        </div>
      </section>

      <section className="projects" id="projects">
        <label>[ BUILT THROUGH CURIOSITY ]</label>

        <div className="projectrow">
          <h2>
            Ideas become
            <br />
            <em>engineering.</em>
          </h2>

          <p>
            Explore practical design projects, mechanical concepts and mobility
            experiments. Each project documents the analytical thinking, CAD decisions
            and equations behind the physical build.
          </p>
        </div>

        <Link className="placeholder" href="/projects">
          PROJECT ARCHIVE / 001
          <span>EXPLORE ENGINEERING PROJECTS</span>
          ↗
        </Link>
      </section>
    </>
  );
}
