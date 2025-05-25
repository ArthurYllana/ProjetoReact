export default function Avatar({ person, size }) {
    const avatar = `https://i.imgur.com/${person.imageId}.jpg`;
    const description = person.name;
    return (
        <img
            className="avatar"
            src={avatar}
            alt={description}
            width={size}
            height={size}
        />
    );
}