// New Post Logic and event handling
async function newPostHandler(event) {
  event.preventDefault();

  // Getting the name and content of the post from form submission
  const title = document.querySelector('input[name="post-title"]').value;
  const post_content = document.querySelector(
    'textarea[name="post-content"]'
  ).value;

  const response = await fetch("/api/posts", {
    method: "POST",
    body: JSON.stringify({
      title,
      post_content,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector("new-post-form")
  .addEventListener("submit", newPostHandler);
