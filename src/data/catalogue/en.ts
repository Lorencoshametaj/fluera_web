import type { CatalogueData } from "./types";

const data: CatalogueData = {
  "meta": {
    "title": "Catalogue — Study templates that install into your memory",
    "description": "A study template is a page of handwriting plus the concept structure underneath it. Installing one plants a spaced-repetition schedule of your own. Ranked by measured retention, not downloads.",
    "ogImage": "/og/page/catalogue.png"
  },
  "jsonLd": {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "The Fluera Catalogue",
    "description": "A catalogue of handwritten study templates that install as spaced-repetition schedules, ranked by measured retention rather than downloads.",
    "isPartOf": {
      "@type": "WebSite",
      "name": "Fluera",
      "url": "https://fluera.dev"
    },
    "inLanguage": "en"
  },
  "hero": {
    "kicker": "Catalogue",
    "title": "Someone already worked this chapter out.<br />Install it and start being tested on it.",
    "description": "A Fluera study template is not a PDF and not a flashcard deck. It is a page of real handwriting, the concept structure underneath it, and a recipe for the review schedule you should be on. Installing one plants that schedule in a canvas of your own.",
    "actions": [
      {
        "href": "/beta",
        "kind": "btn-primary",
        "label": "Request early access →"
      },
      {
        "href": "/features/spaced-repetition",
        "kind": "btn-secondary",
        "label": "How the review schedule works"
      }
    ]
  },
  "unit": {
    "kicker": "The unit",
    "title": "Three things travel. One of them is not the author.",
    "sub": "Every other store ships you a document and wishes you luck. A study template carries the page, the structure that makes the page teachable, and the instructions for scheduling it — deliberately without the part that belongs to whoever made it.",
    "items": [
      {
        "title": "A bounded worksheet",
        "body": "Not a whole notebook — a region the author framed on their own canvas. The strokes, shapes, typed text and images inside that frame, and nothing outside it. No source PDF is bundled."
      },
      {
        "title": "A concept scaffold",
        "body": "The structure underneath the ink: what the concepts are, which topic each belongs to, and how they depend on one another. This is what makes a template teachable instead of merely readable."
      },
      {
        "title": "A fresh-card recipe",
        "body": "Not the author's memory — a recipe for building your own. Desired retention, the kind of material, and when the first review should fall. Your schedule is built from it at install time."
      }
    ]
  },
  "install": {
    "kicker": "Installing",
    "title": "The difference between owning a file<br />and being on a schedule.",
    "paragraphs": [
      "Downloading study material has never been the hard part. Coming back to it on the day you were about to forget it is the hard part, and no folder has ever solved that.",
      "So installing a template does not put a document somewhere. It plants cards, dated. You inherit the author's concepts and the structure between them — never their review history, their confidence, or how well they personally knew any of it. The template format cannot carry those."
    ],
    "steps": [
      {
        "step": "01",
        "title": "The page arrives as ink",
        "body": "The worksheet is restored into a canvas of your own. It is real handwriting on real paper, not a rendered PDF — you can write on top of it, extend it, and cut it apart."
      },
      {
        "step": "02",
        "title": "Every concept becomes a card",
        "body": "One brand-new spaced-repetition card per named concept, with no review history behind it: zero repetitions, and a starting difficulty in the middle of Fluera's range. The first review falls one day later."
      },
      {
        "step": "03",
        "title": "The schedule is yours from then on",
        "body": "It persists to disk and drives your due badge and daily digest like anything else you wrote. Reinstalling the same template will not reset a review history you have already built."
      }
    ]
  },
  "ranking": {
    "kicker": "The ranking",
    "title": "Ordered by what learners kept.<br />Not by what spread.",
    "sub": "A download count measures a decision made before anybody learned anything. It is also the easiest number in any store to inflate. Fluera can rank on something better, because the app is already modelling how well every learner is holding every concept.",
    "items": [
      {
        "label": "Measured on the device",
        "body": "When you reopen a template's canvas on or after day 1, 7 and 30, Fluera reads how well the spaced-repetition model thinks you are holding those specific concepts, and derives a single number from it."
      },
      {
        "label": "One number, nothing else",
        "body": "That number is all that is sent. No concept titles, no card contents, no review history, no identity. It is submitted only if you are signed in and have opted into analytics, and never if you are the template's own author."
      },
      {
        "label": "Silent below five learners",
        "body": "A template has no public figure at all until at least five different learners have contributed one. Below that threshold the sort falls back to install counts, and the card simply says nothing."
      },
      {
        "label": "Downloads are not the rank",
        "body": "The grid under “All templates” is sorted on that measured signal by default, not on popularity. A template that spreads quickly cannot buy its way up it."
      }
    ],
    "note": "<strong class=\"text-paper-100\">What this is not.</strong> It is a model's estimate of how well a template's concepts are being held by the learners who came back to study them — not an exam result, not a control group, and not a claim about anyone who installed a template and never opened it again. We would rather describe the signal accurately than dress it up."
  },
  "discovery": {
    "kicker": "Finding one",
    "title": "Three ways to narrow it down,<br />and one only your own device can do.",
    "sub": "A catalogue of study material fails in a specific way: everything is nominally about your subject and almost none of it is about your course. So the filters are the ones students actually think in.",
    "paragraphs": [
      "You can narrow by <strong class=\"text-paper-100\">subject</strong>, by <strong class=\"text-paper-100\">course or exam</strong> — free text, so <em>Maturità</em> and <em>MCAT</em> are as valid as <em>Analysis I</em> — and by <strong class=\"text-paper-100\">language</strong>. Each filter carries a live count, each one re-queries the others when you pick something, and any filter with nothing behind it does not appear at all. You are never offered a choice that leads to an empty page.",
      "The catalogue opens in the language your app is set to, because a wall of material you cannot read is not a catalogue. It is a preference, not a fence: one tap widens it to every language.",
      "Search is full-text and forgiving about accents. It also drops the ranking and orders by relevance instead — when you have typed what you want, what other people retained is no longer the question you are asking."
    ],
    "marksHeading": "What the marks on a card mean",
    "marks": [
      {
        "mark": "Official",
        "body": "Set by the catalogue, never by anything an author can type into a form. It cannot be spelled into existence with a display name."
      },
      {
        "mark": "New",
        "body": "Strictly earned: no installs, no ratings, published within the last week. It expires on its own rather than being switched off."
      },
      {
        "mark": "Subject",
        "body": "The discipline the template was filed under, so you can tell a chemistry page from a chemistry-adjacent one at a glance."
      },
      {
        "mark": "Rating",
        "body": "Shown only once a template has actually been rated, by people who actually installed it. An unrated template says nothing rather than starting at zero."
      }
    ],
    "note": "<strong class=\"text-paper-50\">And one row nobody else could build.</strong> Fluera already knows which concepts you are working on, because you wrote them. So it can rank templates by how much they overlap with what is currently on your canvas — and it does that arithmetic on your device. What leaves your phone is the subject you study most and the identifiers of templates it had already fetched. Your concept set is not one of them."
  },
  "privacy": {
    "kicker": "What travels, what doesn't",
    "title": "Publishing a page should not publish how you were doing.",
    "sub": "Sharing study material means sharing something you made while you were still learning it. The line between the two is drawn in code, not in a policy paragraph.",
    "items": [
      {
        "title": "Your learner model is not in the file",
        "body": "The component that builds a template's public scaffold structurally never reads your review history, your confidence, how many times you studied something, how well you were holding it, or the embeddings behind it. An expert and a struggling author publishing the same page emit a byte-identical scaffold."
      },
      {
        "title": "A test holds the line, in CI",
        "body": "The guarantee is pinned by a test that walks the serialised output and fails if any of twenty-six learner-model or behavioural field names appears anywhere in it. It runs as a named, non-optional CI gate that also fails if the test file is deleted."
      },
      {
        "title": "The ink is the honest limit",
        "body": "What no amount of sanitising reaches is the handwriting itself, and the scaffold does carry a short truncated excerpt of the recognised text — never the full transcript, but not redacted either. That is why the publish sheet shows you the exact image that would become public, above a consent checkbox, before anything is uploaded."
      },
      {
        "title": "Your name is never the handle",
        "body": "Public reads return no account id at all, and a creator is identified by a code derived one-way from their account — salted, hashed and truncated. It is a stable pseudonym, not your identity."
      }
    ],
    "action": {
      "href": "/security",
      "label": "Read the security architecture →"
    }
  },
  "creators": {
    "kicker": "For creators",
    "title": "The best explanation of a hard idea<br />is usually one page long.",
    "paragraphs": [
      "Publishing starts on your own canvas. You frame the region worth sharing, Fluera mints it, and a sheet asks whether it should become a file or a listing. What you frame is what travels — the rest of the canvas never leaves.",
      "Before anything uploads you see the exact image that would become public and confirm it. The listing is validated before a single byte is stored, and the upload goes through one-time signed URLs; if it fails, the listing is rolled back rather than left half-made.",
      "Every template is free. There is no checkout in Fluera, no price field in the publishing API, and no payout ledger — the catalogue's price column is held at zero by a database constraint rather than by policy."
    ],
    "heading": "What publishing gives you",
    "benefits": [
      "A pseudonymous creator handle that is never your account and never your email",
      "An optional profile — display name, bio, avatar — with the avatar held back until it is screened",
      "Followers, and a shelf that carries your newest template to them",
      "Versioning: publish a correction as a replacement rather than a duplicate",
      "A reason whenever a decision goes against you, and an appeal that can reinstate"
    ],
    "note": "Publishing requires a signed-in account and an age confirmation. Browsing and installing require neither."
  },
  "safety": {
    "kicker": "Moderation & trust",
    "title": "A catalogue of strangers' handwriting<br />has to be answerable.",
    "sub": "Anyone can open a catalogue. The work is in what happens when something goes wrong — and in making sure the loudest group in the room is not the one deciding.",
    "items": [
      {
        "label": "Nothing is listed on submit",
        "body": "A new template is written as pending review. Until it has been screened it is absent from browse, from search and from the catalogue entirely, and its share link resolves to nothing."
      },
      {
        "label": "Screening reads the real file",
        "body": "The classifier extracts the images embedded in the template itself rather than trusting the uploader's thumbnail, takes the worst verdict across them, and runs in EU regions. It can advance or escalate an item; it can never overturn a moderator."
      },
      {
        "label": "Reports inform people, not robots",
        "body": "A report is a signal into a human queue — one per reporter, self-reports refused. A coordinated group can raise attention. It cannot take a listing down."
      },
      {
        "label": "Removal removes the bytes",
        "body": "When a listing is removed, the published objects are purged from the CDN and not merely delisted, after evidence has been preserved to a private, admin-only bucket."
      },
      {
        "label": "A decision comes with reasons",
        "body": "A creator is told what happened to their template and whether the decision was automated, and can open an appeal. An appeal that succeeds restores the listing."
      },
      {
        "label": "Ratings have to be earned",
        "body": "You cannot rate a template you never installed, you cannot rate your own, and you cannot rate anonymously. The averages are recomputed from scratch rather than incremented."
      }
    ]
  },
  "status": {
    "kicker": "Availability",
    "title": "The catalogue ships with the app.<br />It is at the beginning.",
    "paragraphs": [
      "Browsing, previewing and installing are built into Fluera and localised in all sixteen languages the app speaks. Publishing is live too, for signed-in adults, and we are letting it open slowly on purpose: hosting other people's work is a responsibility you take on properly or not at all.",
      "So the catalogue is small, and this page has no template count, no install count and no creator count on it. Those numbers will mean something later. Today they would only be decoration."
    ],
    "actions": [
      {
        "href": "/beta",
        "kind": "btn-primary",
        "label": "Request early access →"
      },
      {
        "href": "/download",
        "kind": "btn-secondary",
        "label": "Download Fluera"
      }
    ]
  }
};

export default data;

