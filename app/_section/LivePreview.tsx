"use client";

import type { CSSProperties } from "react";
import type { SectionState } from "../types";

function box(state: SectionState): CSSProperties {
  return { width: state.width, minHeight: state.height, paddingBlock: state.verticalRhythm, paddingInline: state.padding, margin: state.margin, borderRadius: state.radius, border: `${state.borderWidth}px solid ${state.border}`, boxShadow: `0 ${Math.round(state.shadow / 3)}px ${state.shadow}px rgba(0,0,0,.28)`, background: state.background, color: state.foreground, fontFamily: state.fontFamily };
}

export default function LivePreview({ state }: { state: SectionState }) {
  const Element = state.element === "hr" ? "section" : state.element;
  const Heading = state.headingLevel;
  const role = state.role === "presentation" || state.role === "group" || state.role === "region" ? state.role : undefined;
  const style = box(state);
  return <Element id={state.anchorId || state.id} role={role} aria-label={state.landmarkLabel || undefined} tabIndex={state.tabIndex} style={style}><div style={{ maxWidth: state.contentWidth, marginInline: "auto", display: "grid", gap: state.gap }}><Heading style={{ margin: 0, fontSize: state.titleSize, fontWeight: state.fontWeight }}>{state.title}</Heading><p style={{ margin: 0, color: state.muted, fontSize: state.bodySize, lineHeight: 1.65 }}>{state.description}</p><div aria-hidden="true" style={{ height: 4, width: 96, borderRadius: 999, background: state.accent }} /></div></Element>;
}
