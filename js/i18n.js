/* ============================================================
   Technologies Budgie — i18n (EN / FR)
   ============================================================ */

const TRANSLATIONS = {
  en: {
    'nav.home':'Home','nav.products':'Products','nav.services':'Services','nav.about':'About','nav.contact':'Contact','nav.preorder':'Pre-order',
    'hero.status':'Pre-order phase — join the waitlist','hero.title1':'We Build','hero.title2':'What Matters.',
    'hero.sub':'Technologies Budgie builds software, tools, and hardware solutions for individuals and organizations. From disk utilities to enterprise deployments — we cover the stack.',
    'hero.cta1':'Reserve Your Spot','hero.cta2':'Explore Products','hero.trust1':'Open Source','hero.trust2':'Privacy First','hero.trust3':'Built to Last',
    'section.what':'What We Do','what.title':'Full-spectrum technology company.',
    'what.sub':'From repairing your hardware to building cloud-scale software — Technologies Budgie covers the entire technology lifecycle for individuals and enterprises alike.',
    'card1.title':'Software Products','card1.body':'Polished, open-source software built for real users — individuals and organizations alike. Reliable tools you can inspect, modify, and trust.',
    'card2.title':'Hardware & Repair','card2.body':'Professional hardware repair for consumers and businesses. We fix what others won\'t, and are building our own hardware products.',
    'card3.title':'Open Source First','card3.body':'Our software is open by default — community-driven, auditable, and free to use. Enterprise support contracts available for organizations that need them.',
    'card4.title':'Systems & Developer Tools','card4.body':'Low-level utilities and developer tooling. Currently shipping DiskParted, with LogDock and Forge Suite in the pipeline.',
    'card5.title':'Cross-Platform Apps','card5.body':'Desktop applications that work on Linux, Windows, and macOS — built with modern stacks, designed for anyone who uses a computer.',
    'card6.title':'Cloud — On the Roadmap','card6.body':'Cloud infrastructure and managed services are planned for a future phase. Building the right foundations first.',
    'featured.label':'Featured Project','featured.title1':'DiskParted —','featured.title2':'Disk management, rethought.',
    'featured.body':'A modern, open-source disk partitioning and management utility. Clean interface, full GPT/MBR support, designed for both power users and everyday users. Available under GPLv3.',
    'featured.cta1':'Learn More','featured.cta2':'View on Codeberg',
    'cta.label':'Limited Pre-order','cta.title1':'Shape the future','cta.title2':'with us.',
    'cta.body':'We\'re currently in our market study & pre-order phase. Join early to get priority access, exclusive pricing, and direct input into what we build.',
    'cta.btn1':'Join the Waitlist','cta.btn2':'Get in Touch',
    'footer.desc':'Engineering robust, open, and user-centric technology solutions — from embedded systems to cloud services.',
    'footer.company':'Company','footer.products':'Products','footer.services':'Services','footer.about':'About Us','footer.mission':'Mission',
    'footer.roadmap':'Roadmap','footer.contact':'Contact','footer.all-products':'All Products','footer.preorder':'Pre-order',
    'footer.all-services':'All Services','footer.repair':'Hardware Repair','footer.support':'Enterprise Support','footer.consulting':'Consulting',
    'footer.copy':'© 2024 Technologies Budgie. All rights reserved.','footer.privacy':'Privacy','footer.terms':'Terms','footer.opensource':'Open Source',
    'badge.active':'Active','badge.soon':'Coming Soon','badge.roadmap':'Roadmap','badge.dev':'In Development','badge.preorder':'Pre-order Phase',
    'status.preorder':'Pre-order phase — join the waitlist',
    // About
    'about.hero.label':'About Us','about.hero.title':'A technology company','about.hero.title2':'built differently.',
    'about.hero.sub':'Technologies Budgie was founded on the belief that software should be honest, open, and built to last — not designed to lock you in.',
    'about.mission.label':'Our Mission','about.mission.title':'Technology for everyone.','about.mission.title2':'No compromises.',
    'about.mission.p1':'We started Technologies Budgie to build the software and tools we wished existed — low-level, reliable, open-source, and designed for real people, not just enterprise procurement teams.',
    'about.mission.p2':'Our approach spans the entire technology stack: from repairing physical hardware, to building systems-level utilities, to delivering enterprise-grade software suites. Eventually, cloud. We move deliberately, ship quality, and keep our code open whenever possible.',
    'about.badge1':'Open Source First','about.badge2':'Privacy Respecting','about.badge3':'Performance Obsessed',
    'about.stat1.label':'Open Source commitment','about.stat2.label':'Security track record','about.stat3.label':'Software · Hardware · Cloud',
    'about.roadmap.label':'Roadmap','about.roadmap.title':'Where we\'re going.','about.roadmap.sub':'We\'re transparent about our plans. Here\'s what we\'re building and when.',
    'about.timeline1.date':'2024 — Now','about.timeline1.title':'Foundation Phase','about.timeline1.body':'Company formation, DiskParted development and release (GPLv3), market study, pre-order phase launch. Building the core team and technology foundations.',
    'about.timeline2.date':'2025 — Q1/Q2','about.timeline2.title':'Expanding the Suite','about.timeline2.body':'LogDock and Forge Suite development in progress. Hardware repair services launch. Initial enterprise support contracts open with select partners.',
    'about.timeline3.date':'2025 — Q3/Q4','about.timeline3.title':'Hardware & Scale','about.timeline3.body':'Proprietary hardware products announced. Geographic expansion of repair services. LogDock and Forge Suite reach general availability.',
    'about.timeline4.date':'2026+','about.timeline4.title':'Cloud & Infrastructure','about.timeline4.body':'Technologies Budgie Cloud: managed infrastructure, deployment services, and a developer platform. Full-stack technology company, individual to enterprise.',
    'about.values.label':'Our Values','about.values.title':'What we stand for.',
    'about.value1.title':'Openness','about.value1.body':'We default to open source. Our code is readable, auditable, and community-driven wherever possible.',
    'about.value2.title':'Privacy','about.value2.body':'We build tools that respect your data. No telemetry without consent. No lock-in by design.',
    'about.value3.title':'Quality','about.value3.body':'We ship when it\'s ready, not when it\'s scheduled. Every product goes out the door properly tested and documented.',
    // Products
    'products.hero.label':'Our Products','products.hero.title':'Built to last.','products.hero.title2':'Open by default.',
    'products.hero.sub':'Every product we build starts from a real need. No bloat, no lock-in — just software and tools that work.',
    'products.dp.tagline':'Disk partitioning and management utility',
    'products.dp.body':'A modern, open-source disk partitioning and management utility designed for everyone — from power users to those who just need a clean interface to manage their drives. Full GPT and MBR support, UEFI-aware, cross-platform. No telemetry, no lock-in. Licensed under GPLv3.',
    'products.dp.cta1':'View on Codeberg','products.dp.cta2':'Get Notified of Updates','products.dp.badge':'Available',
    'products.ld.tagline':'Structured log management and viewer',
    'products.ld.body':'LogDock is a structured log management and viewer for developers, sysadmins, and power users. Real-time log tailing, filtering, and search across local files and remote sources — with a clean, fast interface built for daily use.',
    'products.ld.cta1':'Join Waitlist','products.ld.badge':'In Development',
    'products.fs.tagline':'Developer and productivity toolkit',
    'products.fs.body':'Forge Suite is a developer and productivity toolkit — a cohesive set of tools that work together or standalone. More details coming as development progresses. Built for people who work in and around software, regardless of role or team size.',
    'products.fs.cta1':'Join Waitlist','products.fs.cta2':'Express Interest','products.fs.badge':'In Development',
    'products.hw.tagline':'In-house hardware — on the roadmap',
    'products.hw.body':'Technologies Budgie is developing proprietary hardware products for both personal and professional use. Details will be announced in a future phase. Join the waitlist to be among the first to know.',
    'products.hw.cta1':'Get Notified','products.hw.badge':'Roadmap',
    // Services
    'services.hero.label':'Our Services','services.hero.title':'Expert help,','services.hero.title2':'end to end.',
    'services.hero.sub':'Whether it\'s a broken laptop or a critical software deployment, Technologies Budgie provides hands-on professional services for individuals and enterprises.',
    'services.hw.label':'Hardware Services','services.hw.title':'Repair & Recovery','services.hw.sub':'Professional hardware repair services for consumers and businesses. We fix what\'s broken, recover what\'s lost, and advise on what to build next.',
    'services.repair.title':'Hardware Repair','services.repair.body':'Component-level diagnosis and repair for laptops, desktops, and workstations — for individuals and businesses alike. We go beyond surface-level fixes.',
    'services.dr.title':'Data Recovery','services.dr.body':'Failed drives, corrupted filesystems, accidental deletions — we recover data that others can\'t, for home users and organizations.',
    'services.sw.title':'Software Repair','services.sw.body':'OS reinstallation, driver conflicts, boot issues, and general system troubleshooting for Linux, Windows, and macOS — no matter who you are.',
    'services.upg.title':'Hardware Upgrades','services.upg.body':'RAM, storage, and component upgrades to get more life out of your existing machine. Sourced, tested, installed.',
    'services.ent.label':'Enterprise Services','services.ent.title':'Software & Support','services.ent.sub':'Enterprise-grade software support, deployment services, and custom development for organizations that need more than a ticket system.',
    'services.sla.title':'Support Contracts','services.sla.body':'Priority support for organizations using Technologies Budgie products or open-source tools we maintain. SLA-backed, real humans.',
    'services.con.title':'Consulting','services.con.body':'Technical consulting for infrastructure, software architecture, open-source strategy, and Linux or systems migration — for teams of any size.',
    'services.dev.title':'Custom Development','services.dev.body':'Need something built? We take on custom software projects in our areas of expertise — systems software, desktop apps, and open-source tooling.',
    'services.cloud.title':'Cloud — On the Roadmap','services.cloud.body':'Managed cloud infrastructure and deployment services are planned for a future phase. Express interest to be notified when this opens.',
    'services.cloud.cta':'Express Interest',
    'services.cta.title':'Ready to get started?','services.cta.sub':'Reach out and tell us about your project or repair needs. We\'ll get back to you within 24 hours.','services.cta.btn':'Contact Us',
    // Contact
    'contact.hero.label':'Get In Touch','contact.hero.title':'Let\'s build','contact.hero.title2':'something together.',
    'contact.hero.sub':'Have a project in mind, need a repair, or want to learn more? We respond to every inquiry within 24 hours.',
    'contact.info.email':'Email','contact.info.response':'Response Time','contact.info.respval':'Within 24 hours',
    'contact.info.ops':'Operations','contact.info.opsval':'Currently remote & online','contact.info.oss':'Open Source',
    'contact.phase.body':'We\'re currently in our market study and pre-order phase. Your message helps us understand what to build first.',
    'contact.phase.cta':'Join the Waitlist →',
    'contact.form.title':'Send us a message','contact.form.sub':'Fill out the form below and we\'ll get back to you as soon as possible.',
    'contact.form.fname':'First Name','contact.form.lname':'Last Name','contact.form.email':'Email Address',
    'contact.form.subject':'Subject','contact.form.message':'Message','contact.form.submit':'Send Message',
    // Preorder
    'preorder.status':'Limited Early Access','preorder.title1':'Be first.','preorder.title2':'Shape what we build.',
    'preorder.sub':'Join the Technologies Budgie waitlist during our pre-order phase. Early members get priority access, exclusive pricing, and a direct line to our product roadmap.',
    'preorder.f1.title':'Priority Access','preorder.f1.body':'First in line when products launch. No waiting, no queues — you get access before the public.',
    'preorder.f2.title':'Early Pricing','preorder.f2.body':'Pre-order members lock in launch-day pricing. No price increases once you\'re in.',
    'preorder.f3.title':'Shape the Product','preorder.f3.body':'Your feedback directly influences what we prioritize. This is a real market study — your voice matters.',
    'preorder.form.title':'Join the Waitlist','preorder.form.sub':'No payment required. We\'ll notify you with updates and give you early access when we\'re ready.',
    'preorder.form.fname':'First Name','preorder.form.lname':'Last Name','preorder.form.email':'Email Address',
    'preorder.form.interest':'I\'m interested in…','preorder.form.context':'Tell us about your use case (optional)',
    'preorder.form.submit':'Reserve My Spot','preorder.form.note':'No spam. No payment. Unsubscribe any time.',
  },

  fr: {
    'nav.home':'Accueil','nav.products':'Produits','nav.services':'Services','nav.about':'À propos','nav.contact':'Contact','nav.preorder':'Précommande',
    'hero.status':'Phase de précommande — rejoignez la liste d\'attente','hero.title1':'Nous Construisons','hero.title2':'Ce Qui Compte.',
    'hero.sub':'Technologies Budgie développe des logiciels, des outils et des solutions matérielles pour les particuliers et les organisations. Des utilitaires disque aux déploiements d\'entreprise — nous couvrons tout!',
    'hero.cta1':'Réserver une place','hero.cta2':'Voir les produits','hero.trust1':'Open Source','hero.trust2':'Respect de la vie privée','hero.trust3':'Construit pour durer',
    'section.what':'Ce que nous faisons','what.title':'Une entreprise technologique complète.',
    'what.sub':'De la réparation de votre matériel au développement de logiciels à grande échelle — Technologies Budgie couvre l\'ensemble du cycle de vie technologique pour les particuliers et les entreprises.',
    'card1.title':'Logiciels','card1.body':'Des logiciels open source soignés, conçus pour de vrais utilisateurs — particuliers et organisations. Des outils fiables que vous pouvez inspecter, modifier et auxquels faire confiance.',
    'card2.title':'Matériel & Réparation','card2.body':'Services de réparation matérielle professionnels pour les consommateurs et les entreprises. Nous réparons ce que d\'autres ne font pas, et développons nos propres produits matériels.',
    'card3.title':'Open Source par défaut','card3.body':'Nos logiciels sont ouverts par défaut — communautaires, auditables et gratuits. Des contrats de support entreprise sont disponibles pour les organisations qui en ont besoin.',
    'card4.title':'Outils systèmes & développeur','card4.body':'Utilitaires bas niveau et outils de développement. DiskParted est disponible maintenant, avec LogDock et Forge Suite en développement.',
    'card5.title':'Applications multiplatformes','card5.body':'Des applications de bureau qui fonctionnent sous Linux, Windows et macOS — construites avec des technologies modernes, conçues pour tout le monde.',
    'card6.title':'Cloud — En préparation','card6.body':'L\'infrastructure cloud et les services gérés sont prévus pour une phase future. On construit les bonnes fondations d\'abord.',
    'featured.label':'Projet vedette','featured.title1':'DiskParted —','featured.title2':'La gestion de disque, repensée.',
    'featured.body':'Un utilitaire moderne de partitionnement et de gestion de disque open source. Interface claire, support GPT/MBR complet, conçu pour les utilisateurs avancés comme pour les débutants. Disponible sous GPLv3.',
    'featured.cta1':'En savoir plus','featured.cta2':'Voir sur Codeberg',
    'cta.label':'Précommande limitée','cta.title1':'Participez à la construction','cta.title2':'de l\'avenir.',
    'cta.body':'Nous sommes actuellement en phase d\'étude de marché et de précommande. Rejoignez-nous tôt pour obtenir un accès prioritaire, des tarifs exclusifs, et une influence directe sur ce que nous construisons.',
    'cta.btn1':'Rejoindre la liste d\'attente','cta.btn2':'Nous contacter',
    'footer.desc':'Nous concevons des solutions technologiques robustes, ouvertes et centrées sur l\'utilisateur — des systèmes embarqués aux services cloud.',
    'footer.company':'Entreprise','footer.products':'Produits','footer.services':'Services','footer.about':'À propos','footer.mission':'Mission',
    'footer.roadmap':'Feuille de route','footer.contact':'Contact','footer.all-products':'Tous les produits','footer.preorder':'Précommande',
    'footer.all-services':'Tous les services','footer.repair':'Réparation matérielle','footer.support':'Support entreprise','footer.consulting':'Conseil',
    'footer.copy':'© 2024 Technologies Budgie. Tous droits réservés.','footer.privacy':'Confidentialité','footer.terms':'Conditions','footer.opensource':'Open Source',
    'badge.active':'Actif','badge.soon':'Bientôt disponible','badge.roadmap':'Feuille de route','badge.dev':'En développement','badge.preorder':'Phase de précommande',
    'status.preorder':'Phase de précommande — rejoignez la liste d\'attente',
    // About
    'about.hero.label':'À propos','about.hero.title':'Une entreprise technologique','about.hero.title2':'construite différemment.',
    'about.hero.sub':'Technologies Budgie a été fondée sur la conviction que les logiciels doivent être honnêtes, ouverts et conçus pour durer — et non pour vous enfermer.',
    'about.mission.label':'Notre mission','about.mission.title':'La technologie pour tous.','about.mission.title2':'Sans compromis.',
    'about.mission.p1':'Nous avons fondé Technologies Budgie pour créer les logiciels et les outils que nous aurions voulu voir exister — bas niveau, fiables, open source, et conçus pour de vraies personnes, pas seulement pour les équipes d\'approvisionnement d\'entreprise.',
    'about.mission.p2':'Notre approche couvre l\'ensemble de la pile technologique : de la réparation de matériel physique à la création d\'utilitaires systèmes, en passant par la livraison de suites logicielles de niveau entreprise. Le cloud viendra ensuite. Nous avançons délibérément, livrons de la qualité et gardons notre code ouvert autant que possible.',
    'about.badge1':'Open Source en priorité','about.badge2':'Respect de la vie privée','about.badge3':'Obsédés par la performance',
    'about.stat1.label':'Engagement open source','about.stat2.label':'Bilan de sécurité','about.stat3.label':'Logiciel · Matériel · Cloud',
    'about.roadmap.label':'Feuille de route','about.roadmap.title':'Où nous allons.','about.roadmap.sub':'Nous sommes transparents sur nos plans. Voici ce que nous construisons et quand.',
    'about.timeline1.date':'2024 — Maintenant','about.timeline1.title':'Phase de fondation','about.timeline1.body':'Création de l\'entreprise, développement et publication de DiskParted (GPLv3), étude de marché, lancement de la phase de précommande. Construction de l\'équipe principale et des bases technologiques.',
    'about.timeline2.date':'2025 — T1/T2','about.timeline2.title':'Élargissement de la suite','about.timeline2.body':'Développement de LogDock et Forge Suite en cours. Lancement des services de réparation matérielle. Premiers contrats de support entreprise avec des partenaires sélectionnés.',
    'about.timeline3.date':'2025 — T3/T4','about.timeline3.title':'Matériel & Expansion','about.timeline3.body':'Annonce des produits matériels propriétaires. Expansion géographique des services de réparation. LogDock et Forge Suite en disponibilité générale.',
    'about.timeline4.date':'2026+','about.timeline4.title':'Cloud & Infrastructure','about.timeline4.body':'Technologies Budgie Cloud : infrastructure gérée, services de déploiement et une plateforme développeur. Entreprise technologique complète, du particulier à l\'entreprise.',
    'about.values.label':'Nos valeurs','about.values.title':'Ce en quoi nous croyons.',
    'about.value1.title':'Ouverture','about.value1.body':'Nous privilégions l\'open source par défaut. Notre code est lisible, auditable et piloté par la communauté dans la mesure du possible.',
    'about.value2.title':'Vie privée','about.value2.body':'Nous construisons des outils qui respectent vos données. Pas de télémétrie sans consentement. Pas d\'enfermement propriétaire.',
    'about.value3.title':'Qualité','about.value3.body':'Nous livrons quand c\'est prêt, pas quand c\'est planifié. Chaque produit est correctement testé et documenté avant d\'être publié.',
    // Products
    'products.hero.label':'Nos produits','products.hero.title':'Conçu pour durer.','products.hero.title2':'Open source par défaut.',
    'products.hero.sub':'Chaque produit que nous créons répond à un vrai besoin. Pas de superflu, pas d\'enfermement — juste des logiciels et des outils qui fonctionnent.',
    'products.dp.tagline':'Utilitaire de partitionnement et de gestion de disque',
    'products.dp.body':'Un utilitaire moderne et open source de partitionnement et de gestion de disque, conçu pour tous — des utilisateurs avancés à ceux qui ont simplement besoin d\'une interface claire pour gérer leurs disques. Support complet GPT et MBR, compatible UEFI, multiplateforme. Pas de télémétrie, pas d\'enfermement. Sous licence GPLv3.',
    'products.dp.cta1':'Voir sur Codeberg','products.dp.cta2':'Être notifié des mises à jour','products.dp.badge':'Disponible',
    'products.ld.tagline':'Gestion et visualisation de journaux structurés',
    'products.ld.body':'LogDock est un gestionnaire et visualiseur de journaux structurés pour les développeurs, administrateurs système et utilisateurs avancés. Suivi en temps réel, filtrage et recherche dans des fichiers locaux et distants — avec une interface claire et rapide conçue pour un usage quotidien.',
    'products.ld.cta1':'Rejoindre la liste d\'attente','products.ld.badge':'En développement',
    'products.fs.tagline':'Suite d\'outils développeur et productivité',
    'products.fs.body':'Forge Suite est une boîte à outils pour développeurs et la productivité — un ensemble cohérent d\'outils qui fonctionnent ensemble ou séparément. Plus de détails à venir au fil du développement. Conçu pour ceux qui travaillent dans et autour des logiciels, quel que soit leur rôle ou la taille de leur équipe.',
    'products.fs.cta1':'Rejoindre la liste d\'attente','products.fs.cta2':'Exprimer son intérêt','products.fs.badge':'En développement',
    'products.hw.tagline':'Matériel propriétaire — en feuille de route',
    'products.hw.body':'Technologies Budgie développe des produits matériels propriétaires pour un usage personnel et professionnel. Les détails seront annoncés lors d\'une phase future. Rejoignez la liste d\'attente pour être parmi les premiers informés.',
    'products.hw.cta1':'Être notifié','products.hw.badge':'Feuille de route',
    // Services
    'services.hero.label':'Nos services','services.hero.title':'Une expertise complète,','services.hero.title2':'de bout en bout.',
    'services.hero.sub':'Qu\'il s\'agisse d\'un ordinateur portable cassé ou d\'un déploiement logiciel critique, Technologies Budgie offre des services professionnels sur le terrain pour les particuliers et les entreprises.',
    'services.hw.label':'Services matériels','services.hw.title':'Réparation & Récupération','services.hw.sub':'Services de réparation matérielle professionnels pour les consommateurs et les entreprises. Nous réparons ce qui est cassé, récupérons ce qui est perdu et conseillons sur la suite.',
    'services.repair.title':'Réparation matérielle','services.repair.body':'Diagnostic et réparation au niveau des composants pour ordinateurs portables, fixes et stations de travail — pour les particuliers et les entreprises. Nous allons au-delà des réparations superficielles.',
    'services.dr.title':'Récupération de données','services.dr.body':'Disques défaillants, systèmes de fichiers corrompus, suppressions accidentelles — nous récupérons des données que d\'autres ne peuvent pas, pour les particuliers et les organisations.',
    'services.sw.title':'Réparation logicielle','services.sw.body':'Réinstallation de système d\'exploitation, conflits de pilotes, problèmes de démarrage et dépannage général pour Linux, Windows et macOS — peu importe qui vous êtes.',
    'services.upg.title':'Mises à niveau matérielles','services.upg.body':'Mises à niveau de RAM, stockage et composants pour prolonger la vie de votre machine existante. Sourcé, testé, installé.',
    'services.ent.label':'Services entreprise','services.ent.title':'Logiciels & Support','services.ent.sub':'Support logiciel de niveau entreprise, services de déploiement et développement sur mesure pour les organisations qui ont besoin de plus qu\'un système de tickets.',
    'services.sla.title':'Contrats de support','services.sla.body':'Support prioritaire pour les organisations utilisant les produits Technologies Budgie ou les outils open source que nous maintenons. Avec SLA, de vraies personnes.',
    'services.con.title':'Conseil','services.con.body':'Conseil technique pour l\'infrastructure, l\'architecture logicielle, la stratégie open source et la migration Linux ou systèmes — pour des équipes de toute taille.',
    'services.dev.title':'Développement sur mesure','services.dev.body':'Besoin de quelque chose de spécifique ? Nous prenons en charge des projets logiciels sur mesure dans nos domaines d\'expertise — logiciels systèmes, applications de bureau et outils open source.',
    'services.cloud.title':'Cloud — En feuille de route','services.cloud.body':'L\'infrastructure cloud gérée et les services de déploiement sont prévus pour une phase future. Exprimez votre intérêt pour être notifié à l\'ouverture.',
    'services.cloud.cta':'Exprimer son intérêt',
    'services.cta.title':'Prêt à démarrer ?','services.cta.sub':'Contactez-nous pour nous parler de votre projet ou de vos besoins en réparation. Nous vous répondrons dans les 24 heures.','services.cta.btn':'Nous contacter',
    // Contact
    'contact.hero.label':'Nous contacter','contact.hero.title':'Construisons','contact.hero.title2':'quelque chose ensemble.',
    'contact.hero.sub':'Vous avez un projet en tête, besoin d\'une réparation ou souhaitez en savoir plus ? Nous répondons à chaque demande dans les 24 heures.',
    'contact.info.email':'E-mail','contact.info.response':'Délai de réponse','contact.info.respval':'Dans les 24 heures',
    'contact.info.ops':'Opérations','contact.info.opsval':'Actuellement à distance et en ligne','contact.info.oss':'Open Source',
    'contact.phase.body':'Nous sommes actuellement en phase d\'étude de marché et de précommande. Votre message nous aide à comprendre ce qu\'il faut construire en premier.',
    'contact.phase.cta':'Rejoindre la liste d\'attente →',
    'contact.form.title':'Envoyez-nous un message','contact.form.sub':'Remplissez le formulaire ci-dessous et nous vous répondrons dès que possible.',
    'contact.form.fname':'Prénom','contact.form.lname':'Nom','contact.form.email':'Adresse e-mail',
    'contact.form.subject':'Sujet','contact.form.message':'Message','contact.form.submit':'Envoyer le message',
    // Preorder
    'preorder.status':'Accès anticipé limité','preorder.title1':'Soyez parmi les premiers.','preorder.title2':'Influencez ce que nous construisons.',
    'preorder.sub':'Rejoignez la liste d\'attente de Technologies Budgie pendant notre phase de précommande. Les membres anticipés obtiennent un accès prioritaire, des tarifs exclusifs et un lien direct avec notre feuille de route produit.',
    'preorder.f1.title':'Accès prioritaire','preorder.f1.body':'En tête de liste au lancement des produits. Pas d\'attente, pas de files — vous obtenez l\'accès avant le grand public.',
    'preorder.f2.title':'Tarif anticipé','preorder.f2.body':'Les membres en précommande bénéficient du tarif de lancement. Pas d\'augmentation de prix une fois inscrit.',
    'preorder.f3.title':'Façonnez le produit','preorder.f3.body':'Vos retours influencent directement nos priorités. C\'est une vraie étude de marché — votre voix compte.',
    'preorder.form.title':'Rejoindre la liste d\'attente','preorder.form.sub':'Aucun paiement requis. Nous vous notifierons des mises à jour et vous donnerons un accès anticipé quand nous serons prêts.',
    'preorder.form.fname':'Prénom','preorder.form.lname':'Nom','preorder.form.email':'Adresse e-mail',
    'preorder.form.interest':'Je suis intéressé par…','preorder.form.context':'Parlez-nous de votre cas d\'utilisation (optionnel)',
    'preorder.form.submit':'Réserver ma place','preorder.form.note':'Pas de spam. Pas de paiement. Désinscription à tout moment.',
  }
};

/* ── Cookie helpers ─────────────────────────────────────────── */
function setCookie(name, value, days) {
  const d = new Date();
  d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${d.toUTCString()};path=/;SameSite=Lax`;
}
function getCookie(name) {
  const v = document.cookie.split(';').map(c => c.trim());
  for (const c of v) {
    if (c.startsWith(name + '=')) return c.substring(name.length + 1);
  }
  return null;
}

/* ── Apply translations ─────────────────────────────────────── */
function applyLang(lang) {
  const t = TRANSLATIONS[lang] || TRANSLATIONS['en'];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = t[key];
      } else {
        el.innerHTML = t[key];
      }
    }
  });
  document.documentElement.lang = lang;
  const btn = document.getElementById('lang-toggle');
  if (btn) btn.textContent = lang === 'en' ? 'FR' : 'EN';
}

/* ── Init ───────────────────────────────────────────────────── */
function initI18n() {
  const saved = getCookie('tb_lang');
  const lang = (saved === 'fr' || saved === 'en') ? saved : 'en';
  applyLang(lang);

  const btn = document.getElementById('lang-toggle');
  if (!btn) return;
  btn.addEventListener('click', () => {
    const current = getCookie('tb_lang') || 'en';
    const next = current === 'en' ? 'fr' : 'en';
    setCookie('tb_lang', next, 365);
    applyLang(next);
  });
}

document.addEventListener('DOMContentLoaded', initI18n);
