import './PackingList.css'

function Item({ name, isPacked}) {
    let itemContent = name;
    if (isPacked) {
        itemContent = (
            <del>
                {name + '✔️'}
            </del>
        );
    }
    return (
        <li className="item">
            {itemContent}
        </li>
    );
};

export default function PackingList() {
    return (
        <section className="packingList">
            <h1>Sally Ride's Packing List</h1>
            <ul>
                <Item 
                    isPacked={false}
                    name="Space suit"
                />
                <Item 
                    isPacked={true}
                    name="Helmet with a golden leaf"
                />
                <Item 
                    isPacked={true}
                    name="Photo of Tam"
                />
            </ul>
        </section>
    );
}