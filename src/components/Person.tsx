type Props = {
    name: string;
    avatar?: string;
    roles: string[];
    ranking: number;
    fortuna: number;
}

export const Person = ({
    name, 
    avatar = 'https://static.vecteezy.com/ti/vetor-gratis/p1/9292244-default-avatar-icon-vector-of-social-media-user-vetor.jpg',
    roles,
    ranking,
    fortuna, 
}: Props) => {

    return(
        <div className="border-cyan-500 border p-2 rounded-lg bg-black flex flex-col justify-center items-center text-center m-2">
            <h1 className="text-3xl font-bold">{name}</h1>
            <img className="w-[400px] h-[450px] object-top object-cover  p-3"
                src={avatar}
                alt={name}
            
                />
            <p className="text-lg font-bold font-sans pt-4"> Posição: {ranking}</p>
            <p className="text-lg font-bold font-sans pt-4"> Fortuna: US$ {fortuna} Bilhões</p>
            <ul className="m-2">
                <li>{roles[0]}</li>
                <li>{roles[1]}</li>
                <li>{roles[2]}</li>
            </ul>
       </div>
    )
}

