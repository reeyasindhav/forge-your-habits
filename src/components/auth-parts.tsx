import { Flame, ProgressRing } from "@/components/brand";

export function AuthField({
  label,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="label-mono">{label}</span>
      <input
        type={type}
        value={value}
        required
        onChange={(e) => onChange(e.target.value)}
        className="mt-1.5 w-full rounded-2xl border border-input bg-card px-4 py-3 text-sm outline-none transition-shadow focus:border-mint focus:ring-4 focus:ring-mint/15"
      />
    </label>
  );
}

export function AuthAside({ quote, person }: { quote: string; person: string }) {
  return (
    <div className="relative hidden overflow-hidden bg-sidebar p-14 text-sidebar-foreground lg:flex lg:flex-col lg:justify-between">
      <Flame className="absolute -right-16 top-10 size-[420px] text-mint/10" />
      <div className="relative">
        <p className="label-mono !text-sidebar-foreground/50">Your daily rhythm</p>
        <h2 className="mt-4 max-w-md text-5xl font-semibold leading-[1.05]">
          Small steps.
          <br />
          <span className="text-sidebar-foreground/55">Real momentum.</span>
        </h2>
      </div>

      <div className="relative flex items-center gap-6 rounded-3xl bg-sidebar-accent p-6">
        <ProgressRing value={72} label="72%" />
        <div>
          <p className="text-sm leading-relaxed text-sidebar-foreground/85">“{quote}”</p>
          <p className="mt-3 font-mono text-xs tracking-widest text-mint">{person.toUpperCase()}</p>
        </div>
      </div>
    </div>
  );
}
