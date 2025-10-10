import { motion } from "framer-motion";

const SponserSection = () => {
  return (
    <section className="py-16 lg:px-16 md:px-8 px-4 border-image-section" id="sponsor">
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
            Sponsors
          </motion.h2>
          <img src="/design_element.png" alt="design element" className="mx-auto w-72" />
        </div>
        {/* Sponsor Logos */}
        <motion.div
          initial={{ opacity: 0, x: 0, y: -100 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
          className="flex flex-wrap gap-8 items-center justify-around"
        >
          <img src="/sponsors/sponsor1.png" alt="FriendsOfFigmalogo" className="md:h-72 h-48 object-contain" />
          <img src="/sponsors/sponsor2.png" alt="MillimoLogo" className="md:h-72 md:w-72 w-48 h-48 object-contain" />
        </motion.div>
      </div>
    </section>
  )
}

export default SponserSection