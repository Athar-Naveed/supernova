export default async function Wall() {
  const resp = await fetch(
    `${
      process.env.NODE_ENV == "development"
        ? "http://localhost:3000/"
        : "https://supernova-eight.vercel.app/"
    }/api/post`,
    { cache: "no-cache" }
  );
  const data = await resp.json();
  if (resp.ok) {
    return (
      <>
        <div className="text-center text-2xl font-semibold font-serif">
          Our Wall
        </div>
        <div className="display-data grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
          {data.data.rows.map((user: any) => (
            <div
              key={user.id}
              className="mx-1 w-[90%] h-fit rounded-lg selection:text-black text-sm text-white my-12 p-4 bg-gradient-to-r from-blue-800 to-indigo-900 "
            >
              <span>{user.message}</span>
              <br />
              <br />
              <span className="float-right">&quot;{user.user_name}&quot;</span>
            </div>
          ))}
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="text-center text-2xl font-semibold font-serif">
          Our Wall
        </div>
        <div>No Customer data to show</div>
      </>
    );
  }
}
