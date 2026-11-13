/**
 * Openly licensed photographs used on the site. Each entry records creator,
 * licence and the original page so the credit can be shown wherever it appears.
 * BY-SA / BY licences require attribution; BY-ND images must not be cropped or edited
 * (object-fit "contain" is used for them).
 */
export interface SiteImage {
  src: string;
  alt: string;
  caption: string;
  category: string;
  year?: number;
  location?: string;
  creator: string;
  licence: string;
  licenceUrl: string;
  sourceUrl: string;
  noDerivatives?: boolean;
}

const BYSA4 = ["CC BY-SA 4.0", "https://creativecommons.org/licenses/by-sa/4.0/"] as const;
const BYSA2 = ["CC BY-SA 2.0", "https://creativecommons.org/licenses/by-sa/2.0/"] as const;
const BYND2 = ["CC BY-ND 2.0", "https://creativecommons.org/licenses/by-nd/2.0/"] as const;
const CC0 = ["CC0 1.0", "https://creativecommons.org/publicdomain/zero/1.0/"] as const;

function img(src: string, o: Omit<SiteImage, "src" | "licence" | "licenceUrl">, l: readonly [string, string]): SiteImage {
  return { src: `/gallery/${src}`, licence: l[0], licenceUrl: l[1], ...o };
}

export const images = {
  euDeputyGovernor: img("eu-deputy-governor.jpg", {
    alt: "Deputy Governor Martins Babale shakes hands with EU Commissioner Christos Stylianides in an office in Yola",
    caption: "Deputy Governor Martins Babale receives EU Humanitarian Aid Commissioner Christos Stylianides in Yola, three weeks into the new administration.",
    category: "Governorship Activities", year: 2015, location: "Yola",
    creator: "EU Civil Protection and Humanitarian Aid (© European Union)", sourceUrl: "https://www.flickr.com/photos/69583224@N05/18699664464", noDerivatives: true,
  }, BYND2),
  euMalakohi: img("eu-malakohi-camp.jpg", {
    alt: "EU Commissioner Christos Stylianides speaks with displaced families at Malakohi camp, Adamawa State",
    caption: "Displaced families at Malakohi camp, Adamawa State, during the EU Commissioner's visit in June 2015. The new administration took office amid the insurgency's humanitarian aftermath.",
    category: "Security and Humanitarian Context", year: 2015, location: "Malakohi, Adamawa State",
    creator: "EU Civil Protection and Humanitarian Aid (© European Union)", sourceUrl: "https://www.flickr.com/photos/69583224@N05/19316193952", noDerivatives: true,
  }, BYND2),
  yolaWelcome: img("yola-welcome.jpg", {
    alt: "The 'Welcome to Yola' arch over a dual carriageway entering the state capital",
    caption: "The gateway arch into Yola, capital of Adamawa State.",
    category: "Adamawa: Places", location: "Yola", creator: "Mr. Snatch", sourceUrl: "https://commons.wikimedia.org/w/index.php?curid=176043698",
  }, CC0),
  yolaGpo: img("yola-gpo.jpg", {
    alt: "The General Post Office building in Yola",
    caption: "General Post Office, Yola.",
    category: "Adamawa: Places", location: "Yola", creator: "Teshaisha", sourceUrl: "https://commons.wikimedia.org/w/index.php?curid=120441905",
  }, BYSA4),
  benueYola: img("benue-yola.jpg", {
    alt: "The River Benue at Yola",
    caption: "The River Benue at Yola.",
    category: "Adamawa: Places", location: "Yola", creator: "Nwuanyi", sourceUrl: "https://commons.wikimedia.org/w/index.php?curid=23153825",
  }, BYSA2),
  yolaEntrance: img("yola-entrance.jpg", {
    alt: "Main entrance into Yola town",
    caption: "Main entrance to Yola.",
    category: "Adamawa: Places", location: "Yola", creator: "Nwuanyi", sourceUrl: "https://commons.wikimedia.org/w/index.php?curid=113489670",
  }, BYSA2),
  yolaBridge: img("yola-bridge.jpg", {
    alt: "A bridge on the approach to Yola",
    caption: "Bridge on the approach to Yola.",
    category: "Adamawa: Places", location: "Yola", creator: "Nwuanyi", sourceUrl: "https://www.flickr.com/photos/45474390@N07/4177814440",
  }, BYSA2),
  lamidoPalace: img("lamido-palace.jpg", {
    alt: "The palace of the Lamido of Adamawa in Yola",
    caption: "Palace of the Lamido of Adamawa, Yola.",
    category: "Adamawa: Places", location: "Yola", creator: "Mr. Snatch", sourceUrl: "https://commons.wikimedia.org/w/index.php?curid=176074936",
  }, CC0),
  jimetaMarket: img("jimeta-market.jpg", {
    alt: "Jimeta Modern Market",
    caption: "Jimeta Modern Market, the commercial heart of Yola North.",
    category: "Adamawa: Places", location: "Jimeta", creator: "Kundushima Ben Isaac", sourceUrl: "https://commons.wikimedia.org/w/index.php?curid=116556608",
  }, BYSA4),
  numanConfluence: img("numan-confluence.jpg", {
    alt: "The confluence of rivers at Numan, Adamawa State",
    caption: "The river confluence at Numan.",
    category: "Adamawa: Places", location: "Numan", creator: "Saadah 4469", sourceUrl: "https://commons.wikimedia.org/w/index.php?curid=60550471",
  }, BYSA4),
  adsuMubi: img("adsu-mubi.jpg", {
    alt: "Adamawa State University campus in Mubi",
    caption: "Adamawa State University, Mubi.",
    category: "Mubi", location: "Mubi", creator: "Mamman AA", sourceUrl: "https://commons.wikimedia.org/w/index.php?curid=130399373",
  }, BYSA4),
  mubiMap: img("mubi-north-map.svg", {
    alt: "Map of Adamawa State with Mubi North Local Government Area highlighted",
    caption: "Mubi North Local Government Area within Adamawa State.",
    category: "Mubi", location: "Mubi North", creator: "BlueSahelian", sourceUrl: "https://commons.wikimedia.org/w/index.php?curid=149089959",
  }, CC0),
  farmland: img("adamawa-farmland.jpg", {
    alt: "Farmland with baobab trees and a distant tractor in Adamawa State",
    caption: "Farmland in Adamawa State. Agriculture is the main livelihood of most residents.",
    category: "Agriculture and Land", location: "Adamawa State", creator: "Ifeatu Nnaobi", sourceUrl: "https://commons.wikimedia.org/w/index.php?curid=135002485",
  }, BYSA4),
  ganyePost: img("ganye-post-office.jpg", {
    alt: "Ganye Post Office in Ganye town",
    caption: "Ganye town, southern Adamawa.",
    category: "Adamawa: Places", location: "Ganye", creator: "Sabiu001", sourceUrl: "https://commons.wikimedia.org/w/index.php?curid=120073330",
  }, BYSA4),
  mau: img("mau-yola.jpg", {
    alt: "Gate of Modibbo Adama University, Yola",
    caption: "Modibbo Adama University, Yola.",
    category: "Education Landscape", location: "Yola", creator: "Mlamido", sourceUrl: "https://commons.wikimedia.org/w/index.php?curid=176302795",
  }, CC0),
  senate: img("senate-building.jpg", {
    alt: "The Senate wing (Red Chamber) of the National Assembly, Abuja",
    caption: "The Senate (Red Chamber) of the National Assembly, Abuja, where he sat from 2011 to 2015.",
    category: "National Assembly", location: "Abuja", creator: "Kabusa16", sourceUrl: "https://commons.wikimedia.org/w/index.php?curid=69226718",
  }, BYSA4),
  nassMace: img("nass-mace.jpg", {
    alt: "The National Assembly building in Abuja with the mace sculpture",
    caption: "The National Assembly complex, Abuja.",
    category: "National Assembly", location: "Abuja", creator: "Kabusa16", sourceUrl: "https://commons.wikimedia.org/w/index.php?curid=69227810",
  }, BYSA4),
} satisfies Record<string, SiteImage>;

export const allImages: SiteImage[] = Object.values(images);
