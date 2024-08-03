const pagination = (paginationEl, pageLink, currentPage, pageCount) => {

    const Webflow = window.Webflow || [];
    Webflow.push(function(){
      const linkClassName = pageLink;
      const currentClassName = currentPage;
      const maxPageCount = 3;
    
      $(pageCount).each(function(){
        const collectionUrl = $(this).closest(paginationEl).find('[class*="w-pagination"]').first().prop('href').split('=')[0];
        const totalPageCount = parseInt(/[^/]*$/.exec($(this).text())[0].trim());
        const currentPageNumber = parseInt($(this).text().split('/')[0].trim());
        let pageCount = maxPageCount || totalPageCount;
        const pagesToDisplay = Math.max(1, Math.min(pageCount, totalPageCount));
        const middlePageNumber = Math.ceil((pagesToDisplay - 1) / 2);
        const endingPageNumber = Math.min(Math.max(1, currentPageNumber - middlePageNumber) + (pagesToDisplay - 1), totalPageCount);
        const startingPageNumber = endingPageNumber - (pagesToDisplay - 1);
    
        $(this).empty();
    
        for (let i = startingPageNumber; i <= endingPageNumber; i++) {
          let pageNumber = i;
          let pageLink = collectionUrl + '=' + pageNumber;
          let isCurrentPage = pageNumber == currentPageNumber;
          const $anchor = $('<a>', {
            class: [isCurrentPage && currentClassName, linkClassName].filter(a => a).join(' '),
            href: pageLink,
            text: pageNumber,
          });
          $(this).append($anchor);
        }
    
       if (totalPageCount > maxPageCount && currentPageNumber !== totalPageCount && currentPageNumber !== totalPageCount - 1) {
      $(this).append($('<span>', { text: '...' }));
      const $anchorLast = $('<a>', {
        class: [linkClassName].join(' '),
        href: collectionUrl + '=' + totalPageCount,
        text: totalPageCount,
      });
      $(this).append($anchorLast);
    }
      });
    });
    
    }
    
    pagination('.pagination-news', 'page-link-news', 'current-page-news', '.page-count-news')
    pagination('.pagination-press', 'page-link-press', 'current-page-press', '.page-count-press')