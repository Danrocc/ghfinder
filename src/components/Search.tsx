type SearchProps = {
    loadUser: (userName: string) => Promise<void>;
};
import {BsSearch} from 'react-icons/bs';
import {useState, KeyboardEvent} from 'react'
import classes from "./Search.module.css"

const search = ({loadUser}: SearchProps) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [userName, setUserName] = useState("");

    const handleKeyDown = (e: KeyboardEvent) => {
        if(e.key === "Enter") {
            loadUser(userName)
        }
    };
  return (
    <div className={classes.search}>
      <h2>Busque um usuário:</h2>
      <p>Seus melhores repositórios:</p>
      <div className={classes.search_container}>
        <input type="text" 
        placeholder="Digite o nome do usuário"
        onChange={(e)=>setUserName(e.target.value)}
        onKeyDown={handleKeyDown} />
        <button onClick={() => loadUser(userName)}>
            <BsSearch/>
        </button>
      </div>
    </div>
  )
}

export default search
