
const root = document.documentElement;
const header = document.querySelector(".site-header");
const themeToggle = document.getElementById("themeToggle");
const themeIcon = themeToggle?.querySelector(".theme-icon");
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const navLinks = [...document.querySelectorAll(".nav-link")];
const languageToggle = document.getElementById("languageToggle");
const languageMenu = document.getElementById("languageMenu");
const languageLabel = document.getElementById("languageLabel");

const TEXT_TRANSLATIONS = {
  "Rowan Ali": "روان علي",
  "Skip to content": "تخطي إلى المحتوى",
  "Home": "الرئيسية",
  "About": "نبذة عني",
  "Skills": "المهارات",
  "Experience": "الخبرات",
  "Projects": "المشاريع",
  "Services": "الخدمات",
  "Education": "التعليم",
  "Testimonials": "التوصيات",
  "Contact": "تواصل معي",
  "Get In Touch": "تواصل معي",
  "English": "English",
  "العربية": "العربية",
  "Open to Data Science & ML opportunities": "متاحة لفرص في علم البيانات وتعلّم الآلة",
  "Hello, I'm": "مرحبًا، أنا",
  "Data Scientist | Machine Learning & Deep Learning | Neural Networks & NLP | Big Data & Data Engineering | Data Analytics & Business Intelligence | Predictive Modeling & Time Series Forecasting": "عالمة بيانات | تعلّم الآلة والتعلّم العميق | الشبكات العصبية ومعالجة اللغة الطبيعية | البيانات الضخمة وهندسة البيانات | تحليل البيانات وذكاء الأعمال | النمذجة التنبؤية والتنبؤ بالسلاسل الزمنية",
  "I transform complex data into intelligent, scalable, and decision-ready solutions — combining statistical reasoning, advanced modeling, and engineering to create measurable real-world value.": "أحوّل البيانات المعقدة إلى حلول ذكية وقابلة للتوسع وجاهزة لدعم القرار، من خلال الجمع بين التفكير الإحصائي والنمذجة المتقدمة والهندسة لتحقيق قيمة واقعية قابلة للقياس.",
  "View My Work": "عرض أعمالي",
  "Download CV": "تحميل السيرة الذاتية",
  "GitHub": "GitHub",
  "LinkedIn": "LinkedIn",
  "Email": "البريد الإلكتروني",
  "Scroll": "مرّر",
  "About Me": "نبذة عني",
  "Data, intelligence, and impact — built with purpose.": "بيانات وذكاء وتأثير — حلول تُبنى بهدف واضح.",
  "I am a Data Scientist with a strong multidisciplinary foundation across Machine Learning, Deep Learning, Neural Networks, Natural Language Processing, Big Data, Data Engineering, Data Analytics, Statistical Modeling, Business Intelligence, and Time Series Forecasting.": "أنا عالمة بيانات أمتلك أساسًا قويًا ومتعدد التخصصات في تعلّم الآلة، والتعلّم العميق، والشبكات العصبية، ومعالجة اللغة الطبيعية، والبيانات الضخمة، وهندسة البيانات، وتحليل البيانات، والنمذجة الإحصائية، وذكاء الأعمال، والتنبؤ بالسلاسل الزمنية.",
  "I specialize in transforming complex and large-scale data into reliable, intelligent, and actionable solutions. My experience spans the end-to-end data lifecycle, including data collection and preprocessing, exploratory data analysis, feature engineering, statistical analysis, predictive modeling, model evaluation, visualization, and insight generation.": "أتخصص في تحويل البيانات المعقدة وواسعة النطاق إلى حلول موثوقة وذكية وقابلة للتطبيق. وتشمل خبرتي دورة حياة البيانات كاملة، بدءًا من جمع البيانات ومعالجتها المسبقة، مرورًا بالتحليل الاستكشافي وهندسة الخصائص والتحليل الإحصائي والنمذجة التنبؤية وتقييم النماذج والتصور البياني، وصولًا إلى استخلاص الرؤى.",
  "My technical work includes developing machine learning and deep learning models, neural network architectures, NLP pipelines, classification and regression systems, forecasting solutions, and data-driven analytical applications. I also work with large-scale data processing, database systems, data pipelines, and business intelligence to bridge the gap between raw data, advanced analytics, and practical decision-making.": "يشمل عملي التقني تطوير نماذج تعلّم الآلة والتعلّم العميق، وبنى الشبكات العصبية، وخطوط معالجة اللغة الطبيعية، وأنظمة التصنيف والانحدار، وحلول التنبؤ، والتطبيقات التحليلية المعتمدة على البيانات. كما أعمل على معالجة البيانات واسعة النطاق، وأنظمة قواعد البيانات، وخطوط البيانات، وذكاء الأعمال لربط البيانات الخام بالتحليلات المتقدمة وصنع القرار العملي.",
  "I work primarily with Python, SQL, and R, alongside modern machine learning, deep learning, data engineering, and analytical technologies. My approach combines strong statistical reasoning, analytical thinking, and technical implementation to build solutions that are accurate, scalable, interpretable, and aligned with real-world objectives.": "أعمل بشكل أساسي باستخدام Python وSQL وR، إلى جانب تقنيات حديثة في تعلّم الآلة والتعلّم العميق وهندسة البيانات والتحليلات. ويجمع أسلوبي بين الاستدلال الإحصائي القوي والتفكير التحليلي والتنفيذ التقني لبناء حلول دقيقة وقابلة للتوسع وقابلة للتفسير ومتوافقة مع الأهداف الواقعية.",
  "I am continuously expanding my expertise across Data Science and Artificial Intelligence, with a particular interest in advanced Machine Learning, Deep Learning, NLP, Big Data technologies, Data Engineering, predictive analytics, and intelligent data-driven systems. My goal is to turn challenging data problems into robust solutions that deliver meaningful insights and measurable value.": "أواصل تطوير خبرتي في علم البيانات والذكاء الاصطناعي، مع اهتمام خاص بتعلّم الآلة المتقدم، والتعلّم العميق، ومعالجة اللغة الطبيعية، وتقنيات البيانات الضخمة، وهندسة البيانات، والتحليلات التنبؤية، والأنظمة الذكية المعتمدة على البيانات. وهدفي هو تحويل تحديات البيانات المعقدة إلى حلول قوية تقدم رؤى ذات معنى وقيمة قابلة للقياس.",
  "Technical Skills": "المهارات التقنية",
  "A practical toolkit for end-to-end data work.": "مجموعة أدوات عملية تغطي دورة العمل بالبيانات من البداية إلى النهاية.",
  "Focused capabilities selected from my strongest and most relevant areas.": "قدرات مركزة من أقوى المجالات وأكثرها ارتباطًا بخبرتي.",
  "Data Science & Analytics": "علم البيانات والتحليلات",
  "EDA, preprocessing, feature engineering, statistical analysis, predictive modeling, data mining, visualization, BI, forecasting.": "التحليل الاستكشافي، المعالجة المسبقة، هندسة الخصائص، التحليل الإحصائي، النمذجة التنبؤية، تنقيب البيانات، التصور البياني، ذكاء الأعمال، والتنبؤ.",
  "Machine Learning & AI": "تعلّم الآلة والذكاء الاصطناعي",
  "Regression, classification, clustering, ensemble methods, feature selection, dimensionality reduction, evaluation, neural networks.": "الانحدار، التصنيف، التجميع، النماذج التجميعية، اختيار الخصائص، خفض الأبعاد، التقييم، والشبكات العصبية.",
  "NLP & Text Intelligence": "معالجة اللغة الطبيعية وذكاء النصوص",
  "Text preprocessing, TF-IDF, semantic modeling, sequence models, attention, transformers, biomedical NER, topic exploration.": "المعالجة المسبقة للنصوص، TF-IDF، النمذجة الدلالية، نماذج التسلسل، آليات الانتباه، المحولات، التعرف على الكيانات الطبية، واستكشاف الموضوعات.",
  "Big Data & Engineering": "البيانات الضخمة وهندستها",
  "Distributed computing, scalable processing, ETL concepts, pipelines, batch/stream processing, distributed storage and ecosystems.": "الحوسبة الموزعة، المعالجة القابلة للتوسع، مفاهيم ETL، خطوط البيانات، المعالجة الدفعية والمتدفقة، التخزين الموزع، ومنظومات البيانات الضخمة.",
  "Databases & Cloud": "قواعد البيانات والحوسبة السحابية",
  "Relational databases, SQL, MongoDB, database design, data modeling, cloud fundamentals and scalable data environments.": "قواعد البيانات العلائقية، SQL، MongoDB، تصميم قواعد البيانات، نمذجة البيانات، أساسيات الحوسبة السحابية، وبيئات البيانات القابلة للتوسع.",
  "Deployment & Development": "النشر والتطوير",
  "ML pipelines, REST APIs, application integration, version control, model deployment, experimentation workflows and MLOps fundamentals.": "خطوط تعلّم الآلة، واجهات REST، تكامل التطبيقات، التحكم في الإصدارات، نشر النماذج، مسارات التجارب، وأساسيات MLOps.",
  "Learning by building, testing, and shipping.": "أتعلّم من خلال البناء والاختبار وتحويل الأفكار إلى تطبيقات عملية.",
  "Machine Learning Intern": "متدربة تعلّم آلة",
  "Remote": "عن بُعد",
  "Egypt": "مصر",
  "Project-Based": "قائم على المشاريع",
  "HCIA-Big Data Trainee": "متدربة HCIA للبيانات الضخمة",
  "AI & Machine Learning Trainee": "متدربة ذكاء اصطناعي وتعلّم آلة",
  "Working through a project-based ML track focused on problem framing, data preparation, model development, evaluation, AI-assisted workflows, and portfolio-ready solutions.": "أعمل ضمن مسار عملي قائم على المشاريع في تعلّم الآلة يركز على صياغة المشكلات، وتجهيز البيانات، وتطوير النماذج، والتقييم، ومسارات العمل المدعومة بالذكاء الاصطناعي، وبناء حلول جاهزة للعرض في ملف الأعمال.",
  "Hands-on training across data preprocessing, machine learning, deep learning, NLP, computer vision, Azure, MLflow, and MLOps-oriented workflows.": "تدريب عملي يشمل المعالجة المسبقة للبيانات، وتعلّم الآلة، والتعلّم العميق، ومعالجة اللغة الطبيعية، والرؤية الحاسوبية، وAzure، وMLflow، ومسارات العمل المرتبطة بـMLOps.",
  "Built a practical foundation in distributed systems and large-scale data processing using technologies including HDFS, MapReduce, YARN, Hive, HBase, Spark, Flink, Kafka, and more.": "بنيت أساسًا عمليًا في الأنظمة الموزعة ومعالجة البيانات واسعة النطاق باستخدام تقنيات تشمل HDFS وMapReduce وYARN وHive وHBase وSpark وFlink وKafka وغيرها.",
  "Completed competitive training in ML, deep learning, NLP, computer vision and deployment, and was recognized as a top participant based on performance and assessment results.": "أكملت تدريبًا تنافسيًا في تعلّم الآلة والتعلّم العميق ومعالجة اللغة الطبيعية والرؤية الحاسوبية والنشر، وتم تمييزي ضمن أفضل المشاركين بناءً على الأداء ونتائج التقييم.",
  "Featured Projects": "أبرز المشاريع",
  "Selected work that shows how I solve problems.": "أعمال مختارة توضح طريقة تحليلي للمشكلات وبناء الحلول.",
  "All": "الكل",
  "Machine Learning": "تعلّم الآلة",
  "NLP": "معالجة اللغة الطبيعية",
  "Computer Vision": "الرؤية الحاسوبية",
  "Data Engineering": "هندسة البيانات",
  "Analytics": "التحليلات",
  "Forecasting · Distributed Systems": "التنبؤ · الأنظمة الموزعة",
  "Distributed Weather Forecasting & Analytics Platform": "منصة موزعة للتنبؤ بالطقس والتحليلات",
  "Scalable forecasting workflow combining distributed processing, feature engineering, predictive modeling, and analytics.": "مسار تنبؤ قابل للتوسع يجمع بين المعالجة الموزعة وهندسة الخصائص والنمذجة التنبؤية والتحليلات.",
  "Forecasting": "التنبؤ",
  "Distributed Systems": "الأنظمة الموزعة",
  "View case study": "عرض دراسة الحالة",
  "NLP · Biomedical Analytics": "معالجة اللغة الطبيعية · التحليلات الطبية الحيوية",
  "Medical NLP & Semantic Disease Analysis": "تحليل الأمراض الدلالي ومعالجة اللغة الطبيعية الطبية",
  "End-to-end medical NLP pipeline for semantic analysis and knowledge extraction from more than 18,000 biomedical documents.": "خط معالجة لغة طبيعية طبي متكامل للتحليل الدلالي واستخراج المعرفة من أكثر من 18,000 وثيقة طبية حيوية.",
  "Machine Learning · Data Mining": "تعلّم الآلة · تنقيب البيانات",
  "Crime Trend Prediction System": "نظام التنبؤ باتجاهات الجريمة",
  "Large-scale analytical and predictive workflow for identifying patterns and forecasting crime trends using 500,000+ records.": "مسار تحليلي وتنبؤي واسع النطاق لاكتشاف الأنماط والتنبؤ باتجاهات الجريمة باستخدام أكثر من 500,000 سجل.",
  "NLP · Deep Learning · Deployment": "معالجة اللغة الطبيعية · التعلّم العميق · النشر",
  "IMDb Sentiment Intelligence": "تحليل مشاعر IMDb الذكي",
  "Complete sentiment-classification lifecycle spanning classical NLP, recurrent deep learning, Transformers, error analysis, and Streamlit deployment.": "دورة متكاملة لتصنيف المشاعر تشمل معالجة اللغة الطبيعية التقليدية، والتعلّم العميق المتكرر، والمحولات، وتحليل الأخطاء، والنشر باستخدام Streamlit.",
  "Computer Vision · Transfer Learning": "الرؤية الحاسوبية · التعلّم بالنقل",
  "Natural Scene Classification": "تصنيف المشاهد الطبيعية",
  "End-to-end six-class image classification with a custom CNN, MobileNetV2 transfer learning, fine-tuning, Grad-CAM explainability, and deployment.": "نظام متكامل لتصنيف الصور إلى ست فئات باستخدام CNN مخصصة، والتعلّم بالنقل عبر MobileNetV2، والضبط الدقيق، وGrad-CAM للتفسير، والنشر.",
  "R · Business Intelligence": "R · ذكاء الأعمال",
  "Retail Analytics & Market Basket Analysis": "تحليلات التجزئة وتحليل سلة السوق",
  "Retail analytics solution using association rules and statistical analysis to uncover purchasing patterns and business opportunities.": "حل لتحليلات التجزئة يستخدم قواعد الارتباط والتحليل الإحصائي لاكتشاف أنماط الشراء والفرص التجارية.",
  "What I Can Help With": "كيف يمكنني المساعدة",
  "Data solutions designed around the problem — not the buzzword.": "حلول بيانات تُصمَّم وفق المشكلة الفعلية، لا وفق المصطلحات الرائجة.",
  "Data Analysis & BI": "تحليل البيانات وذكاء الأعمال",
  "Clean, explore, visualize, and translate data into decision-ready insights, dashboards, and reports.": "تنظيف البيانات واستكشافها وتصويرها وتحويلها إلى رؤى ولوحات معلومات وتقارير جاهزة لدعم القرار.",
  "Build, evaluate, and compare predictive models with reproducible preprocessing and careful performance analysis.": "بناء النماذج التنبؤية وتقييمها ومقارنتها باستخدام معالجة مسبقة قابلة لإعادة الإنتاج وتحليل دقيق للأداء.",
  "NLP & Text Analytics": "معالجة اللغة الطبيعية وتحليل النصوص",
  "Transform unstructured text into structured representations, semantic insights, entities, and predictive features.": "تحويل النصوص غير المهيكلة إلى تمثيلات منظمة ورؤى دلالية وكيانات وخصائص تنبؤية.",
  "Design forecasting pipelines with meaningful features, model comparison, and business-oriented evaluation.": "تصميم مسارات تنبؤ بخصائص ذات معنى مع مقارنة النماذج وتقييم موجه للأهداف العملية.",
  "Data Engineering Foundations": "أساسيات هندسة البيانات",
  "Structure pipelines and scalable processing workflows using distributed data concepts and modern ecosystems.": "هيكلة خطوط البيانات ومسارات المعالجة القابلة للتوسع باستخدام مفاهيم البيانات الموزعة والمنظومات الحديثة.",
  "Reserved for verified feedback from clients, collaborators, and mentors.": "هذا القسم مخصص لاحقًا للتوصيات الموثقة من العملاء والمتعاونين والمشرفين.",
  "Strong foundations, continuously expanded through practice.": "أساس قوي أوسّعه باستمرار من خلال التعلم والتطبيق العملي.",
  "B.Sc. in Data Science": "بكالوريوس العلوم في علم البيانات",
  "Faculty of Computing and Data Science, Alexandria University": "كلية الحاسبات وعلوم البيانات، جامعة الإسكندرية",
  "Major: Data Science": "التخصص: علم البيانات",
  "Let's Connect": "لنتواصل",
  "Have a data challenge, opportunity, or idea?": "لديك تحدٍ في البيانات أو فرصة أو فكرة؟",
  "I'm always interested in meaningful data science, machine learning, analytics, and collaborative opportunities.": "أهتم دائمًا بفرص علم البيانات وتعلّم الآلة والتحليلات والمشروعات التعاونية ذات القيمة.",
  "Designed & built with intention.": "صُمم وبُني بعناية.",
  "Back to top ↑": "العودة إلى الأعلى ↑",
  "Case Study": "دراسة حالة",
  "Project Title": "عنوان المشروع",
  "View on GitHub ↗": "عرض على GitHub ↗"
};
const PROJECTS = {
  "weather": {
    "en": {
      "title": "Distributed Weather Forecasting & Analytics Platform",
      "label": "Forecasting · Distributed Systems",
      "blocks": [
        [
          "Problem",
          "Design a scalable workflow for processing, analyzing, and forecasting large-scale weather data without relying solely on centralized processing."
        ],
        [
          "Approach",
          "Built a pipeline covering preprocessing, transformation, feature engineering, analytical processing, forecasting, data partitioning, and replication."
        ],
        [
          "Engineering Focus",
          "Applied distributed computing principles to improve scalability, reliability, and fault tolerance across processing tasks."
        ],
        [
          "Outcome",
          "Integrated distributed data processing and predictive analytics into one end-to-end forecasting workflow."
        ]
      ]
    },
    "ar": {
      "title": "منصة موزعة للتنبؤ بالطقس والتحليلات",
      "label": "التنبؤ · الأنظمة الموزعة",
      "blocks": [
        [
          "المشكلة",
          "تصميم مسار قابل للتوسع لمعالجة بيانات الطقس واسعة النطاق وتحليلها والتنبؤ بها دون الاعتماد الكامل على المعالجة المركزية."
        ],
        [
          "المنهج",
          "بناء خط بيانات يشمل المعالجة المسبقة والتحويل وهندسة الخصائص والمعالجة التحليلية والتنبؤ وتقسيم البيانات ونسخها."
        ],
        [
          "التركيز الهندسي",
          "تطبيق مبادئ الحوسبة الموزعة لتحسين القابلية للتوسع والموثوقية وتحمل الأعطال."
        ],
        [
          "النتيجة",
          "دمج معالجة البيانات الموزعة والتحليلات التنبؤية في مسار تنبؤ متكامل."
        ]
      ]
    }
  },
  "medical": {
    "en": {
      "title": "Medical NLP & Semantic Disease Analysis",
      "label": "NLP · Biomedical Analytics",
      "blocks": [
        [
          "Problem",
          "Extract meaningful disease-related knowledge and hidden semantic patterns from a large biomedical and clinical research corpus."
        ],
        [
          "Data Scale",
          "Processed more than 18,000 biomedical and clinical research documents."
        ],
        [
          "Approach",
          "Applied cleaning, tokenization, POS tagging, custom stop-word removal, lemmatization, TF-IDF, LSA with SVD, and biomedical named entity recognition."
        ],
        [
          "Outcome",
          "Created semantic representations and interactive exploration tools for medical topic discovery and clinically relevant entity extraction."
        ]
      ]
    },
    "ar": {
      "title": "تحليل الأمراض الدلالي ومعالجة اللغة الطبيعية الطبية",
      "label": "معالجة اللغة الطبيعية · التحليلات الطبية الحيوية",
      "blocks": [
        [
          "المشكلة",
          "استخراج معرفة مرتبطة بالأمراض وأنماط دلالية خفية من مجموعة كبيرة من الأبحاث والوثائق الطبية الحيوية والسريرية."
        ],
        [
          "حجم البيانات",
          "معالجة أكثر من 18,000 وثيقة بحثية طبية حيوية وسريرية."
        ],
        [
          "المنهج",
          "تطبيق التنظيف والتقسيم إلى رموز ووسم أجزاء الكلام وإزالة كلمات التوقف المخصصة والاشتقاق وTF-IDF وLSA باستخدام SVD والتعرف على الكيانات الطبية الحيوية."
        ],
        [
          "النتيجة",
          "إنشاء تمثيلات دلالية وأدوات استكشاف تفاعلية لاكتشاف الموضوعات الطبية واستخراج الكيانات ذات الصلة سريريًا."
        ]
      ]
    }
  },
  "crime": {
    "en": {
      "title": "Crime Trend Prediction System",
      "label": "Machine Learning · Data Mining",
      "blocks": [
        [
          "Problem",
          "Analyze historical crime patterns and build a predictive workflow for future trend analysis."
        ],
        [
          "Data Scale",
          "Worked with more than 500,000 crime records."
        ],
        [
          "Approach",
          "Performed cleaning, preprocessing, transformation, feature engineering, EDA, model comparison, validation, and SQL-based data management."
        ],
        [
          "Outcome",
          "Identified temporal, regional, and behavioral patterns and supported data-driven interpretation of future crime trends."
        ]
      ]
    },
    "ar": {
      "title": "نظام التنبؤ باتجاهات الجريمة",
      "label": "تعلّم الآلة · تنقيب البيانات",
      "blocks": [
        [
          "المشكلة",
          "تحليل أنماط الجريمة التاريخية وبناء مسار تنبؤي لدراسة الاتجاهات المستقبلية."
        ],
        [
          "حجم البيانات",
          "العمل على أكثر من 500,000 سجل جريمة."
        ],
        [
          "المنهج",
          "تنفيذ التنظيف والمعالجة المسبقة والتحويل وهندسة الخصائص والتحليل الاستكشافي ومقارنة النماذج والتحقق وإدارة البيانات باستخدام SQL."
        ],
        [
          "النتيجة",
          "تحديد الأنماط الزمنية والإقليمية والسلوكية ودعم تفسير اتجاهات الجريمة المستقبلية اعتمادًا على البيانات."
        ]
      ]
    }
  },
  "imdb": {
    "en": {
      "title": "IMDb Sentiment Intelligence",
      "label": "NLP · Deep Learning · Deployment",
      "blocks": [
        [
          "Problem",
          "Build a robust binary sentiment-classification system for IMDb movie reviews and compare classical NLP with recurrent and Transformer-based approaches."
        ],
        [
          "Pipeline",
          "Implemented text cleaning, TF-IDF optimization, Word2Vec, Simple RNN, LSTM, Bidirectional LSTM, GRU, vocabulary and sequence-length tuning, a pretrained Transformer, qualitative error analysis, and Streamlit deployment."
        ],
        [
          "Evaluation",
          "The optimized TF-IDF + Logistic Regression pipeline achieved 89.58% accuracy and 89.62% F1-score on the complete 25,000-review official test set."
        ],
        [
          "Outcome",
          "The project demonstrated that greater model complexity does not automatically improve generalization, while delivering a complete and deployable NLP workflow."
        ]
      ]
    },
    "ar": {
      "title": "تحليل مشاعر IMDb الذكي",
      "label": "معالجة اللغة الطبيعية · التعلّم العميق · النشر",
      "blocks": [
        [
          "المشكلة",
          "بناء نظام قوي ثنائي الفئات لتصنيف مشاعر مراجعات IMDb ومقارنة أساليب معالجة اللغة الطبيعية التقليدية بالنماذج المتكررة والمحولات."
        ],
        [
          "خط العمل",
          "تنفيذ تنظيف النصوص وتحسين TF-IDF وWord2Vec وSimple RNN وLSTM وBidirectional LSTM وGRU وضبط حجم المفردات وطول التسلسل واستخدام Transformer مسبق التدريب وتحليل الأخطاء والنشر عبر Streamlit."
        ],
        [
          "التقييم",
          "حقق مسار TF-IDF مع Logistic Regression بعد التحسين دقة 89.58% ودرجة F1 بلغت 89.62% على مجموعة الاختبار الرسمية الكاملة المكونة من 25,000 مراجعة."
        ],
        [
          "النتيجة",
          "أظهر المشروع أن زيادة تعقيد النموذج لا تعني تلقائيًا تحسن القدرة على التعميم، مع تقديم مسار NLP متكامل وقابل للنشر."
        ]
      ]
    }
  },
  "scenes": {
    "en": {
      "title": "Natural Scene Classification",
      "label": "Computer Vision · Transfer Learning",
      "blocks": [
        [
          "Problem",
          "Build a six-class natural-scene image classifier and compare a custom CNN with transfer learning for stronger real-world recognition."
        ],
        [
          "Pipeline",
          "Completed image EDA, leakage-aware splitting, preprocessing, augmentation, baseline CNN development, MobileNetV2 transfer learning, controlled fine-tuning, quantitative evaluation, confusion analysis, Grad-CAM, external-image prediction, model export, and Streamlit deployment."
        ],
        [
          "Evaluation",
          "The final fine-tuned MobileNetV2 achieved 92.17% test accuracy and 92.35% Macro F1."
        ],
        [
          "Outcome",
          "Transfer learning substantially improved natural-scene recognition while providing a deployable and explainable final model."
        ]
      ]
    },
    "ar": {
      "title": "تصنيف المشاهد الطبيعية",
      "label": "الرؤية الحاسوبية · التعلّم بالنقل",
      "blocks": [
        [
          "المشكلة",
          "بناء مصنف صور للمشاهد الطبيعية من ست فئات ومقارنة CNN مخصصة بالتعلّم بالنقل لتحسين التعرف العملي."
        ],
        [
          "خط العمل",
          "تنفيذ التحليل الاستكشافي للصور، وتقسيم البيانات مع منع التسرب، والمعالجة المسبقة، وزيادة البيانات، وبناء CNN أساسية، والتعلّم بالنقل باستخدام MobileNetV2، والضبط الدقيق، والتقييم الكمي، وتحليل الالتباس، وGrad-CAM، والتنبؤ على صور خارجية، وتصدير النموذج، والنشر عبر Streamlit."
        ],
        [
          "التقييم",
          "حقق نموذج MobileNetV2 النهائي بعد الضبط الدقيق دقة اختبار 92.17% وMacro F1 بلغت 92.35%."
        ],
        [
          "النتيجة",
          "حسّن التعلّم بالنقل التعرف على المشاهد الطبيعية بشكل واضح مع توفير نموذج نهائي قابل للنشر والتفسير."
        ]
      ]
    }
  },
  "retail": {
    "en": {
      "title": "Retail Analytics & Market Basket Analysis",
      "label": "R · Business Intelligence",
      "blocks": [
        [
          "Problem",
          "Understand supermarket purchasing behavior and identify product relationships that can support commercial decisions."
        ],
        [
          "Approach",
          "Used R for cleaning, preprocessing, exploratory analysis, statistical analysis, association rule mining, and market basket analysis."
        ],
        [
          "Business Focus",
          "Investigated frequent product combinations, customer behavior patterns, and opportunities around sales and product placement."
        ],
        [
          "Outcome",
          "Translated analytical findings into structured recommendations that connect statistical analysis with practical business value."
        ]
      ]
    },
    "ar": {
      "title": "تحليلات التجزئة وتحليل سلة السوق",
      "label": "R · ذكاء الأعمال",
      "blocks": [
        [
          "المشكلة",
          "فهم سلوك الشراء في المتاجر وتحديد العلاقات بين المنتجات التي يمكن أن تدعم القرارات التجارية."
        ],
        [
          "المنهج",
          "استخدام R في التنظيف والمعالجة المسبقة والتحليل الاستكشافي والتحليل الإحصائي وتنقيب قواعد الارتباط وتحليل سلة السوق."
        ],
        [
          "التركيز التجاري",
          "دراسة مجموعات المنتجات المتكررة وأنماط سلوك العملاء والفرص المرتبطة بالمبيعات وترتيب المنتجات."
        ],
        [
          "النتيجة",
          "تحويل النتائج التحليلية إلى توصيات منظمة تربط التحليل الإحصائي بالقيمة التجارية العملية."
        ]
      ]
    }
  }
};

let currentLanguage = localStorage.getItem("rowan-language") || "en";

/* Theme */
function preferredTheme() {
  const saved = localStorage.getItem("rowan-theme");
  if (saved === "light" || saved === "dark") return saved;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function applyTheme(theme) {
  root.dataset.theme = theme;
  if (themeIcon) themeIcon.textContent = theme === "dark" ? "☀" : "☾";
  if (themeToggle) {
    themeToggle.setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
  }
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", theme === "dark" ? "#130F18" : "#8A4FA3");
}
applyTheme(preferredTheme());
themeToggle?.addEventListener("click", () => {
  const next = root.dataset.theme === "dark" ? "light" : "dark";
  applyTheme(next);
  localStorage.setItem("rowan-theme", next);
});

/* Responsive navigation */
function closeMobileMenu() {
  navMenu?.classList.remove("open");
  menuToggle?.classList.remove("active");
  menuToggle?.setAttribute("aria-expanded", "false");
}
menuToggle?.addEventListener("click", () => {
  const open = !navMenu.classList.contains("open");
  navMenu.classList.toggle("open", open);
  menuToggle.classList.toggle("active", open);
  menuToggle.setAttribute("aria-expanded", String(open));
});
navLinks.forEach(link => link.addEventListener("click", closeMobileMenu));

/* Language dropdown */
function setLanguageMenu(open) {
  languageMenu?.classList.toggle("open", open);
  languageMenu?.setAttribute("aria-hidden", String(!open));
  languageToggle?.setAttribute("aria-expanded", String(open));
}
languageToggle?.addEventListener("click", (e) => {
  e.stopPropagation();
  setLanguageMenu(!languageMenu.classList.contains("open"));
});
languageMenu?.addEventListener("click", e => e.stopPropagation());
document.addEventListener("click", () => setLanguageMenu(false));

/* Store each original English text node once, then translate every visible site text. */
const translatableNodes = [];
function collectTextNodes() {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
      const p = node.parentElement;
      if (!p || ["SCRIPT","STYLE","NOSCRIPT"].includes(p.tagName)) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }
  });
  let node;
  while ((node = walker.nextNode())) {
    const raw = node.nodeValue;
    const trimmed = raw.trim();
    if (TEXT_TRANSLATIONS[trimmed]) {
      translatableNodes.push({node, en: trimmed, prefix: raw.match(/^\s*/)[0], suffix: raw.match(/\s*$/)[0]});
    }
  }
}
collectTextNodes();

function translateStaticText(lang) {
  translatableNodes.forEach(item => {
    const value = lang === "ar" ? TEXT_TRANSLATIONS[item.en] : item.en;
    item.node.nodeValue = item.prefix + value + item.suffix;
  });
}

function applyLanguage(lang) {
  currentLanguage = lang === "ar" ? "ar" : "en";
  root.lang = currentLanguage;
  root.dir = currentLanguage === "ar" ? "rtl" : "ltr";
  translateStaticText(currentLanguage);
  if (languageLabel) languageLabel.textContent = currentLanguage === "ar" ? "AR" : "EN";
  document.querySelectorAll("[data-language]").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.language === currentLanguage);
  });
  localStorage.setItem("rowan-language", currentLanguage);
  setLanguageMenu(false);
}
document.querySelectorAll("[data-language]").forEach(btn => {
  btn.addEventListener("click", () => applyLanguage(btn.dataset.language));
});
applyLanguage(currentLanguage);

/* Sticky header + active link */
const sections = [...document.querySelectorAll("main section[id]")];
function updateScrollState() {
  header?.classList.toggle("scrolled", window.scrollY > 20);
  const checkpoint = window.scrollY + window.innerHeight * .34;
  let current = "home";
  sections.forEach(section => { if (checkpoint >= section.offsetTop) current = section.id; });
  navLinks.forEach(link => link.classList.toggle("active", link.getAttribute("href") === `#${current}`));
}
window.addEventListener("scroll", updateScrollState, {passive:true});
updateScrollState();

/* Reveal motion */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, {threshold:.1});
document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

/* Project filters */
const filterButtons = [...document.querySelectorAll(".filter-btn")];
const projectCards = [...document.querySelectorAll(".project-card")];
filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    const filter = button.dataset.filter;
    projectCards.forEach(card => {
      const categories = card.dataset.category.split(" ");
      card.classList.toggle("hidden", !(filter === "all" || categories.includes(filter)));
    });
  });
});

/* Project case-study modal, fully bilingual */
const modal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalLabel = document.getElementById("modalLabel");
const modalContent = document.getElementById("modalContent");
const modalGithub = document.getElementById("modalGithub");
let lastFocusedElement = null;

function openModal(projectKey) {
  const source = PROJECTS[projectKey];
  if (!source) return;
  const project = source[currentLanguage] || source.en;
  lastFocusedElement = document.activeElement;
  modalTitle.textContent = project.title;
  modalLabel.textContent = project.label;
  modalContent.innerHTML = `<div class="case-grid">${project.blocks.map(([title,text]) =>
    `<section class="case-block"><h3>${title}</h3><p>${text}</p></section>`).join("")}</div>`;
  const githubMap = {
    weather:"https://github.com/Rowan-ali/demand-forecasting-mlops",
    crime:"https://github.com/Rowan-ali/Crime-Rate",
    imdb:"https://github.com/Rowan-ali/IMDb-Sentiment-Intelligence",
    scenes:"https://github.com/Rowan-ali/Natural-Scene-Classification-Deep-Learning",
    medical:"https://github.com/Rowan-ali",
    retail:"https://github.com/Rowan-ali"
  };
  if (githubMap[projectKey]) {
    modalGithub.href = githubMap[projectKey];
    modalGithub.style.display = "inline-flex";
    modalGithub.textContent = currentLanguage === "ar" ? "عرض على GitHub ↗" : "View on GitHub ↗";
  } else {
    modalGithub.style.display = "none";
  }
  modal.classList.add("open");
  modal.setAttribute("aria-hidden","false");
  document.body.classList.add("modal-open");
  modal.querySelector(".modal-close")?.focus();
}
function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden","true");
  document.body.classList.remove("modal-open");
  lastFocusedElement?.focus();
}
document.querySelectorAll("[data-project]").forEach(btn => btn.addEventListener("click", () => openModal(btn.dataset.project)));
document.querySelectorAll("[data-close-modal]").forEach(el => el.addEventListener("click", closeModal));
document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    closeModal();
    setLanguageMenu(false);
    closeMobileMenu();
  }
});

const year = document.getElementById("currentYear");
if (year) year.textContent = new Date().getFullYear();
