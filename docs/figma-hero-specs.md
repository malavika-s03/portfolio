# Figma Hero Section — Complete MCP Reference

Source: `https://www.figma.com/design/J7X0SM56IVqpoSpLuAWhEN/Test-6?node-id=0-1`
Frame: "MacBook Air - 11" (node 1:5), 1280×3738, bg: white
Hero area: y:0 to y:633 (633px total)

---

## Exact Figma-Generated Code (from get_design_context on node 1:5)

All elements are **absolutely positioned** within the 1280px frame. There is NO separate header container — HOME, dots, name, photo, and bio all share the same coordinate space.

### HOME Text (node 1:8)
```
Position: absolute, left: 48px, top: 0
Width: 757px
Font: Inter Medium, 32px, leading 118px, tracking -1.815px
Color: #0a0a0a
Content: "HOME"
```

### Name Text (node 1:6)
```
Position: absolute, left: 53px, top: 126px
Width: 757px
Font: Inter Medium, 128px, leading 0 (container), each line leading 118px
Tracking: -1.815px
Color: #0a0a0a
Structure: <p leading-118px mb-0>MALAVIKA</p><p leading-118px>SURESH</p>
```

### Profile Photo (node 1:64)
```
Container: absolute, left: 1050px, top: 118px, 149×149px, rounded-[74px] (circle)
Inner wrapper: absolute inset-0, overflow-hidden, rounded-[74px]
Image crop (CRITICAL — exact Figma percentages):
  - position: absolute
  - width: 177.85%
  - height: 100.09%
  - left: -38.26%
  - top: -0.04%
  - max-width: none (override img max-width:100% reset)
```
The image is 4096×2305 (16:9). These percentages scale it to ~265×149px and shift it left by ~57px to show the right-center portion.

### Bio Text (node 1:9)
```
Position: absolute, left: 605px, top: 443px
Width: 607px
Font: Inter Regular, 24px, leading 32px
Color: #0a0a0a
Content: "Hello, I'm a Multane specialist in creating digital experiences. With 10+ years of experience, I bring ideas to life with the right tools, one pixel at a time."
```

### Menu Dots (nodes 1:65–1:68)
```
4 circles in a 2×2 grid:
  (1165, 38) — 8×8
  (1178, 38) — 8×8
  (1165, 51) — 8×8
  (1178, 51) — 8×8
Gap between dots: 5px (1178-1165-8=5, 51-38-8=5)
Color: foreground (black)
Shape: filled circles (ellipses)
```

### InfoBar (node 1:57)
```
Position: absolute, left: 0, top: 633px
Size: 1280×31px
Background: black
Inner container (node 1:58): left: 46px, top: 15px, w: 1216px, h: ~16px
Contains empty frames (Text, 3×Link) — NO visible text content
```

---

## Content Boundaries Summary

| Element | Left edge | Right edge | Left pad | Right pad |
|---------|-----------|------------|----------|-----------|
| HOME | 48px | 805px | 48px | 475px |
| Name | 53px | 810px | 53px | 470px |
| Photo | 1050px | 1199px | 1050px | 81px |
| Bio | 605px | 1212px | 605px | 68px |
| Dots | 1165px | 1186px | 1165px | 94px |

---

## Implementation Notes
- Do NOT use `object-cover` + `objectPosition` for photo — use Figma's exact percentage crop
- Do NOT use `position: fixed` on header — HOME and dots are part of the hero frame
- InfoBar is a plain black strip with no text
- The `max-width: none` on the photo img is essential to override the global `img { max-width: 100% }` reset
