import icons from 'url:../../img/icons.svg';
import View from './View.js';
class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');
  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    //page 1 & other page
    if (curPage === 1 && numPages > 1) {
      return `
        <button data-goto='${
          curPage + 1
        }' class="btn--inline pagination__btn--next">
            <span>Page ${curPage + 1}</span>
            <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
            </svg>
        </button>`;
    }
    //page 1 & no other page
    else if (curPage === 1 && numPages === 1) {
      return '';
    }
    //page last
    else if (curPage === numPages) {
      return `
        <button data-goto='${
          curPage - 1
        }' class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
            <use href="${icons}#icon-arrow-left"></use>
            </svg> 
            <span>Page ${numPages - 1}</span>
        </button>`;
    }
    //page other
    else {
      return `
    <button data-goto='${
      curPage - 1
    }' class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
        <use href="${icons}#icon-arrow-left"></use>
        </svg> 
        <span>Page ${curPage - 1}</span>
    </button>
    <button data-goto='${
      curPage + 1
    }' class="btn--inline pagination__btn--next">
        <span>Page  ${curPage + 1}</span>
        <svg class="search__icon">
        <use href="${icons}#icon-arrow-right"></use>
        </svg>
    </button> `;
    }
  }
  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', e => {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;
      const goToPage = +btn.dataset.goto;
      handler(goToPage);
    });
  }
}
export default new PaginationView();
