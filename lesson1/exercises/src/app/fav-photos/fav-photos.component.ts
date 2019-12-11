import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Photo/Images';
  image1 = 'https://www.launchcode.org/assets/icons/trophy-95e8cbe9bfda44123422302951deb1c92a237d39052669b8fbfafec00cb4f608.png';
  image2 = 'https://images.pexels.com/photos/533923/pexels-photo-533923.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
  image3 = 'https://res.cloudinary.com/twenty20/private_images/t_watermark-criss-cross-10/v1458510198000/photosp/3c06002c-d1b8-44d1-9559-5f1b816847f1/stock-photo-outdoors-lawn-summer-patio-backyard-spring-relaxing-peace-countryside-3c06002c-d1b8-44d1-9559-5f1b816847f1.jpg';

  constructor() { }

  ngOnInit() {
  }

}