(() => {
  'use strict';

  const translations = {
    en: {
      'Índice': 'Index',
      'Agustin Girona · Arquitectura': 'Agustin Girona · Architecture',
      '— Manuel Agustín Girona Lopez, MMO · Arquitectura': '— Manuel Agustín Girona Lopez, MMO · Architecture',
      'Arquitectura': 'Architecture',
      'Sobre mí': 'About me',
      'Premios': 'Awards',
      'Currículum': 'Résumé',
      'Certificados': 'Certificates',
      'Contacto': 'Contact',
      '"Diseñar espacios que cuentan historias, donde la luz y la materia dialogan"': '"Designing spaces that tell stories, where light and matter are in dialogue"',
      'Presentación': 'Introduction',
      'MAESTRO MAYOR DE OBRAS · ARQUITECTURA': 'BUILDING CONSTRUCTION TECHNICIAN · ARCHITECTURE',
      'último año': 'final year',
      'Soy Maestro mayor de obras con formación técnica, y estudiante de arquitectura (cursando el último año), con conocimiento en documentación / gestión técnica y visualización arquitectónica. De perfil autodidacta y apasionado por el desarrollo técnico, detalles constructivos y el diseño. Busco un espacio de trabajo donde pueda aplicar y expandir mis conocimientos.': 'I am a Building Construction Technician with a technical background and a final-year Architecture student, with experience in technical documentation and management as well as architectural visualization. I am self-taught and passionate about technical development, construction details, and design. I am looking for a professional environment where I can apply and expand my knowledge.',
      'Logros': 'Achievements',
      'Premios y Distinciones': 'Awards and Distinctions',
      'Abanderado Bandera Nacional': 'National Flag Bearer',
      'Promedio: 9,65': 'GPA: 9.65',
      '2do Escolta Bandera Nacional': 'Second National Flag Escort',
      'Trabajo destacado': 'Outstanding Project',
      'Cátedra Instalaciones III B - FAUD UNC': 'Building Services III B Studio - FAUD UNC',
      '"Proyectar el Fragmento"': '"Designing the Fragment"',
      'Muestra "Al Fin Final 2024"': '"Al Fin Final 2024" Exhibition',
      'Carpeta Morfología III': 'Morphology III Portfolio',
      'Muestra "Al Fin Final 2023"': '"Al Fin Final 2023" Exhibition',
      'Trabajo Estructuras': 'Structures Project',
      'Muestra "Al Fin Final 2022"': '"Al Fin Final 2022" Exhibition',
      'Nota del Rectorado': 'Rectorate Letter',
      'Trayectoria': 'Background',
      'Curriculum · Resumido': 'Résumé · Summary',
      'Formación': 'Education',
      'Experiencia': 'Experience',
      'Habilidades': 'Skills',
      'Arquitectura · Universidad Nacional de Córdoba (FAUD)': 'Architecture · National University of Córdoba (FAUD)',
      'Último año en curso': 'Final year in progress',
      'Formación integral con enfoque en proyecto, tecnología y ciudad.': 'Comprehensive education focused on design, technology, and the city.',
      'Maestro Mayor de Obras': 'Building Construction Technician',
      'Instituto Provincial de Enseñanza Técnica (I.P.E.T.) N°339': 'Provincial Institute of Technical Education (I.P.E.T.) No. 339',
      'Título técnico con promedio general de 9,65. Abanderado de la Bandera Nacional.': 'Technical degree with an overall GPA of 9.65. National Flag Bearer.',
      'Adscripción en Cátedra Urbanismo IB': 'Teaching Assistantship · Urbanism IB Studio',
      'FAUD - UNC · 2025 - actualidad': 'FAUD - UNC · 2025 - present',
      'Alumno adscripto bajo la titularidad de la Dra. Arq. Mariana Debat.': 'Student teaching assistant under Dr. Arch. Mariana Debat.',
      'Pasante · Estudio GPO (Arq. Diana B. Pons)': 'Intern · GPO Studio (Arch. Diana B. Pons)',
      'Dibujo técnico, relevamientos, diseño de proyectos, modelado 3D, gestoría de planos y presupuestos.': 'Technical drawing, site surveys, project design, 3D modeling, drawing approvals, and budgeting.',
      'Trabajo Autónomo como Maestro Mayor de Obras': 'Independent Work as Building Construction Technician',
      '2021 – actualidad': '2021 – present',
      'Confección de planos, gestión municipal, anteproyectos, renders y asesoría técnica en Capilla del Monte, La Cumbre, Villa Giardino, San Esteban, Charbonier.': 'Preparation of drawings, municipal procedures, preliminary designs, renders, and technical consulting in Capilla del Monte, La Cumbre, Villa Giardino, San Esteban, and Charbonier.',
      'Enseñanza en Clases Particulares': 'Private Tutoring',
      'Preparación en Estructuras 1/2/3, Instalaciones, Matemática, Inglés e Historia.': 'Tutoring in Structures 1/2/3, Building Services, Mathematics, English, and History.',
      'Software avanzado': 'Advanced software',
      'Avanzado': 'Advanced',
      'Intermedio': 'Intermediate',
      'Básico': 'Basic',
      'Aptitudes': 'Soft skills',
      'Trabajo colaborativo': 'Teamwork',
      'Creatividad': 'Creativity',
      'Adaptabilidad': 'Adaptability',
      'Compromiso': 'Commitment',
      'Responsabilidad': 'Responsibility',
      'Organización': 'Organization',
      'Fácil aprendizaje': 'Fast learner',
      'Gestión de tareas': 'Task management',
      'Ver CV Completo': 'View Full Résumé',
      'Proyectos · Colección Girona': 'Projects · Girona Collection',
      'Proyecto 01': 'Project 01',
      'Proyecto 1': 'Project 1',
      'Proyecto de arquitectura · 2024': 'Architecture project · 2024',
      'Proyecto 02': 'Project 02',
      'Uniendo Cerdanyola': 'Connecting Cerdanyola',
      'Cerdanyola de Valles, Catalunia, España · 2023': 'Cerdanyola del Vallès, Catalonia, Spain · 2023',
      'Proyecto 03': 'Project 03',
      'Marea Co-Work': 'Marea Co-Work',
      'Proyecto 04': 'Project 04',
      'Universo de bolsillo': 'Pocket Universe',
      'Proyecto de arquitectura · 2025': 'Architecture project · 2025',
      'Proyecto 05': 'Project 05',
      'Aldea urbana': 'Urban Village',
      'Diseño urbano · 2025': 'Urban design · 2025',
      'Formación continua': 'Continuing education',
      'Certificados · Cursos Realizados': 'Certificates · Completed Courses',
      'Edificio en altura · Pautas iniciales para el abordaje integral del proyecto de Instalaciones': 'High-rise Building · Initial guidelines for a comprehensive approach to building services design',
      'Universidad Nacional de Córdoba': 'National University of Córdoba',
      'Ver certificado': 'View certificate',
      'Introducción a la Construcción en Seco': 'Introduction to Dry Construction',
      'Campus Virtual · Universidad Nacional de Córdoba': 'Virtual Campus · National University of Córdoba',
      'Jornada de Capacitación para Adscripto · Rol, crítica y metodologías en Urbanismo IB': 'Teaching Assistant Training Workshop · Role, critique, and methodologies in Urbanism IB',
      'FAUD · Universidad Nacional de Córdoba': 'FAUD · National University of Córdoba',
      'Pensamiento crítico disciplinar · Experiencias de investigación en el grado': 'Disciplinary Critical Thinking · Undergraduate research experiences',
      'Trabajos desarrollados por alumnos de nivel IV · Cátedra de Instalaciones III B': 'Projects developed by Level IV students · Building Services III B Studio',
      'Seguridad en el trabajo de Carpintería · Reciclamos Pallets': 'Safety in Carpentry Work · We Recycle Pallets',
      '45 horas · Campus Virtual · UNC': '45 hours · Virtual Campus · UNC',
      'Taller Ideas de Color · Acciones cromáticas urbanas en calle Obispo Salguero': 'Color Ideas Workshop · Urban chromatic actions on Obispo Salguero Street',
      'Conectemos': "Let's connect",
      'Copiar': 'Copy',
      'Teléfono': 'Phone',
      'Córdoba Capital': 'Córdoba City',
      'Disponibilidad Full time / Part time': 'Full-time / Part-time availability',
      'Portfolio disponible': 'Portfolio available',
      '¡Copiado al portapapeles!': 'Copied to clipboard!',
      '📋 Copiado al portapapeles': '📋 Copied to clipboard',
      '© 2026 Rodrigo Emanuel San Martin Bustos · Diseñador Web ·': '© 2026 Rodrigo Emanuel San Martin Bustos · Web Designer ·',
      'A quien corresponda': 'To whom it may concern',
      'A través de la presente, como Rector y Vicerrectora de la Universidad Nacional de Córdoba, Argentina, es de nuestro agrado poder dar aval académico al estudiante': 'Through this letter, as Rector and Vice-Rector of the National University of Córdoba, Argentina, we are pleased to provide our academic endorsement to the student',
      ', quien está realizando sus estudios de grado, en la carrera de Arquitectura de la Facultad de Arquitectura, Urbanismo y Diseño, con un promedio de carrera de': ', who is pursuing an undergraduate degree in Architecture at the Faculty of Architecture, Urbanism and Design, with a cumulative GPA of',
      ', mérito que lo lleva a desempeñarse como': ', a distinction that has led him to serve as',
      'Segunda Escolta': 'Second Flag Escort',
      'de la Facultad antes mencionada, periodo 2025/2026.': 'of the aforementioned Faculty for the 2025/2026 period.',
      'Estudiantes como': 'Students such as',
      'ponen en alto el nombre de nuestra institución por su destacado desempeño académico. Sus convicciones, inteligencia y calidad humana se pusieron de manifiesto a lo largo de su paso por nuestra universidad, participó permanentemente en espacios de trabajo colaborativo, de reflexión y de compromiso social donde siempre ha demostrado, aparte de vocación y pasión, ser una persona reflexiva, de gran carácter intelectual, que entiende las prácticas desde la participación, el consenso y la construcción colectiva e interdisciplinaria y ávida por seguir aprendiendo y perfeccionando su compromiso con la educación y la sociedad.': 'bring great credit to our institution through their outstanding academic performance. His convictions, intelligence, and human qualities have been evident throughout his time at our university. He has consistently participated in collaborative, reflective, and socially engaged spaces, where, in addition to vocation and passion, he has demonstrated a thoughtful character and strong intellectual capacity. He understands practice through participation, consensus, and collective, interdisciplinary construction, and remains eager to continue learning and deepening his commitment to education and society.',
      'Por todo lo mencionado, recomendamos a': 'For all the reasons stated above, we recommend',
      'ante quien corresponda, con la certeza de que por su compromiso, responsabilidad e idoneidad representará un gran aporte a vuestra Institución y los honrará plenamente como estudiante y persona.': 'to whom it may concern, with the confidence that his commitment, responsibility, and competence will make a valuable contribution to your Institution and that he will honor it fully as both a student and a person.',
      'Quedamos a disposición para ampliar estas referencias si fuera necesario. Sin otro particular, saludamos a Uds. con nuestra más distinguida consideración.': 'We remain available to provide any further references if necessary. With no further matters, please accept our highest consideration.',
      'Rector UNC': 'Rector · UNC',
      'Avda. Haya de la Torre S/N – 3er piso': 'Haya de la Torre Ave. S/N – 3rd floor',
      'Pabellón Argentina – Ciudad Universitaria': 'Argentina Pavilion – University Campus',
      'X 5000GYA – Córdoba – Argentina': 'X 5000GYA – Córdoba – Argentina',
      'Tel: +54 351 5353778 int. 3': 'Tel: +54 351 5353778 ext. 3',
      'Ver PDF original': 'View original PDF',
      'Cerrar': 'Close',
      'Currículum Vitae · Manuel Agustín Girona Lopez': 'Curriculum Vitae · Manuel Agustín Girona Lopez',
      'Maestro Mayor de Obras · Estudiante de Arquitectura (último año)': 'Building Construction Technician · Architecture Student (final year)',
      '📘 Formación Académica': '📘 Academic Education',
      '· FAUD · Universidad Nacional de Córdoba (Último año en curso)': '· FAUD · National University of Córdoba (Final year in progress)',
      '· IPET N°339 · Promedio general: 9,65 · Abanderado Nacional': '· IPET No. 339 · Overall GPA: 9.65 · National Flag Bearer',
      '🏛️ Experiencia Profesional': '🏛️ Professional Experience',
      'Pasante · Estudio GPO': 'Intern · GPO Studio',
      'Trabajo Autónomo como MMO': 'Independent Work as Building Construction Technician',
      '· 2021-actualidad': '· 2021-present',
      '📚 Actividad Vinculada a la Educación': '📚 Education-related Activity',
      '· FAUD · UNC · 2025-actualidad': '· FAUD · UNC · 2025-present',
      'Estructuras 1/2/3, Instalaciones, Matemática, Inglés e Historia.': 'Structures 1/2/3, Building Services, Mathematics, English, and History.',
      '🎖️ Premios y Distinciones': '🎖️ Awards and Distinctions',
      '· Abanderado Bandera Nacional · IPET N°339 (Prom. 9,65)': '· National Flag Bearer · IPET No. 339 (GPA 9.65)',
      '· 2do Escolta Bandera Nacional · FAUD · UNC': '· Second National Flag Escort · FAUD · UNC',
      '· Trabajo destacado · Cátedra Instalaciones III B · FAUD · UNC': '· Outstanding Project · Building Services III B Studio · FAUD · UNC',
      '· "Proyectar el Fragmento" · Muestra "Al Fin Final 2024"': '· "Designing the Fragment" · "Al Fin Final 2024" Exhibition',
      '· Carpeta Morfología III · Muestra "Al Fin Final 2023"': '· Morphology III Portfolio · "Al Fin Final 2023" Exhibition',
      '· Trabajo Estructuras · Muestra "Al Fin Final 2022"': '· Structures Project · "Al Fin Final 2022" Exhibition',
      '🖥️ Habilidades Técnicas': '🖥️ Technical Skills',
      'Avanzado:': 'Advanced:',
      'Intermedio:': 'Intermediate:',
      'Básico:': 'Basic:',
      '🌍 Idiomas': '🌍 Languages',
      'Inglés:': 'English:',
      'Italiano:': 'Italian:',
      'Formación continua · School of English, Capilla del Monte (2010-2020)': 'Continuous training · School of English, Capilla del Monte (2010-2020)',
      'Certificado B1 · Dante Alighieri · Abanderado de Italia (2014-2019) · Promedio: 9,00': 'B1 Certificate · Dante Alighieri · Italian Flag Bearer (2014-2019) · GPA: 9.00',
      'Ver CV en PDF': 'View Résumé PDF',
      'Visualizando documento': 'Viewing document',
      'Abrir en nueva pestaña': 'Open in new tab',
      'Copiado!': 'Copied!',
      'Render arquitectónico': 'Architectural render',
      'Introducción Construcción en Seco': 'Introduction to Dry Construction',
      'Jornada de Capacitación para Adscripto': 'Teaching Assistant Training Workshop',
      'Pensamiento crítico disciplinar': 'Disciplinary Critical Thinking',
      'Trabajos Instalaciones III B': 'Building Services III B Projects',
      'Seguridad en Carpintería': 'Carpentry Safety',
      'Taller Ideas de Color': 'Color Ideas Workshop',
      'Proyecto 01 · Pabellón de exposiciones': 'Project 01 · Exhibition Pavilion',
      'Marea Co-Work · Proyecto': 'Marea Co-Work · Project',
      'Universo de bolsillo · Proyecto': 'Pocket Universe · Project',
      'Aldea urbana · Diseño urbano': 'Urban Village · Urban Design',
      'Edificio en altura': 'High-rise Building',
      'Uniendo Cerdanyola · España': 'Connecting Cerdanyola · Spain'
    },

    it: {
      'Índice': 'Indice',
      'Agustin Girona · Arquitectura': 'Agustin Girona · Architettura',
      '— Manuel Agustín Girona Lopez, MMO · Arquitectura': '— Manuel Agustín Girona Lopez, MMO · Architettura',
      'Sobre mí': 'Su di me',
      'Premios': 'Premi',
      'Currículum': 'Curriculum',
      'Certificados': 'Certificati',
      'Contacto': 'Contatti',
      '"Diseñar espacios que cuentan historias, donde la luz y la materia dialogan"': '"Progettare spazi che raccontano storie, dove la luce e la materia dialogano"',
      'Presentación': 'Presentazione',
      'MAESTRO MAYOR DE OBRAS · ARQUITECTURA': 'TECNICO DELLE COSTRUZIONI · ARCHITETTURA',
      'último año': 'ultimo anno',
      'Soy Maestro mayor de obras con formación técnica, y estudiante de arquitectura (cursando el último año), con conocimiento en documentación / gestión técnica y visualización arquitectónica. De perfil autodidacta y apasionado por el desarrollo técnico, detalles constructivos y el diseño. Busco un espacio de trabajo donde pueda aplicar y expandir mis conocimientos.': 'Sono un Tecnico delle Costruzioni con formazione tecnica e studente di Architettura all’ultimo anno, con competenze nella documentazione e gestione tecnica e nella visualizzazione architettonica. Ho un profilo autodidatta e sono appassionato di sviluppo tecnico, dettagli costruttivi e design. Cerco un ambiente di lavoro in cui poter applicare e ampliare le mie conoscenze.',
      'Logros': 'Traguardi',
      'Premios y Distinciones': 'Premi e Riconoscimenti',
      'Abanderado Bandera Nacional': 'Alfiere della Bandiera Nazionale',
      'Promedio: 9,65': 'Media: 9,65',
      '2do Escolta Bandera Nacional': 'Secondo Scorta della Bandiera Nazionale',
      'Trabajo destacado': 'Lavoro segnalato',
      'Cátedra Instalaciones III B - FAUD UNC': 'Cattedra Impianti III B - FAUD UNC',
      '"Proyectar el Fragmento"': '"Progettare il Frammento"',
      'Muestra "Al Fin Final 2024"': 'Mostra "Al Fin Final 2024"',
      'Carpeta Morfología III': 'Portfolio Morfologia III',
      'Muestra "Al Fin Final 2023"': 'Mostra "Al Fin Final 2023"',
      'Trabajo Estructuras': 'Lavoro di Strutture',
      'Muestra "Al Fin Final 2022"': 'Mostra "Al Fin Final 2022"',
      'Nota del Rectorado': 'Lettera del Rettorato',
      'Trayectoria': 'Percorso',
      'Curriculum · Resumido': 'Curriculum · Sintesi',
      'Formación': 'Formazione',
      'Experiencia': 'Esperienza',
      'Habilidades': 'Competenze',
      'Arquitectura · Universidad Nacional de Córdoba (FAUD)': 'Architettura · Università Nazionale di Córdoba (FAUD)',
      'Último año en curso': 'Ultimo anno in corso',
      'Formación integral con enfoque en proyecto, tecnología y ciudad.': 'Formazione completa con attenzione al progetto, alla tecnologia e alla città.',
      'Maestro Mayor de Obras': 'Tecnico delle Costruzioni',
      'Instituto Provincial de Enseñanza Técnica (I.P.E.T.) N°339': 'Istituto Provinciale di Istruzione Tecnica (I.P.E.T.) N°339',
      'Título técnico con promedio general de 9,65. Abanderado de la Bandera Nacional.': 'Diploma tecnico con media generale di 9,65. Alfiere della Bandiera Nazionale.',
      'Adscripción en Cátedra Urbanismo IB': 'Collaborazione didattica · Cattedra Urbanistica IB',
      'FAUD - UNC · 2025 - actualidad': 'FAUD - UNC · 2025 - presente',
      'Alumno adscripto bajo la titularidad de la Dra. Arq. Mariana Debat.': 'Studente collaboratore sotto la responsabilità della Dott.ssa Arch. Mariana Debat.',
      'Pasante · Estudio GPO (Arq. Diana B. Pons)': 'Tirocinante · Studio GPO (Arch. Diana B. Pons)',
      'Dibujo técnico, relevamientos, diseño de proyectos, modelado 3D, gestoría de planos y presupuestos.': 'Disegno tecnico, rilievi, progettazione, modellazione 3D, gestione delle pratiche grafiche e preventivi.',
      'Trabajo Autónomo como Maestro Mayor de Obras': 'Attività autonoma come Tecnico delle Costruzioni',
      '2021 – actualidad': '2021 – presente',
      'Confección de planos, gestión municipal, anteproyectos, renders y asesoría técnica en Capilla del Monte, La Cumbre, Villa Giardino, San Esteban, Charbonier.': 'Elaborazione di tavole, pratiche comunali, progetti preliminari, render e consulenza tecnica a Capilla del Monte, La Cumbre, Villa Giardino, San Esteban e Charbonier.',
      'Enseñanza en Clases Particulares': 'Lezioni private',
      'Preparación en Estructuras 1/2/3, Instalaciones, Matemática, Inglés e Historia.': 'Preparazione in Strutture 1/2/3, Impianti, Matematica, Inglese e Storia.',
      'Software avanzado': 'Software avanzato',
      'Avanzado': 'Avanzato',
      'Intermedio': 'Intermedio',
      'Básico': 'Base',
      'Aptitudes': 'Attitudini',
      'Trabajo colaborativo': 'Lavoro di squadra',
      'Creatividad': 'Creatività',
      'Adaptabilidad': 'Adattabilità',
      'Compromiso': 'Impegno',
      'Responsabilidad': 'Responsabilità',
      'Organización': 'Organizzazione',
      'Fácil aprendizaje': 'Apprendimento rapido',
      'Gestión de tareas': 'Gestione delle attività',
      'Ver CV Completo': 'Vedi CV completo',
      'Proyectos · Colección Girona': 'Progetti · Collezione Girona',
      'Proyecto 01': 'Progetto 01',
      'Proyecto 1': 'Progetto 1',
      'Proyecto de arquitectura · 2024': 'Progetto di architettura · 2024',
      'Proyecto 02': 'Progetto 02',
      'Uniendo Cerdanyola': 'Unendo Cerdanyola',
      'Cerdanyola de Valles, Catalunia, España · 2023': 'Cerdanyola del Vallès, Catalogna, Spagna · 2023',
      'Proyecto 03': 'Progetto 03',
      'Proyecto 04': 'Progetto 04',
      'Universo de bolsillo': 'Universo tascabile',
      'Proyecto de arquitectura · 2025': 'Progetto di architettura · 2025',
      'Proyecto 05': 'Progetto 05',
      'Aldea urbana': 'Villaggio urbano',
      'Diseño urbano · 2025': 'Progettazione urbana · 2025',
      'Formación continua': 'Formazione continua',
      'Certificados · Cursos Realizados': 'Certificati · Corsi completati',
      'Edificio en altura · Pautas iniciales para el abordaje integral del proyecto de Instalaciones': 'Edificio multipiano · Linee guida iniziali per un approccio integrale al progetto degli impianti',
      'Universidad Nacional de Córdoba': 'Università Nazionale di Córdoba',
      'Ver certificado': 'Vedi certificato',
      'Introducción a la Construcción en Seco': 'Introduzione alla costruzione a secco',
      'Campus Virtual · Universidad Nacional de Córdoba': 'Campus Virtuale · Università Nazionale di Córdoba',
      'Jornada de Capacitación para Adscripto · Rol, crítica y metodologías en Urbanismo IB': 'Giornata di formazione per collaboratori didattici · Ruolo, critica e metodologie in Urbanistica IB',
      'FAUD · Universidad Nacional de Córdoba': 'FAUD · Università Nazionale di Córdoba',
      'Pensamiento crítico disciplinar · Experiencias de investigación en el grado': 'Pensiero critico disciplinare · Esperienze di ricerca nel corso di laurea',
      'Trabajos desarrollados por alumnos de nivel IV · Cátedra de Instalaciones III B': 'Lavori sviluppati dagli studenti del IV livello · Cattedra Impianti III B',
      'Seguridad en el trabajo de Carpintería · Reciclamos Pallets': 'Sicurezza nel lavoro di falegnameria · Ricicliamo pallet',
      '45 horas · Campus Virtual · UNC': '45 ore · Campus Virtuale · UNC',
      'Taller Ideas de Color · Acciones cromáticas urbanas en calle Obispo Salguero': 'Laboratorio Idee di Colore · Interventi cromatici urbani in via Obispo Salguero',
      'Conectemos': 'Entriamo in contatto',
      'Copiar': 'Copia',
      'Teléfono': 'Telefono',
      'Córdoba Capital': 'Città di Córdoba',
      'Disponibilidad Full time / Part time': 'Disponibilità full time / part time',
      'Portfolio disponible': 'Portfolio disponibile',
      '¡Copiado al portapapeles!': 'Copiato negli appunti!',
      '📋 Copiado al portapapeles': '📋 Copiato negli appunti',
      '© 2026 Rodrigo Emanuel San Martin Bustos · Diseñador Web ·': '© 2026 Rodrigo Emanuel San Martin Bustos · Web Designer ·',
      'A quien corresponda': 'A chi di competenza',
      'A través de la presente, como Rector y Vicerrectora de la Universidad Nacional de Córdoba, Argentina, es de nuestro agrado poder dar aval académico al estudiante': 'Con la presente, in qualità di Rettore e Prorettrice dell’Università Nazionale di Córdoba, Argentina, siamo lieti di fornire il nostro sostegno accademico allo studente',
      ', quien está realizando sus estudios de grado, en la carrera de Arquitectura de la Facultad de Arquitectura, Urbanismo y Diseño, con un promedio de carrera de': ', che sta svolgendo i suoi studi di laurea in Architettura presso la Facoltà di Architettura, Urbanistica e Design, con una media di carriera pari a',
      ', mérito que lo lleva a desempeñarse como': ', merito che lo ha portato a ricoprire il ruolo di',
      'Segunda Escolta': 'Seconda Scorta',
      'de la Facultad antes mencionada, periodo 2025/2026.': 'della suddetta Facoltà per il periodo 2025/2026.',
      'Estudiantes como': 'Studenti come',
      'ponen en alto el nombre de nuestra institución por su destacado desempeño académico. Sus convicciones, inteligencia y calidad humana se pusieron de manifiesto a lo largo de su paso por nuestra universidad, participó permanentemente en espacios de trabajo colaborativo, de reflexión y de compromiso social donde siempre ha demostrado, aparte de vocación y pasión, ser una persona reflexiva, de gran carácter intelectual, que entiende las prácticas desde la participación, el consenso y la construcción colectiva e interdisciplinaria y ávida por seguir aprendiendo y perfeccionando su compromiso con la educación y la sociedad.': 'danno prestigio alla nostra istituzione grazie al loro eccellente rendimento accademico. Le sue convinzioni, la sua intelligenza e le sue qualità umane si sono manifestate durante tutto il percorso nella nostra università. Ha partecipato costantemente a spazi di lavoro collaborativo, riflessione e impegno sociale, dimostrando, oltre a vocazione e passione, di essere una persona riflessiva, di grande spessore intellettuale, capace di comprendere le pratiche attraverso la partecipazione, il consenso e la costruzione collettiva e interdisciplinare, sempre desiderosa di continuare a imparare e a rafforzare il proprio impegno verso l’educazione e la società.',
      'Por todo lo mencionado, recomendamos a': 'Per tutto quanto sopra esposto, raccomandiamo',
      'ante quien corresponda, con la certeza de que por su compromiso, responsabilidad e idoneidad representará un gran aporte a vuestra Institución y los honrará plenamente como estudiante y persona.': 'a chi di competenza, con la certezza che, grazie al suo impegno, alla sua responsabilità e alla sua competenza, rappresenterà un importante contributo per la Vostra Istituzione e la onorerà pienamente come studente e come persona.',
      'Quedamos a disposición para ampliar estas referencias si fuera necesario. Sin otro particular, saludamos a Uds. con nuestra más distinguida consideración.': 'Restiamo a disposizione per eventuali ulteriori referenze. Con l’occasione, porgiamo i nostri più distinti saluti.',
      'Rector UNC': 'Rettore UNC',
      'Avda. Haya de la Torre S/N – 3er piso': 'Viale Haya de la Torre S/N – 3° piano',
      'Pabellón Argentina – Ciudad Universitaria': 'Padiglione Argentina – Città Universitaria',
      'Tel: +54 351 5353778 int. 3': 'Tel: +54 351 5353778 int. 3',
      'Ver PDF original': 'Vedi PDF originale',
      'Cerrar': 'Chiudi',
      'Currículum Vitae · Manuel Agustín Girona Lopez': 'Curriculum Vitae · Manuel Agustín Girona Lopez',
      'Maestro Mayor de Obras · Estudiante de Arquitectura (último año)': 'Tecnico delle Costruzioni · Studente di Architettura (ultimo anno)',
      '📘 Formación Académica': '📘 Formazione Accademica',
      'Arquitectura': 'Architettura',
      '· FAUD · Universidad Nacional de Córdoba (Último año en curso)': '· FAUD · Università Nazionale di Córdoba (Ultimo anno in corso)',
      '· IPET N°339 · Promedio general: 9,65 · Abanderado Nacional': '· IPET N°339 · Media generale: 9,65 · Alfiere Nazionale',
      '🏛️ Experiencia Profesional': '🏛️ Esperienza Professionale',
      'Pasante · Estudio GPO': 'Tirocinante · Studio GPO',
      'Trabajo Autónomo como MMO': 'Attività autonoma come Tecnico delle Costruzioni',
      '· 2021-actualidad': '· 2021-presente',
      '📚 Actividad Vinculada a la Educación': '📚 Attività legata alla Formazione',
      '· FAUD · UNC · 2025-actualidad': '· FAUD · UNC · 2025-presente',
      'Estructuras 1/2/3, Instalaciones, Matemática, Inglés e Historia.': 'Strutture 1/2/3, Impianti, Matematica, Inglese e Storia.',
      '🎖️ Premios y Distinciones': '🎖️ Premi e Riconoscimenti',
      '· Abanderado Bandera Nacional · IPET N°339 (Prom. 9,65)': '· Alfiere della Bandiera Nazionale · IPET N°339 (Media 9,65)',
      '· 2do Escolta Bandera Nacional · FAUD · UNC': '· Secondo Scorta della Bandiera Nazionale · FAUD · UNC',
      '· Trabajo destacado · Cátedra Instalaciones III B · FAUD · UNC': '· Lavoro segnalato · Cattedra Impianti III B · FAUD · UNC',
      '· "Proyectar el Fragmento" · Muestra "Al Fin Final 2024"': '· "Progettare il Frammento" · Mostra "Al Fin Final 2024"',
      '· Carpeta Morfología III · Muestra "Al Fin Final 2023"': '· Portfolio Morfologia III · Mostra "Al Fin Final 2023"',
      '· Trabajo Estructuras · Muestra "Al Fin Final 2022"': '· Lavoro di Strutture · Mostra "Al Fin Final 2022"',
      '🖥️ Habilidades Técnicas': '🖥️ Competenze Tecniche',
      'Avanzado:': 'Avanzato:',
      'Intermedio:': 'Intermedio:',
      'Básico:': 'Base:',
      '🌍 Idiomas': '🌍 Lingue',
      'Inglés:': 'Inglese:',
      'Italiano:': 'Italiano:',
      'Formación continua · School of English, Capilla del Monte (2010-2020)': 'Formazione continua · School of English, Capilla del Monte (2010-2020)',
      'Certificado B1 · Dante Alighieri · Abanderado de Italia (2014-2019) · Promedio: 9,00': 'Certificato B1 · Dante Alighieri · Alfiere d’Italia (2014-2019) · Media: 9,00',
      'Ver CV en PDF': 'Vedi CV in PDF',
      'Visualizando documento': 'Visualizzazione documento',
      'Abrir en nueva pestaña': 'Apri in una nuova scheda',
      'Copiado!': 'Copiato!',
      'Render arquitectónico': 'Render architettonico',
      'Introducción Construcción en Seco': 'Introduzione alla costruzione a secco',
      'Jornada de Capacitación para Adscripto': 'Giornata di formazione per collaboratori didattici',
      'Pensamiento crítico disciplinar': 'Pensiero critico disciplinare',
      'Trabajos Instalaciones III B': 'Lavori Impianti III B',
      'Seguridad en Carpintería': 'Sicurezza in falegnameria',
      'Taller Ideas de Color': 'Laboratorio Idee di Colore',
      'Proyecto 01 · Pabellón de exposiciones': 'Progetto 01 · Padiglione espositivo',
      'Marea Co-Work · Proyecto': 'Marea Co-Work · Progetto',
      'Universo de bolsillo · Proyecto': 'Universo tascabile · Progetto',
      'Aldea urbana · Diseño urbano': 'Villaggio urbano · Progettazione urbana',
      'Edificio en altura': 'Edificio multipiano',
      'Uniendo Cerdanyola · España': 'Unendo Cerdanyola · Spagna'
    }
  };

  const pageTitles = {
    es: 'Arquitectura | Portfolio Agustin Girona',
    en: 'Architecture | Agustin Girona Portfolio',
    it: 'Architettura | Portfolio Agustin Girona'
  };

  const attrOriginals = new WeakMap();
  const textOriginals = new WeakMap();
  let currentLanguage = 'es';

  function preserveWhitespace(original, replacement) {
    const start = original.match(/^\s*/)?.[0] || '';
    const end = original.match(/\s*$/)?.[0] || '';
    return `${start}${replacement}${end}`;
  }

  function translateKey(key, lang = currentLanguage) {
    if (!key || lang === 'es') return key;
    return translations[lang]?.[key] || key;
  }

  function captureOriginals() {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      const parentTag = node.parentElement?.tagName;
      if (!parentTag || ['SCRIPT', 'STYLE', 'NOSCRIPT'].includes(parentTag)) continue;
      const trimmed = node.nodeValue.trim();
      if (trimmed) textOriginals.set(node, trimmed);
    }

    document.querySelectorAll('[alt], [title], [aria-label]').forEach(el => {
      const originals = {};
      ['alt', 'title', 'aria-label'].forEach(attr => {
        if (el.hasAttribute(attr)) originals[attr] = el.getAttribute(attr);
      });
      attrOriginals.set(el, originals);
    });
  }

  function applyLanguage(lang) {
    if (!['es', 'en', 'it'].includes(lang)) lang = 'es';
    currentLanguage = lang;
    document.documentElement.lang = lang;
    document.title = pageTitles[lang];

    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      const parentTag = node.parentElement?.tagName;
      if (!parentTag || ['SCRIPT', 'STYLE', 'NOSCRIPT'].includes(parentTag)) continue;
      const key = textOriginals.get(node);
      if (!key) continue;
      const translated = translateKey(key, lang);
      node.nodeValue = preserveWhitespace(node.nodeValue, translated);
    }

    document.querySelectorAll('[alt], [title], [aria-label]').forEach(el => {
      const originals = attrOriginals.get(el);
      if (!originals) return;
      Object.entries(originals).forEach(([attr, value]) => {
        el.setAttribute(attr, translateKey(value, lang));
      });
    });

    document.querySelectorAll('.lang-btn').forEach(btn => {
      const active = btn.dataset.lang === lang;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-pressed', String(active));
    });

    try { localStorage.setItem('portfolio-language', lang); } catch (_) {}
    window.dispatchEvent(new CustomEvent('portfolioLanguageChanged', { detail: { lang } }));
  }

  function init() {
    captureOriginals();
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
    });
    let saved = 'es';
    try { saved = localStorage.getItem('portfolio-language') || 'es'; } catch (_) {}
    const requested = new URLSearchParams(window.location.search).get('lang');
    applyLanguage(['es', 'en', 'it'].includes(requested) ? requested : saved);
  }

  window.t = (key, lang) => translateKey(key, lang || currentLanguage);
  window.setPortfolioLanguage = applyLanguage;
  window.getPortfolioLanguage = () => currentLanguage;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
})();
