import Item from "./Item";

function News(props) {
  const news = props.news;
  const onSave = props.onSave;

  return (
    <div className="container">
      {news.map((item) => (
        <Item key={item.link} item={item} onSave={onSave} />
      ))}
    </div>
  );
}

export default News;
