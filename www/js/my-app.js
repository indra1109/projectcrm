var $$ = Dom7;

var app = new Framework7({
	root: '#app',
	name: 'MidiApps',
	cache: false,
	id: 'com.project.projectcrm',
	panel: { swipe: 'left' },
	theme: 'md',
	routes: [
		{
			path: '/masuk/',
			url : 'login.html',
			on:{
				pageInit: function(e,page){
					$$('#btnmasuk').on('click', function(){
						var noponta = $$('#txtponta').val();
						var nama = $$('#txtnama').val();
						if(noponta != "" && nama != ""){
							localStorage.namas = nama;
							localStorage.noponta = noponta;
							//localStorage.poinku = 300;
							app.dialog.alert("Selamat datang, " + localStorage.namas);
							page.router.navigate('/beranda/');
						}
						else{
							app.dialog.alert("Data tidak boleh kosong");
						}
					});
					app.panel.disableSwipe();
				}
			}
		},
		{
			path : '/promohariini/',
			url : 'promohariini.html',
			on : {
				pageInit:function(e,page){
	
					for(var i =0; i < 8 ;i++){
						var isi = '<div class="card"><div class="card-content"><div class="list media-list"><ul><li class="item-content"><div class="item-media"><img style="width: 100px;" src="images/barang.jpg"></div><div class="item-inner"><div class="item-title-row"><a href="/keranjang/"><div class="item-title">Barang '+(i+1)+'</div></a> </div><div class="item-subtitle"> <strike>Rp 12.000,-</strike></div><div class="item-subtitle"> Rp 7.500,- </div></div></li></ul></div></div></div>';

						$$('#promohariini').append(isi);
					}
				},
				pageAfterIn: function (event, page) {	
				   if(!localStorage.namas) {				
				         page.router.navigate('/masuk/');
					}
				}
			}
		},
		{
			path : '/promosimingguan/',
			url : 'promomingguan.html',
			on : {
				pageInit:function(e,page){
					for(var i =0; i < 8 ;i++){
						var isi = '<div class="card"><div class="card-content"><div class="list media-list"><ul><li class="item-content"><div class="item-media"><img style="width: 100px;" src="images/barang.jpg"></div><div class="item-inner"><div class="item-title-row"><a href="/keranjang/"><div class="item-title">Barang '+(i+1)+'</div></a> </div><div class="item-subtitle"> <strike>Rp 15.000,-</strike></div><div class="item-subtitle"> Rp 7.500,- </div></div></li></ul></div></div></div>';

						$$('#promosimingguan').append(isi);
					}
				},
				pageAfterIn: function (event, page) {	
				   if(!localStorage.namas) {				
				         page.router.navigate('/masuk/');
					}
				}
			}
		},
		{
			path : '/tebusmurah/',
			url : 'tebusmurah.html',
			on : {
				pageInit:function(e,page){

					for(var i =0; i < 8 ;i++){
						var isi = '<div class="card"><div class="card-content"><div class="list media-list"><ul><li class="item-content"><div class="item-media"><img style="width: 100px;" src="images/barang.jpg"></div><div class="item-inner"><div class="item-title-row"><a href="/keranjang/"><div class="item-title">Barang '+(i+1)+'</div></a> </div><div class="item-subtitle"> Rp 3.500,- </div></div></li></ul></div></div></div>';

						$$('#tebusmurah').append(isi);
					}
				},
				pageAfterIn: function (event, page) {	
				   if(!localStorage.namas) {				
				         page.router.navigate('/masuk/');
					}
				}
			}
		},
		{
			path : '/tukarpoin/',
			url : 'tukarpoin.html',
			on : {
				pageInit:function(e,page){
					var poin = 300;
					var atas = '<div class="block"><p>Poin Ku : <b>'+poin+'</b><p></div>';
					$$('#tukarpoin').append(atas);

					for(var i =0; i < 8 ;i++){
						var isi = '<div class="card"><div class="card-content"><div class="list media-list"><ul><li class="item-content"><div class="item-media"><img style="width: 100px;" src="images/barang.jpg"></div><div class="item-inner"><div class="item-title-row"><a href="#" id="kesana"><div class="item-title">Barang '+(i+1)+'</div></a> </div><div class="item-subtitle">'+(50+(50*i))+' Poin </div></div></li></ul></div></div></div>';
						$$('#tukarpoin').append(isi);
					}

					$$('#kesana').on('click', function(){
						app.dialog.alert("Selamat Poin anda ditukarkan dengan barang");
					});
				},
				pageAfterIn: function (event, page) {	
				   if(!localStorage.namas) {				
				         page.router.navigate('/masuk/');
					}
				}
			}
		},
		{
			path : '/katalog/',
			url : 'katalog.html',
			on : {
				pageInit:function(e,page){
					var isi1 = '<img style="width: 280px;" src="../../images/katalogg.jpg">';
					var isi2 = '<img style="width: 280px;" src="../../images/katalogg2.jpg">';
					var isi3 = '<img style="width: 280px;" src="../../images/katalogg3.jpg">';

					$$('#katalog').append(isi1);
					$$('#katalog').append(isi2);
					$$('#katalog').append(isi3);
					
				},
				pageAfterIn: function (event, page) {	
				   if(!localStorage.namas) {				
				         page.router.navigate('/masuk/');
					}
				}
			}
		},
		{
			path : '/cs/',
			url : 'cs.html',
			on : {
				pageInit:function(e,page){
					$$('#btnhantar').on('click', function(){
						app.dialog.alert("Data berhasil dikirimkan ke Customer Servis");
					});
				},
				pageAfterIn: function (event, page) {	
				   if(!localStorage.namas) {				
				         page.router.navigate('/masuk/');
					}
				}
			}
		},
		{
			path : '/lokasi/',
			url : 'lokasi.html',
			on : {
				pageInit:function(e,page){
					//var maps = '<div class="card demo-card-header-pic"><div style="background-image:url('+ '../../images/maps.png'+')" class="card-header align-items-flex-end">'+ '<b style="color: black;"></b>'+'</div>';
					var maps = '<img src="../../images/maps.png"/>';
					$$('#lokasi').append(maps);
				},
				pageAfterIn: function (event, page) {	
				   if(!localStorage.namas) {				
				         page.router.navigate('/masuk/');
					}
				}
			}
		},
		{
			path : '/profil/',
			url : 'prof.html',
			on : {
				pageInit:function(e,page){
					var nama = '<li>Nama :<i>' + localStorage.namas +'<i></li>';
					var noponta = '<li>No Ponta : <i>' + localStorage.noponta + '</i></li>';
					var umur = '<li>Umur : <i>' + '22' + '</i></li>';
					var tgllahir = '<li>Tanggal Lahir : <i>' + '19 September 1996' + '</i></li>';
					var alamat = '<li>Alamat : <i>' + 'Tenggilis, Surabaya' + '</i></li>';
					var ypoin = '<li>Poin Ku : <i><b>' + '300' + '</b></i></li>';
					var gambar = '<li><img  style="width: 100px; text-align: center;" src="../images/foto.jpg"></li>'

					$$('#gambar').append(gambar);
					$$('#profdetail').append(noponta);
					$$('#profdetail').append(nama);
					$$('#profdetail').append(umur);
					$$('#profdetail').append(tgllahir);
					$$('#profdetail').append(alamat);
					$$('#pointmu').append(ypoin);
					
				},
				pageAfterIn: function (event, page) {	
				   if(!localStorage.namas) {				
				         page.router.navigate('/masuk/');
					}
				}
			}
		},
		{
			path : '/keranjang/',
			url : 'keranjang.html',
			on : {
				pageInit:function(e,page){
					$$('#nama').append(localStorage.namas);

					$$('#btnbeli').on('click', function(){
						app.dialog.alert("Barang akan dikirimkan secepatnya");
						app.dialog.alert("Selamat Poin anda BERTAMBAH!!!");
					});
					
				},
				pageAfterIn: function (event, page) {	
				   if(!localStorage.namas) {				
				         page.router.navigate('/masuk/');
					}
				}
			}
		},
		{
			path : '/beranda/',
			url : 'beranda.html',
			on : {
				pageInit:function(e,page){
					$$('#nama').append(localStorage.namas);
					// var promohariini = '<a href="/promohariini/"><div class="card demo-card-header-pic"><div style="background-image:url('+ '../../images/promohariini.jpg'+')" class="card-header align-items-flex-end">'+ '<b style="color: black;">Promosi Hari ini</b>'+'</div></a>';
					// $$('#beranda').append(promohariini);
					// $$('#beranda').append('\n \n');
					// var weekpromo = '<a href="/promosimingguan/"><div class="card demo-card-header-pic"><div style="background-image:url('+ '../../images/promomingguan.jpg'+')" class="card-header align-items-flex-end">'+ '<b style="color: black;">Promosi Mingguan</b>'+'</div></a>';
					// $$('#beranda').append(weekpromo);
					// $$('#beranda').append('\n \n');
					// var tebusmurah =  '<a href="/tebusmurah/"><div class="card demo-card-header-pic"><div style="background-image:url('+ '../../images/tebusmurah.jpg'+')" class="card-header align-items-flex-end">'+ '<b style="color: black;">Tebus Murah</b>'+'</div></a>';
					// $$('#beranda').append(tebusmurah);
					// $$('#beranda').append('\n \n');
					// var tukarpoin = '<a href="/tukarpoin/"><div class="card demo-card-header-pic"><div style="background-image:url('+ '../../images/tukarpoin.jpg'+')" class="card-header align-items-flex-end">'+ '<b style="color: black;">Tukar Point</b>'+'</div></a>';
					// $$('#beranda').append(tukarpoin);
					// $$('#beranda').append('\n \n');
					// var katalog = '<a href="/katalog/"><div class="card demo-card-header-pic"><div style="background-image:url('+ '../../images/katalog.jpg'+')" class="card-header align-items-flex-end">'+ '<b style="color: black;">Katalog</b>'+'</div></a>';
					// $$('#beranda').append(katalog);
					// $$('#beranda').append('\n \n');
					// var lokasi = '<a href="/lokasi/"><div class="card demo-card-header-pic"><div style="background-image:url('+ '../../images/lokasi.jpg'+')" class="card-header align-items-flex-end">'+ '<b style="color: black;">Lokasi Midi</b>'+'</div></a>';
					// $$('#beranda').append(lokasi);
					// $$('#beranda').append('\n \n');
					// var cs = '<a href="/cs/"><div class="card demo-card-header-pic"><div style="background-image:url('+ '../../images/cs.jpg'+')" class="card-header align-items-flex-end">'+ '<b style="color: black;">Customer Servis</b>'+'</div></a>';
					// $$('#beranda').append(cs);
					// $$('#beranda').append('\n \n');

				},
				pageAfterIn: function (event, page) {	
				   if(!localStorage.namas) {				
				         page.router.navigate('/masuk/');
					}
				}
			}
		},
	]
});

var mainView = app.views.create('.view-main', {
	url:'/beranda/'
});
$$('.keluar').on('click', function () {
	localStorage.clear();
	mainView.router.navigate('/masuk/');

});