import { Language } from './translations';

export interface ChangelogEntry {
  version: string;
  date: string;
  changes: {
    zh: string[];
    en: string[];
    tl: string[];
    id: string[];
  };
}

export const changelog: ChangelogEntry[] = [
  {
    version: '1.3.0',
    date: '2025-11-29',
    changes: {
      zh: [
        '🔒 加強私隱保護 - 報平安資料不再公開顯示個人資訊',
        '🔐 提升後端安全性 - 新聞更新功能需要驗證',
        '📄 更新菲律賓領事館服務資訊 - 11月30日於大埔太和邨社區中心設立服務中心',
        '✨ 證件補領資訊改版為「證件補領資訊」'
      ],
      en: [
        '🔒 Enhanced privacy protection - Safety reports no longer expose personal information publicly',
        '🔐 Improved backend security - News update function now requires authentication',
        '📄 Updated Philippine Consulate service info - Service center opening Nov. 30 at Tai Po Tai Wo Estate Community Centre',
        '✨ Updated document section to "Document Replacement Information"'
      ],
      tl: [
        '🔒 Pinahusay ang proteksyon sa privacy - Ang safety reports ay hindi na nagpapakita ng personal na impormasyon sa publiko',
        '🔐 Pinabuti ang seguridad ng backend - Ang news update function ay nangangailangan na ng authentication',
        '📄 Na-update ang impormasyon ng serbisyo ng Philippine Consulate - Magbubukas ng service center sa Nov. 30 sa Tai Po Tai Wo Estate Community Centre',
        '✨ Na-update ang seksyon ng dokumento sa "Document Replacement Information"'
      ],
      id: [
        '🔒 Meningkatkan perlindungan privasi - Laporan keselamatan tidak lagi menampilkan informasi pribadi secara publik',
        '🔐 Meningkatkan keamanan backend - Fungsi pembaruan berita sekarang memerlukan autentikasi',
        '📄 Memperbarui informasi layanan Konsulat Filipina - Pusat layanan dibuka 30 Nov di Tai Po Tai Wo Estate Community Centre',
        '✨ Memperbarui bagian dokumen menjadi "Informasi Penggantian Dokumen"'
      ]
    }
  },
  {
    version: '1.2.0',
    date: '2025-11-29',
    changes: {
      zh: [
        '✨ 新增語音速讀功能 - 說「播放全部」即可聽取所有緊急聯絡資訊',
        '🎤 改進語音權限處理 - 新增一鍵授權按鈕',
        '🔊 新增語音確認回饋 - 系統會重複您說的內容',
        '♿ 加大語音按鈕觸控區域，方便長者及行動不便人士使用',
        '📍 新增臨時住宿即時入住率顯示',
        '⏱ 新增自動建置時間戳記'
      ],
      en: [
        '✨ Added voice speed reading - Say "read all" to hear all emergency contacts',
        '🎤 Improved microphone permission handling with one-click authorization',
        '🔊 Added voice confirmation feedback - System repeats what you said',
        '♿ Enlarged voice button for elderly and users with limited mobility',
        '📍 Added real-time occupancy status for temporary housing',
        '⏱ Added automatic build timestamp'
      ],
      tl: [
        '✨ Idinagdag ang voice speed reading - Sabihin "basahin lahat" para marinig ang lahat ng emergency contact',
        '🎤 Pinabuti ang microphone permission handling na may one-click authorization',
        '🔊 Idinagdag ang voice confirmation feedback - Uulitin ng system ang sinabi mo',
        '♿ Pinalaki ang voice button para sa matatanda at mga taong may limitadong mobility',
        '📍 Idinagdag ang real-time occupancy status para sa temporary housing',
        '⏱ Idinagdag ang automatic build timestamp'
      ],
      id: [
        '✨ Menambahkan voice speed reading - Katakan "baca semua" untuk mendengar semua kontak darurat',
        '🎤 Meningkatkan penanganan izin mikrofon dengan otorisasi satu klik',
        '🔊 Menambahkan umpan balik konfirmasi suara - Sistem mengulangi apa yang Anda katakan',
        '♿ Memperbesar tombol suara untuk lansia dan pengguna dengan mobilitas terbatas',
        '📍 Menambahkan status hunian real-time untuk perumahan sementara',
        '⏱ Menambahkan stempel waktu build otomatis'
      ]
    }
  },
  {
    version: '1.1.0',
    date: '2025-11-28',
    changes: {
      zh: [
        '🏠 更新臨時住宿資訊 - 新增樂善村、Good House、Trackside Villas',
        '🎤 新增語音指令功能',
        '📱 改進 PWA 離線功能',
        '🌐 新增 EdUHK 支援中心資訊'
      ],
      en: [
        '🏠 Updated temporary housing info - Added Lok Sin Village, Good House, Trackside Villas',
        '🎤 Added voice command functionality',
        '📱 Improved PWA offline capabilities',
        '🌐 Added EdUHK Support Centre information'
      ],
      tl: [
        '🏠 Na-update ang temporary housing info - Idinagdag ang Lok Sin Village, Good House, Trackside Villas',
        '🎤 Idinagdag ang voice command functionality',
        '📱 Pinabuti ang PWA offline capabilities',
        '🌐 Idinagdag ang EdUHK Support Centre information'
      ],
      id: [
        '🏠 Memperbarui info perumahan sementara - Menambahkan Lok Sin Village, Good House, Trackside Villas',
        '🎤 Menambahkan fungsi perintah suara',
        '📱 Meningkatkan kemampuan PWA offline',
        '🌐 Menambahkan informasi Pusat Dukungan EdUHK'
      ]
    }
  },
  {
    version: '1.0.0',
    date: '2025-11-27',
    changes: {
      zh: [
        '🚀 首次發佈',
        '🗺️ 緊急資源互動地圖',
        '🌍 多語言支援（繁中、英文、他加祿語、印尼語）',
        '♿ WCAG 2.2 無障礙標準',
        '📱 PWA 支援，可離線使用',
        '📞 緊急熱線快速撥號'
      ],
      en: [
        '🚀 Initial Release',
        '🗺️ Interactive emergency resource map',
        '🌍 Multilingual support (Chinese, English, Tagalog, Indonesian)',
        '♿ WCAG 2.2 accessibility compliance',
        '📱 PWA support with offline capabilities',
        '📞 Emergency hotline quick dial'
      ],
      tl: [
        '🚀 Unang Paglabas',
        '🗺️ Interactive emergency resource map',
        '🌍 Suporta sa maraming wika (Chinese, English, Tagalog, Indonesian)',
        '♿ WCAG 2.2 accessibility compliance',
        '📱 Suporta sa PWA na may offline capabilities',
        '📞 Mabilis na pag-dial ng emergency hotline'
      ],
      id: [
        '🚀 Rilis Awal',
        '🗺️ Peta sumber daya darurat interaktif',
        '🌍 Dukungan multibahasa (Cina, Inggris, Tagalog, Indonesia)',
        '♿ Kepatuhan aksesibilitas WCAG 2.2',
        '📱 Dukungan PWA dengan kemampuan offline',
        '📞 Panggilan cepat hotline darurat'
      ]
    }
  }
];

export const getChangelogTitle = (lang: Language): string => {
  switch (lang) {
    case 'zh': return '更新內容';
    case 'tl': return 'Mga Bagong Update';
    case 'id': return 'Pembaruan';
    default: return "What's New";
  }
};

export const getChangelogSubtitle = (lang: Language): string => {
  switch (lang) {
    case 'zh': return '最新功能與改進';
    case 'tl': return 'Pinakabagong feature at improvements';
    case 'id': return 'Fitur dan peningkatan terbaru';
    default: return 'Latest features and improvements';
  }
};
