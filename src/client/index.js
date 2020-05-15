import { handleSubmit } from "./js/formHandler.js";

//Apparently the order of these files matter. When resets.scss is imported in the end as opposed to the first file, centering doesn't happen. Find out why.
import "./styles/resets.scss";
import "./styles/base.scss";
import "./styles/footer.scss";
import "./styles/form.scss";
import "./styles/header.scss";

export { handleSubmit };
