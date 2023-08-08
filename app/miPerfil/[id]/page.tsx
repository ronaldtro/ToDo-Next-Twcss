
interface pageParams{
    id: number
}

export default function page({params}: {params: pageParams}){
    return (
        <>
            <h1>Hola, Soy mi perfil. Enviaste por url: {params.id}</h1>
        </>
    );
};