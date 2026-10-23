"use strict";

const DISCORD_URL = "https://discord.gg/Stzt94CTpu";
const YOUTUBE_URL = "https://www.youtube.com/@HealerAiko";

const pages = {
  home: ["Home", "home"],
  info: ["Game info", "game-info.html"],
  schedule: ["Schedule", "schedule.html"],
  bracket: ["Bracket", "bracket.html"],
  results: ["Results", "results.html"],
  watch: ["Watch", "watch.html"],
  register: ["Register team", "register.html"]
};

const currentPage = document.body.dataset.page || "home";
const app = document.getElementById("app");

function link(url, text, cls = "") {
  return `<a class="${cls}" href="${url}">${text}</a>`;
}

function button(url, text, cls = "btn") {
  return link(url, `${text} <span aria-hidden="true">↗</span>`, cls);
}

function header() {
  const nav = [
    ["home", "Home", "index.html"],
    ["info", "Game info", "game-info.html"],
    ["schedule", "Schedule", "schedule.html"],
    ["bracket", "Bracket", "bracket.html"],
    ["results", "Results", "results.html"],
    ["watch", "Watch", "watch.html"]
  ];

  return `
    <div class="announcement">
      ✦ Registration open · October 16–24, 2026 · Free entry · Nepali players only
    </div>

    <header class="navbar">
      <div class="container nav-inner">
        <a class="brand" href="index.html" aria-label="Jhilimili Cup home">
          <span class="brand-symbol" aria-hidden="true">♜</span>
          <span>
            <span class="brand-name">JHILI-MILI CUP</span>
            <span class="brand-sub">VALORANT · NEPAL · 2026</span>
          </span>
        </a>

        <button class="menu-toggle" type="button"
          aria-expanded="false" aria-controls="main-navigation">
          ☰ Menu
        </button>

        <nav class="nav-links" id="main-navigation" aria-label="Main navigation">
          ${nav.map(([id, name, url]) =>
            `<a href="${url}" ${currentPage === id ? 'class="active" aria-current="page"' : ""}>${name}</a>`
          ).join("")}
        </nav>

        ${button("register.html", "Register team", "btn btn-small nav-register")}
      </div>
    </header>
  `;
}

function footer() {
  return `
    <footer class="footer">
      <div class="container">
        <div class="footer-main">
          <div>
            <a class="brand" href="index.html">
              <span class="brand-symbol" aria-hidden="true">♜</span>
              <span>
                <span class="brand-name">JHILI-MILI CUP</span>
                <span class="brand-sub">VALORANT · NEPAL · 2026</span>
              </span>
            </a>
            <p style="margin-top:12px">Nepal's festival of lights. Your competitive stage.</p>
          </div>
          <div>
            <span class="stat-label">Organised by</span>
            <strong>Healer · Discord</strong>
          </div>
          <div>
            <span class="stat-label">Updates & support</span>
            ${link(DISCORD_URL, "Join tournament Discord ↗", "gold")}
          </div>
        </div>
        <div class="footer-bottom">
          <span>© 2026 Jhilimili Cup · Community VALORANT tournament</span>
          <span>All tournament times are Nepal Standard Time (NST)</span>
        </div>
      </div>
    </footer>
  `;
}

function eyebrow(text) {
  return `<div class="eyebrow">${text}</div>`;
}

function pageHero(label, title, description) {
  return `
    <section class="container page-hero">
      ${eyebrow(label)}
      <h1>${title}</h1>
      <p class="lead">${description}</p>
    </section>
  `;
}

function prizes() {
  const awards = [
    ["Champion", "01", "रू 12,500", "The brightest squad of the Cup."],
    ["Runner-up", "02", "रू 5,000", "One final push. A worthy finish."],
    ["Third place", "03", "रू 2,500", "A place among the best."],
    ["Tournament MVP", "★", "रू 1,000", "One player. An unforgettable run."]
  ];

  return `
    <div class="grid-4">
      ${awards.map(([name, number, amount, desc]) => `
        <article class="prize-card">
          <div class="prize-place"><span>${name}</span><span>${number}</span></div>
          <div class="prize-amount">${amount}</div>
          <p>${desc}</p>
        </article>
      `).join("")}
    </div>
  `;
}

function stats() {
  return `
    <div class="stats-strip">
      <div class="container stats-grid">
        <div class="stat"><span class="stat-label">Prize pool</span><div class="stat-value gold">रू 21,000</div></div>
        <div class="stat"><span class="stat-label">Opening night</span><div class="stat-value">OCT 28 · 8 PM</div></div>
        <div class="stat"><span class="stat-label">The format</span><div class="stat-value">5V5 · BO1</div></div>
        <div class="stat"><span class="stat-label">The server</span><div class="stat-value">MUMBAI</div></div>
        <div class="stat"><span class="stat-label">Eligibility</span><div class="stat-value">NEPALI PLAYERS</div></div>
      </div>
    </div>
  `;
}

function homePage() {
  return `
    <main>
      <section class="hero">
        <div class="container hero-inner">
          <div class="hero-copy">
            ${eyebrow("This Tihar, Nepal plays together")}
            <h1>JHILI-MILI <span>CUP</span></h1>
            <p class="gold">VALORANT / NEPAL / 2026</p>
            <p class="lead">Light up the server. Play for your people. Five nights. One champion. A Tihar to remember.</p>
            <div class="hero-actions">
              ${button("register.html", "Register your team — free")}
              ${button(DISCORD_URL, "Join Discord", "btn btn-outline")}
            </div>
            <p class="hero-note">✦ REGISTRATION OPEN &nbsp; Closes October 24 · Limited slots</p>
          </div>
        </div>
      </section>

      ${stats()}

      <section class="section">
        <div class="container feature-row">
          <div>
            ${eyebrow("01 / A different kind of Tihar night")}
            <h2>LIGHT THE DIYAS.<br>THEN LIGHT THE SERVER.</h2>
            <p>From the glow of our homes to the heat of the clutch, Jhilimili Cup brings Nepal's VALORANT community together for five nights of fearless play, organised by Healer.</p>
            ${link("game-info.html", "Explore the format & game information ↗", "gold")}
          </div>
          <ul class="info-list">
            <li><span class="info-number">01</span><div><strong>Five together</strong><p>Bring five starting players. Add an optional sixth as your substitute.</p></div></li>
            <li><span class="info-number">02</span><div><strong>Every round matters</strong><p>Best-of-one matches. Single elimination. No second chances.</p></div></li>
            <li><span class="info-number">03</span><div><strong>Our home. Our stage.</strong><p>Nepali players only, competing on the Mumbai server.</p></div></li>
          </ul>
        </div>
      </section>

      <section class="section section-alt">
        <div class="container">
          <div class="section-heading">
            <div>${eyebrow("02 / The stakes")}<h2>PLAY FOR MORE THAN PRIDE.</h2></div>
            <div><span class="stat-label">Total prize pool</span><div class="total-prize">रू 21,000</div></div>
          </div>
          ${prizes()}
          <p style="margin-top:20px">No entry fee. Just your squad, your skill and your shot.</p>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="section-heading">
            <div>${eyebrow("03 / Five nights. One journey.")}<h2>CLEAR YOUR EVENINGS.</h2></div>
            ${button("schedule.html", "Full match schedule", "btn btn-outline")}
          </div>
          <div class="grid-3">
            ${[
              ["28 OCT", "Opening night", "Opening matches"],
              ["29–31 OCT", "The climb", "Elimination rounds"],
              ["01 NOV", "Crown the champion", "Finals night"]
            ].map(([date, title, desc]) => `
              <article class="card">
                <span class="card-kicker">${date} · 8 PM NST</span>
                <h3 style="margin-top:15px">${title}</h3>
                <p>${desc}. Pairings and match times will be announced after registration.</p>
              </article>
            `).join("")}
          </div>
        </div>
      </section>

      <section class="section section-alt">
        <div class="container feature-row">
          <div>
            ${eyebrow("04 / The road is single elimination")}
            <h2>ONE LOSS ENDS IT.<br>ONE TEAM TAKES IT.</h2>
            <p>Every match is BO1. Follow the path from the first elimination to the final. The official draw arrives after registration closes.</p>
            ${button("bracket.html", "Explore the bracket", "btn btn-outline")}
          </div>
          <div class="card">
            <div class="card-kicker">The road still to come</div>
            <h3 style="margin-top:18px">8 TEAMS. ONE CHAMPION.</h3>
            <p>This is an illustrative bracket only. The final team count and pairings have not been confirmed.</p>
            ${button("results.html", "View tournament results", "btn btn-outline")}
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container grid-2">
          <div class="card">
            ${eyebrow("05 / Your evening plans, sorted")}
            <h2>NOT PLAYING?<br>BE PART OF THE ROAR.</h2>
            <p>Follow the tournament and watch for stream announcements from Healer.</p>
            ${button("watch.html", "Open the viewing guide")}
          </div>
          <div class="card">
            ${eyebrow("06 / Find your people")}
            <h2>THE SQUAD BEYOND YOUR SQUAD.</h2>
            <p>Join the community for registration support, official rules and tournament announcements.</p>
            ${button(DISCORD_URL, "Join the Discord community", "btn btn-outline")}
          </div>
        </div>
      </section>

      <section class="section section-alt">
        <div class="container">
          ${eyebrow("07 / Before you queue")}
          <h2>GOOD QUESTIONS. CLEAR ANSWERS.</h2>
          <div class="grid-2" style="margin-top:28px">
            <article class="card"><h3>Is there an entry fee?</h3><p>No. Registration is free.</p></article>
            <article class="card"><h3>Who can play?</h3><p>The tournament is exclusively for Nepali players.</p></article>
            <article class="card"><h3>When does registration close?</h3><p>October 24, 2026. Register before the deadline.</p></article>
            <article class="card"><h3>Where are the official rules?</h3><p>Join the tournament Discord for official rules and organiser announcements.</p></article>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          ${eyebrow("Registration closes October 24, 2026")}
          <h2>YOUR FIVE. YOUR FIRE. YOUR CUP.</h2>
          <p>Free entry · Nepali players only · Limited slots</p>
          ${button("register.html", "Register your team")}
        </div>
      </section>
    </main>
  `;
}

function infoPage() {
  const items = [
    ["01", "Eligibility", "Nepali players ONLY", "A tournament for Nepal's VALORANT community."],
    ["02", "Match format", "5v5 · BO1 · Single elimination", "Five starting players, with an optional sixth substitute."],
    ["03", "Server", "Mumbai", "All tournament matches use the Mumbai server."],
    ["04", "Start time", "October 28, 2026 · 8:00 PM NST", "NST means Nepal Standard Time (UTC+5:45)."],
    ["05", "Event window", "October 28–November 1, 2026", "Five consecutive days progressing toward the finals."],
    ["06", "Registration", "October 16–24, 2026 · Free entry", "Registration dates are announced. Team capacity is not confirmed."]
  ];

  return `
    <main>
      ${pageHero("The competition / Game information", "KNOW THE GAME. OWN THE NIGHT.", "The essentials, without the guesswork. Here is what has been announced for Jhilimili Cup — and where to find the official rules.")}

      <section class="section" style="padding-top:15px">
        <div class="container feature-row">
          <div class="feature-panel">
            <div class="card-kicker">VALORANT / COMPETITIVE</div>
            <div class="big-format">5V5</div>
            <h3>ONE MAP.<br>NO SECOND CHANCES.</h3>
            <p>Best-of-one matches in a single-elimination tournament. A match loss ends your championship run.</p>
          </div>
          <ul class="info-list">
            ${items.map(([n, label, value, desc]) => `
              <li><span class="info-number">${n}</span><div><span class="stat-label">${label}</span><strong>${value}</strong><p>${desc}</p></div></li>
            `).join("")}
          </ul>
        </div>
      </section>

      <section class="section section-alt">
        <div class="container">
          ${eyebrow("The full rulebook")}
          <div class="feature-row">
            <div><h2>GET THE OFFICIAL WORD.<br>DIRECT FROM HEALER.</h2><p>Read the official rules before registering. This website is an overview, not the complete rulebook.</p>${button(DISCORD_URL, "Join Discord for official rules")}</div>
            <div class="card"><h3>Check with the organiser</h3><ul><li>Map selection and match procedures</li><li>Check-in, reporting and disputes</li><li>Roster changes and substitute use</li><li>Final pairings and placement-match details</li></ul><p>Ask Healer for the latest official details.</p></div>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="section-heading"><h2>रू 21,000. FOUR REASONS TO SHOW UP.</h2></div>
          ${prizes()}
          <div style="margin-top:28px">${button("register.html", "Register your team")}</div>
        </div>
      </section>
    </main>
  `;
}

const scheduleDays = [
  { day: 1, date: "28", month: "OCT", weekday: "WED", title: "Opening night", desc: "The first step on the road to the Cup.", round: "Opening matches" },
  { day: 2, date: "29", month: "OCT", weekday: "THU", title: "The climb continues", desc: "Survive the night. Stay in the race.", round: "Elimination rounds" },
  { day: 3, date: "30", month: "OCT", weekday: "FRI", title: "The field narrows", desc: "The championship path gets tighter.", round: "Later elimination rounds" },
  { day: 4, date: "31", month: "OCT", weekday: "SAT", title: "Finals in sight", desc: "A place on the final stage is within reach.", round: "Semifinals window" },
  { day: 5, date: "01", month: "NOV", weekday: "SUN", title: "Finals night", desc: "One team leaves as Jhilimili Cup champion.", round: "Championship final" }
];

function schedulePage() {
  return `
    <main>
      ${pageHero("Match schedule / October 28–November 1, 2026", "FIVE NIGHTS. KEEP THEM FREE.", "The Cup starts October 28, 2026 at 8:00 PM NST. Follow the five-day journey toward finals, with detailed pairings to follow registration.")}

      <section class="container">
        <div class="notice"><strong>◷ Daily round windows are provisional</strong><p>The event dates are announced. Round allocation, individual match times and pairings are pending registration. The final schedule will be shared on Discord.</p></div>
        <div class="section-heading">
          <div class="filters" aria-label="Filter schedule">
            <button class="filter-btn active" data-filter="all">All five days</button>
            ${scheduleDays.map(d => `<button class="filter-btn" data-filter="${d.day}">Day ${d.day}</button>`).join("")}
          </div>
          <span class="stat-label">Nepal Standard Time · NST (UTC+5:45)</span>
        </div>
        <div class="schedule-list">
          ${scheduleDays.map(d => `
            <article class="schedule-row ${d.day === 5 ? "featured" : ""}" data-day="${d.day}">
              <div><span class="stat-label">Day</span><div class="day-number">0${d.day}</div></div>
              <div><div class="date-number">${d.date}</div><span class="date-month">${d.month} · ${d.weekday}</span></div>
              <div><div class="schedule-title">${d.title}</div><div class="schedule-desc">${d.desc}</div></div>
              <div class="schedule-round"><strong>${d.round}</strong><div class="schedule-desc gold">Provisional · Pairings TBD</div></div>
              <div class="schedule-time">8:00 PM NST<small>Match times TBA</small></div>
            </article>
          `).join("")}
        </div>
      </section>

      <section class="section">
        <div class="container grid-2">
          <div class="card"><h3>Third place is part of the prize pool.</h3><p>The रू 2,500 award is announced. Any placement match and its timing will be clarified by the organiser.</p></div>
          <div class="card"><h3>Let Discord keep you up to date.</h3><p>Healer will share the final draw, individual match timings and schedule changes through the tournament Discord.</p>${button(DISCORD_URL, "Join Discord", "btn btn-outline")}</div>
        </div>
      </section>
    </main>
  `;
}

function bracketPage() {
  const quarters = [
    ["QF A", "Seed 01", "Seed 08"],
    ["QF B", "Seed 04", "Seed 05"],
    ["QF C", "Seed 02", "Seed 07"],
    ["QF D", "Seed 03", "Seed 06"]
  ];

  const match = (title, a, b) => `
    <div class="match">
      <div class="match-header"><span>${title}</span><span>BO1</span></div>
      <div class="team-slot"><span>${a} · TBD</span><span>—</span></div>
      <div class="team-slot"><span>${b} · TBD</span><span>—</span></div>
    </div>`;

  return `
    <main>
      ${pageHero("Single elimination / The path to the Cup", "EVERY LINE LEADS TO ONE.", "One match at a time. Follow the journey to the Jhilimili Cup final. The official draw awaits the close of registration.")}

      <section class="container">
        <div class="notice"><strong>ⓘ Illustrative 8-entry bracket — not a confirmed team count</strong><p>Seed placeholders demonstrate the format only. Final entry count, seeding, rounds and pairings will be confirmed after registration closes October 24, 2026. No teams are drawn yet.</p></div>
        <div class="section-heading"><span class="card-kicker">● Single elimination</span><span class="stat-label">All matches BO1 · Mumbai server</span></div>
        <div class="bracket-scroll">
          <div class="bracket">
            <section class="bracket-column"><h3>Quarterfinals</h3><div class="bracket-stack">${quarters.map(q => match(...q)).join("")}</div></section>
            <section class="bracket-column"><h3>Semifinals</h3><div class="bracket-stack">${match("SF A", "Winner QF A", "Winner QF B")}${match("SF B", "Winner QF C", "Winner QF D")}</div></section>
            <section class="bracket-column"><h3>Final</h3><div class="bracket-stack">${match("Championship final", "Winner SF A", "Winner SF B")}</div></section>
            <section class="bracket-column"><h3 class="gold">Champion</h3><div class="champion-box"><div class="trophy">♜</div><h3>TBD</h3><strong class="gold">रू 12,500</strong></div></section>
          </div>
        </div>
        <p class="stat-label">Format preview only / Official bracket and round timing to be announced on Discord.</p>
      </section>

      <section class="section">
        <div class="container grid-2">
          <div class="card"><h3>03 · Third place</h3><p>रू 2,500. Placement-match format and scheduling are provisional, awaiting organiser confirmation.</p></div>
          <div class="card"><h3>October 28–November 1, 2026</h3><p>The tournament begins October 28 at 8:00 PM NST. See the five-day schedule for provisional round windows.</p>${button("schedule.html", "View schedule", "btn btn-outline")}</div>
        </div>
      </section>
    </main>
  `;
}

function resultsPage() {
  return `
    <main>
      ${pageHero("Results / The story so far", "THE GLORY IS STILL UP FOR GRABS.", "Jhilimili Cup has not started yet. No wins, no losses, no champions — just five nights of possibility ahead.")}

      <section class="container">
        <div class="results-hero">
          <div class="results-copy">
            <span class="results-status">⌛ The first round is still ahead</span>
            <h2 style="font-size:clamp(38px,5vw,55px);margin-top:22px">NO SCORES YET.<br>ALL THE FIRE TO COME.</h2>
            <p>Match results will appear once play begins. Final standings and the tournament MVP will be announced after the competition.</p>
            <hr style="border:0;border-top:1px solid var(--border);margin:24px 0">
            <span class="stat-label">Opening night</span>
            <h3 class="gold">OCTOBER 28, 2026 · 8:00 PM NST</h3>
            <div class="hero-actions">${button("schedule.html", "View schedule")}${button(DISCORD_URL, "Follow on Discord", "btn btn-outline")}</div>
          </div>
          <div class="results-art" aria-label="Decorative trophy symbol"><span>♜</span></div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="prize-total-row"><h2>रू 21,000 WAITING TO BE WON.</h2><span class="stat-label">No standings published yet</span></div>
          ${prizes()}
        </div>
      </section>

      <section class="section section-alt">
        <div class="container grid-3">
          <article class="card"><span class="info-number">01</span><h3>Match scores</h3><p>Awaiting the first match. Pairings will be confirmed after registration.</p></article>
          <article class="card"><span class="info-number">02</span><h3>Final standings</h3><p>Champion, runner-up and third-place recipients are yet to be determined.</p></article>
          <article class="card"><span class="info-number">03</span><h3>Tournament MVP</h3><p>The रू 1,000 individual award will be announced after the event.</p></article>
        </div>
      </section>

      <section class="section">
        <div class="container section-heading"><div><h2>THE NEXT NAME HERE COULD BE YOURS.</h2><p>Free entry · Nepali players only · Registration closes October 24, 2026</p></div>${button("register.html", "Register your team")}</div>
      </section>
    </main>
  `;
}

function watchPage() {
  return `
    <main>
      ${pageHero("Watch / Join the community", "FEEL EVERY CLUTCH. SHARE EVERY CHEER.", "Not playing? You can still be part of the Jhilimili Cup. Follow Healer's channel and join the Discord community for tournament updates.")}

      <section class="section" style="padding-top:15px">
        <div class="container grid-2">
          <article class="card watch-card">
            <div class="watch-icon">▶</div>
            <span class="card-kicker">Official stream destination</span>
            <h2>WATCH ON YOUTUBE.</h2>
            <p>Visit HealerAiko's YouTube channel for stream access and any broadcast announcements. A specific live-stream schedule has not yet been confirmed.</p>
            ${button(YOUTUBE_URL, "Open HealerAiko on YouTube")}
          </article>
          <article class="card watch-card">
            <div class="watch-icon">✦</div>
            <span class="card-kicker">Official community</span>
            <h2>JOIN THE DISCORD.</h2>
            <p>Find tournament announcements, official rules, bracket updates and any match-viewing details shared by organiser Healer.</p>
            ${button(DISCORD_URL, "Join tournament Discord")}
          </article>
        </div>
      </section>

      <section class="section section-alt">
        <div class="container">
          ${eyebrow("Your viewing checklist")}
          <h2>BE READY FOR FINALS NIGHT.</h2>
          <div class="grid-3" style="margin-top:25px">
            <article class="card"><span class="info-number">01</span><h3>Follow the channel</h3><p>Subscribe to the YouTube channel and check for event-stream announcements.</p></article>
            <article class="card"><span class="info-number">02</span><h3>Join the server</h3><p>Discord is the official home for rules, updates and tournament communications.</p></article>
            <article class="card"><span class="info-number">03</span><h3>Keep the dates free</h3><p>October 28–November 1, 2026. The tournament starts at 8:00 PM NST on opening night.</p></article>
          </div>
        </div>
      </section>
    </main>
  `;
}

function registerPage() {
  const playerFields = Array.from({ length: 5 }, (_, i) => `
    <div class="player-block">
      <div class="player-heading">
        <span>Starter 0${i + 1}</span>
        <span>Required</span>
      </div>

      <div class="form-grid">
        <div class="field">
          <label for="player${i + 1}">Player ${i + 1} Name *</label>
          <input
            id="player${i + 1}"
            name="Player ${i + 1} Name"
            required
            maxlength="60"
            placeholder="Enter player name"
          >
        </div>

        <div class="field">
          <label for="riot${i + 1}">Player ${i + 1} Riot ID *</label>
          <input
            id="riot${i + 1}"
            name="Player ${i + 1} Riot ID"
            required
            maxlength="60"
            placeholder="Name#TAG"
          >
        </div>

        <div class="field full">
          <label for="discord${i + 1}">
            Player ${i + 1} Discord username (optional)
          </label>
          <input
            id="discord${i + 1}"
            name="Player ${i + 1} Discord"
            maxlength="60"
            placeholder="Discord username"
          >
        </div>
      </div>
    </div>
  `).join("");

  return `
    <main>
      ${pageHero(
        "Team registration / October 16–24, 2026",
        "YOUR SQUAD STARTS HERE.",
        "Five players. One shared ambition. Register your Jhilimili Cup team — free entry, exclusively for Nepali players."
      )}

      <section class="container form-layout">

        <form
          class="form-card"
          id="registration-form"
          action="https://formspree.io/f/xzedlejn"
          method="POST"
        >
          <input
            type="hidden"
            name="_subject"
            value="New Jhilimili Cup Team Registration"
          >

          <section class="form-section">
            <h2><span class="info-number">01</span> TEAM & CAPTAIN</h2>

            <p>
              Required fields are marked *. The captain is the main
              contact for the team.
            </p>

            <div class="form-grid">

              <div class="field full">
                <label for="teamName">Team name *</label>
                <input
                  id="teamName"
                  name="Team Name"
                  required
                  maxlength="60"
                  placeholder="Enter your team name"
                >
              </div>

              <div class="field">
                <label for="captainName">Captain's player name *</label>
                <input
                  id="captainName"
                  name="Captain Name"
                  required
                  maxlength="60"
                  placeholder="In-game player name"
                >
              </div>

              <div class="field">
                <label for="captainDiscord">
                  Captain's Discord username *
                </label>
                <input
                  id="captainDiscord"
                  name="Captain Discord"
                  required
                  maxlength="60"
                  placeholder="Discord username"
                >
              </div>

              <div class="field full">
                <label for="captainEmail">
                  Captain's email address *
                </label>
                <input
                  id="captainEmail"
                  type="email"
                  name="email"
                  required
                  maxlength="120"
                  placeholder="captain@example.com"
                >
              </div>

            </div>
          </section>

          <section class="form-section">
            <h2><span class="info-number">02</span> LOCK IN YOUR FIVE</h2>

            <p>
              Five starting players are required. Enter each Riot ID,
              including its tag, such as Name#TAG.
            </p>

            ${playerFields}
          </section>

          <section class="form-section">
            <h2>YOUR SIXTH / SUBSTITUTE</h2>

            <p>
              An optional substitute can be added below. If you enter
              substitute details, both their player name and Riot ID
              must be completed.
            </p>

            <div class="form-grid">

              <div class="field">
                <label for="subName">Substitute player name</label>
                <input
                  id="subName"
                  name="Substitute Name"
                  maxlength="60"
                  placeholder="Player name"
                >
              </div>

              <div class="field">
                <label for="subRiot">Substitute Riot ID</label>
                <input
                  id="subRiot"
                  name="Substitute Riot ID"
                  maxlength="60"
                  placeholder="Name#TAG"
                >
              </div>

              <div class="field full">
                <label for="subDiscord">
                  Substitute Discord username
                </label>
                <input
                  id="subDiscord"
                  name="Substitute Discord"
                  maxlength="60"
                  placeholder="Discord username"
                >
              </div>

            </div>
          </section>

          <section class="form-section">
            <h2><span class="info-number">03</span> BEFORE YOU SUBMIT</h2>

            <p>
              Read the full official tournament rules on Discord
              before confirming your entry.
            </p>

            <label class="checkbox-line">
              <input
                type="checkbox"
                name="Eligibility Confirmation"
                value="Confirmed"
                required
              >
              <span>
                I confirm all players on this roster meet the
                tournament's Nepali-player eligibility requirement. *
              </span>
            </label>

            <label class="checkbox-line">
              <input
                type="checkbox"
                name="Rules Agreement"
                value="Accepted"
                required
              >
              <span>
                I have read and agree to the official tournament
                rules shared on Discord. *
              </span>
            </label>

            <p class="gold">Free entry. No payment required.</p>

            <button class="btn" type="submit">
              Submit Team Registration ↗
            </button>

            <div
              id="form-message"
              class="form-message"
              role="status"
              aria-live="polite"
              hidden
            ></div>

            <p style="font-size:11px; margin-top:15px">
              Your registration will be submitted to Formspree.
              Please check all player details before submitting.
            </p>
          </section>
        </form>

        <aside class="sidebar-sticky">

          <div class="side-card">
            <span class="card-kicker">● Limited slots</span>
            <h2>FREE ENTRY.</h2>
            <p>रू 21,000 total prize pool</p>

            <div class="side-fact">
              <small>Registration opens</small>
              <span>October 16, 2026</span>
            </div>

            <div class="side-fact">
              <small>Registration closes</small>
              <span>October 24, 2026</span>
            </div>

            <div class="side-fact">
              <small>Tournament begins</small>
              <span>October 28, 2026 · 8:00 PM NST</span>
            </div>

            <div class="side-fact">
              <small>Event dates</small>
              <span>October 28–November 1, 2026</span>
            </div>
          </div>

          <div class="card">
            <h3>NEED A HAND?</h3>
            <p>
              Contact Healer on Discord for registration help
              and the full official rules.
            </p>
            ${button(
              DISCORD_URL,
              "Contact Healer",
              "btn btn-outline"
            )}
          </div>

        </aside>
      </section>
    </main>
  `;
}

const renderers = {
  home: homePage,
  info: infoPage,
  schedule: schedulePage,
  bracket: bracketPage,
  results: resultsPage,
  watch: watchPage,
  register: registerPage
};

function setupNavigation() {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-links");

  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.textContent = isOpen ? "✕ Close" : "☰ Menu";
  });
}

function setupScheduleFilters() {
  const buttons = document.querySelectorAll("[data-filter]");
  const rows = document.querySelectorAll("[data-day]");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      buttons.forEach(item => item.classList.remove("active"));
      button.classList.add("active");

      const selected = button.dataset.filter;

      rows.forEach(row => {
        row.hidden = selected !== "all" && row.dataset.day !== selected;
      });
    });
  });
}

function setupRegistration() {
  const form = document.getElementById("registration-form");

  if (!form) return;

  const message = document.getElementById("form-message");

  form.addEventListener("submit", event => {
    const subName = document.getElementById("subName").value.trim();
    const subRiot = document.getElementById("subRiot").value.trim();
    const subDiscord = document.getElementById("subDiscord").value.trim();

    const hasSubstitute = Boolean(
      subName || subRiot || subDiscord
    );

    // If any substitute detail is entered, require the name and Riot ID.
    if (hasSubstitute && (!subName || !subRiot)) {
      event.preventDefault();

      message.hidden = false;
      message.textContent =
        "Please enter the substitute's player name and Riot ID, " +
        "or clear all substitute fields.";

      message.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });

      return;
    }
  });
}

function init() {
  const renderPage = renderers[currentPage] || homePage;

  app.innerHTML = header() + renderPage() + footer();

  setupNavigation();
  setupScheduleFilters();
  setupRegistration();
}

init();