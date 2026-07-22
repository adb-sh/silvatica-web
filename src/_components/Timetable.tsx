// Festival timetable, rendered fully static at build time (no client JS).
// The mobile stage switcher is CSS-only (hidden radio inputs + labels),
// so the whole component ships as plain HTML. Styles live in main.scss (.timetable).

type Slot = [string, string]; // ["18:00–19:00", "Artist"]
type Day = { day: string; slots: Slot[][] }; // slots[stageIndex] = list of slots

const STAGES = [
  { name: "Nachtschwärmer", short: "Nacht­schwärmer" },
  { name: "Labellula", short: "Labellula" },
  { name: "Mantis", short: "Mantis" },
];

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
  <div class="timetable">
    {/* CSS-only stage switch (mobile): a native radio group. The schedule reacts
        via .timetable:has(#tt-sN:checked) …, so no JavaScript is involved. */}
    <fieldset class="tt-tabs">
      <legend class="tt-sronly">Bühne wählen</legend>
      {STAGES.map((s, i) => (
        <>
          <input type="radio" name="tt-stage" id={`tt-s${i}`} class="tt-radio" checked={i === 0} />
          <label class={`tt-tab tt-s${i}`} for={`tt-s${i}`}>{s.short}</label>
        </>
      ))}
    </fieldset>

    <div class="tt-schedule">
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
          <section class="tt-day">
            <h3 class="tt-dayhead">{d.day}</h3>

            {/* Stage headers (desktop) */}
            <div class="tt-head" aria-hidden="true">
              <span></span>
              {STAGES.map((s, i) => <div class={`tt-h tt-s${i}`}>{s.name}</div>)}
            </div>

            {/* Time grid */}
            <div class="tt-grid" style={`grid-template-rows:repeat(${rows},var(--tt-rowh))`}>
              {hours.map((t) => <div class="tt-line tt-hour" style={`grid-row:${rowOf(t)}`}></div>)}
              {hours.map((t) => <div class="tt-time" style={`grid-row:${rowOf(t)}`}>{fmt(t)}</div>)}
              {halves.map((t) => <div class="tt-line" style={`grid-row:${rowOf(t)}`}></div>)}

              {acts.map((a) => (
                <article
                  class={`tt-act tt-s${a.si}${/^pause$/i.test(a.name) ? " tt-brk" : ""}`}
                  style={`grid-row:${rowOf(a.s)}/${rowOf(a.e)}`}
                >
                  {/* Stage name for assistive tech — the desktop header is aria-hidden
                      and the tab labels are display:none on desktop. */}
                  <span class="tt-sronly">{STAGES[a.si].name}: </span>
                  <span class="tt-t">{a.range}</span>
                  <span class="tt-a">{a.name}</span>
                </article>
              ))}

              {/* Empty stage note — shown only on mobile when that stage is active */}
              {empty.map((si) => (
                <article class={`tt-act tt-note tt-s${si}`} style="grid-row:1 / span 2">
                  <span class="tt-sronly">{STAGES[si].name}: </span>
                  <span class="tt-a">keine Acts</span>
                </article>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  </div>
);
