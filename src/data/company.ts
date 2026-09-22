import {
  CompanyInfo,
  ServiceItem,
  ProcessStep,
  PreparationBenefit,
  ProjectItem,
  FAQItem
} from '../types';

export const COMPANY: CompanyInfo = {
  name: 'Beutler AG',
  category: 'Plastering & Painting',
  tagline: 'Precision Wall Finishes & Architectural Surface Craftsmanship',
  description:
    'Beutler AG is a professional plastering and painting contractor based in Heimenschwand, Switzerland. We specialize in interior plaster finishes, facade coatings, and thorough surface preparation for homes and buildings across the region.',
  address: {
    street: 'Obere Heimenegg 14',
    postalCode: '3615',
    locality: 'Heimenschwand',
    canton: 'Bern',
    country: 'Switzerland',
    fullFormatted: 'Obere Heimenegg 14, 3615 Heimenschwand, Switzerland',
  },
  phone: {
    display: '033 453 10 36',
    raw: '0334531036',
    cleanTel: 'tel:0334531036',
  },
  serviceRegion: 'Heimenschwand, Thun, Steffisburg, Oberdiessbach, Konolfingen, and the broader Bernese Oberland & Canton of Bern region',
  operatingHours: {
    workdays: 'Monday – Friday: 07:00 – 17:30',
    weekend: 'Saturday & Sunday: Closed',
  },
};

export const IMAGES = {
  // High quality, vetted Unsplash images of authentic plastering, painting, and architectural surface work
  heroTexture: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?q=80&w=1600&auto=format&fit=crop', // Plaster texture & tactile wall
  plasterTrowel: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1200&auto=format&fit=crop', // Fine surface application
  interiorFinish: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop', // Architectural interior wall finishes
  facadeRenovation: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop', // Exterior facade texture and structure
  woodAndTrim: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop', // Crisp architectural interior & trim painting
  surfaceDetail: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=1200&auto=format&fit=crop', // Subtle pigment texture
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'interior-plastering',
    category: 'plastering',
    title: 'Interior Plastering & Skim Coating',
    shortDesc: 'Smooth lime and gypsum plaster applications creating seamless, durable indoor wall and ceiling planes.',
    fullDesc:
      'We apply high-grade interior plasters designed to create perfectly flat, durable, and breathable surfaces. From traditional multi-layer lime and gypsum systems to modern thin-coat skim plasters, we ensure every corner, ceiling transition, and reveal is aligned with architectural precision.',
    materialCharacteristics: ['Gypsum and mineral lime bases', 'Vapor-permeable & moisture balancing', 'High surface hardness', 'Non-reflective matte light dispersion'],
    recommendedApplications: ['Living areas and open floor plans', 'Bedrooms and moisture-controlled bathrooms', 'Renovated masonry walls', 'New interior partitions'],
    features: [
      'Jointless transitions along ceiling lines and window reveals',
      'Controlled multi-coat drying cycles for crack prevention',
      'Dust-minimized sanding and substrate consolidation',
      'Substrate preparation suitable for immediate prime and paint application'
    ],
    imageUrl: IMAGES.plasterTrowel,
  },
  {
    id: 'exterior-rendering',
    category: 'plastering',
    title: 'Exterior Facade Rendering & Stucco',
    shortDesc: 'Weather-resilient mineral renders engineered to protect building envelopes against alpine temperature swings.',
    fullDesc:
      'In the Swiss climate, external wall surfaces endure intense freeze-thaw cycles, driving precipitation, and solar exposure. Our facade rendering service utilizes breathable mineral and silicone-enhanced mortars that shed moisture while allowing moisture vapor to escape from the structure.',
    materialCharacteristics: ['Weatherproof & frost-resistant', 'Micro-porous water vapor transmission', 'Impact-durable mesh reinforcement', 'Elastic crack-bridging capability'],
    recommendedApplications: ['Single-family homes and chalets', 'Residential apartment buildings', 'Historic facade refurbishments', 'Exterior insulation finishing systems'],
    features: [
      'Alkali-resistant mesh embedding at high-stress structural joints',
      'Fine float (Abrieb) and rubbed mineral texture options',
      'Protection against micro-organism growth and atmospheric staining',
      'Structural integration with existing window sills, flashings, and plinths'
    ],
    imageUrl: IMAGES.facadeRenovation,
  },
  {
    id: 'surface-restoration',
    category: 'preparation',
    title: 'Substrate Repair & Crack Remediation',
    shortDesc: 'Systematic diagnosis and reinforcement of settlement cracks, flaking layers, and degraded substrates.',
    fullDesc:
      'Applying paint or fresh plaster over unstable foundations inevitably leads to premature failure. We inspect wall substrates for moisture content, hollow voids, hairline settlement fissures, and powdery lime residues before mechanically stabilizing them with fibreglass fleece and bonding primers.',
    materialCharacteristics: ['High-tensile reinforcement fleeces', 'Deep penetrating stabilizing primers', 'Elastic polymer-modified patch mortars', 'Alkaline moisture barriers'],
    recommendedApplications: ['Period properties undergoing renovation', 'Walls with recurrent settlement fissures', 'Previously layered or peeling paint systems', 'Plaster damaged by historic moisture ingress'],
    features: [
      'Sounding and removal of loose, unbonded material down to solid substrate',
      'V-notch opening and elastic filling of structural fissures',
      'Deep consolidation primers that lock chalking old plaster',
      'Seamless blending into adjacent unaltered wall areas'
    ],
    imageUrl: IMAGES.surfaceDetail,
  },
  {
    id: 'interior-painting',
    category: 'painting',
    title: 'Interior Painting & Wall Finishing',
    shortDesc: 'High-opacity, low-emission mineral and dispersion coatings applied with clean line discipline.',
    fullDesc:
      'A great paint finish is quiet and uniform. We select low-VOC, solvent-free coatings that provide rich light dispersion, excellent washability, and long-lasting chromatic stability. Every room is carefully masked, and surfaces receive dedicated primer coats to ensure uniform sheen and tone across varying light angles.',
    materialCharacteristics: ['Solvent-free & low odor', 'Class 1 wet scrub resistance options', 'Rich matte to satin sheen levels', 'Deep opacity without roller stippling'],
    recommendedApplications: ['Private residences and apartments', 'Offices and daylight-intensive rooms', 'High-traffic hallways and stairwells', 'Feature accent walls'],
    features: [
      'Sharp razor-edge cutting around skirting, frames, and ceiling borders',
      'Two-coat full coverage over dedicated uniform primers',
      'Odor-free formulations safe for immediate re-occupancy',
      'Careful site protection: plastic sheeting, felt fleece, and sealed thresholds'
    ],
    imageUrl: IMAGES.interiorFinish,
  },
  {
    id: 'facade-painting',
    category: 'painting',
    title: 'Exterior Facade Painting & Protective Coats',
    shortDesc: 'Silicate and silicone resin facade paints that chemically bond with mineral masonry for enduring protection.',
    fullDesc:
      'Unlike standard acrylic films that can trap moisture and bubble under direct sunlight, our facade painting systems utilize mineral silicate and silicone resin binders. These coatings form an inseparable bond with the underlying render, preventing peeling and maintaining vibrant, clean exterior walls for years.',
    materialCharacteristics: ['Silicification bonding with masonry', 'High UV reflection & lightfast pigments', 'Self-cleaning lotus-effect water run-off', 'Resistant to wind-driven rain'],
    recommendedApplications: ['Rendered facade elevations', 'Plinth and splash zones', 'Concrete structural elements', 'Exposed gables and exterior masonry'],
    features: [
      'High-pressure substrate washing and spore neutralizing treatment prior to coating',
      'Breathable coatings compliant with regional building physics standards',
      'Even color saturation across rough, floated, or smooth plaster profiles',
      'Safe scaffold coordination and building envelope protection'
    ],
    imageUrl: IMAGES.facadeRenovation,
  },
  {
    id: 'woodwork-trim',
    category: 'painting',
    title: 'Woodwork, Trim & Architectural Element Coating',
    shortDesc: 'Precision lacquer and stain applications for interior doors, window frames, baseboards, and timber eaves.',
    fullDesc:
      'Wood is an organic, shifting material requiring flexible coatings that move with thermal and humidity fluctuations. We prepare timber elements through meticulous sanding, knot sealing, and multi-tier enamel or glaze coatings that preserve grain definition while guarding against wear and UV degradation.',
    materialCharacteristics: ['Microporous flexibility to accommodate timber movement', 'Scratch-resistant enamel finishes', 'Non-yellowing polyurethane and acrylic formulas', 'Satin, semi-gloss, or natural oil feels'],
    recommendedApplications: ['Interior doors, casings, and architraves', 'Window reveals and timber sills', 'Timber ceiling beams and cladding', 'Exterior roof eaves and fascia boards'],
    features: [
      'Dustless orbital sanding between intermediate coats',
      'Knot isolation primers to prevent resin bleeding',
      'Uniform brush and spray finishes without sag or lap marks',
      'Protective masking of surrounding plaster and glass'
    ],
    imageUrl: IMAGES.woodAndTrim,
  },
];

export const PREPARATION_BENEFITS: PreparationBenefit[] = [
  {
    id: 'adhesion',
    title: 'Substrate Adhesion & Binding',
    principle: 'Surface Tension & Penetration',
    explanation:
      'New paint or plaster cannot bond securely to chalking, oily, or unprimed drywall. Thorough sanding, dust removal, and stabilizing primers ensure coats bond into the substrate rather than merely resting on top.',
    impact: 'Prevents peeling, bubbling, and sheet delamination over time.',
  },
  {
    id: 'moisture',
    title: 'Vapor Permeability & Moisture Management',
    principle: 'Building Physics & Breathability',
    explanation:
      'Walls must allow internal humidity to diffuse naturally. By inspecting substrate moisture and utilizing mineral-compatible binders, we prevent trapped moisture that causes efflorescence and surface rot.',
    impact: 'Protects the building fabric against mould and internal plaster degradation.',
  },
  {
    id: 'light',
    title: 'Optical Uniformity Under Glancing Light',
    principle: 'Light Reflection & Flatness',
    explanation:
      'Natural daylight streaming through windows reveals even minor dips, seams, or roller lap marks. Meticulous skim-coating and consistent primer absorption ensure even sheen and zero patchy flashing.',
    impact: 'Clean, elegant visual plane in all seasons and illumination angles.',
  },
  {
    id: 'longevity',
    title: 'Extended Renovation Intervals',
    principle: 'Durability Over Fast Patching',
    explanation:
      'Investing proper time into substrate repair, crack bridging, and multi-tier coats extends the service life of an interior or exterior finish by several years compared to rapid surface cover-ups.',
    impact: 'Reduces long-term maintenance frequency and ongoing disruption.',
  },
];

export const CRAFTSMANSHIP_PROCESS: ProcessStep[] = [
  {
    stepNumber: '01',
    title: 'On-Site Inspection & Substrate Assessment',
    focus: 'Direct evaluation in Heimenschwand and surrounding areas',
    description:
      'Every project begins with a careful physical examination of the surfaces. We check moisture levels, existing paint compatibility, hairline cracking, and ambient light conditions to determine the appropriate system.',
    details: [
      'Substrate stability and adhesion testing',
      'Measurement of wall and ceiling surface areas',
      'Discussion of finish expectations (matte, fine texture, sheen)',
      'Clear evaluation of necessary preparation steps'
    ],
  },
  {
    stepNumber: '02',
    title: 'Protection, Masking & Dust Containment',
    focus: 'Respecting living spaces and furnishings',
    description:
      'Before a single bag of plaster is mixed or paint can opened, we protect the premises. Floors are lined with heavy felt fleece, fixtures are masked with precision edge tapes, and thresholds are sealed.',
    details: [
      'Heavy-duty floor fleece taped at borders',
      'Low-tack precision tape on sensitive woodwork',
      'Outlet, switch, and lighting protection',
      'Containment of sanding dust within the work zone'
    ],
  },
  {
    stepNumber: '03',
    title: 'Substrate Repair & Foundation Priming',
    focus: 'The invisible groundwork of long-lasting finishes',
    description:
      'We patch voids, bridge fissures with reinforcement fleece, stabilize powdery substrates with deep primers, and apply dedicated bonding agents to ensure an uninterrupted, stable foundation.',
    details: [
      'Crack opening, sealing, and fleece bridging',
      'Deep penetrating mineral primers applied',
      'Skim coating and flattening of imperfections',
      'Targeted curing time allowed before subsequent layers'
    ],
  },
  {
    stepNumber: '04',
    title: 'Master Finish Application',
    focus: 'Even coats, crisp margins, and uniform texture',
    description:
      'With the foundation prepared, we apply the final plaster coats or mineral paint finishes in uniform passes. Razor-sharp boundary lines are cut along ceilings, door frames, and transitions.',
    details: [
      'Controlled application avoiding lap marks',
      'Consistent texture across floated and smooth surfaces',
      'High-opacity, two-coat standard for all painted walls',
      'Strict adherence to manufacturer drying intervals'
    ],
  },
  {
    stepNumber: '05',
    title: 'Final Quality Inspection & Spotless Site Handover',
    focus: 'Detailed review under natural and artificial light',
    description:
      'We inspect every wall plane under critical glancing light, remove all masking materials, clean work areas thoroughly, and conduct a structured walkthrough before concluding the job.',
    details: [
      'Glancing light review along all critical planes',
      'Careful tape peeling with zero paint bleed',
      'Full removal of protective fleece and packaging',
      'Spotless handover ready for immediate living or occupancy'
    ],
  },
];

export const WORK_SHOWCASE: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'Residential Interior Wall Smoothing & Mineral Coating',
    category: 'interior',
    locationType: 'Private Residence, Heimenschwand Area',
    scopeSummary: 'Complete leveling of dated textured walls followed by two coats of breathable mineral paint.',
    materialsUsed: ['Gypsum skim plaster', 'Mineral silicate interior paint', 'Fibreglass fleece reinforcement'],
    challenge: 'Existing walls featured an irregular, heavy stucco texture that caught shadows unevenly under modern lighting.',
    execution: 'Applied an anchoring primer, two full passes of skim plaster, machine-assisted dustless sanding, and a warm mineral finish.',
    imageUrl: IMAGES.interiorFinish,
  },
  {
    id: 'proj-2',
    title: 'Weather-Exposed Exterior Facade Refurbishment',
    category: 'facade',
    locationType: 'Single-Family Home, Bernese Prealps',
    scopeSummary: 'Removal of weathered render, structural crack bridging, and application of water-repellent silicone resin paint.',
    materialsUsed: ['Silicone resin facade render', 'Alkali-resistant mesh', 'Biocide-free hydrophobic topcoat'],
    challenge: 'Severe wind-driven rain exposure on the west elevation caused hairline fissures and micro-cracking.',
    execution: 'Opened fissures, embedded reinforcement mesh across high-stress zones, and applied a breathable, self-cleaning protective coating.',
    imageUrl: IMAGES.facadeRenovation,
  },
  {
    id: 'proj-3',
    title: 'Period Timber Trim & Ceiling Beams Restoration',
    category: 'painting',
    locationType: 'Traditional Property, Canton of Bern',
    scopeSummary: 'Meticulous sanding, knot sealing, and satin enamel finishing of interior woodwork.',
    materialsUsed: ['Knot-sealing shellac primer', 'Satin acrylic-polyurethane enamel', 'Flexible timber caulk'],
    challenge: 'Historic woodwork had minor checking and resin bleeding through old, yellowed coatings.',
    execution: 'Scraped flaking areas, sealed knots to block tannins, and applied two hand-brushed enamel coats with fine inter-coat sanding.',
    imageUrl: IMAGES.woodAndTrim,
  },
  {
    id: 'proj-4',
    title: 'High-Ceiling Living Space Plastering',
    category: 'plastering',
    locationType: 'Modern Home, Bernese Region',
    scopeSummary: 'Seamless joint treatment and Q4 ultra-smooth plaster application across open-concept double-height ceilings.',
    materialsUsed: ['Lightweight gypsum plaster', 'Paper joint tape', 'Fine smoothing compound'],
    challenge: 'Continuous light from floor-to-ceiling windows demanded an uncompromisingly uniform surface free of seam shadows.',
    execution: 'Executed complete surface skimming across all joined drywall sheets, hand-burnished for a velvety matte finish under natural light.',
    imageUrl: IMAGES.heroTexture,
  },
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'preparation',
    question: 'Why is substrate preparation considered the most important part of any plastering or painting project?',
    answer:
      'Any paint or plaster is only as stable as the surface beneath it. If old paint is flaking, chalky, or unprimed, fresh material will inevitably blister or crack. Proper cleaning, stabilization, and priming ensure complete chemical and mechanical adhesion, ensuring your finish lasts for years without premature deterioration.',
  },
  {
    id: 'faq-2',
    category: 'logistics',
    question: 'How do you protect our floors, furniture, and living spaces during the work?',
    answer:
      'We treat every property with the utmost care. Before starting, we cover all flooring with heavy-duty protective fleece, seal adjacent doorways if required to isolate dust, mask skirting boards and switches with specialty low-tack tapes, and use vacuum-assisted sanding tools to keep airborne particles to an absolute minimum.',
  },
  {
    id: 'faq-3',
    category: 'plastering',
    question: 'What is the difference between a standard drywall joint finish and full skim plastering?',
    answer:
      'Standard drywall jointing covers only the seams between boards, leaving the paper surface exposed. Full skim plastering (often referred to as a Q4 finish) applies an unbroken layer of fine plaster over the entire wall. This creates a uniform texture and absorption rate, eliminating visible seams under glancing daylight or grazing wall fixtures.',
  },
  {
    id: 'faq-4',
    category: 'painting',
    question: 'What types of paint do you recommend for interior living spaces?',
    answer:
      'We prioritize low-emission, solvent-free (low-VOC) paints that are safe for indoor air quality and virtually odorless. For living areas, mineral or high-grade dispersion paints provide a calm matte appearance with outstanding color depth. For kitchens, hallways, or bathrooms, we select moisture-resistant and scrub-resistant formulations that can be cleaned easily.',
  },
  {
    id: 'faq-5',
    category: 'general',
    question: 'How does the consultation and quote process work with Beutler AG?',
    answer:
      'You can call us directly at 033 453 10 36 or complete our online enquiry form. We arrange a site visit in Heimenschwand or the surrounding region to inspect the surfaces in person, evaluate substrate conditions, discuss your preferences, and provide a clear, itemized project estimate outlining the necessary steps.',
  },
  {
    id: 'faq-6',
    category: 'painting',
    question: 'When is the best time of year to carry out exterior facade painting or rendering?',
    answer:
      'In Switzerland, exterior facade work is best scheduled between spring and autumn when ambient temperatures remain consistently above 5°C to 10°C, and there is no risk of frost or persistent rain during the application and curing phases. We monitor weather conditions closely to ensure optimal binder bonding.',
  },
  {
    id: 'faq-7',
    category: 'general',
    question: 'Do you work for private homeowners as well as property managers and architects?',
    answer:
      'Yes. We handle both private residential projects (single-room refreshes, full house renovations, facade updates) as well as commercial properties, rental turnovers for property managers, and scheduled trade work for local builders and architects in the region.',
  },
];
