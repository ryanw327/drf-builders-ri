const reviews = [
  {
    name: "Michael T.",
    city: "Cranston, RI",
    date: "March 2026",
    text:
      "Danny was responsive from the first call. He came out quickly, explained exactly what was wrong, and had it fixed the same week. Clean work, fair price, and no surprises. Will absolutely call again."
  },
  {
    name: "Sandra L.",
    city: "Providence, RI",
    date: "January 2026",
    text:
      "We had a significant leak after a storm and D.R.F Builders came out fast. Danny walked us through everything before touching a single shingle. The roof has been perfect since. Highly recommend to anyone in the area."
  },
  {
    name: "James R.",
    city: "Warwick, RI",
    date: "November 2025",
    text:
      "Used Danny for a full roof replacement. He was upfront about the timeline, the crew was professional, and the cleanup was spotless. Our neighbors have already asked for his number."
  },
  {
    name: "Patricia M.",
    city: "Bristol, RI",
    date: "October 2025",
    text:
      "Great experience start to finish. Danny is the kind of contractor who actually shows up when he says he will. The work was excellent and the price was more than fair for what we got."
  },
  {
    name: "Kevin D.",
    city: "Pawtucket, RI",
    date: "August 2025",
    text:
      "Had some missing shingles after a bad wind storm. Called D.R.F Builders and they were out within two days. Quick repair, solid work, and Danny took the time to inspect the whole roof while he was up there. Good honest guy."
  },
  {
    name: "Lisa F.",
    city: "Cranston, RI",
    date: "June 2025",
    text:
      "I was nervous about getting ripped off - roofing can be a minefield. Danny came out, gave me a straight honest assessment, and the final bill matched the quote exactly. That alone makes him stand out."
  }
];

export function ReviewCards() {
  return (
    <div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <article
            key={`${review.name}-${review.date}`}
            className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
            style={{ borderWidth: "0.5px" }}
          >
            <div className="text-lg tracking-wide text-[#EF9F27]" aria-label="5 star review">
              ★★★★★
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-700">&ldquo;{review.text}&rdquo;</p>
            <footer className="mt-5">
              <p className="font-medium text-slate-950">{review.name}</p>
              <p className="mt-1 text-xs text-slate-500">
                {review.city} | {review.date}
              </p>
            </footer>
          </article>
        ))}
      </div>
      <p className="mt-4 text-xs leading-5 text-slate-400">
        Reviews reflect real customer experiences. Danny collects feedback directly from clients after every project.
      </p>
    </div>
  );
}
