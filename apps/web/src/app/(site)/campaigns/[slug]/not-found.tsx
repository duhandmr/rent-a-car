import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container" style={{ padding: "36px 0" }}>
      <p
        style={{
          padding: 12,
          background: "#fee2e2",
          border: "1px solid #fecaca",
          borderRadius: 8,
          color: "#b91c1c",
        }}
      >
        Campaign not found.
      </p>
      <p>
        <Link href="/campaigns">← Back to campaigns</Link>
      </p>
    </div>
  );
}
