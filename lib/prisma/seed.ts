import CategoryFactory from "../../factory/CategoryFactory";
import ProductFactory from "../../factory/ProductFactory";
import UserFactory from "../../factory/UserFactory";

const main = async () => {
  await CategoryFactory();
  await UserFactory();
  await ProductFactory(350);
};

main();
