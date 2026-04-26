export const champions = [
  {
    id: 1,
    translations: {
      fr: { name: "Aide d'urgence", title: "Assistance immédiate", description: "Apporter une réponse rapide et concrète aux populations en détresse, notamment lors de crises humanitaires ou de catastrophes naturelles." },
      en: { name: "Emergency Aid", title: "Immediate Assistance", description: "Provide rapid and concrete response to populations in distress, especially during humanitarian crises or natural disasters." },
      ar: { name: "المساعدة الطارئة", title: "المساعدة الفورية", description: "تقديم استجابة سريعة وملموسة للسكان في حالة ضيق، خاصة أثناء الأزمات الإنسانية أو الكوارث الطبيعية." }
    },
    role: "urgence",
    difficulty: 3,
    image: "https://media.base44.com/images/public/69e4dee944caaeeee6d3530f/35e93b646_generated_2b5b4414.png",
  },
  {
    id: 2,
    translations: {
      fr: { name: "Protection de l'enfance", title: "Droits & bien-être des enfants", description: "Promouvoir la protection, le bien-être et les droits des enfants vulnérables à travers des actions concrètes et durables." },
      en: { name: "Child Protection", title: "Rights & Well-being of Children", description: "Promote protection, well-being and rights of vulnerable children through concrete and sustainable actions." },
      ar: { name: "حماية الطفولة", title: "حقوق ورفاهية الأطفال", description: "تعزيز حماية ورفاهية وحقوق الأطفال الضعفاء من خلال إجراءات ملموسة ومستدامة." }
    },
    role: "enfance",
    image: "https://media.base44.com/images/public/69e4dee944caaeeee6d3530f/37fd4ff80_generated_a1bf33c2.png",
    difficulty: 1,
  },
  {
    id: 3,
    translations: {
      fr: { name: "Lutte contre la précarité", title: "Soutien aux personnes vulnérables", description: "Accompagner les personnes en situation de précarité avec des solutions adaptées aux réalités des communautés locales." },
      en: { name: "Fighting Poverty", title: "Support for Vulnerable People", description: "Support people in precarious situations with solutions adapted to the realities of local communities." },
      ar: { name: "محاربة الفقر", title: "دعم الأشخاص الضعفاء", description: "دعم الأشخاص في حالات صعبة بحلول مكيفة مع واقع المجتمعات المحلية." }
    },
    role: "precarite",
    image: "https://media.base44.com/images/public/69e4dee944caaeeee6d3530f/ec6dfd010_generated_c56cb86d.png",
    difficulty: 2,
  },
  {
    id: 4,
    translations: {
      fr: { name: "Construction et forage de puits", title: "Accès à l'eau potable", description: "Construire et forer des puits pour garantir l'accès à l'eau potable aux communautés des zones rurales isolées du Tchad." },
      en: { name: "Well Construction & Drilling", title: "Access to Drinking Water", description: "Build and drill wells to ensure access to drinking water for communities in isolated rural areas of Chad." },
      ar: { name: "بناء وحفر الآبار", title: "الحصول على المياه النقية", description: "بناء وحفر الآبار لضمان الوصول إلى المياه النقية للمجتمعات في المناطق الريفية النائية في تشاد." }
    },
    role: "eau",
    image: "https://media.base44.com/images/public/69e4dee944caaeeee6d3530f/95984ac86_generated_b9c33d0d.png",
    difficulty: 2,
  },
  {
    id: 5,
    translations: {
      fr: { name: "Solidarité communautaire", title: "Agir ensemble", description: "Agir ensemble pour soutenir les personnes vulnérables et renforcer le tissu social des communautés locales." },
      en: { name: "Community Solidarity", title: "Acting Together", description: "Work together to support vulnerable people and strengthen the social fabric of local communities." },
      ar: { name: "التضامن المجتمعي", title: "العمل معاً", description: "العمل معاً لدعم الأشخاص الضعفاء وتعزيز النسيج الاجتماعي للمجتمعات المحلية." }
    },
    role: "solidarite",
    image: "https://media.base44.com/images/public/69e4dee944caaeeee6d3530f/d0a182281_generated_d6a8dfb0.png",
    difficulty: 1,
  },
  {
    id: 6,
    translations: {
      fr: { name: "Propreté et nettoyage", title: "Qualité de vie", description: "Améliorer la qualité de vie des communautés par des actions de propreté et d'assainissement." },
      en: { name: "Cleanliness & Sanitation", title: "Quality of Life", description: "Improve the quality of life of communities through cleanliness and sanitation actions." },
      ar: { name: "النظافة والصرف الصحي", title: "جودة الحياة", description: "تحسين جودة حياة المجتمعات من خلال إجراءات النظافة والصرف الصحي." }
    },
    role: "propreté",
    image: "https://media.base44.com/images/public/69e4dee944caaeeee6d3530f/30419aabe_generated_e1059c93.png",
    difficulty: 2,
  },
  {
    id: 7,
    translations: {
      fr: { name: "Éducation & formation", title: "Savoirs & compétences", description: "Offrir aux enfants et aux jeunes l'accès à l'éducation et à la formation pour construire un avenir meilleur." },
      en: { name: "Education & Training", title: "Knowledge & Skills", description: "Provide children and young people with access to education and training to build a better future." },
      ar: { name: "التعليم والتدريب", title: "المعرفة والمهارات", description: "توفير الأطفال والشباب بالوصول إلى التعليم والتدريب لبناء مستقبل أفضل." }
    },
    role: "enfance",
    image: "https://media.base44.com/images/public/69e4dee944caaeeee6d3530f/646646883_generated_5df20c47.png",
    difficulty: 3,
  },
  {
    id: 8,
    translations: {
      fr: { name: "Santé & hygiène", title: "Bien-être des populations", description: "Améliorer l'accès aux soins de santé de base et promouvoir l'hygiène au sein des populations les plus démunies." },
      en: { name: "Health & Hygiene", title: "Well-being of Populations", description: "Improve access to basic health care and promote hygiene among the most disadvantaged populations." },
      ar: { name: "الصحة والنظافة", title: "رفاهية السكان", description: "تحسين الوصول إلى الرعاية الصحية الأساسية وتعزيز النظافة بين السكان الأكثر حرماناً." }
    },
    role: "urgence",
    image: "https://media.base44.com/images/public/69e4dee944caaeeee6d3530f/6729800ba_generated_277edd45.png",
    difficulty: 2,
  },
  {
    id: 9,
    translations: {
      fr: { name: "Inclusion sociale", title: "Dignité pour tous", description: "Garantir que chaque individu, quelles que soient ses origines, mérite dignité, protection et opportunités." },
      en: { name: "Social Inclusion", title: "Dignity for All", description: "Ensure that every individual, regardless of origin, deserves dignity, protection and opportunities." },
      ar: { name: "الإدراج الاجتماعي", title: "الكرامة للجميع", description: "ضمان أن كل فرد، بغض النظر عن أصله، يستحق الكرامة والحماية والفرص." }
    },
    role: "precarite",
    image: "https://media.base44.com/images/public/69e4dee944caaeeee6d3530f/203d2d5a4_generated_61a5f177.png",
    difficulty: 3,
  },
  {
    id: 10,
    translations: {
      fr: { name: "Nutrition & alimentation", title: "Besoins essentiels", description: "Répondre aux besoins alimentaires essentiels des familles vulnérables pour lutter contre la malnutrition." },
      en: { name: "Nutrition & Food", title: "Essential Needs", description: "Meet essential food needs of vulnerable families to fight malnutrition." },
      ar: { name: "التغذية والغذاء", title: "الاحتياجات الأساسية", description: "تلبية الاحتياجات الغذائية الأساسية للعائلات الضعيفة لمكافحة سوء التغذية." }
    },
    role: "urgence",
    image: "https://media.base44.com/images/public/69e4dee944caaeeee6d3530f/8216bc531_generated_9dbc18d1.png",
    difficulty: 1,
  },
  {
    id: 11,
    translations: {
      fr: { name: "Bénévolat & engagement", title: "Forces vives", description: "Mobiliser des bénévoles engagés pour offrir leur temps et leurs compétences au service des actions humanitaires." },
      en: { name: "Volunteering & Engagement", title: "Active Forces", description: "Mobilize committed volunteers to offer their time and skills in service of humanitarian action." },
      ar: { name: "التطوع والالتزام", title: "القوى الفاعلة", description: "تعبئة المتطوعين الملتزمين لتقديم وقتهم ومهاراتهم في خدمة العمل الإنساني." }
    },
    role: "solidarite",
    image: "https://media.base44.com/images/public/69e4dee944caaeeee6d3530f/e6c1c4c80_generated_b128f90b.png",
    difficulty: 2,
  },
  {
    id: 12,
    translations: {
      fr: { name: "Partenariats & financement", title: "Démultiplier l'impact", description: "Associer entreprises et institutions à notre cause pour démultiplier notre impact social et financer nos projets." },
      en: { name: "Partnerships & Funding", title: "Multiply Impact", description: "Partner with businesses and institutions to multiply our social impact and fund our projects." },
      ar: { name: "الشراكات والتمويل", title: "مضاعفة التأثير", description: "الشراكة مع الشركات والمؤسسات لمضاعفة تأثيرنا الاجتماعي وتمويل مشاريعنا." }
    },
    role: "propreté",
    image: "https://media.base44.com/images/public/69e4dee944caaeeee6d3530f/35e93b646_generated_2b5b4414.png",
    difficulty: 3,
  }
];

export const roles = [
  { id: "all", name: "Tout", icon: "Grid3X3" },
  { id: "urgence", name: "Urgence", icon: "AlertTriangle" },
  { id: "enfance", name: "Enfance", icon: "Heart" },
  { id: "precarite", name: "Précarité", icon: "Shield" },
  { id: "eau", name: "Eau", icon: "Droplets" },
  { id: "propreté", name: "Propreté", icon: "Sparkles" }
];

export const newsItems = [
  {
    id: 1,
    translations: {
      fr: {
        title: "Distribution alimentaire à N'Djaména",
        category: "Actions terrain",
        description: "La SNPE a organisé une grande distribution alimentaire pour les familles vulnérables dans les quartiers défavorisés de N'Djaména.",
        content: [
          { type: "p", text: "La SNPE poursuit ses efforts sur le terrain pour répondre aux besoins des populations les plus vulnérables du Tchad. Cette actualité marque une nouvelle étape dans notre engagement humanitaire, avec des actions concrètes et durables adaptées aux réalités des communautés locales." },
          { type: "h2", text: "Une action décisive" },
          { type: "p", text: "Les équipes de la SNPE ont mobilisé leurs ressources pour cette grande distribution alimentaire. Chaque famille bénéficiaire a reçu des denrées essentielles permettant de couvrir les besoins nutritionnels de base pendant plusieurs semaines." },
          { type: "p", text: "\"Cette distribution représente un engagement envers les populations vulnérables\", explique la direction de l'association. \"Nous sommes déterminés à poursuivre nos efforts pour améliorer les conditions de vie des plus démunis.\"" },
          { type: "h2", text: "Impact et portée" },
          { type: "p", text: "Plus de 2000 familles ont été directement touchées par cette initiative. Les bénéficiaires ont été identifiés selon des critères stricts de vulnérabilité pour assurer une aide optimale à ceux qui en ont le plus besoin." },
          { type: "quote", text: "Convaincue que chaque individu mérite dignité, protection et opportunités, la SNPE s'engage activement à contribuer au développement social et à la réduction des inégalités." },
          { type: "h2", text: "Perspectives" },
          { type: "p", text: "Cette distribution est le début d'un programme plus large visant à soutenir les familles vulnérables sur plusieurs mois. D'autres initiatives sont en cours de planification pour diversifier les types d'aide apportée." }
        ]
      },
      en: {
        title: "Food Distribution in N'Djamena",
        category: "Field Actions",
        description: "SNPE organized a major food distribution for vulnerable families in disadvantaged neighborhoods of N'Djamena.",
        content: [
          { type: "p", text: "SNPE continues its efforts on the ground to meet the needs of the most vulnerable populations in Chad. This news marks a new step in our humanitarian commitment, with concrete and sustainable actions adapted to the realities of local communities." },
          { type: "h2", text: "A decisive action" },
          { type: "p", text: "SNPE teams mobilized their resources for this large food distribution. Each beneficiary family received essential supplies to cover basic nutritional needs for several weeks." },
          { type: "p", text: "\"This distribution represents a commitment to vulnerable populations,\" explains the organization's leadership. \"We are determined to continue our efforts to improve living conditions for the poorest.\"" },
          { type: "h2", text: "Impact and scope" },
          { type: "p", text: "Over 2000 families were directly reached by this initiative. Beneficiaries were identified according to strict vulnerability criteria to ensure optimal aid to those who need it most." },
          { type: "quote", text: "Convinced that every individual deserves dignity, protection and opportunities, SNPE is actively committed to contributing to social development and reducing inequalities." },
          { type: "h2", text: "Perspectives" },
          { type: "p", text: "This distribution is the beginning of a larger program aimed at supporting vulnerable families over several months. Other initiatives are being planned to diversify the types of aid provided." }
        ]
      },
      ar: {
        title: "توزيع الغذاء في نجامينا",
        category: "الإجراءات الميدانية",
        description: "نظمت SNPE توزيعاً غذائياً كبيراً للعائلات الضعيفة في الأحياء المحرومة من نجامينا.",
        content: [
          { type: "p", text: "تستمر SNPE في جهودها على الأرض للاستجابة لاحتياجات أكثر السكان ضعفاً في تشاد. يمثل هذا الخبر خطوة جديدة في التزامنا الإنساني، مع إجراءات ملموسة ومستدامة تتكيف مع واقع المجتمعات المحلية." },
          { type: "h2", text: "إجراء حاسم" },
          { type: "p", text: "حشدت فرق SNPE مواردها لهذا التوزيع الغذائي الكبير. تلقت كل عائلة مستفيدة المواد الأساسية لتغطية الاحتياجات الغذائية الأساسية لعدة أسابيع." },
          { type: "p", text: "\"يمثل هذا التوزيع التزاماً تجاه السكان الضعفاء\", كما تشرح قيادة المنظمة. \"نحن مصممون على مواصلة جهودنا لتحسين ظروف معيشة الأكثر فقراً.\"" },
          { type: "h2", text: "التأثير والنطاق" },
          { type: "p", text: "تم الوصول مباشرة إلى أكثر من 2000 عائلة من خلال هذه المبادرة. تم تحديد المستفيدين وفقاً لمعايير صارمة للضعف لضمان الحصول على المساعدة المثلى لمن هم بأمس الحاجة إليها." },
          { type: "quote", text: "مقتنعة بأن كل فرد يستحق الكرامة والحماية والفرص، فإن SNPE ملتزمة بنشاط بالمساهمة في التنمية الاجتماعية وتقليل عدم المساواة." },
          { type: "h2", text: "الآفاق" },
          { type: "p", text: "هذا التوزيع هو بداية برنامج أكبر يهدف إلى دعم العائلات الضعيفة على مدى عدة أشهر. جاري التخطيط لمبادرات أخرى لتنويع أنواع المساعدة المقدمة." }
        ]
      }
    },
    date: "14 Avr 2026",
    image: "https://media.base44.com/images/public/69e4dee944caaeeee6d3530f/433367216_generated_08eeafe6.png",
    size: "large"
  },
  {
    id: 2,
    translations: {
      fr: {
        title: "Protection de l'enfance : bilan trimestriel",
        category: "Rapport",
        description: "Retour sur les actions menées ce trimestre pour la protection et le bien-être des enfants vulnérables au Tchad.",
        content: [
          { type: "p", text: "Ce trimestre a marqué une période intense d'activités pour la SNPE en matière de protection de l'enfance. Nos équipes ont redoublé d'efforts pour assurer le bien-être et la sécurité des enfants les plus vulnérables." },
          { type: "h2", text: "Chiffres clés du trimestre" },
          { type: "p", text: "La SNPE a touché plus de 5000 enfants à travers diverses initiatives. Ces programmes couvrent l'accès à l'éducation, les soins de santé, la nutrition et la protection contre les abus." },
          { type: "p", text: "Parmi les réalisations principales : 45 enfants placés en sécurité, 200 enfants scolarisés, 1500 enfants ayant reçu des soins médicaux de base." },
          { type: "h2", text: "Défis rencontrés" },
          { type: "p", text: "Malgré nos efforts, certains défis persistent : manque de ressources, accès difficile aux zones rurales éloignées, et sensibilisation insuffisante des communautés aux droits de l'enfant." },
          { type: "quote", text: "La protection de l'enfance reste notre priorité absolue. Nous continuerons à renforcer nos capacités et nos partenariats pour mieux servir les enfants vulnérables." },
          { type: "h2", text: "Perspectives" },
          { type: "p", text: "Le prochain trimestre verra le lancement de nouvelles campagnes de sensibilisation et l'expansion de nos programmes vers de nouvelles régions du Tchad." }
        ]
      },
      en: {
        title: "Child Protection: Quarterly Report",
        category: "Report",
        description: "Review of actions taken this quarter for the protection and well-being of vulnerable children in Chad.",
        content: [
          { type: "p", text: "This quarter has marked an intense period of activities for SNPE in child protection. Our teams have doubled their efforts to ensure the well-being and safety of the most vulnerable children." },
          { type: "h2", text: "Key figures for the quarter" },
          { type: "p", text: "SNPE reached over 5000 children through various initiatives. These programs cover access to education, health care, nutrition, and protection against abuse." },
          { type: "p", text: "Among the main achievements: 45 children placed in safety, 200 children enrolled in school, 1500 children receiving basic medical care." },
          { type: "h2", text: "Challenges encountered" },
          { type: "p", text: "Despite our efforts, some challenges persist: lack of resources, difficult access to remote rural areas, and insufficient awareness of children's rights in communities." },
          { type: "quote", text: "Child protection remains our absolute priority. We will continue to strengthen our capacities and partnerships to better serve vulnerable children." },
          { type: "h2", text: "Perspectives" },
          { type: "p", text: "The next quarter will see the launch of new awareness campaigns and the expansion of our programs to new regions of Chad." }
        ]
      },
      ar: {
        title: "حماية الطفولة: تقرير ربع سنوي",
        category: "التقرير",
        description: "استعراض الإجراءات المتخذة في هذا الربع لحماية ورفاهية الأطفال الضعفاء في تشاد.",
        content: [
          { type: "p", text: "شهد هذا الربع فترة مكثفة من الأنشطة لـ SNPE في حماية الطفولة. عملت فرقنا على مضاعفة جهودها لضمان سلامة ورفاهية الأطفال الأكثر ضعفاً." },
          { type: "h2", text: "الأرقام الرئيسية للربع" },
          { type: "p", text: "وصلت SNPE إلى أكثر من 5000 طفل من خلال مبادرات متنوعة. تغطي هذه البرامج الوصول إلى التعليم والرعاية الصحية والتغذية والحماية من الاستغلال." },
          { type: "p", text: "من بين الإنجازات الرئيسية: وضع 45 طفلاً في الأمان، تسجيل 200 طفل في المدرسة، تلقي 1500 طفل للرعاية الطبية الأساسية." },
          { type: "h2", text: "التحديات التي واجهتنا" },
          { type: "p", text: "على الرغم من جهودنا، لا تزال بعض التحديات قائمة: نقص الموارد، والوصول الصعب إلى المناطق الريفية النائية، والوعي غير الكافي بحقوق الطفل في المجتمعات." },
          { type: "quote", text: "تبقى حماية الطفولة أولويتنا المطلقة. سننتقل إلى تعزيز قدراتنا وشراكاتنا لخدمة الأطفال الضعفاء بشكل أفضل." },
          { type: "h2", text: "الآفاق" },
          { type: "p", text: "سيشهد الربع القادم إطلاق حملات توعية جديدة وتوسيع برامجنا إلى مناطق جديدة من تشاد." }
        ]
      }
    },
    date: "14 Avr 2026",
    image: "https://media.base44.com/images/public/69e4dee944caaeeee6d3530f/b2e2c6076_generated_feddb557.png",
    size: "medium"
  },
  {
    id: 3,
    translations: {
      fr: {
        title: "Campagne de sensibilisation à l'hygiène",
        category: "Santé",
        description: "Une campagne d'éducation à l'hygiène et à la santé de base a été déployée dans plusieurs communautés rurales.",
        content: [
          { type: "p", text: "La SNPE a lancé une campagne ambitieuse de sensibilisation à l'hygiène et à la santé. Cette initiative vise à améliorer les pratiques d'hygiène dans les communautés rurales du Tchad." },
          { type: "h2", text: "Objectifs de la campagne" },
          { type: "p", text: "Réduire les maladies liées à l'hygiène insuffisante, augmenter l'accès à l'eau potable et aux installations sanitaires, et promouvoir les bonnes pratiques d'hygiène personnelle et collective." },
          { type: "p", text: "Plus de 10000 personnes ont participé aux sessions de sensibilisation organisées dans 15 villages différents." },
          { type: "h2", text: "Méthodes utilisées" },
          { type: "p", text: "Utilisation de vidéos éducatives, de démonstrations pratiques, de distributions de matériels d'hygiène et de formations de relais communautaires pour assurer la durabilité du programme." },
          { type: "quote", text: "L'hygiène est le fondement de la santé. En investissant dans l'éducation sanitaire, nous investissons dans l'avenir des communautés." },
          { type: "h2", text: "Résultats attendus" },
          { type: "p", text: "Une diminution des cas de maladies hydriques, une meilleure qualité de vie et une plus grande conscience des enjeux de santé publique." }
        ]
      },
      en: {
        title: "Hygiene Awareness Campaign",
        category: "Health",
        description: "A hygiene and basic health education campaign was deployed in several rural communities.",
        content: [
          { type: "p", text: "SNPE launched an ambitious hygiene and health awareness campaign. This initiative aims to improve hygiene practices in rural communities in Chad." },
          { type: "h2", text: "Campaign objectives" },
          { type: "p", text: "Reduce diseases related to poor hygiene, increase access to drinking water and sanitation facilities, and promote good personal and community hygiene practices." },
          { type: "p", text: "Over 10000 people participated in awareness sessions organized in 15 different villages." },
          { type: "h2", text: "Methods used" },
          { type: "p", text: "Use of educational videos, practical demonstrations, distribution of hygiene materials, and training of community relay officers to ensure program sustainability." },
          { type: "quote", text: "Hygiene is the foundation of health. By investing in health education, we invest in the future of communities." },
          { type: "h2", text: "Expected results" },
          { type: "p", text: "A reduction in cases of water-related diseases, improved quality of life, and greater awareness of public health issues." }
        ]
      },
      ar: {
        title: "حملة التوعية بالنظافة",
        category: "الصحة",
        description: "تم نشر حملة تثقيفية حول النظافة والصحة الأساسية في عدة مجتمعات ريفية.",
        content: [
          { type: "p", text: "أطلقت SNPE حملة طموحة للتوعية بالنظافة والصحة. تهدف هذه المبادرة إلى تحسين ممارسات النظافة في المجتمعات الريفية في تشاد." },
          { type: "h2", text: "أهداف الحملة" },
          { type: "p", text: "تقليل الأمراض المرتبطة بنقص النظافة، زيادة الوصول إلى المياه النقية والمرافق الصحية، وتعزيز ممارسات النظافة الشخصية والجماعية الجيدة." },
          { type: "p", text: "شارك أكثر من 10000 شخص في جلسات التوعية المنظمة في 15 قرية مختلفة." },
          { type: "h2", text: "الطرق المستخدمة" },
          { type: "p", text: "استخدام الفيديوهات التعليمية والعروض العملية وتوزيع مواد النظافة وتدريب موظفي الاتصال المجتمعي لضمان استدامة البرنامج." },
          { type: "quote", text: "النظافة هي أساس الصحة. من خلال الاستثمار في التثقيف الصحي، نستثمر في مستقبل المجتمعات." },
          { type: "h2", text: "النتائج المتوقعة" },
          { type: "p", text: "تقليل حالات الأمراض المرتبطة بالمياه وتحسين جودة الحياة وزيادة الوعي بقضايا الصحة العامة." }
        ]
      }
    },
    date: "12 Avr 2026",
    image: "https://media.base44.com/images/public/69e4dee944caaeeee6d3530f/e1a078af2_generated_37e0f2c5.png",
    size: "medium"
  },
  {
    id: 5,
    translations: {
      fr: {
        title: "Accès à l'eau potable : nouveau forage",
        category: "Infrastructure",
        description: "Un nouveau puits a été creusé dans un village isolé, offrant l'accès à l'eau potable à plus de 500 habitants.",
        content: [
          { type: "p", text: "Un nouveau puits a été creusé avec succès dans le village isolé de Tidjine, marquant une étape importante dans nos efforts d'accès à l'eau potable." },
          { type: "h2", text: "Une infrastructure vitale" },
          { type: "p", text: "Ce puits offre l'accès à l'eau potable à plus de 500 habitants qui parcouraient auparavant plusieurs kilomètres pour trouver de l'eau." },
          { type: "p", text: "Le forage a été réalisé selon les normes techniques les plus exigeantes pour assurer la qualité et la durabilité de la ressource." },
          { type: "h2", text: "Impact sur la communauté" },
          { type: "p", text: "Réduction du temps consacré à la collecte d'eau, diminution des maladies hydriques, meilleure hygiène et qualité de vie améliorée pour toute la communauté." },
          { type: "quote", text: "L'accès à l'eau potable est un droit fondamental. Nous continuerons à étendre cette infrastructure aux villages qui en ont le plus besoin." },
          { type: "h2", text: "Prochaines étapes" },
          { type: "p", text: "Identification de 5 nouveaux sites pour des forages supplémentaires et mise en place d'un système de maintenance communautaire du puits." }
        ]
      },
      en: {
        title: "Access to Clean Water: New Well",
        category: "Infrastructure",
        description: "A new well was drilled in an isolated village, providing access to clean water to over 500 residents.",
        content: [
          { type: "p", text: "A new well was successfully drilled in the isolated village of Tidjine, marking an important milestone in our efforts to provide access to clean water." },
          { type: "h2", text: "A vital infrastructure" },
          { type: "p", text: "This well provides access to clean water to over 500 residents who previously had to travel several kilometers to find water." },
          { type: "p", text: "The drilling was carried out according to the most demanding technical standards to ensure the quality and durability of the resource." },
          { type: "h2", text: "Impact on the community" },
          { type: "p", text: "Reduction in time spent collecting water, decreased water-related diseases, improved hygiene, and better quality of life for the entire community." },
          { type: "quote", text: "Access to clean water is a fundamental right. We will continue to extend this infrastructure to villages that need it most." },
          { type: "h2", text: "Next steps" },
          { type: "p", text: "Identification of 5 new sites for additional wells and establishment of a community-based well maintenance system." }
        ]
      },
      ar: {
        title: "الوصول إلى المياه النقية: بئر جديد",
        category: "البنية التحتية",
        description: "تم حفر بئر جديد في قرية نائية، مما يوفر الوصول إلى المياه النقية لأكثر من 500 نسمة.",
        content: [
          { type: "p", text: "تم حفر بئر جديد بنجاح في قرية تيجين النائية، مما يمثل علامة فارقة مهمة في جهودنا لتوفير الوصول إلى المياه النقية." },
          { type: "h2", text: "بنية تحتية حيوية" },
          { type: "p", text: "يوفر هذا البئر الوصول إلى المياه النقية لأكثر من 500 نسمة كانوا يضطرون سابقاً للسفر عدة كيلومترات للعثور على الماء." },
          { type: "p", text: "تم إجراء الحفر وفقاً لأكثر المعايير التقنية صرامة لضمان جودة واستدامة المورد." },
          { type: "h2", text: "التأثير على المجتمع" },
          { type: "p", text: "تقليل الوقت المستغرق في جمع المياه وتقليل الأمراض المرتبطة بالمياه وتحسين النظافة وتحسين جودة الحياة لجميع أفراد المجتمع." },
          { type: "quote", text: "الوصول إلى المياه النقية حق أساسي. سنواصل توسيع هذه البنية التحتية إلى القرى التي تحتاجها أكثر." },
          { type: "h2", text: "الخطوات القادمة" },
          { type: "p", text: "تحديد 5 مواقع جديدة للحفر الإضافي وإنشاء نظام صيانة المياه بقيادة المجتمع المحلي." }
        ]
      }
    },
    date: "10 Avr 2026",
    image: "https://media.base44.com/images/public/69e4dee944caaeeee6d3530f/ccdc3f328_generated_e6083ccb.png",
    size: "small"
  },
  {
    id: 6,
    translations: {
      fr: {
        title: "Partenariat avec une ONG internationale",
        category: "Partenariats",
        description: "La SNPE signe un accord de collaboration avec une ONG internationale pour renforcer ses capacités d'intervention.",
        content: [
          { type: "p", text: "La SNPE a signé un accord stratégique de partenariat avec une organisation internationale de renom. Cette collaboration marque une étape importante dans l'expansion de nos capacités." },
          { type: "h2", text: "Un partenariat stratégique" },
          { type: "p", text: "Cet accord permet à la SNPE de bénéficier d'expertise technique, de formation professionnelle et d'un accès à des ressources financières supplémentaires." },
          { type: "p", text: "Le partenariat couvre des domaines clés : protection de l'enfance, aide alimentaire, accès à l'eau et sensibilisation sanitaire." },
          { type: "h2", text: "Objectifs communs" },
          { type: "p", text: "Améliorer l'impact des interventions humanitaires, renforcer les capacités locales, et contribuer au développement durable du Tchad." },
          { type: "quote", text: "Ce partenariat renforce notre capacité à servir les populations les plus vulnérables. Ensemble, nous pouvons accomplir bien plus." },
          { type: "h2", text: "Prochaines étapes" },
          { type: "p", text: "Mise en place de structures de coordination conjointe et lancement de programmes pilotes dans 3 régions du Tchad." }
        ]
      },
      en: {
        title: "Partnership with International NGO",
        category: "Partnerships",
        description: "SNPE signs a collaboration agreement with an international NGO to strengthen its intervention capacity.",
        content: [
          { type: "p", text: "SNPE signed a strategic partnership agreement with a renowned international organization. This collaboration marks an important milestone in the expansion of our capabilities." },
          { type: "h2", text: "A strategic partnership" },
          { type: "p", text: "This agreement allows SNPE to benefit from technical expertise, professional training, and access to additional financial resources." },
          { type: "p", text: "The partnership covers key areas: child protection, food aid, water access, and health awareness." },
          { type: "h2", text: "Common objectives" },
          { type: "p", text: "Improve the impact of humanitarian interventions, strengthen local capacities, and contribute to sustainable development in Chad." },
          { type: "quote", text: "This partnership strengthens our capacity to serve the most vulnerable populations. Together, we can accomplish much more." },
          { type: "h2", text: "Next steps" },
          { type: "p", text: "Establishment of joint coordination structures and launch of pilot programs in 3 regions of Chad." }
        ]
      },
      ar: {
        title: "شراكة مع منظمة غير حكومية دولية",
        category: "الشراكات",
        description: "توقع SNPE على اتفاق تعاون مع منظمة غير حكومية دولية لتعزيز قدرتها على التدخل.",
        content: [
          { type: "p", text: "وقعت SNPE اتفاق شراكة استراتيجي مع منظمة دولية مرموقة. تمثل هذه الشراكة علامة فارقة مهمة في توسع قدراتنا." },
          { type: "h2", text: "شراكة استراتيجية" },
          { type: "p", text: "يسمح هذا الاتفاق لـ SNPE بالاستفادة من الخبرة التقنية والتدريب المهني والوصول إلى موارد مالية إضافية." },
          { type: "p", text: "تغطي الشراكة المجالات الرئيسية: حماية الطفولة والمساعدات الغذائية والوصول إلى المياه والتوعية الصحية." },
          { type: "h2", text: "الأهداف المشتركة" },
          { type: "p", text: "تحسين تأثير التدخلات الإنسانية وتعزيز القدرات المحلية والمساهمة في التنمية المستدامة في تشاد." },
          { type: "quote", text: "تعزز هذه الشراكة قدرتنا على خدمة أكثر السكان ضعفاً. معاً، يمكننا تحقيق الكثير." },
          { type: "h2", text: "الخطوات القادمة" },
          { type: "p", text: "إنشاء هياكل تنسيق مشتركة وإطلاق برامج تجريبية في 3 مناطق من تشاد." }
        ]
      }
    },
    date: "8 Avr 2026",
    image: "https://media.base44.com/images/public/69e4dee944caaeeee6d3530f/72035bdc8_generated_aeb9bfba.png",
    size: "small"
  }
];

export const gameModes = [
  {
    id: "urgence",
    translations: {
      fr: { name: "Aide d'urgence", description: "Apporter une réponse immédiate aux populations en détresse lors de crises humanitaires ou de catastrophes naturelles." },
      en: { name: "Emergency Aid", description: "Provide immediate response to populations in distress during humanitarian crises or natural disasters." },
      ar: { name: "المساعدة الطارئة", description: "تقديم استجابة فورية للسكان في حالة ضيق أثناء الأزمات الإنسانية أو الكوارث الطبيعية." }
    },
    image: "https://media.base44.com/images/public/69e4dee944caaeeee6d3530f/ccdc3f328_generated_e6083ccb.png"
  },
  {
    id: "enfance",
    translations: {
      fr: { name: "Protection de l'enfance", description: "Promouvoir la protection, le bien-être et les droits des enfants vulnérables à travers des actions concrètes et durables." },
      en: { name: "Child Protection", description: "Promote protection, well-being and rights of vulnerable children through concrete and sustainable actions." },
      ar: { name: "حماية الطفولة", description: "تعزيز حماية ورفاهية وحقوق الأطفال الضعفاء من خلال إجراءات ملموسة ومستدامة." }
    },
    image: "https://media.base44.com/images/public/69e4dee944caaeeee6d3530f/1af85aec4_generated_48fb3af2.png"
  },
  {
    id: "developpement",
    translations: {
      fr: { name: "Développement social", description: "Contribuer activement au développement social et à la réduction des inégalités dans les communautés du Tchad." },
      en: { name: "Social Development", description: "Actively contribute to social development and reduction of inequalities in Chad's communities." },
      ar: { name: "التنمية الاجتماعية", description: "المساهمة بنشاط في التنمية الاجتماعية وتقليل عدم المساواة في مجتمعات تشاد." }
    },
    image: "https://media.base44.com/images/public/69e4dee944caaeeee6d3530f/e1a078af2_generated_37e0f2c5.png"
  }
];