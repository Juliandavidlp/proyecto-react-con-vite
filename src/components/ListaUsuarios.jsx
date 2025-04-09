function ListaUsuarios()
{
    const usuarios = ['Ana', 'Nicolás', 'Julián', 'María'] //Un array en JS
    return (
        <ul>
            {usuarios.map(usuario =>(
                <li key={usuario}>{usuario}</li>
            ))}
        </ul>
    );
}

export default ListaUsuarios;