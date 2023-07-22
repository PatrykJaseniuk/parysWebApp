
export function Layout() {
    return (
        <div
            style={{
                backgroundColor: 'red',
                width: '100%',
                // height: '100px',
                display: 'flex',
                justifyContent: 'center',
                // alignContent: 'center',
                alignItems: 'stretch',
            }}>
            <Card color="red" />
            <Card color="blue" />
            <Card color="green">
                <h1>naglowek</h1>
            </Card>

        </div>
    )
}

function Card({ color, children }: { color?: string, children?: React.ReactNode }) {
    return (
        <div
            style={{
                backgroundColor: color,
                // width: '100%',
                // height: '100px',
                // display: 'flex',
                // justifyContent: 'center',

            }}>
            <span>card</span>
            {children}
        </div>
    )
}