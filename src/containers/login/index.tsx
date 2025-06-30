import { Button } from '../../components/button';
import { api } from '../../services/api';
import styles from './styles.module.css';

import { GithubLogoIcon } from '@phosphor-icons/react';

export function Login() {
  async function handleAuth() {
    const { data } = await api.get('/auth');

    window.location.href = data.redirectUrl;
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Entre com</h1>
        <Button onClick={handleAuth}>
          <GithubLogoIcon />
          GitHub
        </Button>
        <p>
          Ao entrar, eu concordo com o Termos de Serviço e Políticas de
          Privacidade.
        </p>
      </div>
    </div>
  );
}
