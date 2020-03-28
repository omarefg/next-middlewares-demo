import Head from 'next/head'

const Layout = ({ children }) => {
    return (
        <div>
            <Head>
                <title>Platzi Master Cards</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {children}
            <footer>
                Powered by <img src="/static/master.png" width={64} alt="Platzi Master Logo" />
            </footer>
            <style jsx global>{`
                html,
                body {
                    padding: 0;
                    margin: 0;
                    background: #E3E3E3;
                    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
                    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
                }

                * {
                    box-sizing: border-box;
                }

                footer {
                    width: 100%;
                    height: 100px;
                    box-shadow: 0 0 10px 0.5px #737373;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                footer img {
                    margin-left: 0.5rem;
                }
            `}</style>
        </div>
    )
}

export default Layout
