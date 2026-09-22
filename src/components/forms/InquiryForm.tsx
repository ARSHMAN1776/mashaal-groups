"use client";

import { useState } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";

interface InquiryFormProps {
  theme?: "dark" | "light";
  defaultVertical?: string;
}

export default function InquiryForm({ theme = "dark", defaultVertical = "group" }: InquiryFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    vertical: defaultVertical,
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  const isDark = theme === "dark";

  if (submitted) {
    return (
      <div className={`p-8 rounded border text-center space-y-4 ${
        isDark ? "bg-[#190308] border-white/10 text-white" : "bg-[#FAF8F5] border-[#ECE5DA] text-[#1C1514]"
      }`}>
        <CheckCircle2 className="w-10 h-10 text-[#C5A059] mx-auto" />
        <h3 className="font-sans font-semibold text-xl font-bold">Inquiry Dispatched</h3>
        <p className="text-xs text-[#C5B5AE] max-w-md mx-auto leading-relaxed">
          Thank you for contacting MASHAL GROUP. Your inquiry has been routed to the designated executive department. Our secretariat will respond within 1 business day.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setFormData({
              name: "",
              organization: "",
              email: "",
              phone: "",
              vertical: defaultVertical,
              message: "",
            });
          }}
          className="text-xs font-mono uppercase tracking-wider text-[#C5A059] hover:underline pt-2"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={`block text-xs font-mono uppercase tracking-wider mb-1 ${
            isDark ? "text-[#C5B5AE]" : "text-[#4A403C]"
          }`}>
            Your Full Name
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g. Tariq Al-Mansoor"
            className={`w-full rounded px-3.5 py-2.5 text-xs focus:outline-none ${
              isDark
                ? "bg-[#24060C] border border-white/15 text-white placeholder-white/30 focus:border-[#C5A059]"
                : "bg-[#FAF8F5] border border-[#ECE5DA] text-[#1C1514] placeholder-[#736762]/50 focus:border-[#6B1C28]"
            }`}
          />
        </div>

        <div>
          <label className={`block text-xs font-mono uppercase tracking-wider mb-1 ${
            isDark ? "text-[#C5B5AE]" : "text-[#4A403C]"
          }`}>
            Organization / Entity
          </label>
          <input
            type="text"
            value={formData.organization}
            onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
            placeholder="e.g. Commercial Partner LLC"
            className={`w-full rounded px-3.5 py-2.5 text-xs focus:outline-none ${
              isDark
                ? "bg-[#24060C] border border-white/15 text-white placeholder-white/30 focus:border-[#C5A059]"
                : "bg-[#FAF8F5] border border-[#ECE5DA] text-[#1C1514] placeholder-[#736762]/50 focus:border-[#6B1C28]"
            }`}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={`block text-xs font-mono uppercase tracking-wider mb-1 ${
            isDark ? "text-[#C5B5AE]" : "text-[#4A403C]"
          }`}>
            Business Email
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="name@company.com"
            className={`w-full rounded px-3.5 py-2.5 text-xs focus:outline-none ${
              isDark
                ? "bg-[#24060C] border border-white/15 text-white placeholder-white/30 focus:border-[#C5A059]"
                : "bg-[#FAF8F5] border border-[#ECE5DA] text-[#1C1514] placeholder-[#736762]/50 focus:border-[#6B1C28]"
            }`}
          />
        </div>

        <div>
          <label className={`block text-xs font-mono uppercase tracking-wider mb-1 ${
            isDark ? "text-[#C5B5AE]" : "text-[#4A403C]"
          }`}>
            Phone / Mobile
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+971 50 000 0000"
            className={`w-full rounded px-3.5 py-2.5 text-xs focus:outline-none ${
              isDark
                ? "bg-[#24060C] border border-white/15 text-white placeholder-white/30 focus:border-[#C5A059]"
                : "bg-[#FAF8F5] border border-[#ECE5DA] text-[#1C1514] placeholder-[#736762]/50 focus:border-[#6B1C28]"
            }`}
          />
        </div>
      </div>

      <div>
        <label className={`block text-xs font-mono uppercase tracking-wider mb-1 ${
          isDark ? "text-[#C5B5AE]" : "text-[#4A403C]"
        }`}>
          Target Vertical / Department
        </label>
        <select
          value={formData.vertical}
          onChange={(e) => setFormData({ ...formData, vertical: e.target.value })}
          className={`w-full rounded px-3.5 py-2.5 text-xs focus:outline-none ${
            isDark
              ? "bg-[#24060C] border border-white/15 text-white focus:border-[#C5A059]"
              : "bg-[#FAF8F5] border border-[#ECE5DA] text-[#1C1514] focus:border-[#6B1C28]"
          }`}
        >
          <option value="group">MASHAL GROUP Holding Inquiries</option>
          <option value="petroleum">Mashal Petroleum (Forecourts &amp; Fuel)</option>
          <option value="shipping">Mashwani Shipping L.L.C. (Freight &amp; NVOCC)</option>
          <option value="foods">Mashal Foods (Strategic Planning)</option>
          <option value="rentacar">Mashal Rent A Car (Mobility Division)</option>
        </select>
      </div>

      <div>
        <label className={`block text-xs font-mono uppercase tracking-wider mb-1 ${
          isDark ? "text-[#C5B5AE]" : "text-[#4A403C]"
        }`}>
          Inquiry Details
        </label>
        <textarea
          rows={4}
          required
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Please specify your operational requirements or institutional inquiry..."
          className={`w-full rounded px-3.5 py-2.5 text-xs focus:outline-none ${
            isDark
              ? "bg-[#24060C] border border-white/15 text-white placeholder-white/30 focus:border-[#C5A059]"
              : "bg-[#FAF8F5] border border-[#ECE5DA] text-[#1C1514] placeholder-[#736762]/50 focus:border-[#6B1C28]"
          }`}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className={`w-full py-3 font-bold text-xs uppercase tracking-[0.16em] rounded transition-all active:scale-[0.99] flex items-center justify-center gap-2 ${
          isDark
            ? "bg-[#FAF8F5] hover:bg-[#DEBF7D] text-[#190308]"
            : "bg-[#24060C] hover:bg-[#370C15] text-white"
        }`}
      >
        <span>{loading ? "Dispatching..." : "Dispatch Inquiry"}</span>
        {!loading && <ArrowRight className="w-3.5 h-3.5" />}
      </button>
    </form>
  );
}
