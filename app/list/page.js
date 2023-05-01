import { connectDB } from "@/util/database";

export default async function List() {
  const client = await connectDB;
  const db = client.db("forum");
  let result = await db.collection("post").find().toArray();
  console.log(result);
  return (
    <div className="list-bg">
      {result.map((el, idx) => {
        return (
          <div className="list-item" key={`list_${idx}`}>
            <h4>{el.title}</h4>
            <p>{el.content}</p>
          </div>
        );
      })}
    </div>
  );
}
