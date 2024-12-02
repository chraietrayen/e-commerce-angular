import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/cart-item.model'; 

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class ProductDetailComponent implements OnInit {
  product: Product | undefined;
  mainImage: string | undefined;
  productImages: string[] = [];
  userRating: number = 0;

  products: Product[] = [
    {
      id: 1,
      name: 'Women Accessories',
      description: 'Enhance your style with this elegant Women’s Accessories Set, featuring a chic wristwatch and a delicate bracelet. The wristwatch boasts a sleek white strap and a classic round face, making it a versatile addition to any wardrobe. Its minimalist design is perfect for both casual outings and formal occasions, ensuring you always make a sophisticated statement.',
      price: 100,
      imageUrl: 'assets/images/assecoire femme/article.jpg',
      category: 'women',
      subcategory: 'Shirts',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Blue', 'White', 'Black'],
      stock: 50,
      rating: 4.5,
      discount: 20,
      additionalImages: [
        'assets/images/assecoire femme/img 1.jpg',
        'assets/images/assecoire femme/img 2.jpg',
        'assets/images/assecoire femme/img 3.jpg',
        'assets/images/assecoire femme/img 4.jpg'
      ]
    },
    {
      id: 2,
      name: 'Men Accessories',
      description: 'Élevez votre style avec cette montre-bracelet classique intemporelle pour hommes. Dotée un bracelet noir élégant et un cadran rond sophistiqué, cette montre est conçue à la fois pour la fonctionnalité et la mode. Son cadran minimaliste avec des index argentés le rend parfait pour toutes les occasions, que vous vous habilliez pour un événement formel ou que vous restiez décontracté',
      price: 200,
      imageUrl: 'assets/images/assecoire homme/watch article.jpg',
      category: 'Men',
      subcategory: 'Accessories',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Red', 'Green', 'Black'],
      stock: 30,
      rating: 4.8,
      discount: 15,
      additionalImages: [
        'assets/images/assecoire homme/montre 1.jpg',
        'assets/images/assecoire homme/montre 2.jpg',
        'assets/images/assecoire homme/montre 3.jpg',
        'assets/images/assecoire homme/montre 4.jpg'
      ]
    },
    {
      id: 3,
      name: 'Women casual',
      description: "Libérez l'icône de style qui sommeille en vous avec ce costume décontracté et chic sans effort pour femme. Cette tenue offre l’équilibre parfait entre confort et style, ce qui la rend idéale pour toute occasion décontractée. Que vous partiez pour une journée de shopping, que vous rencontriez des amis pour prendre un café ou que vous profitiez simplement  une journée de détente, ce costume est là pour vous.",
      price: 200,
      imageUrl: 'assets/images/costume femme/costume femme article.jpg',
      category: 'women',
      subcategory: 'casual',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Red', 'Green', 'Black'],
      stock: 30,
      rating: 4.8,
      discount: 15,
      additionalImages: [
        'assets/images/costume femme/costume femme 1.jpg',
        'assets/images/costume femme/costume femme 2.jpg',
        'assets/images/costume femme/costume femme 3.jpg',
        'assets/images/costume femme/costume femme 4.jpg'
      ]
    },
    {
      id: 4,
      name: "men's casual",
      description: "Conçu pour le gentleman moderne, ce costume allie sophistication et aisance, parfait pour toutes les occasions décontractées. Que ce soit pour un brunch du week-end, une sortie entre amis ou une journée de travail décontractée, ce costume vous garantit une allure impeccable sans compromis sur le confor",
      price: 175,
      imageUrl: 'assets/images/costume homme/costume article.jpg',
      category: 'Men',
      subcategory: 'Accessories',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Red', 'Green', 'Black'],
      stock: 30,
      rating: 4.8,
      discount: 15,
      additionalImages: [
        'assets/images/costume homme/costume 1.jpg',
        'assets/images/costume homme/costume 2.jpg',
        'assets/images/costume homme/costume 3.jpg',
        'assets/images/costume homme/costume 4.jpg'
      ]
    },
    {
      id: 5,
      name: 'kids dress',
      description: "Transformez chaque jour en une aventure magique avec cette Robe Enfant. Conçue pour les petites princesses, cette robe allie confort et style, parfaite pour toutes les occasions spéciales. Que ce soit pour une fête d'anniversaire, une cérémonie ou une sortie en famille, cette robe fera briller votre enfant avec élégance",
      price: 200,
      imageUrl: 'assets/images/dress girl/dress girl.jpg',
      category: 'kids',
      subcategory: 'casual',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Red', 'Green', 'Black'],
      stock: 30,
      rating: 4.8,
      discount: 15,
      additionalImages: [
        'assets/images/dress girl/birl.jpg',
        'assets/images/dress girl/dress.jpg',
        'assets/images/dress girl/girl1.jpg',
        'assets/images/dress girl/girl2.jpg'
      ]
    },
    {
      id: 6,
      name: 'women shoes',
      description: "Marchez avec confiance et élégance dans ces Chaussures pour Femmes. Conçues pour allier style et confort, ces chaussures sont parfaites pour toutes les occasions, qu'il s'agisse d'une journée au bureau, d'une sortie entre amis ou d'une soirée spéciale. Leur design moderne et leur finition impeccable vous assurent de toujours être à la pointe de la mode",
      price: 200,
      imageUrl: 'assets/images/shoes femme/shoes femme artucle.jpg',
      category: 'women',
      subcategory: 'Accessories',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Red', 'Green', 'Black'],
      stock: 30,
      rating: 4.8,
      discount: 15,
      additionalImages: [
        'assets/images/shoes femme/shoes femme article 2.jpg',
        'assets/images/shoes femme/noire.jpg',
        'assets/images/shoes femme/shoes femme arti 4.jpg',
        'assets/images/shoes femme/sabat bel mosmar.jpg'
      ]
    },
    {
      id: 7,
      name: "men's shoes",
      description: "Affirmez votre style avec ces Chaussures pour Hommes. Idéales pour toutes les occasions, ces chaussures allient confort et élégance. Que ce soit pour une journée de travail, une sortie en ville ou une soirée habillée, elles vous assurent un look impeccable et sophistiqué",
      price: 200,
      imageUrl: 'assets/images/shoes homme/1.jpg',
      category: 'Men',
      subcategory: 'shoes',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Red', 'Green', 'Black'],
      stock: 30,
      rating: 4.8,
      discount: 15,
      additionalImages: [
        'assets/images/shoes homme/2.jpg',
        'assets/images/shoes homme/shoes homme article 2.jpg',
        'assets/images/shoes homme/shoes homme artic 3.jpg',
        'assets/images/shoes homme/shoes homme article 4.jpg'
      ]
    },
    {
      id: 8,
      name: "women's jean",
      description: "Optez pour un look à la fois décontracté et stylé avec ce Jean pour Femmes. Conçu pour offrir un confort maximal tout en accentuant votre silhouette, ce jean est parfait pour toutes les occasions, qu'il s'agisse de sorties entre amis, de journées au bureau ou de moments de détente à la maison.",
      price: 200,
      imageUrl: 'assets/images/srawel femme/jean article.jpg', 
      category: 'women',
      subcategory: 'jean',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Red', 'Green', 'Black'],
      stock: 30,
      rating: 4.8,
      discount: 15,
      additionalImages: [
        'assets/images/srawel femme/jean 1.jpg',
        'assets/images/srawel femme/jean 2.jpg',
        'assets/images/srawel femme/jean3.jpg',
        'assets/images/srawel femme/jean 4.jpg'
      ]
    },
    {
      id: 9,
      name: "men's jean",
      description:"Adoptez un style décontracté et intemporel avec ce Jean pour Hommes. Conçu pour offrir à la fois confort et durabilité, ce jean est idéal pour toutes les occasions. Que ce soit pour une journée décontractée, une sortie en ville ou une soirée entre amis, ce jean vous assure un look impeccable et moderne.",
      price: 200,
      imageUrl: 'assets/images/srawel homme/jean article.jpg',
      category: 'Men',
      subcategory: 'Accessories',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Red', 'Green', 'Black'],
      stock: 30,
      rating: 4.8,
      discount: 15,
      additionalImages: [
        'assets/images/srawel homme/jean 1.jpg',
        'assets/images/srawel homme/jean 2.jpg',
        'assets/images/srawel homme/jean 3.jpg',
        'assets/images/srawel homme/jean 4.jpg'
      ]
    },
    {
      id: 10,
      name: "women's t-shirt",
      description: "Exprimez votre style avec ce T-shirt pour Femmes élégant et confortable. Parfait pour toutes les occasions décontractées, ce t-shirt est conçu pour offrir un confort optimal tout en ajoutant une touche de chic à votre garde-robe. Que vous le portiez pour une sortie entre amis, une journée de détente ou même pour le sport, ce t-shirt est un incontournable",
      price: 200,
      imageUrl: 'assets/images/t shirt femme/t shirt femme article.jpg',
      category: 'women',
      subcategory: "women's t-shirt",
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Red', 'Green', 'Black'],
      stock: 30,
      rating: 4.8,
      discount: 15,
      additionalImages: [
        'assets/images/t shirt femme/t shirt femme 1.jpg',
        'assets/images/t shirt femme/t shirt femme 2.jpg',
        'assets/images/t shirt femme/t shirt femme 3.jpg',
        'assets/images/t shirt femme/tshirt femme 4.jpg'
      ]
    },
    {
      id: 11,
      name: "men's t-shirt",
      description: 'Alliez confort et style avec ce T-shirt pour Hommes. Parfait pour toutes les occasions décontractées, ce t-shirt est conçu pour offrir une coupe confortable et un look moderne. Que ce soit pour une sortie entre amis, une journée de détente ou une activité sportive, ce t-shirt est le choix idéal.',
      price: 200,
      imageUrl: 'assets/images/t shirt homme/t shirt homme article.jpg',
      category: 'Men',
      subcategory: 't-shirt',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Red', 'Green', 'Black'],
      stock: 30,
      rating: 4.8,
      discount: 15,
      additionalImages: [
        'assets/images/t shirt homme/t shirt homme 1.jpg',
        'assets/images/t shirt homme/t shirt homme 2.jpg',
        'assets/images/t shirt homme/t shirt homme 3.jpg',
        'assets/images/t shirt homme/t shirt homme 4.jpg'
      ]
    },
    {
      id: 12,
      name: "women's dress",
      description: "Sublimez votre garde-robe avec cette Robe pour Femmes élégante et intemporelle. Parfaite pour toutes les occasions, qu'il s'agisse d'une sortie décontractée ou d'une soirée chic, cette robe offre à la fois confort et style. Son design raffiné et ses détails délicats en font une pièce incontournable de votre collection.",
      price: 200,
      imageUrl: 'assets/images/dress women/modele.jpg',
      category: 'women',
      subcategory: 'dress',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Red', 'Green', 'Black'],
      stock: 30,
      rating: 4.8,
      discount: 15,
      additionalImages: [
        'assets/images/dress women/noire.jpg',
        'assets/images/dress women/rose.jpg',
        'assets/images/dress women/rouge.jpg',
        'assets/images/dress women/vert.jpg'
      ]
    },
    {
      id: 13,
      name: "men's sport",
      description: "Boostez vos performances avec ces Vêtements de Sport pour Hommes conçus pour allier style, confort et fonctionnalité. Que vous soyez à la salle de sport, sur le terrain ou simplement en train de courir en plein air, ces vêtements vous offrent la liberté de mouvement et la respirabilité nécessaires pour atteindre vos objectifs sportifs.",
      price: 200,
      imageUrl: 'assets/images/sport man/modele.jpg',
      category: 'men',
      subcategory: 'sport',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Red', 'Green', 'Black'],
      stock: 30,
      rating: 4.8,
      discount: 15,
      additionalImages: [
        'assets/images/sport man/1.jpg',
        'assets/images/sport man/2.jpg',
        'assets/images/sport man/3.jpg',
        'assets/images/sport man/4.jpg'
      ]
    },
    {
      id: 14,
      name: 'kids outfit',
      description: "Apportez une touche de fun et de confort à la garde-robe de votre enfant avec cette Tenue pour Enfants. Parfaite pour toutes les activités quotidiennes, qu'il s'agisse de jouer à l'extérieur, de participer à des événements scolaires ou de se détendre à la maison, cette tenue combine style et praticité pour s'adapter à la vie active des enfants.",
      price: 200,
      imageUrl: 'assets/images/full baby/article baby.jpg',
      category: 'kids',
      subcategory: 'outfit',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Red', 'Green', 'Black'],
      stock: 30,
      rating: 4.8,
      discount: 15,
      additionalImages: [
        'assets/images/full baby/full babe.jpg',
        'assets/images/full baby/full byby.jpg',
        'assets/images/full baby/full red.jpg',
        'assets/images/full baby/full.jpg'
      ]
    },
    {
      id: 15,
      name: 'kids summer',
      description: "Préparez votre enfant pour les aventures estivales avec cette Tenue d'Été pour Enfants. Légère et colorée, cette tenue est idéale pour les journées ensoleillées, les jeux en plein air et les sorties à la plage. Elle allie confort et style pour que votre enfant se sente bien tout en restant à la mode.",
      price: 200,
      imageUrl: 'assets/images/kids boy/bleu off.jpg',
      category: 'kids',
      subcategory: 'kids summer',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Red', 'Green', 'Black'],
      stock: 30,
      rating: 4.8,
      discount: 15,
      additionalImages: [
        'assets/images/kids boy/article bleu 2.jpg',
        'assets/images/kids boy/article bleu.jpg',
        'assets/images/kids boy/blue.jpg',
        'assets/images/kids boy/blu.jpg'
      ]
    },
    {
      id: 16,
      name: 'kids sport',
      description:"Préparez vos enfants à donner le meilleur d'eux-mêmes avec cette Tenue de Sport pour Enfants. Conçue pour offrir à la fois confort et liberté de mouvement, cette tenue est idéale pour toutes les activités sportives, qu'il s'agisse de courir, sauter ou jouer. Les matériaux respirants et les designs colorés rendent chaque séance de sport encore plus amusante et motivante.",
      price: 200,
      imageUrl: 'assets/images/kids boy vert/boy v.jpg',
      category: 'kids',
      subcategory: 'kids sport',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Red', 'Green', 'Black'],
      stock: 30,
      rating: 4.8,
      discount: 15,
      additionalImages: [
        'assets/images/kids boy vert/boy vert.jpg',
        'assets/images/kids boy vert/boy vert 2.jpg',
        'assets/images/kids boy vert/boy vert 3.jpg',
        'assets/images/kids boy vert/vert.jpg'
      ]
    },
    {
      id: 17,
      name: 'kids',
      description: "Apportez confort et style à la garde-robe de vos enfants avec ces Vêtements pour Enfants. Conçus pour toutes les occasions, ces vêtements allient des designs amusants à des matériaux de haute qualité pour garantir que vos enfants restent à l'aise et à la mode, qu'ils soient à l'école, en train de jouer ou lors d'occasions spéciales.",
      price: 200,
      imageUrl: 'assets/images/kids/kid.jpg',
      category: 'kids',
      subcategory: 'kids',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Red', 'Green', 'Black'],
      stock: 30,
      rating: 4.8,
      discount: 15,
      additionalImages: [
        'assets/images/kids/kids boy 1.jpg',
        'assets/images/kids/kids boy 2.jpg',
        'assets/images/kids/kids boy.jpg',
        'assets/images/kids/kids.jpg'
      ]
    },
    {
      id: 18,
      name: 'kids casual',
      description: "Faites ressortir l'imagination et la joie de vos enfants avec ce Costume pour Enfants. Parfait pour les fêtes, les carnavals ou simplement pour jouer à la maison, ce costume allie confort et amusement. Avec des designs inspirés de leurs personnages préférés ou des thèmes magiques, chaque enfant trouvera son bonheur dans ce costume unique.",
      price: 200,
      imageUrl: 'assets/images/casual baby/article.jpg',
      category: 'kids',
      subcategory: 'casual',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Red', 'Green', 'Black'],
      stock: 30,
      rating: 4.8,
      discount: 15,
      additionalImages: [
        'assets/images/casual baby/1.jpg',
        'assets/images/casual baby/2.jpg',
        'assets/images/casual baby/3.jpg',
        'assets/images/casual baby/4.jpg'
      ]
    },
   
   
    // Add more products here with additional images
  ];

  constructor(private route: ActivatedRoute, private cartService: CartService) {}

  ngOnInit(): void {
    const productId = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.products.find(p => p.id === productId);

    if (this.product) {
      this.productImages = this.product.additionalImages;
      this.mainImage = this.product.imageUrl;
    }
  }

  setMainImage(image: string): void {
    this.mainImage = image;
  }

  prevImage(): void {
    if (!this.mainImage) return;
    const currentIndex = this.productImages.indexOf(this.mainImage);
    const prevIndex = (currentIndex - 1 + this.productImages.length) % this.productImages.length;
    this.mainImage = this.productImages[prevIndex];
  }

  nextImage(): void {
    if (!this.mainImage) return;
    const currentIndex = this.productImages.indexOf(this.mainImage);
    const nextIndex = (currentIndex + 1) % this.productImages.length;
    this.mainImage = this.productImages[nextIndex];
  }

  addToCart(): void {
    if (this.product) {
      this.cartService.addToCart({ ...this.product, quantity: 1 });
      console.log(`Product ${this.product.id} added to cart`);
    }
  }

  setRating(rating: number): void {
    this.userRating = rating;
    console.log(`User rating set to ${rating} stars`);
  }
}
