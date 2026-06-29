const coursesData = [
  {
    id: 'adca',
    title: 'ADCA - Advance Diploma in Computer Applications',
    shortTitle: 'ADCA',
    category: 'Diploma',
    duration: '12 Months',
    fee: '6500₹',
    image: 'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    overview: 'Advance Diploma in Computer Applications is a comprehensive course covering everything from basics to programming, designed to make you proficient in modern office operations.',
    exams: [
      'Self Center',
      '2 Times Exam (Each Semester 6 Months)',
      'Practical Exam',
      'Project Work'
    ],
    syllabus: [
      'Computer Fundamental', 'Introduction to OS', 'Notepad', 'Word pad', 'MS Paint', 'DOS',
      'Microsoft Word', 'Microsoft Excel', 'Microsoft PowerPoint', 'Microsoft Access',
      'HTML and CSS', 'Photoshop and Basic Multimedia and CorelDraw', 'English and Hindi Typing',
      'Tally Prime', 'Internet', 'DFS, Installation, Basic Troubleshooting'
    ]
  },
  {
    id: 'dca',
    title: 'DCA - Diploma in Computer Applications',
    shortTitle: 'DCA',
    category: 'Diploma',
    duration: '06 Months',
    fee: '3500₹',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    overview: 'Diploma in Computer Applications is a foundational course to get you started with basic computer operations and Microsoft Office tools.',
    exams: [
      'Self Center', 'Theory Exam', 'Practical Exam', 'Project Work'
    ],
    syllabus: [
      'Computer Fundamental', 'Introduction to OS', 'Notepad', 'WordPad', 'Paint', 'DOS',
      'Microsoft Word', 'Microsoft Excel', 'Microsoft PowerPoint', 'Microsoft Access', 'Basics of Internet'
    ]
  },
  {
    id: 'adfa',
    title: 'ADFA - Advance Diploma in Financial Accounting',
    shortTitle: 'ADFA',
    category: 'Finance',
    duration: '12 Months',
    fee: '8500₹',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    overview: 'A complete package for aspiring accountants, combining computer fundamentals with advanced financial accounting using Tally Prime and web technologies.',
    exams: [
      'Self Center', 'Theory Exam', 'Practical Exam', 'Project Work'
    ],
    syllabus: [
      'Computer Fundamental', 'Introduction to OS', 'Notepad', 'Word pad', 'MS Paint', 'DOS',
      'MS Word', 'MS Excel', 'MS PowerPoint', 'Tally Prime', 'Introduction to Future Skill',
      'Introduction to Cyber Security', 'HTML', 'CSS', 'JavaScript', 'Python'
    ]
  },
  {
    id: 'dfa',
    title: 'DFA - Diploma in Financial Accounting',
    shortTitle: 'DFA',
    category: 'Finance',
    duration: '06 Months',
    fee: '4500₹',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    overview: 'Learn the essentials of financial accounting and computer operations, specifically focused on Tally Prime.',
    exams: [
      'Self Center', 'Theory Exam', 'Practical Exam', 'Project Work'
    ],
    syllabus: [
      'Computer Fundamental', 'Introduction to OS', 'Notepad', 'Word pad', 'Paint brush', 'DOS',
      'MS Word', 'MS Excel', 'MS PowerPoint', 'Tally Prime', 'Internet'
    ]
  },
  {
    id: 'adca-plus',
    title: 'ADCA Plus - Advance Diploma in Computer Application Plus',
    shortTitle: 'ADCA Plus',
    category: 'Diploma',
    duration: '15 Months',
    fee: '8500₹',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    overview: 'An extensive 15-month program that combines basic computer operations, financial accounting, graphic designing, and full-stack web development.',
    exams: [
      'Self Center', 'Theory Exam', 'Practical Exam', 'Project Work'
    ],
    syllabus: [
      'Computer Fundamental', 'Introduction to OS', 'Notepad', 'Word pad', 'Paint brush', 'DOS',
      'Microsoft Word', 'Microsoft Excel', 'Microsoft PowerPoint', 'MS Access', 'Hindi Typing',
      'Tally Prime', 'Internet', 'DFS', 'Installation', 'Basic Troubleshooting', 'Photoshop',
      'CorelDraw', 'Indesign', 'HTML', 'CSS', 'CSS Frameworks', 'JavaScript', 'Angular',
      'Introduction to Python', 'Introduction to Future Skill', 'Introduction to Cyber Security',
      'Introduction to Artificial Intelligence'
    ]
  },
  {
    id: 'tally-prime',
    title: 'Tally Prime - Digital Accounting',
    shortTitle: 'Tally Prime',
    category: 'Finance',
    duration: '03 Months',
    fee: '3500₹',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    overview: 'Master digital accounting, inventory management, taxation, and payroll with the industry-standard software, Tally Prime.',
    exams: [
      'Self Center', 'Theory Exam', 'Practical Exam'
    ],
    syllabus: [
      'Introduction of Accounting', 'Golden Rules of Accounting', 'Ledgers', 'Vouchers',
      'Journal Entries', 'Inventory Management', 'GST', 'TDS', 'TCS', 'Job Costing',
      'Payroll', 'Reports', 'Bank Reconciliation etc.'
    ]
  },
  {
    id: 'ccc',
    title: 'CCC - Course on Computer Concepts',
    shortTitle: 'CCC',
    category: 'Certification',
    duration: '03 Months',
    fee: '2500₹',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    overview: 'Government recognized basic IT literacy program for foundational computer skills required for many government jobs.',
    exams: [
      'Center - Sultanpur, Ayodhya (Own Choice, Many Centers)', 'Theory Exam'
    ],
    syllabus: [
      'Introduction to Computer', 'Introduction to Operating System', 'Word Processing',
      'Spread Sheet', 'Presentation', 'Introduction of Internet, WWW and Web Browsers',
      'E-mail, Social Networking and e-Governance Services', 'Digital Financial Tools Application',
      'Overview of FutureSkills and CyberSecurity'
    ]
  },
  {
    id: 'o-level',
    title: 'O-Level (NIELIT)',
    shortTitle: 'O-Level',
    category: 'Certification',
    duration: '1 Year',
    fee: '15000₹',
    image: 'https://images.unsplash.com/photo-1627398225081-24c89544eb1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    overview: 'NIELIT O-Level certification is a highly reputed program for a successful career in Information Technology.',
    exams: [
      'Theory Exam', 'Practical Exam', 'Project'
    ],
    syllabus: [
      'IT Tools and Basics of Networks (M1-R5)', 'Web Designing and Publishing (M2-R5)',
      'Programming and Problem Solving through Python (M3-R5)', 'Internet of Things and its Applications (M4-R5)',
      'Practical based on M1-R5, M2-R5, M3-R5, M4-R5 (PR1-R5)', 'Project (PJ1-R5)'
    ]
  },
  {
    id: 'python',
    title: 'Python - Programming Language',
    shortTitle: 'Python',
    category: 'Development',
    duration: '03 Months',
    fee: '3500₹',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    overview: 'Learn one of the most popular programming languages globally. From basic syntax to advanced libraries.',
    exams: [
      'Self Center', 'Theory Exam', 'Practical Exam', 'Project Work'
    ],
    syllabus: [
      'Introduction to Programming', 'Algorithms and Flowcharts', 'Introduction to Python',
      'Operators', 'Expressions', 'Python Statements', 'Sequence Data Types', 'Functions',
      'File Processing', 'Scope and Modules', 'NumPy Basics', 'Assignment'
    ]
  },
  {
    id: 'advance-excel',
    title: 'Advance Excel',
    shortTitle: 'Advance Excel',
    category: 'Finance',
    duration: '3 Months',
    fee: '3000₹',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    overview: 'Master complex data analysis, pivot tables, and dashboard creation with Advanced Microsoft Excel.',
    exams: [
      'Self Center', 'Theory Exam', 'Practical Exam'
    ],
    syllabus: [
      'Advanced Formulas and Functions', 'Logical, Text and Date Functions',
      'Lookup Functions (VLOOKUP, HLOOKUP, XLOOKUP)', 'Pivot Table and Pivot Chart',
      'Data Analysis and Data Cleaning', 'Conditional Formatting (Advanced)',
      'Data Validation and Drop-down List', 'Charts and Advanced Graphs',
      'What-If Analysis (Goal Seek, Scenario, Data Table)', 'Power Query (Basic)',
      'Dashboard and Report Creation', 'Macros and VBA (Introduction)'
    ]
  },
  {
    id: 'dtp',
    title: 'DTP - Desktop Publishing',
    shortTitle: 'DTP',
    category: 'Design',
    duration: '03 Months',
    fee: '5000₹',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    overview: 'Learn the core software for creating beautiful print and digital media, including Photoshop and CorelDraw.',
    exams: [
      'Self Center', 'Theory Exam', 'Practical Exam', 'Project Work'
    ],
    syllabus: [
      'Introduction to Desktop Publishing', 'Fundamentals of Design', 'Color Theory',
      'Typography', 'Introduction to Graphic', 'HyperMedia', 'Logo Design', 'Banner Design',
      'Pamphlet Design', 'Book Cover Design', 'Adobe Photoshop', 'CorelDraw'
    ]
  },
  {
    id: 'graphic-designing',
    title: 'Graphic Designing - Creativity',
    shortTitle: 'Graphic Designing',
    category: 'Design',
    duration: '06 Months',
    fee: '8500₹',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    overview: 'Comprehensive graphic design training using industry-standard tools for UI/UX, branding, and print.',
    exams: [
      'Self Center', 'Theory Exam', 'Practical Exam', 'Project Work'
    ],
    syllabus: [
      'Introduction to Graphics Designing', 'Concept of Design', 'Color Theory', 'Typography',
      'Introduction to Multimedia', 'Advance Photoshop', 'Corel Draw', 'Indesign',
      'Newspaper Layout with Hindi and English Typing', 'Banner Design', 'Adobe Illustrator',
      'Logo Design', 'Product Package Design', 'Image Manipulation', '2D Character', '2D Scenes Design'
    ]
  },
  {
    id: 'animation-motion-graphics',
    title: 'Diploma in Animation & Motion Graphics',
    shortTitle: 'Animation & Motion',
    category: 'Design',
    duration: '06 Months',
    fee: '9000₹',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    overview: 'Bring static designs to life with professional animation and motion graphics techniques using Adobe After Effects.',
    exams: [
      'Self Center', 'Project Work'
    ],
    syllabus: [
      'Introduction to After Effects', 'Layers & Timeline', 'Keyframe Animation', 'Text Animation',
      'Shape & Object Animation', 'Masking & Rotoscoping', 'Effects & Presets', 'Motion Graphics Basics',
      'Green Screen (Chroma Key)', '3D Layers & Camera (Basic)', 'Audio & Video Sync', 'Render & Export'
    ]
  },
  {
    id: 'ai-generative',
    title: 'Artificial Intelligence & Generative AI',
    shortTitle: 'Generative AI',
    category: 'Development',
    duration: '2 Months',
    fee: '2500₹',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    overview: 'Stay ahead of the curve by learning how to prompt, build, and integrate Generative AI technologies into daily workflows.',
    exams: [
      'Self Center', 'Project Work'
    ],
    syllabus: [
      'Introduction to Artificial Intelligence', 'Basics of Machine Learning', 'Introduction to Generative AI',
      'Prompt Engineering Fundamentals', 'Text Generation (AI Text Creation)', 'Image Generation (AI Image Creation)',
      'Audio Generation (AI Voice, Music, Sound)', 'Video Generation (AI Video Creation)', 'Code Generation using AI',
      'Multimodal AI (Text + Image + Audio + Video + Code)', 'AI Tools and Real-world Applications',
      'Ethics, Safety and Responsible Use of AI'
    ]
  },
  {
    id: 'wordpress',
    title: 'WordPress Website Development',
    shortTitle: 'WordPress',
    category: 'Development',
    duration: '3 Months',
    fee: '4500₹',
    image: 'https://images.unsplash.com/photo-1616469829581-73993eb86b02?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    overview: 'Learn to build professional, fully-functional websites and e-commerce stores without writing code.',
    exams: [
      'Self Center', 'Project Work'
    ],
    syllabus: [
      'Introduction to WordPress', 'Domain and Hosting Setup', 'WordPress Installation and Dashboard',
      'Themes Installation and Customization', 'Pages, Posts and Media Management', 'Menus and Widgets',
      'Plugins Installation and Configuration', 'Contact Forms and Basic SEO Setup', 'Website Security and Backup',
      'Speed Optimization (Basic)', 'E-commerce Website using WooCommerce', 'Website Launch and Maintenance'
    ]
  },
  {
    id: 'web-development',
    title: 'Web Development',
    shortTitle: 'Web Development',
    category: 'Development',
    duration: '06 Months',
    fee: '15000₹',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    overview: 'A complete full-stack web development program teaching HTML, CSS, JavaScript, and popular frontend frameworks.',
    exams: [
      'Self Center', 'Theory Exam', 'Practical Exam', 'Project Work'
    ],
    syllabus: [
      'Introduction to Web Development', 'Introduction to Programming Language',
      'Introduction to HTML, CSS, JavaScript', 'HTML and Editors', 'CSS', 'CSS Frameworks',
      'JavaScript', 'AngularJS', 'Projects and Assignments'
    ]
  },
  {
    id: 'video-editing-basic',
    title: 'Video Editing - Basic',
    shortTitle: 'Video Editing (Basic)',
    category: 'Design',
    duration: '06 Months',
    fee: '6000₹',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    overview: 'A foundational course for editing videos, adding transitions, and managing tracks using Filmora X.',
    exams: [
      'Self Center', 'Theory Exam', 'Practical Exam', 'Project Work'
    ],
    syllabus: [
      'Introduction to Multimedia', 'Color Theory', 'Typography', 'Video Editing with Filmora X',
      'Camera Angles', 'Manage Multiple Tracks', 'Color Correction and Color Grading',
      'Effects and Transitions', 'Process of Film Step Exporting'
    ]
  },
  {
    id: 'video-editing-advance',
    title: 'Video Editing - Advance',
    shortTitle: 'Video Editing (Adv)',
    category: 'Design',
    duration: '03 Months',
    fee: '6000₹',
    image: 'https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    overview: 'Professional video editing techniques, creative visualization, and audio sync using Adobe Premiere Pro.',
    exams: [
      'Self Center', 'Theory Exam', 'Practical Exam', 'Project Work'
    ],
    syllabus: [
      'Introduction to Multimedia', 'Color Theory', 'Typography', 'Visualization Concept and Phenomena',
      'Basic Steps for Creative Visualization', 'Camera Angles', 'Audio Editing using Forge',
      'Video Editing using Adobe Premiere Pro', 'Product Ads Creation', 'Sequencing and Multi-Track Management',
      'Color Correction and Color Grading', 'Effects and Transitions', 'Process of Film Step Exporting'
    ]
  }
];

// Exporting to window for static site usage without module loaders
window.coursesData = coursesData;
