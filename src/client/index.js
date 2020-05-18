import { handleSubmit } from "./js/formHandler.js";
import { countDown } from "./js/countDown.js";
import { fieldChecker } from "./js/fieldChecker.js";
import { getImage } from "./js/getImage.js";
import { postCityDate } from "./js/postCityDate.js";
import { getWeather } from "./js/getWeather.js";

//Apparently the order of these files matter. When resets.scss is imported in the end as opposed to the first file, centering doesn't happen. Find out why.
import "./styles/resets.scss";
import "./styles/base.scss";
import "./styles/footer.scss";
import "./styles/form.scss";
import "./styles/header.scss";

export {
  handleSubmit,
  countDown,
  fieldChecker,
  getImage,
  postCityDate,
  getWeather,
};
