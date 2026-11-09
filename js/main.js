"use strict";

const DISCORD_URL = "https://discord.gg/Stzt94CTpu";
const YOUTUBE_URL = "https://www.youtube.com/@HealerAiko";
const AYUZZ_YOUTUBE_URL = "https://youtube.com/@ayuzz?si=6GR_ojMdEEQ7-4km";
const RAKSHYA_YOUTUBE_URL = "https://youtube.com/@rakshyasapkota_?si=gQHkn86Syuu6ZX9p";
const REGISTRATION_CLOSED = true;

const pages = {
  home: ["Home", "home"],
  info: ["Game info", "game-info.html"],
  schedule: ["Schedule", "schedule.html"],
  bracket: ["Bracket", "bracket.html"],
  results: ["Results", "results.html"],
  watch: ["Watch Live", "watch.html"],
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
    ["watch", "Watch Live", "watch.html"]
  ];

  return `
    <div class="announcement">
      ✦ Registration October 16–26, 2026 · Free entry · Nepali players only · REGISTRATION CLOSED NOW
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

        ${button("register.html", "Registration closed", "btn btn-small nav-register")}
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
        <div class="stat"><span class="stat-label">Opening night</span><div class="stat-value">OCT 28 · 9 PM</div></div>
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
              ${button("register.html", "Registration closed")}
              ${button(DISCORD_URL, "Join Discord", "btn btn-outline")}
            </div>
            <p class="hero-note">✦ REGISTRATION CLOSED &nbsp; Closed October 26</p>
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
                <span class="card-kicker">${date} · 9 PM NST</span>
                <h3 style="margin-top:15px">${title}</h3>
                <p>${desc}. Opening pairings are in the bracket. Individual match times will be announced on Discord.</p>
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
            <p>Every match is BO1. Follow the path from the first elimination to the final. The 16-team opening draw is now available.</p>
            ${button("bracket.html", "Explore the bracket", "btn btn-outline")}
          </div>
          <div class="card">
            <div class="card-kicker">The road still to come</div>
            <h3 style="margin-top:18px">16 TEAMS. ONE CHAMPION.</h3>
            <p>The opening matchups are confirmed. Scores and advancing teams will be added as matches are completed.</p>
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
            <p>Join the community for tournament support, official rules and announcements.</p>
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
            <article class="card"><h3>When does registration close?</h3><p>October 26, 2026. Registration is now closed.</p></article>
            <article class="card"><h3>Where are the official rules?</h3><p>Join the tournament Discord for official rules and organiser announcements.</p></article>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          ${eyebrow("Registration closed October 26, 2026")}
          <h2>YOUR FIVE. YOUR FIRE. YOUR CUP.</h2>
          <p>Free entry · Nepali players only · Registration closed</p>
          ${button("register.html", "Registration closed")}
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
    ["04", "Start time", "October 28, 2026 · 9:00 PM NST", "NST means Nepal Standard Time (UTC+5:45)."],
    ["05", "Event window", "October 28–November 1, 2026", "Five consecutive days progressing toward the finals."],
    ["06", "Registration", "October 16–26, 2026 · Free entry", "Registration has closed. The opening 16-team matchups are in the bracket."]
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
          <div style="margin-top:28px">${button("register.html", "Registration closed")}</div>
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
      ${pageHero("Match schedule / October 28–November 1, 2026", "FIVE NIGHTS. KEEP THEM FREE.", "The Cup starts October 28, 2026 at 9:00 PM NST. Follow the five-day journey toward finals, with the opening matchups available in the bracket.")}

      <section class="container">
        <div class="notice"><strong>◷ Daily round windows are provisional</strong><p>The event dates are announced. Opening pairings are available in the bracket. Individual match slots and later-round timing will be shared on Discord.</p></div>
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
              <div class="schedule-round"><strong>${d.round}</strong><div class="schedule-desc gold">Round timing provisional</div></div>
              <div class="schedule-time">9:00 PM NST<small>Match times TBA</small></div>
            </article>
          `).join("")}
        </div>
      </section>

      <section class="section">
        <div class="container grid-2">
          <div class="card"><h3>Third place is part of the prize pool.</h3><p>The रू 2,500 award is announced. Any placement match and its timing will be clarified by the organiser.</p></div>
          <div class="card"><h3>Let Discord keep you up to date.</h3><p>Healer will share individual match timings and schedule changes through the tournament Discord.</p>${button(DISCORD_URL, "Join Discord", "btn btn-outline")}</div>
        </div>
      </section>
    </main>
  `;
}



/* ==========================================
   JHILI-MILI CUP — UPDATED TOURNAMENT BRACKET
========================================== */


/* ==========================================
   JHILI-MILI CUP — FINAL TOURNAMENT BRACKET
========================================== */

// Opening round — 16 teams
const OPENING_MATCHUPS = [
  ["RAZE THE ROOF", "ETERNITY"],
  ["LOADSHEDDING", "ZENO"],
  ["BRO", "AUTUMN"],
  ["BATTI BALYO", "REDLINE"],
  ["NIGGLE", "JOJO"],
  ["FORFETIC", "GAULEYS"],
  ["PROPHETIC", "WASHED BAHUN"],
  ["RSP", "KHUWASAS"]
];

// Opening-round winners
const OPENING_WINNERS = {
  1: "RAZE THE ROOF",
  2: "LOADSHEDDING",
  3: "AUTUMN",
  4: "BATTI BALYO",
  5: "NIGGLE",
  6: "FORFETIC",
  7: "PROPHETIC",
  8: "KHUWASAS"
};

// Quarter-finals
const QUARTER_FINALS = [
  {
    teams: ["RAZE THE ROOF", "LOADSHEDDING"],
    winner: "RAZE THE ROOF"
  },
  {
    teams: ["AUTUMN", "BATTI BALYO"],
    winner: "BATTI BALYO"
  },
  {
    teams: ["NIGGLE", "FORFETIC"],
    winner: "FORFETIC"
  },
  {
    teams: ["PROPHETIC", "KHUWASAS"],
    winner: "PROPHETIC"
  }
];

// Semi-finals
const SEMIFINALS = [
  {
    teams: ["RAZE THE ROOF", "BATTI BALYO"],
    winner: "BATTI BALYO",
    note: "Batti Balyo advances to the Grand Final"
  },
  {
    teams: ["FORFETIC", "PROPHETIC"],
    winner: "PROPHETIC",
    note: "Prophetic advances to the Grand Final"
  }
];

// Third-place match
const THIRD_PLACE_MATCH = {
  teams: ["RAZE THE ROOF", "FORFETIC"],
  winner: "RAZE THE ROOF",
  note: "Raze the Roof finishes in 3rd place"
};

// Grand final
const GRAND_FINAL = {
  teams: ["BATTI BALYO", "PROPHETIC"],
  scores: [3, 2],
  winner: "BATTI BALYO",
  note: "Batti Balyo becomes Jhilimili Cup 2026 Champion"
};

// Final tournament standings
const FINAL_STANDINGS = [
  {
    position: "01",
    title: "CHAMPION",
    team: "BATTI BALYO",
    prize: "रू 12,500"
  },
  {
    position: "02",
    title: "RUNNER-UP",
    team: "PROPHETIC",
    prize: "रू 5,000"
  },
  {
    position: "03",
    title: "THIRD PLACE",
    team: "RAZE THE ROOF",
    prize: "रू 2,500"
  }
];


/* ==========================================
   BRACKET COMPONENTS
========================================== */

function simpleMatchCard(teams, winner = null, round = "") {
  return `
    <article class="tournament-match">

      ${round ? `
        <div class="tournament-match-header">
          ${round}
        </div>
      ` : ""}

      <div class="tournament-match-teams">

        ${teams.map(team => `
          <div class="tournament-team ${team === winner ? "is-winner" : ""}">
            <span>${team}</span>

            ${team === winner
              ? '<span class="winner-mark">✦</span>'
              : ""}
          </div>
        `).join("")}

      </div>
    </article>
  `;
}


function playoffMatchCard(match, round, scores = null) {
  return `
    <article class="tournament-match playoff-match">

      <div class="tournament-match-header">
        ${round}
      </div>

      <div class="tournament-match-teams">

        ${match.teams.map((team, index) => `
          <div class="tournament-team ${team === match.winner ? "is-winner" : ""}">

            <span>${team}</span>

            <strong class="team-score">
              ${scores ? scores[index] : ""}
            </strong>

          </div>
        `).join("")}

      </div>

      <div class="match-result-note">
        ${match.note}
      </div>

    </article>
  `;
}


function standingsCard() {
  return `
    <div class="final-standings-grid">

      ${FINAL_STANDINGS.map((item, index) => `
        <article class="standing-card standing-${index + 1}">

          <span class="standing-position">
            ${item.position}
          </span>

          <span class="standing-title">
            ${item.title}
          </span>

          <h3>${item.team}</h3>

          <span class="standing-prize">
            ${item.prize}
          </span>

        </article>
      `).join("")}

    </div>
  `;
}

/* ==========================================
   TOURNAMENT POINTS SYSTEM
   Each game  win = 2 points
========================================== */

function getTournamentPoints() {
  // Start every team at zero points.
  const points = {};

  OPENING_MATCHUPS.flat().forEach(team => {
    points[team] = 0;
  });

  // Award 2 points for every match won.
  function awardPoints(team) {
    if (points[team] !== undefined) {
      points[team] += 2;
    }
  }

  // Opening-round winners
  Object.values(OPENING_WINNERS).forEach(awardPoints);

  // Quarter-final winners
  QUARTER_FINALS.forEach(match => {
    awardPoints(match.winner);
  });

  // Semi-final winners
  SEMIFINALS.forEach(match => {
    awardPoints(match.winner);
  });

  // Third-place match winner
  awardPoints(THIRD_PLACE_MATCH.winner);

  // Grand-final winner
  awardPoints(GRAND_FINAL.winner);

  // Work out each team's final tournament status.
  function getTeamStatus(team) {
    const finalPosition = FINAL_STANDINGS.find(
      item => item.team === team
    );

    if (finalPosition) {
      return finalPosition.title;
    }

    if (THIRD_PLACE_MATCH.teams.includes(team)) {
      return team === THIRD_PLACE_MATCH.winner
        ? "3RD PLACE"
        : "4TH PLACE";
    }

    const semiFinal = SEMIFINALS.find(
      match => match.teams.includes(team)
    );

    if (semiFinal && semiFinal.winner !== team) {
      return "SEMI-FINAL";
    }

    const quarterFinal = QUARTER_FINALS.find(
      match => match.teams.includes(team)
    );

    if (quarterFinal && quarterFinal.winner !== team) {
      return "QUARTER-FINAL";
    }

    return "OPENING ROUND";
  }

  // Create the leaderboard.
  return Object.entries(points)
    .map(([team, total]) => ({
      team,
      points: total,
      status: getTeamStatus(team)
    }))
    .sort((a, b) => {
      // Highest points first.
      if (b.points !== a.points) {
        return b.points - a.points;
      }

      // Use final placement to break ties between podium teams.
      const rankA = FINAL_STANDINGS.findIndex(
        item => item.team === a.team
      );

      const rankB = FINAL_STANDINGS.findIndex(
        item => item.team === b.team
      );

      if (rankA !== -1 || rankB !== -1) {
        if (rankA === -1) return 1;
        if (rankB === -1) return -1;
        return rankA - rankB;
      }

      // Otherwise preserve the original opening-round order.
      return OPENING_MATCHUPS.flat().indexOf(a.team) -
        OPENING_MATCHUPS.flat().indexOf(b.team);
    });
}


/* ==========================================
   TOURNAMENT POINTS TABLE
========================================== */

function pointsTable() {
  const teams = getTournamentPoints();

  return `
    <div class="points-table-wrapper">

      <table class="points-table">

        <thead>
          <tr>
            <th>TEAM</th>
            <th>POINTS</th>
            <th>FINAL STATUS</th>
          </tr>
        </thead>

        <tbody>
          ${teams.map((item, index) => `
            <tr class="${index < 3 ? "points-top-three" : ""}">

              <td>
                <span class="points-team">
                  ${item.team}
                </span>
              </td>

              <td>
                <strong class="points-value">
                  ${item.points}
                </strong>
              </td>

              <td>
                <span class="points-status">
                  ${item.status}
                </span>
              </td>

            </tr>
          `).join("")}
        </tbody>

      </table>

    </div>
  `;
}


/* ==========================================
   BRACKET PAGE
========================================== */

function bracketPage() {
  return `
    <main class="tournament-page">

      ${pageHero(
        "Jhilimili Cup 2026 / Tournament progression",
        "THE ROAD TO THE CHAMPION.",
        "Follow every stage of the tournament, from the opening 16-team draw to the Grand Final. Congratulations to our final three teams."
      )}


      <!-- OPENING ROUND -->

      <section class="container tournament-round-section">

        <div class="tournament-section-heading">
          ${eyebrow("ROUND 01 / 16 TEAMS")}

          <h2>THE OPENING ROUND</h2>

          <p>Eight matchups. Eight teams advance.</p>
        </div>

        <div class="opening-match-grid">

          ${OPENING_MATCHUPS.map((teams, index) =>
            simpleMatchCard(
              teams,
              OPENING_WINNERS[index + 1],
              `MATCH ${String(index + 1).padStart(2, "0")}`
            )
          ).join("")}

        </div>

      </section>


      <!-- QUARTER-FINALS -->

      <section class="section section-alt">

        <div class="container tournament-round-section">

          <div class="tournament-section-heading">
            ${eyebrow("ROUND 02 / 8 TEAMS")}

            <h2>THE QUARTER-FINALS</h2>

            <p>Four matchups. Four semi-finalists.</p>
          </div>

          <div class="quarter-final-grid">

            ${QUARTER_FINALS.map((match, index) =>
              simpleMatchCard(
                match.teams,
                match.winner,
                `QUARTER-FINAL ${index + 1}`
              )
            ).join("")}

          </div>

        </div>

      </section>


      <!-- SEMI-FINALS -->

      <section class="container tournament-round-section">

        <div class="tournament-section-heading">
          ${eyebrow("ROUND 03 / 4 TEAMS")}

          <h2>THE SEMI-FINALS</h2>

          <p>Two battles. Two places in the Grand Final.</p>
        </div>

        <div class="playoff-grid">

          ${SEMIFINALS.map((match, index) =>
            playoffMatchCard(
              match,
              `SEMI-FINAL ${index + 1}`
            )
          ).join("")}

        </div>

      </section>


      <!-- THIRD PLACE -->

      <section class="section section-alt">

        <div class="container tournament-round-section">

          <div class="tournament-section-heading">
            ${eyebrow("THE PLACEMENT MATCH")}

            <h2>THE THIRD-PLACE SHOWDOWN</h2>

            <p>One final battle for a place on the podium.</p>
          </div>

          <div class="special-match-container">

            ${playoffMatchCard(
              THIRD_PLACE_MATCH,
              "THIRD-PLACE MATCH"
            )}

            <div class="placement-result">
              <span class="placement-icon">✦</span>

              <div>
                <span class="stat-label">THIRD-PLACE WINNER</span>
                <h3>RAZE THE ROOF</h3>
                <p>Secures third place in Jhilimili Cup 2026.</p>
              </div>
            </div>

          </div>

        </div>

      </section>


      <!-- GRAND FINAL -->

      <section class="container tournament-round-section grand-final-section">

        <div class="tournament-section-heading">
          ${eyebrow("THE FINAL / CHAMPIONSHIP MATCH")}

          <h2>THE GRAND FINAL</h2>

          <p>Two teams. One trophy. One champion.</p>
        </div>

        <div class="grand-final-card">

          <div class="grand-final-label">
            <span>✦</span>
            JHILI-MILI CUP 2026
            <span>✦</span>
          </div>

          <div class="grand-final-teams">

            ${GRAND_FINAL.teams.map((team, index) => `
              <div class="grand-final-team ${team === GRAND_FINAL.winner ? "grand-final-winner" : ""}">

                <span class="final-team-name">${team}</span>

                <strong class="final-score">
                  ${GRAND_FINAL.scores[index]}
                </strong>

                ${team === GRAND_FINAL.winner
                  ? '<span class="champion-label">✦ CHAMPION</span>'
                  : '<span class="runner-up-label">RUNNER-UP</span>'}

              </div>
            `).join("")}

          </div>

          <div class="grand-final-result">
            <span class="trophy-symbol">♜</span>

            <span class="stat-label">YOUR JHILIMILI CUP 2026 CHAMPIONS</span>

            <h2>BATTI BALYO</h2>

            <p>${GRAND_FINAL.note}</p>

          </div>

        </div>

      </section>


      <!-- FINAL STANDINGS -->

      <section class="section section-alt">

        <div class="container tournament-round-section">

          <div class="tournament-section-heading">
            ${eyebrow("THE FINAL LEADERBOARD")}

            <h2>THE PODIUM.</h2>

            <p>Three teams. Three places in the history of the Cup.</p>
          </div>

          ${standingsCard()}

        </div>

      </section>

    </main>
  `;
}


/* ==========================================
   BRACKET SETUP
========================================== */

function setupBracketWires() {

}


/* ==========================================
   RESULTS PAGE
========================================== */

function resultsPage() {
  return `
    <main>

      ${pageHero(
        "Results / Jhilimili Cup 2026",
        "THE CHAMPIONS HAVE RISEN.",
        "The tournament journey is complete. Celebrate the teams who made it to the final podium."
      )}


      <section class="container">

        <div class="results-hero">

          <div class="results-copy">

            <span class="results-status">
              ✦ TOURNAMENT COMPLETED
            </span>

            <h2 style="font-size:clamp(38px,5vw,55px);margin-top:22px">
              ONE CUP.<br>ONE CHAMPION.
            </h2>

            <p>
              Congratulations to Batti Balyo, champions of Jhilimili Cup 2026.
              Thank you to every team and player who took part in the tournament.
            </p>

            <hr style="border:0;border-top:1px solid var(--border);margin:24px 0">

            <span class="stat-label">GRAND FINAL RESULT</span>

            <h3 class="gold">BATTI BALYO 3 – 2 PROPHETIC</h3>

            <div class="hero-actions">
              ${button("bracket.html", "View full tournament bracket")}
              ${button(DISCORD_URL, "Visit tournament Discord", "btn btn-outline")}
            </div>

          </div>

          <div class="results-art" aria-label="Tournament trophy">
            <span>♜</span>
          </div>

        </div>

      </section>


      <!-- FINAL STANDINGS -->

      <section class="section">

        <div class="container">

          <div class="tournament-section-heading">
            ${eyebrow("THE FINAL STANDINGS")}

            <h2>THE WINNERS.</h2>

            <p>Final tournament placements and announced prize awards.</p>
          </div>

          ${standingsCard()}

        </div>

      </section>

      <!-- TOURNAMENT POINTS TABLE -->

      <section class="section">

        <div class="container">

          <div class="tournament-section-heading">
            ${eyebrow("MATCH WIN POINTS")}

            <h2>THE TOURNAMENT LEADERBOARD.</h2>

            <p>
              Every match victory earns 2 points.
              Teams keep their points even after elimination.
            </p>
          </div>

          ${pointsTable()}

          <p class="points-table-note">
            Each completed match win = 2 points.
            Points are cumulative throughout the tournament.
          </p>

        </div>

      </section>


      <!-- GRAND FINAL SCORE -->

      <section class="section section-alt">

        <div class="container">

          <div class="tournament-section-heading">
            ${eyebrow("CHAMPIONSHIP MATCH")}

            <h2>THE GRAND FINAL RESULT.</h2>

            <p>Batti Balyo takes the championship with a 3–2 victory over Prophetic.</p>
          </div>

          <div class="grand-final-card">

            <div class="grand-final-label">
              ✦ GRAND FINAL · BO5 ✦
            </div>

            <div class="grand-final-teams">

              ${GRAND_FINAL.teams.map((team, index) => `
                <div class="grand-final-team ${team === GRAND_FINAL.winner ? "grand-final-winner" : ""}">

                  <span class="final-team-name">${team}</span>

                  <strong class="final-score">
                    ${GRAND_FINAL.scores[index]}
                  </strong>

                  <span class="stat-label">
                    ${team === GRAND_FINAL.winner ? "CHAMPION" : "RUNNER-UP"}
                  </span>

                </div>
              `).join("")}

            </div>

          </div>

        </div>

      </section>


      <!-- PRIZE POOL -->

      <section class="section">

        <div class="container">

          <div class="prize-total-row">

            <h2>THE रू 21,000 PRIZE POOL.</h2>

            <span class="stat-label">ANNOUNCED AWARDS</span>

          </div>

          ${prizes()}

        </div>

      </section>


      <!-- COMMUNITY THANK YOU -->

      <section class="section section-alt">

        <div class="container">

          <div class="card">

            ${eyebrow("UNTIL THE NEXT CUP")}

            <h2>THANK YOU FOR BEING PART OF IT.</h2>

            <p>
              Congratulations to all participating teams.
              Follow the tournament community for future announcements,
              events and updates.
            </p>

            ${button(DISCORD_URL, "Join the Discord community")}

          </div>

        </div>

      </section>

    </main>
  `;
}


function watchPage() {
  return `
    <main>
      ${pageHero("Watch live / Join the community", "FEEL EVERY CLUTCH. SHARE EVERY CHEER.", "Not playing? You can still be part of the Jhilimili Cup. Follow the channels and join the Discord community for tournament updates.")}

      <section class="section" style="padding-top:15px">
        <div class="container grid-2">
          <article class="card watch-card">
            <div class="watch-icon">▶</div>
            <span class="card-kicker">Official stream destination</span>
            <h2>WATCH ON YOUTUBE.</h2>
            <p>Visit HealerAiko, AyuzZ and Rakshya's YouTube channels for stream access and broadcast announcements. A specific live-stream schedule has not yet been confirmed.</p>
            <div class="watch-channel-links">
              ${button(YOUTUBE_URL, "Open HealerAiko on YouTube")}
              ${button(AYUZZ_YOUTUBE_URL, "Open Ayush on YouTube")}
              ${button(RAKSHYA_YOUTUBE_URL, "Open Rakshya on YouTube")}
            </div>
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
            <article class="card"><span class="info-number">03</span><h3>Keep the dates free</h3><p>October 28–November 1, 2026. The tournament starts at 9:00 PM NST on opening night.</p></article>
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
        "Team registration / October 16–26, 2026",
        "REGISTRATION IS NOW CLOSED.",
        "Registration ran from October 16–26, 2026. Thank you to the participating teams. Opening matchups are now in the bracket."
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
              Registration is closed. The form is kept here for reference; new submissions are disabled.
            </p>
          </section>
        </form>

        <aside class="sidebar-sticky">

          <div class="side-card">
            <span class="card-kicker">● Entries closed October 26</span>
            <h2>REGISTRATION CLOSED.</h2>
            <p>रू 21,000 total prize pool</p>

            <div class="side-fact">
              <small>Registration opens</small>
              <span>October 16, 2026</span>
            </div>

            <div class="side-fact">
              <small>Registration closes</small>
              <span>October 26, 2026</span>
            </div>

            <div class="side-fact">
              <small>Tournament begins</small>
              <span>October 28, 2026 · 9:00 PM NST</span>
            </div>

            <div class="side-fact">
              <small>Event dates</small>
              <span>October 28–November 1, 2026</span>
            </div>
          </div>

          <div class="card">
            <h3>NEED A HAND?</h3>
            <p>
              Contact Healer on Discord for tournament help
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
  if (REGISTRATION_CLOSED) {
    form.classList.add("registration-closed");
    form.querySelectorAll("input, button[type=submit]").forEach(control => {
      control.disabled = true;
    });
    const submit = form.querySelector('button[type="submit"]');
    if (submit) submit.textContent = "Registration closed";
    message.hidden = false;
    message.textContent = "Registration closed on October 26, 2026. New team submissions are no longer accepted.";
    form.addEventListener("submit", event => event.preventDefault());
    return;
  }

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
  setupBracketWires();
  setupRegistration();
}

init();