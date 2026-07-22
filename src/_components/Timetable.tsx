// Festival timetable, rendered fully static at build time (no client JS).
// Styled entirely with tailwind/daisyUI utilities — no custom CSS classes.
// The mobile stage switcher is CSS-only: hidden radios + labels; the acts of
// the checked stage are revealed via group-has-[...] variants, the active tab
// is highlighted via named peer-checked variants.

type Slot = [string, string]; // ["18:00–19:00", "Artist"]
type Day = { day: string; slots: Slot[][] }; // slots[stageIndex] = list of slots

const STAGES = [
  { name: "Nachtschwärmer", short: "Nacht­schwärmer" },
  { name: "Labellula", short: "Labellula" },
  { name: "Mantis", short: "Mantis" },
];

// Per-stage utility classes (radio ids are referenced by the group-has variants)
const STAGE_UI = [
  {
    id: "tt-s0",
    peer: "peer/s0",
    head: "border-primary",
    act: "md:col-start-2 border-l-primary max-md:group-has-[#tt-s0:checked]:flex",
    note: "border-l-primary max-md:group-has-[#tt-s0:checked]:flex",
    tab:
      "peer-checked/s0:bg-primary peer-checked/s0:text-primary-content peer-checked/s0:border-transparent " +
      "peer-focus-visible/s0:outline peer-focus-visible/s0:outline-2 peer-focus-visible/s0:outline-offset-2 peer-focus-visible/s0:outline-base-content",
  },
  {
    id: "tt-s1",
    peer: "peer/s1",
    head: "border-secondary",
    act: "md:col-start-3 border-l-secondary max-md:group-has-[#tt-s1:checked]:flex",
    note: "border-l-secondary max-md:group-has-[#tt-s1:checked]:flex",
    tab:
      "peer-checked/s1:bg-secondary peer-checked/s1:text-secondary-content peer-checked/s1:border-transparent " +
      "peer-focus-visible/s1:outline peer-focus-visible/s1:outline-2 peer-focus-visible/s1:outline-offset-2 peer-focus-visible/s1:outline-base-content",
  },
  {
    id: "tt-s2",
    peer: "peer/s2",
    head: "border-info",
    act: "md:col-start-4 border-l-info max-md:group-has-[#tt-s2:checked]:flex",
    note: "border-l-info max-md:group-has-[#tt-s2:checked]:flex",
    tab:
      "peer-checked/s2:bg-info peer-checked/s2:text-info-content peer-checked/s2:border-transparent " +
      "peer-focus-visible/s2:outline peer-focus-visible/s2:outline-2 peer-focus-visible/s2:outline-offset-2 peer-focus-visible/s2:outline-base-content",
  },
];

// Shared utility bundles
const GRID_COLS = "grid-cols-[3.6rem_1fr] md:grid-cols-[3.6rem_repeat(3,minmax(0,1fr))]";
const STICKY = "sticky top-16 bg-base-100"; // top-16 = height of the fixed site navbar
const ACT_BASE =
  "relative z-[1] col-start-2 my-px hidden md:flex flex-col justify-center gap-0.5 " +
  "overflow-hidden border border-solid border-base-300 border-l-2 bg-base-200 px-2 py-1";
const TAB_BASE =
  "flex-1 cursor-pointer select-none border border-solid border-base-300 bg-base-200 " +
  "px-1 py-2 text-center font-mono text-xs leading-tight tracking-wide text-base-content";

const DAYS: Day[] = [
  {
    day: "Freitag · 07.08.2026",
    slots: [
      [["18:00–19:00", "Kosmonaut"], ["19:00–20:00", "Amara"], ["20:00–21:30", "ANTI ANTI"], ["21:30–23:00", "CHRIZZ STOFF"], ["23:00–00:30", "malfunction b2b Ben Boblenz"], ["00:30–02:00", "LARNIE"]],
      [["19:00–21:30", "Arian b2b Jausezeit b2b Kevin De Souza"], ["21:30–23:00", "Benebelt b2b Findus"], ["23:00–00:30", "Garlic Ghost b2b Grinseriese"], ["00:30–02:00", "Amnesiac"]],
      [["18:00–19:00", "George John"], ["19:30–20:30", "Mechthild"], ["21:00–22:00", "Zweilaster"], ["22:30–23:30", "ildikó"]],
    ],
  },
  {
    day: "Samstag · 08.08.2026",
    slots: [
      [["13:00–14:00", "Ferdi Sophie"], ["14:00–15:30", "MABOUGE"], ["15:30–17:00", "DJ Kind"], ["17:00–18:30", "DJ Sami"], ["18:30–20:00", "10A100"], ["20:00–21:30", "Flowra"], ["21:30–23:00", "moneten b2b flanke8"], ["23:00–00:30", "Kichererbsenstampf"], ["00:30–02:00", "BUFFY"]],
      [["17:00–18:30", "Finno"], ["18:30–20:00", "Carlo Carluci"], ["20:00–21:30", "JNSRL"], ["21:30–23:00", "DJ Umleitung"], ["23:00–00:30", "LUMARO b2b ADS"], ["00:30–02:00", "MichlBichl b2b Sam K."]],
      [["12:00–13:00", "Takt e.V."], ["13:30–14:30", "shuk"], ["14:30–18:00", "Pause"], ["18:00–19:00", "Sloe Paul"], ["19:30–20:30", "Zsolt"], ["21:00–22:00", "Ingo & Foerb"], ["22:30–23:30", "NeuRuTics"]],
    ],
  },
  {
    day: "Sonntag · 09.08.2026",
    slots: [
      [["11:00–12:00", "Workshop"], ["13:30–15:00", "Blinki"], ["15:00–16:30", "Red Sun Music"], ["16:30–18:00", "Feli"], ["18:00–19:30", "Millson"], ["19:30–21:00", "Special K"]],
      [],
      [["13:00–14:00", "Nico Gumpel"], ["14:30–15:30", "Ten Faced"], ["16:30–18:00", "HAZE'EVOT"]],
    ],
  },
];

// "18:00" -> minutes from midnight; after-midnight times (< 08:00) roll to the next day
const toMin = (hhmm: string) => {
  const [h, m] = hhmm.split(":").map(Number);
  return h < 8 ? h * 60 + m + 1440 : h * 60 + m;
};
const fmt = (t: number) => {
  t %= 1440;
  return String(Math.floor(t / 60)).padStart(2, "0") + ":" + String(t % 60).padStart(2, "0");
};

export default () => (
  <div class="group">
    {/* CSS-only stage switch (mobile): a native radio group; no JavaScript. */}
    <fieldset class={`flex md:hidden ${STICKY} z-[5] m-0 mb-5 min-w-0 gap-1.5 border-x-0 border-t-0 border-b border-solid border-base-300 px-0 pt-2.5 pb-3`}>
      <legend class="sr-only">Bühne wählen</legend>
      {STAGES.map((s, i) => (
        <>
          <input type="radio" name="tt-stage" id={STAGE_UI[i].id} class={`sr-only ${STAGE_UI[i].peer}`} checked={i === 0} />
          <label class={`${TAB_BASE} ${STAGE_UI[i].tab}`} for={STAGE_UI[i].id}>{s.short}</label>
        </>
      ))}
    </fieldset>

    <div>
      {DAYS.map((d) => {
        // Collect acts and the day's time window
        const acts: { si: number; s: number; e: number; name: string; range: string }[] = [];
        let mn = Infinity, mx = -Infinity;
        d.slots.forEach((slots, si) =>
          slots.forEach(([range, name]) => {
            const [a, b] = range.split("–").map((x) => x.trim());
            const s = toMin(a), e = toMin(b);
            mn = Math.min(mn, s); mx = Math.max(mx, e);
            acts.push({ si, s, e, name, range });
          })
        );
        mn = Math.floor(mn / 60) * 60; // round down to full hour
        mx = Math.ceil(mx / 60) * 60;  // round up to full hour
        const rows = (mx - mn) / 30;   // 30-minute grid
        const rowOf = (t: number) => (t - mn) / 30 + 1;

        const hours: number[] = [];
        for (let t = mn; t <= mx; t += 60) hours.push(t);
        const halves: number[] = [];
        for (let t = mn + 30; t < mx; t += 60) halves.push(t);
        const empty = d.slots.map((s, si) => (s.length ? -1 : si)).filter((v) => v >= 0);

        return (
          <section class="mb-12">
            <h3 class="mt-0 mb-4 text-center tracking-wide">{d.day}</h3>

            {/* Stage headers (desktop) */}
            <div class={`hidden md:grid ${GRID_COLS} ${STICKY} z-[4] gap-x-2 pt-1.5 pb-2`} aria-hidden="true">
              <span></span>
              {STAGES.map((s, i) => (
                <div class={`border-2 border-solid px-1 py-2 text-center font-mono text-xs tracking-wide text-base-content ${STAGE_UI[i].head}`}>
                  {s.name}
                </div>
              ))}
            </div>

            {/* Time grid */}
            <div class={`relative mt-3 grid ${GRID_COLS} gap-x-2`} style={`grid-template-rows:repeat(${rows},2.25rem)`}>
              {hours.map((t) => <div class="pointer-events-none col-span-full h-0 self-start border-t border-solid border-base-content/20" style={`grid-row:${rowOf(t)}`}></div>)}
              {halves.map((t) => <div class="pointer-events-none col-span-full h-0 self-start border-t border-solid border-base-content/10" style={`grid-row:${rowOf(t)}`}></div>)}
              {hours.map((t) => (
                <div class="pointer-events-none col-start-1 h-0 -translate-y-1/2 self-start justify-self-end whitespace-nowrap pr-2 text-[.72rem] leading-none text-base-content/55 tabular-nums" style={`grid-row:${rowOf(t)}`}>
                  {fmt(t)}
                </div>
              ))}

              {acts.map((a) => {
                const brk = /^pause$/i.test(a.name);
                return (
                  <article
                    class={`${ACT_BASE} ${STAGE_UI[a.si].act}${brk ? " border-dashed bg-transparent" : ""}`}
                    style={`grid-row:${rowOf(a.s)}/${rowOf(a.e)}`}
                  >
                    {/* Stage name for assistive tech — the desktop header is aria-hidden
                        and the tab labels are display:none on desktop. */}
                    <span class="sr-only">{STAGES[a.si].name}: </span>
                    <span class="text-[.7rem] leading-tight text-base-content/60 tabular-nums">{a.range}</span>
                    <span class={`text-[.9rem] leading-tight [overflow-wrap:anywhere] ${brk ? "font-normal italic text-base-content/60" : "font-semibold"}`}>
                      {a.name}
                    </span>
                  </article>
                );
              })}

              {/* Empty stage note — shown only on mobile when that stage is active
                  (no md:flex, so it never appears on desktop) */}
              {empty.map((si) => (
                <article
                  class={`col-start-2 [grid-row:1/span_2] my-px hidden items-center justify-center border border-dashed border-base-300 border-l-2 px-2 py-1 italic text-base-content/50 ${STAGE_UI[si].note}`}
                >
                  <span class="sr-only">{STAGES[si].name}: </span>
                  <span>keine Acts</span>
                </article>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  </div>
);
