"use client";

import { SectionCard } from "@/components/shared/layout/SectionCard";
import Slider from "@/components/shared/input/Slider";
import type { SectionState } from "../types";

type Props = { state: SectionState; update: <K extends keyof SectionState>(key: K, value: SectionState[K]) => void };

export default function SizingSection({ state, update }: Props) {
  return <SectionCard title="Sizing" subtitle="Sizing controls for native layout/page-structure generation."><Slider label="Width" value={state.width} min={120} max={1200} step={1} onChange={(value) => update("width", value)} />
<Slider label="Height" value={state.height} min={40} max={720} step={1} onChange={(value) => update("height", value)} />
<Slider label="Content width" value={state.contentWidth} min={320} max={1400} step={1} onChange={(value) => update("contentWidth", value)} /></SectionCard>;
}
