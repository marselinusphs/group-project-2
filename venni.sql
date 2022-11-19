create database venni;

create table `role` (
	id int primary key not null auto_increment,
	name VARCHAR(25)
);

create table `user` (
	id int primary key not null auto_increment,
	name VARCHAR(64),
    email VARCHAR(64),
    password VARCHAR(32),
    role_id INT DEFAULT 1,
    FOREIGN KEY (role_id) REFERENCES role(id)
);

create table `event` (
	id int primary key not null auto_increment,
	name VARCHAR(100),
	description VARCHAR(2000),
	image VARCHAR(500),
    `date` date,
    `time` varchar(20),
    location VARCHAR(100),
    loc_url VARCHAR(500),
    price int DEFAULT 0
);

create table `order` (
	id int primary key not null auto_increment,	
    user_id int,
    `datetime` datetime DEFAULT CURRENT_TIMESTAMP,
	event_id int,
    qty int,
    total_price int,
	FOREIGN KEY (user_id) REFERENCES `user`(id),
	FOREIGN KEY (event_id) REFERENCES `event`(id)
);

create table favorite (
	id int primary key not null auto_increment,
	user_id int,
	event_id int,
	FOREIGN KEY (user_id) REFERENCES `user`(id),
	FOREIGN KEY (event_id) REFERENCES `event`(id)
);

create table review (
	id int primary key not null auto_increment,
    `date` datetime DEFAULT CURRENT_TIMESTAMP,
	user_id int,
	event_id int,
    star int,
    review varchar(500),
	FOREIGN KEY (user_id) REFERENCES `user`(id),
	FOREIGN KEY (event_id) REFERENCES `event`(id)
);

INSERT INTO `role`(`name`) VALUES ('User'),('Admin');

INSERT INTO `user`(`name`, `email`, `password`, `role_id`) VALUES 
('Aldi','aldi@gmail.com','aldi123',1),
('Budi','budi@gmail.com','budi123',1),
('Caca','caca@gmail.com','caca123',1),
('Marselinus','marselinusphs@gmail.com','marselinus123',2),
('Rovinda','rovinda@gmail.com','rovinda123',2),
('Nola','nola@gmail.com','nola123',2);

INSERT INTO event VALUES
    (1,'Pergelaran Topeng Topeng','Pergelaran “TOPENG-TOPENG” adalah suatu pertunjukkan seni budaya Indonesia yang diprakarsai oleh Ibu Sukmawati Sukarno dengan mengadaptasi filosofi Tri Hita Karana, yang mencerminkan Tuhan atau Sang Hyang Widhi Wasa, Alam Semesta dan Manusia di bumi ini.
Pergelaran Tarian Topeng khususnya dari Bali ini dikemas dan menjadi suatu maha karya seni oleh beberapa seniman berbakat, antara lain Pancer Langiit, Studio Inspirasi, Genggong Kutus, Sanggar Kakul Mas dan Putra Barong.
Balawan akan mempercantik pertunjukan ini dengan alunan musiknya dan Ade Rai akan beraksi sebagai penari Topeng.
Perkenalkan kebudayaan Indonesia kepada anak cucu kita selagi kita masih bisa menghargai karya seni dan budaya bangsa.','https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20221017101025_634cc7a1da0cb.jpg','2022-11-19 00:00:00','19:00 - 21:00 WIB','Panggung Terbuka Ardha Candra, Bali','https://www.google.com/maps/search/?api=1&query=-8.65562,115.234',50000),
    (2,'Demo Apresiasi Seni (DEPRESI)','Merupakan salah satu program kerja wajib UKM LUMUT yang paling ditunggu-tunggu. Dalam sejarahnya DEPRESI menjadi sebuah agenda yang menjadi ciri khas dari UKM LUMUT. Sejak tahun 2012 DEPRESI menjadi acara tahunan setiap satu periode kepengurusan. Konsep DEPRESI awalnya berupa kegiatan sosial, pementasan kolosal, hingga akhirnya muncul konsep pagelaran Lukis, Musik, dan Tari.
Pada tahun ini DEPRESI akan digelar pada 19 November 2022 di GOR Perjuangan 45 Politeknik Negeri Jember dengan judul BISMA ''Setya Tuhu ing Pawulangan''.','https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20221021233632_6352ca90545db.jpg','2022-11-19 00:00:00','19:00 - 22:00 WIB','GOR Perjuangan ''45 Politeknik Negeri','https://www.google.com/maps/search/?api=1&query=-8.16012,113.721',15000),
    (3,'The Story of Life Balikpapan','[ YNROADSHOW ] the Story Of Life Goes to Balikpapan ✨✨✨','https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20221114204709_637246dd494c5.jpg','2022-11-19 00:00:00','17:30 - 22:00 WIB','Hotel Sagita Balikpapan, Kalimantan Timur','https://www.google.com/maps/search/?api=1&query=-1.27001,116.845',50000),
    (4,'PESTA RAYA FLOBAMORATAS','PESTA RAYA FLOBAMORATAS, diselenggarakan pada 18-19 November 2022 di Water Park Kupang.
Lewat #PRF2022 yuk kita seru-seruan merayakan aksi dan budaya lokal. Pastinya akan banyak hal menarik yang basong sonde dapatkan ditempat lain kaya konser musik, penampilan seni, nonton film, pojok ekspresi, pameran wastra, sampai sajian ragam kuliner.','https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20221111010511_636d3d5762ad5.jpg','2022-11-19 00:00:00','14:00 - 23:00 WIB','Waterpark Kupang, Nusa Tenggara Timur','https://www.google.com/maps/search/?api=1&query=-10.1759,123.614',0),
    (5,'The Story of Life Samarinda','-','https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20221114205149_637247f580980.jpg','2022-11-20 00:00:00','08:00 - 12:00 WIB','Hotel Grand Victoria, Kalimantan Timur','https://www.google.com/maps/search/?api=1&query=-0.476673,117.148',50000),
    (6,'FISIP Explore Goes to Baduy','Yuk mengenal lebih dalam mengenai budaya dan masyarakat Baduy. 

Apa sih Baduy itu? Baduy atau biasa disebut dengan masyarakat Kanekes merupakan nama sebuah kelompok adat sunda yang ada di Banten. 

Berkaitan dengan penjelasan tersebut, ada info menarik nih untuk Sobat FISIP dan masyarakat umum bahwa BEM FISIP UNTIRTA akan mengadakan FISIP EXPLORE GOES TO BADUY yang akan dilaksanakan pada 19 - 20 November 2022.

Yuk mengenal lebih dalam mengenai budaya dan masyarakat Baduy. 

Apa sih Baduy itu? Baduy atau biasa disebut dengan masyarakat Kanekes merupakan nama sebuah kelompok adat sunda yang ada di Banten. 

Berkaitan dengan penjelasan tersebut, ada info menarik nih untuk Sobat FISIP dan masyarakat umum bahwa BEM FISIP UNTIRTA akan mengadakan FISIP EXPLORE GOES TO BADUY yang akan dilaksanakan pada 19 - 20 November 2022.

Yuk mengenal lebih dalam mengenai budaya dan masyarakat Baduy. 

Apa sih Baduy itu? Baduy atau biasa disebut dengan masyarakat Kanekes merupakan nama sebuah kelompok adat sunda yang ada di Banten. 

Berkaitan dengan penjelasan tersebut, ada info menarik nih untuk Sobat FISIP dan masyarakat umum bahwa BEM FISIP UNTIRTA akan mengadakan FISIP EXPLORE GOES TO BADUY yang akan dilaksanakan pada 19 - 20 November 2022.

Yuk mengenal lebih dalam mengenai budaya dan masyarakat Baduy.
Apa sih Baduy itu? Baduy atau biasa disebut dengan masyarakat Kanekes merupakan nama sebuah kelompok adat sunda yang ada di Banten.
Berkaitan dengan penjelasan tersebut, ada info menarik nih untuk Sobat FISIP dan masyarakat umum bahwa BEM FISIP UNTIRTA akan mengadakan FISIP EXPLORE GOES TO BADUY yang akan dilaksanakan pada 19 - 20 November 2022.','https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20221024094144_6355fb68a84a9.jpg','2022-11-22 00:00:00','04:30 - 20:00 WIB','Suku Baduy, Banten','https://www.google.com/maps/search/?api=1&query=-6.121,106.199',185000),
    (7,'PAMERAN THE MASTER #3 SUBROTO SM.','-','https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20221108175945_636a36a14ca73.jpg','2022-11-24 00:00:00','10:00 - 16:00 WIB','Kiniko Art, D.I. Yogyakarta','https://www.google.com/maps/search/?api=1&query=-7.81631,110.336',0),
    (8,'DRAMA SAKU SAMPEL',"",'https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20221115172912_637369f8ab4f0.jpg','2022-11-24 00:00:00','17:15 - 20:15 WIB','Jakarta, DKI Jakarta','https://www.google.com/maps/search/?api=1&query=-6.17539,106.827',0),
    (9,'Distrik Seni','Distrik Seni adalah sebuah art project platform yang mencoba menjawab kebutuhan ruang pemberdayaan inovasi dan perkembangan marketplace serta ekosistem seni rupa Jakarta yang selama ini sangat minim wadahnya baik di Jakarta maupun Nusantara. Distrik Seni mengembangkan konsep place making dan kolaborasi ekosistem seni untuk menjadi wadah berkreasi eksperimentasi dan distribusi serta penjualan karya. Memberdayakan ruang-ruang publik dan marketplace menjadi sebuah tempat sosialisasi aktivasi engagement dan pertemuan antara ekosistem seni dengan Pentahelix masyarakat (dunia bisnis media pendidikan pemerintah dan komunitas) serta mendekatkan ekosistem seni ke publik luas.Melanjutkan kesuksesan Distrik Seni X Sarinah di sesi pertama Distrik Seni X Sarinah sesi kedua resmi dibuka untuk publik dengan mengusung tema Berkelanjutan!. Melalui tema ini Distrik Seni X Sarinah sebagai salah satu wadah ekosistem seni yang mengembangkan konsep placemaking dan kolaborasi ekosistem seni dalam memperkuat komitmen untuk mendukung Indonesia mencapai tujuan pembangunan berkelanjutan.','https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20220908090033.jpg','2022-11-24 00:00:00','10:00 - 21:00 WIB','Sarinah - Lt. 6, DKI Jakarta','https://www.google.com/maps/search/?api=1&query=0,0',50000),
    (10,'PKK Awards 2022','PKK Awards merupakan ajang penghargaan untuk seluruh unsur yang ada di Jurusan PKK, termasuk dari unsur mahasiswa, pendidik, dan pengelola jurusan.','https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20221111224235_636e6d6b15c2a.jpg','2022-11-25 00:00:00','19:00 - 21:00 WIB','Dekanat FT Unnes, Jawa Tengah','https://www.google.com/maps/search/?api=1&query=-7.0517,110.402',0),
    (11,'Webinart - How to greyscale and color your art','Hai, SobArt!
Pernah nggak sih kalian ngerasa gambar kalian kok flat banget! Padahal sudah mengikuti macam-macam tutorial, macam-macam teknik lighting dan segala macam, tapi ternyata hasilnya begitu-begitu saja tidak ada perubahan. Parahnya lagi kalau lightingnya makin kacauuu ... oh nooo ...
Nah disinilah The Yangpeiv Academy sebagai solusinya! Yuk gabung bareng kedalam WebinArt dengan Yangpeiv. Disini tidak hanya mengajarkan kita cara mewarnai dengan memperhatikan angle yang benar, tetapi kita juga akan belajar tentang greyscale, memperhatikan lightsource, dan mencari sisi personal kalian—untuk membuat karya kamu semakin "style aku banget"! Gimana? Pasti tertarik, kan? Yuk, langsung ikuti WebinArt kita, dan mari menuju ke karyamu yang lebih baik!','https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20221022144358_63539f3ebdf93.jpg','2022-11-26 00:00:00','01:00 - 03:30 WIB','Online','-',150000),
    (12,'Artscenic Online Workshop - Gouache Food Painting','Event Workshop Online yang diadakan oleh Artscenic, membawakan kelas Gouache Food Painting.

Ada beberapa poin yang akan dibahas di workshop online ini.

Gouache characteristic, the ideal gouache concistency: do''s & dont''s, gouache color mixing & blending.

Lalu dilanjutkan dengan demo, diikuti oleh peserta.

Event Workshop Online yang diadakan oleh Artscenic, membawakan kelas Gouache Food Painting.

Ada beberapa poin yang akan dibahas di workshop online ini.

Gouache characteristic, the ideal gouache concistency: do''s & dont''s, gouache color mixing & blending.

Lalu dilanjutkan dengan demo, diikuti oleh peserta.

Event Workshop Online yang diadakan oleh Artscenic, membawakan kelas Gouache Food Painting.
Ada beberapa poin yang akan dibahas di workshop online ini.
Gouache characteristic, the ideal gouache concistency: do''s & dont''s, gouache color mixing & blending.
Lalu dilanjutkan dengan demo, diikuti oleh peserta.

Event Workshop Online yang diadakan oleh Artscenic, membawakan kelas Gouache Food Painting.
Ada beberapa poin yang akan dibahas di workshop online ini.
Gouache characteristic, the ideal gouache concistency: do''s & dont''s, gouache color mixing & blending.
Lalu dilanjutkan dengan demo, diikuti oleh peserta.

Event Workshop Online yang diadakan oleh Artscenic, membawakan kelas Gouache Food Painting.
Ada beberapa poin yang akan dibahas di workshop online ini.
Gouache characteristic, the ideal gouache concistency: do''s & dont''s, gouache color mixing & blending.
Lalu dilanjutkan dengan demo, diikuti oleh peserta.','https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20221103113924_636345fc86872.jpg','2022-11-26 00:00:00','10:00 - 12:00 WIB','Online','-',150000),
    (13,'Nejifest vol 3','Nejifest pada akhirnya akan menutup lembaran terakhirnya pada volume 3. Walaupun terbilang cepat namun kisah yang kita akan buat semoga menjadi kenangan yang terbaik.','https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20221008135339_63411e731a7aa.jpg','2022-11-27 00:00:00','10:00 - 21:00 WIB','THE HERITAGE, Jawa Tengah','https://www.google.com/maps/search/?api=1&query=-7.55476,110.755',45000),
    (14,'RENT','TEMAN Musicals & Ciputra Artpreneur proudly present the first ever Indonesian production of RENT - The Musical.
This show is rated as PG 15. Spectators must be at least 15 years old and accompanied by adults. Spectators aged 17 years and over are not required to be accompanied.
The Tony Award & Pulitzer Prize-winning musical by Jonathan Larson tells the story of a group of impoverished young artists struggling to survive and create a life in Lower Manhattan''s East Village in the thriving days of bohemian Alphabet City, under the shadow of HIV/AIDS.
Set in the East Village of New York City circa 1990s, RENT is about falling in love, finding your own voice and living for today.','https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20221024111608.png','2022-11-25 00:00:00',' 20:00 - 23:00','Ciputra Artpreneur, DKI Jakarta','https://www.google.com/maps/search/?api=1&query=0,0',350000),
    (15,'UI ArtX','-','https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20220526230700_628fa5a44146f.jpg','2022-11-30 00:00:00','08:00 - 00:00 WIB','Pusgiwa, Universitas Indonesia, Jawa Barat','https://www.google.com/maps/search/?api=1&query=-6.3563,106.828',0),
    (16,'Panen Wastra ''Aku Dara''','-','https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20221028150419_635b8d03d7a5c.jpg','2022-11-30 00:00:00','10:00 - 20:30 WIB','Rumata Art Space, Sulawesi Selatan','https://www.google.com/maps/search/?api=1&query=-5.17126,119.428',15000),
    (17,'J-Culture: Cosplay, Coswalk, Anisong PASS','-','https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20221112175254_636f7b06adacb.jpg','2022-12-03 00:00:00','18:00 - 21:00 WIB','Manunggal Sport Center, Jawa Timur','https://www.google.com/maps/search/?api=1&query=-6.90265,112.081',19000),
    (18,'SETELAH LEWAT DJAM MALAM','SETELAH LEWAT DJAM MALAM, sebuah pertunjukan teater berdasarkan, dan berdialog dengan, film klasik “Lewat Djam Malam” (1954) karya Usmar Ismail.
Pertunjukan ini didukung oleh aktor film dan teater Reza Rahadian, Dira Sugandhi, Kelly Tandiono, Sal Priadi, Lukman Sardi, dan Josh Marcy, serta para penari Dansity.
Di bawah arahan sutradara Yudi Ahmad Tajudin, pertunjukan ini digarap dengan konsep silang-media yang mendialogkan media panggung (teater) dengan film.','https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20221113101049.jpg','2022-12-02 00:00:00','20:00 - 22:00','Graha Bhakti Budaya - Taman Ismail Marzuki, DKI Jakarta','https://www.google.com/maps/search/?api=1&query=-6.18926,106.84',250000),
    (19,'KIRAB BUDAYA 2022','-','https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20221103214331_6363d3936dfc2.jpg','2022-12-10 00:00:00','21:40 - 00:40 WIB','Lapangan Dwi Windu, D.I. Yogyakarta','https://www.google.com/maps/search/?api=1&query=-7.88776,110.327',16900),
    (20,'Pentas Tunggal Teater Lingkar','Pentas Tunggal Teater Lingkar merupakan pentas terbesar Komunitas Teater Lingkar yang bergerak di bawah Kementrian Olahraga dan Seni Badan Eksekutif Mahasiswa Fakultas Ilmu Budaya Universitas Brawijaya.
Pentas Tunggal Teater Lingkar 2022 akan menyuguhkan beberapa pertunjukan spektakuler yang diperankan langsung oleh anggota Teater Lingkar Fakultas Ilmu Budaya Universitas Brawijaya, diantaranya: Panggung Terbuka, Bazar, Penampilan Pembuka, Penampilan Utama, serta Sarasehan.','https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20221114110304_6371bdf88f450.jpg','2022-12-10 00:00:00','14:00 - 23:55 WIB','Gedung Kesenian Gajayana, Jawa Timur','https://www.google.com/maps/search/?api=1&query=-7.98848,112.627',18000),
    (21,'Incisival','Pertunjukan musik dengan bintang tamu yang membawa nostalgia, juga seseorang yang menggambarkan curahan hati kita dengan lagunya. Kami mengundang MOMO dan Kaleb J untuk memberikan penampilan di malam','https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20221108181606_636a3a768b35f.jpg','2022-12-17 00:00:00','15:30 - 22:00 WIB','Gedung Serba Guna PEMPROVSU, Sumatera Utara','https://www.google.com/maps/search/?api=1&query=-6.17522,106.827',145000),
    (22,'TITIK PRODUKSI: MUSPRA','Teater Titik proudly presents "MUSPRA", an original play by I.B. Uttarayana. MUSPRA tells a tale of four siblings amidst the scientific discovery of the decade. A tale of intrigue, mystery and familial relationships. This production is part of a yearly agenda by Teater Titik as a way to channel the talents and interests of its members. It is hoped that this production will bring awareness to the socio-cultural, and ever political, issues found in society.','https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20221031190238_635fb95eb161f.jpg','2022-12-18 00:00:00','18:30 - 21:00 WIB','Rumentang Siang, Jawa Barat','https://www.google.com/maps/search/?api=1&query=-6.91971,107.622',25000),
    (23,'History & Ethnography Chinese Hakka Cultural in Singkawang & Sambas 民族志山口洋三發客家人文化','Kota Singkawang dikenal dan dijuluki sebagai kota seribu klenteng, seribu lampion, kota Amoi dan Kota Sambas menjadi saksi bisu cikal bakal kedatangan Etnis Tionghoa Hakka di Kalimantan Barat. Banyak sekali Tionghoa yang bermukim di sana membuat klenteng yang sebagai pusat komunitas dan ibadat dan bertumbuh di banyak penjuru kota. Bagaimanakah kehidupan dan kebiasaan etnis Tionghoa di sana?','https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20221113121907_63707e4b3dd23.jpg','2022-12-28 00:00:00','19:00 - 21:00 WIB','Online','-',0),
    (24,'Museum MACAN Ticket Admission','Dalam rangka persiapan pameran Museum MACAN yang akan datang, galeri utama museum akan ditutup untuk instalasi. Namun, Anda tetap bisa mengunjungi Museum MACAN dari 18 Oktober 2022 - 6 November 2022 dengan memesan tiket Open House melalui https://www.museummacan.org/ untuk menikmati pameran dan program berikut:
1. Ruang Seni Anak Komisi UOB Museum MACAN ‘Theresia Agustina Sitompul: Kembara Biru’
2. 4th VH AWARD — Karya-karya dari para finalis VH AWARD, sebuah penghargaan seni rupa media baru di Asia Tenggara yang diinisiasikan oleh Hyundai Motor Group. Berlangsung dari 10 September 2022 - 13 November 2022.','https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20221007110604.jpg','2022-12-31 00:00:00','10:00 - 16:00 WIB','Museum Macan, DKI Jakarta','https://www.google.com/maps/search/?api=1&query=0,0',48000),
    (25,'SARINAH TOUR','Sarinah Tour menawarkan pengalaman kepada pengunjung tentang nilai sejarah Sarinah','https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20220929062510.jpg','2022-12-31 00:00:00','10:00 - 22:00 WIB','Sarinah Tour, DKI Jakarta','https://www.google.com/maps/search/?api=1&query=106.824,-6.18822',100000),
    (26,'AKSI SMANDA 2022','Grand Show Aksi SMANDA 2022 merupakan puncak acara dari rangkaian kegiatan "AKSI" yang akan di adakan di bulan Januari tahun 2023 dengan menampilkan Artis Nasional.
Grand Show Aksi SMANDA 2022 mengangkat tema "Reunion" yang dimana Aksi Smanda kali ini mengajak semua kalangan untuk mengingat kembali masa-masa jaman SMA. Aksi SMANDA akan membuat sebuah konsep acara classic pentas seni yang di kolaborasikan dengan era modern.','https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20221114225513_637264e173154.jpg','2023-01-04 00:00:00','16:00 - 22:00 WIB','Hal Parkir Timur Lombok Epicentrum Mall, Nusa Tenggara Barat','https://www.google.com/maps/search/?api=1&query=-8.5928,116.105',100000),
    (27,'Special Mythology Silicon Prosthetic Film Mask Making Camp in Bali, Baliwood','The Myth of Fantasynesia , Film Mask Making , Cultural Fun (Quick) Learning Camp. By','https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20221011093318_6344d5eede463.jpg','2023-08-31 00:00:00','15:25 - 18:25 WIB','Jakarta, DKI Jakarta','https://www.google.com/maps/search/?api=1&query=-6.17539,106.827',0);

INSERT INTO `favorite`(`user_id`, `event_id`) VALUES 
(1,1),(1,2),(1,3),(2,4),(2,5),(2,6),(3,7),(3,8),(3,9);

INSERT INTO `order`(`user_id`, `event_id`, `qty`, `total_price`) VALUES 
('1','1','1','50000'),
('1','2','1','15000'),
('1','3','1','50000'),
('1','4','1','0'),
('1','5','1','50000'),
('2','6','1','185000'),
('2','7','1','0'),
('2','8','1','0'),
('2','9','1','50000'),
('2','10','1','0'),
('3','11','1','150000'),
('3','12','1','150000'),
('3','13','1','45000'),
('3','14','1','350000'),
('3','15','1','0');

INSERT INTO `review`(`user_id`, `event_id`, `star`, `review`) VALUES 
('1','1','5','Bagus banget'),
('1','2','5','Bagus banget'),
('1','3','4','Bagus banget'),
('1','4','5','Bagus banget'),
('1','5','5','Bagus banget'),
('2','6','4','Bagus banget'),
('2','7','3','Bagus banget'),
('2','8','4','Bagus banget'),
('2','9','5','Bagus banget'),
('2','10','5','Bagus banget'),
('3','11','5','Bagus banget'),
('3','12','4','Bagus banget'),
('3','13','5','Bagus banget'),
('3','14','4','Bagus banget'),
('3','15','4','Bagus banget');