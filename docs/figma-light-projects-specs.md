# Figma Light Projects Section — Complete MCP Reference

Source: node 11:369 (Group 32) → child 11:370 (Frame 1) in file J7X0SM56IVqpoSpLuAWhEN
Container: 1280×1275, bg: white, at y:1947 in full frame (MacBook Air - 11, 1280×3738)
VW height: 99.61vw

---

## WORK EXPERIENCE : PEAKMIND

### Title (11:371)
```
Pos: (51, 32) within Frame 1, w:851, h:90
Font: Inter Medium 48px, leading 90px, tracking -1.815px, color: black
```
**VW:** left 3.98, top 2.5, w 66.48, fontSize 3.75, lineHeight 7.03, tracking -0.142

### Image (11:379) — peakmind-phones.png
```
Pos: (-52, 109) within Frame 1, w:750, h:500
Type: rounded-rectangle (image fill, object-cover)
NOTE: x is NEGATIVE — image extends 52px past left edge of container
```
**VW:** left -4.06, top 8.52, w 58.59, h 39.06

### Description (11:373)
```
Pos: (708, 204) within Frame 1, w:470, h:98
Font: Inter Regular 20px, leading 24.375px, color: black
Text: "Hello, I'm a Multane specialist in creating digital experiences.
       With 10+ years of experience, I bring ideas to life with the
       right tools, one pixel at a time."
```
**VW:** left 55.31, top 15.94, w 36.72, fontSize 1.56, lineHeight 1.90

### Button (11:375)
```
Pos: (708, 348) within Frame 1, w:143, h:48
Background: BLACK, rounded-full (26843500px radius = pill)
Text (11:376): "VIew Project →", Inter Medium 14px, leading 20px, WHITE, center
```
**VW:** left 55.31, top 27.19, w 11.17, h 3.75, fontSize 1.09, lineHeight 1.56

---

## ZOHO BOOKS CAMPAIGN

### Title (11:372)
```
Pos: (659, 592) within Frame 1, w:851, h:90
Font: Inter Medium 48px, leading 90px, tracking -1.815px, color: black
```
**VW:** left 51.48, top 46.25, w 66.48, fontSize 3.75, lineHeight 7.03, tracking -0.142

### "Smart Reconcile" text (11:380)
```
Pos: (662, 710) within Frame 1, w:493, h:147
Font: Inter BLACK (900 weight) 24px, leading 27px, color: #006fda, text-center
```
**VW:** left 51.72, top 55.47, w 38.52, h 11.48, fontSize 1.875, lineHeight 2.11

### Zoho Image (11:389) — zoho-smart-reconcile.png
```
IMPORTANT: This is a SIBLING of Group 32, NOT a child of Frame 1.
Pos in full frame: (597, 2722), w:623, h:278
Relative to light section (y:1947): top = 2722-1947 = 775
Type: rounded-rectangle (image fill, object-cover)
```
**VW:** left 46.64, top 60.55, w 48.67, h 21.72

### Description (11:374)
```
Pos: (88, 765) within Frame 1, w:470, h:98
Font: Inter Regular 20px, leading 24.375px, color: black
Text: same as Peakmind description
```
**VW:** left 6.88, top 59.77, w 36.72, fontSize 1.56, lineHeight 1.90

### Button (11:377)
```
Pos: (88, 909) within Frame 1, w:143, h:48
Background: BLACK, rounded-full
Text (11:378): "VIew Project →", Inter Medium 14px, leading 20px, WHITE, center
```
**VW:** left 6.88, top 71.02, w 11.17, h 3.75, fontSize 1.09, lineHeight 1.56

---

## View More Projects CTA (gradient fade effect)

### Outer container (11:381) — clip mask
```
Pos: (107, 1110) within Frame 1, w:1055.2, h:152
overflow: hidden — clips the larger inner gradient
Uses flex centering to position the inner gradient
```
**VW:** left 8.36, top 86.72, w 82.44, h 11.88

### Inner gradient (11:382) — the visible gradient
```
Centered within outer via flex, overflows on all sides
Size: 1348×392 (larger than outer)
Offset from outer: (-146.4, -120)
Background: linear-gradient(to bottom, rgba(255,255,255,0.8), rgba(223,223,224,0.8))
Border-radius: 16px
```
**VW:** w 105.31, h 30.63, radius 1.25
**Offset VW:** left -11.44, top -9.38

### Circle button (11:383) — WITHIN inner gradient
```
Pos within gradient: (579.03, 127.01), 56×56
Border: 1.6px solid black, rounded-full
Contains: Icon (11:384) 20×20 centered — down-arrow SVG
```
**As % of gradient:** left 42.95%, top 32.40%
**VW size:** 4.38 × 4.38, border 0.125, icon 1.56

### Text (11:387 → 11:388) — WITHIN inner gradient
```
Pos within gradient: (553.41, 199.01), frame w:107.24, h:16
Text: "View more projects"
Font: Inter Regular 12px, leading 16px, color: #0a0a0a, tracking 0.3px
```
**As % of gradient:** left 41.05%, top 50.77%
**VW:** fontSize 0.94, lineHeight 1.25, tracking 0.023

---

## AUDIT vs Current Implementation

### Issues Found:
1. **CTA button/text positioning**: Code uses `flex items-center justify-center` on gradient
   → places button at vertical CENTER (50%) of gradient
   → Figma places button at TOP 32.4% of gradient
   → Visible result: button appears ~4.38vw lower than Figma
   **FIX:** Switch to absolute positioning within gradient using % coordinates

2. **Outer container width**: Code has 82.42vw, should be 82.44vw (1055.2/1280*100)
   **FIX:** Update to 82.44vw

3. **Smart Reconcile height**: Missing explicit h:11.48vw from code
   **FIX:** Add height to match Figma's 147px container

---

## Key Notes
- Peakmind image has NEGATIVE left position (-52px) — overflows container left
- Zoho image (11:389) is a SIBLING of Group 32, not a child — positioned at frame level
- Buttons are BLACK bg with WHITE text (opposite of dark section)
- The fade effect: large gradient (1348×392) clipped by smaller overflow:hidden parent (1055×152)
- Button and text positioned absolutely WITHIN the gradient, NOT centered via flex
- Button appears in upper portion of visible clip area, text below it, more space at bottom
