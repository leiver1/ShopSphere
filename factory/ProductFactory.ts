import prisma from "../lib/prisma/prismaClient";
import { faker } from "@faker-js/faker";

const ProductFactory = async (amount: number) => {
  await prisma.productReview.deleteMany();
  await prisma.productImage.deleteMany();
  await prisma.inputChoosable.deleteMany();
  await prisma.productChoosable.deleteMany();
  await prisma.product.deleteMany();

  const categories = await prisma.category.findMany();

  for (let i = 0; i < amount; i++) {
    const product = {
      title: faker.commerce.product(),
      subtitle: faker.lorem.sentence({ min: 3, max: 6 }),
      categoryId: categories[Math.floor(Math.random() * categories.length)].id,
      description: faker.lorem.sentence({ min: 10, max: 20 }),
      price: Number(faker.commerce.price()),
      stock: Math.floor(Math.random() * 1000),
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const newProduct = await prisma.product.create({
      data: product,
    });

    const randomIndexForImages = Math.floor(Math.random() * 5) + 3;

    for (let i = 0; i < randomIndexForImages; i++) {
      const image = {
        productId: newProduct.id,
        src: faker.image.urlPicsumPhotos(),
      };

      await prisma.productImage.create({
        data: image,
      });
    }

    const productChoosable = {
      productId: newProduct.id,
      title: faker.lorem.word(),
    };

    const newProductChoosable = await prisma.productChoosable.create({
      data: productChoosable,
    });

    const randomIndexForInputChoosable = Math.floor(Math.random() * 5) + 3;

    for (let i = 0; i <= randomIndexForInputChoosable; i++) {
      const inputChoosable = {
        productChoosableId: newProductChoosable.id,
        input: faker.lorem.word({ length: { min: 1, max: 6 } }),
      };

      const newInputChoosable = await prisma.inputChoosable.create({
        data: inputChoosable,
      });
    }

    const users = await prisma.user.findMany();
    console.log(users);
    for (let i = 0; i < users.length; i++) {
      const review = {
        userId: users[i].id,
        title: faker.lorem.sentence({ min: 3, max: 6 }),
        text: faker.lorem.sentence(10),
        productId: newProduct.id,
        createdAt: new Date(),
        updatedAt: new Date(),
        rating: Math.floor(Math.random() * 5),
      };

      await prisma.productReview.create({
        data: review,
      });
    }
  }
};

export default ProductFactory;
