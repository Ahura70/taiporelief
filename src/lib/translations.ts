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
    legendNoHours: '全天候服務',
    memorialMessage: '謹此向所有受影響的人士致以最深切的慰問。願逝者安息，生者堅強。',
    emergencyDialTitle: '緊急求助熱線',
    emergencyDialDescription: '輕觸下方號碼即可撥打',
    casualtyEnquiry: '傷亡查詢',
    mentalHealthSupport: '心理支援熱線',
    accessibilityTitle: '無障礙設定',
    fontSizeLabel: '字體大小',
    highContrastLabel: '高對比度',
    reduceMotionLabel: '減少動畫',
    lineSpacingLabel: '行距',
    languageNotification: '我們已根據您的瀏覽器設定自動選擇語言。您可以隨時使用右上角的語言選擇器更改語言。',
    whatsappRegister: '透過 WhatsApp 登記向香港特別行政區政府捐款',
    communityResourcesTitle: '社區資源',
    safetyTrackingTitle: '宏福苑報平安',
    safetyTrackingDesc: '即時安全狀態追蹤系統',
    volunteerCoordTitle: '義工協調群組',
    volunteerCoordDesc: '消防員支援及物資協調',
    reportSafetyLabel: '報平安',
    reportMissingLabel: '報告失蹤',
    suppliesMapLabel: '物資地圖',
    govtWebsiteLabel: '政府網站',
    mainWebsiteLabel: '主網站',
    volunteerEnglishLabel: 'TAI PO MANPOWER (英語)',
    volunteerTelegramLabel: '大埔物資救援組 (Telegram)',
    dropOffLabel: '物資交收點',
    statusSuspended: '暫停接收 - 正在清點庫存',
    safeReportsLabel: '報平安',
    missingReportsLabel: '失蹤報告',
    liveStatusLabel: '即時更新',
    timelineTitle: '災難應對時間軸',
    timelineLoading: '載入中...',
    newsItems: [
      { text: '至少128人於大埔宏福苑火災中確認罹難，包括1名消防員及7名家庭傭工。79人受傷，包括12名消防員。約150人下落不明', source: 'SCMP/香港政府/印尼領事館' }
    ]
  },
  en: {
    title: 'Wang Fuk Court Relief',
    subtitle: 'Support Information Hub',
    label: 'I want to...',
    placeholder: 'Search: Donate, Volunteer, Supplies...',
    emergency: '🚨 Casualty Enquiry 1878 999 | Mental Health 18111',
    newsTicker: '💔 At least 128 confirmed dead in Tai Po fire, including 7 migrant domestic workers from Indonesia',
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
    legendNoHours: 'Always Available',
    memorialMessage: 'Our deepest condolences to those affected. May the departed rest in peace and the survivors find strength.',
    emergencyDialTitle: 'Emergency Hotlines',
    emergencyDialDescription: 'Tap numbers below to call instantly',
    casualtyEnquiry: 'Casualty Enquiry',
    mentalHealthSupport: 'Mental Health Hotline',
    accessibilityTitle: 'Accessibility',
    fontSizeLabel: 'Text Size',
    highContrastLabel: 'High Contrast',
    reduceMotionLabel: 'Reduce Motion',
    lineSpacingLabel: 'Line Spacing',
    languageNotification: 'We automatically selected your language based on your browser settings. You can change it anytime using the language selector in the top right.',
    whatsappRegister: 'Register via WhatsApp to donate via the HKSAR Govt.',
    communityResourcesTitle: 'Community Resources',
    safetyTrackingTitle: 'Wang Fuk Court Safety Tracking',
    safetyTrackingDesc: 'Real-time safety status tracking system',
    volunteerCoordTitle: 'Volunteer Coordination',
    volunteerCoordDesc: 'Firefighter support and supply coordination',
    reportSafetyLabel: 'Report Safety',
    reportMissingLabel: 'Report Missing Person',
    suppliesMapLabel: 'Supplies Map',
    govtWebsiteLabel: 'Government Website',
    mainWebsiteLabel: 'Main Website',
    volunteerEnglishLabel: 'TAI PO MANPOWER (English)',
    volunteerTelegramLabel: 'Tai Po Supplies Rescue (Telegram)',
    dropOffLabel: 'Drop-off Location',
    statusSuspended: 'Temporarily suspended - taking inventory',
    safeReportsLabel: 'Reported Safe',
    missingReportsLabel: 'Missing Reports',
    liveStatusLabel: 'Live Updates',
    timelineTitle: 'Disaster Response Timeline',
    timelineLoading: 'Loading...',
    newsItems: [
      { text: 'At least 128 people, including a firefighter and 7 domestic migrant workers confirmed dead in Tai Po Wang Fuk Court fire. 79 injured, including 12 firefighters. Some 150 people are unaccounted for', source: 'SCMP/HK Govt./Indonesian consulate' }
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
    legendNoHours: 'Palaging Bukas',
    memorialMessage: 'Ang aming taos-pusong pakikiramay sa lahat ng naapektuhan. Nawa ang mga yumaong ay makapahinga nang payapa at ang mga nakaligtas ay magkaroon ng lakas.',
    emergencyDialTitle: 'Emergency Hotline',
    emergencyDialDescription: 'I-tap ang numero para tumawag',
    casualtyEnquiry: 'Casualty Enquiry',
    mentalHealthSupport: 'Mental Health Hotline',
    accessibilityTitle: 'Accessibility',
    fontSizeLabel: 'Laki ng Text',
    highContrastLabel: 'Mataas na Contrast',
    reduceMotionLabel: 'Bawasan ang Galaw',
    lineSpacingLabel: 'Espasyo ng Linya',
    languageNotification: 'Awtomatiko naming pinili ang iyong wika batay sa iyong browser settings. Maaari mo itong baguhin anumang oras gamit ang language selector sa kanang itaas.',
    whatsappRegister: 'Magrehistro sa WhatsApp para mag-donate sa HKSAR Govt.',
    communityResourcesTitle: 'Community Resources',
    safetyTrackingTitle: 'Wang Fuk Court Safety Tracking',
    safetyTrackingDesc: 'Real-time safety status tracking system',
    volunteerCoordTitle: 'Koordinasyon ng Volunteer',
    volunteerCoordDesc: 'Suporta sa firefighters at koordinasyon ng supplies',
    reportSafetyLabel: 'Mag-report ng Kaligtasan',
    reportMissingLabel: 'Mag-report ng Nawawala',
    suppliesMapLabel: 'Mapa ng Supplies',
    govtWebsiteLabel: 'Government Website',
    mainWebsiteLabel: 'Main Website',
    volunteerEnglishLabel: 'TAI PO MANPOWER (English)',
    volunteerTelegramLabel: 'Tai Po Supplies Rescue (Telegram)',
    dropOffLabel: 'Drop-off Location',
    statusSuspended: 'Pansamantalang nakatigil - nag-iinventory',
    safeReportsLabel: 'Nag-report ng Ligtas',
    missingReportsLabel: 'Mga Nawawala',
    liveStatusLabel: 'Live na Update',
    timelineTitle: 'Timeline ng Disaster Response',
    timelineLoading: 'Nag-loload...',
    newsItems: [
      { text: 'Hindi bababa sa 128 katao, kasama ang isang bumbero at 7 domestic migrant workers, napatunayan nang namatay sa sunog sa Tai Po Wang Fuk Court. 79 ang nasugatan, kasama ang 12 bumbero. Humigit-kumulang 150 ang hindi pa napapatunayang kinaroroonan', source: 'SCMP/HK Govt./Indonesian consulate' }
    ]
  },
  id: {
    title: 'Bantuan Kebakaran',
    subtitle: 'Wang Fuk Court Relief',
    label: 'Saya ingin...',
    placeholder: 'Cari: Donasi, Relawan...',
    emergency: '🚨 Pertanyaan Korban 1878 999 | Mental 18111',
    newsTicker: '💔 Setidaknya 128 dikonfirmasi meninggal dalam kebakaran Tai Po, termasuk 7 pekerja rumah tangga migran dari Indonesia',
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
    legendNoHours: 'Selalu Tersedia',
    memorialMessage: 'Belasungkawa terdalam kami kepada semua yang terkena dampak. Semoga yang telah tiada beristirahat dengan tenang dan yang selamat menemukan kekuatan.',
    emergencyDialTitle: 'Hotline Darurat',
    emergencyDialDescription: 'Ketuk nomor untuk menelepon',
    casualtyEnquiry: 'Pertanyaan Korban',
    mentalHealthSupport: 'Hotline Kesehatan Mental',
    accessibilityTitle: 'Aksesibilitas',
    fontSizeLabel: 'Ukuran Teks',
    highContrastLabel: 'Kontras Tinggi',
    reduceMotionLabel: 'Kurangi Gerakan',
    lineSpacingLabel: 'Spasi Baris',
    languageNotification: 'Kami secara otomatis memilih bahasa Anda berdasarkan pengaturan browser. Anda dapat mengubahnya kapan saja menggunakan pemilih bahasa di kanan atas.',
    whatsappRegister: 'Daftar melalui WhatsApp untuk donasi melalui HKSAR Govt.',
    communityResourcesTitle: 'Sumber Daya Komunitas',
    safetyTrackingTitle: 'Wang Fuk Court Safety Tracking',
    safetyTrackingDesc: 'Sistem pelacakan status keselamatan real-time',
    volunteerCoordTitle: 'Koordinasi Relawan',
    volunteerCoordDesc: 'Dukungan petugas pemadam kebakaran dan koordinasi persediaan',
    reportSafetyLabel: 'Laporkan Keselamatan',
    reportMissingLabel: 'Laporkan Orang Hilang',
    suppliesMapLabel: 'Peta Persediaan',
    govtWebsiteLabel: 'Website Pemerintah',
    mainWebsiteLabel: 'Website Utama',
    volunteerEnglishLabel: 'TAI PO MANPOWER (English)',
    volunteerTelegramLabel: 'Tai Po Supplies Rescue (Telegram)',
    dropOffLabel: 'Lokasi Drop-off',
    statusSuspended: 'Sementara ditangguhkan - sedang inventarisasi',
    safeReportsLabel: 'Melaporkan Aman',
    missingReportsLabel: 'Laporan Hilang',
    liveStatusLabel: 'Update Langsung',
    timelineTitle: 'Timeline Respons Bencana',
    timelineLoading: 'Memuat...',
    newsItems: [
      { text: 'Setidaknya 128 orang, termasuk seorang pemadam kebakaran dan 7 pekerja migran rumah tangga, dikonfirmasi tewas dalam kebakaran Tai Po Wang Fuk Court. 79 terluka, termasuk 12 petugas pemadam kebakaran. Sekitar 150 orang masih belum ditemukan', source: 'SCMP/HK Govt./Indonesian consulate' }
    ]
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
  category?: string; // Resource category for filtering
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
      coordinates: [22.4461, 114.1639], // Wang Fuk Court area
      category: 'Emergency Relief'
    },
    {
      icon: '✚',
      title: '紅十字會',
      desc: '緊急現金援助及心理支援',
      keywords: ['紅十字會', '急救', '現金', '心理'],
      contacts: [
        { l: 'FPS 轉數快', v: '164279317' },
        { l: 'WhatsApp 支援', v: '9175 1433' },
        { l: '電話查詢', v: '2802 0021' },
        { l: '電郵', v: 'relief@redcross.org.hk' }
      ],
      info: ['提供即時慰問金及每月生活津貼', '透過 Shall We Talk 提供心理支援服務'],
      coordinates: [22.3193, 114.1694], // HK Red Cross HQ (West Kowloon)
      category: 'Emergency Relief'
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
      coordinates: [22.4472, 114.1680], // Caritas Fu Heng Home for the Aged (Tai Po)
      category: 'Emergency Relief'
    },
    {
      icon: '⛪',
      title: '香港聖公會福利協會',
      desc: '全面社會服務及支援',
      keywords: ['聖公會', '社會服務', '福利'],
      contacts: [
        { l: '電話', v: '8209 8122' }
      ],
      category: 'Emergency Relief'
    },
    {
      icon: '👨‍👩‍👧‍👦',
      title: '香港家庭福利會',
      desc: '家庭支援及輔導服務',
      keywords: ['家庭', '福利會', '輔導'],
      contacts: [
        { l: '電話', v: '2772 2322' }
      ],
      category: 'Emergency Relief'
    },
    {
      icon: '🏛️',
      title: '保良局',
      desc: '社會福利及援助服務',
      keywords: ['保良局', '社會福利', '援助'],
      contacts: [
        { l: '電話', v: '2277 8500' }
      ],
      category: 'Emergency Relief'
    },
    {
      icon: '🍲',
      title: 'Feeding Hong Kong',
      desc: '食物援助及緊急物資',
      keywords: ['食物', '食物銀行', 'feeding'],
      contacts: [
        { l: '電話', v: '2205 6568' }
      ],
      category: 'Emergency Relief'
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
      title: '樂善村過渡性房屋',
      desc: '政府安排緊急住宿單位',
      keywords: ['住宿', '過渡性房屋', '樂善村'],
      contacts: [
        { l: '大埔區辦事處', v: '2653 3703' },
        { l: '緊急熱線', v: '182 183' }
      ],
      info: ['已接收超過600名受災居民', '增強巴士及小巴服務'],
      coordinates: [22.4480, 114.1590], // Lok Sin Village area
      category: 'Housing'
    },
    {
      icon: '🏘️',
      title: 'Good House 過渡性房屋',
      desc: '香港善導會提供臨時住宿',
      keywords: ['住宿', 'good house', '善導會'],
      contacts: [
        { l: '地址', v: '大埔順灣菜屋168號' },
        { l: '臨時小巴服務', v: '往返大埔墟站' }
      ],
      info: ['社區康復及更生服務機構', '11月29日起提供額外小巴服務'],
      coordinates: [22.4425, 114.1705],
      category: 'Housing'
    },
    {
      icon: '🏘️',
      title: 'Trackside Villas 過渡性房屋',
      desc: '緊急臨時住宿安排',
      keywords: ['住宿', 'trackside villas', '過渡性房屋'],
      contacts: [
        { l: '大埔區辦事處', v: '2653 3703' },
        { l: '交通協調', v: '加強往來大埔墟站服務' }
      ],
      info: ['大埔區過渡性房屋項目', '政府正協調加強交通服務'],
      coordinates: [22.4460, 114.1640],
      category: 'Housing'
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
      hours: { open: '08:30', close: '18:30', days: 'Daily' },
      category: 'Housing'
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
      hours: { open: '00:00', close: '23:59', days: '24/7' },
      category: 'Utilities'
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
      icon: '👩',
      title: '外傭支援 HELP',
      desc: '多語言協助、心理輔導、緊急庇護',
      keywords: ['外傭', '工人', 'helper', 'indonesia', 'philippines'],
      contacts: [
        { l: 'HELP 熱線', v: '2523 4020' },
        { l: 'WhatsApp 支援', v: '+852 5936 3780' },
        { l: '勞工處', v: '2157 9537' }
      ],
      info: [
        '提供：心理健康輔導、緊急庇護、證件更換協助、領事館協調',
        '專為受影響的外籍家庭傭工提供支援'
      ]
    },
    {
      icon: '🌐',
      title: '宏福苑報平安',
      desc: '即時安全狀態追蹤系統',
      keywords: ['報平安', '安全', '追蹤', '狀態', 'wangfuk'],
      contacts: [
        { l: '主網站', v: 'https://taipo-fire.web.app/' },
        { l: '報平安表格', v: 'https://docs.google.com/forms/d/e/1FAIpQLSc64NpaVIcAkg92fanI5W34xXwpoTnxXu0QozccOiRf3cAZYw/viewform' },
        { l: '報告失蹤', v: 'https://forms.gle/RpSpL7KiXcuD3eN89' },
        { l: '物資地圖', v: 'https://experience.arcgis.com/experience/22b9d309e69548f28d2f4055d4de5ace' },
        { l: '政府網站', v: 'https://www.taipofire.gov.hk/' }
      ],
      info: ['為宏福苑居民提供即時安全狀態追蹤']
    },
    {
      icon: '🐾',
      title: 'SPCA 寵物救援',
      desc: '受災寵物救援及照顧服務',
      keywords: ['寵物', '動物', 'pet', 'spca', '貓', '狗'],
      contacts: [
        { l: '電話', v: '95036229' },
        { l: '登記號碼', v: '60406624' },
        { l: '集合點', v: '保良局鄧碧雲幼稚園公園區域' },
        { l: '地圖', v: 'https://maps.app.goo.gl/S5KTaB6F751uLA5D8' }
      ],
      info: ['協助受災家庭的寵物救援及臨時照顧'],
      coordinates: [22.4475, 114.1665],
      category: 'Animal Welfare'
    },
    {
      icon: '🤝',
      title: '大埔義工組 (英語)',
      desc: '消防員支援及物資協調',
      keywords: ['義工', 'volunteer', '物資', '捐贈'],
      contacts: [
        { l: 'WhatsApp 群組', v: 'https://chat.whatsapp.com/ELpksjt4CCM2Is4GTswO8u' },
        { l: '物資交收點', v: 'The Hive Causeway Bay 9/F' },
        { l: '地址', v: 'V-Point, 18 Tang Lung Street' }
      ],
      info: [
        '需要物資：能量啫喱、能量棒、能量飲品、紙內褲、襪子、香蕉、獨立包裝麵包、乾糧、Pocari Sweat (< 500ml)'
      ]
    },
    {
      icon: '📋',
      title: '大埔物資救援組',
      desc: 'Telegram 物資協調群組',
      keywords: ['物資', '救援', 'telegram', '捐贈'],
      contacts: [
        { l: 'Telegram', v: 'https://t.me/+7PObuQ5xWiI2ZGFl' }
      ],
      info: ['⚠️ 暫停接收 - 正在清點庫存']
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
      coordinates: [22.4461, 114.1639],
      category: 'Emergency Relief'
    },
    {
      icon: '✚',
      title: 'Red Cross',
      desc: 'Emergency Cash Aid & Psychological Support',
      keywords: ['red cross', 'help', 'cash', 'mental health'],
      contacts: [
        { l: 'FPS ID', v: '164279317' },
        { l: 'WhatsApp Support', v: '9175 1433' },
        { l: 'Phone', v: '2802 0021' },
        { l: 'Email', v: 'relief@redcross.org.hk' }
      ],
      info: ['Immediate relief funds + monthly living allowance', 'Shall We Talk psychological support service'],
      coordinates: [22.3193, 114.1694],
      category: 'Emergency Relief'
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
      coordinates: [22.4472, 114.1680],
      category: 'Emergency Relief'
    },
    {
      icon: '⛪',
      title: 'HK Sheng Kung Hui Welfare Council',
      desc: 'Comprehensive social services & support',
      keywords: ['sheng kung hui', 'social services', 'welfare'],
      contacts: [
        { l: 'Phone', v: '8209 8122' }
      ],
      category: 'Emergency Relief'
    },
    {
      icon: '👨‍👩‍👧‍👦',
      title: 'Hong Kong Family Welfare Society',
      desc: 'Family support & counseling services',
      keywords: ['family', 'welfare society', 'counseling'],
      contacts: [
        { l: 'Phone', v: '2772 2322' }
      ],
      category: 'Emergency Relief'
    },
    {
      icon: '🏛️',
      title: 'Po Leung Kuk',
      desc: 'Social welfare & assistance services',
      keywords: ['po leung kuk', 'social welfare', 'assistance'],
      contacts: [
        { l: 'Phone', v: '2277 8500' }
      ],
      category: 'Emergency Relief'
    },
    {
      icon: '🍲',
      title: 'Feeding Hong Kong',
      desc: 'Food assistance & emergency supplies',
      keywords: ['food', 'food bank', 'feeding'],
      contacts: [
        { l: 'Phone', v: '2205 6568' }
      ],
      category: 'Emergency Relief'
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
      title: 'Lok Sin Village Transitional Housing',
      desc: 'Government-arranged emergency accommodation',
      keywords: ['housing', 'shelter', 'lok sin village'],
      contacts: [
        { l: 'Tai Po District Office', v: '2653 3703' },
        { l: 'Emergency Hotline', v: '182 183' }
      ],
      info: ['Accommodating over 600 affected residents', 'Enhanced bus and minibus services'],
      coordinates: [22.4480, 114.1590],
      category: 'Housing'
    },
    {
      icon: '🏘️',
      title: 'Good House Transitional Housing',
      desc: 'Society of Rehabilitation and Crime Prevention',
      keywords: ['housing', 'good house', 'shelter'],
      contacts: [
        { l: 'Address', v: '168 Shuen Wan Chan Uk, Tai Po' },
        { l: 'Temporary Minibus', v: 'To/From MTR Tai Po Market' }
      ],
      info: ['Community rehabilitation services', 'Additional GMB service starting Nov 29'],
      coordinates: [22.4425, 114.1705],
      category: 'Housing'
    },
    {
      icon: '🏘️',
      title: 'Trackside Villas Transitional Housing',
      desc: 'Emergency temporary accommodation',
      keywords: ['housing', 'trackside villas', 'shelter'],
      contacts: [
        { l: 'Tai Po District Office', v: '2653 3703' },
        { l: 'Transport Coordination', v: 'Enhanced service to Tai Po Market' }
      ],
      info: ['Tai Po transitional housing project', 'Government coordinating enhanced transport'],
      coordinates: [22.4460, 114.1640],
      category: 'Housing'
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
      hours: { open: '08:30', close: '18:30', days: 'Daily' },
      category: 'Housing'
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
      hours: { open: '00:00', close: '23:59', days: '24/7' },
      category: 'Utilities'
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
      icon: '👩',
      title: 'HELP for Domestic Workers',
      desc: 'Multilingual Support, Counseling, Emergency Shelter',
      keywords: ['helper', 'fdh', 'maid', 'indonesia', 'philippines', 'domestic worker'],
      contacts: [
        { l: 'HELP Hotline', v: '2523 4020' },
        { l: 'WhatsApp Support', v: '+852 5936 3780' },
        { l: 'Labour Dept', v: '2157 9537' }
      ],
      info: [
        'Services: Mental health counseling, emergency shelter, document replacement assistance, consulate coordination',
        'Support for affected migrant domestic workers'
      ]
    },
    {
      icon: '🌐',
      title: 'Wang Fuk Court Safety Tracking',
      desc: 'Real-time safety status tracking system',
      keywords: ['safety', 'tracking', 'status', 'wangfuk', 'report'],
      contacts: [
        { l: 'Main Website', v: 'https://taipo-fire.web.app/' },
        { l: 'Report Safety', v: 'https://docs.google.com/forms/d/e/1FAIpQLSc64NpaVIcAkg92fanI5W34xXwpoTnxXu0QozccOiRf3cAZYw/viewform' },
        { l: 'Report Missing', v: 'https://forms.gle/RpSpL7KiXcuD3eN89' },
        { l: 'Supplies Map', v: 'https://experience.arcgis.com/experience/22b9d309e69548f28d2f4055d4de5ace' },
        { l: 'Govt Website', v: 'https://www.taipofire.gov.hk/' }
      ],
      info: ['Real-time safety status tracking for Wang Fuk Court residents']
    },
    {
      icon: '🐾',
      title: 'SPCA Pet Rescue',
      desc: 'Pet rescue and care services',
      keywords: ['pet', 'animal', 'spca', 'cat', 'dog', 'rescue'],
      contacts: [
        { l: 'Phone', v: '95036229' },
        { l: 'Registration No.', v: '60406624' },
        { l: 'Meeting Point', v: 'Po Leung Kuk Tang Pik Wan Kindergarten park area' },
        { l: 'Map', v: 'https://maps.app.goo.gl/S5KTaB6F751uLA5D8' }
      ],
      info: ['Assistance for pet rescue and temporary care for affected families'],
      coordinates: [22.4475, 114.1665],
      category: 'Animal Welfare'
    },
    {
      icon: '🤝',
      title: 'TAI PO MANPOWER Volunteer (ENGLISH)',
      desc: 'Firefighter support and supply coordination',
      keywords: ['volunteer', 'supplies', 'donation', 'firefighter'],
      contacts: [
        { l: 'WhatsApp Group', v: 'https://chat.whatsapp.com/ELpksjt4CCM2Is4GTswO8u' },
        { l: 'Drop-off Location', v: 'The Hive Causeway Bay 9/F' },
        { l: 'Address', v: 'V-Point, 18 Tang Lung Street' }
      ],
      info: [
        'Needed items: Energy gels, bars, drinks, paper underwear, socks, bananas, individually wrapped bread, dry food, Pocari Sweat (< 500ml bottles)'
      ]
    },
    {
      icon: '📋',
      title: 'Tai Po Supplies Rescue',
      desc: 'Telegram supply coordination group',
      keywords: ['supplies', 'rescue', 'telegram', 'donation'],
      contacts: [
        { l: 'Telegram', v: 'https://t.me/+7PObuQ5xWiI2ZGFl' }
      ],
      info: ['⚠️ Temporarily suspended - taking inventory']
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
      coordinates: [22.4461, 114.1639],
      category: 'Emergency Relief'
    },
    {
      icon: '✚',
      title: 'Pula na Krus',
      desc: 'Tulong sa Cash at Suportang Sikolohikal',
      keywords: ['red cross', 'tulong', 'pera', 'mental health'],
      contacts: [
        { l: 'FPS ID', v: '164279317' },
        { l: 'WhatsApp Support', v: '9175 1433' },
        { l: 'Telepono', v: '2802 0021' },
        { l: 'Email', v: 'relief@redcross.org.hk' }
      ],
      info: ['Agarang tulong pinansyal + buwanang allowance', 'Shall We Talk serbisyong sikolohikal'],
      coordinates: [22.3193, 114.1694],
      category: 'Emergency Relief'
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
      coordinates: [22.4472, 114.1680],
      category: 'Emergency Relief'
    },
    {
      icon: '⛪',
      title: 'HK Sheng Kung Hui Welfare Council',
      desc: 'Komprehensibong serbisyong panlipunan',
      keywords: ['sheng kung hui', 'social services', 'welfare'],
      contacts: [
        { l: 'Telepono', v: '8209 8122' }
      ],
      category: 'Emergency Relief'
    },
    {
      icon: '👨‍👩‍👧‍👦',
      title: 'Hong Kong Family Welfare Society',
      desc: 'Suportang pampamilya at counseling',
      keywords: ['pamilya', 'welfare society', 'counseling'],
      contacts: [
        { l: 'Telepono', v: '2772 2322' }
      ],
      category: 'Emergency Relief'
    },
    {
      icon: '🏛️',
      title: 'Po Leung Kuk',
      desc: 'Serbisyong pangkapakanan at tulong',
      keywords: ['po leung kuk', 'social welfare', 'tulong'],
      contacts: [
        { l: 'Telepono', v: '2277 8500' }
      ],
      category: 'Emergency Relief'
    },
    {
      icon: '🍲',
      title: 'Feeding Hong Kong',
      desc: 'Tulong sa pagkain at emergency supplies',
      keywords: ['pagkain', 'food bank', 'feeding'],
      contacts: [
        { l: 'Telepono', v: '2205 6568' }
      ],
      category: 'Emergency Relief'
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
      title: 'Lok Sin Village Transitional Housing',
      desc: 'Emergency na tirahan mula sa gobyerno',
      keywords: ['tirahan', 'shelter', 'lok sin village'],
      contacts: [
        { l: 'Tai Po District Office', v: '2653 3703' },
        { l: 'Emergency Hotline', v: '182 183' }
      ],
      info: ['Tumatanggap ng mahigit 600 apektadong residente', 'Pinahusay na bus at minibus serbisyo'],
      coordinates: [22.4480, 114.1590],
      category: 'Housing'
    },
    {
      icon: '🏘️',
      title: 'Good House Transitional Housing',
      desc: 'Society of Rehabilitation and Crime Prevention',
      keywords: ['tirahan', 'good house', 'shelter'],
      contacts: [
        { l: 'Address', v: '168 Shuen Wan Chan Uk, Tai Po' },
        { l: 'Temporary Minibus', v: 'Papunta/Mula sa MTR Tai Po Market' }
      ],
      info: ['Rehabilitation services', 'Karagdagang GMB serbisyo simula Nov 29'],
      coordinates: [22.4425, 114.1705],
      category: 'Housing'
    },
    {
      icon: '🏘️',
      title: 'Trackside Villas Transitional Housing',
      desc: 'Pansamantalang tirahan',
      keywords: ['tirahan', 'trackside villas', 'shelter'],
      contacts: [
        { l: 'Tai Po District Office', v: '2653 3703' },
        { l: 'Transport Coordination', v: 'Pinahusay na serbisyo sa Tai Po Market' }
      ],
      info: ['Tai Po transitional housing project', 'Gobyerno ay nag-coordinate ng pinahusay na transportasyon'],
      coordinates: [22.4460, 114.1640],
      category: 'Housing'
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
      hours: { open: '08:30', close: '18:30', days: 'Daily' },
      category: 'Housing'
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
      hours: { open: '00:00', close: '23:59', days: '24/7' },
      category: 'Utilities'
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
      icon: '👩',
      title: 'HELP para sa Domestic Workers',
      desc: 'Tulong sa Maraming Wika, Counseling, Emergency Shelter',
      keywords: ['helper', 'fdh', 'katulong', 'indonesia', 'philippines', 'domestic worker'],
      contacts: [
        { l: 'HELP Hotline', v: '2523 4020' },
        { l: 'WhatsApp Support', v: '+852 5936 3780' },
        { l: 'Labour Dept', v: '2157 9537' }
      ],
      info: [
        'Serbisyo: Mental health counseling, emergency shelter, tulong sa document replacement, consulate coordination',
        'Suporta para sa mga apektadong migrant domestic workers'
      ]
    },
    {
      icon: '🌐',
      title: 'Wang Fuk Court Safety Tracking',
      desc: 'Real-time safety status tracking system',
      keywords: ['safety', 'tracking', 'status', 'wangfuk', 'report'],
      contacts: [
        { l: 'Main Website', v: 'https://taipo-fire.web.app/' },
        { l: 'Report Safety', v: 'https://docs.google.com/forms/d/e/1FAIpQLSc64NpaVIcAkg92fanI5W34xXwpoTnxXu0QozccOiRf3cAZYw/viewform' },
        { l: 'Report Missing', v: 'https://forms.gle/RpSpL7KiXcuD3eN89' },
        { l: 'Supplies Map', v: 'https://experience.arcgis.com/experience/22b9d309e69548f28d2f4055d4de5ace' },
        { l: 'Govt Website', v: 'https://www.taipofire.gov.hk/' }
      ],
      info: ['Real-time safety tracking para sa Wang Fuk Court residents']
    },
    {
      icon: '🐾',
      title: 'SPCA Pet Rescue',
      desc: 'Pet rescue at pag-aalaga',
      keywords: ['pet', 'animal', 'spca', 'pusa', 'aso', 'rescue'],
      contacts: [
        { l: 'Telepono', v: '95036229' },
        { l: 'Registration No.', v: '60406624' },
        { l: 'Meeting Point', v: 'Po Leung Kuk Tang Pik Wan Kindergarten park area' },
        { l: 'Mapa', v: 'https://maps.app.goo.gl/S5KTaB6F751uLA5D8' }
      ],
      info: ['Tulong para sa pet rescue at pansamantalang pag-aalaga'],
      coordinates: [22.4475, 114.1665],
      category: 'Animal Welfare'
    },
    {
      icon: '🤝',
      title: 'TAI PO MANPOWER Volunteer (ENGLISH)',
      desc: 'Suporta sa firefighters at koordinasyon ng supplies',
      keywords: ['volunteer', 'supplies', 'donasyon', 'firefighter'],
      contacts: [
        { l: 'WhatsApp Group', v: 'https://chat.whatsapp.com/ELpksjt4CCM2Is4GTswO8u' },
        { l: 'Drop-off Location', v: 'The Hive Causeway Bay 9/F' },
        { l: 'Address', v: 'V-Point, 18 Tang Lung Street' }
      ],
      info: [
        'Kailangan: Energy gels, bars, drinks, paper underwear, medyas, saging, naka-wrap na tinapay, dry food, Pocari Sweat (< 500ml)'
      ]
    },
    {
      icon: '📋',
      title: 'Tai Po Supplies Rescue',
      desc: 'Telegram supply coordination group',
      keywords: ['supplies', 'rescue', 'telegram', 'donasyon'],
      contacts: [
        { l: 'Telegram', v: 'https://t.me/+7PObuQ5xWiI2ZGFl' }
      ],
      info: ['⚠️ Pansamantalang nakatigil - nag-iinventory']
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
      coordinates: [22.4461, 114.1639],
      category: 'Emergency Relief'
    },
    {
      icon: '✚',
      title: 'Palang Merah',
      desc: 'Bantuan Tunai Darurat & Dukungan Psikologis',
      keywords: ['red cross', 'bantuan', 'uang', 'mental'],
      contacts: [
        { l: 'FPS ID', v: '164279317' },
        { l: 'WhatsApp Support', v: '9175 1433' },
        { l: 'Telepon', v: '2802 0021' },
        { l: 'Email', v: 'relief@redcross.org.hk' }
      ],
      info: ['Dana bantuan segera + tunjangan bulanan', 'Layanan dukungan psikologis Shall We Talk'],
      coordinates: [22.3193, 114.1694],
      category: 'Emergency Relief'
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
      coordinates: [22.4472, 114.1680],
      category: 'Emergency Relief'
    },
    {
      icon: '⛪',
      title: 'HK Sheng Kung Hui Welfare Council',
      desc: 'Layanan sosial komprehensif & dukungan',
      keywords: ['sheng kung hui', 'layanan sosial', 'kesejahteraan'],
      contacts: [
        { l: 'Telepon', v: '8209 8122' }
      ],
      category: 'Emergency Relief'
    },
    {
      icon: '👨‍👩‍👧‍👦',
      title: 'Hong Kong Family Welfare Society',
      desc: 'Dukungan keluarga & layanan konseling',
      keywords: ['keluarga', 'welfare society', 'konseling'],
      contacts: [
        { l: 'Telepon', v: '2772 2322' }
      ],
      category: 'Emergency Relief'
    },
    {
      icon: '🏛️',
      title: 'Po Leung Kuk',
      desc: 'Layanan kesejahteraan & bantuan sosial',
      keywords: ['po leung kuk', 'kesejahteraan sosial', 'bantuan'],
      contacts: [
        { l: 'Telepon', v: '2277 8500' }
      ],
      category: 'Emergency Relief'
    },
    {
      icon: '🍲',
      title: 'Feeding Hong Kong',
      desc: 'Bantuan makanan & persediaan darurat',
      keywords: ['makanan', 'bank makanan', 'feeding'],
      contacts: [
        { l: 'Telepon', v: '2205 6568' }
      ],
      category: 'Emergency Relief'
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
      title: 'Lok Sin Village Transitional Housing',
      desc: 'Akomodasi darurat dari pemerintah',
      keywords: ['perumahan', 'shelter', 'lok sin village'],
      contacts: [
        { l: 'Tai Po District Office', v: '2653 3703' },
        { l: 'Hotline Darurat', v: '182 183' }
      ],
      info: ['Menampung lebih dari 600 penduduk yang terkena dampak', 'Layanan bus dan minibus ditingkatkan'],
      coordinates: [22.4480, 114.1590],
      category: 'Housing'
    },
    {
      icon: '🏘️',
      title: 'Good House Transitional Housing',
      desc: 'Society of Rehabilitation and Crime Prevention',
      keywords: ['perumahan', 'good house', 'shelter'],
      contacts: [
        { l: 'Alamat', v: '168 Shuen Wan Chan Uk, Tai Po' },
        { l: 'Minibus Sementara', v: 'Ke/Dari MTR Tai Po Market' }
      ],
      info: ['Layanan rehabilitasi komunitas', 'Layanan GMB tambahan mulai 29 Nov'],
      coordinates: [22.4425, 114.1705],
      category: 'Housing'
    },
    {
      icon: '🏘️',
      title: 'Trackside Villas Transitional Housing',
      desc: 'Akomodasi sementara darurat',
      keywords: ['perumahan', 'trackside villas', 'shelter'],
      contacts: [
        { l: 'Tai Po District Office', v: '2653 3703' },
        { l: 'Koordinasi Transportasi', v: 'Layanan ditingkatkan ke Tai Po Market' }
      ],
      info: ['Proyek perumahan transisi Tai Po', 'Pemerintah mengkoordinasikan peningkatan transportasi'],
      coordinates: [22.4460, 114.1640],
      category: 'Housing'
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
      hours: { open: '08:30', close: '18:30', days: 'Daily' },
      category: 'Housing'
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
      hours: { open: '00:00', close: '23:59', days: '24/7' },
      category: 'Utilities'
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
      icon: '👩',
      title: 'HELP untuk Pekerja Rumah Tangga',
      desc: 'Dukungan Multibahasa, Konseling, Shelter Darurat',
      keywords: ['helper', 'fdh', 'pembantu', 'indonesia', 'philippines', 'domestic worker'],
      contacts: [
        { l: 'HELP Hotline', v: '2523 4020' },
        { l: 'Dukungan WhatsApp', v: '+852 5936 3780' },
        { l: 'Dept Tenaga Kerja', v: '2157 9537' }
      ],
      info: [
        'Layanan: Konseling kesehatan mental, shelter darurat, bantuan penggantian dokumen, koordinasi konsulat',
        'Dukungan untuk pekerja rumah tangga migran yang terkena dampak'
      ]
    },
    {
      icon: '🌐',
      title: 'Wang Fuk Court Safety Tracking',
      desc: 'Sistem pelacakan status keselamatan real-time',
      keywords: ['safety', 'tracking', 'status', 'wangfuk', 'laporan'],
      contacts: [
        { l: 'Website Utama', v: 'https://taipo-fire.web.app/' },
        { l: 'Laporkan Keselamatan', v: 'https://docs.google.com/forms/d/e/1FAIpQLSc64NpaVIcAkg92fanI5W34xXwpoTnxXu0QozccOiRf3cAZYw/viewform' },
        { l: 'Laporkan Hilang', v: 'https://forms.gle/RpSpL7KiXcuD3eN89' },
        { l: 'Peta Persediaan', v: 'https://experience.arcgis.com/experience/22b9d309e69548f28d2f4055d4de5ace' },
        { l: 'Website Pemerintah', v: 'https://www.taipofire.gov.hk/' }
      ],
      info: ['Pelacakan status keselamatan real-time untuk penduduk Wang Fuk Court']
    },
    {
      icon: '🐾',
      title: 'SPCA Pet Rescue',
      desc: 'Penyelamatan dan perawatan hewan peliharaan',
      keywords: ['pet', 'animal', 'spca', 'kucing', 'anjing', 'rescue'],
      contacts: [
        { l: 'Telepon', v: '95036229' },
        { l: 'No. Registrasi', v: '60406624' },
        { l: 'Titik Pertemuan', v: 'Po Leung Kuk Tang Pik Wan Kindergarten park area' },
        { l: 'Peta', v: 'https://maps.app.goo.gl/S5KTaB6F751uLA5D8' }
      ],
      info: ['Bantuan untuk penyelamatan hewan peliharaan dan perawatan sementara'],
      coordinates: [22.4475, 114.1665],
      category: 'Animal Welfare'
    },
    {
      icon: '🤝',
      title: 'TAI PO MANPOWER Volunteer (ENGLISH)',
      desc: 'Dukungan petugas pemadam kebakaran dan koordinasi persediaan',
      keywords: ['volunteer', 'supplies', 'donasi', 'firefighter'],
      contacts: [
        { l: 'WhatsApp Group', v: 'https://chat.whatsapp.com/ELpksjt4CCM2Is4GTswO8u' },
        { l: 'Lokasi Drop-off', v: 'The Hive Causeway Bay 9/F' },
        { l: 'Alamat', v: 'V-Point, 18 Tang Lung Street' }
      ],
      info: [
        'Barang yang dibutuhkan: Energy gels, bars, drinks, pakaian dalam kertas, kaus kaki, pisang, roti bungkus, makanan kering, Pocari Sweat (< 500ml)'
      ]
    },
    {
      icon: '📋',
      title: 'Tai Po Supplies Rescue',
      desc: 'Grup koordinasi persediaan Telegram',
      keywords: ['supplies', 'rescue', 'telegram', 'donasi'],
      contacts: [
        { l: 'Telegram', v: 'https://t.me/+7PObuQ5xWiI2ZGFl' }
      ],
      info: ['⚠️ Sementara ditangguhkan - sedang inventarisasi']
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
