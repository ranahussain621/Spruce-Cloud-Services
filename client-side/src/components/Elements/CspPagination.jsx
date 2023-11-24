

import { useEffect, useState } from 'react';
import '../../style/pagination.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight ,faAnglesLeft } from '@fortawesome/free-solid-svg-icons'

export default function CspPagination(props) {
  const [currentPage, setCurrentPage] = useState(1);





  const handleClick = (event) => {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    if (href === '#!+1') {
      setCurrentPage(currentPage + 1);
      props.nextPage();
    } else if (href === '#!-1') {
      setCurrentPage(currentPage - 1);
      props.previousPage();
    } else {
      const go = href.replace('#!', '');
      setCurrentPage(parseInt(go, 10));
      props.currentPageValue(parseInt(go, 10));
    }
  };
  const renderPageLink = (page) => {
    const className = page === currentPage ? 'cdp_i active' : 'cdp_i';
    return (
      <a href={`#!${page}`} className={className} onClick={handleClick}>
        {page}
      </a>
    );
  };

  return (
    <div className="content_detail__pagination cdp row justify-content-center" actpage={currentPage}>
        <div className="w-auto inner-data pag-card ">
          <div className="m-0 p-0  d-flex align-items-center pt-1 ">
                 <a href="#!-1" className="cdp_i" onClick={handleClick}>
                <FontAwesomeIcon icon={faAnglesLeft} />
                 
      </a>
      {Array.from({ length: props.totalPage }, (_, i) => renderPageLink(i + 1))}
      <a href="#!+1" className="cdp_i" onClick={handleClick}>
      <FontAwesomeIcon icon={faAnglesRight} />
      </a>
          </div>
         
        </div>
    
    </div>
  );
}
