export default function BrowseId({ params }: { params: { id: string } }) {
  return <div>{params.id}</div>;
}

const movieData = {
  name: "Nome do filme",
  date: new Date(),
  genres:["Genero-1","Genero-2","Genero-3"],
  synopsis:
    "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
};
