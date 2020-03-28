import React from 'react';
import Link from 'next/link'

const Card = ({ id, imageUrl }) => {
    return (
        <>
            <Link href={`/${id}`} passHref>
                <a className="card">
                    <img src={imageUrl}/>
                </a>
            </Link>
            <style jsx>{`
                .card {
                    padding: 1.5rem;
                    text-decoration: none;
                    box-shadow: 0 0 0 0 #737373;
                    border-radius: 10px;
                    transition: box-shadow 0.15s ease;
                    display: flex;
                    justify-content: center;
                }

                .card:hover,
                .card:focus,
                .card:active {
                    box-shadow: 0 0 10px 0px #737373;
                    transition: box-shadow 0.15s ease;
                }
            `}</style>
        </>
    );
}

export default Card;