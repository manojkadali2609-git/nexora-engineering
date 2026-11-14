"use client";

import { useState } from "react";
import PageHero from "@/app/components/PageHero";
import { Mail, MapPin } from "lucide-react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !subject || !message) return;
    setSent(true);
  };

  return (
    <>
      <PageHero
        eyebrow="[ CONTACT ]"
        title="Get in"
        titleAccent="Touch."
        description="Have a question, suggestion or collaboration idea? Reach out to NEXORA — we would love to hear from you."
      />

      <div className="contact-layout">
        <div className="contact-info">
          <h2>Let&apos;s Connect</h2>
          <p>
            Whether you have feedback on our tools, ideas for new learning
            paths, or just want to talk engineering — do not hesitate to reach
            out. We read every message.
          </p>

          <div className="contact-detail">
            <Mail size={16} />
            <span>hello@nexora.engineering</span>
          </div>

          <div className="contact-detail">
            <MapPin size={16} />
            <span>Global · Remote</span>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>NAME</label>
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>EMAIL</label>
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>SUBJECT</label>
            <input
              type="text"
              placeholder="What is this about?"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>MESSAGE</label>
            <textarea
              placeholder="Your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <button type="submit" className="calc-btn">
            SEND MESSAGE
          </button>

          {sent && (
            <div className="success-msg">
              Message received. We will get back to you shortly.
            </div>
          )}
        </form>
      </div>
    </>
  );
}
