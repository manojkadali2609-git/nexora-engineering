"use client";
import PageHero from "@/app/components/PageHero";
import TopicCard from "@/app/components/TopicCard";
import dynamic from "next/dynamic";

const BackgroundOrb = dynamic(() => import("@/app/components/BackgroundOrb"), { ssr: false });

export default function ElectricMobilityPage() {
  return (
    <>
      <PageHero
        eyebrow="[ ELECTRIC MOBILITY & ELECTROCHEMISTRY ]"
        title="Electrons"
        titleAccent="in High Velocity."
        description="Electric mobility represents a fundamental revolution in propulsion thermodynamics — replacing chemical explosions with direct electromagnetic flux, solid-state wide-bandgap semiconductors, and ultra-fast high-voltage energy storage."
      >
        <BackgroundOrb />
      </PageHero>

      {/* CORE EV ARCHITECTURE */}
      <section className="content-section">
        <div className="section-header">
          <label>[ CORE EV POWERTRAIN ]</label>
          <h2>Electric Propulsion Subsystems</h2>
          <p>
            The foundational technologies powering high-efficiency battery electric vehicles:
            from cell electrochemistry and BMS balancing to multi-phase traction inverters.
          </p>
        </div>

        <div className="topic-grid">
          <TopicCard
            num="01 / 06"
            title="Lithium Chemistries & Cell Formats"
            summary="High-nickel NMC/NCA chemistries deliver gravimetric densities beyond 270 Wh/kg for long-distance range, whereas Lithium Iron Phosphate (LFP) offers superior thermal stability and 3,000+ cycle durability. Cylindrical 4680 formats lower internal resistance via tabless contacts, enabling rapid thermal heat rejection."
            tags={["NMC / LFP", "4680 Tabless", "Gravimetric Density", "Volumetric Efficiency"]}
            content={[
              "Lithium-ion cell chemistry determines the fundamental tradeoffs between energy density, power density, cycle life, thermal stability, and cost. The cathode active material defines most of these tradeoffs: Lithium Nickel Manganese Cobalt Oxide (NMC) in high-nickel formulations (NMC 811: 80% Ni, 10% Mn, 10% Co) achieves gravimetric energy densities of 270–280 Wh/kg at cell level but requires sophisticated thermal management and achieves 1,000–1,500 cycles. Lithium Iron Phosphate (LFP) uses an olivine crystal structure that is inherently resistant to thermal runaway, achieves 3,000–5,000 cycles, but is limited to ~160–200 Wh/kg.",
              "Cell format dramatically affects pack-level energy density and thermal management design. Cylindrical cells (18650: 18mm × 65mm; 21700: 21mm × 70mm; 4680: 46mm × 80mm) have standardized dimensions and excellent structural rigidity but leave 25–30% of pack volume as void space between cells. Prismatic cells (LFP and NMC) fill volume more efficiently (90%+ packing density) with hard aluminum cases but require more complex busbar arrangements. Pouch cells using flexible laminate packaging achieve the highest gravimetric density but are mechanically fragile and require external compression frames.",
              "Tesla's 4680 tabless cell design eliminates the conventional wound foil tabs that connect the jellyroll electrodes to the cell terminals. Traditional tabs create localized current concentration points that cause heat hotspots and limit charge rate. The tabless design uses laser-etched patterns that make the entire top and bottom surfaces of the foil function as the current collector, dramatically reducing internal resistance — Tesla claims 6x higher power delivery and 16% more range per cell volume compared to 2170 cells from the same material.",
              "Electrolyte formulation is as critical as electrode chemistry. Conventional liquid organic electrolytes (LiPF₆ dissolved in ethylene carbonate/dimethyl carbonate mixtures) operate between -20°C and +60°C with ionic conductivity of ~10 mS/cm. High-concentration electrolytes (>3M LiPF₆) and localized high-concentration electrolytes (LHCEs) with fluorinated diluents form better solid-electrolyte-interface (SEI) layers on silicon-graphite anodes, enabling 30–40% higher anode capacity with acceptable cycle life.",
              "Silicon anode technology is the most consequential near-term chemistry advancement. Silicon has a theoretical capacity of 4,200 mAh/g versus graphite's 372 mAh/g, but silicon expands 300% in volume during lithiation (charging), shattering conventional particle structures within 10–20 cycles. Nanostructured silicon (nanowires, porous silicon, silicon-graphite composite particles) limits volume expansion while maintaining high capacity. Current best-in-class production cells (Panasonic NCR, Samsung SDI Gen5) use 5–10% silicon-graphite anode blends achieving 250–280 Wh/kg, with 20–30% silicon targeted by 2027."
            ]}
          />

          <TopicCard
            num="02 / 06"
            title="Battery Management & State Estimation"
            summary="The BMS monitors cell voltages with millivolt precision, running Extended Kalman Filters (EKF) to predict real-time State-of-Charge (SoC) and State-of-Health (SoH). Active inductive balancing shuttles charge between cells, maximizing usable pack capacity and preventing accelerated cell degradation."
            tags={["Extended Kalman Filter", "Active Balancing", "State-of-Health", "Thermal Runaway Mitigation"]}
            content={[
              "The Battery Management System (BMS) is the nervous system of an EV powertrain, performing continuous monitoring, protection, balancing, and state estimation across potentially thousands of individual cells. At the hardware level, a hierarchical BMS architecture divides the pack into modules supervised by Cell Supervisory Circuits (CSCs) that measure individual cell voltages with ±1–2 mV accuracy at 10–100 Hz sampling rates, with thermocouple or NTC thermistor temperature sensors at every 4–8 cells.",
              "State-of-Charge (SoC) estimation is the BMS's most critical real-time computation. Coulomb counting (integrating measured current over time: SoC = SoC_initial - ∫I dt / Q_nominal) accumulates measurement errors over time. Modern BMS algorithms combine coulomb counting with open-circuit voltage (OCV) curve lookup and an Extended Kalman Filter (EKF) that models the electrochemical equivalent circuit of the cell (typically Thevenin or dual-polarization models with 2–4 RC pairs), achieving SoC estimation accuracy of ±1–2% across all operating conditions.",
              "State-of-Health (SoH) quantifies battery degradation over its lifetime: SoH = Q_actual / Q_new × 100%. Degradation mechanisms include lithium inventory loss (irreversible lithium consumed in SEI layer formation and repair), active material loss (particle cracking from volume changes), and electrolyte decomposition. Advanced BMS systems run electrochemical impedance spectroscopy (EIS) periodically to characterize internal resistance growth and capacity fade, feeding degradation models that predict remaining useful life and adjust charging profiles accordingly.",
              "Cell balancing addresses the inevitable variance between individual cell capacities and self-discharge rates within a large pack. Passive balancing dissipates excess energy from higher-voltage cells as heat through resistors — simple but wasteful. Active balancing using switched inductors, capacitors, or DC-DC converters transfers charge from higher-SoC cells to lower-SoC cells with 85–95% efficiency. For a 100 kWh pack with 1% SoC variance between cells, active balancing can recover ~1 kWh of otherwise stranded capacity.",
              "Thermal runaway prevention is the most safety-critical BMS function. Thermal runaway is an exothermic chain reaction initiated by cell overcharge, external short circuit, internal short circuit, or mechanical damage that self-propagates once cell temperature exceeds 130–150°C. The BMS responds in microseconds by disconnecting the main contactors, isolating the affected module, and activating fire suppression. Cell-level fusing, ceramic separator coatings that shut ion transport above 130°C, and physical flame barriers between modules provide passive protection if the BMS response is too slow."
            ]}
          />

          <TopicCard
            num="03 / 06"
            title="Permanent Magnet & Induction Motors"
            summary="Permanent Magnet Synchronous Motors (PMSM) with hairpin winding stators achieve over 97% peak electrical-to-mechanical efficiency. Externally excited synchronous motors (EESM) completely eliminate rare-earth neodymium magnets, allowing variable rotor field weakening for sustained high-speed highway efficiency."
            tags={["PMSM / EESM", "Hairpin Windings", "Flux Weakening", "97% Efficiency"]}
            content={[
              "Electric traction motors convert electrical energy into mechanical torque through electromagnetic force (F = BIL, where B is flux density, I is conductor current, and L is conductor length). Permanent Magnet Synchronous Motors (PMSM) use neodymium-iron-boron (NdFeB) magnets embedded in the rotor to create a constant high-flux field, allowing very high torque density with minimal rotor copper losses. Modern EV PMSMs achieve 5–8 kW/kg continuous power density — 3–5x higher than typical industrial induction motors.",
              "Hairpin winding stators replace conventional random-wound copper wire with pre-formed rectangular copper conductors inserted into stator slots in a precisely defined pattern. Because rectangular conductors fill the slot cross-section with ~70–80% copper (versus 40–55% for round wire with air gaps), slot fill factor improves dramatically, reducing resistance and heat generation. The flat conductor surfaces also improve thermal contact with the stator lamination steel, enabling more aggressive continuous current densities of 15–25 A/mm² versus 8–12 A/mm² for round wire.",
              "Flux weakening is a motor control strategy used at high vehicle speeds where the back-EMF (proportional to rotor speed × flux) would otherwise exceed the inverter voltage supply. By injecting negative d-axis current that opposes the permanent magnet flux, the effective air-gap flux is reduced, lowering back-EMF and allowing continued motor operation above base speed at reduced torque. PMSMs typically operate in flux-weakening mode above 70–120 km/h, with efficiency dropping from peak 97% to 90–94% in deep flux-weakening.",
              "Externally Excited Synchronous Motors (EESM) eliminate permanent magnets entirely, instead using an electromagnet coil wound on the rotor — energized through slip rings or wirelessly via rotary transformers. The rotor excitation current is fully controllable, allowing the flux level to be optimized for every operating point: maximum flux at low speed for peak torque, reduced flux at high speed to minimize iron losses and extend high-speed efficiency. Mercedes-Benz uses EESM in its eATS (electric rear axle drive) units across the EQ family, claiming 10–15% efficiency improvement at highway cruise versus PMSM.",
              "Induction motors (asynchronous motors) use electromagnetically induced currents in a copper or aluminum squirrel-cage rotor to generate torque — no magnets, no slip rings, extremely robust and low-maintenance. Tesla's Model S/X rear motors are induction type, chosen for their peak power capability and simplicity. The tradeoff is higher rotor copper losses (rotor I²R heating) reducing efficiency in continuous highway operation compared to PMSM. Modern Switched Reluctance Motors (SRM) are emerging as a third option — no magnets, no rotor windings, only a salient-pole rotor steel, but require complex current waveform control and suffer from higher torque ripple."
            ]}
          />

          <TopicCard
            num="04 / 06"
            title="Dual-Motor & Torque Vectoring"
            summary="Independent electric motors front and rear deliver millisecond-level torque distribution without mechanical transfer cases. Individual wheel drive enables differential yaw authority, increasing cornering turn-in speed and agility on split-friction ice and tarmac surfaces."
            tags={["Independent e-Axles", "Electronic Differential", "Instant Torque (0 RPM)", "Split-μ Stability"]}
            content={[
              "Dual-motor EV architecture places independent electric drive units at the front and rear axles, each with its own inverter, motor, and single-speed reduction gear. This eliminates the mechanical complexity of a conventional transfer case and propshaft, while enabling true front/rear torque split from 0% front / 100% rear to any distribution in between — updated continuously by the vehicle dynamic controller at 100–1,000 Hz. Physical torque vectoring latency is effectively zero (electrical switching time <1ms) compared to mechanical systems requiring 50–200ms.",
              "Quad-motor architecture goes further, placing individual motors at each wheel through dedicated planetary reduction gears. This gives independent torque control at all four contact patches simultaneously. The yaw moment generated by left-right torque differential: M_yaw = (T_right - T_left) × r_tire / r_reduction. At 100 Nm differential and 0.33m tire radius through a 10:1 reduction, the yaw moment is 330 Nm — equivalent to aggressive steering input, capable of rotating the vehicle on its axis without any steering input at all.",
              "Torque vectoring on split-μ surfaces (one side on ice at μ=0.15, other on dry tarmac at μ=0.85) is where electric torque vectoring dramatically outperforms mechanical systems. Conventional AWD systems detect wheel spin after it occurs, then reduce torque mechanically. Electric torque vectoring can predict the slip event using surface friction estimation algorithms (reading individual wheel deceleration rates, steering angle, and lateral acceleration) and pre-emptively redistribute torque in advance — preventing wheelspin from starting rather than reacting to it.",
              "Regenerative braking torque from the electric motor must be blended with friction brakes in real time. The challenge is that regenerative torque is axle-level (affecting front or rear axle simultaneously) while conventional ABS operates on individual corners. During cornering under braking, the BbW controller must dynamically reduce regenerative braking if the regen torque would cause the inside rear wheel to exceed its adhesion limit — a complex 6-DOF vehicle model running in real time determines the maximum safe regen level moment-by-moment.",
              "Thermal management of multiple drive units in high-performance use is a critical design constraint. Each motor-inverter unit generates waste heat proportional to I²R losses. High-performance EVs on track (Porsche Taycan, Tesla Model S Plaid) use separate coolant circuits for the front motor, rear motor, inverters, and battery, with a central thermal management module (like Porsche's integrated thermal management module — ITMM) routing coolant flow based on individual component temperatures. Without adequate thermal management, peak torque is thermally derated within 5–10 minutes of hard driving."
            ]}
          />

          <TopicCard
            num="05 / 06"
            title="Multi-Level DC Fast Charging"
            summary="CCS2 and NACS (SAE J3400) protocols negotiate high-voltage DC power injection up to 350 kW+. Liquid-cooled charging cables and dynamic temperature derating allow modern packs to ingest 10% to 80% charge in under 18 minutes without risking internal lithium plating."
            tags={["NACS / CCS2", "350 kW DC Fast", "Lithium Plating Prevention", "Cooling Jackets"]}
            content={[
              "DC fast charging bypasses the vehicle's onboard AC-DC charger, delivering high-power DC electricity directly to the battery pack via the Combined Charging System (CCS2 in Europe/Asia, NACS/SAE J3400 in North America). The charger station and vehicle communicate via a Power Line Communication (PLC) protocol overlaid on the pilot signal (ISO 15118-2 or DIN 70121), negotiating maximum voltage, current, and power limits. Modern 350 kW DCFC stations (such as Ionity, Electrify America) support continuous power delivery at up to 500V/700A.",
              "The charging curve (power vs. SoC%) follows a characteristic constant-current / constant-voltage (CC-CV) profile. During CC phase (SoC 10–70% approximately), the BMS accepts maximum current from the charger limited by cell temperature, rate capability, and cable thermal derating. As SoC rises, the BMS transitions to CV phase where voltage is held constant (pack max voltage: ~400V for 400V systems, ~800V for 800V systems) and current tapers exponentially as cells approach full state. The 10–80% charging time is the industry benchmark.",
              "Lithium plating is the primary fast-charge limiting mechanism. During rapid charging, lithium ions are intercalated into graphite anode particles, but if the charge rate exceeds the solid-state diffusion rate within graphite particles, excess lithium deposits as metallic lithium on the anode surface. This is irreversible capacity loss and — critically — metallic lithium dendrites can grow through the separator and cause internal short circuits. BMS algorithms model anode surface potential in real time (using battery equivalent circuit models or electrochemical models) and reduce charge current whenever plating risk is detected.",
              "Liquid-cooled charging cables are essential above 150 kW. At 350 kW / 500V, cable current reaches 700A. For a standard 95mm² copper cable (resistivity: 1.7×10⁻⁸ Ω·m), I²R loss per meter exceeds 740 W/m at 700A — enough to melt conventional insulation within seconds. Liquid-cooled cables circulate dielectric fluid through the cable jacket, removing heat and allowing the conductor cross-section to be reduced to 16–25mm² (vs. 95mm²) — significantly more flexible and lighter. Phoenix Contact and Huber+Suhner supply these systems to major charging networks.",
              "Thermal preconditioning — automatically heating the battery to 25–35°C before arriving at a fast charger — is critical for cold climate performance. Lithium-ion cells at 0°C have ionic conductivity reduced by 60–80% from room temperature, severely limiting maximum charge current and increasing plating risk. Modern EVs (Tesla, Hyundai, Volkswagen) use navigation-aware battery preconditioning that activates heating when the route destination is detected as a DC fast charger, ensuring the pack arrives at optimal temperature for maximum charge rate."
            ]}
          />

          <TopicCard
            num="06 / 06"
            title="Dielectric Immersion & Octovalve Cooling"
            summary="Direct dielectric fluid immersion cooling bathes battery cells in non-conductive synthetic oil, eliminating thermal resistance and cooling cells up to 5x faster than surface cold plates. Integrated multi-way heat pumps scavenge waste heat from inverters to warm the battery in sub-zero winters."
            tags={["Immersion Cooling", "Octovalve Heat Pump", "Waste Heat Scavenging", "Cold Climate Range"]}
            content={[
              "Battery thermal management quality directly determines cell longevity, charge rate capability, and performance consistency. Conventional cold-plate cooling applies a flat aluminum plate with internal coolant channels to the bottom surface of prismatic or pouch cell modules. The thermal resistance pathway from cell core to coolant is: core → cell tab → cell can → thermal interface material (TIM) → cold plate → coolant. Each interface adds resistance; total core-to-coolant ΔT can reach 15–25°C, limiting charge current to stay within safe cell temperature limits.",
              "Dielectric immersion cooling eliminates most of these thermal interfaces by submerging battery cells directly in a non-conductive synthetic ester fluid (such as Shell Diala or Cargill E2 dielectric fluid). The fluid's direct contact with the cell surface provides convective heat transfer coefficients of 300–1,000 W/m²K — compared to 10–50 W/m²K for air cooling and 100–300 W/m²K for cold-plate cooling. This reduces core-to-coolant ΔT to under 5°C, enabling charge rates 3–5x higher than cold-plate equivalents for the same peak cell temperature.",
              "Tesla's Octovalve thermal management architecture (introduced on Model Y) uses an eight-way valve system to continuously reconfigure coolant flow paths based on ambient temperature, drive mode, charging mode, and individual component temperatures. In cold weather, waste heat from the motor inverter and motor windings is routed directly to the battery to accelerate warming before fast charging. In hot weather, the heat pump system rejects heat from the battery to ambient air more efficiently than a conventional resistance heater, achieving a Coefficient of Performance (COP) of 2–3x.",
              "Heat pump technology for EV cabin heating is a major range enabler in cold climates. A conventional electric PTC (positive temperature coefficient) heater converts 1 kWh of battery energy to 1 kWh of cabin heat (COP = 1.0). A heat pump extracts additional heat energy from ambient air (even at -15°C) or motor waste heat, achieving COP = 2.0–3.5 — meaning 1 kWh from the battery delivers 2–3.5 kWh of cabin heat. For a vehicle using 2 kW for cabin heating, this represents 1–1.5 kW saved from the drive battery, increasing cold-weather range by 10–20%.",
              "Phase change materials (PCMs) are emerging as supplemental thermal buffers that absorb heat during peak transient loads (like track driving or fast charging) and release it slowly during lower-load phases. Encapsulated paraffin wax PCM panels integrated between cell modules absorb latent heat during phase change (solid → liquid) at a fixed temperature (28–35°C typical), preventing cell temperature from spiking. The latent heat capacity of paraffin (200 kJ/kg) allows significant thermal energy absorption with no temperature rise — effectively acting as a thermal shock absorber for the active liquid cooling system."
            ]}
          />
        </div>
      </section>

      {/* CUTTING-EDGE EV BREAKTHROUGHS */}
      <section className="content-section alt" style={{ position: "relative", overflow: "hidden" }}>
        <BackgroundOrb />
        <div style={{ position: "relative", zIndex: 2 }}>
          <div className="section-header">
            <label>[ HIGH-VOLTAGE &amp; SOLID STATE ]</label>
            <h2>800V Platforms, SiC Inverters &amp; Solid-State</h2>
            <p>
              The next generation of electric propulsion is defined by wide-bandgap semiconductors,
              doubled operating voltages, and solid-state electrolyte breakthroughs.
            </p>
          </div>

          <div className="topic-grid">
            <TopicCard
              num="01 / 06"
              title="800V & 900V High-Voltage Architecture"
              summary="Doubling the nominal pack bus from 400V to 800V+ cuts current in half for the same power delivery (P = V × I). Because Joule heating losses scale quadratically with current (I²R), 800V architectures drastically reduce wiring harness thickness and heat buildup while unlocking 350+ kW charge rates."
              tags={["I²R Loss Reduction", "800V Bus", "Thinner Copper Cabling", "Sub-15m Charging"]}
              content={[
                "The fundamental physics behind 800V architecture is Joule's law: P_loss = I²R. For the same power delivery (P = V × I), doubling voltage halves current. The I² relationship means losses reduce to 25% — a 4x improvement in resistive loss for the same conductor cross-section. For a 300 kW drivetrain: at 400V, current = 750A; at 800V, current = 375A. At 50 mΩ total harness resistance, Joule losses reduce from 28 kW (400V) to 7 kW (800V) — a 21 kW reduction in wasted heat generation.",
                "Wiring harness mass reduction is a substantial secondary benefit. Using I²R analysis to target the same heat dissipation limit, 800V systems can use copper conductors with ¼ the cross-sectional area of equivalent 400V systems. The main high-voltage harness in a 400V vehicle uses 95–120mm² orange high-voltage cable; 800V equivalents can use 25–35mm² cable — significantly lighter and easier to route. Porsche estimates 30 kg of harness weight reduction in the Taycan versus a hypothetical 400V version.",
                "The Hyundai E-GMP platform (Ioniq 5/6/7, Kia EV6/EV9) pioneered mass-market 800V architecture with a key innovation: a multi-pulse boost converter that can accept charging from 400V CCS stations by doubling the charger voltage internally. This eliminates the chicken-and-egg problem of needing widespread 800V charger infrastructure before 800V vehicles make sense. The boost converter operates at 150 kHz using SiC MOSFETs with <0.5% conversion loss.",
                "High-voltage insulation and arc management become more critical at 800V+. Partial discharge inception voltage (PDIV) in motor winding insulation must be validated above the peak transient voltage (nominally 1,200–1,400V for 800V systems during regeneration spikes). Inverter switching transients (dV/dt rates of 15–50 kV/μs with SiC) can cause voltage reflections on motor cables that double the peak winding voltage. This drives requirements for inverter output filters, specific cable impedance matching, and motor winding insulation rated to UL/IEC Class H (180°C) with enhanced partial discharge resistance.",
                "Porsche Taycan's 800V system demonstrated the full consumer benefit: 270 kW peak charging power, 10–80% charge in 22.5 minutes, sustained lap times on the Nürburgring without thermal derating — impossible for comparable 400V competitors. The Taycan's 400V accessory systems (HVAC, 12V power supply, low-voltage electronics) are served by a bidirectional DC-DC converter stepping down from the main 800V bus, eliminating the need for separate 400V sub-packs."
              ]}
            />

            <TopicCard
              num="02 / 06"
              title="Silicon Carbide (SiC) Power Inverters"
              summary="Wide-bandgap Silicon Carbide (SiC) MOSFETs replace legacy Silicon IGBT switches in motor inverters. Operating at switching frequencies exceeding 20 kHz with minimal switching losses, SiC increases overall EV powertrain driving range by 5% to 10% from the exact same battery capacity."
              tags={["Wide-Bandgap (WBG)", "SiC MOSFETs", "Higher Thermal Limits", "Range Expansion"]}
              content={[
                "Silicon Carbide is a wide-bandgap (WBG) semiconductor with a bandgap energy of 3.26 eV — 3x that of silicon (1.12 eV). This wider gap allows SiC devices to operate at much higher electric fields (10x silicon), higher temperatures (600°C junction temperature vs. 150°C for silicon IGBT), and much higher switching frequencies with proportionally lower switching energy losses. These properties make SiC MOSFETs the ideal switching device for high-frequency, high-voltage, high-temperature motor drive inverters.",
                "In an EV inverter, switching losses (E_switch = ½ × V × I × (t_on + t_off) × f_sw) dominate total losses at high operating voltage. Silicon IGBTs switch with turn-on and turn-off times of 0.5–2 μs, limiting practical switching frequencies to 5–15 kHz before switching losses become excessive. SiC MOSFETs switch in 50–100 ns, enabling 20–100 kHz without disproportionate loss increase. Higher switching frequency allows smaller, lighter passive filter components (inductors and capacitors) in the inverter output stage.",
                "The practical range benefit is quantified through reduction in total drive cycle inverter losses. A typical 150 kW EV traction inverter with Si IGBTs at 400V / 20 kHz has approximately 2–3 kW of continuous conduction and switching losses under typical highway load. SiC equivalent reduces this to 1–1.5 kW — saving ~1–1.5 kW continuously on highway. Over a 400 km highway drive at 150 Wh/km consumption (60 kWh total), this 1 kW loss reduction represents 1–1.5 kWh recovered — roughly 7–10 km of additional range (5–7% improvement) from the same battery pack.",
                "Thermal management of SiC inverters is simplified by their higher operating temperature tolerance. Silicon IGBT modules require junction temperature below 150°C with dedicated low-temperature (65°C) coolant loops. SiC MOSFETs can tolerate junction temperatures of 200°C, enabling integration into the same high-temperature (90–105°C) cooling loop as the motor — eliminating a separate low-temperature coolant circuit and its associated pumps, radiators, and plumbing. Tesla uses a unified thermal management approach in Model 3/Y SiC powertrains.",
                "Cost remains the main barrier to universal SiC adoption. SiC wafers are grown by Physical Vapor Transport (PVT) in long processes (1–2 weeks per boule) and require specialized epitaxial deposition equipment, making raw wafer cost 3–5x higher than silicon for equivalent die area. As of 2024, automotive-grade SiC MOSFET modules cost 2–3x equivalent Si IGBT equivalents. Manufacturing investments by STMicroelectronics, Wolfspeed, Onsemi, and Infineon are expanding SiC wafer capacity from 150mm to 200mm substrates, expected to reduce cost parity with silicon to 1.5–2x by 2027."
              ]}
            />

            <TopicCard
              num="03 / 06"
              title="All-Solid-State Batteries (ASSB)"
              summary="Replacing volatile liquid organic electrolytes with solid ceramic or sulfide separators unlocks pure lithium-metal anodes. Solid-state cells target gravimetric densities past 400 Wh/kg, eliminate thermal runaway risks, and facilitate 10-minute ultra-fast charging without dendrite penetration."
              tags={["Lithium Metal Anode", "Sulfide Electrolytes", "400+ Wh/kg", "Zero Fire Risk"]}
              content={[
                "All-Solid-State Batteries (ASSBs) replace the liquid organic electrolyte with a solid ionic conductor — typically inorganic ceramics (oxide-based: LLZO — Li₇La₃Zr₂O₁₂), sulfides (LGPS — Li₁₀GeP₂S₁₂, Argyrodite Li₆PS₅Cl), or polymers (PEO-based). The solid electrolyte simultaneously functions as both the ion transport medium (like liquid electrolyte) and the physical separator between anode and cathode — eliminating one component versus conventional cells.",
                "The primary motivation for ASSB is enabling pure lithium-metal anodes. The theoretical capacity of lithium metal is 3,860 mAh/g — 10x higher than graphite. In conventional liquid electrolyte cells, lithium metal anodes fail rapidly because metallic lithium deposits non-uniformly as dendrites during charging — sharp lithium spikes that penetrate the porous polymer separator and cause internal short circuits. A rigid, fully dense solid electrolyte physically suppresses dendrite growth by providing uniform mechanical resistance across the entire anode-electrolyte interface.",
                "ASSB energy density at the cell level is projected at 350–500 Wh/kg (compared to 250–280 Wh/kg for best current liquid cells). At the pack level, solid-state cells may also enable bipolar stacking — a configuration where the cathode of one cell is deposited directly on the shared current collector of the anode of the adjacent cell. Bipolar stacking eliminates individual cell metal casings, tabs, and busbars, potentially achieving pack-level energy densities of 400+ Wh/kg versus ~180–200 Wh/kg for today's EV battery packs.",
                "The key technical challenges are: (1) solid electrolyte ionic conductivity: best sulfide electrolytes reach 25 mS/cm at room temperature — approaching liquid electrolyte levels, but oxide ceramics are 10–100x lower, limiting charge/discharge rate. (2) Mechanical compatibility: volume change of active material during cycling (graphite: 10%, silicon: 300%, Li-metal: variable) causes delamination at the rigid solid-solid interface, increasing contact resistance over cycles. (3) Manufacturing scalability: vacuum dry-room processing, high-pressure stack assembly, and thin-film deposition techniques required for solid electrolyte layers all increase manufacturing complexity and cost versus conventional cell production.",
                "Toyota aims to commercialize solid-state batteries in automotive applications by 2027–2028, targeting 1,200 km range on a single charge at under 10-minute fast charging from their sulfide-based ASSB platform. QuantumScape (backed by Volkswagen) has demonstrated single-layer pouch cells at automotive operating temperatures with 1,000-cycle durability in its anode-free lithium-metal format using a proprietary oxide ceramic separator. Solid Power, Samsung SDI, Panasonic, and Hyundai are all in advanced pilot production stages as of 2024."
              ]}
            />

            <TopicCard
              num="04 / 06"
              title="Cell-to-Chassis (CTC) Structural Packs"
              summary="Eliminating discrete cell modules and battery enclosures, Cell-to-Chassis (CTC) and Cell-to-Body (CTB) integrate battery cells directly as structural load-bearing members of the vehicle monocoque. This increases structural torsional rigidity past 40,000 Nm/deg while reducing curb weight."
              tags={["Cell-to-Pack (CTP)", "Cell-to-Chassis (CTC)", "Torsional Rigidity", "Weight Optimization"]}
              content={[
                "The evolution of EV battery packaging follows a clear trajectory toward integration: Cell → Module → Pack (conventional, pre-2015); Cell → Pack, CTP (2017–2022, eliminating module layer); Cell → Body/Chassis, CTB/CTC (2022+, eliminating separate pack enclosure). Each step removes structural redundancy — conventional packs have cells in module housings, those in a module frame, that frame in a pack enclosure, that enclosure bolted to the vehicle floor — four levels of structure each carrying the same load.",
                "In Cell-to-Pack (CTP) architecture (pioneered by CATL and BYD around 2017–2019), individual cell modules are eliminated. Cells are arranged directly in the pack with structural foam or spacer elements between them, the pack lid/base providing all structural support. This increases volumetric energy density of the pack by 10–15% (more cells, less module hardware volume) and reduces part count by 40%. CATL's Qilin CTP 3.0 battery achieves 255 Wh/kg at pack level — the highest of any commercially available pack.",
                "Cell-to-Body (CTB) goes further: Tesla's Model Y 4680 platform integrates the structural battery pack as a stressed member of the vehicle underbody. The pack lid is bonded to the vehicle floor stampings; the pack base serves as the lower floor panel; the cells themselves are bonded with structural adhesive between lid and base. Removing the separate floor pan stampings reduces parts by ~370 unique components. The combined structure achieves a torsional rigidity exceeding 40,000 Nm/degree — stiffer than any conventional steel monocoque.",
                "BYD's Cell-to-Chassis (CTC) Blade Battery architecture (Ocean series vehicles) integrates LFP prismatic blade cells as internal cross-members of the vehicle floor. The long, thin blade cells span laterally across the vehicle width, their cell walls functioning as structural ribs that resist vertical and lateral loads in the vehicle body. This architecture is particularly well-suited to LFP cells whose flat plate format and inherent safety (no thermal runaway risk) make structural integration lower-risk than NMC equivalent.",
                "The repairability and end-of-life challenges of integrated structural batteries are significant. When a cell is structurally bonded to the vehicle body, replacing individual damaged cells requires destructive disassembly of the vehicle floor. This drives insurance write-off decisions in minor accidents that previously would be repairable. Second-life battery use is complicated by structural adhesive removal. The industry is developing heat-activated debonding adhesives and standardized repair protocols to address these concerns while retaining the structural integration benefits."
              ]}
            />

            <TopicCard
              num="05 / 06"
              title="Bidirectional V2G & Microgrids"
              summary="Vehicle-to-Grid (V2G) and Vehicle-to-Home (V2H) systems turn EV fleets into distributed power plants. Equipped with bidirectional onboard inverters conforming to ISO 15118-20, vehicles buffer intermittent solar/wind grids, feeding stored energy back into municipal power grids during peak-demand price spikes."
              tags={["ISO 15118-20", "V2G / V2H / V2L", "Peak Shaving", "Virtual Power Plants"]}
              content={[
                "Vehicle-to-Grid (V2G) technology enables EV batteries to function as distributed grid energy storage, discharging back into the electrical grid during peak demand and recharging during off-peak surplus renewable generation. The aggregate storage capacity of a large EV fleet is enormous: 10 million EVs with 60 kWh usable V2G capacity each represent 600 GWh of distributed storage — comparable to the entire pumped-hydro storage capacity of several European countries combined.",
                "ISO 15118-20 (published 2022) standardizes bidirectional power flow communication between vehicle and charging infrastructure using the same PLC protocol stack as conventional DC fast charging. The vehicle's BMS and the charging station negotiate V2G operating parameters: maximum discharge power, minimum SoC reserve, discharge schedule (time windows), and pricing signals. The standard supports both AC V2G (bidirectional onboard charger) and DC V2G (bidirectional DC-DC converter within the charging station).",
                "Vehicle-to-Home (V2H) uses the EV as a household backup power supply and solar energy buffer without grid export. During a grid outage, the V2H inverter isolates the home from the grid and powers critical loads (lighting, refrigeration, medical devices) from the EV battery. A 60 kWh EV battery powering a 1 kW average household load provides 60 hours of backup power. When paired with rooftop solar, the EV battery stores midday solar surplus and discharges in the evening — a home energy management function worth $3,000–8,000 in standalone stationary battery cost.",
                "The economic model for V2G relies on energy arbitrage (charging at €0.05/kWh overnight, discharging at €0.35/kWh peak) and grid services revenue (frequency regulation, spinning reserve). Grid frequency regulation requires very fast power response (<1 second): EV batteries respond in <100 ms — far faster than conventional gas peaker plants. Aggregated V2G fleets managed by virtual power plant (VPP) operators (such as Nuvve, OhmConnect, and Jedlix) provide grid balancing services and share revenue with vehicle owners.",
                "Battery degradation from V2G cycling is the primary concern for vehicle owners. Each additional V2G discharge cycle adds to cumulative battery aging beyond the standard drive cycle wear. Studies (Argonne National Laboratory, 2023) using empirical degradation models show V2G accelerates capacity fade by approximately 1–3% per additional 100 full-equivalent V2G cycles — manageable if V2G use is bounded to 1–2 cycles/week. Next-generation LFP solid-state batteries with 5,000+ cycle life will make V2G degradation essentially negligible, unlocking the full potential of vehicle-integrated grid storage."
              ]}
            />

            <TopicCard
              num="06 / 06"
              title="Megawatt Charging System (MCS)"
              summary="Designed for heavy-duty electric commercial trucking, the Megawatt Charging System standard operates at up to 1,250 volts and 3,000 amps, delivering peak charging powers of up to 3.75 megawatts. Automated conductive robotic couplers allow massive Class 8 trucks to replenish 400 kWh in 30 minutes."
              tags={["1,250V / 3,000A", "3.75 MW Peak", "Commercial Haulage", "Robotic Charging"]}
              content={[
                "The Megawatt Charging System (MCS) is defined by the CharIN consortium (SAE J3271 / IEC 62196-6) specifically for heavy commercial vehicle electrification. Class 8 semi-trucks (like Tesla Semi, Freightliner eCascadia, Volvo FH Electric) carry battery packs of 500–1,000 kWh to achieve 400–800 km range under full load — 10–15x the energy capacity of passenger EVs. Recharging these packs at passenger EV charge rates (50–350 kW) would require 2–10 hours, destroying the commercial viability of electric long-haul trucking.",
                "MCS operates at up to 1,250 V DC and 3,000 A, enabling theoretical peak power of 3.75 MW. At this power level, a 1,000 kWh truck battery could theoretically charge at a 3.75C rate — recharging from 20% to 80% in approximately 13 minutes. Practical initial deployments target 1,200V / 1,500A (1.8 MW) as a phased rollout, still delivering 20–80% charge on a 400 kWh pack in under 20 minutes — compatible with legally mandated 45-minute rest breaks for professional truck drivers.",
                "The electrical engineering challenges of MCS are extreme. At 3,000A through a 25mm² connector pin, current density approaches material limits — specialized copper-silver alloy contacts and liquid-cooled connector internals are required to prevent thermal failure. The MCS connector is physically much larger than CCS (comparable to a heavy industrial connector) and requires a locking mechanism rated for the substantial electromagnetic forces at maximum current. Cable liquid cooling is mandatory — the charging cable carries 3,000A through actively cooled conductors.",
                "Automated robotic charging is essential for MCS at commercial truck depots. A tired truck driver manually connecting a 50 kg, water-cooled MCS cable is impractical and a safety concern. Robotic coupler systems use computer vision and robotic arms to automatically locate the truck's charge port, connect the MCS plug, lock it, initiate charging, and disconnect — all without driver involvement. The truck simply parks in a marked bay and the robot does the rest. This also enables opportunity charging during loading/unloading without driver intervention.",
                "Grid infrastructure for MCS is a major deployment challenge. A single 3.75 MW MCS charger draws more power than a large commercial building. A truck stop with 10 MCS bays simultaneously charging requires 37.5 MW of utility-grade supply — equivalent to powering a small town. On-site battery buffer storage (stationary Megapack or similar systems), on-site solar generation, and demand management systems are essential to avoid grid reinforcement costs that would otherwise make MCS deployment prohibitively expensive."
              ]}
            />
          </div>
        </div>
      </section>
    </>
  );
}
