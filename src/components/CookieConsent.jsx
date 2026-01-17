import { useEffect, useState } from "react";

const CookieConsent = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setShow(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setShow(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookie_consent", "declined");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-[9999] px-3 pb-3">
      <div className="mx-auto max-w-6xl bg-gray-900 text-white rounded-xl shadow-lg p-4 md:p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">

        {/* Text */}
        <p className="text-sm md:text-base leading-relaxed">
          We use cookies to improve your experience. By continuing, you agree to our{" "}
          <a
            href="/cookie-policy"
            className="text-green-400 underline hover:text-green-300"
          >
            Cookie Policy
          </a>.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
          <button
            onClick={acceptCookies}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium transition"
          >
            Accept
          </button>

          <button
            onClick={declineCookies}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium transition"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
