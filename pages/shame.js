import Link from 'next/link'

const Shame = () => {
    return (
        <div className="container">
            <h1>¿A donde crees que vas?</h1>
            <img src="/static/vegeta.jpg" />
            <div>
                <Link href="/">
                    <button>Ir al inicio</button>
                </Link>
            </div>
            <style jsx global> {`
                body {
                    padding: 0;
                    margin: 0;
                    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
                    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
                }

                * {
                    box-sizing: border-box;
                }

                h1 {
                    color: white;
                }

                button {
                    margin-top: 1rem;
                    padding: 8px 16px;
                    border-radius: 8px;
                    border: none;
                    background-color: #98CA3D;
                    color: white;
                    font-weight: bold;
                    text-transform: uppercase;
                    cursor: pointer;
                    box-shadow: 0 0 0px 0 #a5ff00;
                    transition: box-shadow 0.15s ease;
                    outline: none;
                }

                button:hover {
                    box-shadow: 0 0 5px 0 #a5ff00;
                    transition: box-shadow 0.15s ease;
                }

                .container {
                    width: 100vw;
                    height: 100vh;
                    background-color: #212121;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                }
            `}
            </style>
        </div>
    )
}

export default Shame;