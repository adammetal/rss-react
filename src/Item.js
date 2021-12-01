function Item(props) {
  const item = props.item;
  const onSave = props.onSave;

  const title = item.title;
  const desc = item.desc;
  const link = item.link;

  const handleClickOnSaveBtn = () => {
    onSave({ title, desc, link });
  }

  return (
    <div className="item">
      <h1>{title}</h1>
      <div>{desc}</div>
      <a href={link}>{link}</a>
      {onSave ? (
        <div>
          <button onClick={handleClickOnSaveBtn}>Save</button>
        </div>
      ) : null}
    </div>
  );
}

export default Item;
