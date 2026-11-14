import React from "react";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  titleAccent?: string;
  description: string;
  children?: React.ReactNode;
}

export default function PageHero({
  eyebrow,
  title,
  titleAccent,
  description,
  children,
}: PageHeroProps) {
  return (
    <section className="page-hero">
      {children}
      <div className="gridbg" />
      <div className="page-hero-content">
        <div className="eyebrow">{eyebrow}</div>
        <h1>
          {title}
          {titleAccent && (
            <>
              <br />
              <em>{titleAccent}</em>
            </>
          )}
        </h1>
        <p>{description}</p>
      </div>
    </section>
  );
}
