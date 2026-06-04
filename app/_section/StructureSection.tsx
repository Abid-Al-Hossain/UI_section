"use client";

import { SectionCard } from "@/components/shared/layout/SectionCard";
import Select from "@/components/shared/input/Select";
import type { SectionState } from "../types";

type Props = { state: SectionState; update: <K extends keyof SectionState>(key: K, value: SectionState[K]) => void };

export default function StructureSection({ state, update }: Props) {
  return <SectionCard title="Structure" subtitle="Structure controls for native layout/page-structure generation."><Select label="Heading" value={state.headingLevel} options={[
  "h1",
  "h2",
  "h3",
  "h4"
]} onChange={(value) => update("headingLevel", value)} /></SectionCard>;
}
