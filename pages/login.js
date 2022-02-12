import '../styles/Home.module.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');

    return (
        <div className="container">
            <div className="inner-home">
                <div className="left">
                    <div className="inner">
                        <h1>mybook</h1>
                        <h3>
                            mybook helps you connect and share with the people
                            in your life.
                        </h3>
                    </div>
                </div>
                <div className="right">
                    <div className="inner-win">
                        <h2>Login</h2>
                        <form>
                            <TextField
                                variant="outlined"
                                label="Email address or Username"
                                size="medium"
                                fullWidth
                                style={{ margin: '2vh 0' }}
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                            />
                            <TextField
                                variant="outlined"
                                label="Password"
                                size="medium"
                                fullWidth
                                type="password"
                                style={{ margin: '2vh 0' }}
                                onChange={(e) => setPw(e.target.value)}
                                value={pw}
                            />
                            <Button
                                size="large"
                                variant="contained"
                                fullWidth
                                color="primary"
                            >
                                Login
                            </Button>
                            <div
                                style={{
                                    width: '100%',
                                    height: '1px',
                                    margin: '2vh 0',
                                    background: 'rgb(230,230,230)',
                                }}
                            ></div>
                            <div
                                style={{
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}
                            >
                                <Button
                                    size="medium"
                                    variant="contained"
                                    style={{
                                        background: 'rgb(32, 148, 80)',
                                        color: 'white',
                                    }}
                                >
                                    Create new account
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default LoginPage;
