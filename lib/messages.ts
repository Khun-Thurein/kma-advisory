export type Locale = "en" | "my";

type HomeMessages = {
  eyebrow: string;
  heroTitleLine1: string;
  heroTitleLine2: string;
  heroBody: string;
  exploreServices: string;
  summary: [string, string][];
  serviceEyebrow: string;
  serviceTitle: string;
  serviceIntro: string;
  services: {
    code: string;
    title: string;
    body: string;
    comingSoon?: boolean;
  }[];
  comingSoonLabel: string;
  perspectiveTitle: string;
  perspectiveBody: string;
  burmeseSupport: string;
  aboutUs: string;
  contactEyebrow: string;
  contactTitle: string;
  contactBody: string;
  emailLabel: string;
  credentials: string;
};

const enHome: HomeMessages = {
  eyebrow: "Burmese CPA Accountant in Australia",
  heroTitleLine1: "Welcome To",
  heroTitleLine2: "KMA Advisory",
  heroBody:
    "KMA Advisory provides accounting and business advisory services in English and Burmese for small and medium-sized Australian businesses.",
  exploreServices: "Explore Services",
  summary: [
    ["Australia", "Accounting support and local reporting context"],
    ["Independent", "A direct relationship with your accountant"],
    ["Prepared", "Records kept ready for the dates that matter"],
  ],
  serviceEyebrow: "Service areas",
  serviceTitle: "Across the accounting calendar",
  serviceIntro:
    "From routine reporting to decisions that need a reliable view of the numbers.",
  services: [
    {
      code: "01",
      title: "Business advisory",
      body: "A clear view of cash, structure, and the decisions behind the numbers.",
    },
    {
      code: "02",
      title: "Bookkeeping support",
      body: "Day-to-day records kept accurate, reconciled, and ready for reporting.",
    },
    {
      code: "03",
      title: "Cashflow & profitability analysis",
      body: "See where cash comes from, where it goes, and which work earns the most.",
    },
    {
      code: "04",
      title: "Tax and lodgements",
      body: "Individual and business tax work tied to clear dates and practical next steps.",
      comingSoon: true,
    },
    {
      code: "05",
      title: "BAS and GST",
      body: "Regular reporting that keeps obligations visible and records ready.",
      comingSoon: true,
    },
    {
      code: "06",
      title: "Business compliance",
      body: "Registrations, deadlines, and obligations kept on track so nothing is missed.",
      comingSoon: true,
    },
  ],
  comingSoonLabel: "Coming soon",
  perspectiveTitle: "Myanmar-Founded",
  perspectiveBody:
    "The planned service stays focused on Australian obligations, the practical needs of each client, and clear communication in English or Burmese.",
  burmeseSupport: "Burmese-speaking Support",
  aboutUs: "About Us",
  contactEyebrow: "Contact",
  contactTitle: "Start with the question.",
  contactBody:
    "Tell us what you need and any date that matters. The form prepares an email for you to review and send.",
  emailLabel: "Email",
  credentials: "Credentials",
};

/** Partial Burmese: missing fields fall back to English in getHomeMessages. */
const myHomePartial: Partial<HomeMessages> & {
  services?: Partial<HomeMessages["services"][number]>[];
  summary?: [string, string][];
} = {
  eyebrow: "Burmese CPA Accountant in Australia",
  heroTitleLine1: "KMA Advisory",
  heroTitleLine2: "မှကြိုဆိုပါတယ်",
  heroBody:
    "KMA Advisory သည် Australia ရှိ စာရင်းကိုင်ဆိုင်ရာ လိုအပ်ချက်များကို ကူညီပေးရန် ရည်ရွယ်ပါသည်။",
  exploreServices: "ဝန်ဆောင်မှုများ",
  serviceEyebrow: "ဝန်ဆောင်မှုများ",
  serviceTitle: "ဝန်ဆောင်မှုများ",
  serviceIntro:
    "ဘာသာစကားကြောင့် အရေးကြီးသော စာရင်းကိုင်ဆုံးဖြတ်ချက်များ ပိုမိုခက်ခဲမသွားသင့်ပါဘူး။ KMA Advisory မှာ မြန်မာ သို့မဟုတ် အင်္ဂလိပ်ဘာသာဖြင့်မေးမြန်းပြီး လိုအပ်သော ဝန်ဆောင်မှု ရရှိရန် အခုပဲ ဆက်သွယ်လိုက်ပါ။",
  services: [
    {
      code: "04",
      title: "အခွန်(tax) ဆိုင်ရာ စာရွက်စာတမ်းများ",
      body: "ပြင်ဆင်ခြင်းနှင့် တင်သွင်းရန် စီစဉ်ခြင်း",
    },
  ],
  comingSoonLabel: "မကြာမီ",
  perspectiveBody:
    "ဘာသာစကားကြောင့် အရေးကြီးသော စာရင်းကိုင်ဆုံးဖြတ်ချက်များ ပိုမိုခက်ခဲမသွားသင့်ပါဘူး။",
  contactTitle: "မေးခွန်းတစ်ခုဖြင့် စတင်ပါ။",
  contactBody:
    "လိုအပ်သော ဝန်ဆောင်မှုနှင့် အရေးကြီးသည့် ရက်စွဲကို ပြောပြပါ။ လုပ်ငန်းစတင်ပြီးနောက် နောက်တစ်ဆင့် ပြင်ဆင်ရန် ထိုအချက်အလက်များကို အသုံးပြုပါမည်။",
};

export function getHomeMessages(locale: Locale): HomeMessages {
  if (locale === "en") return enHome;

  const services = enHome.services.map((service) => ({
    ...service,
    ...myHomePartial.services?.find((item) => item.code === service.code),
  }));

  return {
    ...enHome,
    ...myHomePartial,
    services,
    summary: myHomePartial.summary ?? enHome.summary,  };
}

export const footerCopy = {
  en: {
    blurb: "Placeholder text.",
    pages: "Pages",
    contact: "Contact",
    privacy: "Privacy",
    placeholders: "Contact details are placeholders until confirmed.",
  },
  my: {
    blurb: "Placeholder text.",
    pages: "Pages",
    contact: "Contact",
    privacy: "Privacy",
    placeholders: "Contact details are placeholders until confirmed.",
  },
} as const;
