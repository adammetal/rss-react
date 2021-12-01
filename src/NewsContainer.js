import { useEffect, useState } from "react";
import News from "./News";

function parseXml(str) {
  const parser = new DOMParser();
  return parser.parseFromString(str, "text/xml");
}

function parseHtml(str) {
  const parser = new DOMParser();
  return parser.parseFromString(str, "text/html");
}

function parseNews(newsDomTree) {
  const items = newsDomTree.getElementsByTagName("item");
  const news = [];
  for (const item of items) {
    const title = item.getElementsByTagName("title")[0].innerHTML;
    const link = item.getElementsByTagName("link")[0].innerHTML;
    let desc = item.getElementsByTagName("description")[0];

    desc =
      parseHtml(desc.textContent).body.textContent.substring(0, 250) + "...";

    news.push({ title, desc, link });
  }
  return news;
}

function NewsContainer(props) {
  const { url, onSave } = props;
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.text())
      .then((res) => parseXml(res))
      .then((res) => parseNews(res))
      .then((res) => {
        setNews(res);
      })
      .catch(() => {
        setNews([]);
      });
  }, [url]);

  return <News news={news} onSave={onSave} />;
}

NewsContainer.defaultProps = {
  url: "https://dev.to/feed/"
}

export default NewsContainer;
