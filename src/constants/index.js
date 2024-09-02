import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  ICC,
  BMC,
  AMS,
  chromecast,
  disc02,
  facebook,
  linkedIn,
  file02,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  plusSquare,
  recording01,
  recording03,
  roadmap1,
  searchMd,
  sliders04,
  SFM,
  MTS,
  CCM,
  IPC,
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  google,
  meta,
  website,
  whatsApp,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "2",
    title: "Solutions",
    url: "#solutions",
  },
  {
    id: "3",
    title: "Blogs",
    url: "#blogs",
  },

  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const byIndustryFeatures = [
  {
    id: "0",
    title: "B2B Sales",
  },
  {
    id: "1",
    title: "Travel and Tourism",
  },
  {
    id: "2",
    title: "Restaurants & Food Business",
  },
  {
    id: "3",
    title: "Spas and Salons",
  },
  {
    id: "4",
    title: "Health & Wellness Brands",
  },
  {
    id: "5",
    title: "Beauty & Cosmetic Brands",
  },
  {
    id: "6",
    title: "Edutech",
  },
  {
    id: "7",
    title: "Automotive Industry",
  },
  {
    id: "8",
    title: "Home Decor & Furnishing",
  },
  {
    id: "9",
    title: "Marketing Agency",
  },
  {
    id: "10",
    title: "Real Estate",
  },
  {
    id: "11",
    title: "Freelancer and Consultant Sales",
  },
  {
    id: "12",
    title: "Banking and Finance",
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [logo1, logo2, logo3, logo4, logo5, logo6];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const testimonial = [
  {
    id: "0",
    title: "Maitreyi Rao",
    text: "Thanks to engagehub's WhatsApp marketing services, my sales have increased tenfold! I highly recommend engagehub to anyone looking to boost their business with effective WhatsApp marketing strategies.",
    topic: "WhatsApp Marketing",
  },
  {
    id: "1",
    title: "Virajas Kulkarni",
    text: "I am so impressed with engagehub's innovative approach to WhatsApp marketing. Their services are unparalleled, and I am truly in love with their chatbot service. I highly recommend engagehub to anyone looking to boost their marketing strategies.",
    topic: "Chatbot Services",
  },
];

export const blogs = [
  {
    id: "0",
    title: "Revolutionizing WhatsApp Marketing Automation",
    text: "The blog introduces Engagehub, a WhatsApp marketing automation tool that enhances customer engagement with features like bulk messaging, chatbots, and integrated product catalogs. It emphasizes how these tools streamline communication and drive business growth.",
    imageUrl: roadmap1,
    colorful: true,
  },
];

export const collabText = "";

export const collabContent = [
  {
    id: "0",
    title: "Negative Google Rating eliminator",
    text: collabText,
  },
  {
    id: "1",
    title: "Feedback Manager",
  },
  {
    id: "2",
    title: "Product Catalogue / Brand Website",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Google",
    icon: google,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Meta",
    icon: meta,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Website",
    icon: website,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Whatsapp",
    icon: whatsApp,
    width: 34,
    height: 35,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Monthly - PRO",
    description:
      "Build simple Bots, Send bulk broadcast messages, Customer segmentation, and more. (billed yearly) + GST",
    price: "699/month",
    features: [
      "Build simple Bots",
      "Send bulk broadcast messages",
      "Customer segmentation",
      "Share products and catalogues",
      "Detailed broadcast analytics",
      "Excel export and import",
      "Google sheets integration",
      "Access on mobile and web",
    ],
  },
  {
    id: "1",
    title: "Pro Plus",
    description: "Advanced features and additional benefits",
    description2: "(billed yearly)",
    price: "999/year",
    features: [
      "Build simple Bots",
      "Send bulk broadcast messages",
      "Customer segmentation",
      "Share products and catalogues",
      "Detailed broadcast analytics",
      "Excel export and import",
      "Google sheets integration",
      "Access on mobile and web",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Instant Customer Connection",
    tagline: "Connect Instantly, Know Your Customers",
    text1:
      "Engagehub uses QR codes to connect customers instantly to WhatsApp, capturing valuable data in real-time to build insights and strengthen customer relationships from the first interaction.",
    text2:
      "QR code scanning: This feature allows customers to easily connect with your business by simply scanning a QR code with their smartphone. When scanned, it automatically opens WhatsApp and directs them to your official business number",
    text3:
      "Real-time customer data collection: As customers interact with your WhatsApp, Engagehub automatically captures and stores their information in its CRM (Customer Relationship Management) system. This data can include contact details, conversation history, and other relevant information.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: ICC,
  },
  {
    id: "1",
    title: "Bulk Messaging Capabilities",
    tagline: "Reach Everyone, Anytime",
    text1:
      "Effortlessly reach your entire customer base with Engagehub's bulk messaging feature, ensuring compliance with WhatsApp's policies while maximizing engagement for promotions, updates, and important announcements.",
    text2:
      "Importing existing databases: You can easily upload your current customer list into Engagehub's CRM, allowing you to reach out to all your contacts through WhatsApp.",
    text3:
      "Unlimited messaging without account suspension: Engagehub uses approved methods to send mass messages, ensuring you can reach a large audience without violating WhatsApp's policies and risking account closure.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: BMC,
    light: true,
  },
  {
    id: "2",
    title: "Advanced Message Scheduling",
    tagline: "Plan Ahead, Communicate Smart",
    text1:
      "Engagehub's advanced scheduling feature lets you plan messages in advance, target specific customer groups, and ensure timely, relevant communication, automating your marketing strategy for maximum impact.",
    text2:
      "Future date scheduling: You can plan and set up messages to be sent at specific times in the future, allowing for better planning and timing of your communications.",
    text3:
      "Audience targeting: You can select specific groups of customers to receive particular messages, ensuring relevance and personalization.",

    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: AMS,
  },
  {
    id: "3",
    title: "Intelligent Chatbot Integration",
    tagline: "Automate Support, Delight Customers",
    text1:
      "Engagehub's intelligent chatbot handles customer queries 24/7, providing instant responses and customizable support options, reducing staff workload and enhancing customer satisfaction through quick, automated interactions.",
    text2:
      "Future date scheduling: You can plan and set up messages to be sent at specific times in the future, allowing for better planning and timing of your communications.",
    text3:
      "Audience targeting: You can select specific groups of customers to receive particular messages, ensuring relevance and personalization.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: CCM,
    light: true,
  },

  {
    id: "4",
    title: "Smart Feedback Management",
    tagline: "Listen, Improve, Succeed",
    text1:
      "Automatically gather customer feedback with Engagehub, boost your online reputation with positive reviews, and receive alerts for negative feedback to address issues promptly and maintain high customer satisfaction",
    text2:
      "Automated feedback collection: The system automatically sends feedback requestsvia WhatsApp after customer interactions. Positive review auto-submission: When a customer gives a rating of 4 or 5 stars, it's automatically posted to your Google My Business profile, boosting your online reputation. ",
    text3:
      "Negative feedback alerts: For ratings of 3 stars or below, the system sends an immediate notification to the business owner, allowing for quick intervention and problem-solving.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: SFM,
  },
  {
    id: "5",
    title: "Customer Segmentation and Personalization",
    tagline: "Know More, Engage Better",
    text1:
      "Analyze customer preferences and send personalized messages with Engagehub, enhancing relevance and engagement by delivering the right content to the right customer segments, boosting satisfaction and sales.",
    text2:
      "Preference analysis: The system analyses customer interactions and behaviours to understand individual preferences. ",
    text3:
      "Tailored messaging: Based on this analysis, you can send personalized messages to different customer segments.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "6",
    title: "Comprehensive Conversation Management",
    tagline: "Organize Conversations, Optimize Service",
    text1:
      "Manage all customer interactions centrally with Engagehub, ensuring no message goes unanswered and improving customer service efficiency by keeping communication organized and accessible in one hub",
    text2:
      "Centralized conversation hub: All customer interactions via WhatsApp are stored and easily accessible in one place.",
    text3:
      "Interaction tracking: You can easily view and manage all customer conversations, ensuring no message goes unanswered.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: MTS,
  },
  {
    id: "7",
    title: "Integrated Product Catalogue and Website",
    tagline: "Shop Within WhatsApp, Simplify Sales",
    text1:
      "Engagehub integrates your product catalog into WhatsApp, allowing customers to browse and purchase without leaving the chat, reducing friction in the buying process and boosting sales",
    text2:
      "In-app product showcase: Customers can browse your products directly within whatsApp, without needing to visit a separate website. ",
    text3:
      "Seamless browsing experience: This integration makes it easy for customers to view products and make purchasing decisions while chatting with your business.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: IPC,
  },
];

export const socials = [
  {
    id: "0",
    title: "Instagram",
    iconUrl: instagram,
    url: "https://www.instagram.com/h2so4_engagehub/",
  },
  {
    id: "1",
    title: "LinkedIn",
    iconUrl: linkedIn,
    url: "https://www.linkedin.com/company/h2so4labs",
  },
  {
    id: "2",
    title: "Facebook",
    iconUrl: facebook,
    url: "https://www.facebook.com/people/H2SO4Labs/61560026503079/?is_tour_dismissed",
  },
];
