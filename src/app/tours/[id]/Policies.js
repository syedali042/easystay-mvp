const TourPolicies = () => {
  return (
    <div className="listingSection__wrap">
      {/* HEADING */}
      <h2 className="text-2xl font-semibold">Things to know</h2>
      <div className="w-14 border-b border-neutral-200 dark:border-neutral-700" />

      {/* CONTENT */}
      <div>
        <h4 className="text-lg font-semibold">Cancellation policy</h4>
        <span className="block mt-3 text-neutral-500 dark:text-neutral-400">
          Any experience can be canceled and fully refunded within 24 hours of
          purchase, or at least 7 days before the experience starts.
        </span>
      </div>
      <div className="w-14 border-b border-neutral-200 dark:border-neutral-700" />

      {/* CONTENT */}
      <div>
        <h4 className="text-lg font-semibold">Guest requirements</h4>
        <span className="block mt-3 text-neutral-500 dark:text-neutral-400">
          Up to 10 guests ages 4 and up can attend. Parents may also bring
          children under 2 years of age.
        </span>
      </div>
      <div className="w-14 border-b border-neutral-200 dark:border-neutral-700" />

      {/* CONTENT */}
      <div>
        <h4 className="text-lg font-semibold">What to bring</h4>
        <div className="prose sm:prose">
          <ul className="mt-3 text-neutral-500 dark:text-neutral-400 space-y-2">
            <li>
              Formal Wear To Visit Bai Dinh Pagoda Be ready before 7.30 Am.
            </li>
            <li>We will pick up from 07.30 to 08.00 AM</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default TourPolicies;
