import React, { useEffect, useState } from 'react';
import { Pagination } from "src/components/Pagination"
import { posts } from "src/utilites/images"
import { scrollUp } from 'src/utilites/util';

export const ListTestimony = (): JSX.Element => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [perPage] = useState<number>(3);

    const onNewPage = (newPage: number): void => {
        scrollUp();
        setCurrentPage(newPage);
    }

    useEffect(()=> { scrollUp(); }, [])

    return (
        <>
            <div className="testimony_list">
                {
                    posts
                        .slice(
                            (currentPage - 1) * perPage,
                            (currentPage - 1) * perPage + perPage
                        )
                        .map(p => (<List key={p.id} comment={p} />))
                }
            </div>
            <Pagination
                currentPage={currentPage}
                setCurrentPage={onNewPage}
                totaltems={posts.length}
                perPage={perPage}
            />
        </>
    )
}

const List = ({ comment }: any) => {
    return (
        <article className="testimony_list-post">
            <div className="testimony_list-post-title">
                <h3>{comment.name}</h3>
                <span>2 oct 1968</span>
            </div>
            <p>
                <sup><i className="quote left icon"></i></sup>
                {comment.post} &nbsp;
                <sup><i className="quote right icon"></i></sup>
            </p>
        </article>
    )
}