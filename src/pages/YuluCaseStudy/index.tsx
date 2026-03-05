import { motion } from 'framer-motion';
import { journeyStages, heuristicLabels, competitors } from './data';

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
        <CompetitiveAuditSection />
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
      <div className="flex flex-row">
        {/* Left Content - 54.3% */}
        <div 
          className="w-[54.3vw] shrink-0"
          style={{ 
            paddingLeft: '2.91vw',
            paddingTop: '3.57vw'
          }}
        >
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-extrabold leading-normal text-black"
            style={{ 
              fontSize: '6.35vw',
              maxWidth: '42.72vw'
            }}
          >
            YULU - UX Study
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ maxWidth: '40.74vw' }}
          >
            <h2 
              className="font-bold text-black" 
              style={{ 
                fontSize: '1.58vw',
                marginBottom: '0.4vw'
              }}
            >
              Introduction
            </h2>
            <p 
              className="font-medium text-black" 
              style={{ 
                fontSize: '1.32vw',
                lineHeight: 1.45
              }}
            >
              Throughout the semester, we have been working on the Yulu app's user experience, 
              starting with identifying the critical gaps in user experience faced by customers 
              through techniques such as affinity mapping, secondary research, and user journey 
              mapping; these allowed us to create a preliminary set of problem statements which 
              we refined later on as we conducted more study and used techniques such as contextual inquiries.
            </p>
          </motion.div>
        </div>
        
        {/* Right Image - 45.7% */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-[45.7vw] shrink-0"
        >
          <img 
            src={`${BASE_URL}images/yulu/hero-image.jpg`}
            alt="YULU UX Study" 
            className="w-full h-auto"
            style={{ aspectRatio: '691/490' }}
          />
        </motion.div>
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
  
  const LABEL_W = 12.43;
  const CELL_W = 15.14;
  const CELL_H = 6.35;
  const GAP = 0.86;
  const DIAMOND = 0.53;
  
  const labels = ['Stage', 'Customer\nthoughts', 'Actions', 'Experience/\nEmotions', 'Touchpoint', 'Environment'];
  const numCols = 6;
  
  return (
    <section className="w-full bg-white" style={{ paddingTop: '5.89vw', paddingBottom: '3vw' }}>
      <div style={{ paddingLeft: '2.91vw' }}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-medium text-black"
          style={{ fontSize: '2.65vw', marginBottom: '2vw' }}
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
                      style={{ fontSize: '1.32vw' }}
                    >
                      {label}
                    </span>
                  </div>
                ))}
              </div>
              
              {/* Diamonds on right edge of label column (between label and first data col) */}
              {[0, 1, 2, 3, 4].map((rowGap) => {
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
                                fontSize: isHeader ? '1.32vw' : '1.06vw',
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
                {[0, 1, 2, 3, 4].map((rowGap) =>
                  [0, 1, 2, 3, 4].map((colGap) => {
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
    ═══════════════════════════════════════════════════════════════════════
    FIGMA EXACT SPECS (from MCP metadata)
    Black Section: 1516×1500px at y=1456
    ═══════════════════════════════════════════════════════════════════════
    
    HEURISTIC EVALUATION:
    - Title: x=58 (3.83%), y=43 (2.84%)
    - Body: x=58, y=169, width=477 (31.5%)
    - Radar: x=622 (41.1%), y=54.55, width=894 (59.1%), height=562 (37.2%)
    - Gap: 622-535=87px (5.75%)
    
    USABILITY TEST (starts at y=471 - overlaps radar):
    - Image: x=0, y=471 (31.1%), width=689 (45.5%), height=559
    - Text: x=851 (56.3%), y=696 (46%), width=589 (38.9%)
    
    CONTEXTUAL ENQUIRY:
    - Title: x=58, y=1090 (72.5%)
    - Body: x=58, y=1197, width=564 (37.3%)
    - Scooter: x=1540, y=905, width=919 (OVERFLOWS RIGHT)
    ═══════════════════════════════════════════════════════════════════════
  */
  
  /*
    ═══════════════════════════════════════════════════════════════════════════
    FIGMA EXACT MEASUREMENTS (Black Section 1516×1500px):
    
    HEURISTIC EVALUATION:
    - Title: y=43px (2.84vw), height=174px
    - Body: y=169px (11.15vw), width=477px (31.5vw)
    - Radar: y=54.55px (3.6vw), width=894px (59vw), height=562px (37.1vw)
    - Radar ends at: y=616px (40.7vw)
    
    USABILITY TEST (OVERLAPS with radar - image starts 4vw before radar ends):
    - Title: y=509.55px (33.6vw)
    - Image: y=556.56px (36.7vw), width=681px (44.9vw), height=473px (31.2vw)
    - Text Right 1: y=696px (45.9vw), width=589px (38.9vw)
    - Text Right 2: y=851px (56.1vw), width=581px (38.3vw)
    
    CONTEXTUAL ENQUIRY:
    - Title: y=1090px (71.9vw)
    - Body: y=1197px (78.9vw), width=564px (37.2vw)
    - Scooter: y=905px (59.7vw), width=919px (60.6vw), height=652px (43vw)
    ═══════════════════════════════════════════════════════════════════════════
  */
  
  const TITLE_SIZE = '2.65vw';  // 40px / 1516
  const BODY_SIZE = '1.32vw';   // 20px / 1516
  const TEXT_COLOR = '#fffefe';
  const LEFT_PAD = '3.83vw';    // 58px / 1516
  
  return (
    <section className="w-full overflow-hidden" style={{ backgroundColor: '#000000' }}>
      
      {/* ═══ SECTION 1: HEURISTIC EVALUATION ═══ */}
      {/* Title y=43px=2.84vw, Body y=169px=11.15vw, Radar y=54.55px to 616px */}
      <div style={{ padding: `2.84vw ${LEFT_PAD}`, paddingBottom: '0' }}>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-medium"
          style={{ fontSize: TITLE_SIZE, color: CYAN, marginBottom: '5.5vw' }}
        >
          Heuristic Evaluation
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-start"
          style={{ gap: '5.75vw' }}
        >
          {/* Body text: x=58, y=169, width=477px = 31.5vw */}
          <div style={{ width: '31.5vw', flexShrink: 0 }}>
            <p 
              className="font-medium leading-relaxed"
              style={{ fontSize: BODY_SIZE, color: TEXT_COLOR }}
            >
              Throughout the semester, we have been working on the Yulu app's user experience, 
              starting with identifying the critical gaps in user experience faced by customers 
              through techniques such as affinity mapping, secondary research, and user journey mapping;
            </p>
          </div>

          {/* Radar chart: x=622, width=894px = 59vw, height=562px = 37.1vw */}
          <div style={{ width: '59vw', flexShrink: 0 }}>
            <RadarChart />
          </div>
        </motion.div>
      </div>

      {/* ═══ SECTION 2: USABILITY TEST ═══ */}
      {/* Image y=556.56px (36.7vw) - overlaps with radar that ends at 40.7vw = 4vw overlap */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10"
        style={{ marginTop: '-6vw' }}
      >
        <div className="flex items-start" style={{ gap: '5.6vw' }}>
          {/* Image: x=8.33px, width=681px = 44.9vw, height=473px = 31.2vw */}
          <div className="relative" style={{ width: '44.9vw', flexShrink: 0, paddingLeft: '0.55vw' }}>
            {/* Rotated title: y=509.55px */}
            <h3 
              className="font-medium italic"
              style={{ 
                fontSize: '1.72vw',
                color: CYAN,
                marginBottom: '0.8vw',
                paddingLeft: '0.86vw',
                transform: 'rotate(-5deg)',
                transformOrigin: 'left center'
              }}
            >
              Usability test - paper prototype
            </h3>
            <img 
              src={`${BASE_URL}images/yulu/usability-test.png`}
              alt="Usability Test Paper Prototype"
              className="w-full h-auto"
              style={{ maxHeight: '31.2vw', objectFit: 'contain', objectPosition: 'left top' }}
            />
          </div>

          {/* Text: x=851px (56.1vw), y=696px, width=589px = 38.9vw */}
          <div style={{ width: '38.9vw', flexShrink: 0, paddingTop: '9.2vw' }}>
            <p 
              className="font-medium leading-relaxed"
              style={{ fontSize: BODY_SIZE, color: TEXT_COLOR, marginBottom: '1.5vw' }}
            >
              Throughout the semester, we have been working on the Yulu app's user experience, 
              starting with identifying the critical gaps in user experience faced by customers 
              through techniques such as affinity mapping, secondary research, and user journey mapping.
            </p>
            <p 
              className="font-medium leading-relaxed"
              style={{ fontSize: BODY_SIZE, color: TEXT_COLOR }}
            >
              Throughout the semester, we have been working on the Yulu app's user experience, 
              starting with identifying the critical gaps in user experience faced by customers 
              through techniques such as affinity mapping, secondary research, and user journey mapping.
            </p>
          </div>
        </div>
      </motion.div>

      {/* ═══ SECTION 3: CONTEXTUAL ENQUIRY ═══ */}
      {/* Title y=1090px (71.9vw), Scooter y=905px (59.7vw) - scooter overlaps above */}
      <div className="relative" style={{ marginTop: '4.3vw', paddingBottom: '2vw' }}>
        {/* Scooter: y=905px, positioned to overlap with usability section above */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="absolute z-0"
          style={{ 
            right: '0',
            top: '-12vw',
            width: '60.6vw',
            maxWidth: '919px'
          }}
        >
          <img 
            src={`${BASE_URL}images/yulu/contextual-scooter.png`}
            alt="Yulu Electric Scooter Illustration"
            className="w-full h-auto"
            style={{ 
              transform: 'scaleY(-1) rotate(180deg)'
            }}
          />
        </motion.div>

        {/* Title: y=1090px, Body: y=1197px, gap=~4.4vw (title height ~40px) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ paddingLeft: LEFT_PAD }}
        >
          <h2 
            className="font-medium"
            style={{ fontSize: TITLE_SIZE, color: CYAN, marginBottom: '4.4vw' }}
          >
            contextual Enquiry
          </h2>

          {/* Body: y=1197px, width=564px = 37.2vw */}
          <div style={{ width: '37.2vw', maxWidth: '564px' }}>
            <p 
              className="font-medium leading-relaxed"
              style={{ fontSize: BODY_SIZE, color: TEXT_COLOR }}
            >
              Throughout the semester, we have been working on the Yulu app's user experience, 
              starting with identifying the critical gaps in user experience faced by customers 
              through techniques such as affinity mapping, secondary research, and user journey mapping;
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function RadarChart() {
  /*
    FIGMA SPECS (from MCP):
    - Container: 894×562px in Figma
    - 9 numbered circles (1-9) on outer ring, ~34px diameter, cyan fill
    - Numbers inside circles: ~14px
    - Labels: 12px, #fffefe, positioned outside
    - ViewBox: 700x500 to fit all labels with proper spacing
  */
  
  const CX = 350;  // Center X
  const CY = 250;  // Center Y
  const BASE_R = 130; // Base radius for chart
  
  const dataValues = [0.85, 0.75, 0.65, 0.55, 0.45, 0.50, 0.40, 0.60, 0.80];
  
  const getPoint = (idx: number, radiusScale: number) => {
    const angle = (idx * 40 - 90) * (Math.PI / 180);
    const radius = BASE_R * radiusScale;
    return {
      x: CX + radius * Math.cos(angle),
      y: CY + radius * Math.sin(angle)
    };
  };
  
  const dataPolygonPoints = dataValues.map((val, idx) => {
    const pt = getPoint(idx, val);
    return `${pt.x},${pt.y}`;
  }).join(' ');
  
  return (
    <div className="relative w-full h-full">
      <svg viewBox="0 0 700 500" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
        {/* Grid rings (5 concentric nonagons) */}
        {[0.95, 0.75, 0.55, 0.35, 0.18].map((scale, idx) => (
          <polygon
            key={idx}
            points={generatePolygonPoints(CX, CY, BASE_R * scale, 9)}
            fill="none"
            stroke="#444"
            strokeWidth="1"
          />
        ))}
        
        {/* Radial lines from center */}
        {Array.from({ length: 9 }).map((_, idx) => {
          const angle = (idx * 40 - 90) * (Math.PI / 180);
          const x2 = CX + BASE_R * 0.95 * Math.cos(angle);
          const y2 = CY + BASE_R * 0.95 * Math.sin(angle);
          return (
            <line key={idx} x1={CX} y1={CY} x2={x2} y2={y2} stroke="#444" strokeWidth="1" />
          );
        })}
        
        {/* Data polygon */}
        <polygon points={dataPolygonPoints} fill="none" stroke={CYAN} strokeWidth="2" />
        
        {/* Data points */}
        {dataValues.map((val, idx) => {
          const pt = getPoint(idx, val);
          return <circle key={`data-${idx}`} cx={pt.x} cy={pt.y} r="6" fill={CYAN} />;
        })}

        {/* Numbered circles on outer ring */}
        {Array.from({ length: 9 }).map((_, idx) => {
          const angle = (idx * 40 - 90) * (Math.PI / 180);
          const radius = BASE_R * 1.25;
          const x = CX + radius * Math.cos(angle);
          const y = CY + radius * Math.sin(angle);
          return (
            <g key={`circle-${idx}`}>
              <circle cx={x} cy={y} r="17" fill={CYAN} />
              <text x={x} y={y} textAnchor="middle" dominantBaseline="central" fill="#e6e6e6" fontSize="14" fontWeight="500">
                {idx + 1}
              </text>
            </g>
          );
        })}

        {/* Labels outside numbered circles */}
        {heuristicLabels.map((label, idx) => {
          const angle = (idx * 40 - 90) * (Math.PI / 180);
          const radius = BASE_R * 1.6;
          const x = CX + radius * Math.cos(angle);
          const y = CY + radius * Math.sin(angle);
          
          let anchor: 'start' | 'middle' | 'end' = 'middle';
          if (x < CX - 50) anchor = 'end';
          if (x > CX + 50) anchor = 'start';
          
          const words = label.split(' ');
          const line1 = words.slice(0, 2).join(' ');
          const line2 = words.slice(2).join(' ');
          
          return (
            <g key={`label-${idx}`}>
              <text x={x} y={y - 7} textAnchor={anchor} dominantBaseline="middle" fill="#fffefe" fontSize="12" fontWeight="500">
                {line1}
              </text>
              {line2 && (
                <text x={x} y={y + 7} textAnchor={anchor} dominantBaseline="middle" fill="#fffefe" fontSize="12" fontWeight="500">
                  {line2}
                </text>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}

function generatePolygonPoints(cx: number, cy: number, radius: number, sides: number): string {
  const points: string[] = [];
  for (let i = 0; i < sides; i++) {
    const angle = (i * (360 / sides) - 90) * (Math.PI / 180);
    const x = cx + radius * Math.cos(angle);
    const y = cy + radius * Math.sin(angle);
    points.push(`${x},${y}`);
  }
  return points.join(' ');
}

function CompetitiveAuditSection() {
  return (
    <section className="w-full py-10 md:py-16 bg-white">
      <div className="w-full px-[2.91%]">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-medium mb-8 text-black"
          style={{ fontSize: 'clamp(24px, 2.65vw, 48px)' }}
        >
          Competitive Audit
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-x-auto ml-[13.4%]"
        >
          <table className="w-full max-w-[73%] min-w-[500px] border-collapse">
            <thead>
              <tr>
                <th className="p-3 text-left"></th>
                {competitors.map((comp, idx) => (
                  <th 
                    key={idx} 
                    className="p-3 text-center font-semibold"
                    style={{ color: CYAN }}
                  >
                    {comp.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* Powered by - white background */}
              <tr className="border-t border-gray-200">
                <td className="p-3 font-medium" style={{ color: CYAN }}>Powered by</td>
                {competitors.map((comp, idx) => (
                  <td key={idx} className="p-3 text-center text-black">{comp.poweredBy}</td>
                ))}
              </tr>
              {/* Battery swap - cyan background */}
              <tr style={{ backgroundColor: CYAN }}>
                <td className="p-3 font-medium text-white">Battery swap</td>
                {competitors.map((comp, idx) => (
                  <td key={idx} className="p-3 text-center">
                    {comp.batterySwap ? (
                      <span className="text-xl text-white">✓</span>
                    ) : (
                      <span className="text-xl" style={{ color: CYAN }}>✗</span>
                    )}
                  </td>
                ))}
              </tr>
              {/* Range - white background */}
              <tr className="border-t border-gray-200">
                <td className="p-3 font-medium" style={{ color: CYAN }}>Range</td>
                {competitors.map((comp, idx) => (
                  <td key={idx} className="p-3 text-center text-black">{comp.range || '-'}</td>
                ))}
              </tr>
              {/* GPS Tracking - cyan background */}
              <tr style={{ backgroundColor: CYAN }}>
                <td className="p-3 font-medium text-white">GPS Tracking</td>
                {competitors.map((comp, idx) => (
                  <td key={idx} className="p-3 text-center">
                    {comp.gpsTracking ? (
                      <span className="text-xl text-white">✓</span>
                    ) : (
                      <span className="text-xl" style={{ color: CYAN }}>✗</span>
                    )}
                  </td>
                ))}
              </tr>
              {/* Lock system - white background */}
              <tr className="border-t border-gray-200">
                <td className="p-3 font-medium" style={{ color: CYAN }}>Lock system</td>
                {competitors.map((comp, idx) => (
                  <td key={idx} className="p-3 text-center text-black text-sm">{comp.lockSystem}</td>
                ))}
              </tr>
              {/* Rating - cyan background */}
              <tr style={{ backgroundColor: CYAN }}>
                <td className="p-3 font-medium text-white">Rating</td>
                {competitors.map((comp, idx) => (
                  <td key={idx} className="p-3 text-center text-white">{comp.rating || '-'}</td>
                ))}
              </tr>
              {/* Availability - white background */}
              <tr className="border-t border-gray-200">
                <td className="p-3 font-medium" style={{ color: CYAN }}>Availability</td>
                {competitors.map((comp, idx) => (
                  <td key={idx} className="p-3 text-center text-black">{comp.availability}</td>
                ))}
              </tr>
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}

export default YuluCaseStudyPage;
