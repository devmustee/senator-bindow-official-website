import { images, allImages } from "./images.ts";

/**
 * All site content lives here. Nothing on the site should state a fact that is
 * not represented below with at least one source id from ./sources.ts.
 *
 * Verification levels:
 *   verified    – a primary record, or two or more independent credible sources
 *   reported    – one credible outlet; not yet cross-checked
 *   claim       – a statement by the administration, the subject or a partisan,
 *                 not independently confirmed (shown to visitors as such)
 *   unconfirmed – sources conflict or are weak; must be confirmed before it is
 *                 presented as fact (shown to visitors with a flag)
 */
export type Verification = "verified" | "reported" | "claim" | "unconfirmed";

export const verificationLabel: Record<Verification, string> = {
  verified: "Verified",
  reported: "Reported",
  claim: "Official claim",
  unconfirmed: "Awaiting confirmation",
};

export const verificationHelp: Record<Verification, string> = {
  verified: "Confirmed by a primary record or by two or more independent sources.",
  reported: "Reported by one credible outlet; not yet cross-checked.",
  claim: "Stated by the government or another party; not independently confirmed.",
  unconfirmed: "Sources conflict or are incomplete. Not yet confirmed.",
};

export interface Fact {
  text: string;
  sources: string[];
  verification: Verification;
}

/* ------------------------------------------------------------------ */
/* Profile                                                             */
/* ------------------------------------------------------------------ */

export const profile = {
  name: "Muhammadu Umaru Jibrilla Bindow",
  shortName: "Jibrilla Bindow",
  honorific: "Senator",
  /** Spellings used by credible outlets; listed so visitors searching any of them land here. */
  alsoKnownAs: [
    "Bindow Jibrilla",
    "Bindo Jibrilla",
    "Mohammed Umaru Jibrilla",
    "Muhammed Umar Jibrilla Bindow",
    "Mohammed Umar Jibrilla Bindow",
  ],
  offices: [
    "Governor of Adamawa State, 2015–2019",
    "Senator for Adamawa North, 2011–2015",
  ],
  base: "Mubi, Adamawa State",
  /** Set to a licensed image path in /public when one is supplied. */
  portrait: {
    src: "/images/portrait.jpg",
    alt: "Official portrait of Senator Muhammadu Umaru Jibrilla Bindow in a gold babban riga and black cap, beside the Nigerian flag",
    credit: "Official portrait. Supplied by his office.",
  } as null | { src: string; alt: string; credit: string },
};

export const keyFacts: { label: string; value: string; fact: Fact }[] = [
  {
    label: "Governor of Adamawa State",
    value: "29 May 2015 – 29 May 2019",
    fact: { text: "Served as Governor of Adamawa State from 29 May 2015 to 29 May 2019.", sources: ["wiki", "ngf-fintiri"], verification: "verified" },
  },
  {
    label: "Senator, Adamawa North",
    value: "6 June 2011 – 29 May 2015",
    fact: { text: "Represented Adamawa North Senatorial District in the 7th National Assembly.", sources: ["wiki", "inec-2011", "punch-2011-result"], verification: "verified" },
  },
  {
    label: "Deputy Governor",
    value: "Martins Babale",
    fact: { text: "His deputy governor was Martins Babale.", sources: ["wiki"], verification: "reported" },
  },
  {
    label: "Political base",
    value: "Mubi, Adamawa North",
    fact: { text: "He is registered as a party member at his ward in Mubi.", sources: ["dailytrust-2026-apc", "blueprint-2026-adc-exit"], verification: "verified" },
  },
];

/* ------------------------------------------------------------------ */
/* Timeline                                                            */
/* ------------------------------------------------------------------ */

export type Era = "early" | "business" | "senate" | "governor" | "later";

export const eraLabel: Record<Era, string> = {
  early: "Early life",
  business: "Business",
  senate: "Senate",
  governor: "Governorship",
  later: "Later public life",
};

export interface TimelineEvent {
  date: string; // display date
  year: number;
  era: Era;
  title: string;
  fact: Fact;
  milestone?: boolean;
}

export const timeline: TimelineEvent[] = [
  {
    date: "1963 or 1965",
    year: 1963,
    era: "early",
    title: "Born in Adamawa State",
    fact: {
      text: "Published sources disagree on his date of birth. Wikipedia gives 15 April 1965 but also files him under 1963 births, and other reference copies give 16 June 1963. The date should be confirmed from an official record before it is published as fact.",
      sources: ["wiki"],
      verification: "unconfirmed",
    },
  },
  {
    date: "June 2010",
    year: 2010,
    era: "business",
    title: "Sardauna of Mubi enters the Senate race",
    fact: {
      text: "Described in the press as Alhaji Bindow Jibrilla, the Sardauna of Mubi Emirate, he declared for the Adamawa North Senate seat. The incumbent was Mohammed Mana.",
      sources: ["tide-2010-sardauna"],
      verification: "reported",
    },
  },
  {
    date: "Before 2011",
    year: 2010,
    era: "business",
    title: "Industrialist in Mubi",
    fact: {
      text: "Contemporary reports described him as an industrialist who had set up three companies in Mubi employing about 400 people, and as a businessman new to politics.",
      sources: ["nd-2011-industrialist", "dt-2010-tycoon", "wiki"],
      verification: "reported",
    },
  },
  {
    date: "January 2011",
    year: 2011,
    era: "senate",
    title: "Wins PDP senatorial primary for Adamawa North",
    fact: {
      text: "Won the Peoples Democratic Party primary for Adamawa North with 626 votes. Mohammed Mana was second with 474.",
      sources: ["pd-2011-primary", "wiki"],
      verification: "reported",
    },
  },
  {
    date: "March 2011",
    year: 2011,
    era: "senate",
    title: "Court affirms his candidacy",
    fact: {
      text: "A Federal High Court in Abuja dismissed a challenge to the primary and affirmed him as the PDP candidate for Adamawa North.",
      sources: ["channels-2011-court", "wiki"],
      verification: "reported",
    },
  },
  {
    date: "9 April 2011",
    year: 2011,
    era: "senate",
    title: "Elected Senator for Adamawa North",
    milestone: true,
    fact: {
      text: "Elected to the Senate with 75,112 votes. Former governor Boni Haruna of the ACN polled 70,890.",
      sources: ["punch-2011-result", "inec-2011", "wiki"],
      verification: "verified",
    },
  },
  {
    date: "6 June 2011",
    year: 2011,
    era: "senate",
    title: "Takes his seat in the 7th National Assembly",
    fact: {
      text: "Served as Senator for Adamawa North from 6 June 2011 to 29 May 2015. He succeeded Mohammed Mana and was succeeded by Binta Masi Garba.",
      sources: ["wiki"],
      verification: "reported",
    },
  },
  {
    date: "September 2014",
    year: 2014,
    era: "senate",
    title: "Named APC governorship candidate",
    fact: {
      text: "Reported as the All Progressives Congress candidate for a governorship election in Adamawa then scheduled for 11 October 2014. He had moved from the PDP to the APC by this time.",
      sources: ["channels-2014-candidate"],
      verification: "reported",
    },
  },
  {
    date: "11 April 2015",
    year: 2015,
    era: "governor",
    title: "Elected Governor of Adamawa State",
    milestone: true,
    fact: {
      text: "Won the 2015 governorship election as the APC candidate. Stears records 362,329 votes for him and 181,806 for Markus Gundiri of the SDP. Nuhu Ribadu was also a candidate.",
      sources: ["stears-2015", "wiki-2015-election", "wiki"],
      verification: "reported",
    },
  },
  {
    date: "15 April 2015",
    year: 2015,
    era: "governor",
    title: "Pledges to govern for all",
    fact: {
      text: "As governor-elect he thanked supporters in Yola and promised to be a governor for everyone regardless of tribe, religion or party. His opponent Dr Ahmad Moddibo of the PDM congratulated him on what he called a free and fair election.",
      sources: ["dt-2015-governor-elect"],
      verification: "reported",
    },
  },
  {
    date: "29 May 2015",
    year: 2015,
    era: "governor",
    title: "Sworn in as Governor",
    milestone: true,
    fact: {
      text: "Took office as Governor of Adamawa State, succeeding Bala James Ngilari, with Martins Babale as deputy governor.",
      sources: ["wiki"],
      verification: "verified",
    },
  },
  {
    date: "December 2015",
    year: 2015,
    era: "governor",
    title: "First road programme in Yola, Jimeta and Mubi",
    fact: {
      text: "Seven months into the term, the governor said contracts had been awarded for urban roads in Yola, Jimeta and Mubi. He put the work at 49 roads covering 49.01 km at about ₦8.2 billion. A NAN report from the same week gave 46 km.",
      sources: ["blueprint-2015-roads", "newsexpress-2015-roads"],
      verification: "claim",
    },
  },
  {
    date: "November 2016",
    year: 2016,
    era: "governor",
    title: "Girei–Pariya–Wuro Boki road started",
    fact: {
      text: "Construction began on the 27.5 km Girei–Pariya–Wuro Boki road. Former Vice President Atiku Abubakar attended the ceremony in Girei.",
      sources: ["eagle-2016-girei"],
      verification: "reported",
    },
  },
  {
    date: "January 2018",
    year: 2018,
    era: "governor",
    title: "Prerogative of mercy for 39 inmates",
    fact: {
      text: "The state government announced pardons for 39 inmates from prisons in Yola, Jimeta, Ganye, Jada and Numan, and two death sentences were commuted to life. The pardons followed advice from a committee chaired by the Attorney-General, Silas Sanga.",
      sources: ["okay-2018-pardon"],
      verification: "reported",
    },
  },
  {
    date: "October 2018",
    year: 2018,
    era: "governor",
    title: "Wins APC ticket for re-election",
    fact: {
      text: "Won the APC governorship primary for the 2019 election.",
      sources: ["newsguru-2018-primary"],
      verification: "reported",
    },
  },
  {
    date: "March 2019",
    year: 2019,
    era: "governor",
    title: "Loses re-election bid",
    milestone: true,
    fact: {
      text: "The 9 March 2019 election was declared inconclusive. After the 28 March supplementary poll, Ahmadu Umaru Fintiri of the PDP was declared winner with 376,552 votes to his 336,386.",
      sources: ["ngf-fintiri", "premiumtimes-2019", "thisday-2019", "bbc-pidgin-2019"],
      verification: "verified",
    },
  },
  {
    date: "29 May 2019",
    year: 2019,
    era: "governor",
    title: "Hands over to Ahmadu Umaru Fintiri",
    fact: {
      text: "His term ended and Ahmadu Umaru Fintiri was sworn in as his successor.",
      sources: ["wiki"],
      verification: "verified",
    },
  },
  {
    date: "October 2019",
    year: 2019,
    era: "later",
    title: "Election tribunal upholds the result",
    fact: {
      text: "The Governorship Election Petition Tribunal in Yola, led by Justice S. Adebara, dismissed the APC's petition against Fintiri's election.",
      sources: ["sahara-2019-tribunal"],
      verification: "reported",
    },
  },
  {
    date: "21 January 2020",
    year: 2020,
    era: "later",
    title: "Supreme Court ends the 2019 dispute",
    fact: {
      text: "A seven-member Supreme Court panel unanimously dismissed his appeal, which alleged over-voting in 385 of 2,609 polling units, and affirmed Fintiri's election. He later conceded and congratulated Fintiri.",
      sources: ["nigerialawyer-2020-scourt", "dailytrust-scourt", "thecable-2019-concede"],
      verification: "verified",
    },
  },
  {
    date: "May 2022",
    year: 2022,
    era: "later",
    title: "Seeks APC governorship ticket",
    fact: {
      text: "Came third in the APC governorship primary with 103 votes. Aishatu Dahiru Binani won with 430 and Nuhu Ribadu had 288.",
      sources: ["thecable-2022-primary", "peopleandpower-2022-primary"],
      verification: "reported",
    },
  },
  {
    date: "January 2023",
    year: 2023,
    era: "later",
    title: "Leaves the APC",
    fact: {
      text: "Left the APC in January 2023, citing the party's failure since 2019 to reconcile aggrieved members. Channels Television reported that he moved to the PDP.",
      sources: ["premiumtimes-2023-quit", "channels-2023-pdp", "arise-2026-apc"],
      verification: "verified",
    },
  },
  {
    date: "November 2025",
    year: 2025,
    era: "later",
    title: "Joins the ADC coalition",
    fact: {
      text: "Reported among Adamawa opposition figures who joined the African Democratic Congress alongside Atiku Abubakar.",
      sources: ["saharareporters-2025-adc", "newtelegraph-adc"],
      verification: "reported",
    },
  },
  {
    date: "May 2026",
    year: 2026,
    era: "later",
    title: "Withdraws from the ADC governorship race",
    fact: {
      text: "Withdrew from the race for the ADC governorship ticket in Adamawa.",
      sources: ["dailytrust-2026-apc", "blueprint-2026-adc-exit"],
      verification: "verified",
    },
  },
  {
    date: "July 2026",
    year: 2026,
    era: "later",
    title: "Resigns from the ADC",
    fact: {
      text: "Resigned his ADC membership in a letter to his ward chairman in Mubi North, effective 15 July 2026.",
      sources: ["blueprint-2026-adc-exit"],
      verification: "reported",
    },
  },
  {
    date: "23 August 2026",
    year: 2026,
    era: "later",
    title: "Returns to the APC",
    milestone: true,
    fact: {
      text: "Re-registered as an APC member at his ward in Mubi ahead of the 2027 general elections.",
      sources: ["dailytrust-2026-apc", "arise-2026-apc"],
      verification: "verified",
    },
  },
];

/* ------------------------------------------------------------------ */
/* Offices and party affiliation                                       */
/* ------------------------------------------------------------------ */

export interface Office {
  title: string;
  institution: string;
  kind: "Elected" | "Appointed" | "Private sector";
  start: string;
  end: string;
  party?: string;
  predecessor?: string;
  successor?: string;
  notes: Fact[];
}

export const offices: Office[] = [
  {
    title: "Governor of Adamawa State",
    institution: "Government of Adamawa State",
    kind: "Elected",
    start: "29 May 2015",
    end: "29 May 2019",
    party: "All Progressives Congress (APC)",
    predecessor: "Bala James Ngilari",
    successor: "Ahmadu Umaru Fintiri",
    notes: [
      { text: "Elected on 11 April 2015 as the APC candidate.", sources: ["stears-2015", "wiki-2015-election"], verification: "reported" },
      { text: "Deputy Governor: Martins Babale.", sources: ["wiki"], verification: "reported" },
      { text: "Lost his re-election bid in March 2019 to Ahmadu Umaru Fintiri of the PDP.", sources: ["ngf-fintiri", "premiumtimes-2019", "thisday-2019"], verification: "verified" },
    ],
  },
  {
    title: "Senator, Adamawa North Senatorial District",
    institution: "Senate of the Federal Republic of Nigeria (7th National Assembly)",
    kind: "Elected",
    start: "6 June 2011",
    end: "29 May 2015",
    party: "Peoples Democratic Party (PDP)",
    predecessor: "Mohammed Mana",
    successor: "Binta Masi Garba",
    notes: [
      { text: "Elected on 9 April 2011 with 75,112 votes against 70,890 for Boni Haruna (ACN).", sources: ["punch-2011-result", "inec-2011", "wiki"], verification: "verified" },
    ],
  },
  {
    title: "Industrialist and businessman",
    institution: "Private sector, Mubi",
    kind: "Private sector",
    start: "Before 2011",
    end: "—",
    notes: [
      { text: "Reported to have set up three companies in Mubi employing about 400 people. The company names have not yet been documented.", sources: ["nd-2011-industrialist", "wiki"], verification: "reported" },
    ],
  },
];

export const partyHistory: { period: string; party: string; fact: Fact }[] = [
  { period: "2011", party: "Peoples Democratic Party (PDP)", fact: { text: "Elected to the Senate on the PDP platform.", sources: ["wiki", "pd-2011-primary"], verification: "verified" } },
  { period: "2014 – Jan 2023", party: "All Progressives Congress (APC)", fact: { text: "APC candidate in 2014, governor on the APC platform 2015–2019, and an APC aspirant in 2022.", sources: ["channels-2014-candidate", "ngf-fintiri", "thecable-2022-primary"], verification: "verified" } },
  { period: "Jan 2023", party: "Peoples Democratic Party (PDP)", fact: { text: "Reported to have left the APC for the PDP.", sources: ["channels-2023-pdp"], verification: "reported" } },
  { period: "Nov 2025 – Jul 2026", party: "African Democratic Congress (ADC)", fact: { text: "Joined the ADC coalition and later resigned his membership, effective 15 July 2026.", sources: ["saharareporters-2025-adc", "blueprint-2026-adc-exit"], verification: "reported" } },
  { period: "Aug 2026 –", party: "All Progressives Congress (APC)", fact: { text: "Re-registered with the APC in Mubi.", sources: ["dailytrust-2026-apc", "arise-2026-apc"], verification: "verified" } },
];

/* ------------------------------------------------------------------ */
/* Governorship record                                                 */
/* ------------------------------------------------------------------ */

export type Attribution =
  | "Initiated by the administration"
  | "Federal Government project"
  | "Partner-funded programme"
  | "Policy decision";

export type ImageKey = keyof typeof images;

export interface Initiative {
  slug: string;
  title: string;
  location?: string;
  date: string;
  agency?: string;
  attribution: Attribution;
  objective?: string;
  /** The main documented statement about the project. */
  implemented: Fact;
  /** Further documented details, each separately sourced. */
  more?: Fact[];
  status: string;
  /** A licensed photograph. If it shows the place rather than the project itself, `imageIsContext` is true. */
  image?: ImageKey;
  imageIsContext?: boolean;
}

export interface Sector {
  slug: string;
  title: string;
  summary: string;
  image?: ImageKey;
  initiatives: Initiative[];
}

export const sectors: Sector[] = [
  {
    slug: "infrastructure",
    title: "Infrastructure and Urban Development",
    image: "yolaWelcome",
    summary:
      "Roads came first. In December 2015 the governor said roads were the starting point because existing infrastructure was poor, and that schools, health and agriculture would follow. By 2018 he said the administration had built more than 200 roads across the state.",
    initiatives: [
      {
        slug: "township-roads",
        title: "Township road programme: Yola, Jimeta and Mubi",
        location: "Yola, Jimeta and Mubi",
        date: "From mid-2015",
        agency: "Ministry of Works",
        attribution: "Initiated by the administration",
        objective: "Rehabilitate and build township roads in the state's main urban centres.",
        implemented: {
          text: "Seven months into the term, the governor said 49 road networks covering 49.01 km had been awarded for about ₦8.2 billion, with Triacta, Teck and Rekord among the contractors. A NAN report from the same week gave 46 km and said some roads were finished and others were under way.",
          sources: ["blueprint-2015-roads", "newsexpress-2015-roads"],
          verification: "claim",
        },
        more: [
          { text: "In February 2016 the governor's team, led by the Secretary to the State Government, said 41 Yola–Jimeta roads would be ready for commissioning by June.", sources: ["blueprint-2016-openings"], verification: "claim" },
          { text: "A June 2017 review said over 150 roads had been built by then. In August 2018 the governor said the administration had built more than 200 roads across the state.", sources: ["blueprint-2017-review", "dt-2018-fg-road"], verification: "claim" },
        ],
        status: "Many roads were reported completed between 2015 and 2018. A complete list of the roads and their completion dates has not yet been documented.",
        image: "jimetaMarket",
        imageIsContext: true,
      },
      {
        slug: "yola-named-roads",
        title: "Named Yola roads: Karewa–Masakare, Gumti, Wuro Jabbe and the Yola bypass",
        location: "Yola North and Yola South",
        date: "2015–2016",
        agency: "Ministry of Works",
        attribution: "Initiated by the administration",
        objective: "Open up residential and commercial districts of the capital and link the Adamawa Sunshine transport park.",
        implemented: {
          text: "Roads marked for construction in 2015 included Karewa–Masakare road, Gumti road along Faro Bottling Company (linking the Adamawa Sunshine transport park and part of Jambutu), Wuro Jabbe road off Numan road, and the Yola bypass to the Upper Benue River Basin Development Authority quarters.",
          sources: ["dt-2015-estate-developer"],
          verification: "reported",
        },
        more: [
          { text: "A 2016 opinion article said the Gumti road was built by Royyco Construction, that Vice President Osinbajo flagged off the Wuro Jabbe road, and that the Yola bypass was more than 60 per cent complete.", sources: ["thewill-2016-burden"], verification: "claim" },
          { text: "In April 2017 Vice President Yemi Osinbajo inaugurated a road in Yola named after him.", sources: ["thenews-2017-osinbajo-road"], verification: "reported" },
        ],
        status: "Under construction in 2016. Some roads were inaugurated by 2017. The final status of each road is not yet documented.",
        image: "yolaEntrance",
        imageIsContext: true,
      },
      {
        slug: "mubi-roads",
        title: "Mubi township roads and street lighting",
        location: "Mubi North and Mubi South",
        date: "2015–2016",
        agency: "Ministry of Works",
        attribution: "Initiated by the administration",
        objective: "Rebuild the road network of Mubi, the commercial hub of northern Adamawa.",
        implemented: {
          text: "A 2016 opinion article listed Mubi roads it said had been built, including the One Primary School road, Water Board road, Zaria road, GRA roundabout road, Wuro-Bulude road, Kolere road, Wuro-Patuji road, Kwacha road, Tike road, Mubi–Digil road, Sabon Layi and link road, and Wuro Gude Brigade road.",
          sources: ["thewill-2016-touching"],
          verification: "claim",
        },
        more: [
          { text: "A YouTube video records the governor commissioning street lights in Mubi.", sources: ["youtube-mubi-lights"], verification: "reported" },
        ],
        status: "Reported completed. The list comes from a supporter's opinion article and has not been checked against ministry records.",
        image: "adsuMubi",
        imageIsContext: true,
      },
      {
        slug: "girei-pariya-wuro-boki",
        title: "Girei–Pariya–Wuro Boki road (27.5 km)",
        location: "Girei Local Government Area",
        date: "November 2016",
        agency: "Ministry of Works (Commissioner Lilian Stephen)",
        attribution: "Initiated by the administration",
        objective: "A 27.5 km rural road in Girei LGA, contracted in two phases.",
        implemented: {
          text: "Construction was started at a ceremony in Girei attended by former Vice President Atiku Abubakar.",
          sources: ["eagle-2016-girei"],
          verification: "reported",
        },
        status: "Construction started in November 2016. Completion is not yet documented.",
        image: "farmland",
        imageIsContext: true,
      },
      {
        slug: "street-lights-power",
        title: "Solar street lights and rural electrification",
        location: "Jimeta–Yola road, Mubi and several LGAs",
        date: "2015–2016",
        attribution: "Initiated by the administration",
        implemented: {
          text: "In December 2015 the governor said street lights on the Jimeta–Yola road were at an appreciable level of completion.",
          sources: ["newsexpress-2015-roads"],
          verification: "claim",
        },
        more: [
          { text: "A 2016 opinion article said more than 350 solar street lights had been installed, a 33kV line to about four LGAs rehabilitated, and more than six LGAs electrified.", sources: ["thewill-2016-touching"], verification: "claim" },
        ],
        status: "Jimeta–Yola lighting was reported nearly complete in December 2015. The other figures come from a supporter's opinion article.",
        image: "yolaWelcome",
        imageIsContext: true,
      },
      {
        slug: "yola-drainage",
        title: "Yola drainage works",
        location: "Yola",
        date: "2015",
        attribution: "Initiated by the administration",
        objective: "Reduce seasonal flooding in the capital.",
        implemented: {
          text: "The governor said a drainage contract had been awarded in Yola to curb flooding.",
          sources: ["newsexpress-2015-roads"],
          verification: "claim",
        },
        status: "Awarded in 2015. Completion is not yet documented.",
        image: "benueYola",
        imageIsContext: true,
      },
      {
        slug: "rural-access-ramp",
        title: "Rural Access and Mobility Project (RAMP) counterpart funding",
        location: "Rural roads statewide",
        date: "2015–2017",
        attribution: "Partner-funded programme",
        objective: "Rural roads co-financed with development partners to link farming communities to markets.",
        implemented: {
          text: "A June 2017 review said the administration had committed counterpart funding to RAMP rural roads estimated at 341 km.",
          sources: ["blueprint-2017-review"],
          verification: "claim",
        },
        status: "Counterpart funding committed. The partner programme continued into later administrations, so outcomes after 2019 are not credited here.",
        image: "farmland",
        imageIsContext: true,
      },
      {
        slug: "housing-estate",
        title: "Bindow Housing Estate (300 units)",
        location: "Along the Yola–Mubi road",
        date: "2015–2016",
        agency: "With KD Properties and Estate Ltd and the Federal Mortgage Bank of Nigeria",
        attribution: "Initiated by the administration",
        implemented: {
          text: "The Secretary to the State Government listed a 300-unit housing estate among the administration's first-year programmes.",
          sources: ["finnigeria-2015-ssg"],
          verification: "claim",
        },
        more: [
          { text: "A September 2016 opinion article said prototype houses had been built with KD Properties and Estate Ltd and the Federal Mortgage Bank of Nigeria, and that construction was ongoing.", sources: ["thewill-2016-burden", "thewill-2016-touching"], verification: "claim" },
        ],
        status: "Prototype houses were built and construction was ongoing in 2016. Completion is not yet documented.",
      },
      {
        slug: "public-buildings",
        title: "Old Government House, Yola International Hotel and Jimeta Stadium",
        location: "Yola and Jimeta",
        date: "2015–2016",
        attribution: "Initiated by the administration",
        implemented: {
          text: "The governor said a contract had been awarded for the full reconstruction of the old Government House.",
          sources: ["newsexpress-2015-roads"],
          verification: "claim",
        },
        more: [
          { text: "A 2016 opinion article said renovation of Yola International Hotel had resumed with its contract sum reviewed to ₦1.2 billion, that the Jimeta Stadium complex was 50 per cent complete with its contractor back on site, and that the Adamawa Sunshine terminus had been upgraded.", sources: ["thewill-2016-burden", "thewill-2016-touching"], verification: "claim" },
        ],
        status: "Under way in 2016. Completion is not yet documented.",
        image: "yolaGpo",
        imageIsContext: true,
      },
      {
        slug: "mayo-belwa-toungo",
        title: "Mayo-Belwa–Jada–Ganye–Toungo road (112 km)",
        location: "Southern Adamawa",
        date: "August 2018",
        agency: "Federal Ministry of Power, Works and Housing. Contractor: Triacta Nigeria Ltd",
        attribution: "Federal Government project",
        implemented: {
          text: "A federal rehabilitation project valued at ₦22.69 billion, inaugurated by the Minister of State for Works, with 36 months for delivery. The governor commended the Federal Government for it. It is listed here for context and is not a state project.",
          sources: ["dt-2018-fg-road", "econ-confidential-fg-road"],
          verification: "verified",
        },
        status: "Federal project started in 2018. Not credited to the state government.",
        image: "ganyePost",
        imageIsContext: true,
      },
    ],
  },
  {
    slug: "education",
    title: "Education",
    image: "mau",
    summary:
      "In June 2017 the State Executive Council declared a state of emergency in education and health. It approved renovation of dilapidated secondary schools, supply of learning materials and a revived teachers' college. Schools damaged by the insurgency were also earmarked for repair.",
    initiatives: [
      {
        slug: "education-emergency",
        title: "State of emergency in education and secondary school renovation",
        location: "GSS Hong; Government Science and Technical College, Mubi; Villanova Government Secondary School, Numan; GDSS Sarau; GDSS Demsa",
        date: "June 2017",
        agency: "Ministry of Education; State Executive Council",
        attribution: "Policy decision",
        objective: "Halt the decay of public secondary schools and restore conditions for learning.",
        implemented: {
          text: "The State Executive Council declared a state of emergency in education and approved contracts for the first phase of renovation at Government Secondary School Hong, Government Science and Technical College Mubi, Villanova Government Secondary School Numan, and Government Day Secondary Schools at Sarau and Demsa.",
          sources: ["vanguard-2017-emergency"],
          verification: "reported",
        },
        more: [
          { text: "₦487 million was approved for the first phase of secondary school renovation, including textbooks, desks, beds and other furniture.", sources: ["blueprint-2017-review", "nationaldaily-2017-emergency"], verification: "reported" },
        ],
        status: "Contracts approved in June 2017. Completion is not yet documented.",
        image: "adsuMubi",
        imageIsContext: true,
      },
      {
        slug: "learning-materials",
        title: "Distribution of learning materials to secondary schools",
        location: "Launched in Mubi. Beds for Technical School Mubi and GSS Hong",
        date: "September 2017",
        agency: "Ministry of Education (Commissioner Julius Kadala)",
        attribution: "Initiated by the administration",
        implemented: {
          text: "The governor flagged off distribution of textbooks, beds, laboratory chemicals and other materials in Mubi. The Commissioner for Education said the first phase covered 42 secondary schools, chemicals for 10 school laboratories, and over 2,000 beds and mattresses for Technical School Mubi and GSS Hong.",
          sources: ["newsverge-2017-materials"],
          verification: "reported",
        },
        status: "Distribution began in September 2017.",
      },
      {
        slug: "teachers-college",
        title: "Revival of the teachers' college and teacher salary arrears",
        location: "Statewide",
        date: "2017",
        attribution: "Policy decision",
        objective: "Address the shortage of qualified teachers at its root.",
        implemented: {
          text: "The governor said his administration had revived the state's teachers' college and would train and retrain teachers. He said it had inherited seven months of primary school teachers' salary arrears and had settled six of them.",
          sources: ["newsverge-2017-materials"],
          verification: "claim",
        },
        status: "Announced in September 2017.",
      },
      {
        slug: "insurgency-schools",
        title: "Repair of schools damaged by the insurgency",
        location: "Gombi LGA, including GSS Gombi and GSS Muchalla",
        date: "July 2016",
        attribution: "Initiated by the administration",
        implemented: {
          text: "Deputy Governor Martins Babale inspected schools in Gombi damaged by Boko Haram, including GSS Gombi, which had been used as an insurgent camp. He said the government would renovate all schools destroyed by insurgents. Classroom blocks at GSS Muchalla had already been renovated by the state.",
          sources: ["eagle-2016-schools"],
          verification: "reported",
        },
        status: "Inspection held in July 2016. Some blocks were renovated. The wider programme's completion is not yet documented.",
      },
      {
        slug: "idp-education",
        title: "Education for displaced children",
        location: "Statewide",
        date: "2015–2016",
        attribution: "Initiated by the administration",
        implemented: {
          text: "An undated article on the Nigeria Governors' Forum website said 71 teachers had been recruited for displaced communities, 677 displaced students moved into 43 Federal Unity Colleges, and container classrooms installed at many primary schools.",
          sources: ["ngf-health-education"],
          verification: "claim",
        },
        status: "Reported in an opinion article. Not independently confirmed.",
      },
    ],
  },
  {
    slug: "health",
    title: "Healthcare",
    image: "euMalakohi",
    summary:
      "The health system the administration inherited had been damaged by insurgency and years of under-investment. The Specialist Hospital in Yola, for example, had not had a major rehabilitation since 1958. The administration began rebuilding general hospitals and declared health a state of emergency alongside education in 2017.",
    initiatives: [
      {
        slug: "general-hospitals",
        title: "Rehabilitation of general hospitals: Yola, Numan, Ganye and Mubi",
        location: "Specialist Hospital Yola; Numan, Ganye and Mubi General Hospitals",
        date: "From late 2015",
        agency: "Ministry of Health; hospitals committee chaired by the Deputy Governor",
        attribution: "Initiated by the administration",
        implemented: {
          text: "In December 2015 the governor said a contract had been awarded to rehabilitate four general hospitals. The Secretary to the State Government wrote that contractors had been mobilised to hospitals in Yola, Numan, Ganye and Mubi.",
          sources: ["newsexpress-2015-roads", "finnigeria-2015-ssg"],
          verification: "claim",
        },
        more: [
          { text: "A committee chaired by Deputy Governor Martins Babale assessed the hospitals, and contracts were awarded for selected renovations.", sources: ["blueprint-2017-review"], verification: "claim" },
        ],
        status: "Contracts awarded. Completion of each hospital is not yet documented.",
      },
      {
        slug: "numan-general-hospital",
        title: "Reconstruction of Numan General Hospital",
        location: "Numan",
        date: "June 2017",
        agency: "State Executive Council",
        attribution: "Initiated by the administration",
        objective: "Rebuild the general hospital described as the most dilapidated in the state.",
        implemented: {
          text: "The State Executive Council approved construction of Numan General Hospital, alongside work at the Specialist Hospital Yola and the Mubi and Ganye General Hospitals.",
          sources: ["vanguard-2017-emergency"],
          verification: "reported",
        },
        more: [
          { text: "₦162 million was reported for the general renovation of Numan General Hospital, covering the maternity complex, wards, doctors' quarters and water supply.", sources: ["nationaldaily-2017-emergency"], verification: "unconfirmed" },
        ],
        status: "Approved in June 2017. Completion is not yet documented.",
        image: "numanConfluence",
        imageIsContext: true,
      },
      {
        slug: "specialist-hospital",
        title: "Specialist Hospital Yola: establishment law and upgrade plan",
        location: "Yola",
        date: "June 2018",
        agency: "Ministry of Health (Commissioner Dr Fatima Atiku Abubakar)",
        attribution: "Policy decision",
        implemented: {
          text: "The governor signed a law establishing the Specialist Hospital, Yola. The Commissioner for Health said the state planned a public–private partnership with the Bank of Industry to finance its upgrade, denied it would be privatised, and said work on a state health insurance scheme was under way.",
          sources: ["eagle-2018-specialist"],
          verification: "reported",
        },
        more: [
          { text: "In June 2018 the governor asked the Presidential Committee on the North East Initiative to extend its free medical outreach at the Specialist Hospital by two days. The outreach also ran in Mubi and Ganye.", sources: ["eagle-2018-outreach"], verification: "reported" },
        ],
        status: "Law signed and financing plan announced in 2018.",
      },
      {
        slug: "nutrition-cmam",
        title: "Community management of acute malnutrition, with UNICEF",
        location: "All 21 LGAs",
        date: "January 2017",
        agency: "Ministry of Health with UNICEF",
        attribution: "Partner-funded programme",
        implemented: {
          text: "The Commissioner for Health opened an expansion of community management of acute malnutrition (CMAM) to all 21 local government areas, run with UNICEF.",
          sources: ["thisday-2017-tractors"],
          verification: "reported",
        },
        status: "Expanded in January 2017.",
      },
      {
        slug: "health-workforce",
        title: "Health workforce and strategic plan",
        location: "Statewide",
        date: "2016",
        attribution: "Policy decision",
        implemented: {
          text: "An undated article on the Nigeria Governors' Forum website said the state approved employment of 149 nurses, adopted a 2016–2020 strategic health plan, and reached 97 per cent coverage in a national measles immunisation round.",
          sources: ["ngf-health-education"],
          verification: "claim",
        },
        status: "Reported in an opinion article. Not independently confirmed.",
      },
    ],
  },
  {
    slug: "agriculture",
    title: "Agriculture and Rural Development",
    image: "farmland",
    summary:
      "Insecurity had cost many farmers three planting seasons. The administration made mechanisation, fertiliser supply and dry-season farming central to recovery.",
    initiatives: [
      {
        slug: "tractors",
        title: "Tractor mechanisation programme",
        location: "All 21 LGAs",
        date: "January 2017 – December 2018",
        agency: "Ministry of Agriculture (Commissioner Ahmadu Waziri)",
        attribution: "Initiated by the administration",
        objective: "Give farmers access to mechanised land preparation.",
        implemented: {
          text: "In January 2017 the governor distributed 105 new tractors to all 21 local government areas, bought through the state–local government joint account.",
          sources: ["thisday-2017-tractors", "thisday-2017-food"],
          verification: "verified",
        },
        more: [
          { text: "At the 2018 Farmers' Day in Mayo-Belwa the governor said more than 153 tractors had been distributed in total.", sources: ["blueprint-2018-tractors"], verification: "claim" },
        ],
        status: "105 tractors distributed in January 2017. The 153 cumulative total is a government figure.",
        image: "farmland",
      },
      {
        slug: "fertiliser",
        title: "Fertiliser, seed and irrigation pump supply",
        location: "Statewide; dry-season farmers",
        date: "2015–2018",
        attribution: "Initiated by the administration",
        implemented: {
          text: "The government said it procured fertiliser, improved seedlings and water pumps for dry-season farming, and supplied rainy-season and dry-season fertiliser to farmers.",
          sources: ["thisday-2017-tractors", "blueprint-2018-tractors"],
          verification: "reported",
        },
        more: [
          { text: "The Secretary to the State Government described a ₦3.5 billion fertiliser procurement and supply programme in 2015, with one supplier engaged for ₦1 billion worth of fertiliser.", sources: ["finnigeria-2015-ssg"], verification: "claim" },
        ],
        status: "Supplied in several seasons. Quantities are government figures.",
      },
      {
        slug: "cultivation",
        title: "Expansion of cultivated land",
        location: "Statewide",
        date: "2015–2017",
        attribution: "Initiated by the administration",
        implemented: {
          text: "The governor said cultivated farmland rose from about 232,000 hectares in 2015 to 1.15 million hectares in 2017.",
          sources: ["thenews-2018-cultivation"],
          verification: "claim",
        },
        status: "Government figure. Not independently confirmed.",
      },
      {
        slug: "agro-processing",
        title: "Rice processing partnership and Songhai-model farm",
        location: "Mayo-Belwa (first rice factory, planned)",
        date: "2016–2018",
        attribution: "Initiated by the administration",
        implemented: {
          text: "The governor announced a partnership with Chinese investors on rice factories, the first planned for Mayo-Belwa, and a plan to lend to young people entering agriculture.",
          sources: ["blueprint-2018-tractors"],
          verification: "claim",
        },
        more: [
          { text: "In 2016 the administration described an agricultural project modelled on the Songhai integrated farm, with fish farming, citrus and canning.", sources: ["blueprint-2016-openings"], verification: "claim" },
        ],
        status: "Announced. Implementation is not yet documented.",
      },
    ],
  },
  {
    slug: "economy",
    title: "Economic Development, Youth and Enterprise",
    image: "jimetaMarket",
    summary:
      "The administration's flagship empowerment scheme gave soft loans to small and informal businesses across all wards. Alongside it, the government worked to raise state revenue and open federal credit lines.",
    initiatives: [
      {
        slug: "bsc-scheme",
        title: "Bindow Social Change (BSC) empowerment scheme",
        location: "All 226 wards",
        date: "2016",
        agency: "Office of the Secretary to the State Government",
        attribution: "Initiated by the administration",
        objective: "Soft loans for small and informal entrepreneurs, especially young people and women.",
        implemented: {
          text: "A ₦500 million pilot was described as targeting 15,000 beneficiaries across the state's 226 wards, with ₦30,000 each.",
          sources: ["blueprint-2016-openings", "blueprint-2017-review"],
          verification: "claim",
        },
        more: [
          { text: "The Secretary to the State Government said the credit package was expected to create 9,000 first-line jobs.", sources: ["finnigeria-2015-ssg"], verification: "claim" },
        ],
        status: "Pilot funded. Disbursement totals are not yet documented.",
      },
      {
        slug: "credit-access",
        title: "Access to CBN intervention funds",
        location: "Statewide",
        date: "2015",
        attribution: "Partner-funded programme",
        implemented: {
          text: "The Secretary to the State Government said the state was working to access ₦6 billion in Central Bank of Nigeria credit packages for cooperatives, small businesses and agriculture.",
          sources: ["finnigeria-2015-ssg"],
          verification: "claim",
        },
        status: "Announced in 2015.",
      },
      {
        slug: "igr",
        title: "Internally generated revenue drive",
        location: "Statewide",
        date: "May 2016",
        agency: "Ministry of Finance (Commissioner Mahmud Inusa)",
        attribution: "Policy decision",
        implemented: {
          text: "At the signing of the 2016 budget the governor set a target of ₦1.5 billion in internally generated revenue within six months, to address unpaid salaries.",
          sources: ["eagle-2016-igr"],
          verification: "reported",
        },
        status: "Target announced in 2016.",
      },
    ],
  },
  {
    slug: "security",
    title: "Security, Peace and Humanitarian Response",
    image: "euMalakohi",
    summary:
      "The term began amid the insurgency's humanitarian aftermath and recurring farmer–herder violence in the south of the state. The government responded with compensation, mediation committees and support for the federal North East Development Commission.",
    initiatives: [
      {
        slug: "kodomun-compensation",
        title: "Compensation after the Kodomun (Demsa) violence",
        location: "Kodomun, Demsa LGA",
        date: "January 2017",
        agency: "Office of the Deputy Governor; Ministry of Information",
        attribution: "Policy decision",
        implemented: {
          text: "After violence between herders and farmers, Deputy Governor Martins Babale presented ₦10 million and 775 bags of rice to affected communities on the governor's behalf. The Information Commissioner said ₦4.7 million was paid as compensation for killed cattle, and the governor directed security agencies to deploy more personnel.",
          sources: ["thisday-2017-tractors"],
          verification: "reported",
        },
        status: "Carried out in January 2017.",
      },
      {
        slug: "peace-committees",
        title: "Farmer–herder mediation committees",
        location: "Numan, Demsa and Lamurde",
        date: "2016–2018",
        attribution: "Policy decision",
        implemented: {
          text: "A March 2018 ThisDay editorial noted that the governor had set up committees to mediate the conflict, but said suspicion had kept full peace from being achieved.",
          sources: ["thisday-2018-editorial"],
          verification: "reported",
        },
        status: "Committees were set up. The conflict continued into 2018.",
      },
      {
        slug: "nedc",
        title: "Support for the North East Development Commission",
        location: "North-East Nigeria",
        date: "October 2017",
        attribution: "Policy decision",
        implemented: {
          text: "The governor commended President Buhari for signing the North East Development Commission bill and asked the National Assembly for a generous budget for the commission.",
          sources: ["prnigeria-2017-nedc"],
          verification: "reported",
        },
        status: "Statement issued in October 2017.",
      },
      {
        slug: "humanitarian-partners",
        title: "Hosting international humanitarian partners",
        location: "Yola",
        date: "June 2015",
        attribution: "Partner-funded programme",
        implemented: {
          text: "Three weeks into the term, Deputy Governor Martins Babale received the EU Commissioner for Humanitarian Aid, Christos Stylianides, in Yola. During the visit the Commissioner met displaced families at Malakohi camp.",
          sources: ["eu-flickr-2015"],
          verification: "verified",
        },
        status: "Visit held 18 June 2015.",
        image: "euDeputyGovernor",
      },
    ],
  },
  {
    slug: "governance",
    title: "Governance and Public Finance",
    image: "lamidoPalace",
    summary:
      "The first months of the term were shaped by falling federal allocations. The governor described overdrafts to pay salaries, a cut in his own pay and the clearing of arrears owed to workers. Executive Council meetings were also held outside the capital.",
    initiatives: [
      {
        slug: "salary-arrears",
        title: "Clearing of salary and allowance arrears",
        date: "2015–2017",
        attribution: "Initiated by the administration",
        implemented: {
          text: "The governor said about ₦7.2 billion had been paid to clear arrears of salaries, leave grants and loans, some outstanding for up to three years.",
          sources: ["blueprint-2015-roads"],
          verification: "claim",
        },
        more: [
          { text: "A 2017 review said the administration inherited ₦2.4 billion in unpaid salaries and paid workers within three weeks of taking office.", sources: ["blueprint-2017-review"], verification: "claim" },
        ],
        status: "Government figures. Not independently confirmed.",
      },
      {
        slug: "pay-cut",
        title: "Pay cut for political office holders",
        date: "2015",
        attribution: "Policy decision",
        implemented: {
          text: "The governor said he had cut his own salary by about 50 per cent and reduced the pay of the deputy governor and principal officers.",
          sources: ["newsexpress-2015-roads"],
          verification: "claim",
        },
        status: "Announced in 2015.",
      },
      {
        slug: "budget-2016",
        title: "2016 budget: ₦120 billion, split evenly between capital and recurrent",
        date: "May 2016",
        agency: "Ministry of Finance",
        attribution: "Policy decision",
        implemented: {
          text: "The governor signed a ₦120 billion 2016 appropriation, his first budget in office. The Finance Commissioner said it was 50 per cent capital and 50 per cent recurrent.",
          sources: ["eagle-2016-igr"],
          verification: "reported",
        },
        status: "Signed in May 2016.",
      },
      {
        slug: "exco-outside-yola",
        title: "Executive Council meetings outside the capital",
        location: "Numan, Mubi and Fufore",
        date: "2016–2017",
        attribution: "Policy decision",
        implemented: {
          text: "State Executive Council meetings were moved to Numan, Mubi and Fufore to bring government closer to the three senatorial zones.",
          sources: ["thisday-2017-tractors"],
          verification: "reported",
        },
        status: "Held in 2016–2017.",
      },
      {
        slug: "prerogative-of-mercy",
        title: "Prerogative of mercy",
        date: "January 2018",
        agency: "Ministry of Justice (Attorney-General Silas Sanga)",
        attribution: "Policy decision",
        implemented: {
          text: "39 inmates were pardoned on the advice of the Prerogative of Mercy committee, and two death sentences were commuted to life imprisonment.",
          sources: ["okay-2018-pardon"],
          verification: "reported",
        },
        status: "Carried out in January 2018.",
      },
    ],
  },
];

/** Every project, flattened, with its sector, for the projects index. */
export const allProjects = sectors.flatMap((s) => s.initiatives.map((i) => ({ ...i, sector: s })));

/* ------------------------------------------------------------------ */
/* Education                                                           */
/* ------------------------------------------------------------------ */

export const education: { kind: "Academic" | "Professional" | "Honorary"; title: string; fact: Fact }[] = [
  {
    kind: "Academic",
    title: "Diploma in Business Administration (reported)",
    fact: {
      text: "A 2018 Vanguard report says he is believed to hold a diploma in business administration from a foreign institution. The report does not name the institution or a date.",
      sources: ["vanguard-2018-qualification"],
      verification: "unconfirmed",
    },
  },
  {
    kind: "Honorary",
    title: "Honorary doctorate, Crescent University (reported)",
    fact: {
      text: "An unnamed government official quoted in the same 2018 report said he holds an honorary doctorate from Crescent University. The award has not been confirmed with the university.",
      sources: ["vanguard-2018-qualification"],
      verification: "unconfirmed",
    },
  },
];

export const educationContext: Fact = {
  text: "During the 2018 APC primary, a rival aspirant publicly questioned his educational qualifications. A senior government official quoted in the same report dismissed the challenge, and he went on to win the primary. This is recorded here for completeness. It is an allegation made during a contest, not a finding.",
  sources: ["vanguard-2018-qualification", "newsguru-2018-primary"],
  verification: "reported",
};

/* ------------------------------------------------------------------ */
/* Statements, recognition, media                                      */
/* ------------------------------------------------------------------ */

export const statements: { date: string; context: string; text: string; direct: boolean; source: string }[] = [
  {
    date: "April 2015",
    context: "As governor-elect, to supporters in Yola",
    text: "I will be a governor for all irrespective of tribe, religion or party affiliation.",
    direct: true,
    source: "dt-2015-governor-elect",
  },
  {
    date: "April 2015",
    context: "As governor-elect, to supporters in Yola",
    text: "Let's join hands and work together for the peace and progress of the state.",
    direct: true,
    source: "dt-2015-governor-elect",
  },
  {
    date: "December 2015",
    context: "Briefing after an inspection of road projects",
    text: "Roads came first because the state's infrastructure was in poor condition, and schools, health and agriculture would follow.",
    direct: false,
    source: "blueprint-2015-roads",
  },
  {
    date: "November 2016",
    context: "Start of work on the Girei–Pariya–Wuro Boki road",
    text: "He would serve all citizens regardless of socio-political differences, and he urged politicians not to distract the administration.",
    direct: false,
    source: "eagle-2016-girei",
  },
  {
    date: "August 2026",
    context: "On re-registering with the APC in Mubi",
    text: "I am back to the APC not to divide, but to contribute.",
    direct: true,
    source: "dailytrust-2026-apc",
  },
];

export const thirdPartyAssessments: { who: string; date: string; text: string; source: string }[] = [
  {
    who: "Atiku Abubakar, former Vice President of Nigeria",
    date: "November 2016",
    text: "Described Bindow as the best-performing governor Adamawa had produced, speaking at a road ceremony in Girei.",
    source: "eagle-2016-girei",
  },
];

/** Awards: none verified yet. Add entries only with an awarding body, date and source. */
export const awards: { title: string; body: string; date: string; kind: "Official award" | "Honorary degree" | "Traditional title" | "Recognition"; fact: Fact }[] = [
  {
    title: "Sardauna of Mubi",
    body: "Mubi Emirate",
    date: "Held by 2010",
    kind: "Traditional title",
    fact: { text: "A 2010 report identified him as the Sardauna of Mubi Emirate, a traditional title. The date of conferment has not yet been documented.", sources: ["tide-2010-sardauna"], verification: "reported" },
  },
];

export interface Photo {
  src: string;
  alt: string;
  caption: string;
  category: string;
  year?: number;
  location?: string;
  credit: string;
  licence: string;
  sourceUrl?: string;
  noDerivatives?: boolean;
}

export const galleryCategories = [
  "Governorship Activities",
  "Security and Humanitarian Context",
  "Agriculture and Land",
  "Education Landscape",
  "Mubi",
  "Adamawa: Places",
  "National Assembly",
  "Personal Portraits",
  "Early Life and Historical",
  "Education and Professional Life",
  "Political Journey",
  "Campaigns and Elections",
  "Swearing-in and Official Ceremonies",
  "Infrastructure and Development Projects",
  "Public Engagements",
  "Community Visits",
  "Meetings with Leaders and Stakeholders",
  "Legislative and National Activities",
  "Awards and Recognition",
  "Recent Public Appearances",
];

/** Licensed photographs only. Add each image to /public/gallery with its credit and licence. */
export const photos: Photo[] = allImages.map((i) => ({
  src: i.src, alt: i.alt, caption: i.caption, category: i.category, year: i.year, location: i.location,
  credit: i.creator, licence: i.licence, sourceUrl: i.sourceUrl, noDerivatives: i.noDerivatives,
}));

export const videos: { youtubeId: string; title: string; outlet: string; date: string }[] = [
  { youtubeId: "IgCQEsGiVVc", title: "Governor Bindow commissions street lights in Mubi", outlet: "YouTube", date: "Undated" },
];

/** Official contact channels. Leave empty until confirmed by his office. */
export const contact: { label: string; value: string; href: string }[] = [];

/* ------------------------------------------------------------------ */
/* Research gaps — what is still needed from the office or archives    */
/* ------------------------------------------------------------------ */

export const openQuestions: string[] = [
  "Date and place of birth: confirm 15 April 1965 or 16 June 1963, and the town.",
  "Family background and upbringing, limited to what the family is willing to publish.",
  "Primary, secondary and tertiary schools, with years and qualifications and documents where possible.",
  "Confirm the honorary doctorate (awarding institution and year) and the business diploma (institution and year).",
  "Names and sectors of the companies founded in Mubi, with dates.",
  "Senate committee memberships, 2011–2015, from the National Assembly records.",
  "Bills and motions sponsored or co-sponsored in the 7th Senate.",
  "Ministry records for the governorship projects: final completion status, cost and commissioning dates.",
  "Education, health, youth, women and economic programmes from 2015 to 2019, with official names.",
  "National, state and traditional honours, with the awarding body and date.",
  "Licensed photographs from his office, with photographer, date, place and caption.",
  "Speech texts or recordings: the 2015 inaugural address and other major addresses.",
  "Official contact channels and verified social-media accounts.",
];
