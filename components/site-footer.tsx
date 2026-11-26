import Link from "next/link";
export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <a href="/" className="logo">
          <span>Quiet</span>
          <span>Ledger</span>
          <span>
            <sup>®</sup>
          </span>
        </a>
        <p>Independent wealth management for people who know what matters.</p>
      </div>
      <div className="footer-links">
        <div>
          <strong>Company</strong>
          <ul>
            <li><Link href="/philosophy">Philosophy</Link></li>
            <li><Link href="/who-we-serve">Who we serve</Link></li>
            <li><Link href="/team">Team</Link></li>
          </ul>
        </div>
        <div>
          <strong>Insights</strong>
          <ul>
            <li><Link href="/insights">Latest</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-legal">
        <p>
          Quiet Ledger Capital is a fictional company created for this project.
          All names, figures, and results are sample content.
        </p>
        <p>© 2026 Quiet Ledger Capital. All rights reserved.</p>
      </div>
    </footer>
  );
}
