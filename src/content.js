import abstract from "../src/assets/svg/abstract.svg";
import chronoItems from "../src/assets/svg/chrono-items.svg";
import curiosities from "../src/assets/svg/curiosities.svg";
import invisible from "../src/assets/svg/invisible.svg";
import phantasmal from "../src/assets/svg/phantasmal.svg";
import ghost from "../src/assets/svg/ghost.svg";
import basket from "../src/assets/svg/basket.svg";
import logo from "../src/assets/logo/logo.png";
import pixel from "../src/assets/logo/pixel-city.mp4";
export const header = {
  logo,
  basket,
  navBtn: ["Getting started", "Shop", "Contact", "About us", "Login"],
};

export const author = {
  title: "Welcome to...",
  titlea: "Oddity",
  titleb: "Emporium",
  titleDesc: "What kind of stuff we have?",
  desca: `Here, you ll find a collection of`,
  descb: ` peculiar artifacts`,
  descc: `, mind-bending curiosities, and objects that defy 
      reality itself. From bottled dreams and `,
  descd: `gravity-defying stones`,
  desce: ` to pocket-sized storms and invisible ink
              that reveals secrets only at midnight—each item tells a story
              stranger than fiction. Enter if you `,
  descf: `dare to explore`,
  descg: ` the unexplained, the surreal, and the
              wondrously weird. Magic awaits those who believe!`,
  buttona: "Go to shop",
  buttonb: "About us",
  pixel,
};

export const collecionOffer = {
  title: "Our Curated Collection...",
  desca: `At`,
  descb: `Oddity Emporium`,
  descc: `, we specialize in one-of-a-kind, surreal
          items that challenge the very fabric of reality. Whether you re a
          collector of the strange, an adventurer in search of the unknown, or
          simply curious about the unexplainable, our `,
  descd: `store`,
  desce: ` offers a variety of unique categories`,
};

export const collection = [
  {
    img: abstract,
    alt: "icon of Abstract Artifacts",
    title: "Abstract Artifacts",
    description: `Objects that seem to shift, bend, or exist outside the known laws of
            physics. From liquid-like sculptures to objects that appear only in
            certain lights, these pieces are perfect for those who appreciate
            the unknown.`,
  },
  {
    img: chronoItems,
    alt: "icon of Chrono-Items",
    title: "Chrono-Items",
    description: `Mysterious timepieces and devices that manipulate moments, 
            memories, and timelines. Own a clock that counts backward or a watch 
            that only ticks when you are lost in thought.`,
  },
  {
    img: curiosities,
    alt: "icon of Curiosities",
    title: "Living Curiosities",
    description: `A collection of creatures, plants, and phenomena that are not entirely 
            from this world. Perhaps an immortal plant that grows upside down or a creature 
            whose shadow is always a few steps ahead.`,
  },
  {
    img: invisible,
    alt: "icon of Invisible Oddities",
    title: "Invisible Oddities",
    description: `Items that cannot be seen, but can be felt, heard, or sensed. 
            Invisible ink that only appears when you're dreaming, or a fragrance that 
            changes based on your mood.`,
  },

  {
    img: phantasmal,
    alt: "icon of Phantasmal Decor",
    title: "Phantasmal Decor",
    description: `Home decor pieces that seem to glow, flicker, or hum with unseen energy. 
            Perfect for creating an atmosphere of wonder, from paintings that move when you're not 
            watching to furniture that rearranges itself.`,
  },
  {
    img: ghost,
    alt: "icon of Ethereal Relics",
    title: "Ethereal Relics",
    description: `Objects that exist in more than one reality at once. These relics can appear in 
            different forms depending on when and where you look at them. A mirror that shows your 
            future self, or a stone that changes its color when touched by moonlight.`,
  },
];

import smile from "../src/assets/svg/smile.svg";
import laugh from "../src/assets/svg/laugh.svg";
import smug from "../src/assets/svg/smug.svg";
import sad from "../src/assets/svg/sad-face.svg";

export const oddity = [
  {
    img: smile,
    alt: "icon of Exclusivity",
    title: "Exclusivity",
    description: `Our collection is unlike anything you'll find elsewhere. Each item is handpicked for its 
          rarity and intrigue, ensuring that you own something truly unique. You won't see these items in any other 
          store, making them perfect for collectors and adventurers alike`,
  },
  {
    img: laugh,
    alt: "icon of Guaranteed Mystery",
    title: "Guaranteed Mystery",
    description: `Every piece comes with its own story, mystery, or unexplained phenomenon. When you buy from us, 
          you're not just buying an object—you're acquiring a piece of the unknown, sparking your curiosity, and 
          adding an element of wonder to your life.`,
  },
  {
    img: smug,
    alt: "icon of Quality Beyond Imagination",
    title: "Quality Beyond Imagination",
    description: `We work with the finest artisans and creators who specialize in the bizarre and the impossible. 
        The craftsmanship behind each item is as intricate and exceptional as the object itself, ensuring you're 
        receiving a product that's both extraordinary and durable`,
  },
  {
    img: sad,
    alt: "icon of A Gateway to the Extraordinary",
    title: "A Gateway to the Extraordinary",
    description: `Our items aren't just for decoration—they're conversation starters, mood enhancers, and sometimes, 
        even mind-bending experiences. Add a little chaos, magic, or mystery to your everyday life.`,
  },
];

import tiktok from "../src/assets/svg/tiktok.svg";
import instagram from "../src/assets/svg/instagram.svg";
import linkedIn from "../src/assets/svg/linkedIn.svg";

export const footer = {
  logo,
  logoAlt: "Oddity Emporium logo",
  titleAlt: "Oddity Emporium",
  description: "Join us on our website!",
  button: "Login",
  buttona: "About us",
  question: "Questions/answers",
  questions: [
    "Are your items safe to use?",
    "Can I return an invisible item?",
    "What if my purchase disappears?",
    "Can I request a oddity?",
    "What happens if my item starts whispering?",
  ],
  shopTitle: "Shop",
  shop: [
    { name: "Browse category", href: "/shop" },
    { name: "Search items", href: "/shop" },
    { name: "Your shopping cart", href: "/shop" },
    { name: "Rest API", href: import.meta.env.VITE_SHOP_API },
  ],
  conc: "Contact",
  contactdesc: "You can use form or just click below and go to social media",
  images: [
    { alt: "LinkedIn", img: linkedIn, href: "https://www.linkedin.com/" },
    { alt: "Instagram", img: instagram, href: "https://www.instagram.com/" },
    { alt: "TikTok", img: tiktok, href: "https://www.tiktok.com/" },
  ],
  footerAuthor: "2024 Capyright: Oddity Emporium",
  footerCreated: "Created by: ER Studio",
};
export const dialogContents = [
  {
    title: `Are your items safe to use?`,
    description: `Absolutely. While some of our items may seem unusual, 
      they are carefully crafted with the highest standards 
      of safety in mind. Just remember: always handle with curiosity.`,
  },
  {
    title: `Can I return an invisible item?`,
    description: `Invisible items are tricky, but we'll work with you. If you feel like 
      it's not meeting your expectations, contact us and we'll find a way to 
      make things right—just be sure to describe it as best you can.`,
  },
  {
    title: `What if my purchase disappears?`,
    description: `If an item mysteriously vanishes, don't panic. It's likely just exploring other dimensions. 
      Reach out to us, and we'll help guide it back to your world.`,
  },
  {
    title: `Can I request a custom oddity?`,
    description: `Yes! We offer bespoke oddities for the truly adventurous. Send us your wildest ideas, 
      and we'll craft something uniquely suited to your needs—or perhaps your unspoken desires.`,
  },
  {
    title: `What happens if my item whispering?`,
    description: `If your item starts whispering, you're in for an adventure. Listen closely—sometimes 
      it's simply imparting wisdom. If it becomes too chatty, feel free to let us know, and we'll help restore quiet.`,
  },
];

import call from "../src/assets/svg/call.svg";
import mail from "../src/assets/svg/mail.svg";
import location from "../src/assets/svg/location.svg";
import calendar from "../src/assets/svg/calendar.svg";

export const contactForm = [
  {
    title: "Name",
    type: "text",
    name: "Name",
  },
  {
    title: "Phone number",
    type: "number",
    name: "Phone",
  },
  {
    title: "E-mail",
    type: "email",
    name: "Email",
  },
];

export const contact = [
  {
    img: call,
    alt: "Icon of Call",
    title: "call to us:",
    desc: "+1 334 546 333",
  },
  {
    img: mail,
    alt: "Icon of Mail",
    title: "Send an e-mail:",
    desc: "oddity@office.com",
  },
  {
    img: location,
    alt: "Icon of Location",
    title: "Location",
    desc: "Decatur Blvd unit a, Las Vegas, US",
  },
  {
    img: calendar,
    alt: "Icon of Calendar",
    title: "Open hours",
    desc: "Monday - Friday : 8AM - 10PM",
  },
];
export const aboutCite = [
  {
    author: `Elon Musk`,
    content: `"Finally, a store that understands my vibe! I bought a Chrono-Item, 
      and now I can take coffee breaks in the past. Highly recommend for anyone who 
      needs more hours in the day—or just wants to play with the space-time continuum!"`,
  },
  {
    author: `Jeff Bezos`,
    content: `"As someone who's been to space, I thought I'd seen it all. Then I visited 
        Oddity Emporium. I left with a pocket dimension for my office. Perfect for when 
        I need to take a 'quick' five-hour power nap."`,
  },
  {
    author: `Mark Zuckerberg`,
    content: `"Oddity Emporium has objects so mysterious, even my algorithms can't 
        understand them. Bought an Invisible Oddity—now I have a friend only 
        I can see. Highly recommend for introverts."`,
  },
  {
    author: `Bill Gates`,
    content: `"I walked in looking for a gadget, walked out with a Living Curiosity. 
        Turns out, I now have a pet rock that hums Bach in the evenings. 
        Best purchase since Windows 95."`,
  },
  {
    author: `Warren Buffett`,
    content: `"I came in looking for a good investment and left with a clock that runs 
        backwards. Now I can review my stock trades in reverse—if 
        only it worked on the stock market!"`,
  },
  {
    author: `Richard Branson`,
    content: `"Oddity Emporium has some fascinating pieces! Got myself a 
        Phantasmal Decor item that re-arranges itself. Now, every room 
        I walk into is like a new adventure. Saves me on redecorating!"`,
  },
  {
    author: `Larry Ellison`,
    content: `"I have houses around the world, but Oddity Emporium helped me 
        get my first interdimensional property—an invisible mansion that only 
        appears when it rains. It's exclusive enough even for me!"`,
  },
  {
    author: `Oprah Winfrey`,
    content: `"Oddity Emporium is a hoot! I got everyone on my staff an 
        Abstract Artifact. Now I have an office full of items that bend 
        and twist—I mean, it's just like running a talk show!"`,
  },
  {
    author: `Bernard Arnault`,
    content: `"As someone in the luxury business, I can say Oddity Emporium 
        redefines 'one of a kind.' Their Ethereal Relics line is a must-have,
        even if they only appear under the light of a waxing moon!"`,
  },
  {
    author: `Larry Page`,
    content: `"Oddity Emporium is the only store where I don't feel compelled 
        to understand everything. Bought a 'Mood Cloud' that rains when 
        I'm frustrated with a project—Google could learn a thing or two from these guys."`,
  },
];

import shop from "../src/assets/logo/shop.png";

export const aboutContent = {
  img: shop,
  alt: `Logo of Oddity Emporium`,
  title: `Welcome to oddity community!`,
  content: ` a place where the lines between reality and imagination blur. We're
          not your average shop; we’re a gateway to the unusual, the mystical,
          and the wonderfully strange. Born from a love for all things
          extraordinary, Oddity Emporium curates an ever-evolving collection of
          items that defy explanation and spark curiosity.`,
};

export const aboutSections = [
  {
    title: `Our Story`,
    content: `Oddity Emporium was born from a love for the extraordinary. We set out to create a place that brings together artifacts from worlds just beyond reach—items that invite curiosity and defy explanation. Our mission is to provide you with a collection of curiosities and treasures that inspire wonder and spark imagination.`,
    className: `about-reverse`,
  },
  {
    title: `Our Mission`,
    content: `Our mission is simple: to share artifacts and oddities that make you question the nature of reality. From time-bending devices to living curiosities, each item we offer is handpicked for its unique ability to ignite curiosity and challenge perception.`,
    className: `about-correct`,
  },
  {
    title: `Meet Our Team of Oddity `,
    content: `The team at Oddity Emporium is a group of explorers, collectors, and dreamers. Our "Oddity Seekers" travel hidden realms and forgotten spaces to bring you items that push the boundaries of the imaginable. Every piece is selected for its history, mystery, and the story it holds.`,
    className: `about-reverse-2`,
  },
  {
    title: `For the Curious and the Brave`,
    content: `Oddity Emporium isn’t just a shop; it’s an invitation. For the curious, the brave, and the dreamers, we offer a chance to rediscover wonder. We’re here to remind you that even in a world filled with answers, there are still mysteries worth uncovering.`,
    className: `about-correct-2`,
  },
];

import key from "../src/assets/svg/key.svg";

export const login = {
  img: key,
  alt: "Key icon, login",
  title: "Please log in to your account!",
  userLabel: {
    title: "Your username",
    type: "text",
  },
  passwordLabel: {
    title: "Your password",
    type: "password",
  },
  desc: "*All labels are requrired",
  descA: "*login or password is incorrect!",
  button: "Log in",
};

export function shopParameters(shopParams) {
  return [
    { title: "Created by", desc: shopParams.creator },
    { title: "Power source", desc: shopParams.power_source },
    { title: "Category", desc: shopParams.category },
    { title: "Uses", desc: shopParams.uses },
    { title: "Operating time", desc: shopParams.operating_time },
    { title: "Material", desc: shopParams.material },
    { title: "Weight", desc: shopParams.weight },
    { title: "Date of invention", desc: shopParams.date_of_invention },
    { title: "Dimensions", desc: shopParams.dimensions },
  ];
}
export function inventObj(newItems) {
  return [
    [
      {
        field: newItems.creator,
        title: "your name",
        name: "creator",
      },

      {
        field: newItems.name,
        title: "Invention name",
        name: "name",
      },

      {
        field: newItems.uses,
        title: "Uses form",
        name: "uses",
      },

      {
        field: newItems.price,
        title: "Price ( $ )",
        name: "price",
      },

      {
        field: newItems.weight,
        title: "Weight ( kg )",
        name: "weight",
      },

      {
        field: newItems.description,
        title: "Description",
        name: "description",
      },
    ],
    [
      {
        field: newItems.dimensions,
        title: "Dimensions ( CM x CM x CM )",
        name: "dimensions",
      },
      {
        field: newItems.power_source,
        title: "Power Source",
        name: "power_source",
      },
      {
        field: newItems.material,
        title: "Material",
        name: "material",
      },
      {
        field: newItems.status,
        title: "Amount",
        name: "status",
      },
      {
        field: newItems.category,
        title: "Category",
        name: "category",
      },
      {
        field: newItems.target_audience,
        title: "Target Audience",
        name: "target_audience",
      },
    ],
  ];
}
export const newInvention = {
  name: "",
  description: "",
  uses: "",
  creator: "",
  price: "",
  weight: "",
  dimensions: "",
  power_source: "",
  material: "",
  status: "",
  category: "",
  target_audience: "",
};
