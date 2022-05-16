type DataProps = {
  id?: string;
  name?: string;
  email?: string;
  fav?: string[] | string;
};

type User = {
  id: number;
  name: string;
  email: string;
  fav: string[];
};

function createUser({ id, ...data }: DataProps) {
  const numberId = Number(id);

  if (!numberId || (!data.name && !data.email && !data.fav)) {
    throw new Error("Missing required fields");
  }
  const t: User = {
    id: 1,
    name: "test",
    email: "test@",
    fav: ["test"],
  };

  if (data.fav) {
    if (Array.isArray(data.fav)) {
      t.fav = data.fav;
    } else if (!t.fav.includes(data.fav)) {
      data.fav = [data.fav, ...t.fav];
    }else{
      throw new Error("Author already exists");
    }
  }

  const assign = Object.assign(t, data);

  return assign;
}

const result = createUser({ id: "1" });

console.log(result);
