import UserFactory from "../../factory/UserFactory";
import CompanyFactory from "../../factory/CompanyFactory";
import SocialMediaAccountFactory from "../../factory/SoicalMediaAccountFactory";

const main = async () => {
  await CompanyFactory();
  await UserFactory();
  await SocialMediaAccountFactory();
};

main();
