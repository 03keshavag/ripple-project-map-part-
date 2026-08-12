/**
 * Ripple — Mock data for the Kindness Map & Discovery views.
 *
 * Every item matches the REAL API contract of GET /api/map/acts EXACTLY:
 * {
 *   "id": string,
 *   "title": string,
 *   "category": string,
 *   "summary": string,
 *   "latitudeApprox": number,
 *   "longitudeApprox": number
 * }
 * The file exports ~100 acts (10 hand-written + 90 generated) scattered
 * across Bengaluru.
 *
 * PRIVACY / SAFETY RULE:
 * Coordinates are deliberately coarse — city / neighbourhood level. We never
 * store or display exact locations, and no precise pin is ever produced.
 */

/**
 * Approximate neighbourhood-level anchor points spread across Bengaluru.
 * These are intentionally imprecise (never exact addresses) and are only
 * used to scatter the mock acts around the demo city.
 */
const NEIGHBORHOODS = [
  { name: 'MG Road', lat: 12.9756, lng: 77.6051 },
  { name: 'Indiranagar', lat: 12.9719, lng: 77.6412 },
  { name: 'Koramangala', lat: 12.9352, lng: 77.6245 },
  { name: 'Jayanagar', lat: 12.9307, lng: 77.5839 },
  { name: 'Basavanagudi', lat: 12.9416, lng: 77.5767 },
  { name: 'Malleshwaram', lat: 13.0052, lng: 77.5666 },
  { name: 'Rajajinagar', lat: 12.9918, lng: 77.5522 },
  { name: 'Whitefield', lat: 12.9698, lng: 77.75 },
  { name: 'Electronic City', lat: 12.8452, lng: 77.6602 },
  { name: 'Hebbal', lat: 13.0358, lng: 77.597 },
  { name: 'Yelahanka', lat: 13.1002, lng: 77.5963 },
  { name: 'HSR Layout', lat: 12.9118, lng: 77.641 },
  { name: 'Marathahalli', lat: 12.9558, lng: 77.699 },
  { name: 'Banashankari', lat: 12.9252, lng: 77.543 },
  { name: 'Vijayanagar', lat: 12.9724, lng: 77.5206 },
  { name: 'JP Nagar', lat: 12.9055, lng: 77.585 },
  { name: 'BTM Layout', lat: 12.9166, lng: 77.6101 },
  { name: 'Bellandur', lat: 12.9305, lng: 77.6782 },
  { name: 'Frazer Town', lat: 12.9939, lng: 77.613 },
  { name: 'Sadashivanagar', lat: 13.0183, lng: 77.58 },
  { name: 'Ulsoor', lat: 12.9805, lng: 77.6218 },
  { name: 'Richmond Town', lat: 12.9622, lng: 77.602 },
  { name: 'Shivajinagar', lat: 12.985, lng: 77.606 },
  { name: 'K R Puram', lat: 13.01, lng: 77.697 },
  { name: 'Domlur', lat: 12.9611, lng: 77.6389 },
  { name: 'Chamrajpet', lat: 12.955, lng: 77.5639 },
];

/**
 * A hand-written set of realistic seed acts. These keep the demo feeling
 * grounded, and the remaining acts are generated from the templates below.
 */
const SEED_ACTS = [
  {
    id: 'act-001',
    title: 'Helping Hands at the Signal',
    category: 'Community Service',
    summary:
      'A student helped an elderly citizen safely cross a busy road during morning traffic rush.',
    latitudeApprox: 12.9716,
    longitudeApprox: 77.5946,
  },
  {
    id: 'act-002',
    title: 'Weekend Library for Kids',
    category: 'Education',
    summary:
      'Opened a small free library in the neighbourhood park every Saturday for underprivileged children.',
    latitudeApprox: 12.985,
    longitudeApprox: 77.596,
  },
  {
    id: 'act-003',
    title: 'Lake Clean-up Drive',
    category: 'Environment',
    summary:
      'Volunteers collected over 40 bags of plastic waste from the lake shore over a single weekend.',
    latitudeApprox: 12.95,
    longitudeApprox: 77.58,
  },
  {
    id: 'act-004',
    title: 'Street Dog Feeding Circle',
    category: 'Animal Welfare',
    summary:
      'A group feeds and waters stray dogs in the same park corner every evening, rain or shine.',
    latitudeApprox: 12.99,
    longitudeApprox: 77.61,
  },
  {
    id: 'act-005',
    title: 'Community Blood Donation Camp',
    category: 'Health',
    summary:
      'Organised a blood donation camp at the community hall, collecting 65 units for the city blood bank.',
    latitudeApprox: 12.96,
    longitudeApprox: 77.57,
  },
  {
    id: 'act-006',
    title: 'Sign Language Workshop',
    category: 'Inclusion',
    summary:
      'Ran a free basic Indian Sign Language workshop so local shops can welcome deaf customers better.',
    latitudeApprox: 12.975,
    longitudeApprox: 77.605,
  },
  {
    id: 'act-007',
    title: 'Sapling Plantation Along the Street',
    category: 'Environment',
    summary:
      'Planted 120 native saplings along the avenue and set up a volunteer watering rota.',
    latitudeApprox: 12.94,
    longitudeApprox: 77.62,
  },
  {
    id: 'act-008',
    title: 'Maths Tutoring for Exam Season',
    category: 'Education',
    summary:
      'Final-year students tutor 20 school kids for their board exams every weekday evening.',
    latitudeApprox: 12.98,
    longitudeApprox: 77.585,
  },
  {
    id: 'act-009',
    title: 'Meal Distribution on Rainy Nights',
    category: 'Community Service',
    summary:
      'Distributed hot meals and raincoats to daily-wage workers during the heavy monsoon week.',
    latitudeApprox: 12.955,
    longitudeApprox: 77.6,
  },
  {
    id: 'act-010',
    title: 'Wheelchair Donation Drive',
    category: 'Health',
    summary:
      'Collected and delivered 12 gently-used wheelchairs to families identified by the local clinic.',
    latitudeApprox: 12.97,
    longitudeApprox: 77.575,
  },
];

/**
 * Realistic per-category act templates. `summary(name)` injects the local
 * neighbourhood so every generated story reads as happening somewhere in
 * Bengaluru. Cycling these keeps the ~90 generated acts varied but cheap to
 * maintain, and swapping to the live backend later is still a one-file change.
 */
const TEMPLATES = {
  'Community Service': [
    {
      title: 'Helping Hands at the Crossing',
      summary: (p) =>
        `Volunteers in ${p} helped elderly citizens and children cross busy roads safely during peak hours.`,
    },
    {
      title: 'Neighbourhood Meal Run',
      summary: (p) =>
        `A community kitchen in ${p} distributed hot meals to daily-wage workers and shelter residents.`,
    },
    {
      title: 'Skill-Sharing Drive',
      summary: (p) =>
        `Residents in ${p} ran free skill-sharing sessions on tailoring, repair work and budgeting for job seekers.`,
    },
    {
      title: 'Festival Grocery Kits',
      summary: (p) =>
        `Youth volunteers in ${p} assembled and delivered grocery kits to families in need before festival week.`,
    },
    {
      title: 'Clothes Donation Camp',
      summary: (p) =>
        `A donation camp in ${p} collected, sorted and redistributed warm clothing and school uniforms.`,
    },
    {
      title: 'Elders’ Errand Brigade',
      summary: (p) =>
        `Students in ${p} ran errands, bought medicines and accompanied senior citizens to their clinic visits.`,
    },
  ],
  Education: [
    {
      title: 'Weekend Reading Corner',
      summary: (p) =>
        `A small free library in ${p} opens every weekend so children can borrow books at no cost.`,
    },
    {
      title: 'Board-Exam Tutoring',
      summary: (p) =>
        `College mentors in ${p} tutor school students for board exams every weekday evening.`,
    },
    {
      title: 'Hands-on STEM Workshop',
      summary: (p) =>
        `Volunteers in ${p} ran science and robotics workshops for government school students.`,
    },
    {
      title: 'English Conversation Circle',
      summary: (p) =>
        `A conversational English circle in ${p} helps job seekers practise speaking with confidence.`,
    },
    {
      title: 'Digital Literacy Class',
      summary: (p) =>
        `Free computer and smartphone basics classes in ${p} help seniors go online safely.`,
    },
    {
      title: 'Back-to-School Drive',
      summary: (p) =>
        `A stationery and books drive in ${p} gathered supplies for students who needed them.`,
    },
  ],

  Environment: [
    {
      title: 'Lake Shore Clean-up',
      summary: (p) =>
        `Volunteers in ${p} collected plastic waste from the lakeshore over a single weekend.`,
    },
    {
      title: 'Native Sapling Plantation',
      summary: (p) =>
        `Community members in ${p} planted native saplings and set up a watering rota.`,
    },
    {
      title: 'Rooftop Composting Demo',
      summary: (p) =>
        `A composting demo in ${p} teaches residents to turn kitchen waste into soil.`,
    },
    {
      title: 'Plastic-Free Market Push',
      summary: (p) =>
        `Makers in ${p} distributed cloth bags and urged vendors to phase out single-use plastic.`,
    },
    {
      title: 'E-waste Weekend Drop',
      summary: (p) =>
        `Neighbours in ${p} organised a weekend drop point for e-waste and recyclables.`,
    },
    {
      title: 'Rainwater Harvest Fix',
      summary: (p) =>
        `A team in ${p} repaired the community hall’s rainwater harvesting system before the monsoon.`,
    },
  ],
  'Animal Welfare': [
    {
      title: 'Evening Feeding Circle',
      summary: (p) =>
        `A group in ${p} feeds and waters stray dogs at the same spot every evening.`,
    },
    {
      title: 'Stray Cat Shelter',
      summary: (p) =>
        `Residents in ${p} built and maintain a small weatherproof shelter for stray cats.`,
    },
    {
      title: 'Vaccination Camp for Strays',
      summary: (p) =>
        `A free vaccination and health camp for strays was held in ${p} park.`,
    },
    {
      title: 'Bird Water Bowls',
      summary: (p) =>
        `Volunteers in ${p} installed clay water bowls on rooftops during the hot months.`,
    },
    {
      title: 'Adoption & Rehoming Day',
      summary: (p) =>
        `An adoption drive in ${p} helped rehome rescued puppies and kittens into caring families.`,
    },
    {
      title: 'Blankets for Cold Nights',
      summary: (p) =>
        `A collection in ${p} supplied old blankets so strays stay warm through winter nights.`,
    },
  ],
  Health: [
    {
      title: 'Blood Donation Camp',
      summary: (p) =>
        `A blood donation camp in ${p} collected units for the city blood bank.`,
    },
    {
      title: 'Free Health Check-up',
      summary: (p) =>
        `Volunteer nurses in ${p} offered free blood-pressure and sugar check-ups to senior residents.`,
    },
    {
      title: 'Mental Wellness Circle',
      summary: (p) =>
        `A peer support circle in ${p} provides a safe space to talk about stress and wellbeing.`,
    },
    {
      title: 'Hygiene Kit Distribution',
      summary: (p) =>
        `A drive in ${p} distributed soap, masks and sanitary kits to underserved communities.`,
    },
    {
      title: 'Morning Walk Group',
      summary: (p) =>
        `Neighbours in ${p} started a daily morning walk group to encourage movement and community.`,
    },
    {
      title: 'First-Aid & CPR Training',
      summary: (p) =>
        `Free hands-on first-aid and CPR training was delivered at the community hall in ${p}.`,
    },
  ],

  Inclusion: [
    {
      title: 'Sign Language Workshop',
      summary: (p) =>
        `A free basic sign language workshop in ${p} helps shops welcome deaf customers.`,
    },
    {
      title: 'Wheelchair Route Map',
      summary: (p) =>
        `Students in ${p} mapped wheelchair-accessible routes and shared them with residents.`,
    },
    {
      title: 'Inclusive Sports Afternoon',
      summary: (p) =>
        `A sports afternoon in ${p} paired participants in adaptive games for everyone to join.`,
    },
    {
      title: 'Sensory-Friendly Movie Night',
      summary: (p) =>
        `A calm, sensory-friendly screening was held at a community hall in ${p}.`,
    },
    {
      title: 'Inclusive Hiring Panel',
      summary: (p) =>
        `A panel in ${p} connected employers with inclusive-hiring practices and diverse talent.`,
    },
    {
      title: 'Braille & Large-Print Corner',
      summary: (p) =>
        `A corner library in ${p} added braille and large-print titles for low-vision readers.`,
    },
  ],
};

/**
 * How many generated acts per category. Together with the 10 seed acts this
 * totals exactly 100. (15 + 15 + 14 + 16 + 14 + 16 = 90 generated.)
 */
const GENERATED_COUNTS = {
  'Community Service': 15,
  Education: 15,
  Environment: 14,
  'Animal Welfare': 16,
  Health: 14,
  Inclusion: 16,
};

/**
 * Builds the 90 generated acts. Neighbourhoods are cycled so acts are spread
 * across the whole city, and a tiny deterministic jitter prevents markers in
 * the same area from stacking on top of each other.
 */
function buildGeneratedActs() {
  const acts = [];
  let n = 0; // global index across all generated acts (0-based)
  for (const category of Object.keys(GENERATED_COUNTS)) {
    const templates = TEMPLATES[category];
    for (let i = 0; i < GENERATED_COUNTS[category]; i++) {
      const template = templates[i % templates.length];
      const nb = NEIGHBORHOODS[n % NEIGHBORHOODS.length];
      // Deterministic, neighbourhood-scale jitter so pins stay approximate
      // and slightly spread out.
      const dLat = (((n * 37) % 9) - 4) * 0.0005;
      const dLng = (((n * 61) % 9) - 4) * 0.0006;
      acts.push({
        id: `act-${String(n + 11).padStart(3, '0')}`, // start after the seeds
        title: template.title,
        category,
        summary: template.summary(nb.name),
        latitudeApprox: Number((nb.lat + dLat).toFixed(4)),
        longitudeApprox: Number((nb.lng + dLng).toFixed(4)),
      });
      n += 1;
    }
  }
  return acts;
}

/** ~100 kindness acts scattered across Bengaluru. */
export const MOCK_ACTS = [...SEED_ACTS, ...buildGeneratedActs()];