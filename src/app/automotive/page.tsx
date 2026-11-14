"use client";
import PageHero from "@/app/components/PageHero";
import TopicCard from "@/app/components/TopicCard";
import dynamic from "next/dynamic";

const BackgroundOrb = dynamic(() => import("@/app/components/BackgroundOrb"), { ssr: false });

export default function AutomotivePage() {
  return (
    <>
      <PageHero
        eyebrow="[ AUTOMOTIVE SYSTEMS & PROPULSION ]"
        title="The Science"
        titleAccent="of Motion & Power."
        description="From classical thermodynamic cycles to modern variable-compression alternative fuel reactors, automotive engineering represents the disciplined convergence of thermodynamics, fluid dynamics, and precision mechanical systems."
      >
        <BackgroundOrb />
      </PageHero>

      {/* CORE SUBSYSTEMS */}
      <section className="content-section">
        <div className="section-header">
          <label>[ CORE SUBSYSTEMS ]</label>
          <h2>Fundamental Vehicle Architecture</h2>
          <p>
            The foundational mechanical subsystems that define vehicle performance,
            directional stability, and ride dynamics under extreme transient loads.
          </p>
        </div>

        <div className="topic-grid">
          <TopicCard
            num="01 / 06"
            title="Four-Stroke Combustion Cycle"
            summary="The Otto and Diesel cycles convert fuel chemical energy into mechanical work through intake, compression, power, and exhaust strokes. Peak cylinder pressures reach 80–200 bar, with valve timing modulated across variable lift and phase systems to optimize volumetric efficiency from idle to redline."
            tags={["Otto / Diesel", "Volumetric Efficiency", "BMEP", "P-V Diagrams"]}
            content={[
              "The four-stroke internal combustion engine is the cornerstone of automotive propulsion, operating through four discrete piston strokes: intake, compression, power (combustion), and exhaust. During the intake stroke, the piston descends as the intake valve opens, drawing an air-fuel mixture into the cylinder at atmospheric pressure. The compression stroke then raises this mixture to high pressure — typically 10:1 to 14:1 ratios — before the spark plug fires near top-dead-center (TDC).",
              "The combustion event converts chemical energy stored in the fuel into high-pressure gas that forces the piston downward in the power stroke. Peak cylinder pressures in naturally aspirated engines reach 60–80 bar, while turbocharged engines can see 150–200 bar. The rate of pressure rise (dP/dθ) is carefully controlled through injection timing and spark advance to prevent destructive detonation (knock), which can shatter piston crowns.",
              "Brake Mean Effective Pressure (BMEP) is the key metric normalizing engine output: BMEP = (P × 60,000) / (n × V_d), where P is power in kW, n is rotational speed in rpm, and V_d is displacement in litres. Modern high-performance naturally aspirated engines achieve 100–130 kPa BMEP; turbocharged units exceed 200–250 kPa. The P-V (pressure-volume) diagram visualizes the thermodynamic cycle work area — the enclosed area directly represents net work output per cycle.",
              "Volumetric efficiency (η_v) measures how effectively the cylinder fills with fresh charge: η_v = (actual mass inducted) / (theoretical mass at ambient conditions). Modern variable valve timing (VVT) systems — including Toyota VVTi, BMW Valvetronic, and Porsche VarioCam+ — continuously optimize intake and exhaust cam phasing across the full RPM range, maintaining η_v above 95% from idle to peak power. Variable valve lift further reduces pumping losses at partial throttle, cutting fuel consumption by 10–15%.",
              "The Diesel cycle differs from Otto in that fuel is injected directly at peak compression (20:1 to 23:1 ratios), self-igniting from heat of compression alone — no spark plug required. This allows inherently leaner air-fuel ratios (excess air factor λ > 1.5), yielding 25–40% higher fuel efficiency than equivalent petrol engines. Modern common-rail diesel systems inject at 2,500 bar using piezoelectric injectors firing 5–9 times per combustion event for precise staged heat release."
            ]}
          />

          <TopicCard
            num="02 / 06"
            title="Drivetrain & Torque Vectoring"
            summary="Transmissions multiply engine torque across calculated reduction ratios, balancing shift velocity and parasitic losses. Active differentials and twin-clutch rear drive units distribute yaw moments in real time, mitigating understeer before tire lateral slip thresholds are breached."
            tags={["Dual-Clutch (DCT)", "Torque Vectoring", "Limited Slip", "Epicyclic Gearing"]}
            content={[
              "The drivetrain transmits engine power from the crankshaft to the drive wheels through a series of gear reduction stages. A gearbox multiplies torque by the inverse of the gear ratio: T_output = T_engine × gear_ratio × η_mechanical. Dual-Clutch Transmissions (DCT) pre-select the next gear on a secondary clutch shaft, enabling clutch-to-clutch shifts in under 100 milliseconds without any torque interruption — faster than any manual driver can achieve.",
              "Epicyclic (planetary) gear sets are the core building blocks of automatic gearboxes and CVTs. A single planetary set comprising a sun gear, planet gears, and a ring gear can provide overdrive, underdrive, or direct drive depending on which element is held stationary by a clutch or brake. Modern 8-speed and 10-speed automatics stack multiple planetary sets with complex clutch packs to achieve wide ratio spreads (6:1 to 8:1) keeping the engine in its optimal efficiency band across all vehicle speeds.",
              "Torque vectoring systems actively distribute drive torque between left and right wheels — or between axles — to control yaw behavior. Passive mechanical limited-slip differentials (LSDs) using helical gears or clutch packs provide a torque bias ratio (TBR) of 2:1 to 5:1, automatically biasing torque toward the wheel with more traction. Active systems use electronically-controlled wet multi-plate clutch packs to achieve TBR values exceeding 8:1 on demand within milliseconds of a vehicle dynamic event.",
              "Electronic Torque Vectoring (eTV) using individual electric motors at each wheel eliminates all mechanical drivetrain components and achieves perfect torque control from 0 rpm. By overdriving the outer wheel and underdriving the inner wheel in a corner, the system generates a yaw moment directly proportional to the torque differential: M_yaw = ΔT × (track_width / 2). This allows the vehicle's response to match a mathematically ideal handling target regardless of driver steering input.",
              "Transfer cases in all-wheel-drive vehicles split torque front-to-rear using either viscous coupling, Haldex multi-plate clutches, or planetary center differentials. Advanced systems like Porsche's PTM and BMW's xDrive dynamically vary front/rear torque split from 0/100 to 50/50 within 100ms using predictive algorithms that read steering angle, lateral acceleration, wheel speeds, and even GPS map data to anticipate corners before the driver initiates the turn."
            ]}
          />

          <TopicCard
            num="03 / 06"
            title="Vehicle Dynamics & Tire Mechanics"
            summary="Cornering performance is bounded by the brush tire model and the friction ellipse. Dynamic weight transfer during braking and cornering shifts normal loads across axles, requiring precise anti-roll stiffness distribution to balance steady-state lateral acceleration."
            tags={["Friction Circle", "Slip Angle", "Weight Transfer", "Yaw Moment"]}
            content={[
              "Tire mechanics govern every aspect of vehicle performance. The contact patch — a roughly 15×20 cm area — is where all braking, cornering, and acceleration forces are generated. The brush tire model describes how individual rubber elements in the contact patch deflect elastically under shear load. The resulting lateral force (F_y) rises linearly with slip angle (α) up to the friction limit: F_y = C_α × α, where C_α is the cornering stiffness typically 500–1,200 N/deg for passenger tires.",
              "The friction ellipse (also called the friction circle) shows the combined limit of longitudinal and lateral tire force: (F_x/μF_z)² + (F_y/μF_z)² ≤ 1. A tire generating maximum braking force has zero available lateral capacity — the driver must trade between braking and turning. Performance driving techniques like trail braking exploit this by gradually releasing brake pressure through corner entry, shifting tire load toward lateral traction as the driver begins to steer.",
              "Dynamic weight transfer during cornering is governed by: ΔF_z = m × a_y × h_cg / track_width. At 1.0g lateral acceleration with a 450mm CG height and 1,600mm track, weight transfer per axle reaches ~180 kg — nearly doubling the outer tire load while halving the inner. Because tire cornering stiffness does not double with doubled load (due to load sensitivity), overall grip is reduced compared to equal loading, motivating low-CG designs in performance vehicles.",
              "Anti-roll bars (sway bars) resist body roll by transferring vertical load between inner and outer wheels of the same axle. The front/rear anti-roll stiffness distribution controls vehicle understeer/oversteer balance. Increasing front roll stiffness relative to rear increases understeer (safer for road cars), while increasing rear stiffness increases oversteer tendency (preferred for rear-drive race cars). Modern active roll control systems (ARC) use hydraulic or electric actuators to vary roll stiffness continuously.",
              "Yaw moment diagrams (YMDs) are the definitive tool for analyzing handling balance at the design stage. The diagram plots yaw moment (N) against lateral acceleration (a_y) for a given front/rear steer angle sweep. The slope of the linear region represents the vehicle's yaw stiffness, while the width of the diagram shows the range of controllable yaw states. Race cars are tuned to operate at the boundary of the linear region, maximizing average lateral acceleration around a circuit."
            ]}
          />

          <TopicCard
            num="04 / 06"
            title="Suspension Kinematics & Compliance"
            summary="Independent double-wishbone and multi-link linkages maintain tire contact patches throughout roll and bump travel. Virtual pivot axes control roll center migration, while anti-dive and anti-squat angles counteract pitch instability under heavy longitudinal acceleration."
            tags={["Multi-Link", "Roll Center", "Anti-Dive Geometry", "Camber Gain"]}
            content={[
              "Suspension kinematics defines how wheel orientation changes relative to the vehicle body throughout bump, droop, and roll travel. The primary goals are: maintaining correct camber (tire perpendicularity to road), minimizing scrub radius changes, and controlling roll center height. Double-wishbone (A-arm) suspensions with two parallel lateral links provide precise camber curves because the wheel traces a near-circular arc, applying negative camber as the wheel rises through bump — keeping the tire more perpendicular to the road during cornering.",
              "The roll center is the geometric point about which the vehicle body rotates relative to the ground. Its height is determined by the intersection of virtual swing arms traced from the wheel contact patches through the inner and outer pivot points. A higher roll center reduces roll moment arm (body roll), but at the cost of jacking forces that can destabilize the vehicle. MacPherson strut suspensions suffer from high roll center migration in bump because the strut geometry changes significantly, a known limitation compared to double-wishbone designs.",
              "Multi-link rear suspensions use five or more separate links (typically toe link, two lateral links, and two longitudinal links) to independently control camber, toe, track width variation, and longitudinal compliance. This decoupling allows engineers to dial in passive rear-steer characteristics: bump-toe-in increases straight-line stability, while load-induced toe-in improves corner exit stability. The compliance steer characteristics are measured on a suspension K&C (kinematics and compliance) rig using servo-hydraulic actuators.",
              "Anti-dive and anti-squat geometry reduces pitch under braking and acceleration by using the suspension geometry to generate a force opposing the inertial pitch moment. Anti-dive percentage is defined as the cotangent of the front suspension link angle multiplied by the front brake bias ratio: Anti-Dive% = (tan θ_front × front_brake_bias) × 100. At 100% anti-dive, the suspension does not compress at all during braking — typical production cars run 15–50% to prevent harsh ride from full geometric anti-dive.",
              "Compliance (or elasto-kinematics) accounts for deflection of rubber bushings under cornering and braking loads. Carefully tuned bushing stiffnesses allow controlled toe change under lateral load — this passive compliance can mimic active rear-steer at a fraction of the cost. Modern vehicles use computer-optimized bushing geometries to introduce 0.1–0.3 degrees of rear toe-in under cornering load, improving high-speed stability without an active system."
            ]}
          />

          <TopicCard
            num="05 / 06"
            title="Thermal Dissipation & Braking"
            summary="High-performance ventilated disc systems convert kinetic energy into extreme thermal fluxes, dissipating up to 800°C without brake fade. Electro-hydraulic brake-by-wire architectures decouple pedal feel from caliper hydraulics, seamlessly blending friction with regenerative deceleration."
            tags={["Brake-by-Wire", "Thermal Fade", "Vane Geometry", "ABS Modulation"]}
            content={[
              "Vehicle braking converts kinetic energy into heat through friction between brake pads and rotors. The energy absorbed per stop: E = ½mv², for a 1,800 kg car decelerating from 100 km/h (27.8 m/s) equals ~695 kJ — equivalent to running a 1 kW heater for 11.5 minutes. This enormous energy is absorbed by rotors typically weighing 8–15 kg each, causing peak surface temperatures exceeding 700–900°C during repeated hard stops on track.",
              "Ventilated disc rotors use internal vane passages to create centrifugal airflow through the disc cross-section. Curved or pillar-vane geometries are optimized using CFD to maximize internal air mass flow rate. Grooved and dimpled rotor surfaces improve pad bite and clear debris from the pad face, while cross-drilled rotors (more common in road cars) reduce unsprung weight at the cost of potential crack propagation from thermal cycling. Carbon-ceramic composite (CCM) rotors used in supercars weigh 50% less than cast iron equivalents and are resistant to brake fade up to 1,400°C.",
              "Brake fade occurs when pad material outgasses under high temperature, creating a vapor film between pad and rotor that reduces friction coefficient. Modern high-performance brake pad compounds (such as Pagid RS29, Brembo XA18) maintain stable μ values of 0.42–0.52 from cold to >800°C. Fade temperature rating is measured on a brake dynamometer using a standardized temperature ramp protocol per ECE R90 or FMVSS-135.",
              "Brake-by-Wire (BBW) systems replace conventional hydraulic master cylinder linkages with fully electronic pedal force sensors and independently actuated hydraulic or electromechanical calipers. This architecture is essential for electrified vehicles where regenerative braking from the electric motor handles the majority of deceleration. The BBW controller blends friction and regenerative braking seamlessly: at light deceleration, only the motor regenerates; as pedal force increases, friction brakes are progressively added while maintaining constant pedal feel through a pedal simulator.",
              "ABS (Anti-lock Braking System) prevents wheel lockup by modulating hydraulic pressure in cycles of 15–25 Hz. The system monitors wheel deceleration rate and slip ratio (λ = (v_vehicle - v_wheel) / v_vehicle) on each corner independently. When slip ratio exceeds ~15–20% (the peak friction point on a typical μ-slip curve), the ABS controller reduces brake pressure, allowing the wheel to accelerate before reapplying. Modern corner-independent ABS resolves brake pressure within 3–5 ms, enabling stopping distances 20–30% shorter than the best human driver can achieve on locked wheels."
            ]}
          />

          <TopicCard
            num="06 / 06"
            title="Computational Fluid Aerodynamics"
            summary="Modern race and production bodies balance drag coefficient (Cd) against downforce (Cl). Inverted airfoils, vortex generators, and aggressive underbody Venturi diffusers establish ground effect, planting the chassis without adding parasitic vehicle mass."
            tags={["Ground Effect", "Diffuser Angle", "Vortex Control", "Frontal Area"]}
            content={[
              "Aerodynamic drag force is given by F_d = ½ × ρ × v² × C_d × A, where ρ is air density (1.225 kg/m³ at sea level), v is vehicle speed, C_d is the drag coefficient, and A is the frontal cross-sectional area. At 200 km/h, a car with C_d = 0.30 and A = 2.2 m² experiences roughly 1.5 kN of drag force — consuming approximately 83 kW of engine power purely to overcome air resistance. Reducing C_d from 0.30 to 0.25 saves 17% aerodynamic power at any given speed.",
              "Downforce (negative lift) is generated by inverted wing profiles that accelerate airflow over the lower surface, reducing static pressure (Bernoulli's principle). Front splitters, underbody floor panels, and rear diffusers generate most of a modern racing car's downforce. Formula 1 cars produce over 3–5 kN of downforce at 300 km/h — more than their own weight — allowing corner speeds that would be physically impossible without aerodynamic grip.",
              "Ground effect is the dramatic increase in underbody downforce as the gap between the car floor and the road narrows. The Venturi effect accelerates airflow through the narrowing tunnel, dramatically reducing underbody pressure. Rear diffusers use an expanding tunnel section to gradually decelerate this high-velocity underbody airflow, recovering static pressure without flow separation. The diffuser angle must be kept below the stall angle (typically 7–14°) to prevent boundary layer separation and sudden downforce loss.",
              "Vortex generators (small aerodynamic fences or delta-shaped tabs) are used to energize boundary layers and direct airflow. Front canards generate powerful longitudinal vortices that seal the high-pressure front tyre wake from the low-pressure underbody region. Rear wheel arch venting in modern road cars uses shaped outlets to extract high-pressure trapped air from the wheel arch, reducing lift and preventing turbulent wake from contaminating the rear diffuser.",
              "Computational Fluid Dynamics (CFD) simulations solve the Navier-Stokes equations numerically across tens of millions of mesh cells. Reynolds-Averaged Navier-Stokes (RANS) simulations with k-ω SST turbulence models are standard for external aerodynamic work, taking 2–8 hours per run on a 128-core HPC cluster. Full-scale wind tunnel validation using moving ground belts and rotating wheels remains the gold standard, correlating within 5–10% of CFD predictions for well-resolved mesh cases."
            ]}
          />
        </div>
      </section>

      {/* ADVANCED ENGINE & PROPULSION BREAKTHROUGHS */}
      <section className="content-section alt" style={{ position: "relative", overflow: "hidden" }}>
        <BackgroundOrb />
        <div style={{ position: "relative", zIndex: 2 }}>
          <div className="section-header">
            <label>[ NEXT-GEN PROPULSION ]</label>
            <h2>Hot Engine Technologies &amp; Future Fuels</h2>
            <p>
              Combustion engines are being reimagined as high-efficiency, multi-fuel chemical
              reactors engineered for ultra-lean burn, variable compression, and net-zero carbon fuels.
            </p>
          </div>

          <div className="topic-grid">
            <TopicCard
              num="01 / 06"
              title="Hydrogen Combustion (H2-ICE)"
              summary="Direct-injection hydrogen engines run on green hydrogen fuel at 100–350 bar injection pressures. By eliminating port fuel injection, backfiring and pre-ignition are completely prevented, delivering heavy-duty power output with zero hydrocarbons or CO₂ emissions."
              tags={["HP-DI Direct Injection", "Zero CO₂", "Backfire Mitigation", "High Flame Speed"]}
              content={[
                "Hydrogen internal combustion engines (H2-ICE) burn molecular hydrogen (H₂) instead of hydrocarbons, producing only water vapor (H₂O) and trace NOx as combustion products — zero CO₂, zero particulate matter, zero unburned hydrocarbons. Hydrogen has a wide flammability range (4–75% by volume in air vs. 1.4–7.6% for gasoline), a minimum ignition energy 14x lower than gasoline, and a flame speed 6–8x faster than petrol, enabling ultra-lean combustion with air excess ratios (λ) exceeding 2.5.",
                "The primary challenge in H2-ICE design is preventing pre-ignition and backfire. With such low ignition energy, hydrogen can self-ignite on hot residual combustion products, hot valves, or spark plug electrodes still glowing after firing. High-pressure direct injection (HP-DI) at 200–350 bar injects hydrogen directly into the cylinder after the intake valve closes, eliminating air-hydrogen contact during the intake stroke and completely preventing backfire into the intake manifold.",
                "BMW's Hydrogen 7 and Toyota's GR Yaris H2 development programs demonstrated that H2-ICE engines can be derived from existing petrol architecture with targeted modifications: hardened valve seats, hydrogen-compatible injector materials, positive crankcase ventilation to prevent hydrogen accumulation, and adapted engine management. Output power is typically 15–25% lower than the equivalent petrol engine due to hydrogen's lower volumetric energy density (10.8 MJ/m³ vs. petrol's 34 MJ/m³).",
                "NOx emissions remain the key environmental challenge for H2-ICE. Even though no carbon combustion products exist, diatomic nitrogen (N₂) in air reacts with excess oxygen at temperatures above 1,800°C through the Zeldovich thermal NOx mechanism: N₂ + O → NO + N; N + O₂ → NO + O. Ultra-lean operation (λ > 2.0) reduces peak flame temperature below 1,800°C, suppressing NOx formation by 90%+ compared to stoichiometric combustion.",
                "Green hydrogen for H2-ICE is produced via water electrolysis powered by renewable electricity: 2H₂O → 2H₂ + O₂, requiring approximately 55 kWh of electrical energy per kg of hydrogen produced. At 33.3 kWh/kg lower heating value and typical H2-ICE thermal efficiency of 42–45%, the well-to-wheel energy efficiency is approximately 25–30% — compared to 20–25% for the full BEV pathway using the same renewable electricity through charging losses and motor inefficiency."
              ]}
            />

            <TopicCard
              num="02 / 06"
              title="Pre-Chamber Jet Ignition"
              summary="Derived from Formula 1 powertrains, turbulent jet ignition (TJI) utilizes an auxiliary micro-chamber to ignite an ultra-lean primary charge via high-velocity flame jets. This reduces peak combustion temperatures, slashing engine-out NOx emissions while boosting thermal efficiency past 45%."
              tags={["Turbulent Jet Ignition", "Ultra-Lean Burn (λ > 2)", "NOx Reduction", "F1 Tech Transfer"]}
              content={[
                "Pre-chamber turbulent jet ignition (TJI) is a combustion system where a small auxiliary chamber (0.5–3% of total swept volume) communicates with the main cylinder through a series of orifice holes (1–2 mm diameter). A rich air-fuel mixture is injected directly into the pre-chamber and ignited by a conventional spark plug. The combustion in the pre-chamber generates high-velocity plasma jets through the orifices that simultaneously ignite the ultra-lean main cylinder charge at multiple points.",
                "Multi-point simultaneous ignition is the key advantage of TJI. Conventional single-spark ignition requires the flame front to propagate across the entire cylinder diameter (60–90mm bore) in the available crank angle window — typically 30–50° of crank rotation. With 6–12 pre-chamber jets impinging from all directions, the flame travel distance is reduced by 3–5x, allowing extremely lean mixtures (λ = 2.0–2.5) that would extinguish with conventional ignition to burn completely within the combustion window.",
                "Mercedes-AMG's Formula 1 powerunit achieved 51% indicated thermal efficiency using an active pre-chamber TJI system in their turbocharged 1.6L hybrid PU106 engine. Toyota's 2024 GR Corolla development and multiple passenger car OEM programs target 45–47% brake thermal efficiency (BTE) using passive pre-chamber (no dedicated fuel supply to pre-chamber) TJI systems derived from F1 intellectual property now legal for road car application.",
                "Ultra-lean combustion at λ > 2.0 reduces peak adiabatic flame temperature from ~2,800°C (stoichiometric) to below 1,600°C. The Zeldovich thermal NOx formation rate follows an Arrhenius-type exponential relationship with temperature — dropping below 1,800°C reduces NOx formation by over 90%. This enables pre-catalyst engine-out NOx emissions below 0.05 g/km, potentially allowing compliance with Euro 7 without lean NOx aftertreatment.",
                "The practical implementation challenges of TJI include pre-chamber fouling from lubricant combustion products (critical for long-term durability), the precision manufacturing of sub-millimeter orifice holes with tight positional tolerances, and the need for a dedicated high-pressure direct injector for the pre-chamber in active TJI systems. Active TJI adds cost and complexity but delivers superior lean ignition stability, while passive systems rely on backflow of the main charge into the pre-chamber during compression — simpler but with narrower lean operating limits."
              ]}
            />

            <TopicCard
              num="03 / 06"
              title="Variable Compression Ratio (VCR)"
              summary="Mechanisms dynamically alter piston top-dead-center position in real time, varying the compression ratio anywhere from 8:1 (for extreme turbo boost) up to 14:1 (for light-load cruising and high-octane e-fuels), maintaining peak thermodynamic efficiency across all driving conditions."
              tags={["Multi-Link Crankshaft", "Dynamic CR", "Knock Prevention", "Multi-Fuel Adaptable"]}
              content={[
                "The ideal thermal efficiency of an Otto cycle engine scales with compression ratio: η_thermal = 1 - (1/CR)^(γ-1), where γ is the ratio of specific heats (~1.35 for air-fuel mixtures) and CR is the geometric compression ratio. Increasing CR from 10:1 to 14:1 improves theoretical efficiency from 60% to 66% — a significant thermodynamic gain. However, high CR engines are severely knock-limited under load because peak in-cylinder temperatures and pressures trigger autoignition of the end gas before the flame front arrives.",
                "Infiniti's VC-Turbo engine (QR20DDET) uses a multi-link mechanism where an eccentric actuator arm repositions the lower end of the connecting rod, effectively changing the piston's TDC position by ±3.5 mm. This varies the compression ratio continuously between 8:1 and 14:1 within a single engine revolution cycle. At full throttle with high turbo boost, CR drops to 8:1 to prevent knock; during light highway cruising on premium fuel, CR rises to 14:1 for maximum thermodynamic efficiency.",
                "Alternative VCR architectures include variable piston height designs (pistons with internal hydraulic chambers) and variable head geometry (raising/lowering the combustion chamber roof). Each approach has different packaging constraints, weight penalties, and mechanical complexity tradeoffs. The multi-link approach used by Infiniti adds approximately 8–12 kg to the engine mass and requires significant bottom-end redesign but preserves the conventional cylinder head architecture.",
                "VCR technology is particularly valuable for multi-fuel engines that need to accommodate fuels with widely varying octane numbers. E100 ethanol has a RON of 108–109, tolerating CR of 15:1 without knock. Regular unleaded petrol (RON 91–95) limits CR to 10–11:1 under boost. A VCR engine can automatically set the optimal CR for the detected fuel octane quality, maximizing efficiency regardless of pump fuel availability.",
                "Integration of VCR with cylinder deactivation and 48V mild hybrid systems (EMS48 or P2 belt-starter-generator) creates a powerunit architecture that covers the full efficiency map. Under light city loads: 2 of 4 cylinders active, CR at 14:1, 48V recuperation. Under motorway cruising: all 4 cylinders active, CR at 13:1, engine in its sweet spot. Under wide-open throttle: CR drops to 8:1, full boost, optionally 48V motor assist for a power peak. This strategy demonstrated 15–20% combined cycle fuel economy improvement in Infiniti QX50 fleet testing."
              ]}
            />

            <TopicCard
              num="04 / 06"
              title="Synthetic E-Fuels & Biofuels"
              summary="Synthesized by capturing atmospheric CO₂ and reacting it with green hydrogen, drop-in e-gasoline and e-diesel achieve carbon neutrality without engine modifications. Their high purity and tailored octane ratings enable aggressive spark advance and elevated compression limits."
              tags={["Drop-in Hydrocarbons", "Carbon Neutral", "High Octane", "Circular Economy"]}
              content={[
                "Synthetic e-fuels (electrofuels) are produced via the Power-to-X (PtX) process: renewable electricity drives water electrolysis to produce green hydrogen (H₂), which is then reacted with captured CO₂ through Fischer-Tropsch (FT) synthesis or methanol-to-gasoline processes to produce liquid hydrocarbon fuels. Because the CO₂ used in synthesis is later re-released during combustion, the net atmospheric carbon addition is zero — provided the electricity and CO₂ source are both renewable.",
                "The Fischer-Tropsch reaction converts syngas (CO + H₂) into liquid hydrocarbons: n CO + (2n+1) H₂ → CnH(2n+2) + n H₂O. At temperatures of 150–350°C and pressures of 20–40 bar, iron or cobalt catalysts produce a range of hydrocarbons from methane to waxes. The product distribution is controlled through temperature and catalyst selection to maximize the desired middle distillate (diesel) or naphtha (gasoline precursor) fractions. Post-FT hydrocracking and isomerization then refine the product to diesel or petrol specifications.",
                "E-fuels have several technical advantages over fossil-derived equivalents. Their extremely low sulfur content (near zero) eliminates the main catalyst poisoning agent, potentially extending catalytic converter life. Tailored aromatics content and octane-boosting iso-paraffin composition allows manufacturing to RON 100+ specifications — enabling higher compression ratios and more aggressive spark advance that partially offsets the energy penalty of the PtX production chain.",
                "The energy efficiency of e-fuel production remains the primary challenge. Each step involves conversion losses: electrolysis (70–80% efficient), CO₂ capture and compression, FT synthesis (60–70% efficient), and distillation. Combined well-to-tank efficiency is approximately 35–45%, meaning each unit of renewable electricity delivers only 0.35–0.45 units of energy to the fuel tank — compared to ~90% efficiency charging a BEV. This fundamental physics limits e-fuels to applications where liquid energy storage is essential: aviation, shipping, and racing.",
                "Porsche's Haru Oni e-fuel facility in Patagonia, Chile — launched in 2022 — uses strong Patagonian wind resources to power electrolysis, targeting 55 million liters of e-fuel production annually by 2026. The facility captures CO₂ directly from air using direct air capture (DAC) technology. Projected production cost was initially $10–15 USD/liter but is expected to fall below $2/liter as scale increases — approaching economic competitiveness with premium fossil petrol by 2035 at current learning rates."
              ]}
            />

            <TopicCard
              num="05 / 06"
              title="48V Electric Turbochargers & MGU-H"
              summary="Integrating electric motors directly onto the turbocharger shaft eliminates turbo lag instantaneously within 200 milliseconds. Under sustained exhaust flow, the motor acts as a generator, harvesting waste exhaust enthalpy back into the vehicle electrical grid."
              tags={["e-Turbo", "Exhaust Energy Recovery", "Zero Lag", "48V Architecture"]}
              content={[
                "Turbocharger lag is the delay between the driver demanding more power and the turbocharger spooling up to deliver high boost pressure. In conventional turbos, the compressor rotor must accelerate from low to high speed (50,000–300,000 rpm) using only the kinetic energy of the exhaust gas stream. At low engine speeds with minimal exhaust enthalpy available, this spool-up can take 1.5–3.0 seconds — perceptible as a frustrating power gap before the surge of boost arrives.",
                "An electrically-assisted turbocharger (e-turbo) mounts a compact high-speed electric motor (typically 2–10 kW) directly on the shared compressor-turbine shaft. When the driver demands boost, the 48V motor instantly adds electrical torque to the shaft, accelerating the compressor rotor to full boost speed in under 200 ms regardless of exhaust energy availability. This completely eliminates perceptible turbo lag from cold, delivering the linear, instantaneous torque feel of a naturally aspirated engine combined with the peak power of a heavily boosted one.",
                "In generator mode during sustained high-load driving, the shaft-mounted motor harvests energy from the exhaust turbine. This is thermodynamically valuable because exhaust backpressure (from the turbine) increases pumping losses — by extracting some of this turbine energy electrically rather than mechanically, the turbo can run at lower turbine-entry pressure while still delivering the same boost, reducing engine pumping losses. Mercedes-AMG's Formula 1 Motor Generator Unit-Heat (MGU-H) harvested up to 120 kW from exhaust energy in their championship-winning PU106 powerunit.",
                "48V mild hybrid systems (also called MHEV or Belt-Integrated Starter Generator — BISG/CISG) complement e-turbo operation. The 48V lithium-ion battery (typically 0.5–1 kWh) stores harvested electrical energy for redeployment as motor boost during acceleration or as power for high-load ancillaries (electric compressor, active suspension). Transitioning from 12V to 48V halves the current for the same power delivery, allowing thinner wiring and faster motor torque response.",
                "Road production e-turbo systems are appearing in Audi's SQ7 TDI (using an electrically-driven compressor separate from the main turbo), Garrett's G-Series e-Turbo family, and multiple 2024–2026 program vehicles from Stellantis and BMW. The engineering challenges include bearing system design for high-speed electric motors sharing the turbine oil circuit, thermal management of motor windings in the hot turbine vicinity, and electromagnetic shielding of motor electronics from high-frequency turbocharger vibration."
              ]}
            />

            <TopicCard
              num="06 / 06"
              title="Cylinder Deactivation & Miller Cycle"
              summary="By leaving intake valves open during the initial compression stroke (Miller Cycle) and shutting off fueling and valve motion to idle cylinders, modern engines dramatically lower pumping losses, boosting real-world highway fuel economy by over 15%."
              tags={["Miller / Atkinson", "Pumping Loss Reduction", "Dynamic Skip Fire", "Thermal Management"]}
              content={[
                "The Miller Cycle modifies the standard Otto cycle by closing the intake valve either early (EIVC — Early Intake Valve Closing) or late (LIVC — Late Intake Valve Closing) relative to bottom-dead-center (BDC). In the LIVC strategy, the intake valve remains open for the first portion of the compression stroke, pushing a portion of the intake charge back into the intake manifold. This effectively reduces the actual compression ratio below the geometric ratio while maintaining the full expansion ratio — capturing more work from the combustion gases on the power stroke.",
                "The key thermodynamic advantage is that the Miller Cycle captures an effective expansion ratio greater than its effective compression ratio: η_Miller = 1 - (CR_compression/CR_expansion)^(γ-1). With geometric CR of 13:1 but effective compression CR of 10:1 (due to late intake valve closure) and full expansion CR of 13:1, thermal efficiency exceeds the equivalent Otto cycle. This is essentially what hybrid vehicles exploit in their Atkinson cycle engines — Toyota's 2.5L hybrid four-cylinder achieves 41% BTE using this principle.",
                "Cylinder deactivation (CDA) shuts off fueling and seals both intake and exhaust valves of selected cylinders when full engine power is not required — typically at light highway cruise loads. The deactivated cylinders act as gas springs, compressing and expanding trapped air without fuel consumption, pumping losses, or heat rejection. Modern systems can deactivate individual cylinders on a cycle-by-cycle basis: GM's Dynamic Skip Fire (DSF) technology selects which cylinders fire each cycle based on instantaneous load demand, using active noise cancellation (ANC) through the audio system to suppress the characteristic vibration of uneven firing orders.",
                "The noise, vibration and harshness (NVH) penalty of cylinder deactivation was historically its main barrier to customer acceptance. Single-bank deactivation on V8 engines switching to V4 creates a rough 2-cylinder firing order that generates strong 2nd-order vibrations felt through the powertrain and body. Active engine mounts using electronically-controlled fluid valves that adjust mount stiffness in real time, combined with counterphase vibration cancellation through the driveshaft, have largely solved this problem in modern implementations such as the Porsche 911's cylinder deactivation system.",
                "Combined Miller Cycle plus cylinder deactivation plus 48V e-boost represents the pinnacle of internal combustion efficiency optimization. Under light cruise: 2 cylinders firing in Miller Cycle with 48V generator recuperating. Under moderate load: all 4 cylinders in Miller Cycle. Under full acceleration: conventional Otto Cycle with 48V motor adding peak torque. This multi-modal strategy allows a 2.0L 4-cylinder to deliver the fuel economy of a 1.5L engine while maintaining the performance feel of a 2.5L — effectively shifting the displacement equivalent based on driver demand."
              ]}
            />
          </div>
        </div>
      </section>
    </>
  );
}
