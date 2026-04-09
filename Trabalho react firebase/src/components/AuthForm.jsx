const AuthForm = ({
  email,
  setEmail,
  password,
  setPassword,
  isLogin,
  setIsLogin,
  handleLogin,
  handleRegister,
  loading,
  error 
}) => {
  return (
    <div className="card">

      <h2>{isLogin ? "Login" : "Cadastro"}</h2>

      <p className="subtitle">
        {isLogin
          ? "Acesse sua conta para continuar"
          : "Crie sua conta para começar"}
      </p>

      <input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={isLogin ? handleLogin : handleRegister}
        disabled={loading}
      >
        {loading
          ? "Carregando..."
          : isLogin
          ? "Entrar"
          : "Cadastrar"}
      </button>

      {error && <p className="error">{error}</p>}

      <p className="switch-text">
        {isLogin ? "Não possui conta?" : "Já possui conta?"}
        <span onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? " Criar conta" : " Fazer login"}
        </span>
      </p>

    </div>
  );
};

export default AuthForm;