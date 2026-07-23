import { BRAND } from "../content";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-brand-navy text-gray-400 text-xs py-8 px-4">
      <div className="max-w-2xl mx-auto text-center space-y-3">
        <div className="flex justify-center gap-4">
          <a href="#" className="hover:text-white">
            Terms &amp; Conditions
          </a>
          <a href="#" className="hover:text-white">
            Privacy Policy
          </a>
        </div>
        <p>
          © {year} {BRAND.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
