import { 
  ChatBubbleLeftRightIcon, 
  LightBulbIcon, 
  CalendarDaysIcon, 
  BellAlertIcon 
} from '@heroicons/react/24/outline'

const steps = [
  {
    number: '01',
    title: 'Answer',
            description: 'Opsly picks up calls and chats instantly, greeting customers with your brand voice and personality.',
    icon: ChatBubbleLeftRightIcon,
  },
  {
    number: '02',
    title: 'Understand',
    description: 'Our AI comprehends customer needs, asks intelligent follow-up questions, and accesses your knowledge base.',
    icon: LightBulbIcon,
  },
  {
    number: '03',
    title: 'Book & Sell',
    description: 'Seamlessly schedule appointments, process orders, and guide customers through your sales funnel.',
    icon: CalendarDaysIcon,
  },
  {
    number: '04',
    title: 'Notify',
    description: 'Keep your team informed with real-time updates, summaries, and escalations when human touch is needed.',
    icon: BellAlertIcon,
  },
]

export default function Explanation() {
  return (
    <div className="py-24 sm:py-32 bg-brandLight/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            How Opsly Works
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Our AI agents integrate seamlessly with your business, providing intelligent automation 
            that enhances rather than replaces your human team.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-7xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Illustration placeholder */}
            <div className="relative lg:order-2">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-purple-400/20 rounded-3xl border border-white/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-r from-primary to-purple-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-white text-4xl font-bold">AI</span>
                  </div>
                  <p className="text-gray-300 text-lg">
                    Interactive Demo<br />Coming Soon
                  </p>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/30 rounded-full blur-xl"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-purple-400/20 rounded-full blur-2xl"></div>
            </div>

            {/* Steps */}
            <div className="space-y-8 lg:order-1">
              {steps.map((step) => (
                <div key={step.number} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-purple-400 rounded-xl flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="text-sm font-mono text-primary font-bold">{step.number}</span>
                      <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 