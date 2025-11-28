export type Language = 'zh' | 'en' | 'tl' | 'id';

export const languages = {
  zh: { name: '繁體中文', code: 'zh-HK' },
  en: { name: 'English', code: 'en-US' },
  tl: { name: 'Tagalog', code: 'tl-PH' },
  id: { name: 'Bahasa', code: 'id-ID' }
};

export const translations = {
  zh: {
    title: '大埔宏福苑火災援助',
    subtitle: '支援資訊整合平台',
    label: '我想要...',
    placeholder: '搜尋：捐款、義工、物資...',
    emergency: '🚨 傷亡查詢 1878 999 | 心理支援 18111',
    installTitle: '安裝 App',
    installDesc: '離線使用，更穩定',
    installBtn: '安裝',
    contact: '聯絡方式',
    details: '詳細資訊',
    close: '關閉',
    copy: '複製',
    copied: '已複製',
    lastUpdate: '最後更新：2025年11月29日',
    listening: '聆聽中...',
    newsTitle: '📰 最新消息',
    mapTitle: '資源地圖',
    wcagCompliance: '本網站符合 WCAG 2.2 無障礙標準',
    share: '分享',
    shareWhatsApp: 'WhatsApp',
    shareSMS: '短訊',
    shareLink: '複製連結',
    linkCopied: '連結已複製！',
    getDirections: '取得路線',
    showOpenOnly: '只顯示營業中',
    open: '營業中',
    closed: '已關閉',
    opensAt: '開放時間',
    closesAt: '關閉時間',
    open24h: '24小時營業',
    feedback: '提交反饋',
    feedbackTitle: '反饋及建議',
    feedbackType: '反饋類型',
    feedbackTypeUpdate: '資源更新',
    feedbackTypeNew: '建議新資源',
    feedbackTypeGeneral: '一般反饋',
    resourceName: '資源名稱',
    resourceNamePlaceholder: '例如：紅十字會',
    category: '類別',
    categoryPlaceholder: '例如：捐款、住宿、支援',
    contactInfo: '聯絡資料',
    contactInfoPlaceholder: '電話、電郵或網址',
    description: '詳細說明',
    descriptionPlaceholder: '請提供詳細資訊...',
    yourName: '您的姓名（選填）',
    yourEmail: '您的電郵（選填）',
    submit: '提交',
    submitting: '提交中...',
    feedbackSuccess: '感謝您的反饋！',
    feedbackSuccessDesc: '我們已收到您的意見，會盡快審核。',
    bookmark: '收藏',
    bookmarked: '已收藏',
    qrCode: 'QR 碼分享',
    skipToContent: '跳至主要內容',
    legendOpen: '營業中',
    legendClosed: '已關閉',
    legendNoHours: '全天候服務'
  },
  en: {
    title: 'Wang Fuk Court Relief',
    subtitle: 'Support Information Hub',
    label: 'I want to...',
    placeholder: 'Search: Donate, Volunteer, Supplies...',
    emergency: '🚨 Casualty Enquiry 1878 999 | Mental Health 18111',
    installTitle: 'Install App',
    installDesc: 'Works offline, faster access',
    installBtn: 'Install',
    contact: 'Contact Info',
    details: 'Details',
    close: 'Close',
    copy: 'COPY',
    copied: 'COPIED',
    lastUpdate: 'Last Updated: Nov 29, 2025',
    listening: 'Listening...',
    newsTitle: '📰 Latest News',
    mapTitle: 'Resource Map',
    wcagCompliance: 'WCAG 2.2 Compliant',
    share: 'Share',
    shareWhatsApp: 'WhatsApp',
    shareSMS: 'SMS',
    shareLink: 'Copy Link',
    linkCopied: 'Link Copied!',
    getDirections: 'Get Directions',
    showOpenOnly: 'Show Open Only',
    open: 'Open',
    closed: 'Closed',
    opensAt: 'Opens at',
    closesAt: 'Closes at',
    open24h: 'Open 24/7',
    feedback: 'Submit Feedback',
    feedbackTitle: 'Feedback & Suggestions',
    feedbackType: 'Feedback Type',
    feedbackTypeUpdate: 'Resource Update',
    feedbackTypeNew: 'Suggest New Resource',
    feedbackTypeGeneral: 'General Feedback',
    resourceName: 'Resource Name',
    resourceNamePlaceholder: 'e.g., Red Cross',
    category: 'Category',
    categoryPlaceholder: 'e.g., Donation, Housing, Support',
    contactInfo: 'Contact Information',
    contactInfoPlaceholder: 'Phone, Email or Website',
    description: 'Description',
    descriptionPlaceholder: 'Please provide details...',
    yourName: 'Your Name (Optional)',
    yourEmail: 'Your Email (Optional)',
    submit: 'Submit',
    submitting: 'Submitting...',
    feedbackSuccess: 'Thank you for your feedback!',
    feedbackSuccessDesc: 'We have received your submission and will review it soon.',
    bookmark: 'Bookmark',
    bookmarked: 'Bookmarked',
    qrCode: 'QR Code Share',
    skipToContent: 'Skip to main content',
    legendOpen: 'Open Now',
    legendClosed: 'Closed',
    legendNoHours: 'Always Available'
  },
  tl: {
    title: 'Tulong sa Sunog',
    subtitle: 'Wang Fuk Court Relief',
    label: 'Gusto ko...',
    placeholder: 'Maghanap: Donasyon, Tulong...',
    emergency: '🚨 Casualty Enquiry 1878 999 | Mental Health 18111',
    installTitle: 'I-install',
    installDesc: 'Gumagana offline',
    installBtn: 'I-install',
    contact: 'Kontak',
    details: 'Detalye',
    close: 'Isara',
    copy: 'KOPYA',
    copied: 'KINOPYA',
    lastUpdate: 'Huling Update: Nov 29, 2025',
    listening: 'Nakikinig...',
    newsTitle: '📰 Latest News',
    mapTitle: 'Mapa ng Resources',
    wcagCompliance: 'WCAG 2.2 Compliant',
    share: 'Ibahagi',
    shareWhatsApp: 'WhatsApp',
    shareSMS: 'SMS',
    shareLink: 'Kopya Link',
    linkCopied: 'Nakopya ang Link!',
    getDirections: 'Kunin ang Direksyon',
    showOpenOnly: 'Ipakita Lang ang Bukas',
    open: 'Bukas',
    closed: 'Sarado',
    opensAt: 'Bubukas sa',
    closesAt: 'Magsasara sa',
    open24h: 'Bukas 24/7',
    feedback: 'Magpadala ng Feedback',
    feedbackTitle: 'Feedback at Mungkahi',
    feedbackType: 'Uri ng Feedback',
    feedbackTypeUpdate: 'Update sa Resources',
    feedbackTypeNew: 'Magmungkahi ng Bagong Resource',
    feedbackTypeGeneral: 'Pangkalahatang Feedback',
    resourceName: 'Pangalan ng Resource',
    resourceNamePlaceholder: 'hal., Red Cross',
    category: 'Kategorya',
    categoryPlaceholder: 'hal., Donasyon, Tirahan, Suporta',
    contactInfo: 'Contact Information',
    contactInfoPlaceholder: 'Telepono, Email o Website',
    description: 'Paglalarawan',
    descriptionPlaceholder: 'Magbigay ng detalye...',
    yourName: 'Pangalan Mo (Opsyonal)',
    yourEmail: 'Email Mo (Opsyonal)',
    submit: 'Ipasa',
    submitting: 'Isinusumite...',
    feedbackSuccess: 'Salamat sa iyong feedback!',
    feedbackSuccessDesc: 'Natanggap namin ang iyong submission at susuriin ito.',
    bookmark: 'Bookmark',
    bookmarked: 'Na-bookmark',
    qrCode: 'QR Code Share',
    skipToContent: 'Tumalon sa pangunahing nilalaman',
    legendOpen: 'Bukas Ngayon',
    legendClosed: 'Sarado',
    legendNoHours: 'Palaging Bukas'
  },
  id: {
    title: 'Bantuan Kebakaran',
    subtitle: 'Wang Fuk Court Relief',
    label: 'Saya ingin...',
    placeholder: 'Cari: Donasi, Relawan...',
    emergency: '🚨 Pertanyaan Korban 1878 999 | Mental 18111',
    installTitle: 'Instal App',
    installDesc: 'Akses offline cepat',
    installBtn: 'Instal',
    contact: 'Kontak',
    details: 'Detail',
    close: 'Tutup',
    copy: 'SALIN',
    copied: 'DISALIN',
    lastUpdate: 'Terakhir Diperbarui: 29 Nov 2025',
    listening: 'Mendengarkan...',
    newsTitle: '📰 Latest News',
    mapTitle: 'Peta Sumber Daya',
    wcagCompliance: 'WCAG 2.2 Compliant',
    share: 'Bagikan',
    shareWhatsApp: 'WhatsApp',
    shareSMS: 'SMS',
    shareLink: 'Salin Link',
    linkCopied: 'Link Disalin!',
    getDirections: 'Dapatkan Arah',
    showOpenOnly: 'Tampilkan Hanya yang Buka',
    open: 'Buka',
    closed: 'Tutup',
    opensAt: 'Buka jam',
    closesAt: 'Tutup jam',
    open24h: 'Buka 24/7',
    feedback: 'Kirim Masukan',
    feedbackTitle: 'Masukan & Saran',
    feedbackType: 'Jenis Masukan',
    feedbackTypeUpdate: 'Update Resource',
    feedbackTypeNew: 'Usulkan Resource Baru',
    feedbackTypeGeneral: 'Masukan Umum',
    resourceName: 'Nama Resource',
    resourceNamePlaceholder: 'mis., Red Cross',
    category: 'Kategori',
    categoryPlaceholder: 'mis., Donasi, Perumahan, Dukungan',
    contactInfo: 'Informasi Kontak',
    contactInfoPlaceholder: 'Telepon, Email atau Website',
    description: 'Deskripsi',
    descriptionPlaceholder: 'Berikan detail...',
    yourName: 'Nama Anda (Opsional)',
    yourEmail: 'Email Anda (Opsional)',
    submit: 'Kirim',
    submitting: 'Mengirim...',
    feedbackSuccess: 'Terima kasih atas masukan Anda!',
    feedbackSuccessDesc: 'Kami telah menerima kiriman Anda dan akan meninjaunya.',
    bookmark: 'Bookmark',
    bookmarked: 'Ditandai',
    qrCode: 'Bagikan QR Code',
    skipToContent: 'Langsung ke konten utama',
    legendOpen: 'Buka Sekarang',
    legendClosed: 'Tutup',
    legendNoHours: 'Selalu Tersedia'
  }
};

export interface Resource {
  icon: string;
  iconImage?: string;
  title: string;
  desc: string;
  keywords: string[];
  contacts: Array<{ l: string; v: string }>;
  info?: string[];
  coordinates?: [number, number]; // [latitude, longitude]
  hours?: {
    open: string; // e.g., "08:30"
    close: string; // e.g., "18:30"
    days?: string; // e.g., "Mon-Fri", "Daily", "24/7"
  };
}

export const resources: Record<Language, Resource[]> = {
  zh: [
    {
      icon: '💰',
      title: '政府支援基金',
      desc: '直接捐款協助受災居民',
      keywords: ['捐款', '錢', '基金'],
      contacts: [
        { l: '港幣', v: '中國銀行 012-875-2-190159-7' },
        { l: '其他貨幣', v: '中國銀行 012-875-2-190160-7' }
      ],
      coordinates: [22.4461, 114.1639] // Wang Fuk Court area
    },
    {
      icon: '🎓',
      title: '教大臨時支援中心',
      desc: '為受影響學生及家庭提供支援',
      keywords: ['教大', 'eduhk', '學生', '大學'],
      contacts: [
        { l: '地點', v: '教大 E 座室內運動場' },
        { l: '開放時間', v: '08:30 - 18:30' }
      ],
      coordinates: [22.4366, 114.1781], // EdUHK
      hours: { open: '08:30', close: '18:30', days: 'Daily' }
    },
    {
      icon: '❤️',
      title: '紅十字會',
      desc: '緊急現金援助及心理支援',
      keywords: ['紅十字會', '急救', '現金', '心理'],
      contacts: [
        { l: 'FPS 轉數快', v: '164279317' },
        { l: 'WhatsApp 支援', v: '9175 1433' },
        { l: '電話查詢', v: '3488 4933' },
        { l: '電郵', v: 'relief@redcross.org.hk' }
      ],
      info: ['提供即時慰問金及每月生活津貼', '透過 Shall We Talk 提供心理支援服務'],
      coordinates: [22.3193, 114.1694] // HK Red Cross HQ (West Kowloon)
    },
    {
      icon: '🙏',
      title: '明愛',
      desc: '全面災民支援服務',
      keywords: ['明愛', 'caritas', '支援'],
      contacts: [
        { l: '24小時家庭危機熱線', v: '18288' },
        { l: '心晴坊 - 荃灣', v: '3105 5337' },
        { l: '心晴坊 - 北區', v: '2278 1016' },
        { l: '護老者資源及支援中心', v: '3892 0100' },
        { l: '富亨長者宿舍', v: '2660 6125' },
        { l: '寧安計劃', v: '5239 1035' },
        { l: '電腦工場', v: '2716 6875' },
        { l: 'WhatsApp 電腦工場', v: '5520 9507' },
        { l: '查詢', v: '2843 4638' }
      ],
      info: [
        '提供情緒支援、輔導、長者照顧、外傭協助、殯葬援助、電腦支援、家居安置等服務',
        '網上捐款：https://www.caritas.org.hk/en/e_donation',
        '支票抬頭：Caritas - Hong Kong',
        '直接存款：ICBC 072-721-010001-606 或 HSBC 004-502-476914-001'
      ],
      coordinates: [22.4472, 114.1680] // Caritas Fu Heng Home for the Aged (Tai Po)
    },
    {
      icon: '🧠',
      title: '災後心理輔導熱線',
      desc: '免費災後心理支援及輔導',
      keywords: ['心理', '輔導', '情緒', '創傷'],
      contacts: [
        { l: '熱線', v: '5181 5501' }
      ],
      info: ['每晚 8:00-11:00 提供服務', '由受訓創傷治療人士負責'],
      hours: { open: '20:00', close: '23:00', days: 'Daily' }
    },
    {
      icon: '🏘️',
      title: '東華三院過渡性房屋',
      desc: '緊急住宿單位及物資支援',
      keywords: ['住宿', '過渡性房屋', '東華'],
      contacts: [
        { l: '緊急熱線', v: '6503 9730' }
      ],
      info: ['即時提供住宿', '設於樂禾東寓及啟德東寓'],
      coordinates: [22.4520, 114.1670] // Approximate Tai Po location
    },
    {
      icon: '📱',
      title: '香港電訊支援',
      desc: '免費數據、充電及網絡服務',
      keywords: ['電訊', '電話', '數據', '上網'],
      contacts: [
        { l: 'csl', v: '2512 3123' },
        { l: '1O1O', v: '2888 1010' },
        { l: '網上行/HKT', v: '1000' },
        { l: 'Now TV', v: '1833 888' }
      ],
      info: ['csl 大埔門市 24 小時開放至 11 月 30 日', '提供免費數據卡、充電、路由器借用'],
      coordinates: [22.4498, 114.1655], // CSL Tai Po Shop
      hours: { open: '00:00', close: '23:59', days: '24/7' }
    },
    {
      icon: '🏠',
      title: '臨時住宿',
      desc: '為受災家庭提供居所',
      keywords: ['住', '酒店', 'shelter'],
      contacts: [
        { l: '新鴻基地產', v: '提供160間免費酒店房' },
        { l: 'ImpactHK', v: '5341 6670' }
      ]
    },
    {
      icon: '📦',
      title: '物資捐贈',
      desc: '衣物、毛毯、日用品',
      keywords: ['物資', '衫', '食物'],
      info: ['⚠️ 多個收集點已爆滿，請先查詢'],
      contacts: [{ l: '政府熱線', v: '9213 2388' }]
    },
    {
      icon: '👷‍♀️',
      title: '外傭支援',
      desc: '多語言協助熱線',
      keywords: ['外傭', '工人', 'helper'],
      contacts: [
        { l: 'HELP Hotline', v: '2523 4020' },
        { l: '勞工處', v: '2157 9537' },
        { l: 'WhatsApp 支援', v: '+852 5936 3780' }
      ]
    },
    {
      icon: '🚨',
      title: '求助熱線',
      desc: '傷亡查詢及情緒支援',
      keywords: ['求助', '電話', '受傷'],
      contacts: [
        { l: '傷亡查詢', v: '1878 999' },
        { l: '情緒支援', v: '18111' },
        { l: '社署', v: '2343 2255' }
      ]
    }
  ],
  en: [
    {
      icon: '💰',
      title: 'Govt Relief Fund',
      desc: 'Direct donation to victims',
      keywords: ['donate', 'money', 'fund'],
      contacts: [{ l: 'HKD Account', v: 'Bank of China 012-875-2-190159-7' }],
      coordinates: [22.4461, 114.1639]
    },
    {
      icon: '🎓',
      title: 'EdUHK Support Centre',
      desc: 'Support for affected students/families',
      keywords: ['eduhk', 'student', 'university'],
      contacts: [
        { l: 'Location', v: 'EdUHK Block E Sports Hall' },
        { l: 'Hours', v: '08:30 - 18:30' }
      ],
      coordinates: [22.4366, 114.1781],
      hours: { open: '08:30', close: '18:30', days: 'Daily' }
    },
    {
      icon: '❤️',
      title: 'Red Cross',
      desc: 'Emergency Cash Aid & Psychological Support',
      keywords: ['red cross', 'help', 'cash', 'mental health'],
      contacts: [
        { l: 'FPS ID', v: '164279317' },
        { l: 'WhatsApp Support', v: '9175 1433' },
        { l: 'Phone', v: '3488 4933' },
        { l: 'Email', v: 'relief@redcross.org.hk' }
      ],
      info: ['Immediate relief funds + monthly living allowance', 'Shall We Talk psychological support service'],
      coordinates: [22.3193, 114.1694]
    },
    {
      icon: '🙏',
      title: 'Caritas Hong Kong',
      desc: 'Comprehensive Victim Support',
      keywords: ['caritas', 'support', 'help'],
      contacts: [
        { l: '24-Hour Crisis Line', v: '18288' },
        { l: 'Wellness Link - Tsuen Wan', v: '3105 5337' },
        { l: 'Wellness Link - North District', v: '2278 1016' },
        { l: 'Carers Support Centre', v: '3892 0100' },
        { l: 'Fu Heng Home - Tai Po', v: '2660 6125' },
        { l: 'Ning An Scheme', v: '5239 1035' },
        { l: 'Computer Workshop', v: '2716 6875' },
        { l: 'WhatsApp Computer Workshop', v: '5520 9507' },
        { l: 'General Enquiry', v: '2843 4638' }
      ],
      info: [
        'Services: Emotional support, elderly care, helper assistance, funeral aid, computers, home setup',
        'Online Donation: https://www.caritas.org.hk/en/e_donation',
        'Cheque to: Caritas - Hong Kong',
        'Bank: ICBC 072-721-010001-606 or HSBC 004-502-476914-001'
      ],
      coordinates: [22.4472, 114.1680]
    },
    {
      icon: '🧠',
      title: 'Post-Disaster Counseling Hotline',
      desc: 'Free psychological support & counseling',
      keywords: ['mental', 'counseling', 'trauma', 'support'],
      contacts: [
        { l: 'Hotline', v: '5181 5501' }
      ],
      info: ['Available 8:00-11:00 PM daily', 'Staffed by trained trauma counselors'],
      hours: { open: '20:00', close: '23:00', days: 'Daily' }
    },
    {
      icon: '🏘️',
      title: 'Tung Wah Transitional Housing',
      desc: 'Emergency accommodation & supplies',
      keywords: ['housing', 'shelter', 'transitional'],
      contacts: [
        { l: 'Emergency Hotline', v: '6503 9730' }
      ],
      info: ['Immediate accommodation available', 'Joyful & Kai Tak Dwellings projects'],
      coordinates: [22.4520, 114.1670]
    },
    {
      icon: '📱',
      title: 'HKT Telecom Support',
      desc: 'Free data, charging & network services',
      keywords: ['telecom', 'phone', 'data', 'internet'],
      contacts: [
        { l: 'csl', v: '2512 3123' },
        { l: '1O1O', v: '2888 1010' },
        { l: 'Netvigator/HKT', v: '1000' },
        { l: 'Now TV', v: '1833 888' }
      ],
      info: ['csl Tai Po Store 24/7 until Nov 30', 'Free SIM cards, charging, router loan'],
      coordinates: [22.4498, 114.1655],
      hours: { open: '00:00', close: '23:59', days: '24/7' }
    },
    {
      icon: '🏠',
      title: 'Temporary Housing',
      desc: 'Shelter for families',
      keywords: ['housing', 'hotel', 'shelter'],
      contacts: [
        { l: 'SHKP', v: '160 Free Hotel Rooms' },
        { l: 'ImpactHK', v: '5341 6670' }
      ]
    },
    {
      icon: '📦',
      title: 'Donate Supplies',
      desc: 'Clothes, Blankets',
      keywords: ['supplies', 'food'],
      info: ['⚠️ Many collection points full'],
      contacts: [{ l: 'Govt Hotline', v: '9213 2388' }]
    },
    {
      icon: '👷‍♀️',
      title: 'Helper Support',
      desc: 'Multilingual Assistance',
      keywords: ['helper', 'fdh', 'maid'],
      contacts: [
        { l: 'HELP Hotline', v: '2523 4020' },
        { l: 'Labour Dept', v: '2157 9537' },
        { l: 'WhatsApp Support', v: '+852 5936 3780' }
      ]
    },
    {
      icon: '🚨',
      title: 'Emergency Lines',
      desc: 'Casualty & Mental Health',
      keywords: ['help', 'emergency'],
      contacts: [
        { l: 'Casualty', v: '1878 999' },
        { l: 'Mental Health', v: '18111' },
        { l: 'SWD', v: '2343 2255' }
      ]
    }
  ],
  tl: [
    {
      icon: '💰',
      title: 'Pondo ng Gobyerno',
      desc: 'Direktang donasyon sa mga biktima',
      keywords: ['donate', 'pera', 'fund'],
      contacts: [{ l: 'HKD Account', v: 'Bank of China 012-875-2-190159-7' }],
      coordinates: [22.4461, 114.1639]
    },
    {
      icon: '🎓',
      title: 'EdUHK Support Centre',
      desc: 'Suporta para sa mga estudyante/pamilya',
      keywords: ['eduhk', 'estudyante', 'unibersidad'],
      contacts: [
        { l: 'Lokasyon', v: 'EdUHK Block E Sports Hall' },
        { l: 'Oras', v: '08:30 - 18:30' }
      ],
      coordinates: [22.4366, 114.1781],
      hours: { open: '08:30', close: '18:30', days: 'Daily' }
    },
    {
      icon: '❤️',
      title: 'Pula na Krus',
      desc: 'Tulong sa Cash at Suportang Sikolohikal',
      keywords: ['red cross', 'tulong', 'pera', 'mental health'],
      contacts: [
        { l: 'FPS ID', v: '164279317' },
        { l: 'WhatsApp Support', v: '9175 1433' },
        { l: 'Telepono', v: '3488 4933' },
        { l: 'Email', v: 'relief@redcross.org.hk' }
      ],
      info: ['Agarang tulong pinansyal + buwanang allowance', 'Shall We Talk serbisyong sikolohikal'],
      coordinates: [22.3193, 114.1694]
    },
    {
      icon: '🙏',
      title: 'Caritas Hong Kong',
      desc: 'Kumpletong Suporta sa Biktima',
      keywords: ['caritas', 'suporta', 'tulong'],
      contacts: [
        { l: '24-Oras Crisis Line', v: '18288' },
        { l: 'Wellness Link - Tsuen Wan', v: '3105 5337' },
        { l: 'Wellness Link - North District', v: '2278 1016' },
        { l: 'Carers Support Centre', v: '3892 0100' },
        { l: 'Fu Heng Home - Tai Po', v: '2660 6125' },
        { l: 'Ning An Scheme', v: '5239 1035' },
        { l: 'Computer Workshop', v: '2716 6875' },
        { l: 'WhatsApp Computer Workshop', v: '5520 9507' },
        { l: 'Pangkalahatang Tanong', v: '2843 4638' }
      ],
      info: [
        'Serbisyo: Emosyonal na suporta, pag-aalaga sa matatanda, tulong sa katulong, tulong sa libing, kompyuter, pag-setup ng bahay',
        'Online na Donasyon: https://www.caritas.org.hk/en/e_donation',
        'Tseke: Caritas - Hong Kong',
        'Bangko: ICBC 072-721-010001-606 o HSBC 004-502-476914-001'
      ],
      coordinates: [22.4472, 114.1680]
    },
    {
      icon: '🧠',
      title: 'Hotline ng Counseling',
      desc: 'Libreng suportang sikolohikal',
      keywords: ['mental', 'counseling', 'trauma'],
      contacts: [
        { l: 'Hotline', v: '5181 5501' }
      ],
      info: ['Bukas 8:00-11:00 PM araw-araw', 'May mga trained trauma counselors'],
      hours: { open: '20:00', close: '23:00', days: 'Daily' }
    },
    {
      icon: '🏘️',
      title: 'Tung Wah Transitional Housing',
      desc: 'Emergency na tirahan at supplies',
      keywords: ['tirahan', 'shelter'],
      contacts: [
        { l: 'Emergency Hotline', v: '6503 9730' }
      ],
      info: ['Kaagad na accommodations', 'Joyful & Kai Tak Dwellings'],
      coordinates: [22.4520, 114.1670]
    },
    {
      icon: '📱',
      title: 'HKT Telecom Support',
      desc: 'Libreng data, charging at network',
      keywords: ['telecom', 'phone', 'data'],
      contacts: [
        { l: 'csl', v: '2512 3123' },
        { l: '1O1O', v: '2888 1010' },
        { l: 'Netvigator/HKT', v: '1000' },
        { l: 'Now TV', v: '1833 888' }
      ],
      info: ['csl Tai Po Store 24/7 hanggang Nov 30', 'Libreng SIM, charging, router'],
      coordinates: [22.4498, 114.1655],
      hours: { open: '00:00', close: '23:59', days: '24/7' }
    },
    {
      icon: '🏠',
      title: 'Pansamantalang Tirahan',
      desc: 'Kanlungan para sa mga pamilya',
      keywords: ['tirahan', 'hotel', 'shelter'],
      contacts: [
        { l: 'SHKP', v: '160 Libreng Hotel Room' },
        { l: 'ImpactHK', v: '5341 6670' }
      ]
    },
    {
      icon: '📦',
      title: 'Mag-donate ng Supplies',
      desc: 'Damit, Kumot',
      keywords: ['supplies', 'pagkain'],
      info: ['⚠️ Maraming koleksyon punuan na'],
      contacts: [{ l: 'Govt Hotline', v: '9213 2388' }]
    },
    {
      icon: '👷‍♀️',
      title: 'Suporta para sa Helper',
      desc: 'Tulong sa Maraming Wika',
      keywords: ['helper', 'fdh', 'katulong'],
      contacts: [
        { l: 'HELP Hotline', v: '2523 4020' },
        { l: 'Labour Dept', v: '2157 9537' },
        { l: 'WhatsApp Support', v: '+852 5936 3780' }
      ]
    },
    {
      icon: '🚨',
      title: 'Emergency Lines',
      desc: 'Tanong sa Casualty at Mental Health',
      keywords: ['tulong', 'emergency'],
      contacts: [
        { l: 'Casualty', v: '1878 999' },
        { l: 'Mental Health', v: '18111' },
        { l: 'SWD', v: '2343 2255' }
      ]
    }
  ],
  id: [
    {
      icon: '💰',
      title: 'Dana Bantuan Pemerintah',
      desc: 'Donasi langsung untuk korban',
      keywords: ['donasi', 'uang', 'dana'],
      contacts: [{ l: 'Rekening HKD', v: 'Bank of China 012-875-2-190159-7' }],
      coordinates: [22.4461, 114.1639]
    },
    {
      icon: '🎓',
      title: 'Pusat Dukungan EdUHK',
      desc: 'Dukungan untuk mahasiswa/keluarga',
      keywords: ['eduhk', 'mahasiswa', 'universitas'],
      contacts: [
        { l: 'Lokasi', v: 'EdUHK Block E Sports Hall' },
        { l: 'Jam', v: '08:30 - 18:30' }
      ],
      coordinates: [22.4366, 114.1781],
      hours: { open: '08:30', close: '18:30', days: 'Daily' }
    },
    {
      icon: '❤️',
      title: 'Palang Merah',
      desc: 'Bantuan Tunai Darurat & Dukungan Psikologis',
      keywords: ['red cross', 'bantuan', 'uang', 'mental'],
      contacts: [
        { l: 'FPS ID', v: '164279317' },
        { l: 'WhatsApp Support', v: '9175 1433' },
        { l: 'Telepon', v: '3488 4933' },
        { l: 'Email', v: 'relief@redcross.org.hk' }
      ],
      info: ['Dana bantuan segera + tunjangan bulanan', 'Layanan dukungan psikologis Shall We Talk'],
      coordinates: [22.3193, 114.1694]
    },
    {
      icon: '🙏',
      title: 'Caritas Hong Kong',
      desc: 'Dukungan Korban Komprehensif',
      keywords: ['caritas', 'dukungan', 'bantuan'],
      contacts: [
        { l: 'Crisis Line 24-Jam', v: '18288' },
        { l: 'Wellness Link - Tsuen Wan', v: '3105 5337' },
        { l: 'Wellness Link - North District', v: '2278 1016' },
        { l: 'Pusat Dukungan Pengasuh', v: '3892 0100' },
        { l: 'Fu Heng Home - Tai Po', v: '2660 6125' },
        { l: 'Ning An Scheme', v: '5239 1035' },
        { l: 'Computer Workshop', v: '2716 6875' },
        { l: 'WhatsApp Computer Workshop', v: '5520 9507' },
        { l: 'Pertanyaan Umum', v: '2843 4638' }
      ],
      info: [
        'Layanan: Dukungan emosional, perawatan lansia, bantuan pembantu, bantuan pemakaman, komputer, pengaturan rumah',
        'Donasi Online: https://www.caritas.org.hk/en/e_donation',
        'Cek ke: Caritas - Hong Kong',
        'Bank: ICBC 072-721-010001-606 atau HSBC 004-502-476914-001'
      ],
      coordinates: [22.4472, 114.1680]
    },
    {
      icon: '🧠',
      title: 'Hotline Konseling Pasca-Bencana',
      desc: 'Dukungan psikologis gratis',
      keywords: ['mental', 'konseling', 'trauma'],
      contacts: [
        { l: 'Hotline', v: '5181 5501' }
      ],
      info: ['Tersedia 8:00-11:00 PM setiap hari', 'Dilayani konselor trauma terlatih'],
      hours: { open: '20:00', close: '23:00', days: 'Daily' }
    },
    {
      icon: '🏘️',
      title: 'Perumahan Transisi Tung Wah',
      desc: 'Akomodasi darurat & persediaan',
      keywords: ['perumahan', 'shelter'],
      contacts: [
        { l: 'Hotline Darurat', v: '6503 9730' }
      ],
      info: ['Akomodasi tersedia segera', 'Proyek Joyful & Kai Tak Dwellings'],
      coordinates: [22.4520, 114.1670]
    },
    {
      icon: '📱',
      title: 'Dukungan HKT Telecom',
      desc: 'Data gratis, charging & jaringan',
      keywords: ['telecom', 'telepon', 'data'],
      contacts: [
        { l: 'csl', v: '2512 3123' },
        { l: '1O1O', v: '2888 1010' },
        { l: 'Netvigator/HKT', v: '1000' },
        { l: 'Now TV', v: '1833 888' }
      ],
      info: ['Toko csl Tai Po 24/7 hingga 30 Nov', 'SIM gratis, charging, pinjaman router'],
      coordinates: [22.4498, 114.1655],
      hours: { open: '00:00', close: '23:59', days: '24/7' }
    },
    {
      icon: '🏠',
      title: 'Perumahan Sementara',
      desc: 'Tempat tinggal untuk keluarga',
      keywords: ['perumahan', 'hotel', 'shelter'],
      contacts: [
        { l: 'SHKP', v: '160 Kamar Hotel Gratis' },
        { l: 'ImpactHK', v: '5341 6670' }
      ]
    },
    {
      icon: '📦',
      title: 'Donasi Persediaan',
      desc: 'Pakaian, Selimut',
      keywords: ['persediaan', 'makanan'],
      info: ['⚠️ Banyak titik pengumpulan penuh'],
      contacts: [{ l: 'Hotline Pemerintah', v: '9213 2388' }]
    },
    {
      icon: '👷‍♀️',
      title: 'Dukungan Helper',
      desc: 'Bantuan Multibahasa',
      keywords: ['helper', 'fdh', 'pembantu'],
      contacts: [
        { l: 'HELP Hotline', v: '2523 4020' },
        { l: 'Dept Tenaga Kerja', v: '2157 9537' },
        { l: 'Dukungan WhatsApp', v: '+852 5936 3780' }
      ]
    },
    {
      icon: '🚨',
      title: 'Jalur Darurat',
      desc: 'Korban & Kesehatan Mental',
      keywords: ['bantuan', 'darurat'],
      contacts: [
        { l: 'Korban', v: '1878 999' },
        { l: 'Kesehatan Mental', v: '18111' },
        { l: 'SWD', v: '2343 2255' }
      ]
    }
  ]
};
