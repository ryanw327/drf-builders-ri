export function ServiceAreaMap() {
  return (
    <div className="service-area-map" style={{ marginBottom: "16px" }}>
      <p
        style={{
          fontSize: "13px",
          textAlign: "center",
          color: "var(--color-text-secondary)",
          marginBottom: "12px"
        }}
      >
        Serving Cranston, Providence, Warwick, Bristol & surrounding Rhode Island communities
      </p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47821.23!2d-71.4373!3d41.7798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e44f687346d4cf%3A0x71ece4215a5a3ded!2sCranston%2C%20RI!5e0!3m2!1sen!2sus!4v1"
        width="100%"
        height="260"
        style={{
          border: "none",
          borderRadius: "12px",
          display: "block"
        }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="D.R.F Builders RI service area in Rhode Island"
        aria-label="Map showing D.R.F Builders RI roofing service area in Cranston Rhode Island"
      />
    </div>
  );
}
