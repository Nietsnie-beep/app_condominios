---
name: Azure Coastal
colors:
  surface: '#f9f9fc'
  surface-dim: '#d9dadd'
  surface-bright: '#f9f9fc'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f7'
  surface-container: '#edeef1'
  surface-container-high: '#e7e8eb'
  surface-container-highest: '#e2e2e5'
  on-surface: '#191c1e'
  on-surface-variant: '#41474e'
  inverse-surface: '#2e3133'
  inverse-on-surface: '#f0f0f4'
  outline: '#71787e'
  outline-variant: '#c1c7ce'
  surface-tint: '#306386'
  primary: '#2e6184'
  on-primary: '#ffffff'
  primary-container: '#497a9e'
  on-primary-container: '#fefdff'
  inverse-primary: '#9bccf4'
  secondary: '#006878'
  on-secondary: '#ffffff'
  secondary-container: '#87e8fe'
  on-secondary-container: '#006978'
  tertiary: '#206380'
  on-tertiary: '#ffffff'
  tertiary-container: '#3e7c9a'
  on-tertiary-container: '#fdfdff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#cae6ff'
  primary-fixed-dim: '#9bccf4'
  on-primary-fixed: '#001e30'
  on-primary-fixed-variant: '#114b6d'
  secondary-fixed: '#a5eeff'
  secondary-fixed-dim: '#72d4e9'
  on-secondary-fixed: '#001f25'
  on-secondary-fixed-variant: '#004e5a'
  tertiary-fixed: '#c1e8ff'
  tertiary-fixed-dim: '#92ceef'
  on-tertiary-fixed: '#001e2b'
  on-tertiary-fixed-variant: '#004d67'
  background: '#f9f9fc'
  on-background: '#191c1e'
  surface-variant: '#e2e2e5'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '300'
    lineHeight: 56px
    letterSpacing: 0.04em
  display-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '300'
    lineHeight: 40px
    letterSpacing: 0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
    letterSpacing: 0.02em
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: 0.01em
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0.01em
  label-caps:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.15em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-padding-mobile: 24px
  container-padding-desktop: 80px
  gutter: 24px
  section-gap: 120px
---

## Brand & Style
The design system is engineered to evoke the serenity of high-end coastal living, merging the tactile elegance of luxury hospitality with the precision of premium technology interfaces. The brand personality is exclusive, calm, and effortlessly sophisticated.

The aesthetic follows a **refined Glassmorphism** approach. It utilizes expansive whitespace (airy backgrounds), translucent layers that mimic the clarity of water, and subtle motion to create a sense of depth and tranquility. The goal is to provide a "digital concierge" experience that feels as light and refreshing as a sea breeze, prioritizing high-quality architectural imagery and unobstructed views.

## Colors
The palette is rooted in the "Azure-Tonal" spectrum. The primary colors represent the deep marina and the golfing greens' shadows, while the secondary and tertiary blues provide the vibrant energy of the Pacific Ocean and the clarity of the sky.

**Light Mode:** Uses a "Cool Off-White" (#F8FAFB) as the canvas to maintain an airy, open feel.
**Dark Mode:** Shifts to a "Midnight Abyss" (#0A1116), where glass elements gain a deep blue tint rather than pure grey, maintaining the coastal narrative.
**Functional Colors:** Success, Warning, and Error states should be desaturated to maintain the premium, non-aggressive aesthetic.

## Typography
The typography system balances the warmth of **Plus Jakarta Sans** for headings with the technical precision of **Hanken Grotesk** for functional text.

- **Headings:** Use light weights and generous letter spacing (tracking) to create a "gallery" feel. Large display titles should never exceed 300 or 400 weight to keep the interface looking expensive.
- **Body:** Hanken Grotesk provides high readability for amenity descriptions and real estate data.
- **Micro-copy:** Use `label-caps` for category headers and navigation items to evoke the feeling of high-end signage found in luxury resorts.

## Layout & Spacing
The design system employs a **Fluid-Fixed Hybrid** grid. While content expands, it is always contained within generous "Safe Zones" to ensure imagery is never crowded.

- **Desktop:** 12-column grid with ultra-wide margins (80px+) to simulate the luxury of space.
- **Mobile:** 4-column grid with 24px margins.
- **Rhythm:** Use an 8px base unit. Vertical spacing between major sections should be significantly larger than standard SaaS products (e.g., 120px) to give the content "room to breathe," mirroring architectural luxury.

## Elevation & Depth
Hierarchy is achieved through **Optical Translucency** rather than traditional heavy shadows.

- **Glassmorphism:** Primary containers use a backdrop-blur (20px-40px) with a semi-transparent white (or navy in dark mode) fill at 60% opacity.
- **Layering:** Elements "float" on the Z-axis. Lower layers have no blur; top-level modals and cards have high blur and a 1px "inner glow" stroke to define edges.
- **Shadows:** Use only "Ambient" shadows—extremely long, low-opacity (5-10%) blurs that match the primary blue tint, mimicking natural sunlight.

## Shapes
The shape language is dominated by **Extra-Large Radii**, conveying softness and approachability.

- **Cards & Containers:** A consistent 24px radius creates a friendly, "pebble-like" appearance.
- **Interactive Elements:** Buttons utilize a full-pill shape (100px) to contrast against the structured grid of architectural photography.
- **Media:** Photography should follow the container radius or, in editorial layouts, use one sharp corner and three rounded corners for a bespoke look.

## Components
Consistent execution of these components ensures the system feels premium and cohesive:

- **Glass Cards:** The signature component. Feature a 1px border with a subtle gradient (White to Transparent) to catch the "light." Content inside should have generous padding (32px+).
- **Floating Action Buttons (FAB):** Should be used for high-tier concierge actions (e.g., "Book Tee Time"). Use the Primary Blue with a soft, tinted shadow.
- **Bottom Navigation:** A docked glass bar with a heavy backdrop blur. Icons should be thin-stroke (1.5pt) and accompanied by `label-caps` text.
- **Input Fields:** Minimalist design with only a bottom border or a very soft tinted fill. Focus states use a subtle expansion of the "inner glow."
- **Image Carousels:** Full-bleed transitions or large-radius cards. Use "pagination dots" that are thin horizontal lines rather than circles to maintain the sophisticated tech feel.
- **Amenity Chips:** Small, semi-transparent pills used to tag property features (e.g., "Ocean View," "Private Pool").