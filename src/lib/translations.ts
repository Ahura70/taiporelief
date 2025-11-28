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
    call: '致電',
    floatingEmergency: '緊急求助',
    floatingMentalHealth: '精神健康',
    floatingDonate: '捐款',
    voiceSearchNotSupported: '語音搜尋不支援',
    micPermissionDenied: '麥克風權限被拒絕',
    voiceSearchError: '語音搜尋錯誤',
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
    ],
    donationTitle: '💰 救災基金進度',
    donationRaised: '已籌得',
    donationGoal: '達成目標',
    donationCurrency: 'HK$',
    donationMilestones: [
      { label: '初步目標' },
      { label: '半程達成' },
      { label: '接近目標' },
      { label: '目標達成' }
    ],
    mapTitle: '🗺️ 支援地點地圖',
    mapApiKeyPlaceholder: '輸入您的 Mapbox Token',
    mapEnterApiKey: '輸入 Mapbox API Key 以查看地圖',
    mapSetApiKey: '設定',
    mapFilterAll: '全部',
    mapFilterSupport: '支援中心',
    mapFilterHousing: '臨時住宿',
    mapFilterCollection: '物資收集點',
    mapFilterMedical: '醫療設施',
    liveUpdatesTitle: '📡 即時更新',
    liveUpdatesDonation: '捐款',
    liveUpdatesVolunteer: '義工',
    liveUpdatesAlert: '緊急通知',
    liveUpdatesTimeJustNow: '剛剛',
    liveUpdatesTimeMinutes: '分鐘前',
    liveUpdatesTimeHours: '小時前',
    organizationsTitle: '🏛️ 捐款機構資訊',
    organizationsHeaders: {
      organization: '機構名稱',
      purpose: '用途',
      donationMethods: '捐款方式',
      deadline: '截止日期/備註'
    },
    organizations: [
      {
        name: '香港紅十字會 (大埔火災緊急救援)',
        purpose: '急救、心理支援、日常必需品（寢具及衛生用品）支援 1,900+ 受影響家庭',
        donationMethods: [
          '網上：redcross.org.hk/en/Activity/TPFEA.html 使用 PayMe、Alipay、FPS',
          '銀行轉帳/支票：註明「9900」並電郵詳情至 relief@redcross.org.hk',
          '親身：7-Eleven 收據或總部投遞（九龍西海庭道19號）'
        ],
        deadline: '至 2025年12月10日。所有款項專用於此災難',
        link: 'https://redcross.org.hk/en/Activity/TPFEA.html'
      },
      {
        name: 'Feeding Hong Kong',
        purpose: '為流離失所家庭提供緊急食品包、膳食/超市券及個人護理用品',
        donationMethods: [
          '網上：feedinghk.org/tai-po/（安全捐款平台）'
        ],
        deadline: '持續進行；專注於服務不足的需求',
        link: 'https://feedinghk.org/tai-po/'
      },
      {
        name: '聖公會 – 1126 火災支援基金',
        purpose: '為個人/家庭提供日常開支、醫療費用及臨時住宿的現金資助',
        donationMethods: [
          '網上：透過其捐款頁面'
        ],
        deadline: '持續進行；100% 款項用於救援',
        link: 'https://www.hkskh.org/'
      },
      {
        name: '保良局',
        purpose: '為受傷者及死者家屬提供經濟援助',
        donationMethods: [
          '網上/銀行：polungkuk.org.hk（註明「大埔火災救援」）',
          '已從慈善基金撥款港幣 300 萬元'
        ],
        deadline: '持續進行',
        link: 'https://www.poleungkuk.org.hk/'
      },
      {
        name: '香港社會服務聯會 (HKCSS)',
        purpose: '協調社區救援，通過地方合作夥伴提供現金及物資',
        donationMethods: [
          '網上：hkcss.org.hk（指定用於大埔火災）'
        ],
        deadline: '持續進行；分配予資源緊絀的小型機構',
        link: 'https://www.hkcss.org.hk/'
      },
      {
        name: '鄰舍輔導會 (NAAC)',
        purpose: '地區性大埔救援，包括庇護所及輔導',
        donationMethods: [
          '網上：naac.org.hk（指定大埔救援）'
        ],
        deadline: '持續進行',
        link: 'https://www.naac.org.hk/'
      },
      {
        name: '仁濟醫院',
        purpose: '為低收入家庭提供殮葬及醫療援助',
        donationMethods: [
          '網上/銀行：ych.org.hk（註明火災救援基金）'
        ],
        deadline: '持續進行',
        link: 'https://www.ych.org.hk/'
      }
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
    call: 'Call',
    floatingEmergency: 'Emergency',
    floatingMentalHealth: 'Mental Health',
    floatingDonate: 'Donate',
    voiceSearchNotSupported: 'Voice search not supported',
    micPermissionDenied: 'Microphone permission denied',
    voiceSearchError: 'Voice search error',
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
    ],
    donationTitle: '💰 Relief Fund Progress',
    donationRaised: 'Raised',
    donationGoal: 'of Goal',
    donationCurrency: 'HK$',
    donationMilestones: [
      { label: 'Initial Target' },
      { label: 'Halfway There' },
      { label: 'Almost There' },
      { label: 'Goal Reached' }
    ],
    mapTitle: '🗺️ Support Locations Map',
    mapApiKeyPlaceholder: 'Enter your Mapbox Token',
    mapEnterApiKey: 'Enter Mapbox API Key to view map',
    mapSetApiKey: 'Set Key',
    mapFilterAll: 'All',
    mapFilterSupport: 'Support Centers',
    mapFilterHousing: 'Temporary Housing',
    mapFilterCollection: 'Collection Points',
    mapFilterMedical: 'Medical Facilities',
    liveUpdatesTitle: '📡 Live Updates',
    liveUpdatesDonation: 'Donation',
    liveUpdatesVolunteer: 'Volunteer',
    liveUpdatesAlert: 'Alert',
    liveUpdatesTimeJustNow: 'Just now',
    liveUpdatesTimeMinutes: 'mins ago',
    liveUpdatesTimeHours: 'hrs ago',
    organizationsTitle: '🏛️ Donation Organizations',
    organizationsHeaders: {
      organization: 'Organization',
      purpose: 'Purpose',
      donationMethods: 'Donation Methods',
      deadline: 'Deadline/Notes'
    },
    organizations: [
      {
        name: 'Hong Kong Red Cross (Tai Po Fire Emergency Appeal)',
        purpose: 'First aid, psychological support, daily necessities like bedding and hygiene items for 1,900+ affected families',
        donationMethods: [
          'Online: redcross.org.hk/en/Activity/TPFEA.html using PayMe, Alipay, FPS',
          'Bank Transfer/Cheque: Mark "9900" and send details to relief@redcross.org.hk',
          'In-person: 7-Eleven receipts or HQ drop-off (19 Hoi Ting Road, West Kowloon)'
        ],
        deadline: 'Until December 10, 2025. All funds exclusive to this disaster',
        link: 'https://redcross.org.hk/en/Activity/TPFEA.html'
      },
      {
        name: 'Feeding Hong Kong',
        purpose: 'Emergency food packs, meal/supermarket vouchers, and personal care items for displaced families',
        donationMethods: [
          'Online: feedinghk.org/tai-po/ (secure portal for financial contributions)'
        ],
        deadline: 'Ongoing; focuses on underserved needs',
        link: 'https://feedinghk.org/tai-po/'
      },
      {
        name: 'Sheng Kung Hui (Hong Kong Anglican Church) – Act of Love 1126 Fire Disaster Support Fund',
        purpose: 'Cash grants for daily needs, medical costs, and temporary accommodation',
        donationMethods: [
          'Online: Via their donation page'
        ],
        deadline: 'Ongoing; 100% of donations used for relief',
        link: 'https://www.hkskh.org/'
      },
      {
        name: 'Po Leung Kuk',
        purpose: 'Financial relief for injured victims and families of the deceased',
        donationMethods: [
          'Online/Bank: polungkuk.org.hk (specify "Tai Po Fire Relief")',
          'HK$3 million already allocated from their charity fund'
        ],
        deadline: 'Ongoing',
        link: 'https://www.poleungkuk.org.hk/'
      },
      {
        name: 'Hong Kong Council of Social Service (HKCSS)',
        purpose: 'Coordinates community relief, including cash and supplies via local partners',
        donationMethods: [
          'Online: hkcss.org.hk (designate for Tai Po fire)'
        ],
        deadline: 'Ongoing; channels to smaller orgs with tight resources',
        link: 'https://www.hkcss.org.hk/'
      },
      {
        name: 'Neighbourhood Advice-Action Council (NAAC)',
        purpose: 'Local Tai Po-focused aid, including shelter and counseling',
        donationMethods: [
          'Online: naac.org.hk (donation form; specify Tai Po relief)'
        ],
        deadline: 'Ongoing',
        link: 'https://www.naac.org.hk/'
      },
      {
        name: 'Yan Chai Hospital',
        purpose: 'Emergency assistance for funerary and medical needs of low-income families',
        donationMethods: [
          'Online/Bank: ych.org.hk (mark for fire relief fund)'
        ],
        deadline: 'Ongoing',
        link: 'https://www.ych.org.hk/'
      }
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
    call: 'Tawagan',
    floatingEmergency: 'Emergency',
    floatingMentalHealth: 'Kalusugan ng Isip',
    floatingDonate: 'Mag-donate',
    voiceSearchNotSupported: 'Hindi suportado ang voice search',
    micPermissionDenied: 'Tinanggihan ang microphone permission',
    voiceSearchError: 'Error sa voice search',
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
    ],
    donationTitle: '💰 Progress ng Relief Fund',
    donationRaised: 'Nakolekta',
    donationGoal: 'ng Target',
    donationCurrency: 'HK$',
    donationMilestones: [
      { label: 'Unang Target' },
      { label: 'Kalahati Na' },
      { label: 'Malapit Na' },
      { label: 'Target Naabot' }
    ],
    mapTitle: '🗺️ Mapa ng mga Lokasyon',
    mapApiKeyPlaceholder: 'Ilagay ang Mapbox Token',
    mapEnterApiKey: 'Ilagay ang Mapbox API Key para tingnan ang mapa',
    mapSetApiKey: 'I-set',
    mapFilterAll: 'Lahat',
    mapFilterSupport: 'Support Centers',
    mapFilterHousing: 'Pansamantalang Tirahan',
    mapFilterCollection: 'Collection Points',
    mapFilterMedical: 'Medikal na Pasilidad',
    liveUpdatesTitle: '📡 Live Updates',
    liveUpdatesDonation: 'Donasyon',
    liveUpdatesVolunteer: 'Boluntaryo',
    liveUpdatesAlert: 'Alerto',
    liveUpdatesTimeJustNow: 'Ngayon lang',
    liveUpdatesTimeMinutes: 'mins nakaraan',
    liveUpdatesTimeHours: 'oras nakaraan',
    organizationsTitle: '🏛️ Mga Organisasyon para sa Donasyon',
    organizationsHeaders: {
      organization: 'Organisasyon',
      purpose: 'Layunin',
      donationMethods: 'Paraan ng Donasyon',
      deadline: 'Deadline/Mga Tala'
    },
    organizations: [
      {
        name: 'Hong Kong Red Cross (Tai Po Fire Emergency Appeal)',
        purpose: 'First aid, psychological support, pangangailangan sa araw-araw para sa 1,900+ apektadong pamilya',
        donationMethods: [
          'Online: redcross.org.hk/en/Activity/TPFEA.html gamit ang PayMe, Alipay, FPS',
          'Bank Transfer/Cheque: Markahan "9900" at ipadala sa relief@redcross.org.hk',
          'Personal: 7-Eleven receipts o HQ drop-off'
        ],
        deadline: 'Hanggang Disyembre 10, 2025. Lahat ng pondo para sa sakuna',
        link: 'https://redcross.org.hk/en/Activity/TPFEA.html'
      },
      {
        name: 'Feeding Hong Kong',
        purpose: 'Emergency food packs, meal vouchers, at personal care items',
        donationMethods: [
          'Online: feedinghk.org/tai-po/'
        ],
        deadline: 'Patuloy; nakatuon sa mga pangangailangan',
        link: 'https://feedinghk.org/tai-po/'
      },
      {
        name: 'Sheng Kung Hui – 1126 Fire Disaster Support Fund',
        purpose: 'Cash grants para sa pang-araw-araw, medical, at temporary accommodation',
        donationMethods: [
          'Online: Sa kanilang donation page'
        ],
        deadline: 'Patuloy; 100% para sa relief',
        link: 'https://www.hkskh.org/'
      },
      {
        name: 'Po Leung Kuk',
        purpose: 'Financial relief para sa mga nasugatan at pamilya ng namatay',
        donationMethods: [
          'Online/Bank: polungkuk.org.hk (tukuyin "Tai Po Fire Relief")',
          'HK$3 million nakaallot na'
        ],
        deadline: 'Patuloy',
        link: 'https://www.poleungkuk.org.hk/'
      },
      {
        name: 'Hong Kong Council of Social Service (HKCSS)',
        purpose: 'Koordinasyon ng community relief',
        donationMethods: [
          'Online: hkcss.org.hk (itakda para sa Tai Po fire)'
        ],
        deadline: 'Patuloy',
        link: 'https://www.hkcss.org.hk/'
      },
      {
        name: 'Neighbourhood Advice-Action Council (NAAC)',
        purpose: 'Lokal na tulong sa Tai Po, kasama ang shelter at counseling',
        donationMethods: [
          'Online: naac.org.hk (tukuyin Tai Po relief)'
        ],
        deadline: 'Patuloy',
        link: 'https://www.naac.org.hk/'
      },
      {
        name: 'Yan Chai Hospital',
        purpose: 'Emergency assistance para sa funerary at medical needs',
        donationMethods: [
          'Online/Bank: ych.org.hk (markahan para sa fire relief fund)'
        ],
        deadline: 'Patuloy',
        link: 'https://www.ych.org.hk/'
      }
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
    call: 'Telepon',
    floatingEmergency: 'Darurat',
    floatingMentalHealth: 'Kesehatan Mental',
    floatingDonate: 'Donasi',
    voiceSearchNotSupported: 'Pencarian suara tidak didukung',
    micPermissionDenied: 'Izin mikrofon ditolak',
    voiceSearchError: 'Kesalahan pencarian suara',
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
    ],
    donationTitle: '💰 Progress Dana Bantuan',
    donationRaised: 'Terkumpul',
    donationGoal: 'dari Target',
    donationCurrency: 'HK$',
    donationMilestones: [
      { label: 'Target Awal' },
      { label: 'Setengah Jalan' },
      { label: 'Hampir Sampai' },
      { label: 'Target Tercapai' }
    ],
    mapTitle: '🗺️ Peta Lokasi Dukungan',
    mapApiKeyPlaceholder: 'Masukkan Mapbox Token Anda',
    mapEnterApiKey: 'Masukkan Mapbox API Key untuk melihat peta',
    mapSetApiKey: 'Set Key',
    mapFilterAll: 'Semua',
    mapFilterSupport: 'Pusat Dukungan',
    mapFilterHousing: 'Tempat Tinggal Sementara',
    mapFilterCollection: 'Titik Pengumpulan',
    mapFilterMedical: 'Fasilitas Medis',
    liveUpdatesTitle: '📡 Update Langsung',
    liveUpdatesDonation: 'Donasi',
    liveUpdatesVolunteer: 'Relawan',
    liveUpdatesAlert: 'Peringatan',
    liveUpdatesTimeJustNow: 'Baru saja',
    liveUpdatesTimeMinutes: 'menit lalu',
    liveUpdatesTimeHours: 'jam lalu',
    organizationsTitle: '🏛️ Organisasi Donasi',
    organizationsHeaders: {
      organization: 'Organisasi',
      purpose: 'Tujuan',
      donationMethods: 'Metode Donasi',
      deadline: 'Batas Waktu/Catatan'
    },
    organizations: [
      {
        name: 'Hong Kong Red Cross (Tai Po Fire Emergency Appeal)',
        purpose: 'Pertolongan pertama, dukungan psikologis, kebutuhan sehari-hari untuk 1,900+ keluarga terdampak',
        donationMethods: [
          'Online: redcross.org.hk/en/Activity/TPFEA.html menggunakan PayMe, Alipay, FPS',
          'Transfer Bank/Cek: Tandai "9900" dan kirim detail ke relief@redcross.org.hk',
          'Langsung: Tanda terima 7-Eleven atau kantor pusat'
        ],
        deadline: 'Hingga 10 Desember 2025. Semua dana khusus bencana ini',
        link: 'https://redcross.org.hk/en/Activity/TPFEA.html'
      },
      {
        name: 'Feeding Hong Kong',
        purpose: 'Paket makanan darurat, voucher makan/supermarket, dan barang perawatan pribadi',
        donationMethods: [
          'Online: feedinghk.org/tai-po/ (portal aman untuk kontribusi)'
        ],
        deadline: 'Berkelanjutan; fokus pada kebutuhan yang kurang terlayani',
        link: 'https://feedinghk.org/tai-po/'
      },
      {
        name: 'Sheng Kung Hui – Dana Dukungan Bencana Kebakaran 1126',
        purpose: 'Hibah tunai untuk kebutuhan sehari-hari, biaya medis, dan akomodasi sementara',
        donationMethods: [
          'Online: Melalui halaman donasi mereka'
        ],
        deadline: 'Berkelanjutan; 100% donasi untuk bantuan',
        link: 'https://www.hkskh.org/'
      },
      {
        name: 'Po Leung Kuk',
        purpose: 'Bantuan keuangan untuk korban luka dan keluarga almarhum',
        donationMethods: [
          'Online/Bank: polungkuk.org.hk (tentukan "Bantuan Kebakaran Tai Po")',
          'HK$3 juta sudah dialokasikan dari dana amal'
        ],
        deadline: 'Berkelanjutan',
        link: 'https://www.poleungkuk.org.hk/'
      },
      {
        name: 'Hong Kong Council of Social Service (HKCSS)',
        purpose: 'Koordinasi bantuan komunitas termasuk uang tunai dan persediaan',
        donationMethods: [
          'Online: hkcss.org.hk (tentukan untuk kebakaran Tai Po)'
        ],
        deadline: 'Berkelanjutan',
        link: 'https://www.hkcss.org.hk/'
      },
      {
        name: 'Neighbourhood Advice-Action Council (NAAC)',
        purpose: 'Bantuan lokal Tai Po termasuk tempat tinggal dan konseling',
        donationMethods: [
          'Online: naac.org.hk (formulir donasi; tentukan bantuan Tai Po)'
        ],
        deadline: 'Berkelanjutan',
        link: 'https://www.naac.org.hk/'
      },
      {
        name: 'Yan Chai Hospital',
        purpose: 'Bantuan darurat untuk kebutuhan pemakaman dan medis keluarga berpenghasilan rendah',
        donationMethods: [
          'Online/Bank: ych.org.hk (tandai untuk dana bantuan kebakaran)'
        ],
        deadline: 'Berkelanjutan',
        link: 'https://www.ych.org.hk/'
      }
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
      keywords: ['紅十字會', '急救', '捐款', '銀行'],
      contacts: [
        { l: 'FPS 轉數快', v: '164279317' },
        { l: 'HSBC 匯豐', v: '567-650155-023' },
        { l: 'HASE 恒生', v: '267-175123-002' },
        { l: 'BOC 中銀', v: '012-806-00003231' },
        { l: 'BEA 東亞', v: '015-514-40-472999' },
        { l: '支票抬頭', v: '"Hong Kong Red Cross Care For Our Local"' },
        { l: '支票背面註明', v: '"9900"' },
        { l: '郵寄地址', v: '九龍西海庭道19號 紅十字會總部' },
        { l: '電郵', v: 'relief@redcross.org.hk' }
      ],
      info: ['如需收據，請將交易紀錄截圖連同姓名、電話、地址、捐款者編號（如有）及註明"9900"電郵至 relief@redcross.org.hk']
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
      keywords: ['red cross', 'help', 'donation', 'bank'],
      contacts: [
        { l: 'FPS ID', v: '164279317' },
        { l: 'HSBC', v: '567-650155-023' },
        { l: 'HASE', v: '267-175123-002' },
        { l: 'BOC', v: '012-806-00003231' },
        { l: 'BEA', v: '015-514-40-472999' },
        { l: 'Cheque Payable to', v: '"Hong Kong Red Cross Care For Our Local"' },
        { l: 'Mark on Cheque', v: '"9900"' },
        { l: 'Mail Address', v: '19 Hoi Ting Road, West Kowloon, HK' },
        { l: 'Email', v: 'relief@redcross.org.hk' }
      ],
      info: ['For donation receipt, send transaction screenshot with name, phone, address, donor ID (if any) and mark "9900" to relief@redcross.org.hk']
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
      keywords: ['red cross', 'tulong', 'donasyon', 'bangko'],
      contacts: [
        { l: 'FPS ID', v: '164279317' },
        { l: 'HSBC', v: '567-650155-023' },
        { l: 'HASE', v: '267-175123-002' },
        { l: 'BOC', v: '012-806-00003231' },
        { l: 'BEA', v: '015-514-40-472999' },
        { l: 'Cheque Payable sa', v: '"Hong Kong Red Cross Care For Our Local"' },
        { l: 'Markahan ang Cheque', v: '"9900"' },
        { l: 'Mail Address', v: '19 Hoi Ting Road, West Kowloon, HK' },
        { l: 'Email', v: 'relief@redcross.org.hk' }
      ],
      info: ['Para sa resibo, ipadala ang screenshot ng transaksyon kasama ang pangalan, telepono, address, donor ID (kung mayroon) at markahan "9900" sa relief@redcross.org.hk']
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
      keywords: ['palang merah', 'bantuan', 'donasi', 'bank'],
      contacts: [
        { l: 'FPS ID', v: '164279317' },
        { l: 'HSBC', v: '567-650155-023' },
        { l: 'HASE', v: '267-175123-002' },
        { l: 'BOC', v: '012-806-00003231' },
        { l: 'BEA', v: '015-514-40-472999' },
        { l: 'Cek Dibayarkan ke', v: '"Hong Kong Red Cross Care For Our Local"' },
        { l: 'Tandai di Cek', v: '"9900"' },
        { l: 'Alamat Surat', v: '19 Hoi Ting Road, West Kowloon, HK' },
        { l: 'Email', v: 'relief@redcross.org.hk' }
      ],
      info: ['Untuk tanda terima donasi, kirim tangkapan layar transaksi dengan nama, telepon, alamat, ID donor (jika ada) dan tandai "9900" ke relief@redcross.org.hk']
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
