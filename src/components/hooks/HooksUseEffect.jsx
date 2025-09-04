import { useEffect, useState } from "react";

function HooksUseEffect() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(0);
  const [status, setStatus] = useState(true);

  async function getListItem() {
    try {
      let response = await fetch("https://dummyjson.com/products?limit=10");
      let data = await response.json();
      setItems(data.products);

      console.log(data.products);
    } catch (err) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    console.log("use effect callback fn run");
    // getListItem();

    return () => {
      console.log("use effect callback fn run");
      // getListItem();
    };
  }, []);

  return (
    <section className="bg-black p-10 text-white h-screen">
      <div className="h-screen list-disc gap-3 grid-cols-3 grid text-4xl" style={{ listStyle: "disc" }}>
        {items.map((item, itemIdx) => (
          <div className="flex border border-white flex-col" key={itemIdx}>
          <img src={item.thumbnail} className="h-[100px] w-[100px]" alt={item.title}/>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
      <h1 className="font-bold text-center my-4 text-3xl">
        page : {page} || status : {status ? "true" : "false"}
      </h1>
      <div className="flex items-center gap-x-9 my-12">
        <button
          onClick={() => setPage(page + 1)}
          className="bg-white text-green-600 font-semibold text-2xl uppercase hover:bg-green-600 active:scale-90 active:shadow-2xl active:shadow-black hover:text-white    py-2 px-5 rounded-md"
        >
          increment +
        </button>
        <button
          onClick={() => setPage(page - 1)}
          className="bg-white text-red-600 font-semibold text-2xl uppercase hover:bg-red-600 active:scale-90 active:shadow-2xl active:shadow-black hover:text-white    py-2 px-5 rounded-md"
        >
          decrement -
        </button>
        <button
          onClick={() => setStatus(!status)}
          className="bg-white text-red-600 font-semibold text-2xl uppercase hover:bg-red-600 active:scale-90 active:shadow-2xl active:shadow-black hover:text-white    py-2 px-5 rounded-md"
        >
          toggle status
        </button>
      </div>
    </section>
  );
}

export default HooksUseEffect;
