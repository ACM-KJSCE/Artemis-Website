import { motion } from "framer-motion"
import Prize from '../components/Prize'
import { ScrollParallax } from "react-just-parallax";

const prize = [
  {
    rank: '2nd',
    amount: '₹3000',
    borderColors: 'silver',
  },
  {
    rank: '1st',
    amount: '₹5000',
    borderColors: 'gold',
  },
  {
    rank: '3rd',
    amount: '₹2000',
    borderColors: 'bronze',
  }
]

const rupeeIcon = [
  { mt: "mt-10", ml: "left-5", delay: 0.3 },
  { mt: "mt-170", ml: "left-1", delay: 0.3 },
  { mt: "mt-100", ml: "left-10", delay: 0.4 },
  { mt: "mt-50", ml: "left-50", delay: 0.6 },
  { mt: "mt-110", ml: "left-75", delay: 0.6 },
  { mt: "mt-30", ml: "left-100", delay: 0.2 },
  { mt: "mt-90", ml: "left-130", delay: 0.6 },
  { mt: "mt-60", ml: "left-180", delay: 0.5 },
  { mt: "mt-100", ml: "left-220", delay: 0.3 },
  { mt: "mt-20", ml: "left-240", delay: 0.8 },
  { mt: "mt-70", ml: "left-270", delay: 0.4 },
  { mt: "mt-140", ml: "left-220", delay: 0.3 },
  { mt: "mt-180", ml: "left-240", delay: 0.8 },
  { mt: "mt-130", ml: "left-270", delay: 0.4 },
  { mt: "mt-10", ml: "right-5", delay: 0.3 },
  { mt: "mt-120", ml: "right-1", delay: 0.6 },
  { mt: "mt-190", ml: "right-1", delay: 0.6 },
  { mt: "mt-170", ml: "right-50", delay: 0.4 },
];

export default function Prizes() {
  return (
    <section id="Prize" className="relative py-16 lg:px-16 md:px-8 px-4 overflow-hidden poster-frame">
      {/* Floating rupee icons with subtle parallax */}
      <ScrollParallax>
        {rupeeIcon.map((icon, idx) => (
          <div key={idx} className={`absolute ${icon.mt} ${icon.ml}`}>
            <motion.img
              src="/icons/rupee.png"
              alt="rupee"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 0.05 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 1.2,
                ease: "easeOut",
                delay: icon.delay,
              }}
              whileHover={{ scale: 1.1 }}
              animate={{ y: [0, -10, 0] }}
              className="h-8 sm:h-10 md:h-24"
            />
          </div>
        ))}
      </ScrollParallax>

      {/* Section Title */}
      <div className="text-center mb-8">
        <motion.h2
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold text-[#3B2A1B] mb-4 leading-tight"
        >
          Prize
        </motion.h2>
        <img src="/design-element-sepia.png" alt="design element" className="mx-auto w-40 sm:w-56 md:w-72" />
      </div>

      {/* Total Prize Pool */}
      <div className="text-center mb-10 text-lg sm:text-xl font-bold text-[#3B2A1B] flex justify-center">
        <img src="/12k.png" alt="Total Prize Pool Of ₹12K+" className="h-72 md:h-96" />
      </div>

      {/* Prize Cards Section */}
      <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-8 md:gap-10 mt-10 md:mt-20">
        {/* First Prize - appears 1st on mobile, middle on desktop */}
        <Prize
          rank={prize[1].rank}
          title="First"
          amount={prize[1].amount}
          borderColor={prize[1].borderColors}
          className="order-1 md:order-2 md:translate-y-[-75px]"
        />

        {/* Second Prize - appears 2nd on mobile, left on desktop */}
        <Prize
          rank={prize[0].rank}
          title="Second"
          amount={prize[0].amount}
          borderColor={prize[0].borderColors}
          className="order-2 md:order-1 md:translate-y-0"
        />

        {/* Third Prize - appears 3rd on mobile, right on desktop */}
        <Prize
          rank={prize[2].rank}
          title="Third"
          amount={prize[2].amount}
          borderColor={prize[2].borderColors}
          className="order-3 md:order-3 md:translate-y-0"
        />
      </div>
    </section>
  )
}
