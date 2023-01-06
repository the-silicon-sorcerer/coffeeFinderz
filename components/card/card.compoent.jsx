import Link from "next/link";
import Image from "next/image";

const Card = ({ image, name, link }) => {
    return (
        <div>
            <Image className="img" src={image} width='3456' height='1944' />
            <h2>{name}</h2>
            <Link href={link}><button></button></Link>
        </div>
    )
}

export default Card;