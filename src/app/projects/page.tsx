"use client";
import PageHero from "@/app/components/PageHero";
import TopicCard from "@/app/components/TopicCard";
import dynamic from "next/dynamic";

const BackgroundOrb = dynamic(() => import("@/app/components/BackgroundOrb"), { ssr: false });

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="[ ENGINEERING PROJECTS ]"
        title="Ideas Become"
        titleAccent="Engineering."
        description="Explore practical engineering case studies — from high-voltage EV conversions to aerodynamic CFD studies. Each project documents the thinking, equations, design tradeoffs, and test data behind the final build."
      >
        <BackgroundOrb />
      </PageHero>

      <section className="content-section">
        <div className="section-header">
          <label>[ APPLIED CASE STUDIES ]</label>
          <h2>Documented Engineering Builds</h2>
          <p>
            Real engineering projects executed from first principles: design calculations,
            CAD/CFD simulations, hardware integration, and track validation.
          </p>
        </div>

        <div className="topic-grid">
          <TopicCard
            num="001 / 004"
            title="EV Conversion: Petrol to Electric"
            status="DOCUMENTED"
            summary="Converting an internal combustion vehicle to full electric drive. Covers traction motor selection, battery pack sizing, high-voltage bus integration, and weight distribution analysis to maintain dynamic handling balance."
            tags={["EV Powertrain", "PMSM Motor", "BMS Integration", "Weight Balance"]}
            content={[
              "The conversion of an internal combustion chassis into a battery electric vehicle begins with an exhaustive mass and inertia audit. Removing the ICE, exhaust system, fuel tank, and starter motor removes 280 kg, but alters the longitudinal center of gravity (CG) location. To maintain the original 52:48 front-to-rear static weight distribution, the 380 kg custom battery enclosure is split into two sub-packs: a 220 kg primary pack situated low between the rear frame rails and a 160 kg secondary pack mounted in the former transmission tunnel.",
              "Powertrain selection centered on a 150 kW peak radial-flux Permanent Magnet Synchronous Motor (PMSM) paired with a 12,000 RPM single-speed helical reduction gearbox (8.2:1 ratio). Delivering 310 Nm of motor torque from 0 RPM, the system produces over 2,540 Nm of axle torque at the wheels — sufficient for a 0–100 km/h acceleration time under 4.8 seconds without requiring multi-ratio mechanical gear changes.",
              "The high-voltage energy storage system utilizes 96 series-connected NMC pouch cells configured into a 355V nominal bus with 54 kWh total capacity. An integrated Battery Management System (BMS) communicates via CAN bus with the motor inverter, monitoring individual cell delta-voltages within ±2 mV and executing passive bleed balancing during the final 10% Constant-Voltage charge phase.",
              "Thermal management incorporates a dual-circuit liquid cooling loop: a high-temperature loop (max 75°C) circulating ethylene glycol through the motor jacket and inverter cold plate, and an independent low-temperature loop (20–35°C) connected to a chiller unit for active battery cooling during rapid DC fast-charging sessions.",
              "Track validation confirmed the converted chassis maintained neutral steady-state cornering up to 0.94g lateral acceleration. Regenerative braking was calibrated to deliver up to 0.28g of deceleration upon throttle lift-off, recapturing approximately 22% of total kinetic energy across standard urban driving cycles."
            ]}
          />

          <TopicCard
            num="002 / 004"
            title="Battery Pack Design for Solar Vehicle"
            status="COMPLETED"
            summary="Designing a lightweight, high-specific-energy battery pack for a World Solar Challenge vehicle. Covers cylindrical cell selection, series/parallel configuration, and thermal runaway containment in an ultralight carbon monocoque."
            tags={["Solar EV", "21700 Cells", "Thermal Containment", "Lightweighting"]}
            content={[
              "Solar vehicle battery engineering operates under extreme mass constraints, where every additional kilogram penalizes overall aerodynamic efficiency and rolling resistance. The target specification required a 6.0 kWh energy capacity weighing under 32 kg, achieving a pack-level gravimetric energy density exceeding 185 Wh/kg including all contactors, BMS hardware, and structural containment.",
              "Cell selection evaluated 18650 versus 21700 formats, ultimately selecting high-nickel 21700 cylindrical cells delivering 265 Wh/kg at the individual cell level. The pack architecture employs a 40S 3P topology, yielding a nominal voltage of 144V and 42 Ah capacity. Custom laser-cut nickel-copper composite busbars with micro-spot welds minimize internal series resistance (ESR) below 18 mΩ total pack resistance.",
              "Structural containment utilizes a sandwich panel construction featuring a 10mm Nomex honeycomb core laminated between high-modulus carbon fiber plies. An intumescent aerogel blanket lines the interior enclosure, providing 1,100°C thermal barrier protection capable of containing localized single-cell thermal runaway without cascading to adjacent modules.",
              "The solar interface incorporates dual Maximum Power Point Tracking (MPPT) buck-boost converters operating at 98.4% peak conversion efficiency. The MPPTs adjust operating points at 20 Hz to extract maximum irradiance from the gallium-arsenide (GaAs) triple-junction roof array, feeding directly into the DC battery bus.",
              "Across real-world solar marathon testing over 3,000 km, the battery pack maintained an operating temperature delta under 3.5°C between center and perimeter cells, delivering 97.8% coulombic efficiency under sustained ambient desert conditions exceeding 42°C."
            ]}
          />

          <TopicCard
            num="003 / 004"
            title="Suspension Geometry Optimization"
            status="IN PROGRESS"
            summary="Optimizing double-wishbone suspension kinematics for a Formula Student competition prototype. Analyzes camber gain curves, roll center migration, and anti-dive angles under dynamic transient loading."
            tags={["Formula Student", "Double-Wishbone", "Kinematics", "Adams Car"]}
            content={[
              "Formula Student dynamic events demand maximum tire contact patch utilization across tight slalom transitions and sustained high-downforce cornering. This project optimized the spatial coordinates of 16 suspension hardpoints to minimize roll center migration and maintain ideal tire camber under combined bump and roll.",
              "Kinematic simulation in Adams Car and MATLAB modeled virtual swing arms across ±40 mm of wheel travel and ±3.0 degrees of chassis roll. The optimized geometry achieves a camber gain rate of -0.85 deg/deg of body roll, counteracting tire carcass deflection and maintaining a constant -2.2° dynamic negative camber at peak lateral loading.",
              "Roll center height was constrained to 42 mm front and 68 mm rear above ground level, with less than 6 mm of lateral migration throughout maximum steering lock. This roll axis inclination balances roll moment distribution, creating predictable yaw damping and crisp transient turn-in response without excessive jacking forces.",
              "Anti-dive geometry was engineered at 32% front and anti-squat at 24% rear. This controlled level prevents suspension binding over track surface irregularities while keeping aerodynamic pitch change below 0.4 degrees under maximum 1.8g braking events, ensuring front wing ground effect remains sealed.",
              "Physical uprights and control arms were topology-optimized for additive manufacturing in aerospace Ti-6Al-4V titanium, cutting unsprung mass by 28% while increasing torsional knuckle stiffness past 14,000 Nm/degree."
            ]}
          />

          <TopicCard
            num="004 / 004"
            title="Aerodynamic Drag Reduction Study"
            status="PLANNED"
            summary="Reducing aerodynamic drag through systematic body modifications. Integrates external CFD simulation, underbody Venturi tunnel design, and rear wing optimization validated against scaled wind tunnel data."
            tags={["CFD Aerodynamics", "Venturi Diffusers", "Cd Optimization", "Wind Tunnel"]}
            content={[
              "Aerodynamic drag consumes over 65% of total highway energy in modern passenger vehicles. This project targets a systematic reduction in drag coefficient (Cd) from a baseline 0.32 down to 0.22 while preserving zero aerodynamic lift (Cl = 0.00) across highway speeds.",
              "Computational Fluid Dynamics (CFD) modeling utilizes an OpenFOAM workflow with k-ω SST turbulence modeling across a 48-million-cell polyhedral mesh. Simulations identified major drag sources: 38% from the turbulent rear wake and separation bubble, 26% from exposed wheel assemblies, and 22% from rough underbody turbulence.",
              "Underbody redesign introduced full flat-floor belly panning feeding into a dual-channel Venturi diffuser with an 11-degree expansion ramp. Vortex-generating strakes along the floor edges seal the low-pressure underbody air from lateral ingress, generating clean downforce without adding frontal area.",
              "Front-end aerodynamic modifications feature an active shutter grille system that closes at highway cruising speeds, diverting incoming air through high-efficiency wheel curtain ducts. These laminar air curtains energize the boundary layer around the front tires, reducing front wheel wake turbulence by 34%.",
              "A 1:5 scale model tested in a closed-loop wind tunnel verified CFD predictions within 3.8% correlation, demonstrating a net 29% reduction in aerodynamic drag force at 120 km/h and projecting an 11.2% highway range extension on electric test platforms."
            ]}
          />
        </div>
      </section>
    </>
  );
}
