import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/91XXXXXXXXXX?text=Hello%20Hn%20Craft%20India,%20I%20am%20interested%20in%20your%20brick%20machines."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 group"
    >
      <div className="relative">
        <span className="absolute inset-0 rounded-full bg-green-500 animate-pulse-ring" />
        <div className="relative w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110">
          <FaWhatsapp className="text-white text-3xl" />
        </div>
      </div>
      <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-sm font-medium px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Chat with us!
      </span>
    </a>
  );
}
