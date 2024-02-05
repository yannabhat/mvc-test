import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  private static products = [
     {
      id : '1',
      name : "TV",
      desc : "Best TV",
      price : "1000"
     },
     {
      id : "2",
      name : "iPhone",
      desc : "Best IPhone",
      price : "999"
     },{
      id : "3",
      name : "Glasses",
      desc : "Best Glasses",
      price : "20"
     }
  ]


  @Get("greeting")
  getHello(): string {
    return this.appService.getHello();
  }

  // @Get()
  // @Render("index.hbs")
  // root() {
  //   return {message : "Hello World!!!"}
  // }

  @Get("/")
  @Render("index.hbs")
  show() {
    const viewData = []
    viewData["title"] = "Product-Online Store";
    viewData["subTitle"] = "List of Product"
    viewData["products"] = AppController.products
    

    return {
      viewData : viewData
    }
  }
}
