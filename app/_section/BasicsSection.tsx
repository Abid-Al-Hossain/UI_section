"use client";

import { SectionCard } from "@/components/shared/layout/SectionCard";
import Input from "@/components/shared/input/Input";
import type { SectionState } from "../types";

type Props = { state: SectionState; update: <K extends keyof SectionState>(key: K, value: SectionState[K]) => void };

export default function BasicsSection({ state, update }: Props) {
  return <SectionCard title="Basics" subtitle="Basics controls for native layout/page-structure generation."><Input label="Title" value={state.title} onChange={(value) => update("title", value)} />
<Input label="Description" value={state.description} onChange={(value) => update("description", value)} /></SectionCard>;
}
