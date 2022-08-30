import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  foodDetails = [
    {
      id: 1,
      foodName: "Batagor WGS",
      foodDetails: "Batagor kuah dan kering dibuat oleh mang batagor WGS.",
      foodPrice: 2500,
      foodImg:"https://cdn1-production-images-kly.akamaized.net/tK3Z1u2iGXsjy_gLGGp2hdZPgNQ=/309x0:1642x1333/1200x1200/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3244963/original/082561700_1600745457-batagor_kuah.jpg", 
    },
    {
      id: 2,
      foodName: "Mie Ayam Si Cepat",
      foodDetails: "Mie ayam enak deket si cepat rasanya enak sekaliiiiii.",
      foodPrice: 12000,
      foodImg:"https://cdn1-production-images-kly.akamaized.net/nzM4xwihphmagoVn8qBQaPcKzHo=/0x0:6000x3382/1200x675/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3524401/original/066199400_1627521905-2021-07-28.jpg", 
    },
    {
      id: 3,
      foodName: "Nasi Goreng Mafia",
      foodDetails: "Nasi goreng yang dibuat oleh para mafia yg terkenal di Amerika.",
      foodPrice: 25000,
      foodImg:"https://asset.kompas.com/crops/riPGK5eD7amHKtv3dFNqioI6IqI=/13x7:700x465/780x390/data/photo/2021/09/24/614dc6865eb24.jpg", 
    },
    {
      id: 4,
      foodName: "Burger Bangorz",
      foodDetails: "Burger yang enak yg disajikan oleh budak bangor, wow.",
      foodPrice: 20000,
      foodImg:"https://awsimages.detik.net.id/community/media/visual/2020/07/03/burger.jpeg?w=700&q=90", 
    },
    {
      id: 5,
      foodName: "Spicy Chicken Wingz",
      foodDetails: "Sayap ayam yg sangat pedas, disajikan langsung dengan saos yg maha dahsyat pedasnya.",
      foodPrice: 30000,
      foodImg:"https://awsimages.detik.net.id/community/media/visual/2021/07/10/resep-chicken-wings-ala-korea_43.jpeg?w=650&q=80", 
    },
    {
      id: 6,
      foodName: "Bala - bala",
      foodDetails: "Bala - bala atau bakwan enak dan gurih, dibuat dari jaring bala - bala yg kuat.",
      foodPrice: 10000,
      foodImg:"https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2022/02/06/598927952.jpg", 
    },
    {
      id: 7,
      foodName: "Salad Sehat Sempurna",
      foodDetails: "Salad yang sehat dan sempurna dari sayur - sayuran segar, yang sangat enak ketika disantap ditengah malam hari.",
      foodPrice: 15000,
      foodImg:"https://images.immediate.co.uk/production/volatile/sites/30/2017/06/healthy-nicoise-09b6cd9.jpg", 
    },
    {
      id: 8,
      foodName: "Nasi Rendang Nendang",
      foodDetails: "Nasi rendang yang dagingnya akan menendang - nendang lidahmu sendiri.",
      foodPrice: 35000,
      foodImg:"https://s4.bukalapak.com/img/9644710578/large/data.png", 
    },
    {
      id: 9,
      foodName: "Melty Ice Cream",
      foodDetails: "Eskrim yang berbahaya, rasanya akan melelehkan lidahmu sendiri nanti.",
      foodPrice: 20000,
      foodImg:"https://img.freepik.com/free-vector/realistic-ice-cream-collection_52683-64217.jpg?w=2000", 
    },
    {
      id: 10,
      foodName: "Pudding Bergoyang",
      foodDetails: "Pudding yang enak sekali, pudding yg akan bergoyang - goyang ketika saat anda memakannya.",
      foodPrice: 40000,
      foodImg:"https://cookingwithdog.com/wp-content/uploads/2017/01/custard-pudding-00.jpg", 
    },
    {
      id: 11,
      foodName: "Nasi Kombinasi",
      foodDetails: "Nasi kombinasi dengan perpaduan telor dadar yang enak, disajikan juga dengan perkedal kentang yg membuat anda lebih sehat dan kuat kembali ketika bekerja.",
      foodPrice: 3000,
      foodImg:"https://d1sag4ddilekf6.azureedge.net/compressed/items/IDITE2019081611564698478/photo/menueditor_item_166e4c09f9fe493eb09fa5b68acbd235_1565956505180397500.jpg", 
    },
  ]
}
