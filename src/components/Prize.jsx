import { motion } from 'framer-motion'

const Prize = ({
  rank = '1st',
  title = '1st Prize',
  amount = '₹9,000+',
  subtitle = 'Cash Prize',
  image = '/Prize.png',
  borderColor = 'amber',
  amountColor='#FFD700',
  rankColor='#C5A100',
  className = '',
}) => {
  const borderColors = {
    amber: 'border-amber-900/30 [&_.accent]:border-amber-800/40 [&_.line]:bg-amber-700/50 [&_.divider]:bg-amber-700/50',
    gold: 'border-yellow-700/30 [&_.accent]:border-yellow-600/40 [&_.line]:bg-yellow-600/50 [&_.divider]:bg-yellow-600/50',
    silver: 'border-slate-600/30 [&_.accent]:border-slate-500/40 [&_.line]:bg-slate-500/50 [&_.divider]:bg-slate-500/50',
    bronze: 'border-orange-900/30 [&_.accent]:border-orange-800/40 [&_.line]:bg-orange-700/50 [&_.divider]:bg-orange-700/50',
  }

  const amountColors = {
    amber: 'text-amber-400',
    gold: 'text-[#C5A100]',
    silver: 'text-[#9E9E9E]',
    bronze: 'text-[#B87333]',
  }

  const imageFilters = {
    amber: 'brightness-100 hue-rotate-0',
    gold: 'brightness-110 saturate-150 hue-rotate-15',
    silver: 'grayscale brightness-125 contrast-90',
    bronze: 'brightness-90 saturate-120 hue-rotate-[-15deg]',
  }
  return (
    <motion.div
      whileHover={{
        scale: 1.03,
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8)',
      }}
      transition={{ duration: 0.3 }}
      className={`relative overflow-hidden rounded-xl bg-[#e9d3b0]  p-8 w-[320px] h-[380px] flex flex-col items-center justify-between border border-slate-900 ${className}`}
    >
      {/* Subtle top accent */}
      <div className="absolute top-0 left-0 right-0 h-px line" />
      
      {/* Minimal corner accents */}
      <div className="absolute top-4 left-4 w-8 h-8 border-t border-l accent" />
      <div className="absolute top-4 right-4 w-8 h-8 border-t border-r accent" />

      <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l accent" />
      <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r accent" />

      <div className="relative z-10 flex flex-col items-center justify-between h-full w-full">
        {/* Prize Rank */}
        <div className='absolute top-6.5 font-bold text-3xl text-shadow-blue-950 '>
          {rank}
        </div>
        
        {/* Prize Image */}
        <motion.img
          src={image}
          alt="Prize"
          className={`w-24 h-24 object-contain ${imageFilters[borderColor] || imageFilters.amber}`}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />

        {/* Content */}
        <div className="space-y-4 text-center">
          <h2 className="text-2xl font-semibold text-amber-600">
            {title}
          </h2>

          <p className={`text-5xl font-bold ${amountColors[borderColor] || amountColors.amber}`}>
            {amount}
          </p>

          <div className="w-16 h-px mx-auto divider" />

          <p className="text-md text-[#21223d] max-w-[240px]">
            {subtitle}
          </p>
        </div>

        <div className="w-full" />
        
      </div>
    </motion.div>
  )
}

export default Prize