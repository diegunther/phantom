"use client";

import { useState, useEffect, useRef } from "react";

export default function SkullDisplay() {
  const ref = useRef<HTMLPreElement>(null);

  // Horizontal offset for eyes (-2 to +2)
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);

      // Map mouse X to offset range
      let newOffset = Math.round((x / rect.width) * 5);

      // Clamp to [-2, 2]
      newOffset = Math.max(-2, Math.min(2, newOffset));

      setOffset(newOffset);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  // Base skull (no eyes)
  const skullLines = [
    "            │",
    "       pN▒g▒p▒g▒▒g▒ge",
    "      ▒▒▒▒▒▒▒░░▒░▒░▒▒▒",
    "    _0▒░▒░▒░░▒▒▒▒▒▒▒▒▒▒!",
    "    4▒▒░░▒▒▒░░░▒░░▒▒▒▒▒▒Y",
    "   /`   \\~~#00░░0     M│",
    "         \\`gM░M7        |", // <-- eyes go ABOVE this line
    "  #▒        g▒0░░P       0",
    "  #▒0g_p# ░04▒▒&,__M#  ▒",
    "   0▒▒░░▒▒00    ]0▒▒░░▒▒00",
    "    │00j▒▒▒0'  `0▒▒▒▒▒▒4M'",
    "  │#▒ ▒▒▒▒&▒▒gg▒▒▒▒▒▒0& │",
    "   \"▒▒ ▒▒00▒▒▒▒00▒▒▒▒'d",
    "     %  ¼▒  ~P▒¼▒▒│¼¼│",
    "    M▒9              ▒j",
    "    l▒g▒   @ 9     ▒¼",
    "     ~▒0▒▒ p ▒g▒▒ ▒%",
    "       @░▒▒▒▒▒  ▒▒░",
    "        M0░░  ░░^",
    "           \\`"
  ];

  // Build the eye line dynamically
  const baseLeft = "       ";
  const baseRight = "   |";

  const leftEye = "XY";
  const rightEye = "YX";

  // Apply offset (negative = left, positive = right)
  const leftSpacing = " ".repeat(0 + offset);
  const rightSpacing = " ".repeat(3 - offset);

  const eyeLine =
    baseLeft +
    leftSpacing +
    leftEye +
    " \\`gM░M7 " +
    rightSpacing +
    rightEye +
    baseRight;

  // Insert eye line at correct index (line 6)
  const finalSkull = [...skullLines];
  finalSkull.splice(6, 0, eyeLine);

  return (
    <pre
      ref={ref}
      className="text-green-400 font-mono text-xs leading-tight select-none"
    >
      {finalSkull.join("\n")}
    </pre>
  );
}
