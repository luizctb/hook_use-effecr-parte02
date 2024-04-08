/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client"

// useEffet vai fazer um efeito, ação
import { useEffect, useState } from "react";

function Base() {
    const [count, setCount] = useState(0);
    const [countB, setCountB] = useState(10);
    const [user, setUser] = useState(null);

    // 1- useEffect de utillização
    useEffect(() => {
        console.log("Roda a cada renderização");
    });

    // 2- array de dependência
    useEffect(() => {
        console.log("Só roda ao incrementar valor!");
    }, [count]);

    // 3- array de dependência vazio
    useEffect(() => {
        console.log("Só executa uma vez!");
    }, []);

    // 4-  clean up function - exemplo de um time

    useEffect(() => {
        const timer = setTimeout(() => {
            console.log(`O incrementador foi alterado ${count} vezes.`);
        }, 2000)

        return () => {
            clearTimeout(timer);
        }
    }, [count]);

    // 5- fetch com useEffect
    useEffect(() => {
        fetch("https://api.github.com/users/luizctb")
            .then((res) => res.json())
            //.then((json) => setUser(json));
            .then(data => setUser(data))
            .catch(error => console.error("Erro ao carregar dados do usuário:", error));
    }, []);        

    return(
        <div>
            <div>
                <button
                    onClick={() => setCount((prevCount) => prevCount + 1)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Renderizar
                </button>
                <p>{count}</p>
            </div>
            <div>
                <button
                    onClick={() => setCountB((prevCount) => prevCount + 1)}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                    RenderizarB
                </button>
                <p>{countB}</p>
            </div>
            {user && (
                <div>
                <p>Dados do Usuário:</p>   
                <h1>Nome: {user.name}</h1>
                <p>
                    Site: <a href={user.blog}>{user.blog}</a>
                </p>
                <img src={user.avatar_url} alt="Avatar do usuário" />
            </div>
            )}
        </div>
    );
}

export default Base;


// ###################################################################

// Quando a gente quer uma ação.

// function Base() {
//     const [count, setCount] = useState(0);

//     //1- useEffect de utillização
//     useEffect(() => {
//         console.log("Roda a cada renderização");
//     });   

//     return(
//         <div>            
//             <button 
//                 onClick={() => 
//                 setCount((prevCount) => prevCount + 1)} 
//                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//                 Renderizar
//             </button>           
//             <p>{count}</p>
//         </div>
//     );
// }

// export default Base;

// ###################################################################

// Quando a gente qer controlar a ação, usa o array de dependência, criar useEffect como se fosse o anterior, Pàra controlar a ação no array o satate de observação exeplo }, [count]);

// function Base() {
//     const [count, setCount] = useState(0);

//     // 1- useEffect de utillização
//     useEffect(() => {
//         console.log("Roda a cada renderização");
//     });

//     // 2 arry de dependência
//     useEffect(() => {
//         console.log("Só roda ao inrementar valor!");
//     }, [count]);

//     return(
//         <div>            
//             <button 
//                 onClick={() => 
//                 setCount((prevCount) => prevCount + 1)} 
//                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//                 Renderizar
//             </button>
//             <p>{count}</p>
//         </div>
//     );
// }

// export default Base;

// ###################################################################

// Para controle criar contador B (const [countB, setCountB] = useState(10);). Replica a div do button com modificações

// function Base() {
//     const [count, setCount] = useState(0);
//     const [countB, setCountB] = useState(10);

//     // 1- useEffect de utillização
//     useEffect(() => {
//         console.log("Roda a cada renderização");
//     });

//     // 2 arry de dependência
//     useEffect(() => {
//         console.log("Só roda ao inrementar valor!");
//     }, [count]);

//     return(
//         <div>
//             <div>
//                 <button
//                     onClick={() => setCount((prevCount) => prevCount + 1)}
//                     className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//                     Renderizar
//                 </button>
//                 <p>{count}</p>
//             </div>
//             <div>
//                 <button
//                     onClick={() => setCountB((prevCount) => prevCount + 1)}
//                     className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
//                     RenderizarB
//                 </button>
//                 <p>{countB}</p>
//             </div>
//         </div>
//     );
// }

// export default Base;

// ###################################################################

// 3 - array de dependencia vazio, nessa ação o useEffect só vai ser rodado quando a página é carregada. Usado para carregamento de dados externos uma api

// function Base() {
//     const [count, setCount] = useState(0);
//     const [countB, setCountB] = useState(10);

//     // 1- useEffect de utillização
//     useEffect(() => {
//         console.log("Roda a cada renderização");
//     });

//     // 2- array de dependência
//     useEffect(() => {
//         console.log("Só roda ao inrementar valor!");
//     }, [count]);

//     // 3- array de dependência vazio
//     useEffect(() => {
//         console.log("Só executa uma vez!")
//     }, []);

//     return(
//         <div>
//             <div>
//                 <button
//                     onClick={() => setCount((prevCount) => prevCount + 1)}
//                     className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//                     Renderizar
//                 </button>
//                 <p>{count}</p>
//             </div>
//             <div>
//                 <button
//                     onClick={() => setCountB((prevCount) => prevCount + 1)}
//                     className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
//                     RenderizarB
//                 </button>
//                 <p>{countB}</p>
//             </div>
//         </div>
//     );
// }

// export default Base;

// ###################################################################

// 4 - Clean up function, limpeza de função de memória. Quando o componente como button for clicado apenas uma vez, ou quando um componente for ecluído da tela. Resolver problemas de memória, consumo.

// function Base() {
//     const [count, setCount] = useState(0);
//     const [countB, setCountB] = useState(10);

//     // 1- useEffect de utillização
//     useEffect(() => {
//         console.log("Roda a cada renderização");
//     });

//     // 2- array de dependência
//     useEffect(() => {
//         console.log("Só roda ao incrementar valor!");
//     }, [count]);

//     // 3- array de dependência vazio
//     useEffect(() => {
//         console.log("Só executa uma vez!");
//     }, []);

//     // 4-  clean up function - exemplo de um time

//     useEffect(() => {
//         const timer = setTimeout(() => {
//             console.log(`O incrementador foi alterado ${count} vezes.`);
//         }, 2000)

//         return () => {
//             clearTimeout(timer);
//         }
//     }, [count]);

//     return(
//         <div>
//             <div>
//                 <button
//                     onClick={() => setCount((prevCount) => prevCount + 1)}
//                     className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//                     Renderizar
//                 </button>
//                 <p>{count}</p>
//             </div>
//             <div>
//                 <button
//                     onClick={() => setCountB((prevCount) => prevCount + 1)}
//                     className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
//                     RenderizarB
//                 </button>
//                 <p>{countB}</p>
//             </div>
//         </div>
//     );
// }

// export default Base;

// ###################################################################

// 5- fectch, consumir um dado de API de terceiros ou nossa de um componente


// function Base() {
//     const [count, setCount] = useState(0);
//     const [countB, setCountB] = useState(10);
//     const [user, setUser] = useState()

//     // 1- useEffect de utillização
//     useEffect(() => {
//         console.log("Roda a cada renderização");
//     });

//     // 2- array de dependência
//     useEffect(() => {
//         console.log("Só roda ao incrementar valor!");
//     }, [count]);

//     // 3- array de dependência vazio
//     useEffect(() => {
//         console.log("Só executa uma vez!");
//     }, []);

//     // 4-  clean up function - exemplo de um time

//     useEffect(() => {
//         const timer = setTimeout(() => {
//             console.log(`O incrementador foi alterado ${count} vezes.`);
//         }, 2000)

//         return () => {
//             clearTimeout(timer);
//         }
//     }, [count]);

//     // 5- fetch com useEffect
//     useEffect(() => {
//         fetch("https://api.github.com/users/luizctb")
//             .then((res) => res.json())
//             .then((json) => setUser(json));
//     }, []);        

//     return(
//         <div>
//             <div>
//                 <button
//                     onClick={() => setCount((prevCount) => prevCount + 1)}
//                     className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//                     Renderizar
//                 </button>
//                 <p>{count}</p>
//             </div>
//             <div>
//                 <button
//                     onClick={() => setCountB((prevCount) => prevCount + 1)}
//                     className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
//                     RenderizarB
//                 </button>
//                 <p>{countB}</p>
//             </div>             
//         </div>
//     );
// }

// export default Base;

// ###################################################################


