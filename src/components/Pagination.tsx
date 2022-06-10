import React, { useEffect, useState } from 'react';

export const Pagination = (props: any): JSX.Element => {
    const {
        currentPage,
        setCurrentPage,
        totaltems,
        perPage
    } = props;

    const [maxPages, setMaxPages] = useState<number>(0);

    useEffect(() => {
        const pages = totaltems / perPage;
        setMaxPages(Math.ceil(pages));
    }, [])

    const disabledPreviousButton = (): boolean => currentPage === 1;
    const disabledNextButton = (): boolean => currentPage === maxPages;

    const handlePagination = (go: string): void => {
        switch (go) {
            case 'first':
                setCurrentPage(1);
                break;
            case 'last':
                setCurrentPage(maxPages);
                break;
            case 'prev':
                setCurrentPage(currentPage - 1);
                break;
            case 'next':
                setCurrentPage(currentPage + 1);
                break;
            default:
                break;
        }
    }

    return (
        <section className="pagination">
            <span className="pagination_page">P&aacute;gina {currentPage} de {maxPages}</span>
            <div className="pagination_buttons">
                <button className='ui basic button'
                    disabled={disabledPreviousButton()}
                    onClick={() => handlePagination('first')}
                >
                    Primero
                </button>
                <button
                    className="ui basic button"
                    disabled={disabledPreviousButton()}
                    onClick={() => handlePagination('prev')}
                >
                    &laquo;
                </button>

                <button
                    className="ui basic button"
                    onClick={() => handlePagination('next')}
                    disabled={disabledNextButton()}
                >
                    &raquo;
                </button>
                <button className='ui basic button'
                    disabled={disabledNextButton()}
                    onClick={() => handlePagination('last')}
                >
                    Ultimo
                </button>
            </div>
        </section>
    )
}