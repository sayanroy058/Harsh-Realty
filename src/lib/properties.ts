export type Property = {
  slug: string;
  name: string;
  location: string;
  landArea: string;
  towers: string;
  floors: string;
  units: string;
  bhk: string;
  area: string;
  price: string;
  pricing: string[];
  status: "ongoing" | "completed";
  statusLabel: string;
  rera?: string;
  tag?: string;
  unitsSold?: string;
  typology?: string;
  builtupArea?: string;
  developers?: {
    name: string;
    about: string;
  }[];
  highlights?: string[];
  overview?: {
    heading: string;
    paragraphs: string[];
  };
  brochures?: {
    label: string;
    file: string;
  }[];
};

export const properties: Property[] = [
  {
    slug: "npr-visaaya",
    name: "NPR Visaaya",
    location: "Phoolbagan, EM Bypass",
    landArea: "73 Katha",
    towers: "1",
    floors: "B+G+19",
    units: "45",
    bhk: "4 BHK, 5 BHK, Duplex, Triplex",
    area: "3,100–4,100 sq ft",
    price: "₹4.68 Cr onwards",
    pricing: [
      "4 BHK · 3,100–3,600 sq ft · ₹4.68 Cr onwards",
      "5 BHK · 4,100 sq ft · ₹5.95 Cr onwards",
    ],
    status: "ongoing",
    statusLabel: "Under Construction · December 2028",
    rera: "WBRERA/P/KOL/2024/001349",
    tag: "Featured",
    unitsSold: "20%",
    typology: "Apartment",
    builtupArea: "3,100 - 4,100 sq ft",
    developers: [
      {
        name: "Sriji Group",
        about:
          "Sriji Group is a Kolkata based diversified conglomerate established in the year 1973. Real Estate development, Iron & Steel and Bearings are the core business of the group. Since 2006 they have successfully constructed and delivered several landmark residential projects across the city.",
      },
      {
        name: "NPR Developers Pvt Limited",
        about:
          "NPR Developers Pvt. Ltd. is a Non-govt company, incorporated on 13 May 1997. It's a private unlisted company and is a classified company limited by shares. NPR Developers Pvt. Ltd specializes in creating residential spaces with a focus on quality and design.",
      },
    ],
    highlights: [
      "Prime Location: Located on Narkeldanga Main Rd, Kadapara, Phool Bagan, ensuring accessibility to key areas in Kolkata.",
      "Sophisticated Design: Limited collection of 45 meticulously crafted units in a G+19 block, providing exclusivity and privacy.",
      "Spacious Living: 4 BHK and 5 BHK apartments with super built-up areas ranging from 3,100 to 4,100 square feet.",
      "Luxury Amenities: Thoughtfully designed layouts maximise natural light and comfort, with expansive balconies offering serene views.",
    ],
    overview: {
      heading: "Welcome to Visaaya: A Luxurious Residential Haven in North Kolkata",
      paragraphs: [
        "Welcome to Visaaya, an exquisite residential project nestled in the heart of North Kolkata's vibrant landscape. Strategically located on Narkeldanga Main Rd, Kadapara, Phool Bagan, Visaaya epitomizes luxury living with its meticulously crafted homes and prime location. Developed by the esteemed NPR, and Sriji Group, Visaaya promises a harmonious blend of modern comforts and traditional values, making it an ideal abode for discerning homeowners.",
        "Conveniently located near EM Bypass, Visaaya offers unmatched connectivity to the rest of the city. Whether you're commuting to work, exploring the city's attractions, or simply running errands, everything you need is just a stone's throw away. With seamless access to major transportation hubs, educational institutions, healthcare facilities, and entertainment options, Visaaya ensures that you're always well-connected to the pulse of the city.",
        "As a newly launched project, Visaaya embodies sophistication and elegance, with 20% of its units already snapped up by eager homeowners. Spanning across 73 katha of sprawling land, this architectural marvel boasts a super built-up area ranging from 3,100 to 4,100 square feet. With only one block standing tall at G+19 floors, Visaaya offers a limited collection of 45 meticulously designed units, ensuring exclusivity and privacy for its residents. The price range for this project starts from ₹4.68 Cr onwards, with possession set for December 2028.",
        "With prices starting from ₹4.68 Cr onwards, Visaaya presents an unparalleled opportunity to experience luxury living at its finest. Welcome home to Visaaya—where luxury meets tranquility, and every moment is filled with bliss.",
      ],
    },
    brochures: [
      { label: "NPR Visaaya Brochure", file: "NPR Visaaya Brochure.pdf" },
    ],
  },
  {
    slug: "primarc-aadvika",
    name: "Primarc Aadvika",
    location: "Foreshore Road, Howrah",
    landArea: "3 Acres",
    towers: "3",
    floors: "G+24, G+25",
    units: "182",
    bhk: "3 BHK, 3.5 BHK, 4 BHK, 4.5 BHK, 5 BHK",
    area: "1,539–3,346 sq ft",
    price: "₹2.70 Cr onwards",
    pricing: [
      "3 BHK Simplex · 1,539–1,660 sq ft · ₹2.70 Cr onwards",
      "3.5 BHK Simplex · 1,775–1,794 sq ft · ₹3 Cr onwards",
      "4 BHK Simplex · 1,895–1,908 sq ft · ₹3.25 Cr onwards",
      "4.5 BHK Simplex · 2,257–2,324 sq ft · ₹4.05 Cr onwards",
      "5 BHK Simplex · 2,545–2,577 sq ft · ₹4.45 Cr onwards",
      "3.5 BHK Duplex · 3,155 sq ft · ₹5.75 Cr onwards",
      "4 BHK Duplex · 3,346 sq ft · ₹6.10 Cr onwards",
    ],
    status: "ongoing",
    statusLabel: "Under Construction · December 2030",
    rera: "WBRERA/P/HOW/2025/003467",
    tag: "Featured",
    unitsSold: "20%",
    typology: "Apartment",
    developers: [
      {
        name: "Primarc",
        about:
          "Primarc is a leading Real Estate Developer in Kolkata. The goal of Primarc is to build high-end, design-driven apartments in upscale areas. By designing vibrant community spaces that bring people together, Primarc has built a legacy of trust and quality across the city.",
      },
    ],
    overview: {
      heading:
        "Primarc Aadvika – Riverside Luxury Residences on Foreshore Road, Howrah",
      paragraphs: [
        "Primarc Aadvika by Primarc Group is an exceptional new launch located on Foreshore Road, near Avani Riverside Mall, Howrah, offering premium 3 to 5 BHK riverside apartments. Designed for those who value space, serenity, and sophistication, this project brings together modern architecture, abundant sunlight, and open river views—creating a new benchmark for luxury riverside living in Kolkata.",
        "Situated along the scenic Hooghly River, Foreshore Road is one of Howrah's most sought-after addresses, known for its perfect blend of connectivity and natural charm. The area enjoys smooth access to Howrah Bridge, Vidyasagar Setu, and Howrah Station, connecting residents effortlessly to all parts of Kolkata. With reputed schools, hospitals, shopping destinations, and entertainment hubs nearby, Foreshore Road offers everything you need for a balanced urban lifestyle.",
        "Primarc Aadvika stands out as the ideal choice for homebuyers seeking a refined riverside experience. Spread across 3 acres, with G+24 and G+25 towers, the project offers spacious residences ranging from 1,539 to 3,345 sq. ft., thoughtfully crafted to provide comfort, elegance, and exclusivity. Its premium location near Avani Riverside Mall ensures convenience while offering tranquil views of the river—an unmatched combination in Howrah's real estate market.",
        "Among the many developments in the area, Primarc Aadvika distinguishes itself through its blend of scenic beauty, modern design, and the trust of the Primarc Group—a name known for quality and innovation in Kolkata's real estate. Every element, from architecture to amenities, is designed to elevate your lifestyle and redefine what it means to live by the river.",
        "If you're looking for a luxurious, well-connected, and scenic home in Howrah, Primarc Aadvika is the address you should explore. Experience riverside living at its finest—where nature, luxury, and connectivity meet. Visit the site or download the brochure today to discover exclusive offers and floor plans, and make Primarc Aadvika your next prestigious address in Kolkata.",
      ],
    },
    brochures: [
      { label: "Aadvika Digital Book", file: "Aadvika Book_Digital.pdf" },
      { label: "Aadvika Plans Book", file: "Aadvika Plans Book.pdf" },
    ],
  },
  {
    slug: "mirania-evara",
    name: "Mirania Evara",
    location: "Metro Cash & Carry, EM Bypass",
    landArea: "52 Katha",
    towers: "1",
    floors: "B+G+18",
    units: "86",
    bhk: "3 BHK, 4 BHK",
    area: "1,500–2,500 sq ft",
    price: "₹1.92 Cr onwards",
    pricing: [
      "3 BHK · 1,500–1,600 sq ft · ₹1.92 Cr onwards",
      "4 BHK · 2,200–2,500 sq ft · ₹3 Cr onwards",
    ],
    status: "ongoing",
    statusLabel: "Under Construction · June 2030",
    rera: "WBRERA/P/KOL/2025/002422",
    unitsSold: "New Launch",
    typology: "Apartment",
    developers: [
      {
        name: "Mirania Group",
        about:
          "Mirania Group is a trusted Real Estate Developer known for delivering well-designed, community-focused residences across Kolkata's high-demand corridors, combining quality construction with thoughtful amenities.",
      },
    ],
    overview: {
      heading: "Mirania Evara – Premium Residences on EM Bypass, Kolkata",
      paragraphs: [
        "Mirania Evara is a premium residential development located opposite Metro Cash & Carry on EM Bypass, offering spacious 3 and 4 BHK apartments designed for modern city living. The project combines contemporary architecture with functional layouts, giving residents comfort, natural light, and open views across every floor.",
        "EM Bypass remains one of Kolkata's most well-connected corridors, linking residents to the airport, IT corridors, hospitals, malls, and educational institutions within minutes. Mirania Evara's location on this stretch ensures effortless connectivity while keeping the neighbourhood's everyday conveniences close at hand.",
        "Rising to B+G+18 floors on a 52 Katha plot, Mirania Evara houses 86 thoughtfully planned units ranging from 1,500 to 2,500 sq. ft. Every residence is designed to balance space efficiency with a premium living experience, making it a strong choice for families seeking a well-connected EM Bypass address.",
        "With its blend of location, design, and trusted development standards, Mirania Evara offers a compelling opportunity for homebuyers and investors alike looking to establish themselves along one of Kolkata's most sought-after arterial roads.",
      ],
    },
    brochures: [
      { label: "Mirania Evara Booklet", file: "Mirania Evara Booklet.pdf" },
    ],
  },
  {
    slug: "merlin-niyasa",
    name: "Merlin Niyasa",
    location: "Ruby, EM Bypass",
    landArea: "3.23 Acres",
    towers: "2",
    floors: "G+28",
    units: "152",
    bhk: "3.5 BHK, 4 BHK, 4.5 BHK",
    area: "1,996–3,299 sq ft",
    price: "₹3.90 Cr onwards",
    pricing: [
      "3.5 BHK + 3T · 1,996 sq ft · ₹3.90 Cr onwards",
      "4 BHK + 4T · 2,841 sq ft · ₹4.25 Cr onwards",
      "4 BHK + Study + 4T · 3,299 sq ft · ₹4.90 Cr onwards",
    ],
    status: "ongoing",
    statusLabel: "Under Construction · June 2030",
    rera: "WBRERA/P/KOL/2024/002243",
    unitsSold: "20%",
    typology: "Apartment",
    builtupArea: "1,996 - 3,300 sq ft",
    developers: [
      {
        name: "Merlin Group",
        about:
          "Emanated in 1984, Merlin Group is now one of the pre-eminent conglomerates in the real estate industry in India, having a plenitude of prestigious residential and commercial complexes, office buildings, and townships to its credit.",
      },
    ],
    highlights: [
      "Prime Location: Situated in Ruby, with easy access to EM Bypass.",
      "Exceptional Connectivity: Quick access to Salt Lake, Rajarhat, and New Town.",
      "Abundant Amenities: Close to shopping malls, restaurants, and healthcare facilities.",
      "Lush Green Spaces: Surrounded by parks and recreational areas for outdoor activities.",
      "Spacious Apartments: Built-up areas ranging from 2,600 to 3,300 sq. ft.",
      "Luxury Living: Competitive pricing starting from ₹3.90 Cr onwards.",
    ],
    overview: {
      heading: "Welcome to Merlin Niyasa: Your Dream Home Awaits in Ruby, EM Bypass",
      paragraphs: [
        "Welcome to Merlin Niyasa, a newly launched residential project nestled in the vibrant heart of Ruby along the Eastern Metropolitan Bypass (EM Bypass) in Kolkata. Developed by the esteemed Merlin Group, Niyasa is a visionary project designed to embody the essence of tranquillity and modern living.",
        "Strategically situated in Ruby, Merlin Niyasa benefits from unparalleled connectivity to key areas of Kolkata. The EM Bypass serves as a crucial arterial route, allowing residents easy access to prominent neighborhoods such as Salt Lake, Rajarhat, and New Town. This prime location ensures that commuting to work, educational institutions and entertainment venues is effortless, making Niyasa an ideal choice for modern homeowners.",
        "The area surrounding Merlin Niyasa is rich in amenities, ensuring a lifestyle of convenience and comfort. Residents can enjoy a plethora of shopping malls, restaurants, and healthcare facilities right at their doorstep. The proximity to Ruby Hospital and several renowned schools enhances the living experience, providing peace of mind for families.",
        "Merlin Niyasa is spread across an expansive land area of 3.23 Acre, featuring two blocks with G+28 floors, housing a total of 152 residential units. The project offers a variety of spacious apartments, with super built-up areas ranging from 2,600 to 3,300 sq. ft. Each unit is thoughtfully designed to provide a modern living experience that meets the needs of today's homeowners. The pricing for Merlin Niyasa starts from ₹3.90 Cr onwards, making it a competitive choice for those looking to invest in luxury living in Kolkata. With the possession date set for June 2030, prospective homeowners have the opportunity to secure their dream home in advance.",
        "Merlin Niyasa is not just about modern amenities; it's about embracing a balanced lifestyle. The project is surrounded by lush green parks and recreational spaces that promote relaxation and outdoor activities. This harmonious blend of urban living and natural beauty makes Niyasa a perfect sanctuary for those seeking both comfort and peace.",
        "Public transportation is readily available, with metro stations and bus services nearby, providing seamless connectivity to the rest of Kolkata. As Ruby continues to evolve into a thriving locality, Merlin Niyasa stands out as a promising investment for individuals and families looking for a harmonious blend of accessibility and urban conveniences.",
      ],
    },
    brochures: [{ label: "Niyasa Brochure", file: "Niyasa Brochure.pdf" }],
  },
  {
    slug: "nidhara",
    name: "SKDJ Nidhara",
    location: "Buroshibtalla, New Alipore",
    landArea: "2.4 Acres",
    towers: "3",
    floors: "B+G+21, B+G+15",
    units: "115",
    bhk: "3 BHK, 4 BHK, 5 BHK",
    area: "1,914–3,645 sq ft",
    price: "₹2.40 Cr onwards",
    pricing: [
      "3 BHK · 1,914–3,097 sq ft · ₹2.40–3.70 Cr",
      "4 BHK · 2,608–3,532 sq ft · ₹3.18–3.90 Cr",
      "5 BHK · 3,627–3,645 sq ft · ₹4.46–4.50 Cr",
    ],
    status: "ongoing",
    statusLabel: "Under Construction · December 2031",
    rera: "WBRERA/P/KOL/2025/002345",
    unitsSold: "21%",
    typology: "Apartment",
    builtupArea: "1,914 - 3,645 sq ft",
    developers: [
      {
        name: "SKDJ Group",
        about:
          "At SKDJ Group, we are dedicated to crafting exceptional living spaces, starting with stand-alone buildings and expanding to a diverse portfolio that includes residential complexes and commercial properties. Our unwavering commitment to high-quality construction and design excellence drives every project we undertake.",
      },
      {
        name: "Anmol",
        about:
          "Since 1994, Anmol has emerged as a trusted name in the real estate sector, leveraging its strong brand presence, efficient supply chain, and diverse portfolio to cater to a wide range of homebuyers across Kolkata.",
      },
    ],
    highlights: [
      "Location: Buroshibtala, New Alipore, Kolkata.",
      "Developers: SKDJ Group and Anmol.",
      "Connectivity: Near James Long Sarani, Diamond Harbour Road, Tollygunge, and New Alipore railway stations.",
      "Configuration: 3, 4, and 5 BHK apartments.",
      "Area: Super built-up area ranging from 1,914 to 3,645 sq ft.",
      "Price Range: ₹2.40 Cr to ₹4.50 Cr.",
      "Nearby Amenities: Schools, hospitals, and South City Mall.",
      "Transport: Close to Rabindra Sarobar Metro Station.",
    ],
    overview: {
      heading: "Discover Nidhara: Luxury Living in Buroshibtala, New Alipore",
      paragraphs: [
        "Welcome to Nidhara, an exquisite residential project nestled in the heart of Buroshibtala, New Alipore, Kolkata. Developed by the renowned SKDJ Group and Anmol, Nidhara redefines modern living with a touch of tranquility. Its strategic location offers seamless connectivity, making it an ideal choice for homebuyers seeking both convenience and luxury.",
        "Situated in the well-established Buroshibtala area, Nidhara provides excellent connectivity to key parts of Kolkata. Major roads like James Long Sarani and Diamond Harbour Road ensure swift access to business hubs such as Park Street and Esplanade. Additionally, the proximity to Tollygunge and New Alipore railway stations, along with the Rabindra Sarobar Metro Station, makes daily commutes hassle-free.",
        "Spanning 2.4 Acre, Nidhara features 115 residential units across 3 blocks, offering 3, 4, and 5 BHK apartments. The super built-up area ranges from 1,914 to 3,645 sq ft, designed to suit diverse needs. Priced between ₹2.40 Cr and ₹4.50 Cr, these residences offer a perfect blend of comfort and elegance.",
        "Living at Nidhara means having access to top-tier educational institutions, renowned healthcare facilities like CMRI and B.P. Poddar Hospital, and popular shopping destinations such as South City Mall. The lush greenery and modern amenities enhance the urban living experience, making it both serene and sophisticated.",
        "With its strategic location, premium features, and seamless connectivity, Nidhara is more than just a home—it's a lifestyle. Embrace luxury and tranquility at Nidhara, your dream home in Buroshibtala, New Alipore.",
      ],
    },
    brochures: [
      { label: "Nidhara Mobile Brochure", file: "Nidhara Mobile Brochure.pdf" },
      { label: "Nidhara E-Flyer", file: "Nidhara E Flyer.pdf" },
      { label: "Nidhara Brochure (Horizontal)", file: "Nidhara Brochure Horizontal.pdf" },
      { label: "Nidhara Floor Plan Brochure", file: "Nidhara Floor Plan Brochure.pdf" },
      { label: "Nidhara Project Details", file: "Nidhara Project Details.pdf" },
    ],
  },
  {
    slug: "ps-aurus",
    name: "PS Aurus",
    location: "Science City, ITC Royal, EM Bypass",
    landArea: "3.67 Acres",
    towers: "2",
    floors: "G+33, G+34",
    units: "162",
    bhk: "3 BHK, 4 BHK, 5 BHK",
    area: "2,358–3,975 sq ft",
    price: "₹3.80 Cr onwards",
    pricing: [
      "3 BHK + 3T · 2,358 sq ft · ₹3.80 Cr onwards",
      "4 BHK · 2,822 sq ft · ₹3.80–6.60 Cr",
      "5 BHK Duplex · 3,975 sq ft · ₹6.60 Cr onwards",
    ],
    status: "completed",
    statusLabel: "Ready to Move",
    unitsSold: "60%",
    typology: "Apartment",
    builtupArea: "2,358 - 3,975 sq ft",
    developers: [
      {
        name: "PS Group",
        about:
          "PS Group is a leading real estate developer with the most remarkable projects in Kolkata. PS Group continuously strives to provide the best living experience. PS Group, a trailblazer in real estate, crafts iconic living spaces that redefine urban luxury.",
      },
    ],
    highlights: [
      "Strategic Location: Close to Science City and ITC Royal Bengal along EM Bypass.",
      "High-Quality Living: Features G+33 and G+34 towers with 162 luxury units.",
      "Spacious Apartments: Ranging from 3BHK to 5BHK, with sizes from 2,358 to 3,975 sq. ft.",
      "Excellent Amenities: Includes fitness center, swimming pool, children's play area, landscaped gardens, and multipurpose hall.",
      "Investment Potential: Starting prices from ₹3.80 crore to ₹6.60 crore, offering exceptional value.",
    ],
    overview: {
      heading: "Discover PS Aurus: Luxury Living at EM Bypass, Near Science City",
      paragraphs: [
        "PS Aurus is an exclusive residential project developed by the esteemed PS Group, perfectly situated near Science City and ITC Royal Bengal along the bustling EM Bypass. This luxurious development seamlessly combines modern living with premium amenities, strategically designed to offer residents unmatched convenience and connectivity to Kolkata's most significant landmarks.",
        "The prestigious PS Aurus is located just minutes away from Science City, a hub for science exhibitions, interactive displays, and a planetarium. This makes it an ideal setting for families seeking an educational environment filled with engaging activities. The project is also conveniently close to the ITC Royal Bengal, one of Kolkata's most luxurious hotels, known for its fine dining, spa services, and upscale event spaces. This proximity enhances daily life, providing ample opportunities for entertainment, business meetings, and family gatherings.",
        "The EM Bypass serves as a vital arterial road that connects North and South Kolkata, ensuring a hassle-free commute for residents of PS Aurus to various commercial hubs, business districts, and entertainment zones. Key destinations such as Salt Lake, New Town, and Netaji Subhas Chandra Bose International Airport are easily accessible, making PS Aurus an attractive choice for professionals, families, and investors alike.",
        "Spread across an expansive 3.67 acres, PS Aurus is designed with luxury and comfort in mind. The development features G+33 and G+34 high-rise towers, housing a total of 162 residential units that include spacious 3BHK, 4BHK, and 5BHK apartments. Each unit is meticulously crafted, offering generous space with a super built-up area ranging from 2,358 to 3,975 sq. ft. The contemporary architectural design combined with timeless elegance creates an ideal environment for high-end living.",
        "PS Aurus is not just a luxurious residence; it is also an exceptional investment opportunity within Kolkata's rapidly growing real estate market. With prices starting from ₹3.80 crore to ₹6.60 crore onwards, the project provides excellent value for discerning homebuyers and investors. The premium pricing reflects the superior quality, prime location, and extensive amenities, positioning PS Aurus as a valuable asset in Kolkata's upscale housing sector.",
        "Living at PS Aurus offers a lifestyle enriched by proximity to top schools, hospitals, shopping malls, and recreational centers. Its prime location along the EM Bypass ensures swift access to essential services and diverse entertainment options, striking the perfect balance between convenience and tranquility. Families benefit from nearby prominent schools and educational institutions, while hospitals and healthcare facilities provide peace of mind. The presence of shopping complexes and retail outlets ensures that everyday needs are met with ease.",
        "In summary, PS Aurus offers an unrivaled residential experience, seamlessly blending luxury, connectivity, and tranquility in the heart of Kolkata's dynamic EM Bypass. With its top-tier amenities, spacious apartments, and proximity to iconic landmarks like Science City and ITC Royal Bengal, PS Aurus stands out as a premier address for those seeking a sophisticated and comfortable lifestyle.",
      ],
    },
    brochures: [{ label: "PS Aurus Brochure", file: "PS Aurus Brochure.pdf" }],
  },
  {
    slug: "ps-sansara",
    name: "PS Sansara",
    location: "Gola Bari, Howrah",
    landArea: "17.41 Acres",
    towers: "5",
    floors: "G+38, G+40",
    units: "700",
    bhk: "3 BHK, 4 BHK, 4.5 BHK, 5 BHK",
    area: "2,514–4,883 sq ft",
    price: "₹3.50 Cr onwards",
    pricing: [
      "3 BHK · 2,514–2,580 sq ft · ₹3.50–3.75 Cr",
      "4 BHK · 3,272 sq ft · ₹4.15–4.65 Cr",
      "4.5 BHK + Study · 3,365 sq ft · ₹4.25–4.80 Cr",
      "5 BHK Duplex · 4,883 sq ft · ₹6.15–6.75 Cr",
    ],
    status: "ongoing",
    statusLabel: "Under Construction · October 2029",
    rera: "WBRERA/P/HOW/2024/001857",
    unitsSold: "20%",
    typology: "Apartment",
    builtupArea: "2,514 - 4,883 sq ft",
    developers: [
      {
        name: "PS Group",
        about:
          "PS Group is a leading real estate developer with the most remarkable projects in Kolkata. PS Group continuously strives to provide the best living experience. PS Group, a trailblazer in real estate, crafts iconic living spaces that redefine urban luxury.",
      },
    ],
    highlights: [
      "Prestigious Development: Luxury riverfront residences developed by the esteemed PS Group.",
      "Prime Location: Situated on Gola Bari Road, Howrah, near ILS Hospital.",
      "Excellent Connectivity: Close to Howrah Bridge, Howrah Railway Station, and major roadways.",
      "Diverse Residential Options: Choice of 3BHK, 4BHK, 4.5BHK and 5BHK duplex apartments.",
      "Spacious Living: Super built-up area ranging from 2,514 to 4,883 sq. ft.",
      "Luxurious Amenities: State-of-the-art recreational facilities and premium commercial spaces.",
      "Investment Potential: Competitive pricing starting from ₹3.50 Cr onwards, with possession scheduled for October 2029.",
    ],
    overview: {
      heading:
        "Experience Luxury Living at PS Sansara: Your Ideal Riverfront Residence in Howrah",
      paragraphs: [
        "PS Sansara is a prestigious luxury residential development nestled on Gola Bari Road, Howrah, right beside the well-known ILS Hospital. Developed by the esteemed PS Group, this project represents a seamless blend of luxury and simplicity, making it an exceptional choice for discerning residents. PS Sansara is not just a place to call home; it is a thoughtfully designed environment where elegance meets modern convenience. With state-of-the-art recreational facilities and premium commercial spaces, this residential project offers an unmatched lifestyle for families and professionals alike.",
        "Strategically positioned on Gola Bari Road, PS Sansara is located in a thriving area of Howrah, known for its harmonious blend of residential and commercial spaces. This prime address is ideal for both homebuyers and investors. The project's proximity to iconic landmarks, such as Howrah Bridge and Howrah Railway Station, ensures excellent connectivity to Kolkata and beyond.",
        "Gola Bari Road is well-connected to major thoroughfares, including the Grand Trunk Road and Howrah Maidan, providing smooth access to various parts of the city. Additionally, PS Sansara is conveniently close to upcoming metro stations, enhancing connectivity to key areas like Central Kolkata, Salt Lake, and New Town. The robust transport network, featuring bus routes and taxi services, makes commuting easy and convenient for residents.",
        "Moreover, Gola Bari Road is home to numerous educational institutions, healthcare centers, and commercial establishments, making PS Sansara an ideal choice for those seeking both luxury and convenience.",
        "Spread across an expansive 17.41 acres of prime land, PS Sansara offers a wide array of luxury residences. The project consists of five high-rise towers, each with G+38 and G+40 floors, featuring a total of 700 premium residential units. Homebuyers can select from configurations of 3BHK, 4BHK, 4.5 BHK and 5BHK duplex apartments, catering to the diverse needs of modern families.",
        "The super built-up area of the apartments ranges from 2,514 to 4,883 sq. ft., ensuring ample space and comfort for residents. Each apartment is designed with meticulous attention to detail, blending luxury with simplicity to create a peaceful and elegant living environment. The project is thoughtfully crafted to provide a tranquil lifestyle amidst nature, offering a perfect retreat for those who wish to enjoy urban living alongside the serenity of green surroundings.",
        "PS Sansara presents an excellent investment opportunity for homebuyers and investors looking to invest in a prestigious project within a rapidly developing area. With prices starting from ₹3.50 Cr onwards, this luxury development offers significant value for money, given its prime location, luxurious residences, and world-class amenities.",
        "The strategic position of PS Sansara on Gola Bari Road, coupled with excellent transport links and proximity to key commercial hubs, makes it an attractive choice for investors and end-users alike. Scheduled for possession in October 2029, PS Sansara promises a future-forward investment in a luxury development that ensures high returns and an unmatched living experience.",
        "PS Sansara offers an extraordinary living experience characterised by luxurious riverfront residences, a prime location on Gola Bari Road, and excellent connectivity to key areas in Kolkata. Whether you are searching for a spacious 3BHK, 4BHK, or 5BHK duplex apartment, PS Sansara by PS Group ensures an unparalleled lifestyle.",
      ],
    },
    brochures: [{ label: "PS Sansara Brochure", file: "PS Sansara Brochure.pdf" }],
  },
  {
    slug: "ps-quintessa",
    name: "PS Quintessa",
    location: "Kankurgachi, EM Bypass",
    landArea: "87 Katha",
    towers: "2",
    floors: "G+16",
    units: "80",
    bhk: "4 BHK, 5 BHK, 6 BHK",
    area: "2,354–6,049 sq ft",
    price: "₹3.76 Cr onwards",
    pricing: [
      "4 BHK · 2,354–2,781 sq ft · ₹3.76 Cr onwards",
      "5 BHK Duplex/Penthouse · 4,089–5,033 sq ft · ₹6.94 Cr onwards",
      "6 BHK Duplex/Penthouse · 4,518–6,049 sq ft · ₹7.79 Cr onwards",
    ],
    status: "ongoing",
    statusLabel: "Under Construction · April 2028",
    rera: "WBRERA/P/KOL/2023/000776",
    unitsSold: "20%",
    typology: "Apartment",
    builtupArea: "2,354 - 6,049 sq ft",
    developers: [
      {
        name: "PS Group",
        about:
          "PS Group is a leading real estate developer with the most remarkable projects in Kolkata. PS Group continuously strives to provide the best living experience. PS Group, a trailblazer in real estate, crafts iconic living spaces that redefine urban luxury.",
      },
    ],
    highlights: [
      "Strategic Location: Easily accessible via Kankurgachi crossing, Manicktala Main Road, and EM Bypass, ensuring quick travel throughout Kolkata.",
      "Spacious Apartments: Offers 4BHK, 5BHK and 6BHK configurations, with super built-up areas ranging from 2,354 to 6,049 sq. ft., catering to diverse family needs.",
      "Limited Availability: With only 80 residential units and 20% already sold, early investment promises exclusivity.",
      "Excellent Connectivity: Well-served by public transport, making commuting a breeze.",
    ],
    overview: {
      heading: "Experience Luxury Living at PS Quintessa in North Kolkata",
      paragraphs: [
        "PS Quintessa, strategically located near the Kankurgachi crossing, Manicktala Main Road, and EM Bypass, sets a new standard for luxury living in North Kolkata. Developed by the renowned PS Group this exceptional project offers unmatched convenience and connectivity, making it the ideal choice for families and professionals seeking an upscale living experience.",
        "Nestled in the bustling hub of Kankurgachi, PS Quintessa ensures easy access to all parts of Kolkata. The area is well-connected through major roads and excellent public transport options, including buses, taxis, and the nearby Bidhannagar Road Railway Station. Residents will enjoy proximity to major commercial districts, esteemed educational institutions, healthcare facilities, and entertainment zones—all just a short drive away. The seamless connectivity provided by Kankurgachi's location ensures that living at PS Quintessa combines urban convenience with luxury.",
        "PS Quintessa features a collection of spacious 4BHK, 5BHK and 6BHK apartments, with super built-up areas ranging from 2,354 to 6,049 sq. ft., designed for those who seek exclusivity and comfort. Spanning across 87 Katha of prime land, the project comprises 80 residential units across two blocks, each rising up to G+16 floors. With only 20% of the units sold, this highly sought-after development is rapidly gaining attention due to its thoughtful design and high demand. Prices for these luxurious residences start at ₹3.76 Cr onwards with 2 car parking, providing a lifestyle characterized by privacy, luxury, and tranquility. The possession date is scheduled for April 2028, allowing ample time to plan your move into this remarkable community.",
        "Designed with exclusivity in mind, PS Quintessa offers a serene living experience for its discerning homeowners. Each apartment is meticulously crafted to maximize natural light, ventilation, and space, ensuring a calm and comfortable atmosphere. The project's design emphasizes privacy, making it an ideal choice for those who value peace and quiet amidst a busy urban environment.",
        "Investing in PS Quintessa is more than just securing a luxurious home; it's a strategic financial decision. The prime location, world-class amenities, and trusted reputation of PS Group make this project a promising investment opportunity. As North Kolkata continues to develop, properties like PS Quintessa are expected to see significant appreciation in value, offering excellent returns for both homeowners and investors.",
        "PS Quintessa is the epitome of luxury living in North Kolkata, offering an exclusive community, state-of-the-art amenities, and an unparalleled lifestyle. Whether you're looking for a luxurious home for your family or a smart investment, PS Quintessa checks all the boxes. With a prime location and a prestigious developer behind it, this project promises a life of luxury and convenience.",
      ],
    },
    brochures: [{ label: "Quintessa Brochure", file: "Quintessa Brochure.pdf" }],
  },
  {
    slug: "merlin-f-residencies",
    name: "Merlin F Residency",
    location: "Jogardanga More, Rajarhat",
    landArea: "8 Acres",
    towers: "10",
    floors: "B+G+13, B+G+12",
    units: "1,000",
    bhk: "3 BHK, 4 BHK",
    area: "1,074–1,555 sq ft",
    price: "₹1.67 Cr onwards",
    pricing: [
      "3 BHK + 3T · 1,074–1,277 sq ft · ₹1.67 Cr onwards",
      "4 BHK + 3T · 1,407–1,555 sq ft · ₹2.07 Cr onwards",
    ],
    status: "ongoing",
    statusLabel: "Under Construction · June 2030",
    rera: "WBRERA/P/NOR/2024/002220",
    unitsSold: "20%",
    typology: "Apartment",
    developers: [
      {
        name: "Merlin Group",
        about:
          "Emanated in 1984, Merlin Group is now one of the pre-eminent conglomerates in the real estate industry in India, having a plenitude of prestigious residential and commercial complexes, office buildings, and townships to its credit.",
      },
    ],
    highlights: [
      "Developer: Renowned Merlin Group known for quality and trust in real estate.",
      "Location: Positioned in Jogardanga More, Rajarhat, with quick access to New Town, Salt Lake Sector V, and the International Airport.",
      "Land Area: Expansive 8-acre project with high-rise B+G+13 & B+G+12 blocks.",
      "Apartment Types: Spacious 3BHK and 4BHK apartments ranging from 1,074 to 1,555 sq ft.",
      "Total Units: 1,000 residential units with premium design and quality finishes.",
      "Amenities: Inclusive of a swimming pool, gymnasium, kids' play area, landscaped gardens, jogging track, multipurpose hall, and 24/7 security.",
    ],
    overview: {
      heading: "F Residences: Luxury Living in the Heart of Jogardanga More, Rajarhat",
      paragraphs: [
        "F Residences is a newly launched residential project by the esteemed Merlin Group, situated in the heart of Jogardanga More, Rajarhat. This project is a testament to modern, luxurious living in one of Rajarhat's fastest-developing locales. Positioned in an area known for its excellent connectivity and serene surroundings, F Residences caters to the needs of those seeking an upscale living environment with easy access to Kolkata's major destinations.",
        "Jogardanga More has rapidly become a prime spot for upscale residential projects, making F Residences a highly sought-after choice. Located conveniently within Rajarhat, this development provides seamless access to essential destinations such as New Town, the IT hub of Salt Lake Sector V, and popular business districts. Proximity to the Netaji Subhas Chandra Bose International Airport and major road networks ensures that residents enjoy an effortless commute and access to shopping malls, entertainment hubs, schools, and healthcare centres.",
        "F Residences is set across an 8-acre land area and features high-rise blocks with B+G+13 & B+G+12 floors. The project includes 1,000 residential units, offering spacious 3BHK and 4BHK apartments that range in size from 1,074 to 1,555 sq ft. These units are meticulously designed to offer comfort, style, and functionality. Interiors are crafted with large windows, quality finishes, and ample space, creating an ambience of modern luxury.",
        "The thoughtful design, luxurious amenities, and prime location of F Residences make it an attractive choice for families, professionals, and investors. With anticipated property appreciation in Rajarhat, F Residences offers not just a refined living space but also a sound investment. As Jogardanga More develops, property values are expected to rise, making this a promising real estate opportunity in Kolkata's thriving market.",
        "F Residences at Jogardanga More, Rajarhat combines luxury, modern design, and strategic location, presenting a top-tier option for homebuyers looking for upscale living and for investors seeking high-value opportunities in Kolkata.",
      ],
    },
    brochures: [
      { label: "F Residences Mini Brochure", file: "F Residences Mini Brochure.pdf" },
      { label: "Merlin F Floor Plan", file: "Merlin F Floor Plan.pdf" },
    ],
  },
  {
    slug: "ps-navyom",
    name: "PS Navyom",
    location: "Buroshibtala, Alipore",
    landArea: "7.42 Acres",
    towers: "9",
    floors: "B+G+11",
    units: "292",
    bhk: "4 BHK, 6 BHK",
    area: "2,666–5,295 sq ft",
    price: "₹2.29 Cr onwards",
    pricing: [
      "4 BHK · 2,666–2,970 sq ft · ₹2.29–4.70 Cr",
      "4 BHK Simplex · 2,860 sq ft · ₹2.29–4.70 Cr",
      "6 BHK Duplex · 5,295 sq ft · ₹7.40 Cr onwards",
    ],
    status: "completed",
    statusLabel: "Ready to Move",
    unitsSold: "90%",
    typology: "Apartment",
    builtupArea: "2,666 - 5,295 sq ft",
    developers: [
      {
        name: "PS Group",
        about:
          "PS Group is a leading real estate developer with the most remarkable projects in Kolkata. PS Group continuously strives to provide the best living experience. PS Group, a trailblazer in real estate, crafts iconic living spaces that redefine urban luxury.",
      },
    ],
    highlights: [
      "Innovative Expandable Living Concept: Flexibility to expand living spaces as per needs.",
      "Prime Location: Situated in Alipore, Buroshibtala with excellent connectivity.",
      "Luxurious Residences: 4BHK and 6BHK configurations, ranging from 2,666 sq. ft. to 5,295 sq. ft.",
      "Thoughtful Design: Ample natural light and ventilation in every apartment.",
    ],
    overview: {
      heading: "Discover PS Navyom: A Revolutionary Living Experience in Alipore",
      paragraphs: [
        "PS Navyom by the esteemed PS Group redefines urban living in the heart of Alipore, Buroshibtala, introducing Kolkata's first expandable living concept. This innovative project transforms traditional living spaces by seamlessly merging modern design with functional luxury. Residents can enjoy exquisite apartments that combine contemporary comforts with natural serenity, making PS Navyom one of the most coveted addresses in Kolkata.",
        "Nestled in the prestigious Alipore region, Buroshibtala is known for its rich historical significance and upscale surroundings. PS Navyom is strategically located, providing easy access to modern amenities while being enveloped by lush greenery. Major roads such as Diamond Harbour Road and Alipore Road ensure seamless connectivity to important business districts, educational institutions, healthcare facilities, and recreational spots.",
        "Residents can also take advantage of nearby iconic landmarks like the Alipore Zoo and the National Library, enhancing the allure of this sought-after neighborhood. Additionally, PS Navyom offers convenient access to Park Street, Esplanade, Salt Lake, and New Town, making it an ideal choice for professionals, families, and individuals seeking urban connectivity. High-end schools, hospitals, and shopping malls surround the area, catering to all lifestyle needs within a short distance.",
        "PS Navyom features luxurious and spacious residences spread across 7.42 acres, offering 292 premium units within 9 blocks, designed in a B+G+11-floor configuration. The apartments come in 4BHK and 6BHK configurations, with super built-up areas ranging from 2,666 sq. ft. to an expansive 5,295 sq. ft. This variety caters to families searching for homes that exude luxury, comfort, and sophistication.",
        "Each apartment's interior is meticulously designed to ensure optimal natural lighting, excellent ventilation, and panoramic green views, fostering a healthy and serene living environment. The unique expandable living concept allows residents to adapt their living space according to their evolving needs, exemplifying PS Navyom's commitment to modern architectural design and the functional requirements of contemporary families.",
        "Prices for apartments at PS Navyom range from ₹2.29 Cr to ₹7.40 Cr, appealing to discerning buyers seeking luxury living in South Kolkata. The project is slated for possession in August 2025, offering a timely investment opportunity for those looking to secure a premium residence in this prestigious neighborhood.",
        "PS Navyom is not just a residential project; it's a lifestyle destination that blends luxury, convenience, and tranquility. Whether you seek a spacious family home or a tranquil retreat in Kolkata's heart, PS Navyom is the perfect choice.",
      ],
    },
    brochures: [{ label: "Navyom Booklet", file: "Navyom Booklet.pdf" }],
  },
];

export const flagships = [
  {
    slug: "vinayak-21-acres",
    name: "Vinayak 21 Acres",
    tagline: "A township woven into the land",
    accent: "oklch(0.78 0.16 140)",
  },
  {
    slug: "godrej-blue",
    name: "Godrej Blue",
    tagline: "A residence borrowed from the water",
    accent: "oklch(0.7 0.18 235)",
  },
  {
    slug: "hoabl-the-sarayu",
    name: "HOABL The Sarayu",
    tagline: "A pilgrimage you can invest in",
    accent: "oklch(0.82 0.13 70)",
  },
] as const;

export const locations = [
  { name: "EM Bypass", count: 5 },
  { name: "Howrah", count: 2 },
  { name: "New Alipore", count: 1 },
  { name: "Alipore", count: 1 },
  { name: "Rajarhat", count: 1 },
];
