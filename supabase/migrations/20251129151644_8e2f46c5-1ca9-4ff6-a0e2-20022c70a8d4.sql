-- Create table for disaster response timeline events
CREATE TABLE IF NOT EXISTS public.timeline_events (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  event_type TEXT NOT NULL CHECK (event_type IN ('casualty', 'relief', 'milestone', 'rescue', 'donation')),
  title_zh TEXT NOT NULL,
  title_en TEXT NOT NULL,
  title_tl TEXT NOT NULL,
  title_id TEXT NOT NULL,
  description_zh TEXT,
  description_en TEXT,
  description_tl TEXT,
  description_id TEXT,
  event_time TIMESTAMP WITH TIME ZONE NOT NULL,
  priority INTEGER NOT NULL DEFAULT 0,
  is_critical BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.timeline_events ENABLE ROW LEVEL SECURITY;

-- Allow anyone to view timeline events
CREATE POLICY "Anyone can view timeline events"
  ON public.timeline_events
  FOR SELECT
  USING (true);

-- Allow authenticated users to insert timeline events
CREATE POLICY "Authenticated users can insert timeline events"
  ON public.timeline_events
  FOR INSERT
  WITH CHECK (auth.uid() IS NOT NULL);

-- Create indexes for faster queries
CREATE INDEX idx_timeline_events_event_time ON public.timeline_events(event_time DESC);
CREATE INDEX idx_timeline_events_type ON public.timeline_events(event_type);
CREATE INDEX idx_timeline_events_priority ON public.timeline_events(priority);

-- Insert initial timeline data based on the disaster
INSERT INTO public.timeline_events (event_type, title_zh, title_en, title_tl, title_id, description_zh, description_en, description_tl, description_id, event_time, priority, is_critical) VALUES
  -- Initial fire outbreak
  ('casualty', '火災爆發', 'Fire Outbreak', 'Sumabok ang Sunog', 'Terjadi Kebakaran', '大埔宏福苑發生大火，多座大廈受影響', 'Major fire breaks out at Wang Fuk Court, Tai Po, affecting multiple blocks', 'Nasunog sa Wang Fuk Court, Tai Po, apektado ang maraming bloke', 'Kebakaran besar terjadi di Wang Fuk Court, Tai Po, mempengaruhi beberapa blok', now() - interval '72 hours', 100, true),
  
  -- Emergency response begins
  ('rescue', '緊急救援展開', 'Emergency Response Begins', 'Nagsimula ang Emergency Response', 'Respons Darurat Dimulai', '消防處派出大量人員及設備展開救援', 'Fire Department deploys extensive resources and personnel for rescue operations', 'Ang Fire Department ay nag-deploy ng maraming resources at personnel para sa rescue', 'Departemen Pemadam Kebakaran mengerahkan banyak sumber daya dan personel untuk penyelamatan', now() - interval '71 hours', 95, true),
  
  -- First casualty report
  ('casualty', '首次傷亡報告', 'First Casualty Report', 'Unang Ulat ng Nasawi', 'Laporan Korban Pertama', '確認至少50人死亡，100多人受傷', 'At least 50 confirmed dead, over 100 injured', 'Hindi bababa sa 50 ang napatunayan nang namatay, mahigit 100 ang nasugatan', 'Setidaknya 50 terkonfirmasi meninggal, lebih dari 100 terluka', now() - interval '68 hours', 90, true),
  
  -- Government relief fund established
  ('relief', '政府設立緊急支援基金', 'Government Relief Fund Established', 'Nagtayo ng Government Relief Fund', 'Dana Bantuan Pemerintah Didirikan', '香港特別行政區政府設立緊急支援基金，接受捐款', 'HKSAR Government establishes emergency relief fund, accepting donations', 'Nagtayo ang HKSAR Government ng emergency relief fund, tumatanggap ng donasyon', 'Pemerintah HKSAR mendirikan dana bantuan darurat, menerima donasi', now() - interval '66 hours', 85, false),
  
  -- Red Cross mobilization
  ('relief', '紅十字會全面動員', 'Red Cross Full Mobilization', 'Red Cross Full Mobilization', 'Mobilisasi Penuh Palang Merah', '紅十字會啟動大規模救援計劃，提供現金援助', 'Red Cross activates large-scale relief plan, providing cash assistance', 'Nag-activate ang Red Cross ng malaking relief plan, nagbibigay ng tulong pinansyal', 'Palang Merah mengaktifkan rencana bantuan skala besar, memberikan bantuan tunai', now() - interval '64 hours', 80, false),
  
  -- Temporary housing opened
  ('milestone', '臨時住宿安排完成', 'Temporary Housing Opened', 'Nabukas ang Temporary Housing', 'Perumahan Sementara Dibuka', '樂善村、Good House等過渡性房屋開放，接收600多名受災居民', 'Lok Sin Village, Good House transitional housing opened, accommodating 600+ affected residents', 'Nabukas ang Lok Sin Village, Good House transitional housing, tumatanggap ng 600+ apektadong residente', 'Lok Sin Village, Good House perumahan transisi dibuka, menampung 600+ penduduk yang terkena dampak', now() - interval '60 hours', 75, false),
  
  -- Updated casualty figures
  ('casualty', '傷亡數字更新', 'Updated Casualty Figures', 'Updated na Bilang ng Nasawi', 'Update Angka Korban', '確認至少128人死亡，包括1名消防員及7名外傭。79人受傷，150人失蹤', 'At least 128 confirmed dead including 1 firefighter and 7 domestic workers. 79 injured, 150 missing', 'Hindi bababa sa 128 ang napatunayan nang namatay kasama ang 1 bumbero at 7 domestic workers. 79 nasugatan, 150 nawawala', 'Setidaknya 128 terkonfirmasi meninggal termasuk 1 petugas pemadam kebakaran dan 7 pekerja rumah tangga. 79 terluka, 150 hilang', now() - interval '48 hours', 95, true),
  
  -- Volunteer coordination begins
  ('relief', '義工協調網絡建立', 'Volunteer Network Established', 'Nabuo ang Volunteer Network', 'Jaringan Relawan Didirikan', 'TAI PO MANPOWER及Telegram群組建立，協調物資及義工支援', 'TAI PO MANPOWER and Telegram groups established to coordinate supplies and volunteer support', 'Nabuo ang TAI PO MANPOWER at Telegram groups para mag-coordinate ng supplies at volunteer support', 'TAI PO MANPOWER dan grup Telegram didirikan untuk koordinasi persediaan dan dukungan relawan', now() - interval '42 hours', 70, false),
  
  -- Community safety tracking
  ('milestone', '宏福苑報平安系統啟動', 'Safety Tracking System Launched', 'Inilunsad ang Safety Tracking System', 'Sistem Pelacakan Keselamatan Diluncurkan', '社區自發建立即時安全狀態追蹤系統', 'Community-initiated real-time safety status tracking system launched', 'Inilunsad ang community-initiated real-time safety tracking system', 'Sistem pelacakan status keselamatan real-time yang diprakarsai komunitas diluncurkan', now() - interval '36 hours', 65, false),
  
  -- SPCA pet rescue
  ('relief', 'SPCA寵物救援啟動', 'SPCA Pet Rescue Operations', 'SPCA Pet Rescue Operations', 'Operasi Penyelamatan Hewan SPCA', 'SPCA設立寵物救援點，協助受災家庭照顧寵物', 'SPCA establishes pet rescue point to help affected families care for their pets', 'Nagtayo ang SPCA ng pet rescue point para tumulong sa mga apektadong pamilya na alagaan ang kanilang mga alagang hayop', 'SPCA mendirikan titik penyelamatan hewan untuk membantu keluarga yang terkena dampak merawat hewan peliharaan mereka', now() - interval '30 hours', 60, false),
  
  -- Mental health support
  ('relief', '災後心理輔導熱線開通', 'Mental Health Hotline Launched', 'Inilunsad ang Mental Health Hotline', 'Hotline Kesehatan Mental Diluncurkan', '專業心理輔導熱線開通，每晚8-11點提供服務', 'Professional mental health hotline launched, available 8-11 PM daily', 'Inilunsad ang professional mental health hotline, available 8-11 PM araw-araw', 'Hotline kesehatan mental profesional diluncurkan, tersedia 8-11 PM setiap hari', now() - interval '24 hours', 55, false),
  
  -- Major donations
  ('donation', '各界捐款湧入', 'Major Donations Received', 'Natanggap ang Malalaking Donasyon', 'Donasi Besar Diterima', '新鴻基、各社福機構及市民捐款超過1億港元', 'SHKP, NGOs, and public donations exceed HKD 100 million', 'Ang donasyon mula sa SHKP, NGOs, at publiko ay lumampas sa HKD 100 milyon', 'Donasi dari SHKP, LSM, dan publik melebihi HKD 100 juta', now() - interval '18 hours', 50, false),
  
  -- Enhanced transport services
  ('milestone', '交通服務加強', 'Enhanced Transport Services', 'Pinahusay ang Transport Services', 'Layanan Transportasi Ditingkatkan', '政府協調加強往來臨時住宿點的巴士及小巴服務', 'Government coordinates enhanced bus and minibus services to temporary housing', 'Nag-coordinate ang gobyerno ng pinahusay na bus at minibus services sa temporary housing', 'Pemerintah mengkoordinasikan peningkatan layanan bus dan minibus ke perumahan sementara', now() - interval '12 hours', 45, false),
  
  -- Ongoing rescue efforts
  ('rescue', '救援行動持續', 'Rescue Operations Continue', 'Patuloy ang Rescue Operations', 'Operasi Penyelamatan Berlanjut', '消防處繼續在現場搜救，已救出多名被困居民', 'Fire Department continues on-site rescue, multiple trapped residents rescued', 'Patuloy ang Fire Department sa on-site rescue, maraming trapped residents ang nailigtas', 'Departemen Pemadam Kebakaran melanjutkan penyelamatan di lokasi, beberapa penduduk yang terjebak berhasil diselamatkan', now() - interval '6 hours', 85, false),
  
  -- Current situation
  ('milestone', '應急響應進入穩定階段', 'Emergency Response Stabilizing', 'Nag-stabilize ang Emergency Response', 'Respons Darurat Stabil', '緊急救援進入穩定階段，重點轉向災民安置及長期支援', 'Emergency response stabilizing, focus shifts to victim resettlement and long-term support', 'Nag-stabilize ang emergency response, focus ay lumipat sa victim resettlement at long-term support', 'Respons darurat stabil, fokus beralih ke pemukiman kembali korban dan dukungan jangka panjang', now() - interval '1 hour', 40, false);