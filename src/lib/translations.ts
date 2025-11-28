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
    wcagCompliance: '本網站符合 WCAG 2.2 無障礙標準',
    share: '分享',
    whatsapp: 'WhatsApp',
    sms: '短訊',
    copyLink: '複製內容',
    offlineMode: '🔌 離線模式 - 正在顯示快取內容',
    notifyEnable: '啟用通知',
    notifyDisable: '停用通知',
    notifyEnabled: '通知已啟用',
    notifyDisabled: '通知已停用',
    notifyDenied: '通知已被封鎖。請在瀏覽器設定中啟用',
    notifyTestTitle: '宏福苑援助',
    notifyTestBody: '緊急通知測試成功！',
    skipToContent: '跳至主要內容',
    feedbackTitle: '意見反饋',
    feedbackPlaceholder: '請告訴我們您的意見或建議...',
    feedbackSubmit: '提交',
    feedbackSuccess: '意見已提交',
    feedbackClose: '關閉',
    feedbackReport: '報告問題',
    feedbackSuggest: '建議資源',
    popular: '熱門',
    newsLinks: [
      { name: 'SCMP', url: 'https://www.scmp.com/topics/hong-kongs-tai-po-fire-tragedy?module=breadcrumb&pgtype=article', desc: '最新報導' },
      { name: '政府資訊', url: 'https://www.info.gov.hk/', desc: '官方更新' },
      { name: '醫管局', url: 'https://www.ha.org.hk/', desc: '醫療更新' }
    ]
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
    wcagCompliance: 'WCAG 2.2 Compliant',
    share: 'Share',
    whatsapp: 'WhatsApp',
    sms: 'SMS',
    copyLink: 'Copy Info',
    offlineMode: '🔌 Offline Mode - Viewing Cached Content',
    notifyEnable: 'Enable Alerts',
    notifyDisable: 'Disable Alerts',
    notifyEnabled: 'Alerts Enabled',
    notifyDisabled: 'Alerts Disabled',
    notifyDenied: 'Notifications blocked. Please enable in browser settings',
    notifyTestTitle: 'Wang Fuk Relief',
    notifyTestBody: 'Emergency alerts test successful!',
    skipToContent: 'Skip to main content',
    feedbackTitle: 'Feedback',
    feedbackPlaceholder: 'Share your feedback or suggestions...',
    feedbackSubmit: 'Submit',
    feedbackSuccess: 'Feedback submitted',
    feedbackClose: 'Close',
    feedbackReport: 'Report Issue',
    feedbackSuggest: 'Suggest Resource',
    popular: 'Popular',
    newsLinks: [
      { name: 'SCMP', url: 'https://www.scmp.com/topics/hong-kongs-tai-po-fire-tragedy?module=breadcrumb&pgtype=article', desc: 'Latest News Coverage' },
      { name: 'Govt Info', url: 'https://www.info.gov.hk/', desc: 'Official Updates' },
      { name: 'Hospital Authority', url: 'https://www.ha.org.hk/', desc: 'Medical Updates' }
    ]
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
    wcagCompliance: 'WCAG 2.2 Compliant',
    share: 'Ibahagi',
    whatsapp: 'WhatsApp',
    sms: 'SMS',
    copyLink: 'Kopyahin',
    offlineMode: '🔌 Offline Mode - Nakikita ang Cached Content',
    notifyEnable: 'Paganahin ang Alerto',
    notifyDisable: 'I-disable ang Alerto',
    notifyEnabled: 'Alerto Naka-on',
    notifyDisabled: 'Alerto Naka-off',
    notifyDenied: 'Naka-block ang notipikasyon. Paganahin sa browser settings',
    notifyTestTitle: 'Wang Fuk Relief',
    notifyTestBody: 'Matagumpay ang emergency alerts test!',
    skipToContent: 'Tumalon sa pangunahing nilalaman',
    feedbackTitle: 'Feedback',
    feedbackPlaceholder: 'Ibahagi ang iyong feedback o mungkahi...',
    feedbackSubmit: 'Ipasa',
    feedbackSuccess: 'Naipadala ang feedback',
    feedbackClose: 'Isara',
    feedbackReport: 'Iulat ang Isyu',
    feedbackSuggest: 'Imungkahi ang Resource',
    popular: 'Sikat',
    newsLinks: [
      { name: 'SCMP', url: 'https://www.scmp.com/topics/hong-kongs-tai-po-fire-tragedy?module=breadcrumb&pgtype=article', desc: 'Pinakabagong Balita' },
      { name: 'Govt Info', url: 'https://www.info.gov.hk/', desc: 'Opisyal na Update' },
      { name: 'Hospital Authority', url: 'https://www.ha.org.hk/', desc: 'Medikal na Update' }
    ]
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
    wcagCompliance: 'WCAG 2.2 Compliant',
    share: 'Bagikan',
    whatsapp: 'WhatsApp',
    sms: 'SMS',
    copyLink: 'Salin Info',
    offlineMode: '🔌 Mode Offline - Melihat Konten Cache',
    notifyEnable: 'Aktifkan Peringatan',
    notifyDisable: 'Nonaktifkan Peringatan',
    notifyEnabled: 'Peringatan Aktif',
    notifyDisabled: 'Peringatan Nonaktif',
    notifyDenied: 'Notifikasi diblokir. Aktifkan di pengaturan browser',
    notifyTestTitle: 'Wang Fuk Relief',
    notifyTestBody: 'Tes peringatan darurat berhasil!',
    skipToContent: 'Lewati ke konten utama',
    feedbackTitle: 'Masukan',
    feedbackPlaceholder: 'Bagikan masukan atau saran Anda...',
    feedbackSubmit: 'Kirim',
    feedbackSuccess: 'Masukan terkirim',
    feedbackClose: 'Tutup',
    feedbackReport: 'Laporkan Masalah',
    feedbackSuggest: 'Sarankan Resource',
    popular: 'Populer',
    newsLinks: [
      { name: 'SCMP', url: 'https://www.scmp.com/topics/hong-kongs-tai-po-fire-tragedy?module=breadcrumb&pgtype=article', desc: 'Berita Terbaru' },
      { name: 'Info Pemerintah', url: 'https://www.info.gov.hk/', desc: 'Pembaruan Resmi' },
      { name: 'Hospital Authority', url: 'https://www.ha.org.hk/', desc: 'Pembaruan Medis' }
    ]
  }
};

export interface Resource {
  icon: string;
  title: string;
  desc: string;
  keywords: string[];
  contacts: Array<{ l: string; v: string }>;
  info?: string[];
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
      ]
    },
    {
      icon: '🎓',
      title: '教大臨時支援中心',
      desc: '為受影響學生及家庭提供支援',
      keywords: ['教大', 'eduhk', '學生', '大學'],
      contacts: [
        { l: '地點', v: '教大 E 座室內運動場' },
        { l: '開放時間', v: '08:30 - 18:30' }
      ]
    },
    {
      icon: '🏥',
      title: '香港紅十字會',
      desc: '緊急心理支援及物資',
      keywords: ['紅十字會', '急救'],
      contacts: [
        { l: 'FPS 轉數快', v: '164279317' },
        { l: '查詢', v: 'relief@redcross.org.hk' }
      ]
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
    },
    {
      icon: '🙏',
      title: '明愛香港',
      desc: '綜合支援服務',
      keywords: ['明愛', 'caritas', '輔導', '支援'],
      contacts: [
        { l: '24小時危機熱線', v: '18288' },
        { l: '荃灣康怡中心', v: '3105 5337' },
        { l: '北區康怡中心', v: '2278 1016' },
        { l: '護老者支援', v: '3892 0100' },
        { l: '大埔富亨護老中心', v: '2660 6125' },
        { l: '殮葬援助計劃', v: '5239 1035' },
        { l: '電腦工場', v: '2716 6875' },
        { l: 'WhatsApp', v: '5520 9507' }
      ]
    }
  ],
  en: [
    {
      icon: '💰',
      title: 'Govt Relief Fund',
      desc: 'Direct donation to victims',
      keywords: ['donate', 'money', 'fund'],
      contacts: [{ l: 'HKD Account', v: 'Bank of China 012-875-2-190159-7' }]
    },
    {
      icon: '🎓',
      title: 'EdUHK Support Centre',
      desc: 'Support for affected students/families',
      keywords: ['eduhk', 'student', 'university'],
      contacts: [
        { l: 'Location', v: 'EdUHK Block E Sports Hall' },
        { l: 'Hours', v: '08:30 - 18:30' }
      ]
    },
    {
      icon: '🏥',
      title: 'HK Red Cross',
      desc: 'Emergency & Psych Support',
      keywords: ['red cross', 'help'],
      contacts: [
        { l: 'FPS ID', v: '164279317' },
        { l: 'Email', v: 'relief@redcross.org.hk' }
      ]
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
    },
    {
      icon: '🙏',
      title: 'Caritas Hong Kong',
      desc: 'Comprehensive Support Services',
      keywords: ['caritas', 'counselling', 'support'],
      contacts: [
        { l: '24-Hour Crisis Line', v: '18288' },
        { l: 'Wellness Link - Tsuen Wan', v: '3105 5337' },
        { l: 'Wellness Link - North District', v: '2278 1016' },
        { l: 'Carer Support Centre', v: '3892 0100' },
        { l: 'Fu Heng Home - Tai Po', v: '2660 6125' },
        { l: 'Funeral Assistance', v: '5239 1035' },
        { l: 'Computer Workshop', v: '2716 6875' },
        { l: 'WhatsApp', v: '5520 9507' }
      ]
    }
  ],
  tl: [
    {
      icon: '💰',
      title: 'Govt Relief Fund',
      desc: 'Tuwirang donasyon sa mga biktima',
      keywords: ['donasyon', 'pera', 'pondo'],
      contacts: [{ l: 'HKD Account', v: 'Bank of China 012-875-2-190159-7' }]
    },
    {
      icon: '🎓',
      title: 'EdUHK Support Centre',
      desc: 'Suporta para sa mga apektadong estudyante at pamilya',
      keywords: ['eduhk', 'estudyante', 'unibersidad'],
      contacts: [
        { l: 'Lokasyon', v: 'EdUHK Block E Sports Hall' },
        { l: 'Oras', v: '08:30 - 18:30' }
      ]
    },
    {
      icon: '🏥',
      title: 'HK Red Cross',
      desc: 'Emergency at Psychological Support',
      keywords: ['red cross', 'tulong'],
      contacts: [
        { l: 'FPS ID', v: '164279317' },
        { l: 'Email', v: 'relief@redcross.org.hk' }
      ]
    },
    {
      icon: '🏠',
      title: 'Pansamantalang Tirahan',
      desc: 'Shelter para sa mga pamilya',
      keywords: ['tirahan', 'hotel', 'shelter'],
      contacts: [
        { l: 'SHKP', v: '160 Libreng Hotel Rooms' },
        { l: 'ImpactHK', v: '5341 6670' }
      ]
    },
    {
      icon: '📦',
      title: 'Mag-donate ng Supplies',
      desc: 'Damit, Kumot',
      keywords: ['supplies', 'pagkain'],
      info: ['⚠️ Maraming collection points puno na'],
      contacts: [{ l: 'Govt Hotline', v: '9213 2388' }]
    },
    {
      icon: '👷‍♀️',
      title: 'Helper Support',
      desc: 'Multilingual Assistance',
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
      desc: 'Casualty at Mental Health',
      keywords: ['tulong', 'emergency'],
      contacts: [
        { l: 'Casualty', v: '1878 999' },
        { l: 'Mental Health', v: '18111' },
        { l: 'SWD', v: '2343 2255' }
      ]
    },
    {
      icon: '🙏',
      title: 'Caritas Hong Kong',
      desc: 'Komprehensibong Serbisyong Suporta',
      keywords: ['caritas', 'counselling', 'suporta'],
      contacts: [
        { l: '24-Oras Crisis Line', v: '18288' },
        { l: 'Wellness Link - Tsuen Wan', v: '3105 5337' },
        { l: 'Wellness Link - North District', v: '2278 1016' },
        { l: 'Carer Support Centre', v: '3892 0100' },
        { l: 'Fu Heng Home - Tai Po', v: '2660 6125' },
        { l: 'Tulong sa Libing', v: '5239 1035' },
        { l: 'Computer Workshop', v: '2716 6875' },
        { l: 'WhatsApp', v: '5520 9507' }
      ]
    }
  ],
  id: [
    {
      icon: '💰',
      title: 'Dana Bantuan Pemerintah',
      desc: 'Donasi langsung untuk korban',
      keywords: ['donasi', 'uang', 'dana'],
      contacts: [{ l: 'Akun HKD', v: 'Bank of China 012-875-2-190159-7' }]
    },
    {
      icon: '🎓',
      title: 'Pusat Dukungan EdUHK',
      desc: 'Dukungan untuk siswa dan keluarga yang terkena dampak',
      keywords: ['eduhk', 'siswa', 'universitas'],
      contacts: [
        { l: 'Lokasi', v: 'EdUHK Block E Sports Hall' },
        { l: 'Jam', v: '08:30 - 18:30' }
      ]
    },
    {
      icon: '🏥',
      title: 'Palang Merah HK',
      desc: 'Darurat & Dukungan Psikologis',
      keywords: ['palang merah', 'bantuan'],
      contacts: [
        { l: 'FPS ID', v: '164279317' },
        { l: 'Email', v: 'relief@redcross.org.hk' }
      ]
    },
    {
      icon: '🏠',
      title: 'Tempat Tinggal Sementara',
      desc: 'Penampungan untuk keluarga',
      keywords: ['perumahan', 'hotel', 'shelter'],
      contacts: [
        { l: 'SHKP', v: '160 Kamar Hotel Gratis' },
        { l: 'ImpactHK', v: '5341 6670' }
      ]
    },
    {
      icon: '📦',
      title: 'Donasi Perlengkapan',
      desc: 'Pakaian, Selimut',
      keywords: ['perlengkapan', 'makanan'],
      info: ['⚠️ Banyak titik pengumpulan penuh'],
      contacts: [{ l: 'Hotline Pemerintah', v: '9213 2388' }]
    },
    {
      icon: '👷‍♀️',
      title: 'Dukungan Helper',
      desc: 'Bantuan Multibahasa',
      keywords: ['helper', 'pembantu', 'asisten'],
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
    },
    {
      icon: '🙏',
      title: 'Caritas Hong Kong',
      desc: 'Layanan Dukungan Komprehensif',
      keywords: ['caritas', 'konseling', 'dukungan'],
      contacts: [
        { l: 'Saluran Krisis 24 Jam', v: '18288' },
        { l: 'Wellness Link - Tsuen Wan', v: '3105 5337' },
        { l: 'Wellness Link - North District', v: '2278 1016' },
        { l: 'Pusat Dukungan Pengasuh', v: '3892 0100' },
        { l: 'Fu Heng Home - Tai Po', v: '2660 6125' },
        { l: 'Bantuan Pemakaman', v: '5239 1035' },
        { l: 'Computer Workshop', v: '2716 6875' },
        { l: 'WhatsApp', v: '5520 9507' }
      ]
    }
  ]
};
