const BusinessIntroSection = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">

        {/* BIG STATEMENT */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight max-w-5xl mb-12 text-black text-center">
          We combine human insight, industry expertise, and a deep understanding
          of activation to develop strategies and capabilities that have a
          measurable business impact.
        </h2>

        {/* PARAGRAPHS */}
        <div className="max-w-4xl space-y-6 text-gray-700 text-base leading-relaxed text-center">

          <p>
            Today’s customers are complex: They are selective, values-driven,
            and diverse, with unique identities, product desires, and
            information preferences that drive their purchasing behaviors. To
            better serve these customers, brands have also become more complex—
            and not always for the better. They struggle with issues like siloed
            teams, poor data management, and the challenges of adopting new
            technologies like artificial intelligence.
          </p>

          <p>
            Marketing leaders are tasked with designing innovative strategies to
            address these issues, and to engage with consumers efficiently and
            effectively.
          </p>

        </div>

        {/* SUB HEADING */}
        <h3 className="text-2xl md:text-3xl font-light mt-20 mb-6 text-black text-center">
          Win (and keep) your customers with a streamlined strategy
        </h3>

        {/* MORE CONTENT */}
        <div className="max-w-4xl space-y-6 text-gray-700 text-base leading-relaxed text-center">

          <p>
            Customer-focused leaders need to identify the right growth
            opportunities, design differentiated value propositions, modernize
            their omnichannel approach, and create distinct experiences to keep
            up with the customer.
          </p>

          <p>
            At Deloitte Digital, we empower organizations to cut through the
            competitive noise. We help leaders align their operations with the
            needs and desires of their customers while remaining agile enough
            to adapt to the ever-changing marketplace.
          </p>

        </div>

      </div>
    </section>
  );
};

export default BusinessIntroSection;
