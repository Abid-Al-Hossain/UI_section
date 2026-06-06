"use client";

import { SectionCard } from "@/components/shared/layout/SectionCard";
import Input from "@/components/shared/input/Input";
import type { SectionState } from "../types";

type Props = { state: SectionState; update: <K extends keyof SectionState>(key: K, value: SectionState[K]) => void };

export default function LayoutSection({ state, update }: Props) {
  return <SectionCard title="Layout" subtitle="Anchor and content anatomy exported with the section."><Input label="Anchor id" value={state.anchorId} onChange={(value) => update("anchorId", value)} /></SectionCard>;
}
