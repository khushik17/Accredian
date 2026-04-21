export default function Footer() {
  return (
    <footer id="footer" className="footer-section bg-[#080a2a] text-slate-300">
      <div className="mx-auto w-full max-w-7xl px-5 py-12 md:px-8 md:py-14">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-400">About Us</h4>
            <p className="mt-3 text-sm leading-6 text-slate-400">Empowering enterprise teams with practical, high-impact learning solutions.</p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-400">Quick Link</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li><a href="#home" className="hover:text-blue-400">Home</a></li>
              <li><a href="#edge" className="hover:text-blue-400">Accredian Edge</a></li>
              <li><a href="#faqs" className="hover:text-blue-400">FAQs</a></li>
              <li><a href="#testimonials" className="hover:text-blue-400">Testimonials</a></li>
              <li><a href="/leads" className="hover:text-blue-400">Lead Dashboard</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-400">IT Services</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li>Data Science & AI</li>
              <li>Product Management</li>
              <li>Analytics</li>
              <li>Cybersecurity</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-400">Contact Us</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li>enterprise@accredian.com</li>
              <li>+91 98765 43210</li>
              <li>Sector 18, Gurugram</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-slate-700/60 pt-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-bold text-slate-200">accredian</p>
          <p className="text-xs text-slate-500">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
