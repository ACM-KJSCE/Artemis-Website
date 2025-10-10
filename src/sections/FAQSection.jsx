"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const  FAQSection = () => {
    const [openFaq, setOpenFaq] = useState(null);

    const faqs = [
        {
            id: 1,
            question: "How many members can be in a team?",
            answer: "Each team can have 2–3 members. On day team formation can also be done."
        },
        {
            id: 2,
            question: "Do we need to bring our own ideas?",
            answer: "Yes. You can work on your own problem statement or select from the provided themes announced at the start of the hackathon."
        },
        {
            id: 3,
            question: "Can we use frameworks like React, Vue, or Next.js?",
            answer: "Absolutely. Any frontend framework or library is allowed, as long as the final submission runs in a browser and demonstrates your UI/UX design and functionality."
        },
        {
            id: 4,
            question: "Are we allowed to use backend services or APIs?",
            answer: "Yes. You may use any public APIs, mock APIs, or backend services. However, focus should remain on the frontend design, interactivity, and user experience."
        },
        {
            id: 5,
            question: "What are the judging criteria?",
            answer: "Projects will be evaluated on creativity, UI/UX design, responsiveness, interactivity, performance, and adherence to the theme."
        },
        {
            id: 6,
            question: "Is there any restriction on using AI tools or design libraries?",
            answer: "No restrictions. You may use AI tools, component libraries, or design systems — originality of implementation and design thinking will still be key judging factors."
        },
        {
            id: 7,
            question: "Do we need to host our project?",
            answer: "Yes. The final submission should be deployed online (e.g., Vercel, Netlify, or GitHub Pages) with a working demo link and a public GitHub repository."
        },
        {
            id: 8,
            question: "Can we continue working after the hackathon ends?",
            answer: "No. All work must be completed within the official hackathon timeline. Post-deadline commits will not be considered."
        },
        {
            id: 9,
            question: "Will there be any workshops or mentorship during the event?",
            answer: "Yes. Mentors will be available throughout the hackathon to guide teams on UI/UX, performance optimization, and frontend best practices."
        },
        {
            id: 10,
            question: "What are the prizes and recognitions?",
            answer: "Top teams will receive cash prizes and certificates. Exceptional projects may also be featured on our official showcase page."
        }
    ];


    const toggleFaq = (id) => {
        setOpenFaq(openFaq === id ? null : id);
    };

    return (
        <section className="py-16 lg:px-16 md:px-8 px-4" id="faq">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center md:mb-16 mb-10">
                    <motion.h2
                        initial={{ opacity: 0, x: 0, y: -100 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.5 }}
                        className="md:text-7xl sm:text-5xl text-4xl font-bold text-[#21223d] mb-4 leading-tight"
                    >
                        FAQ
                    </motion.h2>
                    <img src="/design_element.png" alt="design element" className="mx-auto w-72" />
                </div>

                {/* FAQ Items */}
                <motion.div
                    initial={{ opacity: 0, x: 0, y: -100 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.5 }}
                    className="md:space-y-4 space-y-3"
                >
                    {faqs.map((faq) => (
                        <div
                            key={faq.id}
                            className="bg-[#E4CDA8] border shadow-md rounded-md border-b-2 border-[#21223d] overflow-hidden transition-all duration-300"
                        >   

                            {/* + button and question */}
                            <button
                                onClick={() => toggleFaq(faq.id)}
                                className="w-full md:px-6 md:py-4 px-4 py-2 text-left transition-all duration-200"
                            >
                                <div className="flex items-center justify-between">
                                    <h3 className="md:text-lg text-sm font-semibold text-[#21223d] pr-4">
                                        {faq.id}.{"  "}
                                        {faq.question}
                                    </h3>
                                    <div className="flex-shrink-0">
                                        <div className="w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300">
                                            {openFaq === faq.id ? (
                                                // X Icon
                                                <svg
                                                    className="w-4 h-4 text-[#21223d]"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M6 18L18 6M6 6l12 12"
                                                    />
                                                </svg>
                                            ) : (
                                                // Plus Icon
                                                <svg
                                                    className="w-4 h-4 text-[#21223d]"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M12 4v16m8-8H4"
                                                    />
                                                </svg>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </button>

                            {/* Answer */}
                            <div
                                className={`transition-all duration-500 ease-in-out ${
                                    openFaq === faq.id
                                        ? "max-h-96 opacity-100"
                                        : "max-h-0 opacity-0"
                                }`}
                            >
                                <div className="px-6 pb-6">
                                    <p className="text-[#21223d] md:text-base text-xs leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

export default FAQSection;
