"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface TopicCardProps {
  num: string;
  title: string;
  summary: string;
  content: string[];
  tags: string[];
  status?: string;
}

export default function TopicCard({
  num,
  title,
  summary,
  content,
  tags,
  status,
}: TopicCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`topic-card${expanded ? " topic-card-expanded" : ""}`}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span className="card-num">{num}</span>
        {status && <span className="project-status" style={{ marginTop: 0 }}>{status}</span>}
      </div>
      <h3>{title}</h3>
      <p>{summary}</p>
      <div className="card-tags">
        {tags.map((t) => (
          <span key={t} style={{ marginRight: "8px", display: "inline-block" }}>
            {t}
          </span>
        ))}
      </div>
      <button
        className="topic-card-toggle"
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
      >
        <span>{expanded ? "▲ CLOSE" : "▼ READ MORE"}</span>
        <span style={{ marginLeft: "auto", opacity: 0.5 }}>
          {expanded ? "[ COLLAPSE ]" : "[ EXPAND ]"}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="topic-card-body"
          >
            <div className="topic-card-full">
              {content.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
