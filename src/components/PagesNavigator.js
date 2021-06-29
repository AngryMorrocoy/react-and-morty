import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link, useHistory } from "react-router-dom";
import "./PagesNavigator.css";

const PagesNavigator = ({ location, requestInfo }) => {
  let pages = [];
  const history = useHistory();

  const buildNewPageUrl = (newPage) => {
    const pageParams = new URLSearchParams(location.search);
    pageParams.set("page", newPage);
    return "?" + pageParams.toString();
  };

  const redirectToSearchPage = (pageNumber) => {
    const searchParams = buildNewPageUrl(pageNumber);
    history.push("/search/" + searchParams);
  };

  const actualPage = (() => {
    const prevPageSplited = requestInfo.prev && requestInfo.prev.split("/");
    if (!prevPageSplited) return 1;
    const nextPageSplited = requestInfo.next && requestInfo.next.split("/");
    if (!nextPageSplited) return requestInfo.pages;
    const urlSearch = prevPageSplited[prevPageSplited.length - 1];
    const prevPage = new URLSearchParams(urlSearch).get("page");
    return Number(prevPage) + 1;
  })();

  for (let i = 0; i < requestInfo.pages; i++) {
    pages.push(
      <Link
        to={{
          pathname: "/search/",
          search: buildNewPageUrl(i + 1),
        }}
        key={i}
        className={`page-indicator${
          i + 1 === actualPage ? " actual-page" : ""
        }`}
      >
        {i + 1}
      </Link>
    );
  }

  return (
    <div className="pages-navigator">
      <FaArrowLeft
        onClick={
          actualPage <= 1 ? null : () => redirectToSearchPage(actualPage - 1)
        }
        className={`page-nav-arrow ${actualPage <= 1 ? "disabled" : ""}`}
      />
      <div className="page-indicator-container">{pages}</div>
      <FaArrowRight
        onClick={
          actualPage >= requestInfo.pages
            ? null
            : () => redirectToSearchPage(actualPage + 1)
        }
        className={`page-nav-arrow ${
          actualPage >= requestInfo.pages ? "disabled" : ""
        }`}
      />
    </div>
  );
};

export default PagesNavigator;
