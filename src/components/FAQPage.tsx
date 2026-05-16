import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What is the SeeYourMenu Service?",
    answer: "Our 'SeeYourMenu System' transforms plain text-only menus, into professional, appetizing high-quality visual menus, in typically 48 hours. Which boosts your customer orders (studies show visual menus can increase sales 30-70% for pictured items), and making your dishes look delicious as they taste, saving you hours of time and money, at a fraction of the cost of hiring photographers, buying ingredients, hiring a chef cooking and preparing each menu. Simply send us your text-only menu, and we do the transformation! We also offer an interactive menu viewing experience for customers through a simple QR code scan or direct link access. Contact us for more info."
  },
  {
    question: "How do customers access the menu?",
    answer: "Upon creating your menu, you’ll receive a unique link hosted by our service and a QR code that directs to your online menu. Share this link or QR code with your customers for easy access."
  },
  {
    question: "How long does it take to get started?",
    answer: "Getting started with SeeYourMenu is quick and straightforward! Simply send us your existing text-only menu, and we'll have your professional visual menu ready within 3-7 days, but typically 48 hours. And rush orders may be purchased as an add-on service. Contact us for details.\nOnce complete, you'll instantly receive your unique menu link and print-ready QR code, meaning you could be up and running and sharing your stunning visual menu with customers in as little as 2 days.\nThe sign-up process itself only takes a few minutes — so there's no reason to wait!"
  },
  {
    question: "Do you work with all types of restaurants and cuisines?",
    answer: "Yes, absolutely! SeeYourMenu works with all types of food businesses and cuisines — from fine dining restaurants and casual eateries, to cafes, food courts, hawker stalls, buffets, bars, and everything in between.\nWhether you serve local Singaporean favourites like Hainanese chicken rice and laksa, or international cuisines such as Japanese, Italian, Indian, or Western fare, our team is experienced in creating stunning visual menus that beautifully represent your dishes and culture.\nWe are proudly based in Singapore, with plans to expand our services to Thailand and Malaysia soon — so no matter your concept or cuisine, SeeYourMenu is here to help your food look as incredible as it tastes."
  },
  {
    question: "What countries or regions do you currently serve?",
    answer: "We are currently serving restaurants and food businesses across Singapore, covering all regions of the island including the Central Business District, Orchard, Jurong, Tampines, and beyond.\nWhether you're a bustling restaurant in the heart of the city or a hidden gem hawker stall in a neighbourhood estate, we're here to help you shine. We are also excited to announce that we will be expanding our services to Malaysia and Thailand in the near future, bringing the SeeYourMenu experience to even more restaurants and food lovers across Southeast Asia. Stay tuned for updates, or contact our sales team to be notified when we launch in your region! Email us at: seeyourmenu@gmail.com"
  },
  {
    question: "Do I need any technical knowledge to get started?",
    answer: "Not at all! SeeYourMenu is designed to be completely hassle-free for F&B owners. All you need to do is send us your existing text-only menu, and our team takes care of everything else — from creating the visuals to setting up your digital menu and generating your unique QR code and link. No coding, no design skills, and no technical experience required. If you can send an email, you're ready to get started!"
  },
  {
    question: "Does my restaurant need a website to use SeeYourMenu?",
    answer: "No, your restaurant does not need an existing website to use SeeYourMenu. Our service works completely independently — once your visual menu is ready, you'll receive a unique link and QR code that you can share directly with your customers, print on table cards, display at your entrance, or post on your social media pages. No website needed.\nHowever, if you'd like to take your online presence to the next level, we also offer professional website design services tailored specifically for restaurants. Having a dedicated website alongside your SeeYourMenu digital menu can help you attract more customers online, showcase your brand, and drive more reservations. Contact us to find out more."
  },
  {
    question: "How do I update or make changes to my menu?",
    answer: "You simply contact us and submit updates by calling or emailing us at any time. Minor text changes are usually processed within 24 hours, while larger updates (new photos or many items) follow the standard 48-hour turnaround. Email us at: seeyourmenu@gmail.com"
  },
  {
    question: "Can I print the QR code on my physical menus or table cards?",
    answer: "Absolutely! Once your digital menu is ready, you'll receive a high-resolution QR code that is print-ready and can be used anywhere you like — physical menus, table cards, posters, flyers, receipts, or even your restaurant's window. Simply scan it with any smartphone camera, and customers are instantly taken to your beautiful visual menu — no app download required. We also provide guidance on the best way to display your QR code for maximum visibility and customer engagement."
  },
  {
    question: "What format should I send my current menu in?",
    answer: "You can send it as a simple text document, Word file, PDF, Google Docs link, or even plain email. The cleaner and more organized the text, the faster and better the result. Or you can simply take a closeup photo of each menu page and send to us, we will extract the text."
  },
  {
    question: "Do I own the final menu and images?",
    answer: "Yes. You retain full ownership and commercial rights to the generated menu. We grant you a perpetual license to use it across your website, QR codes, social media, and printed materials."
  },
  {
    question: "Can I customize the menu to match my restaurant's branding (colors, logo, fonts)?",
    answer: "Yes. If you purchase the branding addon, we match your restaurant’s branding (colors, fonts, logo). You can also request specific styles (modern, rustic, fine-dining, etc.), highlight certain dishes, or add sections like wine lists, allergens, or chef’s notes."
  },
  {
    question: "Is there a limit on the number of menu items or pages?",
    answer: "Basic and Premium plans have reasonable limits suitable for most restaurants. Contact us if you have an especially large menu (e.g., hotels or chains)."
  },
  {
    question: "Can I integrate the digital menu with my existing website or POS system?",
    answer: "Yes. You can embed the menu on your website using a simple code snippet. We also offer API access on Business plans for deeper integrations with POS or ordering systems."
  },
  {
    question: "What happens if I’m not satisfied with the menu?",
    answer: "We offer a satisfaction guarantee. We’ll make one round of revisions at no extra cost. If you’re still not happy, you can cancel within the first 14 days for a full refund (conditions apply)."
  },
  {
    question: "Is my data and menu secure?",
    answer: "Absolutely. All data is encrypted, stored securely, and we never share your menu or business information with third parties. Access is protected by secure logins."
  },
  {
    question: "Do you support multiple locations or restaurant groups?",
    answer: "Yes — the Business plan is designed for chains and multi-location businesses. You can manage multiple menus from one dashboard with centralized billing and reporting."
  },
  {
    question: "For the integrated ordering system, is there any setup fees or long-term contracts?",
    answer: "No setup fees. All plans are month-to-month or annual (with discount). You can cancel anytime from your dashboard, though annual plans may have early cancellation terms."
  },
  {
    question: "Which devices and browsers does the menu work on?",
    answer: "Our menus are fully responsive and work beautifully on smartphones, tablets, laptops, and desktops. They perform well on all major browsers (Chrome, Safari, Firefox, Edge)."
  },
  {
    question: "Can customers order directly from the menu?",
    answer: "Currently the menu is view-only. However we also offer a direct integrated ordering service as an add-on."
  },
  {
    question: "How does pricing work for printed versions?",
    answer: "While we specialize in digital menus, we can generate high-resolution print-ready files for you to use with your local printer."
  },
  {
    question: "How do visual menus actually increase sales?",
    answer: "Studies and real-world tests consistently show that adding high-quality images to menus can increase sales of pictured items by 30-70%. Customers are more likely to order dishes they can clearly see and that look appetizing. Our professionally designed visual menus make your food look as delicious as it tastes, helping boost average order value and improving the overall customer experience."
  },
  {
    question: "Is there a free trial or demo available?",
    answer: "Absolutely! We’re happy to create a free sample menu from a section of your current menu (usually 4–6 items) so you can see the quality firsthand. We can also show you anonymised examples from restaurants in your cuisine type (Italian, Asian, fine dining, café, etc.). Just contact our sales team and we’ll arrange it promptly. Email us at: seeyourmenu@gmail.com"
  },
  {
    question: "What if my menu has allergens, dietary info, or specials?",
    answer: "We fully support this. You can include allergen information, dietary tags (vegan, gluten-free, vegetarian, nut-free, etc.), spice levels, or daily specials. We will highlight them clearly with icons, colors, or callout sections so customers can easily spot the information they need. Just mention your requirements when submitting your menu."
  },
  {
    question: "Do you offer white-label or custom domain options?",
    answer: "Yes. On the Business plan, we offer white-label options so your menu appears under your own domain (e.g., menu.yourrestaurant.com) with your branding and without any SeeYourMenu branding. This gives a fully professional, seamless experience for your customers."
  },
  {
    question: "How can I get help if I encounter issues or have questions?",
    answer: "Our dedicated support team is here to assist you. Contact us through our support portal on the website, or contact one of our sales team members for any queries or assistance."
  },
  {
    question: "Do you offer a menu viewing mode for vision-impaired customers?",
    answer: "Yes, we are committed to accessibility and inclusivity. 'The SeeYourMenu System have inbuilt high-resolution visuals, allowing for customers to simply zoom-in with finger pinch, making it fully readable for vision-impaired users, ensuring that everyone can comfortably navigate and use our digital menu services. This feature adjusts the menu display with enhanced contrast, larger fonts, and screen reader compatibility to facilitate easier navigation."
  },
  {
    question: "How does the auto-translate feature work?",
    answer: "The auto-translate feature allows your menu to be instantly translated into different languages based on your subscription tier: 1 language for the Basic subscription, 5 languages for the Premium subscription, and unlimited languages for the Business subscription."
  }
];

function formatAnswer(text: string) {
  const parts = text.split(/(SeeYourMenu)/g);
  return parts.map((part, index) =>
    part === 'SeeYourMenu' ? <span key={index} className="font-bold italic">SeeYourMenu</span> : part
  );
}

function FAQItem({ faq }: { faq: typeof faqs[0]; key?: React.Key }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <h3 className="text-xl font-bold text-brand-orange-safe group-hover:text-brand-orange transition-colors pr-6">
          {faq.question}
        </h3>
        {isOpen ? (
          <ChevronUp className="w-6 h-6 text-brand-orange-safe shrink-0" />
        ) : (
          <ChevronDown className="w-6 h-6 text-slate-400 group-hover:text-brand-orange-safe shrink-0 transition-colors" />
        )}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-slate-600 text-lg leading-relaxed whitespace-pre-wrap">
              {formatAnswer(faq.answer)}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-24">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-display font-medium text-brand-purple mb-6">
          Frequently Asked Questions
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Everything you need to know about the SeeYourMenu service, our process, and how we help increase your restaurant's sales.
        </p>
      </div>

      <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-8 md:p-12">
        {faqs.map((faq, index) => (
          <FAQItem key={index} faq={faq} />
        ))}
      </div>
    </div>
  );
}
