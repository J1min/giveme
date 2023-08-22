"use client";

import { NextPage } from "next";
import React, { createRef, useLayoutEffect } from "react";

export interface IUtteranceProps {
  repository: string;
  theme: string;
}

const Utterance: NextPage<IUtteranceProps> = React.memo(
  ({ repository, theme }) => {
    const containerRef = createRef<HTMLDivElement>();
    const src = "https://utteranc.es/client.js";

    useLayoutEffect(() => {
      const utterance = document.createElement("script");

      const attributes = {
        src,
        repo: repository,
        theme,
        "issue-term": "pathname",
        label: "✨💬 comments ✨",
        crossOrigin: "anonymous",
        async: "true",
      };

      Object.entries(attributes).forEach(([key, value]) => {
        utterance.setAttribute(key, value);
      });

      containerRef.current!.appendChild(utterance);
    }, [repository]);

    return <div ref={containerRef} />;
  }
);

Utterance.displayName = "Utterance";

export default Utterance;
