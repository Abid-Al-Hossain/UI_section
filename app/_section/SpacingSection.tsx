"use client";

import { SectionCard } from "@/components/shared/layout/SectionCard";
import Slider from "@/components/shared/input/Slider";
import type { SectionState } from "../types";

type Props = { state: SectionState; update: <K extends keyof SectionState>(key: K, value: SectionState[K]) => void };

export default function SpacingSection({ state, update }: Props) {
  return <SectionCard title="Spacing" subtitle="Spacing controls for native layout/page-structure generation."><Slider label="Gap" value={state.gap} min={0} max={48} step={1} onChange={(value) => update("gap", value)} />
<Slider label="Padding" value={state.padding} min={0} max={80} step={1} onChange={(value) => update("padding", value)} />
<Slider label="Margin" value={state.margin} min={0} max={80} step={1} onChange={(value) => update("margin", value)} />
<Slider label="Vertical rhythm" value={state.verticalRhythm} min={16} max={160} step={1} onChange={(value) => update("verticalRhythm", value)} /></SectionCard>;
}
