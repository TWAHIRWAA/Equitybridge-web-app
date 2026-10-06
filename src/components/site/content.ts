// All facts below come from the existing equitbridge.org website.
// Anything not yet confirmed is marked "VERIFY BEFORE PUBLISHING" in a comment.
import mgm17 from "@/assets/photos/mgm_17.webp";
import mgm19 from "@/assets/photos/mgm_19.webp";
import mgm20 from "@/assets/photos/mgm_20.webp";
import mgm21 from "@/assets/photos/mgm_21.webp";
import mgm36 from "@/assets/photos/mgm_36.webp";
import mgm42 from "@/assets/photos/mgm_42.webp";
import mgm50 from "@/assets/photos/mgm_50.webp";
import boys1 from "@/assets/photos/img_6450.webp";
import boys2 from "@/assets/photos/img_6686.webp";
import env from "@/assets/photos/env.webp";

export const photos = { mgm17, mgm19, mgm20, mgm21, mgm36, mgm42, mgm50, boys1, boys2, env };

export const CONTACT = {
  email: "equitbridge@gmail.com",
  phone: "+250 788 511 116",
  address: "Gikondo Merez II, KK 31, 206 House, Kigali, Rwanda",
  maps: "https://maps.google.com/?q=Gikondo+Merez+II+KK+31+Kigali",
};

export const mailto = (subject: string) =>
  `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}`;

export const impact = [
  { n: 370, label: "Women empowered" },
  { n: 360, label: "Boys & young men reached" },
  { n: 79, label: "Children supported through education" },
  { n: 80, label: "Women in technology" },
];

export const journey = [
  {
    tag: "The beginning",
    title: "AMERWA",
    when: "Association des Métis au Rwanda",
    text: "Led by Alain Numa, AMERWA works for biracial children abandoned by their foreign fathers, and for their mothers — focusing on identity, education, advocacy and dignity.",
    img: mgm17,
  },
  {
    tag: "Women empowerment",
    title: "Zamuka Mugore with Bank of Kigali",
    when: "November 2022",
    text: "Bank of Kigali, in partnership with AMERWA, supported saving and development groups of women whose children were abandoned, helping them run income-generating activities together.",
    img: mgm36,
  },
  {
    tag: "Children & families",
    title: "Education support",
    when: "March 2023",
    text: "AMERWA supported children in different schools — paying school fees for 11 children, as reported in March 2023 — and continued to support their mothers.",
    img: mgm21,
  },
  {
    tag: "Youth mentorship",
    title: "Boyz 2 Men begins",
    when: "2023 – 2026",
    text: "A mentoring retreat for teenage boys, now in its fourth edition, building values, responsibility and leadership.",
    img: boys2,
  },
  {
    tag: "A broader mission",
    title: "Equity Bridge Initiative",
    when: "An institutional platform",
    text: "From this journey, Equity Bridge Initiative emerged with a wider mission: women, children, youth, education, environment, skills, entrepreneurship, technology and community development.",
    img: mgm19,
  },
  {
    tag: "Today",
    title: "Bridging opportunities",
    when: "2026",
    text: "Zamuka Mugore 2026 with NUDOR and Boyz 2 Men Edition 4 continue the work, alongside education, Green Savers and training for women.",
    img: mgm20,
  },
  {
    tag: "The next chapter",
    title: "Evidence. Learning. Scale.",
    when: "Ahead",
    text: "Deepening measurement, growing partnerships and taking proven programmes to more communities.",
    img: boys1,
  },
];

export const boyzEditions = [
  { year: "2023", ed: "Edition 1", text: "The first Boyz 2 Men retreat, a mentoring programme for teenage boys." },
  { year: "2024", ed: "Edition 2", text: "Continuing to mentor boys on values and responsibility." },
  {
    year: "2025",
    ed: "Edition 3",
    text: "Boys aged 12–16 on Rwandan values, patriotism, financial responsibility and creativity, hosted with Gasore Serge Foundation.",
  },
  { year: "2026", ed: "Edition 4", text: "A seven-day retreat for boys aged 12–16, July 19–26, 2026." },
];

export type Status = "Current" | "Past" | "Upcoming";
export const programmes: {
  area: string;
  name: string;
  text: string;
  img: string;
  status: Status;
  to?: "/zamuka-mugore" | "/boyz-2-men";
}[] = [
  { area: "Women & girls", name: "Zamuka Mugore", text: "Skills, economic empowerment, advocacy and social support for women's independence.", img: mgm36, status: "Current", to: "/zamuka-mugore" },
  { area: "Youth", name: "Boyz 2 Men", text: "Mentorship retreats for boys aged about 12–16 building values, confidence and leadership.", img: boys2, status: "Current", to: "/boyz-2-men" },
  { area: "Education & skills", name: "Education", text: "School materials, financial support, mentorship and family engagement for children from underserved families.", img: mgm21, status: "Current" },
  // VERIFY BEFORE PUBLISHING: confirm Green Savers is currently active
  { area: "Environment", name: "Green Savers", text: "Environmental conservation, climate resilience and community participation in sustainable practice.", img: env, status: "Current" },
  { area: "Education & skills", name: "Women in Technology", text: "Access to technology, digital skills and the opportunities they open.", img: mgm19, status: "Current" },
  { area: "Community development", name: "Women in Entrepreneurship", text: "Entrepreneurship training for financial independence and sustainable livelihoods.", img: mgm17, status: "Current" },
];

export const partners = [
  { name: "Bank of Kigali", link: "Zamuka Mugore women's saving groups (2022)" },
  { name: "NUDOR", link: "Zamuka Mugore 2026" },
  { name: "Gasore Serge Foundation", link: "Boyz 2 Men Edition 3 host" },
  // VERIFY BEFORE PUBLISHING: programme connection for the partners below
  { name: "Adario France", link: "Collaborator" },
  { name: "JIBU Rwanda", link: "Collaborator" },
  { name: "Kigali Universe", link: "Collaborator" },
];

export const team = [
  { name: "Alain Numa", role: "Founder & Executive Director", img: mgm42, bio: "Led AMERWA and championed the Zamuka Mugore women's groups; today leads programmes in women's empowerment, youth, education, environment and community development." },
  // VERIFY BEFORE PUBLISHING: short bio wording
  { name: "Jacqueline Umurerwa", role: "Assistant Director", img: mgm50, bio: "Supports the leadership of Equity Bridge's programmes and partnerships." },
  // Official photograph pending from the organisation.
  { name: "TWAHIRWA Samuel", role: "Project Manager", img: "https://media.licdn.com/dms/image/v2/D4D03AQHSmgm91QHNYg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1709458014794?e=1792627200&v=beta&t=__HYDBmTE3HDa5yLKuiCBBqjH5g9_WxbizsYaESNxfU", bio: "Coordinates delivery of Equity Bridge programmes in the community." },
];

export const videos = [
  { id: "i1oYSo5hOzo", title: "Equity Bridge Initiative in action", text: "See the work of Equity Bridge Initiative in the community." },
  { id: "2TNmuV_O61g", title: "Stories from the community", text: "Hear from the people and programmes behind the mission." },
];
