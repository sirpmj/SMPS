/* =========================================================================
   SMPS — i18n.js : हिन्दी ⇄ English  (website + login app dono mein ek hi file)
   -------------------------------------------------------------------------
   • Page ke upar-neeche kone mein "हिं | EN" button aata hai; chunav phone/browser mein yaad rehta hai.
   • Sirf SCREEN ka text badalta hai. Google Sheet ka data (naam, vivaran, minutes) jaisa hai waisa
     hi rehta hai; WhatsApp ke sandesh bhi Templates sheet ke hisaab se hi jaate hain.
   • Naya Hindi shabd jodna ho to neeche D (poora Hindi vaakya → English) ya M (Hindi+English mila) mein
     ek line jodein. Kisi bhi page ko ?lang=en ya ?lang=hi se seedha us bhasha mein khol sakte hain.
   • Hindi chunne par page jaisa pehle tha waisa hi (koi badlaav nahi).
   ========================================================================= */
(function () {
  "use strict";
  var KEY = "smps_lang";
  var D = {
"मेवाड़ प्रजापत समाज वापी": "Mewad Prajapat Samaj Vapi",
"श्री मेवाड़ प्रजापत समाज-वापी": "Shree Mewad Prajapat Samaj – Vapi",
"श्री मेवाड़ प्रजापत समाज – वापी": "Shree Mewad Prajapat Samaj – Vapi",
"श्री मेवाड़ प्रजापत समाज, वापी": "Shree Mewad Prajapat Samaj, Vapi",
"श्री मेवाड़ प्रजापत समाज": "Shree Mewad Prajapat Samaj",
"मेवाड़ प्रजापत समाज": "Mewad Prajapat Samaj",
"मेवाड़ प्रजापत समाज – वापी": "Mewad Prajapat Samaj – Vapi",
"मेवाड़ प्रजापत समाज-वापी": "Mewad Prajapat Samaj – Vapi",
"वापी": "Vapi",
"वापी, गुजरात": "Vapi, Gujarat",
"बैठक, कार्यक्रम, सूचनाएँ, कार्यकारिणी, फोटो और सहयोग की जानकारी।": "Meetings, events, notices, executive committee, photos and contribution details.",
"तृतीय स्नेह सम्मेलन": "Third Sneh Sammelan",
"तृतीय वार्षिक स्नेह सम्मेलन": "Third Annual Sneh Sammelan",
"प्रथम स्नेह सम्मेलन": "First Sneh Sammelan",
"द्वितीय स्नेह सम्मेलन": "Second Sneh Sammelan",
"प्रथम स्नेह सम्मेलन का सफल आयोजन।": "The first Sneh Sammelan was held successfully.",
"द्वितीय स्नेह सम्मेलन का आयोजन।": "The second Sneh Sammelan was held.",
"तृतीय स्नेह सम्मेलन — अनाविल भवन (आर.एस.), ओरवाड़, उडवाड़ा।": "Third Sneh Sammelan — Anavil Bhavan (R.S.), Orwad, Udvada.",
"तृतीय स्नेह सम्मेलन का पोस्टर": "Poster of the Third Sneh Sammelan",
"स्नेह सम्मेलन का पोस्टर": "Sneh Sammelan poster",
"स्नेह सम्मेलन": "Sneh Sammelan",
"सम्मेलन": "Sammelan",
"रविवार": "Sunday",
"सोमवार": "Monday",
"मंगलवार": "Tuesday",
"बुधवार": "Wednesday",
"गुरुवार": "Thursday",
"शुक्रवार": "Friday",
"शनिवार": "Saturday",
"जनवरी": "January",
"फ़रवरी": "February",
"फरवरी": "February",
"मार्च": "March",
"अप्रैल": "April",
"मई": "May",
"जून": "June",
"जुलाई": "July",
"अगस्त": "August",
"सितंबर": "September",
"सितम्बर": "September",
"अक्टूबर": "October",
"अक्तूबर": "October",
"नवंबर": "November",
"नवम्बर": "November",
"दिसंबर": "December",
"दिसम्बर": "December",
"सपरिवार पधारें": "Please join with your family",
"अनाविल भवन (आर.एस.), ओरवाड़, उडवाड़ा": "Anavil Bhavan (R.S.), Orwad, Udvada",
"अनाविल भवन (आर.एस.), एनएच": "Anavil Bhavan (R.S.), NH",
"टोल नाके के पास, ओरवाड़, उडवाड़ा": "near the toll naka, Orwad, Udvada",
"मुख्य मेन्यू": "Main menu",
"कार्यक्रम": "Events",
"सूचनाएँ": "Notices",
"संगठन": "Organisation",
"व्यवसाय": "Business",
"फोटो": "Photos",
"परिचय": "About",
"सहयोग": "Contribute",
"संपर्क": "Contact",
"डार्क / लाइट मोड बदलें": "Switch dark / light mode",
"डार्क / लाइट मोड": "Dark / light mode",
"ऐप इंस्टॉल करें": "Install app",
"सदस्य लॉगिन": "Member login",
"पंजीकृत संस्था": "Registered organisation",
"मेवाड़ की माटी से जुड़े परिवारों का साझा घर। बैठकें, सूचनाएँ, सुख-दुख की खबरें और सहयोग, सब एक जगह।": "A shared home for families rooted in the soil of Mewad. Meetings, notices, news of joys and sorrows, and contributions — all in one place.",
"सदस्य लॉगिन करें": "Member login",
"सदस्य बनें": "Become a member",
"सहयोग करें": "Contribute",
"अगली बैठक": "Next meeting",
"समाज का लोगो": "Samaj logo",
"बैठक एवं कार्यक्रम": "Meetings & events",
"बैठक और कार्यक्रम की तारीख, समय और स्थान।": "Date, time and venue of meetings and events.",
"पिछला पन्ना": "Previous page",
"अगला पन्ना": "Next page",
"अगला पन्ना देखने के लिए स्वाइप करें": "Swipe to see the next page",
"अगला पन्ना देखने के लिए तीर": "Use the arrows to see the next page",
"या बिंदु दबाएँ": "or tap the dots",
"आमंत्रण": "Invitation",
"पोस्टर देखें": "View poster",
"पोस्टर": "Poster",
"पोस्टर पन्ना": "Poster page",
"पन्ना": "Page",
"बड़ा देखें": "View larger",
"स्नेह सम्मेलन पोस्टर — पन्ना": "Sneh Sammelan poster — page",
"डाउनलोड": "Download",
"सपरिवार आने की सूचना": "Let us know you are coming with family",
"प्रतिभा सम्मान: नाम दें": "Talent honour: submit a name",
"नक्शा खोलें": "Open map",
"कैलेंडर में जोड़ें": "Add to calendar",
"कोड": "Code",
"सेवा": "Seva (service)",
"सेवा सहयोगी": "Seva volunteers",
"आयोजन में सेवा का संकल्प लेने वाले समस्त बंधुओं का हार्दिक आभार।": "Heartfelt thanks to all members who pledged their seva for the event.",
"साल चुनें": "Choose year",
"सूचनाएँ एवं समाचार": "Notices & news",
"समाज की खबरें": "Samaj news",
"महत्वपूर्ण सूचनाएँ, शुभ समाचार और शोक सूचनाएँ।": "Important notices, auspicious news and condolence notices.",
"सूचना छाँटें": "Filter notices",
"हमारी कार्यकारिणी": "Our executive committee",
"समाज का मार्गदर्शन और संचालन करने वाले पदाधिकारी।": "Office-bearers who guide and run the Samaj.",
"कार्यकारिणी": "Executive committee",
"कार्यकारिणी / सलाहकार": "Executive committee / Advisors",
"वरिष्ठ सलाहकार": "Senior advisors",
"समाज एक नज़र में": "Samaj at a glance",
"समाज के व्यवसायी": "Samaj businesses",
"अपने समाज के बंधुओं के व्यवसाय और सेवाएँ, आपसी सहयोग से आगे बढ़ें।": "Businesses and services of our Samaj members — let us grow together through mutual support.",
"नाम, व्यवसाय या शहर खोजें": "Search by name, business or city",
"खोजें": "Search",
"अपना व्यवसाय जुड़वाएँ": "List your business",
"यादों की झलक": "Glimpses of memories",
"साल": "Year",
"बैठक / कार्यक्रम": "Meeting / event",
"समाज के मिलन, पूजन और बैठकों के पल।": "Moments from Samaj gatherings, pujas and meetings.",
"हमारे बारे में": "About us",
"श्री मेवाड़ प्रजापत समाज, वापी मेवाड़ क्षेत्र से आकर वापी में बसे प्रजापत परिवारों की पंजीकृत संस्था है। हम": "Shree Mewad Prajapat Samaj, Vapi is a registered organisation of Prajapat families who came from the Mewad region and settled in Vapi. We",
"एक-दूसरे के सुख-दुख में साथ": "stand together in each other's joys and sorrows",
"खड़े रहने की परंपरा निभाते हैं।": "and keep that tradition alive.",
"समाज की बैठकें, शिक्षा और सहयोग की योजनाएँ, और सामाजिक आयोजन सदस्यों के सहयोग से चलते हैं। सभी जानकारी इस पोर्टल पर समय से पहुँचे, इसके लिए सदस्य अपने मोबाइल नंबर से लॉगिन कर सकते हैं।": "Samaj meetings, education and support schemes, and social events run on the contributions of members. To receive all information on this portal on time, members can log in with their mobile number.",
"संस्था का नाम": "Organisation name",
"पंजीकरण संख्या": "Registration number",
"स्थान": "Place",
"सदस्य कैसे बनें": "How to become a member",
"सदस्यता फॉर्म भरें": "Fill the membership form",
"पोर्टल पर": "On the portal",
"से अपना और परिवार का विवरण दें।": "give your and your family's details.",
"कार्यकारिणी से सत्यापन": "Verification by the executive committee",
"पदाधिकारी विवरण जाँचकर आपको सदस्य के रूप में जोड़ते हैं।": "Office-bearers verify the details and add you as a member.",
"से लॉगिन": "login with",
"अपने मोबाइल नंबर और कार्यकारिणी से मिले": "your mobile number and the one given by the executive committee",
"से पोर्टल खोलें और सब जानकारी देखें।": "open the portal and see all the information.",
"पोर्टल में लॉगिन करें": "Log in to the portal",
"हमारा सफर": "Our journey",
"समाज की एकता से संगठन तक का गौरवशाली सफर": "A proud journey from the unity of the Samaj to an organisation",
"सफर के पड़ाव": "Milestones of the journey",
"कई वर्षों की मेहनत": "Many years of hard work",
"वर्ष का प्रयास": "years of effort",
"समाज को संगठित करने, परिवारों से संपर्क करने और व्यक्तिगत मुलाकात का सिलसिला।": "Organising the Samaj, reaching out to families and meeting them personally.",
"जय श्रीयादे माता की": "Jai Shree Yade Mata Ki",
"श्री मेवाड़ प्रजापत समाज – वापी की यह यात्रा वर्षों के प्रयासों, अटूट संकल्प और सामूहिक सहयोग की प्रेरणादायक गाथा है।": "This journey of Shree Mewad Prajapat Samaj – Vapi is an inspiring story of years of effort, unwavering resolve and collective cooperation.",
"समाज को एकजुट करने, परिवारों को आपस में जोड़ने और सभी समाजबंधुओं को एक साझा मंच पर लाने का सपना लंबे समय से देखा जा रहा था। अनेक समाजप्रेमियों के निरंतर प्रयासों, व्यक्तिगत संपर्क, वरिष्ठजनों के मार्गदर्शन और समाजबंधुओं के सहयोग से इस सपने को साकार करने की दिशा में महत्वपूर्ण कदम उठाए गए।": "The dream of uniting the Samaj, connecting families and bringing all members onto one common platform had been cherished for a long time. Through the continued efforts of many well-wishers, personal outreach, the guidance of elders and the support of members, important steps were taken to make this dream real.",
"इन्हीं सामूहिक प्रयासों का परिणाम रहा कि दिसंबर": "As a result of these collective efforts, in December",
"में प्रथम स्नेह सम्मेलन का सफल आयोजन हुआ। यह सम्मेलन केवल एक कार्यक्रम नहीं, बल्कि वर्षों की मेहनत, सामाजिक एकता और संगठित भविष्य की ओर एक नई शुरुआत का प्रतीक बना।": "the first Sneh Sammelan was held successfully. It was not just an event, but a symbol of years of hard work, social unity and a new beginning towards an organised future.",
"यह उपलब्धि किसी एक व्यक्ति की नहीं, बल्कि उन सभी समाजबंधुओं की है, जिन्होंने अपने समय, समर्पण, विचारों और सहयोग से इस पहल को सफल बनाने में योगदान दिया। सभी के सामूहिक प्रयासों ने समाज को एक साझा पहचान और नई दिशा प्रदान की।": "This achievement belongs not to one person but to all the members who contributed their time, dedication, ideas and support to make this initiative a success. Everyone's collective efforts gave the Samaj a shared identity and a new direction.",
"आज हमारा संकल्प समाज में आपसी प्रेम, भाईचारे और एकता को मजबूत करना, नई पीढ़ी को अपनी संस्कृति एवं संस्कारों से जोड़ना तथा शिक्षा, सहयोग और सामाजिक विकास के माध्यम से एक उज्ज्वल भविष्य का निर्माण करना है।": "Today our resolve is to strengthen love, brotherhood and unity in the Samaj, to connect the new generation with our culture and values, and to build a bright future through education, cooperation and social development.",
"हमारा विश्वास है कि एकता हमारी शक्ति है, सहयोग हमारी पहचान है और समाज की प्रगति हमारा सामूहिक लक्ष्य है।": "We believe unity is our strength, cooperation is our identity, and the progress of the Samaj is our shared goal.",
"आइए, इसी विश्वास और एकजुटता के साथ हम सब मिलकर श्री मेवाड़ प्रजापत समाज – वापी को निरंतर प्रगति के पथ पर आगे बढ़ाएँ और आने वाली पीढ़ियों के लिए एक सशक्त, संस्कारित एवं संगठित समाज की नींव मजबूत करें।": "Let us, with this faith and solidarity, take Shree Mewad Prajapat Samaj – Vapi forward on the path of steady progress and lay a strong foundation of an empowered, value-based and organised Samaj for the generations to come.",
"बैंक विवरण एवं भुगतान": "Bank details & payment",
"सदस्यता शुल्क या सहयोग राशि जमा करने के लिए।": "To pay membership fees or a contribution.",
"भुगतान से पहले ध्यान दें": "Before you pay",
"भुगतान के बाद रसीद / स्क्रीनशॉट कोषाध्यक्ष को": "After paying, send the receipt / screenshot to the Treasurer",
"करें।": "",
"भुगतान करते समय अपना नाम और मोबाइल नंबर लिखें।": "Write your name and mobile number while paying.",
"बड़ी राशि भेजने से पहले खाता विवरण एक बार कार्यकारिणी से पुष्ट कर लें।": "Before sending a large amount, confirm the account details once with the executive committee.",
"नीचे दिया गया विवरण कॉपी करने के लिए": "To copy the details given below",
"कॉपी": "Copy",
"दबाएँ।": "tap.",
"हमसे जुड़ें": "Get in touch",
"सदस्यता, सूचना या सहयोग के लिए संपर्क करें।": "Contact us for membership, information or contribution.",
"फ़ॉर्म": "Form",
"सेक्शन": "Section",
"पेमेंट लिंक भेजें": "Send a payment link",
"बंद करें": "Close",
"मोबाइल नंबर (खाली हो तो": "Mobile number (if empty,",
"में खुद चुनें": "choose it yourself in",
"अंकों का नंबर": "-digit number",
"राशि": "Amount",
"खाली": "Empty",
"बिना राशि का लिंक": "Link without amount",
"विवरण": "Details",
"जैसे दीपावली सहयोग": "e.g. Diwali contribution",
"बैंक विवरण भी जोड़ें": "Also include bank details",
"भेजा जाने वाला संदेश": "Message to be sent",
"कॉपी करें": "Copy",
"श्री मेवाड़ प्रजापत समाज-वापी। सर्वाधिकार सुरक्षित।": "Shree Mewad Prajapat Samaj – Vapi. All rights reserved.",
"वेबसाइट": "Website",
"सिर्फ़ गिनती — किसी की कोई निजी जानकारी नहीं ली जाती": "Count only — no personal information is collected",
"कुल दर्शक": "Total visitors",
"दर्शक गिनती": "Visitor count",
"पिछली फोटो": "Previous photo",
"अगली फोटो": "Next photo",
"खाली छोड़ें तो ऐप में भरें": "Leave empty to fill in the app",
"से स्कैन करें": "scan with",
"नई जानकारी आई है — ताज़ा करने के लिए यहाँ दबाएँ": "New information is available — tap here to refresh",
"जानकारी लोड नहीं हो पाई — दोबारा कोशिश करने के लिए यहाँ दबाएँ": "Could not load the information — tap here to try again",
"आज की बैठक": "Today's meeting",
"दिन": "days",
"घंटे": "hours",
"मिनट": "minutes",
"तारीख जल्द घोषित होगी": "Date to be announced soon",
"जल्द घोषित होगी": "To be announced soon",
"तारीख तय होने पर यहाँ दिखेगी": "Will appear here once the date is fixed",
"तारीख जल्द": "Date soon",
"आज": "Today",
"कल": "Tomorrow",
"दिन बाकी": "days left",
"आगामी कार्यक्रम": "Upcoming events",
"पर भेजें": "send on",
"अगली बैठक की तारीख जल्द घोषित होगी।": "The date of the next meeting will be announced soon.",
"पिछली बैठकें": "Past meetings",
"बैठक": "Meeting",
"बैठकें": "Meetings",
"जन्मदिन": "Birthday",
"सूचना": "Notice",
"शुभ सूचना": "Auspicious news",
"शोक सूचना": "Condolence notice",
"रोज़गार": "Jobs",
"समाचार": "News",
"सभी": "All",
"अभी कोई सूचना नहीं है।": "There are no notices yet.",
"कॉल करें": "Call",
"कार्यकारिणी की जानकारी उपलब्ध नहीं।": "Executive committee details not available.",
"सलाहकारों की जानकारी उपलब्ध नहीं।": "Advisors' details not available.",
"सभी बैठक / कार्यक्रम": "All meetings / events",
"अभी कोई मीटिंग फोटो नहीं है।": "There are no meeting photos yet.",
"इस चयन में कोई फोटो नहीं है।": "There are no photos in this selection.",
"खोलें": "Open",
"समाज की फोटो": "Samaj photos",
"और फोटो देखें": "See more photos",
"और": "more",
"कुल": "Total",
"कम फोटो दिखाएँ": "Show fewer photos",
"कॉपी हुआ": "Copied",
"बैंक विवरण": "Bank details",
"खाता नाम": "Account name",
"बैंक": "Bank",
"खाता नंबर": "Account number",
"खाता संख्या": "Account number",
"लोड नहीं हुआ। इंटरनेट जाँचें।": "Could not load. Check your internet.",
"से सीधे भुगतान करने के लिए यह लिंक खोलें": "open this link to pay directly with",
"लिंक वेबसाइट": "The link works from the website",
"से खोलने पर बनेगा": "when opened from there",
"पता": "Address",
"नक्शा": "Map",
"फोन": "Phone",
"कॉल": "Call",
"ईमेल": "Email",
"भेजें": "Send",
"पोर्टल": "Portal",
"सदस्य लॉगिन और भुगतान": "Member login & payment",
"कार्यक्रम बीत गया": "The event is over",
"आज है": "It is today",
"कल है": "It is tomorrow",
"भरें": "Fill",
"मोबाइल नंबर": "Mobile number",
"अंकों का सही नंबर लिखें": "Enter a valid number",
"भेज रहे हैं": "Sending",
"सेव नहीं हुआ": "Could not save",
"धन्यवाद": "Thank you",
"पर भी भेजें": "also send on",
"फिर से भेजें": "Send again",
"भेजना नहीं हो पाया": "Could not send",
"समय समाप्त": "Time out",
"से भेज दें": "send via",
"आपकी आने की सूचना दर्ज हो गई। आपका हार्दिक स्वागत है": "Your attendance has been recorded. You are warmly welcome",
"परिवार के मुखिया का नाम": "Name of the head of family",
"गाँव / शहर": "Village / city",
"बड़े (कुल": "Adults (total",
"बच्चे (कुल": "Children (total",
"कोई सूचना (वैकल्पिक": "Any note (optional",
"आने की सूचना": "Attendance intimation",
"नाम": "Name",
"गाँव/शहर": "Village/city",
"बड़े": "Adults",
"बच्चे": "Children",
"मोबाइल": "Mobile",
"प्रतिभा सम्मान के लिए नाम": "Name for the talent honour",
"या उससे अधिक अंक पाने वाले विद्यार्थी (कक्षा": "students scoring this or more (class",
"से उच्च शिक्षा तक)।": "up to higher education).",
"आपका नाम दर्ज हो गया। कृपया अंकतालिका की फोटो": "Your name has been recorded. Please send a photo of the marksheet",
"पर भेज दें।": "on",
"विद्यार्थी का नाम": "Student's name",
"कक्षा / पाठ्यक्रम": "Class / course",
"जैसे: कक्षा": "e.g. Class",
"प्राप्त प्रतिशत": "Percentage obtained",
"स्कूल / कॉलेज (वैकल्पिक": "School / college (optional",
"माता / पिता का नाम": "Mother's / father's name",
"प्रतिभा सम्मान के लिए": "For the talent honour",
"या उससे अधिक अंक चाहिए": "or more marks required",
"विद्यार्थी": "Student",
"कक्षा/पाठ्यक्रम": "Class/course",
"प्रतिशत": "Percentage",
"माता/पिता": "Mother/father",
"कार्यकारिणी की जाँच के बाद आपका विवरण वेबसाइट की सूची में दिखेगा।": "After the executive committee verifies it, your details will appear in the website list.",
"आपका विवरण मिल गया। जाँच के बाद सूची में जोड़ दिया जाएगा।": "We have received your details. They will be added to the list after verification.",
"आपका नाम": "Your name",
"व्यवसाय / फर्म का नाम": "Business / firm name",
"श्रेणी": "Category",
"दुकान / व्यापार": "Shop / trade",
"निर्माण / ठेकेदारी": "Construction / contracting",
"उद्योग / फैक्ट्री": "Industry / factory",
"सेवा / कारीगरी": "Service / craft",
"खेती / डेयरी": "Farming / dairy",
"शिक्षा / कोचिंग": "Education / coaching",
"अन्य": "Other",
"शहर / गाँव": "City / village",
"संक्षिप्त विवरण (वैकल्पिक": "Short description (optional",
"क्या काम/सेवा करते हैं": "What work/service do you do",
"मैं अपना यह विवरण (मोबाइल सहित) समाज की वेबसाइट पर दिखाने की अनुमति देता/देती हूँ।": "I allow my details (including mobile) to be shown on the Samaj website.",
"व्यवसाय सूची में जुड़वाना है": "I want to be listed in the business directory",
"शहर/गाँव": "City/village",
"सहयोगी": "Supporter",
"कोई परिणाम नहीं मिला।": "No results found.",
"अभी कोई व्यवसाय सूचीबद्ध नहीं है। पहले आप अपना व्यवसाय जुड़वाएँ": "No business is listed yet. Be the first to list yours",
"आगामी": "Upcoming",
"सलाहकार": "Advisor",
"शीर्षक": "Title",
"नौकरी": "Job",
"जन्म": "Birth",
"दिन बाद": "days later",
"बधाई": "Congratulations",
"अगला जन्मदिन": "Next birthday",
"सदस्य": "Member",
"गाँव": "Village",
"गोत्र": "Gotra",
"वर्तमान शहर": "Current city",
"लोड हो रहा है": "Loading",
"ऐप इंस्टॉल": "Install app",
"समाज की ऐप अपने फोन/कंप्यूटर में जोड़ें — एक टैप में खुलेगी।": "Add the Samaj app to your phone/computer — it opens in one tap.",
"नीचे": "below",
"दबाएँ": "tap",
"या": "or",
"इंस्टॉल करें": "Install",
"कार्यक्रम का": "Of the event",
"स्कैन करके": "By scanning",
"की जानकारी और पोस्टर देखें।": "see the details and poster.",
"संगठन एवं समाज": "Organisation & Samaj",
"कार्यक्रम, सूचनाएँ एवं समाचार": "Events, notices & news",
"महत्वपूर्ण सूचनाएँ": "Important notices",
"समाज समाचार": "Samaj news",
"शोक / शुभ सूचना": "Condolence / auspicious notices",
"शोक/शुभ": "Condolence/auspicious",
"शोक": "Condolence",
"शुभ": "Auspicious",
"बैठक की नवीनतम जानकारी": "Latest meeting updates",
"फोटो देखें": "View photos",
"जुड़ें / संपर्क": "Join / contact",
"अध्यक्ष": "President",
"उपाध्यक्ष": "Vice President",
"महामंत्री": "General Secretary",
"मंत्री": "Secretary",
"सह-मंत्री": "Joint Secretary",
"कोषाध्यक्ष": "Treasurer",
"सह-कोषाध्यक्ष": "Joint Treasurer",
"संगठन मंत्री": "Organising Secretary",
"प्रचार मंत्री": "Publicity Secretary",
"संरक्षक": "Patron",
"संयोजक": "Convener",
"सचिव": "Secretary",
"समाज": "Samaj",
"जन्मदिन आज": "Birthday today",
"अनाविल भवन": "Anavil Bhavan",
"जैसे": "e.g.",
"ऐप में खोलें (मोबाइल": "Open in app (mobile",
"अनुमति पर निशान लगाएँ": "Tick the permission",
"अक्षर बड़े / छोटे करें": "Make text larger / smaller",
"और देखें": "See more",
"समाज पोर्टल में आपका स्वागत है": "Welcome to the Samaj portal",
"अपने मोबाइल नंबर और": "your mobile number and",
"अंको का मोबाइल नंबर डालें": "Enter your 10-digit mobile number",
"अंकों का मोबाइल नंबर डालें": "Enter your 10-digit mobile number",
"अंकों का मोबाइल नंबर डालें।": "Enter your 10-digit mobile number.",
"इस डिवाइस पर": "On this device",
"याद रखें": "remember",
"समाज की वेबसाइट पर जाएँ": "Go to the Samaj website",
"बैंक विवरण / भुगतान": "Bank details / payment",
"वर्ष": "Year",
"वित्तीय वर्ष": "Financial year",
"कस्टम तारीख": "Custom date",
"बाकी": "Pending",
"वादा": "Commitment",
"वादे": "Commitments",
"पूरा जमा": "Fully paid",
"सभी रिकॉर्ड": "All records",
"आज का वादा": "Today's commitment",
"कल का वादा": "Tomorrow's commitment",
"वादा निकल गया": "Commitment date passed",
"वादा नहीं (बाकी है": "No commitment (pending",
"अगले": "Next",
"प्रिंट करें": "Print",
"नया सदस्य पंजीकरण": "New member registration",
"पूरा नाम": "Full name",
"पूरा नाम लिखें": "Enter full name",
"अंकों का मोबाइल": "-digit mobile",
"व्यवसाय / फर्म": "Business / firm",
"व्यवसाय या फर्म का नाम": "Business or firm name",
"गाँव का नाम": "Village name",
"जिला": "District",
"ज़िला": "District",
"आपके मोबाइल नंबर पर अभी लॉगिन की सुविधा चालू नहीं है। कृपया कार्यकारिणी से संपर्क करें।": "Login is not enabled for your mobile number yet. Please contact the executive committee.",
"लोड नहीं हो पाया।": "Could not load.",
"कृपया": "Please",
"जाँच हो रही है": "Checking",
"लॉगिन नहीं हो पाया": "Login failed",
"कृपया बाद में पुनः प्रयास करें।": "Please try again later.",
"नया": "New",
"बनाएँ": "Create",
"बदलें": "Change",
"आपका": "Your",
"दोबारा": "Again",
"पुराने से अलग रखें": "Keep it different from the old one",
"बदल गया।": "changed.",
"नहीं बदल पाया": "Could not change",
"कम देखें": "See less",
"ऊपर से कोई भी टैब चुनें": "Choose any tab from above",
"विवरण देखने के लिए क्लिक करें": "Click to see details",
"आज के वादे": "Today's commitments",
"आज / निकले": "Today / overdue",
"अगली मीटिंग": "Next meeting",
"आज के जन्मदिन": "Today's birthdays",
"जो चाहें भरें": "Fill what you like",
"लाइब्रेरी लोड नहीं हुई — इंटरनेट जांचें।": "Library did not load — check your internet.",
"लोड नहीं हो पाए।": "Could not load.",
"कोई": "Any",
"नहीं मिला।": "not found.",
"नहीं मिला": "Not found",
"शहर": "City",
"गांव": "Village",
"सदस्य निर्देशिका": "Member directory",
"नाम / मोबाइल / गांव": "Name / mobile / village",
"सभी गोत्र": "All gotras",
"सभी गांव": "All villages",
"क्र": "No.",
"खोज": "Search",
"श्री मेवाड़ प्रजापत समाज-वापी — सदस्य निर्देशिका": "Shree Mewad Prajapat Samaj – Vapi — Member directory",
"कार्यक्रम आज है": "The event is today",
"दिन बाकी — कल": "days left — tomorrow",
"वर्तमान": "Current",
"कई फोटो जोड़ें": "Add many photos",
"तारीख": "Date",
"बैठक / कार्यक्रम का नाम": "Meeting / event name",
"जैसे: नवरात्रि गरबा": "e.g. Navratri Garba",
"फोटो चुनें (एक साथ कई": "Choose photos (many at once",
"चुनें": "Choose",
"व्यापार": "Trade",
"खेती": "Farming",
"ठेकेदार": "Contractor",
"सरकारी सेवा": "Government service",
"प्राइवेट जॉब": "Private job",
"स्वरोजगार": "Self-employed",
"चुनें (हाल में उपयोग हुए": "Choose (recently used",
"पिछली बार का टेक्स्ट — ज़रूरत अनुसार बदल दें": "Text from last time — edit as needed",
"चर्चा के बिंदु चुनें (टिक करने पर नीचे": "Choose discussion points (ticked ones are added below",
"में जुड़ जाएगा": "will be added",
"दोपहर के भोजन": "lunch",
"सुबह के नाश्ते": "morning snacks",
"शाम के नाश्ते": "evening snacks",
"रात्रि के भोजन": "dinner",
"भोजन / नाश्ता": "Meal / snacks",
"कोई व्यवस्था नहीं": "No arrangement",
"हाँ": "Yes",
"पिछले में से चुनें (फिर": "Choose from earlier (then",
"जैसे: सहयोग राशि, मकान मरम्मत": "e.g. contribution, house repair",
"अतिरिक्त जानकारी": "Additional information",
"पूरा पता लिखें": "Enter full address",
"जैसे: व्यापार, नौकरी": "e.g. business, job",
"जैसे: वापी": "e.g. Vapi",
"जैसे: वलसाड": "e.g. Valsad",
"गोत्र लिखें": "Enter gotra",
"मूल स्थान": "Place of origin",
"किस बोली/दान के लिए": "For which Boli/donation",
"दान": "Donation",
"सभी वर्ष": "All years",
"सभी साल": "All years",
"तक": "to",
"आईडी": "ID",
"कार्यवाही/चर्चा": "Proceedings/discussion",
"फोटो खोलें": "Open photo",
"क्लिक करें: पूरा देखें": "Click: view full",
"उपस्थित": "Present",
"सूची देखें": "View list",
"पूरा पढ़ें": "Read full",
"उपस्थिति": "Attendance",
"खाता": "Account",
"समाज की सूचना": "Samaj notice",
"समाज की खबर": "Samaj news item",
"रिकॉर्ड नहीं मिला।": "Record not found.",
"नया वादा जोड़ें": "Add new commitment",
"जैसे: बेटे की शादी के बाद देंगे": "e.g. will pay after son's wedding",
"जोड़ें": "Add",
"वादे के बिना बाकी": "Pending without commitment",
"अभी कोई वादा दर्ज नहीं है।": "No commitment recorded yet.",
"वादे की तारीख चुनें।": "Choose the commitment date.",
"बदल सकते हैं": "can change",
"राशि डालें": "Enter amount",
"गुमनाम": "Anonymous",
"देखें": "View",
"दान / सहयोग": "Donation / contribution",
"भेजे गए": "Sent",
"चालू है": "is on",
"अगला भेजें": "Send next",
"सब को भेज दिया गया है।": "Sent to everyone.",
"कोई रिकॉर्ड नहीं।": "No records.",
"जमा": "Paid",
"कुल प्राप्त": "Total received",
"कुल बाकी": "Total pending",
"आपका खाता": "Your account",
"बोली: कुल": "Boli: total",
"दान/सहयोग: कुल": "Donation/contribution: total",
"खाता विवरण": "Account statement",
"फोटो पढ़ नहीं पाया": "Could not read the photo",
"फोटो लोड हो रही है": "Photo is loading",
"फोटो अभी लोड नहीं हो पा रही": "Photo could not be loaded right now",
"अभी कोई उपस्थिति दर्ज नहीं है।": "No attendance recorded yet.",
"कुल उपस्थित": "Total present",
"नाम खोजें": "Search name",
"कोई नाम नहीं मिला": "No name found",
"मीटिंग की फोटो": "Meeting photo",
"लिखें": "Write",
"उपस्थिति बदलें": "Change attendance",
"कार्य": "Task",
"कार्य सूची": "Task list",
"किसे": "To whom",
"कब तक": "By when",
"मीटिंग मिनट्स": "Meeting minutes",
"मिनट्स": "Minutes",
"चर्चा / निर्णय": "Discussion / decisions",
"नया पॉइंट जोड़ें": "Add new point",
"नया कार्य जोड़ें": "Add new task",
"पॉइंट लिखें": "Write a point",
"कार्य क्या है": "What is the task",
"नोट्स": "Notes",
"पॉइंट": "Point",
"मीटिंग में क्या हुआ": "What happened in the meeting",
"कोई रिकॉर्ड नहीं मिला": "No records found",
"सदस्य जानकारी": "Member information",
"सदस्य का नाम": "Member name",
"जॉइनिंग तारीख": "Joining date",
"स्थिति": "Status",
"फंड लेजर रसीद": "Fund ledger receipt",
"लेन-देन": "Transaction",
"क्रेडिट": "Credit",
"डेबिट": "Debit",
"उद्देश्य": "Purpose",
"भुगतान का तरीका": "Payment mode",
"प्रकार": "Type",
"रसीद": "Receipt",
"रसीद नंबर": "Receipt number",
"रसीद राशि": "Receipt amount",
"खर्चा विवरण": "Expense details",
"खर्चा नंबर": "Expense number",
"भुगतान राशि": "Payment amount",
"बोली विवरण": "Boli details",
"बोली नं": "Boli no.",
"बोली राशि": "Boli amount",
"बैलेंस राशि": "Balance amount",
"दान विवरण": "Donation details",
"दान नं": "Donation no.",
"दान राशि": "Donation amount",
"रिकॉर्ड": "Record",
"क्या आप वाकई इस रिकॉर्ड को स्थायी रूप से हटाना चाहते हैं? यह": "Do you really want to permanently delete this record? It will also be removed from",
"से भी हट जाएगा।": "as well.",
"से हटा दिया गया है।": "has been removed from it.",
"शोक समाचार": "Condolence news",
"वर्षगांठ": "Anniversary",
"वैवाहिक वर्षगांठ": "Wedding anniversary",
"अगली वर्षगांठ": "Next anniversary",
"नए सदस्य": "New members",
"स्वागत है": "Welcome",
"अगली मीटिंग तय होने पर यहाँ": "When the next meeting is fixed, here",
"आने की सूचना दें": "Confirm attendance",
"सदस्य आ रहे हैं": "members are coming",
"मीटिंग में आने की सूचना": "Meeting attendance confirmation",
"आऊँगा": "I will come",
"नहीं आ पाऊँगा": "I cannot come",
"भेजा जा रहा है": "Sending",
"आपका जवाब दर्ज हो गया": "Your response has been recorded",
"इंटरनेट की समस्या — दोबारा कोशिश करें।": "Internet problem — please try again.",
"डेटा लोड नहीं हो पाया।": "Could not load data.",
"अभी किसी मीटिंग की उपस्थिति दर्ज नहीं है।": "No meeting attendance recorded yet.",
"उपस्थिति रिपोर्ट": "Attendance report",
"कुल मीटिंग": "Total meetings",
"पूरा साल": "Whole year",
"इस अवधि में कोई जन्मदिन / वर्षगांठ नहीं है।": "There are no birthdays / anniversaries in this period.",
"मिले कॉलम": "Columns found",
"जन्मदिन कॉलम": "Birthday column",
"वर्षगांठ कॉलम": "Anniversary column",
"बधाई भेजें": "Send wishes",
"मोबाइल नहीं": "No mobile",
"अपने आप बनता है।": "is created automatically.",
"सूची": "List",
"कोई नहीं": "None",
"सूची — कौन आ रहा है": "List — who is coming",
"जन्मदिन / वर्षगांठ बधाई": "Birthday / anniversary wishes",
"बिना शीर्षक": "Untitled",
"स्नेह सम्मेलन निमंत्रण": "Sneh Sammelan invitation",
"सम्मेलन आभार / धन्यवाद": "Sammelan thanks",
"समाज पोर्टल लिंक": "Samaj portal link",
"परिचय भेजने का अनुरोध": "Request to send introduction",
"सामान्य नमस्ते": "General greeting",
"खुद लिखें": "Write your own",
"बकाया राशि याद दिलाएँ": "Remind pending amount",
"मैसेज भेजें": "Send message",
"कौन सी मीटिंग": "Which meeting",
"कौन सी पोस्ट": "Which post",
"किन्हें भेजना है": "Who to send to",
"संदेश का प्रकार": "Message type",
"इस टैब में अभी कोई रिकॉर्ड नहीं है।": "There are no records in this tab yet.",
"सभी सक्रिय सदस्य": "All active members",
"सिर्फ़ उपस्थित सदस्य": "Only present members",
"सिर्फ़ अनुपस्थित सदस्य": "Only absent members",
"चुने गए": "Selected",
"इस समूह में": "In this group",
"सभी / कोई नहीं": "All / none",
"चुने हुए सभी को भेज दिया गया है।": "Sent to all selected.",
"सदस्यों को": "To members",
"संदेश": "Message",
"संदेश भेजें": "Send message",
"इस टैब पर संदेश भेजने की अनुमति नहीं है": "You do not have permission to send messages on this tab",
"घोषणा": "Announcement",
"खबर": "News item",
"अनुपस्थित सदस्यों को सूचना": "Notice to absent members",
"उपस्थित सदस्यों को धन्यवाद": "Thanks to present members",
"इस": "This",
"का": "of",
"सदस्य का": "Member's",
"पहली बार": "First time",
"ध्यान दें": "Note",
"नहीं बन पाया": "Could not be created",
"पर क्लिक करें।": "click on.",
"अपडेट या नया जोड़ने के लिए": "To update or add new",
"दिनांक": "Date",
"समय": "Time",
"विषय": "Subject",
"बोली": "Boli",
"बैंक नाम": "Bank name",
"बाकी राशि": "Pending amount",
"सहयोग राशि": "Contribution amount",
"सेट / रीसेट": "Set / reset",
"सदस्य का मोबाइल नंबर": "Member's mobile number",
"दोनों नए": "Both new",
"एक जैसे नहीं हैं": "do not match",
"किसी को न बताएँ।": "Do not share it with anyone.",
"का अस्थायी": "Temporary",
"नाम का": "Name",
"ज़्यादा है": "is more",
"वादे में": "In commitment",
"भरा हुआ": "Filled",
"कार्य (किसे / कब तक": "Task (to whom / by when",
"किसे / कब तक": "To whom / by when",
"कार्य सूची (किसे / कब तक": "Task list (to whom / by when",
"हर बात अलग पॉइंट में लिखें।": "Write each item as a separate point.",
"दबाने पर नया पॉइंट बनता है।": "Pressing Enter creates a new point.",
"पहले कोई पॉइंट लिखें।": "Write a point first.",
"चर्चा / निर्णय / कार्यवाही लिखें": "Write discussion / decisions / proceedings",
"पेशा/व्यवसाय का नाम": "Occupation / business name",
"समाज का नाम": "Samaj name",
"संदेश कॉपी": "Copy message",
"लिंक उपलब्ध नहीं": "Link not available",
"कृपया सही": "Please enter a valid",
"इस मीटिंग के": "For this meeting",
"अभी नहीं लिखे गए।": "have not been written yet.",
"अभी दर्ज नहीं हो पाया।": "could not be recorded right now.",
"में कुल प्राप्त": "Total received in",
"में किसी का भी बाकी": "Anyone's pending in",
"नहीं होने से छूटे": "skipped (no mobile)",
"से भुगतान करें": "Pay with",
"वादे — आज / निकले": "Commitments — today / overdue",
"आदरणीय": "Respected",
"अपना": "Your",
"डालें": "Enter",
"अंक": "digits",
"से": "to",
"अ": "A"
};
  var M = {
"अपने मोबाइल नंबर और PIN से login करें": "Log in with your mobile number and PIN",
"10 अंको का मोबाइल नंबर डालें": "Enter your 10-digit mobile number",
"10 अंकों का मोबाइल": "10-digit mobile",
"10 अंकों का मोबाइल नंबर डालें": "Enter your 10-digit mobile number",
"अपना PIN डालें (4 से 6 अंक)": "Enter your PIN (4 to 6 digits)",
"इस डिवाइस पर 30 दिन login याद रखें": "Remember login on this device for 30 days",
"सभी (All)": "All",
"वर्ष (Year)": "Year",
"वित्तीय वर्ष (FY)": "Financial year (FY)",
"अगले 7 दिन": "Next 7 days",
"📷 UPI QR कोड": "📷 UPI QR code",
"📄 इस Tab का Excel": "📄 Excel of this tab",
"📦 सभी Tabs का Excel": "📦 Excel of all tabs",
"अगले 30 दिन": "Next 30 days",
"अगले 90 दिन": "Next 90 days",
"सेट / रीसेट": "Set / reset",
"PIN बदलें": "Change PIN",
"नया PIN": "New PIN",
"पुराना PIN": "Old PIN",
"बाकी+वादा": "Pending + commitment",
"इस Tab का Excel": "Excel of this tab",
"सभी Tabs का Excel": "Excel of all tabs",
"WhatsApp में भेजें": "Send on WhatsApp",
"WhatsApp पर भेजें": "Send on WhatsApp"
};

  /* ---------- bhasha ka chunav ---------- */
  var lang = "hi";
  try {
    var q = (location.search.match(/[?&]lang=(hi|en)\b/) || [])[1];
    if (q) localStorage.setItem(KEY, q);
    lang = localStorage.getItem(KEY) || "hi";
  } catch (e) {}
  if (lang !== "en") lang = "hi";

  var DEV = /[\u0900-\u097F]/;
  var RUN = /[\u0900-\u097F](?:[\u0900-\u097F \u200c\u200d,.\-–—\/()'!?:।&*|]*[\u0900-\u097F])?/g;
  function norm(s) { return s.replace(/\s+/g, " ").trim(); }

  /* mixed (Hindi+English) phrases — lambe pehle */
  var mKeys = Object.keys(M).sort(function (a, b) { return b.length - a.length; });
  function esc(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); }
  var mRe = mKeys.length ? new RegExp(mKeys.map(function (k) { return esc(k).replace(/ /g, "\\s+"); }).join("|"), "g") : null;
  var mNorm = {}; mKeys.forEach(function (k) { mNorm[norm(k)] = M[k]; });

  /* samay: "सुबह 8:00 से शाम 4:00 बजे तक", "शाम 5 बजे" */
  function ap(per, h) {
    h = +h;
    if (/सुबह|प्रातः|सवेरे/.test(per)) return "AM";
    if (/रात/.test(per)) return (h >= 5 && h <= 11) ? "PM" : "AM";
    return "PM"; /* दोपहर, शाम */
  }
  function hm(t) { return t.indexOf(":") < 0 ? t + ":00" : t; }
  var TIME_RANGE = /(सुबह|प्रातः|सवेरे|दोपहर|शाम|रात)\s*(\d{1,2}(?::\d{2})?)\s*से\s*(सुबह|प्रातः|सवेरे|दोपहर|शाम|रात)?\s*(\d{1,2}(?::\d{2})?)\s*बजे(?:\s*तक)?/g;
  var TIME_ONE = /(सुबह|प्रातः|सवेरे|दोपहर|शाम|रात)\s*(\d{1,2}(?::\d{2})?)\s*बजे/g;
  var DAYS_LEFT = /(\d+)\s*दिन\s*बाकी/g;
  var DAYS_AFTER = /(\d+)\s*दिन\s*बाद/g;

  function tr(s) {
    if (!s || !DEV.test(s)) return s;
    var o = s;
    o = o.replace(TIME_RANGE, function (m, p1, a, p2, b) { return hm(a) + " " + ap(p1, parseInt(a, 10)) + " – " + hm(b) + " " + ap(p2 || p1, parseInt(b, 10)); });
    o = o.replace(TIME_ONE, function (m, p, a) { return hm(a) + " " + ap(p, parseInt(a, 10)); });
    o = o.replace(DAYS_LEFT, "$1 days left").replace(DAYS_AFTER, "in $1 days");
    if (mRe) o = o.replace(mRe, function (m) { return mNorm[norm(m)] != null ? mNorm[norm(m)] : m; });
    if (!DEV.test(o)) return o;
    return o.replace(RUN, function (m) {
      var v = D[norm(m)];
      return v == null ? m : v;
    });
  }
  window.smpsTr = function (s) { return lang === "en" ? tr(String(s == null ? "" : s)) : s; };

  /* ---------- DOM translate / restore ---------- */
  var SKIP = { SCRIPT: 1, STYLE: 1, TEXTAREA: 1, NOSCRIPT: 1, CODE: 1, PRE: 1 };
  var ATTRS = ["placeholder", "title", "aria-label", "alt"];
  var textRec = new WeakMap();   /* node -> {o: original, t: translated} */
  var attrRec = new WeakMap();   /* el -> {attr: {o,t}} */
  var busy = false;

  function skipEl(el) {
    for (var e = el; e && e.nodeType === 1; e = e.parentNode) {
      if (SKIP[e.tagName]) return true;
      if (e.hasAttribute && (e.hasAttribute("data-no-i18n") || e.getAttribute("translate") === "no" || e.classList.contains("notranslate"))) return true;
    }
    return false;
  }
  function doText(n) {
    var v = n.nodeValue, r = textRec.get(n);
    if (r && v === r.t) return;                 /* hamara hi likha hua */
    if (!DEV.test(v)) { if (r) textRec.delete(n); return; }
    var p = n.parentNode;
    if (!p || skipEl(p)) return;
    var t = tr(v);
    if (t === v) return;
    if (p.tagName === "OPTION" && !p.hasAttribute("value")) p.setAttribute("value", norm(v));  /* data wala value na badle */
    textRec.set(n, { o: v, t: t });
    n.nodeValue = t;
  }
  function doAttrs(el) {
    if (!el.getAttribute || skipEl(el)) return;
    for (var i = 0; i < ATTRS.length; i++) {
      var a = ATTRS[i], v = el.getAttribute(a);
      if (v == null || !DEV.test(v)) continue;
      var rec = attrRec.get(el) || {};
      if (rec[a] && rec[a].t === v) continue;
      var t = tr(v);
      if (t === v) continue;
      rec[a] = { o: v, t: t };
      attrRec.set(el, rec);
      el.setAttribute(a, t);
    }
  }
  function walk(root) {
    if (!root) return;
    if (root.nodeType === 3) { doText(root); return; }
    if (root.nodeType !== 1 && root.nodeType !== 9 && root.nodeType !== 11) return;
    if (root.nodeType === 1) { if (skipEl(root)) return; doAttrs(root); }
    var tw = document.createTreeWalker(root, 1 | 4, null), n;
    while ((n = tw.nextNode())) {
      if (n.nodeType === 3) doText(n); else doAttrs(n);
    }
  }
  function restore() {
    var tw = document.createTreeWalker(document.documentElement, 1 | 4, null), n;
    while ((n = tw.nextNode())) {
      if (n.nodeType === 3) {
        var r = textRec.get(n);
        if (r && n.nodeValue === r.t) n.nodeValue = r.o;
        textRec.delete(n);
      } else {
        var ar = attrRec.get(n);
        if (ar) {
          for (var a in ar) if (n.getAttribute(a) === ar[a].t) n.setAttribute(a, ar[a].o);
          attrRec.delete(n);
        }
      }
    }
  }

  /* ---------- dynamic content (app baar-baar dobara draw karti hai) ---------- */
  var pending = new Set(), timer = 0;
  function flush() {
    timer = 0;
    if (lang !== "en") { pending.clear(); return; }
    busy = true;
    try { pending.forEach(function (n) { if (n.isConnected !== false) walk(n); }); } catch (e) {}
    pending.clear();
    busy = false;
  }
  function queue(n) {
    pending.add(n);
    if (!timer) timer = (window.requestAnimationFrame || setTimeout)(flush, 16);
  }
  var mo = null;
  function startObs() {
    if (mo || !window.MutationObserver) return;
    mo = new MutationObserver(function (list) {
      if (busy || lang !== "en") return;
      for (var i = 0; i < list.length; i++) {
        var m = list[i];
        if (m.type === "childList") { for (var j = 0; j < m.addedNodes.length; j++) queue(m.addedNodes[j]); }
        else if (m.type === "characterData") queue(m.target);
        else if (m.type === "attributes") queue(m.target);
      }
    });
    mo.observe(document.documentElement, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ATTRS });
  }
  function stopObs() { if (mo) { mo.disconnect(); mo = null; } }

  /* alert / confirm / prompt ke sandesh bhi */
  ["alert", "confirm", "prompt"].forEach(function (f) {
    var orig = window[f];
    if (typeof orig !== "function") return;
    window[f] = function (msg) {
      var a = arguments;
      if (lang === "en" && typeof msg === "string") { a = Array.prototype.slice.call(arguments); a[0] = tr(msg); }
      return orig.apply(window, a);
    };
  });

  /* ---------- apply ---------- */
  function apply() {
    document.documentElement.setAttribute("lang", lang === "en" ? "en" : "hi");
    if (lang === "en") {
      busy = true; try { walk(document.documentElement); } catch (e) {} busy = false;
      startObs();
    } else {
      stopObs();
      busy = true; try { restore(); } catch (e) {} busy = false;
    }
    paint();
  }

  /* ---------- toggle button ---------- */
  var btn = null;
  function paint() {
    if (!btn) return;
    if (btn.className === "inl") btn.innerHTML = '<b class="on">' + (lang === "en" ? "हिं" : "EN") + '</b>';   // header mein chhota: sirf doosri bhasha
    else btn.innerHTML = '<b class="' + (lang === "hi" ? "on" : "") + '">हिं</b><span>|</span><b class="' + (lang === "en" ? "on" : "") + '">EN</b>';
    btn.setAttribute("data-no-i18n", "");
    btn.title = lang === "en" ? "Switch to Hindi" : "Switch to English";
    btn.setAttribute("aria-label", lang === "en" ? "Language: English. Switch to Hindi" : "Language: Hindi. Switch to English");
  }
  function setLang(l) {
    lang = l === "en" ? "en" : "hi";
    try { localStorage.setItem(KEY, lang); } catch (e) {}
    apply();
    try { window.dispatchEvent(new CustomEvent("smps-lang", { detail: lang })); } catch (e) {}
  }
  window.smpsSetLang = setLang;
  window.smpsLang = function () { return lang; };

  function fitHdr() {
    var t = document.querySelector(".hdr-tools"); if (!t) return;
    var h = t.closest("header"); if (!h) return;
    if (window.innerWidth <= 700) { h.style.setProperty("padding-right", (t.offsetWidth + 14) + "px", "important"); var x = h.querySelector("h1"); if (x) x.style.setProperty("white-space", "normal", "important"); }
    else { h.style.removeProperty("padding-right"); }
  }
  window.addEventListener("resize", fitHdr);
  setInterval(fitHdr, 800);
  function place() {
    var host = document.querySelector(".hdr-tools") || document.querySelector("header.nav .in") || document.querySelector("header");
    if (host) { btn.className = "inl"; if (host.matches(".hdr-tools")) host.insertBefore(btn, host.firstChild); else host.appendChild(btn); }
    else { btn.className = ""; document.body.appendChild(btn); }
    paint();
  }
  function mount() {
    if (document.getElementById("smpsLangBtn")) return;
    var st = document.createElement("style");
    st.textContent =
      "#smpsLangBtn{position:fixed;right:10px;top:calc(8px + env(safe-area-inset-top,0px));z-index:9990;display:flex;align-items:center;gap:6px;" +
      "height:30px;padding:0 10px;border-radius:15px;border:1px solid rgba(10,42,94,.35);background:rgba(255,255,255,.94);color:#0a2a5e;" +
      "font:600 13px system-ui,-apple-system,Segoe UI,Roboto,sans-serif;box-shadow:0 2px 10px rgba(0,0,0,.22);cursor:pointer;-webkit-tap-highlight-color:transparent}" +
      "#smpsLangBtn b{font-weight:600;opacity:.55;padding:2px 6px;border-radius:10px}#smpsLangBtn b.on{opacity:1;background:#0a2a5e;color:#fff}" +
      "#smpsLangBtn span{opacity:.35}" +
      "[data-theme=dark] #smpsLangBtn,html.dark #smpsLangBtn{background:rgba(20,28,45,.94);color:#e8eefc;border-color:rgba(255,255,255,.3)}" +
      "[data-theme=dark] #smpsLangBtn b.on,html.dark #smpsLangBtn b.on{background:#e8eefc;color:#0a2a5e}" +
      "@media (prefers-color-scheme:dark){:root:not([data-theme=light]) #smpsLangBtn{background:rgba(20,28,45,.94);color:#e8eefc;border-color:rgba(255,255,255,.3)}:root:not([data-theme=light]) #smpsLangBtn b.on{background:#e8eefc;color:#0a2a5e}}" +
      
      "#smpsLangBtn.inl{width:auto;min-width:0;position:static;margin-left:auto;z-index:auto;height:auto;padding:0;border:0;background:none;box-shadow:none;flex:0 0 auto}#smpsLangBtn.inl b.on{background:#fff;color:#0a2a5e;font-size:11px;padding:4px 8px;border-radius:12px}" +
      "@media print{#smpsLangBtn{display:none!important}}";
    document.head.appendChild(st);
    btn = document.createElement("button");
    btn.id = "smpsLangBtn"; btn.type = "button";
    btn.onclick = function () { setLang(lang === "en" ? "hi" : "en"); };
    place();
    setInterval(function () { if (btn && !btn.isConnected) place(); }, 1500);   // header dobara bane to button wapas lagao
    paint();
  }

  function boot() {
    mount();
    if (lang === "en") apply();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot); else boot();
  /* English chuna ho to pehle hi frame se lagao, Hindi flash kam ho */
  if (lang === "en") document.documentElement.setAttribute("lang", "en");
})();
