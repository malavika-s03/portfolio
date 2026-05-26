import { motion } from 'framer-motion';
import { journeyStages, competitors, competitorRowLabels } from './data';

const CYAN = '#22bddc';
const BASE_URL = import.meta.env.BASE_URL || '/';

export function YuluCaseStudyPage() {
  return (
    <main 
      className="min-h-screen"
      style={{ 
        backgroundColor: '#ffffff',
        colorScheme: 'light',
        maxWidth: '2560px',
        margin: '0 auto'
      }}
    >
      <div className="light-theme">
        <HeroSection />
        <UserJourneySection />
        <BlackSection />
        <FeatureComparisonSection />
        <YuluStrengthsSection />
        <FinalDesignSection />
      </div>
    </main>
  );
}

function HeroSection() {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* 
        Proportional Layout - Always two columns, scales with viewport
        Figma: 1512px frame
        - Left col: 54.3%, Right col: 45.7%
        - All values in vw for uniform scaling
      */}
      <div className="flex flex-row relative">
        {/* Left Content - 54.3% */}
        <div 
          className="w-[52.27vw] shrink-0"
          style={{ 
            paddingLeft: '2.66vw',
            paddingTop: '4.22vw'
          }}
        >
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-extrabold text-black"
            style={{
              fontSize: '7.5vw',
              lineHeight: 'normal',
              maxWidth: '50.47vw'
            }}
          >
            YULU - UX Study
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ maxWidth: '48.13vw', marginTop: '3.59vw' }}
          >
            <h2
              className="font-bold text-black"
              style={{
                fontSize: '1.875vw',
                lineHeight: 'normal',
                marginBottom: '0.4vw'
              }}
            >
              Introduction
            </h2>
            <p
              className="font-medium text-black"
              style={{
                fontSize: '1.5625vw',
                lineHeight: 'normal'
              }}
            >
              This user research project focused on studying and redesigning the Yulu app through primary research methods like contextual enquiry and usability testing, supported by secondary research including heuristic evaluation and competitor analysis. The insights gathered helped identify usability issues and informed a redesign proposal to improve the overall user experience.
            </p>
          </motion.div>
        </div>
        
        {/* Right Image - 45.7% */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-[47.73vw] shrink-0"
        >
          <img 
            src={`${BASE_URL}images/yulu/hero-image.jpg`}
            alt="YULU UX Study" 
            className="w-full h-auto"
            style={{ aspectRatio: '611/433' }}
          />
        </motion.div>

        {/* Decorative perspective lines */}
        {[738, 811, 894, 972, 1085, 1178, 1268].map((xPos, i) => (
          <div
            key={`line-${i}`}
            className="absolute"
            style={{
              left: `${(xPos / 1280) * 100}vw`,
              top: '33.83vw',
              width: '1px',
              height: '10.47vw',
              backgroundColor: '#d1d5db',
            }}
          />
        ))}
      </div>
    </section>
  );
}

function UserJourneySection() {
  /*
    FIGMA SPECS (verified from MCP):
    ════════════════════════════════════════════════════════════════
    DIMENSIONS:
    - Label column: 188px = 12.43vw
    - Data cells: 229×96px = 15.14vw × 6.35vw  
    - Gap: 13px = 0.86vw
    - Border-radius: 8px = 0.53vw
    - Diamond: ~8px = 0.53vw
    
    COLORS:
    - Label cells: #000000 (black)
    - Data cells: #ffffff, border #c8c4c4
    - Diamond: #22bddc
    
    ARCHITECTURE:
    ┌─────────────────────────────────────────────────────────────┐
    │ [STICKY LABELS] │ [SCROLLABLE DATA CELLS + DIAMONDS]       │
    │                 │                                           │
    │  ┌───────┐      │  ┌───────┐◆┌───────┐◆┌───────┐           │
    │  │ Stage │      │  │Cell 0 │ │Cell 1 │ │Cell 2 │ ...       │
    │  └───────┘      │  └───────┘◆└───────┘◆└───────┘           │
    │       ◆         │       ◆        ◆        ◆                │
    │  ┌───────┐      │  ┌───────┐◆┌───────┐◆┌───────┐           │
    │  │ Row 1 │      │  │       │ │       │ │       │ ...       │
    │  └───────┘      │  └───────┘◆└───────┘◆└───────┘           │
    └─────────────────────────────────────────────────────────────┘
    ════════════════════════════════════════════════════════════════
  */
  
  const LABEL_W = 14.69;
  const CELL_W = 17.89;
  const CELL_H = 7.5;
  const GAP = 1.02;
  const DIAMOND = 0.78;
  
  const labels = ['Stage', 'Customer\nthoughts', 'Actions', 'Experience/\nEmotions', 'Touchpoint', 'Environment'];
  const numCols = journeyStages.length;
  
  return (
    <section className="w-full bg-white" style={{ paddingTop: '4.79vw', paddingBottom: '3vw' }}>
      <div style={{ paddingLeft: '2.66vw' }}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-medium text-black"
          style={{ fontSize: '3.125vw', lineHeight: 'normal', marginBottom: '2vw' }}
        >
          User Journey Mapping
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex">
            {/* STICKY LABEL COLUMN with its own diamonds */}
            <div 
              className="shrink-0 z-20 bg-white relative"
              style={{ position: 'sticky', left: 0 }}
            >
              <div className="flex flex-col" style={{ gap: `${GAP}vw` }}>
                {labels.map((label, rowIdx) => (
                  <div 
                    key={rowIdx}
                    className="flex items-center justify-center"
                    style={{ 
                      width: `${LABEL_W}vw`, 
                      height: `${CELL_H}vw`, 
                      backgroundColor: '#000000',
                      borderRadius: '0.53vw'
                    }}
                  >
                    <span 
                      className="font-bold text-center text-white leading-tight whitespace-pre-line"
                      style={{ fontSize: '1.5625vw' }}
                    >
                      {label}
                    </span>
                  </div>
                ))}
              </div>
              
              {/* Diamonds on right edge of label column (between label and first data col) */}
              {Array.from({ length: labels.length - 1 }).map((_, rowGap) => {
                const y = (rowGap + 1) * (CELL_H + GAP) - GAP / 2;
                return (
                  <div
                    key={`label-d${rowGap}`}
                    className="absolute rotate-45"
                    style={{
                      width: `${DIAMOND}vw`,
                      height: `${DIAMOND}vw`,
                      backgroundColor: CYAN,
                      right: `-${GAP / 2 + DIAMOND / 2}vw`,
                      top: `${y - DIAMOND / 2}vw`,
                      zIndex: 30
                    }}
                  />
                );
              })}
            </div>
            
            {/* SCROLLABLE DATA AREA */}
            <div 
              className="overflow-x-auto"
              style={{ 
                marginLeft: `${GAP}vw`,
                scrollbarWidth: 'thin', 
                scrollbarColor: '#c8c4c4 #f5f5f5' 
              }}
            >
              <div className="relative">
                {/* Data Grid */}
                <div className="flex flex-col" style={{ gap: `${GAP}vw` }}>
                  {labels.map((_, rowIdx) => (
                    <div key={rowIdx} className="flex" style={{ gap: `${GAP}vw` }}>
                      {journeyStages.slice(0, numCols).map((stage, colIdx) => {
                        const values = [stage.stage, stage.thought, stage.action, stage.emotion, stage.touchpoint, stage.environment];
                        const isHeader = rowIdx === 0;
                        
                        return (
                          <div 
                            key={colIdx}
                            className="flex items-center justify-center shrink-0"
                            style={{ 
                              width: `${CELL_W}vw`, 
                              height: `${CELL_H}vw`, 
                              backgroundColor: '#ffffff',
                              border: '1px solid #c8c4c4',
                              borderRadius: '0.53vw'
                            }}
                          >
                            <span 
                              className={`text-center leading-tight ${isHeader ? 'font-bold' : ''}`}
                              style={{ 
                                fontSize: isHeader ? '1.5625vw' : '1.25vw',
                                color: '#000000'
                              }}
                            >
                              {values[rowIdx]}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  ))}
                </div>
                
                {/* Diamonds between data columns (at cell intersections) */}
                {Array.from({ length: labels.length - 1 }).map((_, rowGap) =>
                  Array.from({ length: numCols - 1 }).map((_, colGap) => {
                    // Position at right edge of cell colGap, centered in the gap
                    const x = (colGap + 1) * CELL_W + colGap * GAP + GAP / 2;
                    const y = (rowGap + 1) * (CELL_H + GAP) - GAP / 2;
                    
                    return (
                      <div
                        key={`d${rowGap}-${colGap}`}
                        className="absolute rotate-45"
                        style={{
                          width: `${DIAMOND}vw`,
                          height: `${DIAMOND}vw`,
                          backgroundColor: CYAN,
                          left: `${x - DIAMOND / 2}vw`,
                          top: `${y - DIAMOND / 2}vw`,
                          zIndex: 10
                        }}
                      />
                    );
                  })
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function BlackSection() {
  /*
    FIGMA ABSOLUTE COORDS (1280×1500px frame, all positions from MCP metadata):
    - Heuristic title: x=58, y=43
    - Heuristic body: x=58, y=169, w=320
    - Radar chart: x=502, y=82, w=778, h=489
    - Usability hand+text: x=-15, y=470, w=591, h=483
    - Usability text 1: x=634, y=683, w=589
    - Usability text 2: x=638, y=838, w=581
    - Contextual title: x=46, y=1012
    - Contextual body: x=46, y=1119, w=564
    - Scooter: overflows right, y=989, w=800, h=567
  */

  const T = '3.125vw';   // 40px title
  const B = '1.5625vw';  // 20px body
  const C = '#fffefe';

  return (
    <section
      className="w-full relative overflow-hidden"
      style={{ backgroundColor: '#000000', height: '117.19vw' }}
    >
      {/* Heuristic title: x=58, y=43 */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="absolute font-medium"
        style={{ left: '4.53vw', top: '3.36vw', fontSize: T, lineHeight: 'normal', color: CYAN }}
      >
        Heuristic Evaluation
      </motion.h2>

      {/* Heuristic body: x=58, y=169, w=320 */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="absolute font-medium"
        style={{ left: '4.53vw', top: '10.86vw', width: '31.02vw', fontSize: B, lineHeight: 'normal', color: C }}
      >
        A heuristic evaluation of the redesigned Yulu app identified usability issues such as lack of system feedback, inconsistent terminology, and unclear icon usage. These insights guided improvements in navigation, interface clarity, and overall user experience.
      </motion.p>

      {/* Radar chart image: x=502, y=82, w=778, h=489 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="absolute"
        style={{ left: '39.22vw', top: '6.41vw', width: '60.78vw' }}
      >
        <img
          src={`${BASE_URL}images/yulu/radar-chart.png`}
          alt="Heuristic Evaluation Radar Chart"
          className="w-full h-auto"
        />
      </motion.div>


      {/* Usability hand+text (exported asset): x=-15, y=470, w=591, h=483 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="absolute"
        style={{ left: '-1.17vw', top: '36.72vw', width: '46.17vw' }}
      >
        <img
          src={`${BASE_URL}images/yulu/usability-hand.png`}
          alt="Usability test - paper prototype"
          className="w-full h-auto"
        />
      </motion.div>

      {/* Usability text 1: x=634, y=683, w=589 */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="absolute font-medium"
        style={{ left: '49.53vw', top: '53.36vw', width: '46.02vw', fontSize: B, lineHeight: 'normal', color: C, zIndex: 2 }}
      >
        Usability testing with paper prototypes was conducted to evaluate the redesigned Yulu app during the early design stage. Participants were asked to perform key tasks such as booking a ride, accessing support, and finding transaction details using low-fidelity paper screens.
      </motion.p>

      {/* Usability text 2: x=638, y=838, w=581 */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="absolute font-medium"
        style={{ left: '49.84vw', top: '65.47vw', width: '45.39vw', fontSize: B, lineHeight: 'normal', color: C, zIndex: 2 }}
      >
        The testing revealed issues related to booking clarity, cognitive overload, and feature discoverability. Feedback led to improvements such as adding a booking progress bar, relocating the coupon feature to the payment stage, improving visibility of balance and transaction history, and providing clearer location and vehicle condition information.
      </motion.p>

      {/* Contextual title: x=46, y=1012 */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="absolute font-medium"
        style={{ left: '3.59vw', top: '79.06vw', fontSize: T, lineHeight: 'normal', color: CYAN }}
      >
        contextual Enquiry
      </motion.h2>

      {/* Contextual body: x=46, y=1119, w=564 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="absolute font-medium"
        style={{ left: '3.59vw', top: '87.42vw', width: '44.06vw', fontSize: B, lineHeight: 'normal', color: C }}
      >
        <p style={{ margin: 0 }}>
          Contextual enquiry for the Yulu app was conducted with first-time, occasional, and frequent users performing real-world tasks such as booking rides, scanning QR codes, accessing support, and managing payments.
        </p>
        <p style={{ margin: '1em 0 0' }}>Key Learnings</p>
        <p style={{ margin: '1em 0 0' }}>
          The study revealed issues related to unclear onboarding, confusing ride options, lack of system feedback, QR scanning difficulties, inaccurate bike information, and unclear pricing. Users also highlighted the need for better support, improved accessibility, clearer vehicle condition details, and more reliable navigation and payment experiences.
        </p>
      </motion.div>

      {/* Scooter: pinned to right edge, sized to fit within section */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="absolute"
        style={{ right: '5vw', top: '77.27vw', width: '52vw', zIndex: 1 }}
      >
        <img
          src={`${BASE_URL}images/yulu/contextual-scooter.png`}
          alt="Yulu Electric Scooter Illustration"
          className="w-full h-auto"
        />
      </motion.div>
    </section>
  );
}


function FeatureTable() {
  const rowKeys: (keyof typeof competitors[0])[] = [
    'poweredBy', 'batterySwap', 'range', 'gpsTracking', 'lockSystem', 'rating', 'availability',
  ];

  const highlightRows = [1, 3, 5];
  const HIGHLIGHT_BG = '#e6f7f9';
  const BORDER_COLOR = 'rgba(34, 189, 220, 0.3)';

  function renderCell(value: string | boolean, key: string) {
    if (typeof value === 'boolean') {
      return value ? (
        <span style={{ color: CYAN, fontSize: '1.4vw' }}>✓</span>
      ) : (
        <span style={{ color: '#9ca3af', fontSize: '1.4vw' }}>✗</span>
      );
    }
    if (key === 'range' && value === '') {
      return <span style={{ color: '#9ca3af', fontSize: '1.4vw' }}>✗</span>;
    }
    return <span style={{ fontSize: '1.1vw', color: '#374151' }}>{value}</span>;
  }

  return (
    <table
      style={{
        width: '100%',
        borderCollapse: 'collapse',
        fontFamily: 'Inter, system-ui, sans-serif',
      }}
    >
      <thead>
        <tr>
          <th style={{ borderBottom: `1px solid ${BORDER_COLOR}`, padding: '0.6vw 0.8vw' }} />
          {competitors.map((c) => (
            <th
              key={c.name}
              style={{
                padding: '0.6vw 0.8vw',
                fontSize: '1.25vw',
                fontWeight: 700,
                color: CYAN,
                textAlign: 'center',
                borderBottom: `1px solid ${BORDER_COLOR}`,
                borderLeft: `1px solid ${BORDER_COLOR}`,
              }}
            >
              {c.name}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {competitorRowLabels.map((label, rowIdx) => {
          const key = rowKeys[rowIdx];
          const isHighlight = highlightRows.includes(rowIdx);
          return (
            <tr key={label} style={{ backgroundColor: isHighlight ? HIGHLIGHT_BG : 'transparent' }}>
              <td
                style={{
                  padding: '0.7vw 0.8vw',
                  fontSize: '1.1vw',
                  fontWeight: 500,
                  color: CYAN,
                  whiteSpace: 'nowrap',
                  borderBottom: `1px solid ${BORDER_COLOR}`,
                }}
              >
                {label}
              </td>
              {competitors.map((c) => (
                <td
                  key={c.name}
                  style={{
                    padding: '0.7vw 0.8vw',
                    textAlign: 'center',
                    borderBottom: `1px solid ${BORDER_COLOR}`,
                    borderLeft: `1px solid ${BORDER_COLOR}`,
                  }}
                >
                  {renderCell(c[key], key)}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

function FeatureComparisonSection() {
  /*
    FIGMA SPECS (Frame 3, 1280×1360px):
    Title: x=34, y=74
    Body text: x=34, y=206, w=320
    Table: x=381, y=166, w=899, h=416

    All coords relative to Frame 3 top.
    Body text top is 40px below table top (206-166=40).
  */
  return (
    <section className="w-full bg-white" style={{ paddingTop: '5.78vw' }}>
      <div style={{ paddingLeft: '2.66vw' }}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-medium text-black"
          style={{ fontSize: '3.125vw', lineHeight: 'normal', marginBottom: '1.56vw' }}
        >
          Feature comparison
        </motion.h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative"
        style={{ height: '32.5vw' }}
      >
        {/* Body text: x=34, y=206 (40px below table top) */}
        <div
          className="absolute"
          style={{
            left: '2.66vw',
            top: '3.13vw',
            width: '22.34vw',
          }}
        >
          <p className="font-medium text-black" style={{ fontSize: '1.5625vw', lineHeight: 'normal' }}>
            Platforms like Yulu and Zypp provide battery-swapping support, while others focus more on operational reach or ride experience. This analysis helped identify opportunities to design a more balanced and user-friendly solution by combining accessibility, convenience, and sustainable mobility features into a single streamlined experience.
          </p>
        </div>

        {/* Native feature comparison table: x=381, y=166, w=899, h=416 */}
        <div
          className="absolute"
          style={{
            left: '29.77vw',
            top: '0',
            width: '70.23vw',
          }}
        >
          <FeatureTable />
        </div>
      </motion.div>
    </section>
  );
}

function YuluStrengthsSection() {
  /*
    FIGMA SPECS (within Frame 3, 1280×1360px):
    Title: x=34, y=656
    Infographic: x=0, y=729, w=733, h=560
    Text 1: x=749, y=760, w=489
    Text 2: x=754, y=1102, w=489

    Title to infographic gap: 729-656 = 73px (minus title height ~50px = 23px gap)
    Infographic bottom: 729+560 = 1289
    Section bottom: 1360
    Bottom padding: 1360-1289 = 71px = 5.55vw
  */
  return (
    <section className="w-full bg-white" style={{ paddingTop: '5.78vw', paddingBottom: '5.55vw' }}>
      <div style={{ paddingLeft: '2.66vw' }}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-medium text-black"
          style={{ fontSize: '3.125vw', lineHeight: 'normal', marginBottom: '1.8vw' }}
        >
          Yulu's Strengths
        </motion.h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative"
        style={{ height: '43.75vw' }}
      >
        {/* Infographic: x=0, y=729, w=733, h=560 */}
        <img
          src={`${BASE_URL}images/yulu/strengths-infographic.png`}
          alt="Yulu's Strengths: Battery Swapping, Affordability, No License Required, Eco-Friendly Focus, Convenience"
          className="absolute"
          style={{
            left: '0',
            top: '0',
            width: '57.27vw',
            height: 'auto',
          }}
        />

        {/* Text 1: x=749, y=760 (31px below infographic top) */}
        <div
          className="absolute"
          style={{
            left: '58.52vw',
            top: '2.42vw',
            width: '38.59vw',
          }}
        >
          <p className="font-medium text-black" style={{ fontSize: '1.5625vw', lineHeight: 'normal' }}>
            The feature analysis highlighted Yulu's key strengths in creating an accessible and sustainable urban mobility experience. Features such as battery swapping reduce range anxiety, while affordable pricing makes the service attractive to budget-conscious users.
          </p>
        </div>

        {/* Text 2: x=754, y=1102 (373px below infographic top) */}
        <div
          className="absolute"
          style={{
            left: '58.91vw',
            top: '29.14vw',
            width: '38.2vw',
          }}
        >
          <p className="font-medium text-black" style={{ fontSize: '1.5625vw', lineHeight: 'normal' }}>
            The platform's eco-friendly approach, convenient city coverage, and no-license requirement further improve accessibility and ease of use for everyday commuters.
          </p>
        </div>
      </motion.div>
    </section>
  );
}

function FinalDesignSection() {
  return (
    <section className="w-full" style={{ backgroundColor: '#000000', paddingTop: '6.48vw', paddingBottom: '18vw' }}>
      <div style={{ paddingLeft: '3.67vw' }}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-medium text-white"
          style={{ fontSize: '3.125vw', lineHeight: 'normal', marginBottom: '2.42vw' }}
        >
          Final Design
        </motion.h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center"
      >
        <div style={{ width: '77.81vw' }}>
          <img
            src={`${BASE_URL}images/yulu/phone-mockup.png`}
            alt="Yulu Final Design Mockups"
            className="w-full h-auto"
          />
        </div>

        <div
          className="flex items-center justify-center"
          style={{ marginTop: '4vw', gap: '1.64vw' }}
        >
          <a
            href="https://www.figma.com/design/QOsld9gNcTzuVTsrWzuUIa/Yulu?node-id=1-236&t=Yh1hBAo60VWkMaEE-0"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center font-medium"
            style={{
              width: '11.25vw',
              height: '3.13vw',
              fontSize: '1.1vw',
              color: '#d1d5db',
              backgroundColor: '#374151',
              borderRadius: '0.47vw',
              border: '1px solid #6b7280',
              textDecoration: 'none',
            }}
          >
            View in Figma
          </a>
          <a
            href="https://docs.google.com/document/d/19sb3g5PcVzDwsgHiDJ3eJtZ5kBRI291fYohc7HY1nxc/edit?tab=t.0"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center font-medium"
            style={{
              width: '10.94vw',
              height: '3.13vw',
              fontSize: '1.1vw',
              color: '#374151',
              backgroundColor: '#e5e7eb',
              borderRadius: '0.47vw',
              border: '1px solid #9ca3af',
              textDecoration: 'none',
            }}
          >
            View full report
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default YuluCaseStudyPage;
