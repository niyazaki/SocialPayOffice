// Internationalization Module
const translations = {
    en: {
        nav: {
            services: "Services",
            about: "About",
            contact: "Contact Us"
        },
        hero: {
            titleMain: "Professional Payroll Solutions",
            titleSub: "For Your Business",
            slogan: "Social Pay Office, efficiency and trust at the heart of your human resources.",
            description: "Expert social secretariat services designed for Belgian businesses. We handle your payroll, compliance, and HR administration so you can focus on growing your business.",
            btnExplore: "Explore Services",
            btnQuote: "Contact Us"
        },
        services: {
            tag: "What We Offer",
            title: "Our Services",
            description: "Comprehensive solutions for all your payroll and HR needs",
            payroll: {
                title: "Payroll Management",
                description: "Complete payroll processing, salary calculations, and payment administration for your employees",
                feature1: "Monthly salary processing",
                feature2: "Tax calculations & filing",
                feature3: "Social security declarations"
            },
            optimization: {
                title: "Salary Optimization",
                description: "Strategic advice to optimize your payroll costs while ensuring full compliance",
                feature1: "Cost analysis & reporting",
                feature2: "Tax efficiency strategies",
                feature3: "Benefits optimization"
            },
            legal: {
                title: "Legal Advice",
                description: "Expert guidance on employment law and social legislation in Belgium",
                feature1: "Employment contracts",
                feature2: "Regulatory compliance",
                feature3: "Dispute resolution"
            },
            hr: {
                title: "HR Tools",
                description: "Modern digital tools to streamline your HR processes and administration",
                feature1: "Employee portal access",
                feature2: "Time & attendance tracking",
                feature3: "Document management"
            },
            audits: {
                title: "Social Audits",
                description: "Comprehensive audits to ensure social compliance and minimize your risks",
                feature1: "Compliance verification",
                feature2: "Risk assessment",
                feature3: "Detailed audit reports"
            }
        },
        whyChoose: {
            tag: "Why Choose Us",
            title: "Your Trusted Partner",
            description: "We provide reliable, professional payroll services with a personal touch",
            feature1Title: "Expert Knowledge",
            feature1Desc: "Deep expertise in Belgian social legislation and payroll regulations",
            feature2Title: "Personal Service",
            feature2Desc: "Dedicated account manager for personalized support",
            feature3Title: "Full Compliance",
            feature3Desc: "100% compliance with Belgian social security and tax regulations",
            feature4Title: "Digital Solutions",
            feature4Desc: "Modern technology platform for easy access and transparency"
        },
        about: {
            tag: "About Us",
            title: "Who We Are",
            text: "With years of expertise in social secretariat services, we provide reliable and professional support to businesses of all sizes across Belgium. Our team of certified experts ensures your payroll and HR processes run smoothly and in full compliance with Belgian regulations. We combine traditional expertise with modern technology to deliver exceptional service at competitive prices."
        },
        contact: {
            tag: "Get In Touch",
            title: "Contact Us",
            description: "Ready to simplify your payroll? Get in touch today",
            locationTitle: "Office",
            locationText: "Brussels, Belgium",
            phoneTitle: "Phone",
            emailTitle: "Email",
            formFirstName: "First Name",
            formLastName: "Last Name",
            formCompany: "Company",
            formEmployees: "Number of Employees",
            formEmail: "Email",
            formPhone: "Phone Number",
            formMessage: "Your Message",
            formButton: "Send Message"
        },
        modal: {
            successTitle: "Message Sent!",
            successMessage: "Thank you for contacting us! We will get back to you within 24 hours.",
            errorTitle: "Oops!",
            errorMessage: "There was a problem submitting your form. Please check your connection and try again.",
            errorRetry: "Please try again or contact us directly.",
            verifying: "Verifying...",
            sending: "Sending...",
            closeButton: "Close"
        },
        footer: {
            description: "Professional payroll services for Belgian businesses. Reliable, compliant, and personal.",
            rights: "All rights reserved."
        },
        aboutPage: {
            hero: {
                title: "About Us",
                subtitle: "Social Pay Office, efficiency and trust at the heart of your human resources."
            },
            intro: {
                title: "Who We Are",
                text1: "Social Pay Office supports small and medium-sized businesses in the complete management of their payroll and human resources.",
                text2: "We offer personalized solutions that combine performance, compliance and peace of mind.",
                text3: "As a local partner, we handle all aspects related to payroll: calculations, declarations, legal and administrative monitoring. You benefit from automated, optimized payroll management that is always compliant with current legislation.",
                text4: "Our team of HR experts, with over 10 years of experience, also advises you on drafting employment contracts, implementing internal policies or alternative compensation systems.",
                text5: "Entrust us with managing your social obligations and focus on what you do best: growing your business."
            },
            servicesIntro: {
                title: "Our Services",
                description: "Comprehensive expertise for your payroll and HR management"
            },
            payrollDetail: {
                title: "Payroll Management",
                subtitle: "Benefit from complete support in payroll and administrative management",
                text1: "In any company, accurate payroll management and reliable personnel administration are essential for proper functioning and growth.",
                text2: "With Social Pay Office, you benefit from several years of expertise and know-how in HR management and personnel policy. Our approach is based on three principles: reliability, personalized support and proactivity, to offer you optimal payroll management.",
                text3: "With Social Pay Office, focus on the essentials — the development of your business — while we take care of your payroll and personnel administration."
            },
            optimizationDetail: {
                title: "Salary Optimization",
                text1: "At Social Pay Office, we support professionals and businesses in salary optimization. Our goal: maximize the value of your compensation while respecting legal and tax constraints.",
                text2: "Through a personalized approach, we analyze your overall situation and identify areas for improvement: bonuses, benefits in kind, employee savings, advantageous tax schemes... Each solution is designed to secure your financial future.",
                text3: "Salary optimization is not just about numbers: it's a strategy to better recognize talent, motivate teams and ensure efficient human resources management. Choose compensation adapted to your ambitions."
            },
            legalDetail: {
                title: "Legal Advice",
                text1: "In a constantly evolving social and legal environment, companies must face complex and often changing obligations. Specialized support is essential to prevent risks and ensure compliance with your practices.",
                text2: "At Social Pay Office, our team of experts provides you with personalized legal advice adapted to your organization. Whether for drafting contracts, managing labor relations, applying social legislation or preventing disputes, we help you make informed and secure decisions.",
                text3: "Thanks to our expertise, you benefit from rigorous and practical support, allowing you to focus your efforts on developing your business with complete peace of mind."
            },
            hrToolsDetail: {
                title: "HR Tools",
                text1: "Social Pay Office is a reliable partner, fully aware of the environment and needs of SMEs. For efficient and professional personnel management, we provide you with communication tools adapted to your company. Thanks to our simple and intuitive HR solutions, we contribute to the effective digitalization of your personnel administration.",
                text2: "E-Services is an intuitive HR tool that gives you a clear view of the essential aspects of your personnel management.",
                text3: "Prisma VPN offers a complete overview of payroll and personnel management for your SME. This powerful tool allows you to efficiently manage payroll calculations and legal declarations."
            },
            auditsDetail: {
                title: "Social Audits",
                text1: "Every company can be subject to a social inspection visit. In this case, it is crucial to provide complete and perfectly compliant documents. The inspection can also proceed to interview your employees, which makes rigorous preparation and reliable advice essential.",
                text2: "Our experts support you throughout the audit process to ensure full compliance and minimize risks."
            }
        }
    },
    fr: {
        nav: {
            services: "Services",
            about: "À propos",
            contact: "Contactez-nous"
        },
        hero: {
            titleMain: "Solutions Professionnelles de Paie",
            titleSub: "Pour Votre Entreprise",
            slogan: "Social Pay Office, l'efficacité et la confiance au cœur de vos ressources humaines.",
            description: "Services experts de secrétariat social conçus pour les entreprises belges. Nous gérons votre paie, votre conformité et votre administration RH afin que vous puissiez vous concentrer sur la croissance de votre entreprise.",
            btnExplore: "Découvrir nos Services",
            btnQuote: "Contactez-nous"
        },
        services: {
            tag: "Ce Que Nous Offrons",
            title: "Nos Services",
            description: "Solutions complètes pour tous vos besoins en paie et RH",
            payroll: {
                title: "Gestion des Salaires",
                description: "Traitement complet de la paie, calculs salariaux et administration des paiements pour vos employés",
                feature1: "Traitement mensuel des salaires",
                feature2: "Calculs et déclarations fiscales",
                feature3: "Déclarations de sécurité sociale"
            },
            optimization: {
                title: "Optimisation Salariale",
                description: "Conseils stratégiques pour optimiser vos coûts salariaux tout en garantissant une conformité totale",
                feature1: "Analyse et rapports de coûts",
                feature2: "Stratégies d'efficacité fiscale",
                feature3: "Optimisation des avantages"
            },
            legal: {
                title: "Conseils Juridiques",
                description: "Expertise en droit du travail et législation sociale en Belgique",
                feature1: "Contrats de travail",
                feature2: "Conformité réglementaire",
                feature3: "Résolution des litiges"
            },
            hr: {
                title: "Outils RH",
                description: "Outils numériques modernes pour rationaliser vos processus RH et votre administration",
                feature1: "Accès au portail employé",
                feature2: "Suivi du temps et présence",
                feature3: "Gestion documentaire"
            },
            audits: {
                title: "Contrôles Sociaux",
                description: "Audits complets pour garantir la conformité sociale et minimiser vos risques",
                feature1: "Vérification de conformité",
                feature2: "Évaluation des risques",
                feature3: "Rapports d'audit détaillés"
            }
        },
        whyChoose: {
            tag: "Pourquoi Nous Choisir",
            title: "Votre Partenaire de Confiance",
            description: "Nous fournissons des services de paie fiables et professionnels avec une touche personnelle",
            feature1Title: "Expertise Reconnue",
            feature1Desc: "Expertise approfondie de la législation sociale et de la réglementation salariale belge",
            feature2Title: "Service Personnalisé",
            feature2Desc: "Gestionnaire de compte dédié pour un soutien personnalisé",
            feature3Title: "Conformité Totale",
            feature3Desc: "100% de conformité avec les réglementations belges de sécurité sociale et fiscales",
            feature4Title: "Solutions Digitales",
            feature4Desc: "Plateforme technologique moderne pour un accès facile et une transparence totale"
        },
        about: {
            tag: "À Propos de Nous",
            title: "Qui Nous Sommes",
            text: "Avec des années d'expertise dans les services de secrétariat social, nous fournissons un soutien fiable et professionnel aux entreprises de toutes tailles en Belgique. Notre équipe d'experts certifiés garantit que vos processus de paie et RH fonctionnent de manière fluide et en totale conformité avec la réglementation belge. Nous combinons l'expertise traditionnelle avec la technologie moderne pour offrir un service exceptionnel à des prix compétitifs."
        },
        contact: {
            tag: "Contactez-Nous",
            title: "Nous Contacter",
            description: "Prêt à simplifier votre paie ? Contactez-nous dès aujourd'hui",
            locationTitle: "Bureau",
            locationText: "Bruxelles, Belgique",
            phoneTitle: "Téléphone",
            emailTitle: "E-mail",
            formFirstName: "Prénom",
            formLastName: "Nom",
            formCompany: "Entreprise",
            formEmployees: "Nombre d'employés",
            formEmail: "E-mail",
            formPhone: "Téléphone",
            formMessage: "Votre message",
            formButton: "Envoyer le Message"
        },
        modal: {
            successTitle: "Message Envoyé !",
            successMessage: "Merci de nous avoir contactés ! Nous vous répondrons dans les 24 heures.",
            errorTitle: "Oups !",
            errorMessage: "Un problème est survenu lors de l'envoi de votre formulaire. Veuillez vérifier votre connexion et réessayer.",
            errorRetry: "Veuillez réessayer ou nous contacter directement.",
            verifying: "Vérification...",
            sending: "Envoi...",
            closeButton: "Fermer"
        },
        footer: {
            description: "Services de paie professionnels pour les entreprises belges. Fiables, conformes et personnels.",
            rights: "Tous droits réservés."
        },
        aboutPage: {
            hero: {
                title: "À Propos de Nous",
                subtitle: "Social Pay Office, l'efficacité et la confiance au cœur de vos ressources humaines."
            },
            intro: {
                title: "Qui Nous Sommes",
                text1: "Social Pay Office accompagne les petites et moyennes entreprises dans la gestion complète de leurs salaires et de leurs ressources humaines.",
                text2: "Nous proposons des solutions personnalisées qui allient performance, conformité et tranquillité d'esprit.",
                text3: "En tant que partenaire de proximité, nous prenons en charge tous les aspects liés à la paie : calculs, déclarations, suivi juridique et administratif. Vous bénéficiez ainsi d'une gestion salariale automatisée, optimisée et toujours conforme à la législation en vigueur.",
                text4: "Notre équipe d'experts RH, forte de plus de 10 ans d'expérience, vous conseille également dans la rédaction de contrats de travail, la mise en place de politiques internes ou encore les systèmes de rémunération alternatifs.",
                text5: "Confiez-nous la gestion de vos obligations sociales et concentrez-vous sur ce que vous faites de mieux : faire grandir votre entreprise."
            },
            servicesIntro: {
                title: "Nos Services",
                description: "Une expertise complète pour votre gestion salariale et RH"
            },
            payrollDetail: {
                title: "Gestion des Salaires",
                subtitle: "Bénéficiez d'un accompagnement complet en gestion salariale et administrative",
                text1: "Dans toute entreprise, une gestion précise des salaires et une administration du personnel fiable sont essentielles au bon fonctionnement et à la croissance.",
                text2: "Avec Social Pay Office, vous profitez de plusieurs années d'expertise et d'un savoir-faire en matière de gestion RH et de politique du personnel. Notre approche repose sur trois principes : fiabilité, accompagnement personnalisé et proactivité, pour vous offrir une gestion du payroll optimale.",
                text3: "Avec Social Pay Office, concentrez-vous sur l'essentiel — le développement de votre entreprise — pendant que nous prenons en charge vos salaires et votre administration du personnel."
            },
            optimizationDetail: {
                title: "Optimisation Salariale",
                text1: "Chez Social Pay Office nous accompagnons les professionnels et les entreprises dans l'optimisation salariale. Notre objectif : maximiser la valeur de votre rémunération tout en respectant les contraintes légales et fiscales.",
                text2: "Grâce à une approche personnalisée, nous analysons votre situation globale et identifions les leviers d'amélioration : primes, avantages en nature, épargne salariale, dispositifs fiscaux avantageux… Chaque solution est pensée pour sécuriser votre avenir financier.",
                text3: "L'optimisation salariale n'est pas seulement une question de chiffres : c'est une stratégie pour mieux reconnaître le talent, motiver les équipes et garantir une gestion efficace des ressources humaines. Faites le choix d'une rémunération adaptée à vos ambitions."
            },
            legalDetail: {
                title: "Conseils Juridiques",
                text1: "Dans un environnement social et juridique en constante évolution, les entreprises doivent faire face à des obligations complexes et souvent changeantes. Un accompagnement spécialisé est essentiel pour prévenir les risques et assurer la conformité de vos pratiques.",
                text2: "Chez Social Pay Office, notre équipe d'experts vous fournit des conseils juridiques personnalisés et adaptés à votre organisation. Que ce soit pour la rédaction de contrats, la gestion des relations de travail, l'application de la législation sociale ou la prévention des litiges, nous vous aidons à prendre des décisions éclairées et sécurisées.",
                text3: "Grâce à notre expertise, vous bénéficiez d'un accompagnement rigoureux et pratique, vous permettant de concentrer vos efforts sur le développement de votre activité en toute sérénité."
            },
            hrToolsDetail: {
                title: "Outils RH",
                text1: "Social Pay Office est un partenaire fiable, parfaitement conscient de l'environnement et des besoins des PME. Pour une gestion du personnel efficace et professionnelle, nous mettons à votre disposition des outils de communication adaptés à votre entreprise. Grâce à nos solutions RH simples et intuitives, nous contribuons à une digitalisation performante de votre administration du personnel.",
                text2: "E-Services est un outil RH intuitif qui vous offre une vision claire des aspects essentiels de la gestion de votre personnel.",
                text3: "Prisma VPN offre une vue d'ensemble complète de la gestion salariale et du personnel de votre PME. Cet outil performant vous permet de gérer avec efficacité les calculs de salaires et les déclarations légales."
            },
            auditsDetail: {
                title: "Contrôles Sociaux",
                text1: "Chaque entreprise peut être soumise à une visite de l'inspection sociale. Dans ce cas, il est crucial de fournir des documents complets et parfaitement conformes. L'inspection peut également procéder à l'audition de vos collaborateurs, ce qui rend une préparation rigoureuse et des conseils fiables indispensables.",
                text2: "Nos experts vous accompagnent tout au long du processus d'audit pour garantir une conformité totale et minimiser les risques."
            }
        }
    },
    nl: {
        nav: {
            services: "Diensten",
            about: "Over Ons",
            contact: "Contacteer Ons"
        },
        hero: {
            titleMain: "Professionele Loonoplossingen",
            titleSub: "Voor Uw Onderneming",
            slogan: "Social Pay Office, efficiëntie en vertrouwen in het hart van uw human resources.",
            description: "Deskundige sociaal secretariaat diensten ontworpen voor Belgische bedrijven. Wij behandelen uw loonbeheer, compliance en HR-administratie zodat u zich kunt concentreren op de groei van uw bedrijf.",
            btnExplore: "Ontdek Diensten",
            btnQuote: "Contacteer Ons"
        },
        services: {
            tag: "Wat Wij Bieden",
            title: "Onze Diensten",
            description: "Uitgebreide oplossingen voor al uw loon- en HR-behoeften",
            payroll: {
                title: "Loonbeheer",
                description: "Volledige loonverwerking, salarisberekeningen en betalingsadministratie voor uw werknemers",
                feature1: "Maandelijkse loonverwerking",
                feature2: "Belastingberekeningen en aangiften",
                feature3: "Sociale zekerheidsaangiften"
            },
            optimization: {
                title: "Salaris Optimalisatie",
                description: "Strategisch advies om uw loonkosten te optimaliseren met volledige naleving",
                feature1: "Kostenanalyse en rapportage",
                feature2: "Fiscale efficiëntiestrategieën",
                feature3: "Optimalisatie van voordelen"
            },
            legal: {
                title: "Juridisch Advies",
                description: "Deskundige begeleiding op het gebied van arbeidsrecht en sociale wetgeving in België",
                feature1: "Arbeidscontracten",
                feature2: "Naleving van regelgeving",
                feature3: "Geschillenbeslechting"
            },
            hr: {
                title: "HR Hulpmiddelen",
                description: "Moderne digitale tools om uw HR-processen en administratie te stroomlijnen",
                feature1: "Toegang tot werknemersportaal",
                feature2: "Tijd- en aanwezigheidsregistratie",
                feature3: "Documentbeheer"
            },
            audits: {
                title: "Sociale Controles",
                description: "Uitgebreide audits om sociale naleving te waarborgen en uw risico's te minimaliseren",
                feature1: "Nalevingsverificatie",
                feature2: "Risicobeoordeling",
                feature3: "Gedetailleerde auditrapporten"
            }
        },
        whyChoose: {
            tag: "Waarom Voor Ons Kiezen",
            title: "Uw Vertrouwde Partner",
            description: "Wij bieden betrouwbare, professionele loondiensten met een persoonlijke toets",
            feature1Title: "Deskundige Kennis",
            feature1Desc: "Diepgaande expertise in Belgische sociale wetgeving en loonregelgeving",
            feature2Title: "Persoonlijke Service",
            feature2Desc: "Toegewijde accountmanager voor persoonlijke ondersteuning",
            feature3Title: "Volledige Naleving",
            feature3Desc: "100% naleving van Belgische sociale zekerheid en belastingvoorschriften",
            feature4Title: "Digitale Oplossingen",
            feature4Desc: "Modern technologieplatform voor gemakkelijke toegang en transparantie"
        },
        about: {
            tag: "Over Ons",
            title: "Wie Wij Zijn",
            text: "Met jarenlange expertise in sociaal secretariaat diensten, bieden wij betrouwbare en professionele ondersteuning aan bedrijven van alle groottes in België. Ons team van gecertificeerde experts zorgt ervoor dat uw loon- en HR-processen soepel verlopen en volledig in overeenstemming zijn met de Belgische regelgeving. Wij combineren traditionele expertise met moderne technologie om uitzonderlijke service te leveren tegen concurrerende prijzen."
        },
        contact: {
            tag: "Neem Contact Op",
            title: "Contacteer Ons",
            description: "Klaar om uw loonbeheer te vereenvoudigen? Neem vandaag nog contact op",
            locationTitle: "Kantoor",
            locationText: "Brussel, België",
            phoneTitle: "Telefoon",
            emailTitle: "E-mail",
            formFirstName: "Voornaam",
            formLastName: "Achternaam",
            formCompany: "Bedrijf",
            formEmployees: "Aantal medewerkers",
            formEmail: "E-mail",
            formPhone: "Telefoonnummer",
            formMessage: "Uw bericht",
            formButton: "Verstuur Bericht"
        },
        modal: {
            successTitle: "Bericht Verzonden!",
            successMessage: "Bedankt voor uw bericht! We nemen binnen 24 uur contact met u op.",
            errorTitle: "Oeps!",
            errorMessage: "Er is een probleem opgetreden bij het verzenden van uw formulier. Controleer uw verbinding en probeer het opnieuw.",
            errorRetry: "Probeer het opnieuw of neem rechtstreeks contact met ons op.",
            verifying: "Verifiëren...",
            sending: "Verzenden...",
            closeButton: "Sluiten"
        },
        footer: {
            description: "Professionele loondiensten voor Belgische bedrijven. Betrouwbaar, conform en persoonlijk.",
            rights: "Alle rechten voorbehouden."
        },
        aboutPage: {
            hero: {
                title: "Over Ons",
                subtitle: "Social Pay Office, efficiëntie en vertrouwen in het hart van uw human resources."
            },
            intro: {
                title: "Wie Wij Zijn",
                text1: "Social Pay Office begeleidt kleine en middelgrote ondernemingen in het volledige beheer van hun lonen en human resources.",
                text2: "Wij bieden gepersonaliseerde oplossingen die prestaties, compliance en gemoedsrust combineren.",
                text3: "Als lokale partner nemen wij alle aspecten van loonbeheer voor onze rekening: berekeningen, aangiften, juridische en administratieve monitoring. U profiteert van geautomatiseerd, geoptimaliseerd loonbeheer dat altijd voldoet aan de huidige wetgeving.",
                text4: "Ons team van HR-experts, met meer dan 10 jaar ervaring, adviseert u ook bij het opstellen van arbeidscontracten, het implementeren van intern beleid of alternatieve beloningssystemen.",
                text5: "Vertrouw ons het beheer van uw sociale verplichtingen toe en concentreer u op wat u het beste doet: uw bedrijf laten groeien."
            },
            servicesIntro: {
                title: "Onze Diensten",
                description: "Uitgebreide expertise voor uw loon- en HR-beheer"
            },
            payrollDetail: {
                title: "Loonbeheer",
                subtitle: "Profiteer van volledige ondersteuning bij loon- en administratief beheer",
                text1: "In elk bedrijf zijn nauwkeurig loonbeheer en betrouwbaar personeelsbeheer essentieel voor een goede werking en groei.",
                text2: "Met Social Pay Office profiteert u van jarenlange expertise en knowhow op het gebied van HR-beheer en personeelsbeleid. Onze aanpak is gebaseerd op drie principes: betrouwbaarheid, persoonlijke begeleiding en proactiviteit, om u optimaal loonbeheer te bieden.",
                text3: "Met Social Pay Office concentreert u zich op het essentiële — de ontwikkeling van uw bedrijf — terwijl wij uw lonen en personeelsadministratie verzorgen."
            },
            optimizationDetail: {
                title: "Salaris Optimalisatie",
                text1: "Bij Social Pay Office begeleiden wij professionals en bedrijven bij salarisoptimalisatie. Ons doel: de waarde van uw beloning maximaliseren met respect voor wettelijke en fiscale beperkingen.",
                text2: "Dankzij een gepersonaliseerde aanpak analyseren wij uw algehele situatie en identificeren wij verbeterpunten: bonussen, voordelen in natura, werknemerssparen, voordelige fiscale regelingen... Elke oplossing is ontworpen om uw financiële toekomst te beveiligen.",
                text3: "Salarisoptimalisatie gaat niet alleen over cijfers: het is een strategie om talent beter te erkennen, teams te motiveren en efficiënt human resources management te garanderen. Kies voor beloning aangepast aan uw ambities."
            },
            legalDetail: {
                title: "Juridisch Advies",
                text1: "In een constant veranderende sociale en juridische omgeving moeten bedrijven complexe en vaak veranderende verplichtingen het hoofd bieden. Gespecialiseerde ondersteuning is essentieel om risico's te voorkomen en de naleving van uw praktijken te waarborgen.",
                text2: "Bij Social Pay Office biedt ons team van experts u gepersonaliseerd juridisch advies aangepast aan uw organisatie. Of het nu gaat om het opstellen van contracten, het beheren van arbeidsverhoudingen, het toepassen van sociale wetgeving of het voorkomen van geschillen, wij helpen u weloverwogen en veilige beslissingen te nemen.",
                text3: "Dankzij onze expertise profiteert u van rigoureuze en praktische ondersteuning, waardoor u uw inspanningen kunt concentreren op de ontwikkeling van uw activiteit met volledige gemoedsrust."
            },
            hrToolsDetail: {
                title: "HR Hulpmiddelen",
                text1: "Social Pay Office is een betrouwbare partner, volledig op de hoogte van de omgeving en behoeften van KMO's. Voor efficiënt en professioneel personeelsbeheer stellen wij u communicatietools ter beschikking die zijn aangepast aan uw bedrijf. Dankzij onze eenvoudige en intuïtieve HR-oplossingen dragen wij bij aan de effectieve digitalisering van uw personeelsadministratie.",
                text2: "E-Services is een intuïtieve HR-tool die u een duidelijk beeld geeft van de essentiële aspecten van uw personeelsbeheer.",
                text3: "Prisma VPN biedt een volledig overzicht van loon- en personeelsbeheer voor uw KMO. Deze krachtige tool stelt u in staat om loonberekeningen en wettelijke aangiften efficiënt te beheren."
            },
            auditsDetail: {
                title: "Sociale Controles",
                text1: "Elk bedrijf kan worden onderworpen aan een bezoek van de sociale inspectie. In dit geval is het cruciaal om volledige en perfect conforme documenten te verstrekken. De inspectie kan ook overgaan tot het horen van uw medewerkers, wat grondige voorbereiding en betrouwbaar advies onmisbaar maakt.",
                text2: "Onze experts begeleiden u tijdens het volledige auditproces om volledige naleving te garanderen en risico's te minimaliseren."
            }
        }
    }
};

// Get nested property from object using dot notation
function getNestedProperty(obj, path) {
    return path.split('.').reduce((current, prop) => current?.[prop], obj);
}

// Translate all elements with data-i18n attribute
function translatePage(language) {
    const elements = document.querySelectorAll('[data-i18n]');

    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = getNestedProperty(translations[language], key);

        if (translation) {
            element.textContent = translation;
        }
    });

    // Translate placeholders
    const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
    placeholderElements.forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        const translation = getNestedProperty(translations[language], key);

        if (translation) {
            element.placeholder = translation;
        }
    });

    // Update HTML lang attribute
    document.documentElement.lang = language;

    // Save language preference
    localStorage.setItem('preferredLanguage', language);
}

// Initialize language
function initLanguage() {
    // Get language from localStorage or default to 'en'
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'en';
    translatePage(savedLanguage);

    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === savedLanguage) {
            btn.classList.add('active');
        }
    });
}

// Get current language
function getCurrentLanguage() {
    return localStorage.getItem('preferredLanguage') || 'en';
}

// Get specific translation
function getTranslation(key) {
    const language = getCurrentLanguage();
    return getNestedProperty(translations[language], key) || key;
}

// Export for use in main.js
window.i18n = {
    translate: translatePage,
    init: initLanguage,
    getCurrentLanguage: getCurrentLanguage,
    getTranslation: getTranslation
};
