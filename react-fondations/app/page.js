import LikeButton from './like-button'

function Header(props) {
    const title = props.title
    return <h1>{title ? `Cool ${title}` : 'Lorem, ipsum dolor.'}</h1>
}

export default function HomePage() {
    const names = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet']

    return (
        <div>
            <Header title="Develop. Preview. Ship." />
            <ul>
                {names.map((name) => (
                    <li key={name}>{name}</li>
                ))}
            </ul>
            <LikeButton />
        </div>
    )
}
