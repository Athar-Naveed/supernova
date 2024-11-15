import toast from "react-hot-toast";
const HandlePost = async (name: any, message: any) => {
  // API POST method call
  const resp = await fetch(
    `${
      process.env.NODE_ENV == "development"
        ? "http://localhost:3000/"
        : "https://supernova-eight.vercel.app/"
    }/api/post`,
    {
      method: "POST",
      body: JSON.stringify({
        name: name,
        message: message,
      }),
    }
  );
  const data = await resp.json();
  if (resp.ok) {
    toast.success("We received your message", {
      position: "top-center",
      duration: 1500,
    });
      location.reload();
  } else {
    toast.error("We are facing some issue receiving your message!", {
      position: "top-center",
      duration: 1500,
    });
    location.reload();
  }
};
export default HandlePost;
