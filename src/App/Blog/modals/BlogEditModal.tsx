import { BASE_API_URL, BLOG_URL } from "../../settings";
import { CreatePostModal } from "./CreatePostModal";

export class BlogEditModal extends CreatePostModal {
  modalTitle = "Edytuj wpis";

  submit() {
    fetch(`${BASE_API_URL}${BLOG_URL}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    })
      .then((response) => response.json())
      .then((data) => {
        this.props.afterUpdate(data);
        this.props.onHide();
      })
      .catch((error) => console.error(error));
  }
}
