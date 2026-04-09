import React from "react";
import { CheckCircle, Shield, TrendingUp } from "lucide-react";

export default function SectionTrustBar() {
  const stats = [
    {
      icon: <Shield size={22} />,
      value: "50+",
      label: "Trusted Companies"
    },
    {
      icon: <TrendingUp size={22} />,
      value: "94%",
      label: "Success Rate"
    },
    {
      icon: <CheckCircle size={22} />,
      value: "24/7",
      label: "Monitoring & Support"
    }
  ];

  return (
    <section className="py-2 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="space-y-3">
            <p className="text-sm font-bold text-[#e60a11] uppercase tracking-widest">
              Trust Bar
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">
              Built for reliability, delivered with results
            </h2>
            <p className="text-slate-600 max-w-xl">
              From secure infrastructure to measurable outcomes, our process keeps
              teams confident at every stage.
            </p>
          </div>

          <div className="bg-[#0a0505] border border-white/10 rounded-3xl p-6 md:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.25)] w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-start md:items-center text-left md:text-center"
                >
                  <div className="inline-flex items-center gap-3">
                    <div className="h-10 w-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                      {stat.icon}
                    </div>
                  </div>
                  <p className="text-3xl md:text-4xl font-black text-white mt-4">
                    {stat.value}
                  </p>
                  <p className="text-slate-300 text-sm md:text-base font-semibold mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-white/10 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
              <p className="text-slate-300 text-sm">
                Trusted by teams who need speed, security, and clarity.
              </p>
              <div className="flex gap-3">
                <div className="h-2 w-2 rounded-full bg-[#e60a11]" />
                <div className="h-2 w-2 rounded-full bg-rose-500" />
                <div className="h-2 w-2 rounded-full bg-amber-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

