export const snippets = [
  {
    svg: (animationKey) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 24 24"
        key={animationKey}>
        <g
          fill="none"
          stroke="#150e74"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.7">
          <path
            strokeDasharray="64"
            strokeDashoffset="64"
            d="M9 7h11c0.55 0 1 0.45 1 1v11c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-11c0 -0.55 0.45 -1 1 -1Z">
            <animate
              fill={"freeze"}
              attributeName="stroke-dashoffset"
              dur="1.62s"
              values="64;0"
            />
          </path>
          <path
            strokeDasharray="16"
            strokeDashoffset="16"
            d="M9 7v-3c0 -0.55 0.45 -1 1 -1h4c0.55 0 1 0.45 1 1v3">
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              begin="1.89s"
              dur="0.54s"
              values="16;0"
            />
          </path>
          <path strokeDasharray="8" strokeDashoffset="8" d="M12 11v6">
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              begin="2.43s"
              dur="0.54s"
              values="8;0"
            />
          </path>
          <path strokeDasharray="8" strokeDashoffset="8" d="M9 14h6">
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              begin="2.97s"
              dur="0.54s"
              values="8;0"
            />
          </path>
        </g>
      </svg>
    ),
    images:['/img1a.jpg','/img2a.jpg','/img1c.jpg','/img2.jpg'],
    title: "Advancing Preventive Healthcare Across Africa",
    content: `Mhscope Global is a global provider of preventive healthcare, clinical solutions,and food products. They offer multidisciplinary care, diagnostics,
      pharmaceuticals, and treatment under one roof. Their services support
      people of all ages through clinics, innovation, and medical equipment.
      Mhscope Global plans to expand with clinics in Nigeria and across Africa to
      improve well-being.`,
    full: `MG is a unique international provider of reliable preventive healthcare and clinical management solutions, processing, supply and distribution of food products globally.
Our company provides specialised private preventive health care solutions with a range of experts, multidisciplinary care and one-stop shop option for medical diagnostics, health intervention, pharmaceuticals, and clinical treatment. Our company also bring together a comprehensive package of innovations to support health care and wellbeing, and quality food products household services such as domestic gas, for use and for supply to individuals and a range of people of all age groups within Nigeria and globally.
MG runs a standard multidisciplinary medical and health care clinic for medical consultations, health and medical diagnostics, health support and management operations, medical laboratory testing and diagnostic business operations, pharmaceutical products and supply of a range of medical equipment.
The focus of MG centers on hypertension, cardiovascular disease, diabetes and high level of cholesterol, infectious diseases, cancer and a range of medical presentations and other private health care services to support the health and social well-being of individuals, and people of all age groups globally. MG will establish one or two clinics in Nigeria and at least 10 other clinics distributed across other countries in Africa.
`,
  },
  {
    svg: (animationKey) => (
      <svg
        key={animationKey}
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 24 24">
        <defs>
          <symbol id="lineMdMapMarkerMultipleAlt0">
            <path d="M12 20.5C12 20.5 11 19 11 18C11 17.5 11.5 17 12 17C12.5 17 13 17.5 13 18C13 19 12 20.5 12 20.5z">
              <animate
                fill="freeze"
                attributeName="d"
                dur="1.08s"
                keyTimes="0;0.7;1"
                values="M12 20.5C12 20.5 11 19 11 18C11 17.5 11.5 17 12 17C12.5 17 13 17.5 13 18C13 19 12 20.5 12 20.5z;M12 20.5C12 20.5 5 13 5 8C5 4.5 8 1 12 1C16 1 19 4.5 19 8C19 13 12 20.5 12 20.5z;M12 20.5C12 20.5 6 13.5 6 9C6 5.68629 8.68629 3 12 3C15.3137 3 18 5.68629 18 9C18 13.5 12 20.5 12 20.5z"
              />
            </path>
          </symbol>
          <mask id="lineMdMapMarkerMultipleAlt1">
            <use
              x="-2"
              fill="none"
              stroke="#fff"
              strokeWidth="0.7"
              href="#lineMdMapMarkerMultipleAlt0"
            />
            <use
              x="2"
              stroke="#000"
              strokeWidth="4"
              href="#lineMdMapMarkerMultipleAlt0"
            />
            <use
              x="2"
              fill="none"
              stroke="#fff"
              strokeWidth="0.7"
              href="#lineMdMapMarkerMultipleAlt0"
            />
            <circle cx="14" cy="9" r="2.5" fill="#fff" fillOpacity="0">
              <animate
                fill="freeze"
                attributeName="fill-opacity"
                begin="1.35s"
                dur="1.08s"
                values="0;1"
              />
            </circle>
          </mask>
        </defs>
        <rect
          width="24"
          height="24"
          mask="url(#lineMdMapMarkerMultipleAlt1)"
          fill="#150e74"
        />
      </svg>
    ),
    title: "Expanding Global Access to Preventive Health & Food Solutions",
    content: `MG is driving innovation in healthcare and food solutions through virtual networks and in-house expertise.
With its HQ in Lagos, MG plans expansion across Africa and globally.
It tackles access to preventive care, chronic conditions, and food quality.
Their trained team spans multiple medical specialties and regions.
MG is growing across the Philippines, UK, USA, and more.`,
    full: `As part of its operations, MG supports a range of innovative models of health and medical care, health solutions in a virtual environment and food networks for processing, supply and distribution, especially on animal production and crop processing and supply operations in Nigeria and globally. The MG clinics will aim to reduce the problem of access to health care, preventive and early intervention, good quality care and treatment of chronic health conditions in Nigeria and Africa in general.
MG is a newly established health care and food solutions company with a collective well experienced and trained staff in health administration and management of preventive health with a range of specialists in various health and medical specialties, health and medical consultancy in-house staff, allied health professionals based within and outside Nigeria and overseas.
MG is established with its first office and headquarters in Lagos, State, Nigeria and with a prospect of establishing offices and staff located in Nigeria and other countries in Africa (Ghana, Uganda, Egypt, Tanzania, Malawi and South Africa).
MG has the potential of expanding its global offices in the Philippines, Malaysia, Indonesia, China, USA, United Kingdom and Australia, including the attraction of best and qualified staff from around the globe to join its workforce.`,
  },
  {
    svg: (animationKey) => (
      <svg
        key={animationKey}
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="0" fill="#150e74">
          <animate
            fill="freeze"
            attributeName="r"
            begin="1.89s"
            dur="0.54s"
            values="0;4"
          />
        </circle>
        <g
          fill="none"
          stroke="#150e74"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.7">
          <path
            strokeDasharray="56"
            strokeDashoffset="56"
            d="M12 4c4.42 0 8 3.58 8 8c0 4.42 -3.58 8 -8 8c-4.42 0 -8 -3.58 -8 -8c0 -4.42 3.58 -8 8 -8Z">
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              dur="1.62s"
              values="56;0"
            />
          </path>
          <path
            strokeDasharray="4"
            strokeDashoffset="4"
            d="M12 4v0M20 12h0M12 20v0M4 12h0"
            opacity="0">
            <animate
              fill="freeze"
              attributeName="d"
              begin="2.7s"
              dur="0.54s"
              values="M12 4v0M20 12h0M12 20v0M4 12h0;M12 4v-2M20 12h2M12 20v2M4 12h-2"
            />
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              begin="2.7s"
              dur="0.54s"
              values="4;0"
            />
            <set fill="freeze" attributeName="opacity" begin="2.7s" to="1" />
            <animateTransform
              attributeName="transform"
              dur="81s"
              repeatCount="indefinite"
              type="rotate"
              values="0 12 12;360 12 12"
            />
          </path>
        </g>
      </svg>
    ),
    title: "Promoting Reputable Business Partnerships for Better Health",
    content: `MG will promote business partnership with reputable companies based overseas, raising the level of awareness and business investment in healthcare and food supply solutions. Our company focuses on engaging, collaborating, and doing long-term international business partnerships to improve access to health services worldwide.`,
    full: `MG will promote business partnership with reputable companies based overseas, and raise the level of awareness and business investment in healthcare and food supply solutions, and support the building of professional knowledge and skills to manage chronic health conditions, improve access to information on diagnostics, health care, food supply, global pathways to health and social well-being for people.
One of our company policies is that services and products from MG is sourced directly from the manufacturer based in the source country. This will ensure that MG promotes good products and services for economic growth and development, ensuring that good quality health standards are followed in consistent with World Health Organisation, Food And Agricultural Organisation and other United Nations agencies.
We are determined to deliver the best quality health care services and food supply & distribution to our clients especially in collaboration with any reputable business partners who have similar business objectives and practices. MG is also focused on engaging collaborating doing a long-term international business partnership with any companies that have capacity capability of business operations in clinical diagnostic medical laboratory equipment test kits other related health medical products`,
  },
  {
    svg: (animationKey) => (
      <svg
        key={animationKey}
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 24 24">
        <g
          fill="none"
          stroke="#150e74"
          strokeDasharray="12"
          strokeDashoffset="12"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.7">
          <path d="M12 2l-7 7M12 2l7 7">
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              dur="0.81s"
              values="12;0"
            />
          </path>
          <path d="M12 8l-7 7M12 8l7 7">
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              begin="0.81s"
              dur="0.81s"
              values="12;0"
            />
          </path>
          <path d="M12 14l-7 7M12 14l7 7">
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              begin="1.62s"
              dur="0.81s"
              values="12;0"
            />
          </path>
        </g>
      </svg>
    ),
    title: `MG's Mission to Improve Health and Food Quality in Low-Income Countries`,
    content: `MG is committed to addressing the challenges of poor quality health services and food shortages in Nigeria and other low-income countries. Our goal is to provide international standard healthcare, medical equipment, and food products. We aim to establish preventive health care centers and specialized diagnostic hubs to improve access to quality health services`,
    full: `We have skilled personnel with cognate professional experiences in our business drive in order to achieve our set goals. Nigeria and other low socio-economic countries are faced with a mass of poor quality health and medical services and shortage of food products, and mostly people are faced with communicable and non-communicable disease and other related public health related issues that are ravaging citizens' health and socio-well-being.
We are determined to end this scourge by providing quality and international standard healthcare clinic and preventive health management services, diagnostics, health and medical equipment and food products. We have intent to also establish in the nearest future some centrally located preventive health care centers for business and get stocks stocked with modern health and medical equipment and food products; set up specialized medical diagnostic hubs, pharmaceutical outlets and offices / warehouses where products / test kits and equipment imported from overseas are distributed into markets across Africa, Asia-Pacific and other countries for supply and distribution of other similar and/or related business operations.
In Nigeria and some of the African countries, the business opportunities for preventive healthcare solutions are readily available and yet to be explored to address some chronic health conditions such as diabetes, hypertension, diabetes, high level of cholesterol or other chronic health conditions. MG will continue to explore strategic long-term international business partnerships with any reputable companies overseas for direct access to import health and medical products which are needed and affordable both locally and internationally.
MG has a unique commitment to contribute to national and international economic growth and prosperity in preventive health care, food security in countries where its business is established. Revenue from its business operations will be channeled back into supporting national health care programs, preventive healthcare initiatives, public hospital primary healthcare units of non-communicable and communicable diseases with an ultimate purpose of supporting a better and healthy people across Nigeria and other business partner countries globally.`,
  },
];
