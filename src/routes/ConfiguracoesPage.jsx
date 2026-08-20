import './style/Configuracoes.css';

//icons
import { IconUser, IconCheck } from '@tabler/icons-react';


//Context
import { useContext } from 'react';
import { UserContext } from '../Context/userContext';

const ConfiguracoesPage = () => {
    const { userName, setUserName, icon, setIcon, saveProfile } = useContext(UserContext)

    const avatars = [
        'https://i.pravatar.cc/150?img=1',
        'https://i.pravatar.cc/150?img=5',
        'https://i.pravatar.cc/150?img=8',
        'https://i.pravatar.cc/150?img=12',
        'https://i.pravatar.cc/150?img=15',
    ];

    //Salvando e verificando UserName
    const saveUserName = (username) => {

        if (username.length > 3)

            setUserName(username)
    }


    return (
        <main className="config-page">

            <div className="config-header">
                <IconUser size={80} color='#fabc01' />
                <div>
                    <h1>Configurações</h1>
                    <p>Personalize seu perfil</p>
                </div>
            </div>

            <form onSubmit={saveProfile} className="profile-config">

                <div className="profile-preview">
                    <img
                        src={icon}
                        alt="Avatar do usuário"
                    />

                    <div>
                        <h2>Seu perfil</h2>
                        <p>Escolha como você será exibido</p>
                    </div>
                </div>

                <div className="form-group">

                    <label htmlFor="username">
                        Nome de usuário
                        <p>3 caracteris ou mais</p>
                    </label>

                    <input
                        id="username"
                        type="text"
                        placeholder="Digite seu nome..."
                        onChange={(e) => saveUserName(e.target.value)}
                    />

                </div>

                <div className="form-group">

                    <label>
                        Escolha seu avatar
                    </label>

                    <div className="avatars">

                        {avatars.map((avatar, index) => (
                            <button
                                type="button"
                                className="avatar-option"
                                key={index}
                                onClick={() => setIcon(avatar)}
                            >
                                <img
                                    src={avatar}
                                    alt={`Avatar ${index + 1}`}

                                />
                            </button>
                        ))}

                    </div>

                </div>

                <button type='submit' className="save-button">
                    <IconCheck size={20} />
                    Confirmar alterações
                </button>

            </form>

        </main>

    )
}

export default ConfiguracoesPage