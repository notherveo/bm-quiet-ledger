"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";

/**
 * A long-horizon, fictional illustrative allocation chart (SVG).
 * The visitor enters an age range + a goal; the chart animates.
 * Not advice.
 */
type Goal = "wealth preservation" | "growth" | "income";

const PALETTE = {
  equity: "#9C7A3C",
  fixed: "#2E8B57",
  cash: "#D8C3A5",
  text: "#141B2D",
  grid: "#E3E0D6",
};

const GOALS: Record<Goal, { label: string; desc: string }> = {
  "wealth preservation": {
    label: "Wealth preservation",
    desc: "Safeguard capital through a full market cycle.",
  },
  growth: {
    label: "Growth",
    desc: "Build wealth for a longer time horizon.",
  },
  income: {
    label: "Income",
    desc: "Generate steady cash flow for living expenses.",
  },
};

const SCENARIOS: Record<string, { label: string; equity: number; fixed: number; cash: number }> = {
  "25-34": {
    label: "Early career",
    equity: 82,
    fixed: 12,
    cash: 6,
  },
  "35-44": {
    label: "Established",
    equity: 70,
    fixed: 22,
    cash: 8,
  },
  "45-54": {
    label: "Accumulating",
    equity: 58,
    fixed: 32,
    cash: 10,
  },
  "55-64": {
    label: "Transitioning",
    equity: 42,
    fixed: 44,
    cash: 14,
  },
  "65+": {
    label: "Retirement",
    equity: 28,
    fixed: 58,
    cash: 14,
  },
};

export function AllocationChart({
  age,
  goal,
}: {
  age: string;
  goal: Goal;
}) {
  const reduced = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const data = SCENARIOS[age] || SCENARIOS["35-44"];
  const total = 100;
  const height = 200;
  const width = 340;
  const padding = 24;
  const barWidth = 26;
  const gap = 14;
  const stackWidth = barWidth + gap;
  const stackCount = 3;
  const stackTotal = stackWidth * stackCount;
  const maxStack = Math.min(width - padding * 2, stackTotal);
  const scale = maxStack / stackTotal;
  const barHeight = height - padding * 2;
  const y0 = padding;
  const y1 = height - padding;
  const yStep = barHeight / stackCount;

  const labels = ["Equity", "Fixed income", "Cash & alternatives"];
  const colors = [PALETTE.equity, PALETTE.fixed, PALETTE.cash];
  const slices = labels.map((label, i) => ({
    label,
    value: data[Object.keys(data)[i] as keyof typeof data],
    color: colors[i],
  }));

  return (
    <div className="allocation-chart">
      <div className="chart-label">
        <span className="chart-title">
          Your Next 20 Years
          <sup className="chart-sup">®</sup>
        </span>
        <span className="chart-sub">
          An illustrative allocation for {data.label}
        </span>
      </div>
      <div className="chart-legend">
        {slices.map((slice, i) => (
          <div key={slice.label} className="legend-item">
            <span className="legend-dot" style={{ backgroundColor: slice.color }} />
            <span className="legend-label">{slice.label}</span>
            <span className="legend-value">
              {Math.round(slice.value * scale)}%
            </span>
          </div>
        ))}
      </div>
      <div className="chart-bars">
        {slices.map((slice, i) => {
          const h = Math.max(2, Math.round(slice.value * scale));
          const y = y0 + yStep * i;
          const w = Math.max(2, Math.round(h * yStep / barHeight * 100));
          return (
            <div
              key={slice.label}
              className="chart-bar"
              style={{
                height: `${h}px`,
                width: `${w}%`,
                backgroundColor: slice.color,
                "--bar-y": `${y}px`,
                "--bar-h": `${h}px`,
              }}
            />
          );
        })}
      </div>
      <div className="chart-note">
        This chart is for illustrative purposes only and does not constitute
        investment advice. Past performance is not indicative of future results.
      </div>
    </div>
  );
}
