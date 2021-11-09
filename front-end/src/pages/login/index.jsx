import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Axios } from '../../service/Axios';
import { Container, Form, RightSide } from './styled';

export default function LoginPage() {
    const [user, setUser] = useState('');
    const [password, setPaswword] = useState('');
    const [error, setError] = useState({});

    const history = useHistory();

    const handleSubmit = async (event) => {
        event.preventDefault();
        let err = {}

        if (!user) {
            err.user = true;
        }
        if (!password) {
            err.password = true;
        }
        setError(err);
        const response = await Axios.post('/login', { user, password });
        if (response.status === 200) {
            console.log(response)
            history.push('/movies');
        }

    }
    return (
        <Container>
            <div className="movie-banner">
                <img src="img/toy.jpg" alt="" />
                <div className="title">
                    <h1>Catálogo, do seu jeito.</h1>
                </div>
            </div>
            <RightSide >
                <Form onSubmit={handleSubmit}>
                    <h1>Catalogare</h1>
                    <div className="main-form">
                        <div className="input">
                            <input type="text" autoComplete='false' placeholder="Usúario" value={user} onChange={e => setUser(e.target.value)} />
                            {error.user ? <span className="error-field">Usuário inválido</span> : null}
                        </div>
                        <div className="input">
                            <input type="password" placeholder="Sua senha" value={password} onChange={e => setPaswword(e.target.value)} />
                            {error.password ? <span className="error-field">Senha inválida</span> : null}
                        </div>
                        <button type="submit">Login</button>
                    </div>
                </Form>
            </RightSide>
        </Container>
    );
}