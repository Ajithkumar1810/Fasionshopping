import { Component, OnInit } from '@angular/core';
import { ProductsModule } from '../../proudcts.modle';

@Component({
  selector: 'app-productview',
  templateUrl: './productview.component.html',
  styleUrls: ['./productview.component.css']
})
export class ProductviewComponent implements OnInit {
  productinfo:ProductsModule[]=[
    new ProductsModule("Chudi",'Discount off:$250','prize:320','https://m.media-amazon.com/images/I/81rDWuu7GhL._UL1500_.jpg'),
    new ProductsModule("Pant",'Discount off:$280','prize:170','https://i.pinimg.com/236x/50/54/04/505404208b7e63d7d0ed1ad9d329c0fc--mens-fashion-styles-men-fashion.jpg'),
    new ProductsModule("Shirt",'Discount off:$150','prize:290','https://images.bewakoof.com/uploads/grid/app/types-of-shirts-for-men-bewakoof-blog-1-1610963787.jpg'),
    new ProductsModule('Kurutha','Disscount off:290','amount:350','https://assets.panashindia.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/2/8/284mw06-209-mks-nc.jpg'),
    new ProductsModule("Pant",'Discount off:$280','prize:170','https://i.pinimg.com/236x/50/54/04/505404208b7e63d7d0ed1ad9d329c0fc--mens-fashion-styles-men-fashion.jpg'),
    new ProductsModule("Shirt",'Discount off:$150','prize:290','https://images.bewakoof.com/uploads/grid/app/types-of-shirts-for-men-bewakoof-blog-1-1610963787.jpg'),
    new ProductsModule("Chudi",'Discount off:$250','prize:320','https://m.media-amazon.com/images/I/81rDWuu7GhL._UL1500_.jpg'),
    new ProductsModule('Kurutha','Disscount off:290','amount:350','https://assets.panashindia.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/2/8/284mw06-209-mks-nc.jpg'),
    new ProductsModule("Pant",'Discount off:$280','prize:170','https://i.pinimg.com/236x/50/54/04/505404208b7e63d7d0ed1ad9d329c0fc--mens-fashion-styles-men-fashion.jpg'),
    new ProductsModule("Shirt",'Discount off:$150','prize:290','https://images.bewakoof.com/uploads/grid/app/types-of-shirts-for-men-bewakoof-blog-1-1610963787.jpg'),
    new ProductsModule("Chudi",'Discount off:$250','prize:320','https://m.media-amazon.com/images/I/81rDWuu7GhL._UL1500_.jpg'),
    new ProductsModule("Pant",'Discount off:$280','prize:170','https://i.pinimg.com/236x/50/54/04/505404208b7e63d7d0ed1ad9d329c0fc--mens-fashion-styles-men-fashion.jpg'),
    new ProductsModule('Kurutha','Disscount off:290','amount:350','https://assets.panashindia.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/2/8/284mw06-209-mks-nc.jpg'),
    new ProductsModule("Pant",'Discount off:$280','prize:170','https://i.pinimg.com/236x/50/54/04/505404208b7e63d7d0ed1ad9d329c0fc--mens-fashion-styles-men-fashion.jpg'),
    new ProductsModule("Shirt",'Discount off:$150','prize:290','https://images.bewakoof.com/uploads/grid/app/types-of-shirts-for-men-bewakoof-blog-1-1610963787.jpg'),
    new ProductsModule("Chudi",'Discount off:$250','prize:320','https://m.media-amazon.com/images/I/81rDWuu7GhL._UL1500_.jpg'),
    new ProductsModule("Pant",'Discount off:$280','prize:170','https://i.pinimg.com/236x/50/54/04/505404208b7e63d7d0ed1ad9d329c0fc--mens-fashion-styles-men-fashion.jpg'),
    new ProductsModule("Pant",'Discount off:$280','prize:170','https://i.pinimg.com/236x/50/54/04/505404208b7e63d7d0ed1ad9d329c0fc--mens-fashion-styles-men-fashion.jpg'),
    new ProductsModule("Shirt",'Discount off:$150','prize:290','https://images.bewakoof.com/uploads/grid/app/types-of-shirts-for-men-bewakoof-blog-1-1610963787.jpg'),
    new ProductsModule('Kurutha','Disscount off:290','amount:350','https://assets.panashindia.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/2/8/284mw06-209-mks-nc.jpg'),
    new ProductsModule("Pant",'Discount off:$280','prize:170','https://i.pinimg.com/236x/50/54/04/505404208b7e63d7d0ed1ad9d329c0fc--mens-fashion-styles-men-fashion.jpg'),
    new ProductsModule("Shirt",'Discount off:$150','prize:290','https://images.bewakoof.com/uploads/grid/app/types-of-shirts-for-men-bewakoof-blog-1-1610963787.jpg'),
    new ProductsModule("Chudi",'Discount off:$250','prize:320','https://m.media-amazon.com/images/I/81rDWuu7GhL._UL1500_.jpg'),
    new ProductsModule('Kurutha','Disscount off:290','amount:350','https://assets.panashindia.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/2/8/284mw06-209-mks-nc.jpg'),
    new ProductsModule("Pant",'Discount off:$280','prize:170','https://i.pinimg.com/236x/50/54/04/505404208b7e63d7d0ed1ad9d329c0fc--mens-fashion-styles-men-fashion.jpg'),
    new ProductsModule("Shirt",'Discount off:$150','prize:290','https://images.bewakoof.com/uploads/grid/app/types-of-shirts-for-men-bewakoof-blog-1-1610963787.jpg'),
    new ProductsModule("Chudi",'Discount off:$250','prize:320','https://m.media-amazon.com/images/I/81rDWuu7GhL._UL1500_.jpg'),
    new ProductsModule("Pant",'Discount off:$280','prize:170','https://i.pinimg.com/236x/50/54/04/505404208b7e63d7d0ed1ad9d329c0fc--mens-fashion-styles-men-fashion.jpg'),
    new ProductsModule('Kurutha','Disscount off:290','amount:350','https://assets.panashindia.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/2/8/284mw06-209-mks-nc.jpg'),
    new ProductsModule("Pant",'Discount off:$280','prize:170','https://i.pinimg.com/236x/50/54/04/505404208b7e63d7d0ed1ad9d329c0fc--mens-fashion-styles-men-fashion.jpg'),
  ]
  page=1;
  totalLength:any;
  constructor() { }

  ngOnInit(): void {
    this.totalLength=this.productinfo.length;
  }

}
