"use client";

import { SectionCard } from "@/components/shared/layout/SectionCard";
import Select from "@/components/shared/input/Select";
import Switch from "@/components/shared/input/Switch";
import type { SectionState } from "../types";

type Props = { state: SectionState; update: <K extends keyof SectionState>(key: K, value: SectionState[K]) => void };

export default function StatesSection({ state, update }: Props) {
  return <SectionCard title="State Preview" subtitle="State Preview controls for native layout/page-structure generation."><Select label="Preview state" value={state.previewState} options={[
  "default",
  "hover",
  "focus",
  "active",
  "collapsed",
  "mobile",
  "overflow"
]} onChange={(value) => update("previewState", value)} />
</SectionCard>;
}
