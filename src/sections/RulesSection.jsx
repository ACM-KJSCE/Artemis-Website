import { motion } from "framer-motion";
const rules = [
  {
    title: "The Law of Origin",
    content: [
      "No plagiarism or direct copy-pasting of entire codebases from existing projects or the internet.",
      "Using individual components or libraries is allowed, but the project must be original.",
      "Use of AI is allowed."
    ]
  },
  {
    title: "The Oath of the Guild",
    content: [
      "All commits must come only from registered team members.",
      "No external contributors, bots, or AI agents commits are allowed.",
      "Each project must start from scratch.",
      "Any violation will result in direct disqualification."
    ]
  },
  {
    title: "The Code of Conduct",
    content: [
      "Participants must maintain professionalism and respect at all times.",
      "The official code of conduct must be followed throughout the competition."
    ]
  },
  {
    title: "The Hall of Records",
    content: [
      "Uploading final projects to GitHub is optional (volunteers can assist if needed).",
      "Repositories, if provided, should be accessible and runnable locally or deployed for evaluation.",
      "No extra points will be awarded for GitHub uploads or deployments."
    ]
  }
];

const cards = ["/cards/card-king.png", "/cards/card-queen.png", "/cards/card-ace.png", "/cards/card-jack.png"];

export default function RulesSection() {

  return (
    <section className="relative min-h-screen w-full overflow-hidden pt-[40px] poster-frame" id="rules">
        <img className='absolute top-0 w-full h-full opacity-40' src='/rulesbg.png' alt='Background Image'/>

        <div className="flex flex-col">

            <div className="text-center mt-[50px] mb-[20px]" id="rules">
                <motion.p 
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.5 }}
                className="md:text-7xl sm:text-5xl text-4xl font-bold text-[#3B2A1B]  leading-tight">RULES</motion.p>
                <img src="/design_element.png" alt="design element" className="mx-auto w-72" />
                <p className="mt-[10px] text-[#3B2A1B] font-semibold ">Follow the sacred laws to walk the path of honor</p>
            </div>
            
            
            <div className="  space-y-12 sm:max-w-3xl sm:mx-auto relative mt-[20px] mb-[100px]">
                <div className="flex bg-[#6E4F26]/70 absolute w-[5px] h-[105%] left-[50%] top-[-20px] rounded-[10px] "></div>
                {rules.map((rule, index) => (
                <motion.div
                    key={rule.title}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    className={` flex flex-col md:flex-row   ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}
                >
                    {index % 2 !== 0 && (
                      <img src={cards[index]} alt="" className="hidden md:block w-32 self-center object-contain pointer-events-none" />
                    )}
                    <div className={`w-[90%] ml-auto mr-auto sm:ml-auto sm:mr-auto sm:w-[80%] bg-[#E6CFA8] border-[#3B2A1B] border-[1px]  rounded-2xl relative ${
                        index % 2 === 0 ? "md:ml-0 md:mr-auto" : "md:mr-0 md:ml-auto"
                    } `}
                    >
                    <img className=' absolute top-0  h-[100%] object-cover sm:object-none sm:w-[100%] opacity-10' 
                    src='/rules-card-bg.png' 
                    alt='Background Image'/>
                    <div className="flex items-center gap-2 m-[20px] mb-[5px]">
                        <h3 className="text-2xl font-serif font-semibold text-[#3B2A1B] underline">
                        {rule.title}
                        </h3>
                    </div>

                    <ul className="text-left text-[#3B2A1B] font-medium m-[20px] mt-[10px]">
                        {rule.content.map((line, i) => (
                        <li key={i}>{line}</li>
                        ))}
                    </ul>
                    </div>
                    {index % 2 === 0 && (
                      <img src={cards[index]} alt="" className="hidden md:block w-32 self-center object-contain pointer-events-none" />
                    )}
                </motion.div>
                ))}
            </div>
        </div>
    </section>
  );
}

